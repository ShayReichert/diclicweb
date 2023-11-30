"use client";

import styles from "./SectionReviews.module.scss";
import { rocaOne } from "../../../styles/fonts/font-face";
import ItemReview from "../ItemReview/ItemReview";
import Button from "@/app/components/Button/Button";
import useScrollFadeIn from "@/app/utils/useScrollFadeIn";

export default function SectionReviews({ data }: SectionReviewsProps) {
  const { reviews } = data;
  const fadeIn = useScrollFadeIn();

  return (
    <section className={styles["section-reviews"]}>
      <div className={styles["section-content"]}>
        <div className={styles["title-wrapper"]}>
          <h2 className={rocaOne.className} ref={fadeIn.ref} style={fadeIn.style}>
            ✨ Témoignages ✨
          </h2>
        </div>
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
