import React, { FC } from "react";
import styles from "./UserInfo.module.scss";
import { LocalGithubUser } from "types";
import { InfoItem, InfoItemProps } from "components/InfoItem";
import { FaCity as CompanyIcon } from "react-icons/fa";
import { FaTwitter as TwitterIcon } from "react-icons/fa";
import { BsFillGeoAltFill as LocationIcon } from "react-icons/bs";
import { AiOutlineLink as BlogIcon } from "react-icons/ai";

export interface UserInfoProps
	extends Pick<LocalGithubUser, "blog" | "company" | "location" | "twitter"> {}

export const UserInfo: FC<UserInfoProps> = ({
	blog,
	company,
	location,
	twitter,
}) => {
	const items: InfoItemProps[] = [
		{
			icon: <LocationIcon />,
			text: location,
		},
		{
			icon: <BlogIcon />,
			text: blog,
			isLink: true,
		},
		{
			icon: <TwitterIcon />,
			text: twitter,
		},
		{
			icon: <CompanyIcon />,
			text: company,
		},
	];

	return (
		<div className={styles.userInfo}>
			{items.map((item, index) => (
				<InfoItem key={index} {...item} />
			))}
		</div>
	);
};
