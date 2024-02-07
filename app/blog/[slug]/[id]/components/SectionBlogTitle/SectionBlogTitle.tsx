import styles from "./SectionBlogTitle.module.scss";
import Image from "next/image";
import { rocaOne } from "../../../../../styles/fonts/font-face";

export default function SectionBlogTitle({ title }: SectionBlogTitleProps) {
  return (
    <section className={styles["section-title"]}>
      <div className={styles["content"]}>
        <div className={styles["image-wrapper"]}>
          <Image
            src="/images/logo_blue.png"
            alt="Logo de Diclicweb"
            width={297}
            height={208}
            priority
            placeholder="blur"
            blurDataURL="/images/logo_blue.png"
          />
        </div>
        {title && (
          <div className={styles["title-wrapper"]}>
            <h1 className={rocaOne.className}>
              <span>{title}</span>
            </h1>
          </div>
        )}
      </div>
    </section>
  );
}
