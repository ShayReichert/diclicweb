import styles from "./SectionSteps.module.scss";
import { rocaOne } from "../../../styles/fonts/font-face";
import ItemStep from "../ItemStep/ItemStep";

export default function SectionSteps({ data }: StepsProps) {
  const { steps } = data;

  return (
    <section className={styles["section-steps"]}>
      <div className={styles["section-content"]}>
        <h2 className={rocaOne.className}>
          Les 4 grandes<span> étapes </span>d’un projet
        </h2>

        <div className={styles["steps-wrapper"]}>
          {steps.map((step, index) => {
            const position = index + 1;
            const isEven = position % 2 === 0;
            return <ItemStep key={index} isEven={isEven} stepNumber={position} {...step} />;
          })}
        </div>
      </div>
    </section>
  );
}
