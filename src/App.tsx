import React, { useState } from "react";
import "./App.css";
import { Container } from "components/Container";
import { TheHeader } from "components/TheHeader";
import { Search } from "components/Search";
import { UserCard } from "components/UserCard";
import { GithubError, GithubUser, LocalGithubUser } from "types";
import { isGithubUser } from "utils/typeguards";
import { extractLocalGithubUser } from "utils/extract-local-user";

const BASE_URL = "https://api.github.com/users/";

function App() {
	const [user, setUser] = useState<LocalGithubUser | null>();

	const fetchUser = async (username: string) => {
		const url = BASE_URL + username;

		const res = await fetch(url);
		const user = (await res.json()) as GithubUser | GithubError;

		if (isGithubUser(user)) {
			setUser(extractLocalGithubUser(user));
		} else {
			setUser(null);
		}
	};

	return (
		<Container>
			<TheHeader />
			<Search hasError={!user} onSubmit={fetchUser} />
			{user && <UserCard {...user} />}
		</Container>
	);
}

export default App;
