import styles from "./SectionTitle.module.scss";
import Image from "next/image";
import { rocaOne } from "../../styles/fonts/font-face";

export default function SectionTitle({ data, has_decoration = true, is_long_title = false }: SectionTitleProps) {
  const { title, baseline } = data;

  return (
    <section className={styles["section-title"]}>
      <div className={styles["content"]}>
        <div className={styles["image-wrapper"]}>
          <Image
            src="/images/logo_blue.png"
            alt="Logo de DiclicWeb"
            width={297}
            height={208}
            priority
            placeholder="blur"
            blurDataURL="/images/logo_blue.png"
          />
        </div>
        {title && (
          <h1 className={`${rocaOne.className} ${has_decoration ? styles["has-decoration"] : ""} ${is_long_title ? styles["is-long-title"] : ""}`}>
            <span>{title}</span>
          </h1>
        )}
        {baseline && (
          <p className={styles["baseline"]}>
            <span>{baseline}</span>
          </p>
        )}
      </div>
    </section>
  );
}
