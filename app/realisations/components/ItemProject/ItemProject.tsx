import styles from "./ItemProject.module.scss";
import Image from "next/image";
import { rocaOne } from "../../../styles/fonts/font-face";
import Button from "@/app/components/Button/Button";

export default function ItemProject({ id, title, short_description, subtitle, description, mockup, image_alt, link }: ItemProjectProps) {
  const isEven = id % 2 === 0;

  return (
    <div id={`projet-${id}`} className={`${styles["project"]} ${isEven ? styles["even"] : ""}`}>
      <div className={styles["image-content"]}>
        <div className={styles["image-wrapper"]}>
          <Image src={mockup} alt={image_alt ? image_alt : ""} fill sizes="(max-width: 767px) 100vw, 50vw" placeholder="blur" blurDataURL={mockup} />
        </div>
      </div>
      <div className={styles["text-content"]}>
        <div className={styles["text-wrapper"]}>
          <h2 className={rocaOne.className}>{title}</h2>
          <div className={styles["short-description"]}>{short_description}</div>
          <div className={styles["subtitle"]}>{subtitle}</div>
          {description.map((paragraph, index) => (
            <div key={index} className={styles["description"]}>
              {paragraph}
            </div>
          ))}
          <Button text="Visiter&nbsp;le&nbsp;site" href={link} isTargetBlank={true} />
        </div>
      </div>
    </div>
  );
}
