import { useSWRInfinite } from "swr";

import { MovieCard } from "./MovieCard";
import Loader from "./Loader";
import styles from "../styles/Movies.module.css";

const fetcher = (url) => fetch(url).then((res) => res.json());

const getKey = (pageIndex, previousPageData) => {
  if (previousPageData && !previousPageData.length) return null; // reached the end
  return `/api/movies?page=${pageIndex ? pageIndex + 1 : 1}`; // SWR key
};

export default function Movies() {
  // Haven't worked with SWR before so wanted to try it out.
  const { data, error, size, setSize } = useSWRInfinite(getKey, fetcher, {
    initialSize: 1,
  });
  if (error)
    return (
      <div className={styles.error}>
        <h2>Something went wrong, try again.</h2>
        <button onClick={() => setSize(size)}>try again</button>
      </div>
    );
  if (!data)
    return (
      <div className="centered">
        <Loader />
      </div>
    );

  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.length === 0;
  const reachedEnd = isEmpty || size === 5;

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>100 most popular movies</h1>
      <div className={styles.grid}>
        {data.map((movies) => {
          // `data` is an array of each page's API response.
          if (Array.isArray(movies)) {
            // Making sure that the API is responding with an array
            return movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ));
          }
        })}
      </div>
      {reachedEnd && !isLoadingMore ? (
        <div className={styles.end}>No more movies</div>
      ) : (
        <button
          onClick={() => setSize(size + 1)}
          className={styles.button}
          disabled={isLoadingMore}
        >
          {isLoadingMore ? <Loader /> : "Load more"}
        </button>
      )}
    </div>
  );
}
