import React from "react";
import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import { useRouter } from "next/router";

// import styles from "../styles/SearchBar.module.css";
import styles from "../styles/Home.module.css";

export default function Home() {
  const router = useRouter();
  const inputRef = React.useRef<HTMLInputElement>(null);
  const onSubmit = () => {};
  return (
    <div>
      <Head>
        <title>Google</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/G_Logo.svg" />
      </Head>
      <div className={styles.container}>
        <NavBar />

        <main className={styles.main}>
          {/* Main Google Logo */}
          <Image
            width="100"
            height="100"
            layout="intrinsic"
            src="/Google_logo.svg"
          />

          {/* Search Box */}
          <SearchBar />
        </main>

        <footer className={styles.footer}></footer>
      </div>
    </div>
  );
}
