import React from "react";

import {
  faBook,
  faImage,
  faNewspaper,
  faSearch,
  faTimes,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useMediaQuery } from "react-responsive";

import styles from "../styles/HeaderOptions.module.css";

interface Props {
  isTablet: boolean;
}

const HeaderOptions: React.FC<Props> = ({ isTablet }) => {
  return (
    <div
      className={isTablet ? styles.mobileHeaderOptions : styles.headerOptions}
    >
      <div className={styles.searchContexts}>
        <div className={styles.primary}>
          <FontAwesomeIcon
            className={styles.contextIcon}
            icon={faSearch}
            height="12"
            width="12"
          />
          {isTablet ? "" : "All"}
        </div>
        <div>
          <FontAwesomeIcon
            className={styles.contextIcon}
            icon={faNewspaper}
            height="12"
            width="12"
          />
          {isTablet ? "" : "News"}
        </div>
        <div>
          <FontAwesomeIcon
            className={styles.contextIcon}
            icon={faBook}
            height="12"
            width="12"
          />
          {isTablet ? "" : "Books"}
        </div>
        <div>
          <FontAwesomeIcon
            className={styles.contextIcon}
            icon={faVideo}
            height="12"
            width="12"
          />
          {isTablet ? "" : "Videos"}
        </div>
        <div>
          <FontAwesomeIcon
            className={styles.contextIcon}
            icon={faImage}
            height="12"
            width="12"
          />
          {isTablet ? "" : "Images"}
        </div>
      </div>
      <div />
      <div className={styles.searchSettings}>
        <div>Settings</div>
        <div>Tools</div>
      </div>
    </div>
  );
};

export default HeaderOptions;
