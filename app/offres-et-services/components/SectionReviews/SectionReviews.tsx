import styles from "./SectionReviews.module.scss";
import { rocaOne } from "../../../styles/fonts/font-face";
import ItemReview from "../ItemReview/ItemReview";
import Button from "@/app/components/Button/Button";

export default function SectionReviews({ data }: SectionReviewsProps) {
  const { reviews } = data;

  return (
    <section className={styles["section-reviews"]}>
      <div className={styles["section-content"]}>
        <h2 className={rocaOne.className}>✨ Vos avis ✨</h2>
        <div className={styles["reviews-wrapper"]}>
          {reviews.map((review, index) => (
            <ItemReview key={index} {...review} />
          ))}
        </div>

        <div className={styles["projects-cta"]}>
          <Button text="Voir&nbsp;tous&nbsp;les&nbsp;projets" href="/realisations" />
        </div>
      </div>
    </section>
  );
}
