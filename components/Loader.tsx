import styles from "../styles/Loader.module.css";

export default function Loader({ dark = false }) {
  return <div className={`${styles.loader} ${dark && styles.dark_loader}`} />;
}
