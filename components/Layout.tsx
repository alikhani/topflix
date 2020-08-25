import Head from "next/head";

import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Topflix</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Presenting 100 most popular movies on TMDB."
        />
        <meta name="theme-color" content="#0b0c10" />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
          rel="stylesheet"
        />
      </Head>

      <div className={styles.header}>
        <div className={styles.fixed}>
          <div className={styles.logo}>Topflix</div>
        </div>
      </div>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
