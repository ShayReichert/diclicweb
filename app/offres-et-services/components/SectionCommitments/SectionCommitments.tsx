import styles from "./SectionCommitments.module.scss";
import { rocaOne } from "../../../styles/fonts/font-face";
import ItemCommitment from "../ItemCommitment/ItemCommitment";

export default function SectionCommitments({ data }: SectionCommitmentsProps) {
  const { commitments } = data;

  return (
    <section className={styles["section-commitments"]}>
      <div className={styles["section-content"]}>
        <h2 className={rocaOne.className}>Mes Engagements</h2>
        <div className={styles["commitments-wrapper"]}>
          {commitments.map((commitment, key) => (
            <ItemCommitment key={key} {...commitment} />
          ))}
        </div>
      </div>
    </section>
  );
}
