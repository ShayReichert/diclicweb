"use client";

import styles from "./SectionSteps.module.scss";
import { rocaOne } from "../../../styles/fonts/font-face";
import ItemStep from "../ItemStep/ItemStep";
import useScrollFadeIn from "@/app/utils/useScrollFadeIn";

export default function SectionSteps({ data }: StepsProps) {
  const { steps } = data;
  const fadeIn = useScrollFadeIn();

  return (
    <section className={styles["section-steps"]}>
      <div className={styles["section-content"]}>
        <div className={styles["title-wrapper"]}>
          <h2 className={rocaOne.className} ref={fadeIn.ref} style={fadeIn.style}>
            Les 4 grandes<span> étapes </span>d’un projet
          </h2>
        </div>

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
