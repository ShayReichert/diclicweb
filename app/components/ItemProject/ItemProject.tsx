import Link from "next/link";
import styles from "./ItemProject.module.scss";
import Image from "next/image";

export default function ItemProject({ id, title, subtitle, short_description, technology, image, image_alt }: ItemHomeProjectProps) {
  return (
    <Link className={styles["project"]} href={`/realisations/#projet-${id}`}>
      <div className={styles["project-image"]}>
        <Image
          src={image}
          alt={image_alt ? image_alt : ""}
          fill
          sizes="(max-width: 767px) 100vw, 33vw"
          priority
          placeholder="blur"
          blurDataURL={image}
        />
      </div>

      <div className={styles["project-content"]}>
        <div className={styles["top"]}>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
        <div className={styles["bottom"]}>
          <p>{short_description}</p>
          <p>{technology}</p>
        </div>
      </div>
    </Link>
  );
}
