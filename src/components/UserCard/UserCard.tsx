import React, { FC } from "react";
import styles from "./UserCard.module.scss";
import { LocalGithubUser } from "types";
import { UserStat } from "components/UserStat";

export interface UserCardProps extends LocalGithubUser {}

export const UserCard: FC<UserCardProps> = (props) => {
  const { followers, following, repos } = props;

  return (
    <div className={styles.userCard}>
      <UserStat followers={followers} following={following} repos={repos} />
    </div>
  );
};
