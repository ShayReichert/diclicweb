import styles from "./SectionText.module.scss";

export default function SectionText({ data }: SectionTextProps) {
  const { text } = data;

  return (
    <section className={styles["section-text"]}>
      <div className={styles["content-wrapper"]}>
        <div className={styles["text-wrapper"]}>{text}</div>
      </div>
    </section>
  );
}
