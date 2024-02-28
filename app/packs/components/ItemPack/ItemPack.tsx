import Image from "next/image";
import styles from "./ItemPack.module.scss";
import { rocaOne } from "../../../styles/fonts/font-face";
import Button from "@/app/components/Button/Button";

export default function ItemPack({ title, price, text, anchor, image, image_alt }: ItemPackProps) {
  return (
    <div id={anchor} className={`${styles.pack} ${anchor ? styles[anchor] : ""}`}>
      <div className={styles["pack-content"]}>
        <div className={styles["top"]}>
          <div className={styles["image-wrapper"]}>
            <Image src={image} alt={image_alt ? image_alt : ""} fill sizes="(max-width: 767px) 100vw, 50vw" placeholder="blur" blurDataURL={image} />
          </div>
          <div className={styles["titles"]}>
            <h2 className={rocaOne.className}>{title}</h2>
            <h3 className={rocaOne.className}>{price}</h3>
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
      </div>
    </div>
  );
}
