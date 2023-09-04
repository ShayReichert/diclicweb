import styles from "./ItemProject.module.scss";
import Image from "next/image";

interface ItemProjectProps {
  title: string;
  subtitle: string;
  description: string;
  technology: string;
  image: string;
  image_alt?: string;
}

export default function ItemProject({ title, subtitle, description, technology, image, image_alt }: ItemProjectProps) {
  return (
    <div className={styles["project"]}>
      <div className={styles["project-image"]}>
        <Image
          src={image}
          alt="Aperçu du site Jeux et talents"
          fill
          sizes="(max-width: 767px) 100vw, 33vw"
          priority
          placeholder="blur"
          blurDataURL={image_alt}
        />
      </div>
      <div className={styles["project-content"]}>
        <div className={styles["top"]}>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
        <div className={styles["bottom"]}>
          <p>{description}</p>
          <p>{technology}</p>
        </div>
      </div>
    </div>
  );
}
