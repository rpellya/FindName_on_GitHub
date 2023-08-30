import React, { FC, ReactNode } from "react";
import styles from "./Container.module.scss";

export interface ContainerProps {
  children: ReactNode;
}

export const Container: FC<ContainerProps> = ({ children }) => (
  <div className={styles.container}>{children}</div>
);
