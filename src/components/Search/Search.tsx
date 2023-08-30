import React, { FC, useRef } from "react";
import { RiSearchLine as SearchIcon } from "react-icons/ri";
import styles from "./Search.module.scss";
import { Button } from "components/Button";

export interface SearchProps {
  hasError: boolean;
  onSubmit: (text: string) => void;
}

export const Search: FC<SearchProps> = ({ hasError, onSubmit }) => {
  const searchRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const text = searchRef.current ? searchRef.current.value : "";

    if (text) {
      onSubmit(text);
      if (searchRef.current) searchRef.current.value = "";
    }
  };

  return (
    <form onSubmit={handleSubmit} autoComplete={"off"}>
      <div className={styles.search}>
        <label htmlFor={"search"} className={styles.label}>
          <SearchIcon cursor={"default"} size={26} color={"#0079ff"} />
        </label>
        <input
          ref={searchRef}
          type={"text"}
          className={styles.textField}
          id={"search"}
          name={"username"}
          placeholder={"Search GitHub username..."}
        />
        {hasError && <div className={styles.error}>No result</div>}
        <Button>Search</Button>
      </div>
    </form>
  );
};
