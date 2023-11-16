import styles from "./ItemStep.module.scss";
import Image from "next/image";
import { rocaOne } from "../../../styles/fonts/font-face";

export default function ItemStep({ title, text, image, image_alt, isEven, stepNumber }: ItemStepsProps) {
  return (
    <div className={`${styles["step"]} ${isEven ? styles["even"] : ""}`}>
      <div className={styles["text-wrapper"]}>
        <h3 className={rocaOne.className}>
          {stepNumber}. {title}
        </h3>
        {text.map((paragraph, index) => (
          <div key={index} className={styles["text"]}>
            {paragraph}
          </div>
        ))}
      </div>
      <div className={styles["image-wrapper"]}>
        <Image src={image} alt={image_alt ? image_alt : ""} fill sizes="(max-width: 767px) 100vw, 50vw" placeholder="blur" blurDataURL={image} />
      </div>
    </div>
  );
}
