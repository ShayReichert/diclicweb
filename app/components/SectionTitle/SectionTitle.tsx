import styles from "./SectionTitle.module.scss";
import Image from "next/image";
import { rocaOne } from "../../styles/fonts/font-face";

interface SectionTitleProps {
  data: {
    title: string;
    baseline?: string;
  };
  has_decoration?: boolean;
}

export default function SectionTitle({ data, has_decoration = true }: SectionTitleProps) {
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
        {title && <h1 className={`${rocaOne.className} ${has_decoration ? styles["has_decoration"] : ""}`}>{title}</h1>}
        {baseline && <p className={styles["baseline"]}>{baseline}</p>}
      </div>
    </section>
  );
}
