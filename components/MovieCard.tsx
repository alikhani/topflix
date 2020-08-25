import * as React from "react";
import { useImageLoader, ImageComponent } from "./Image";
import styles from "../styles/MovieCard.module.css";

interface Movie {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  overview: string;
  popularity: number;
  poster_path?: string;
}

interface MovieCardProps {
  movie: Movie;
}

const truncate = (string: string, maxLength = 150) => {
  // Just to control the size. Only use the first sentence and make sure the sentence isn't huge.
  // Could also make sure that the first sentence isn't too small.
  if (!string) return "Missing description";
  const sentences = string.split(".");
  if (sentences[0].length > maxLength)
    return `${sentences[0].substring(0, maxLength)}...`;
  return sentences[0];
};

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const [image, status] = useImageLoader(
    `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
  );
  const truncateOverview = truncate(movie.overview);

  return (
    <div className={styles.card}>
      <div className={styles.poster}>
        <ImageComponent image={image} status={status} title={movie.title} />
      </div>
      <div className={styles.meta}>
        <h2 className={styles.title}>{movie.title}</h2>
        <span className={styles.popularity}>
          Popularity: {movie.popularity}
        </span>
        <p className={styles.overview}>{truncateOverview}</p>
      </div>
    </div>
  );
};
