import styles from "./ItemQuinconce.module.scss";
import Image from "next/image";
import { rocaOne } from "../../../styles/fonts/font-face";
import Button from "@/app/components/Button/Button";

export default function ItemQuinconce({ title, text, image, image_alt, link, text_link, isEven }: ItemQuinconceProps) {
  return (
    <div className={`${styles["quinconce"]} ${isEven ? styles["even"] : ""}`}>
      <div className={styles["content-wrapper"]}>
        <div className={styles["image-content"]}>
          <div className={styles["image-wrapper"]}>
            <Image src={image} alt={image_alt ? image_alt : ""} fill sizes="(max-width: 767px) 100vw, 50vw" placeholder="blur" blurDataURL={image} />
          </div>
        </div>
        <div className={styles["text-content"]}>
          <div className={styles["text-wrapper"]}>
            <h2 className={rocaOne.className}>{title}</h2>
            {text.map((paragraph, index) => (
              <div key={index} className={styles["text"]}>
                {paragraph}
              </div>
            ))}
            {link && text_link ? <Button text={text_link} href={link} isTargetBlank={false} /> : ""}
          </div>
        </div>
      </div>
    </div>
  );
}
