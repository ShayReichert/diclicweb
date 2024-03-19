import styles from "./ItemPack.module.scss";
import Image from "next/image";
import { rocaOne } from "../../../styles/fonts/font-face";

export default function ItemPack({ title, price, promotion, text_thumbnails, anchor, image, image_alt }: ItemPackProps) {
  return (
    <div className={`${styles.pack} ${anchor ? styles[anchor] : ""}`}>
      <div className={styles["pack-content"]}>
        <div className={styles["top"]}>
          <div className={styles["image"]}>
            <Image src={image} alt={image_alt ? image_alt : ""} width={250} height={250} placeholder="blur" blurDataURL={image} />
          </div>
          <h3 className={rocaOne.className}>{title}</h3>

          {promotion ? (
            <div className={`${styles["promotion"]} ${rocaOne.className}`}>
              <div className={styles["promotion-wrapper"]}>
                <span className={styles["old-price"]}>{price}</span>
                <span className={styles["promotion-percentage"]}>
                  - {Math.round(((parseFloat(price) - parseFloat(promotion.new_price)) / parseFloat(price)) * 100)}% *
                </span>
              </div>
              <h4 className={styles["new-price"]}>{promotion.new_price}</h4>
            </div>
          ) : (
            <h4 className={`${styles["normal-price"]} ${rocaOne.className}`}>{price}</h4>
          )}
        </div>

        <div className={styles["bottom"]}>
          {text_thumbnails.map((paragraph, index) => (
            <div key={index} className={styles["text"]}>
              {paragraph}
            </div>
          ))}
        </div>
        {promotion && <div className={styles["promotion-text"]}>* {promotion.text}</div>}
      </div>
    </div>
  );
}
