import ItemQuinconce from "../ItemQuinconce/ItemQuinconce";
import styles from "./SectionQuinconces.module.scss";

export default function SectionQuinonces({ data }: SectionQuinconcesProps) {
  const { quinconces } = data;

  return (
    <section className={styles["section-projects"]}>
      <div className={styles["section-content"]}>
        <div className={styles["quinconces-wrapper"]}>
          {quinconces.map((quinconce, index) => {
            const position = index + 1;
            const isEven = position % 2 === 0;
            return <ItemQuinconce key={index} {...quinconce} isEven={isEven} />;
          })}
        </div>
      </div>
    </section>
  );
}
