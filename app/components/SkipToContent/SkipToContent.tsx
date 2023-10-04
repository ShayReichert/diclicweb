import styles from "./SkipToContent.module.scss";

export default function SkipToContent() {
  return (
    <a href="#main" className={styles["skip-to-content"]}>
      Aller au contenu
    </a>
  );
}
