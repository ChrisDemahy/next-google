import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

import styles from "../styles/Header.module.css";
import HeaderOptions from "./HeaderOptions";

interface Props {
  isMobile: boolean;
  isTablet: boolean;
  term: string;
}

const Header: React.FC<Props> = ({ isMobile, isTablet, term }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const router = useRouter();

  return (
    <header className={styles.header}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const term = inputRef.current.value;
          if (!term) return;
          router.push(`/search?q=${term}`);
        }}
        className={isMobile ? styles.mobileHeaderForm : styles.headerForm}
      >
        <div className={styles.logo}>
          {isMobile ? <div data-cy="spacer" /> : ""}
          <Image
            src="/Google_logo.svg"
            width="100"
            height="50"
            layout="intrinsic"
            onClick={() => router.push("/")}
          />
          {isMobile ? <div /> : ""}
        </div>
        <div className={styles.searchContainer}>
          {console.log(term)}
          <input
            defaultValue={term}
            ref={inputRef}
            type="search"
            className={styles.searchInput}
          />
          <FontAwesomeIcon
            icon={faTimes}
            height="15"
            width="15"
            className={styles.timesIcon}
          />
          <button type="submit" className={styles.searchButton}>
            <FontAwesomeIcon
              icon={faSearch}
              height="15"
              width="15"
              className={styles.searchIcon}
            />
          </button>
        </div>
        <div style={{ flexGrow: 1 }} />
      </form>
      <HeaderOptions isTablet={isTablet} />
    </header>
  );
};

export default Header;
