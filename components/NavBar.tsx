import React from "react";
import Link from "next/link";
import styles from "../styles/navigation.module.css";
interface Props {}

const LeftSide: React.FC = () => {
  return (
    <div className={styles.left}>
      {/* About */}
      <Link href="/about">
        <a data-cy="nav-item" className={styles.text}>
          About
        </a>
      </Link>

      {/* Store */}
      <a data-cy="nav-item" className={styles.text}>
        Store
      </a>
    </div>
  );
};

const RightSide: React.FC = () => {
  return (
    <div className={styles.left}>
      {/* About */}
      <Link href="/about">
        <a data-cy="nav-item" className={styles.text}>
          Gmail
        </a>
      </Link>

      {/* Store */}
      <a data-cy="nav-item" className={styles.text}>
        Images
      </a>
    </div>
  );
};

const NavBar: React.FC<Props> = (props) => {
  return (
    <div className={styles.container}>
      {/* Left side of the nav bar */}
      <LeftSide />

      {/* Spacer */}
      <div />

      {/* Right side of the nav bar */}

      <RightSide />
    </div>
  );
};

export default NavBar;
