import styles from "./SectionTitle.module.scss";
import Image from "next/image";
import { rocaOne } from "../../styles/fonts/font-face";

export default function SectionTitle({ data, has_decoration = true, is_long_title = false }: SectionTitleProps) {
  const { title, baseline } = data;

  return (
    <section className={styles["section-title"]}>
      <video className={styles["video-background"]} playsInline autoPlay muted loop preload="none">
        <source src="/videos/video.mp4" type="video/mp4" />
        <Image
          src="/images/fallback.webp"
          alt="Image d'illustration"
          title="Your browser does not support the <video> tag"
          fill
          sizes="(max-width: 767px) 100vw, 50vw"
          priority
        />
      </video>

      <div className={styles["content"]}>
        <div className={styles["image-wrapper"]}>
          <Image src="/images/logo_blue.webp" alt="Logo de Diclicweb" width={250} height={175} priority />
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
