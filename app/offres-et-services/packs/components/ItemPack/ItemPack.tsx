import Image from "next/image";
import styles from "./ItemPack.module.scss";
import { rocaOne } from "../../../../styles/fonts/font-face";
import Button from "@/app/components/Button/Button";

export default function ItemPack({ title, price, promotion, text, anchor, image, image_alt }: ItemPackProps) {
  return (
    <div id={anchor} className={`${styles.pack} ${anchor ? styles[anchor] : ""}`}>
      <div className={styles["pack-content"]}>
        <div className={styles["top"]}>
          <div className={styles["image-wrapper"]}>
            <Image src={image} alt={image_alt ? image_alt : ""} fill sizes="(max-width: 767px) 100vw, 50vw" placeholder="blur" blurDataURL={image} />
          </div>
          <div className={styles["titles"]}>
            <h2 className={rocaOne.className}>{title}</h2>
            {promotion ? (
              <div className={`${styles["promotion"]} ${rocaOne.className}`}>
                <div className={styles["promotion-wrapper"]}>
                  <span className={styles["old-price"]}>{price}</span>
                  <span className={styles["promotion-percentage"]}>
                    - {Math.round(((parseFloat(price) - parseFloat(promotion.new_price)) / parseFloat(price)) * 100)}% *
                  </span>
                </div>
                <h3 className={styles["new-price"]}>{promotion.new_price}</h3>
              </div>
            ) : (
              <h3 className={`${styles["normal-price"]} ${rocaOne.className}`}>{price}</h3>
            )}
          </div>
        </div>
        <div className={styles["bottom"]}>
          {text.map((paragraph, index) => (
            <div key={index} className={styles["text"]}>
              {paragraph}
            </div>
          ))}

          <Button href="/contact#scroll-submit" text="Je&nbsp;suis&nbsp;intéressé·e&nbsp;!" />
        </div>
        {promotion && <div className={styles["promotion-text"]}>* {promotion.text}</div>}
      </div>
    </div>
  );
}
