import React, { useEffect, useState } from "react";
import styles from "./ThemeSwitcher.module.scss";
import { RiSunFill as SunIcon } from "react-icons/ri";
import { RiMoonFill as MoonIcon } from "react-icons/ri";

export const ThemeSwitcher: React.FC = () => {
  const [isDark, setDark] = useState(true);
  const themeText = isDark ? "Light" : "Dark";
  const ThemeIcon = isDark ? MoonIcon : SunIcon;

  useEffect(() => {
    document.body.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div className={styles.switcher} onClick={() => setDark(!isDark)}>
      <span>{themeText}</span>
      <ThemeIcon size={26} className={styles.icon} />
    </div>
  );
};
