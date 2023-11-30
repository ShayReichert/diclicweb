import styles from "./SectionTitle.module.scss";
import Image from "next/image";
import { rocaOne } from "../../styles/fonts/font-face";

export default function SectionTitle({ data, has_decoration = true, is_long_title = false }: SectionTitleProps) {
  const { title, baseline } = data;

  return (
    <section className={styles["section-title"]}>
      <div className={styles["jumbo"]}></div>
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
          <div className={styles["title-wrapper"]}>
            <h1 className={`${rocaOne.className} ${has_decoration ? styles["has-decoration"] : ""} ${is_long_title ? styles["is-long-title"] : ""}`}>
              <span>{title}</span>
            </h1>
          </div>
        )}
        {baseline && (
          <div className={styles["baseline-wrapper"]}>
            <p className={styles["baseline"]}>
              <span>{baseline}</span>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
