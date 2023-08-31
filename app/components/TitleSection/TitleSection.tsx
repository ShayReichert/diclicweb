import styles from "./TitleSection.module.scss";
import Image from "next/image";
import { aceSans, livvic } from "../../styles/fonts/font-face";

interface TitleSectionProps {
  title: string;
  baseline?: string;
  has_decoration?: boolean;
}

const TitleSection: React.FC<TitleSectionProps> = ({ title, baseline = "", has_decoration = true }) => (
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

export default TitleSection;
