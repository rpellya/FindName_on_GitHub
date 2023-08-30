export type LocalGithubUser = {
  login: string;
  id: number;
  avatar: string;
  name: string;
  company: string | null;
  bio: string;
  location: string;
  twitter: string | null;
  repos: number;
  followers: number;
  following: number;
  created: string;
};

export type GithubUser = {
  login: string;
  id: number;
  avatar_url: string;
  name: string;
  company: string;
  bio: string;
  location: string;
  twitter_username: string;
  public_repos: string;
  followers: number;
  following: number;
  created_at: string;
};

export type GithubError = {
  message: string;
  documentation_url: string;
};
