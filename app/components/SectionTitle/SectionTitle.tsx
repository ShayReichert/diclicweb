import styles from "./SectionTitle.module.scss";
import Image from "next/image";
import { aceSans, livvic } from "../../styles/fonts/font-face";

interface SectionTitleProps {
  title: string;
  baseline?: string;
  has_decoration?: boolean;
}

export default function SectionTitle({ title, baseline = "", has_decoration = true }: SectionTitleProps) {
  return (
    <section className={styles["section-title"]}>
      <div className={styles["content"]}>
        <div className={styles["image-wrapper"]}>
          <Image src="/images/logo_blue.png" alt="Logo de DiclicWeb" width={297} height={208} priority />
        </div>
        {title && <h1 className={`${aceSans.className} ${has_decoration ? styles["has_decoration"] : ""}`}>{title}</h1>}
        {baseline && <p className={styles["baseline"]}>{baseline}</p>}
      </div>
    </section>
  );
}
