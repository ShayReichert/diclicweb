"use client";

import styles from "./SectionCTA.module.scss";
import { rocaOne } from "../../styles/fonts/font-face";
import useScrollFadeIn from "@/app/utils/useScrollFadeIn";
import Button from "../Button/Button";

export default function SectionCTA({ data }: SectionCTAProps) {
  const { text } = data;
  const fadeIn = useScrollFadeIn();

  return (
    <section className={styles["section-cta"]}>
      <div className={styles["section-content"]}>
        <div className={styles["title-wrapper"]}>
          <h2 className={rocaOne.className} ref={fadeIn.ref} style={fadeIn.style}>
            Besoin d'un site sur-mesure ?
          </h2>
        </div>
        <div className={styles["text-wrapper"]}>
          {text.map((paragraph, index) => (
            <div key={index} className={styles["text-wrapper"]}>
              {paragraph}
            </div>
          ))}
        </div>
        <div className={styles["services-cta"]}>
          <Button text="Je&nbsp;demande&nbsp;un&nbsp;devis" href="/contact" />
        </div>
      </div>
    </section>
  );
}
