import React, { FC } from "react";
import styles from "./UserCard.module.scss";
import { LocalGithubUser } from "types";
import { UserStat } from "components/UserStat";
import { UserTitle } from "components/UserTitle";
import { UserInfo } from "components/UserInfo";

export interface UserCardProps extends LocalGithubUser {}

export const UserCard: FC<UserCardProps> = (props) => {
	const {
		followers,
		following,
		repos,
		login,
		created,
		name,
		avatar,
		bio,
		blog,
		twitter,
		location,
		company,
	} = props;

	return (
		<div className={styles.userCard}>
			<img src={avatar} alt={login} className={styles.avatar} />
			<UserTitle created={created} name={name} login={login} />
			<p className={`${styles.bio}${bio ? "" : ` ${styles.empty}`}`}>
				{bio || "This profile hasn't bio"}
			</p>
			<UserStat followers={followers} following={following} repos={repos} />
			<UserInfo
				blog={blog}
				company={company}
				location={location}
				twitter={twitter}
			/>
		</div>
	);
};
