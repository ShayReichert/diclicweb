import styles from "./SectionCatchPhrase.module.scss";
import { Overpass_Mono } from "next/font/google";

const overpassMono = Overpass_Mono({ subsets: ["latin"], weight: ["300"] });

interface SectionCatchPhrasenProps {
  text: string;
}

export default function SectionCatchPhrase({ text }: SectionCatchPhrasenProps) {
  return (
    <section className={styles["section-catchphrase"]}>
      <div className={styles["background-circle"]}></div>

      <div className={styles["background-content"]}>
        <div className={styles["content"]}>
          <p className={overpassMono.className}>{text}</p>
        </div>
      </div>
    </section>
  );
}
