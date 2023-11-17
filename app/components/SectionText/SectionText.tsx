import styles from "./SectionText.module.scss";

export default function SectionText({ data }: SectionTextProps) {
  const { text } = data;

  return (
    <section className={styles["section-text"]}>
      <div className={styles["content-wrapper"]}>
        {text.map((paragraph, index) => (
          <div key={index} className={styles["text-wrapper"]}>
            {paragraph}
          </div>
        ))}
      </div>
    </section>
  );
}
