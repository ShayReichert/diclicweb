"use client";

import styles from "./SectionCommitments.module.scss";
import { rocaOne } from "../../../styles/fonts/font-face";
import ItemCommitment from "../ItemCommitment/ItemCommitment";
import useScrollFadeIn from "@/app/utils/useScrollFadeIn";

export default function SectionCommitments({ data }: SectionCommitmentsProps) {
  const { commitments } = data;
  const fadeIn = useScrollFadeIn();

  return (
    <section className={styles["section-commitments"]}>
      <div className={styles["section-content"]}>
        <div className={styles["title-wrapper"]}>
          <h2 className={rocaOne.className} ref={fadeIn.ref} style={fadeIn.style}>
            Mes Engagements
          </h2>
        </div>
        <div className={styles["commitments-wrapper"]}>
          {commitments.map((commitment, index) => (
            <ItemCommitment key={index} {...commitment} />
          ))}
        </div>
      </div>
    </section>
  );
}
