import styles from "./CatchPhraseSection.module.scss";
import { Overpass_Mono } from "next/font/google";

const overpassMono = Overpass_Mono({ subsets: ["latin"], weight: ["300"] });

interface TitleSectionProps {
  text: string;
}
const CatchPhraseSection: React.FC<TitleSectionProps> = ({ text }) => (
  <section className={styles["catchphrase-section"]}>
    <div className={styles["background-circle"]}></div>

    <div className={styles["background-content"]}>
      <div className={styles["content"]}>
        <p className={overpassMono.className}>{text}</p>
      </div>
    </div>
  </section>
);

export default CatchPhraseSection;
