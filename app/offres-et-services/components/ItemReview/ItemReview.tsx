import styles from "./ItemReview.module.scss";
import Image from "next/image";
// import { rocaOne } from "../../../styles/fonts/font-face";

export default function ItemReview({ author, image, image_alt, notation, text }: ItemReviewProps) {
  return (
    <div className={styles["review"]}>
      <div className={styles["review-content"]}>
        <div className={styles["top"]}>
          <div className={styles["image-wrapper"]}>
            <Image src={image} alt={image_alt ? image_alt : ""} fill sizes="(max-width: 767px) 50vw, 25vw" placeholder="blur" blurDataURL={image} />
          </div>
          <div className={styles["author-wrapper"]}>
            <div className={styles["author"]}>{author}</div>
            {/* Make a fonction who  */}
            <div className={styles["notation"]}>
              {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                  <span key={index} className={`${styles["star"]} ${index <= notation ? "visible" : styles["invisble"]}`}>
                    ⭐️
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        <div className={styles["bottom"]}>
          <div className={styles["text"]}>{text}</div>
        </div>
      </div>
    </div>
  );
}
