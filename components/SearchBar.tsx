import React from "react";

import { faSearch, faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../styles/SearchBar.module.css";
import { useRouter } from "next/router";

interface Props {}

const SearchBar: React.FC<Props> = (props) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const router = useRouter();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const term = inputRef.current.value;
        if (!term) return;
        router.push(`/search?q=${term}`);
      }}
    >
      <div className={styles.flexCenter}>
        <div className={styles.search}>
          <FontAwesomeIcon
            icon={faSearch}
            height="15"
            width="15"
            className={styles.searchIcon}
          />
          <input data-cy="search-input" ref={inputRef} type="search"></input>
          <FontAwesomeIcon
            icon={faMicrophone}
            height="20"
            width="20"
            className={styles.microphoneIcon}
          />
        </div>
      </div>
      <div className={styles.flexCenter}>
        <div className={styles.buttonContainer}>
          <button data-cy="nav-item" type="submit">
            Google Search
          </button>
          <button
            onClick={() => {
              router.push("/search?q=Christopher%20Demahy");
            }}
          >
            I'm Feeling Lucky
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
