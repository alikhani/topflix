import styles from "../styles/Home.module.css";

export default function Home({ changeStart, started }) {
  return (
    <div className="centered">
      <h1 className={styles.title}>Welcome to Topflix</h1>

      <p className={styles.description}>
        Where you can find the most popular movies on{" "}
        <a href="https://www.themoviedb.org/">TMDB!</a>
      </p>

      {!started && (
        <button className={styles.button} onClick={changeStart}>
          <h2>Load movie list &rarr;</h2>
          <p className={styles.button_description}>
            Get started and load the movie list.
          </p>
        </button>
      )}
    </div>
  );
}
