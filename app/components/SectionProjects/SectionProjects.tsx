import styles from "./SectionProjects.module.scss";
import Image from "next/image";
import { lemonMilk } from "../../styles/fonts/font-face";
import Button from "../Button/Button";

export default function SectionProjects() {
  return (
    <section className={styles["section-projects"]}>
      <div className={styles["section-content"]}>
        <h2 className={lemonMilk.className}>Mes dernières réalisations</h2>
        <div className={styles["projects-wrapper"]}>
          <div className={styles["project"]}>
            <div className={styles["project-image"]}>
              <Image
                src="/images/home/jeuxettalents.webp"
                alt="Aperçu du site Jeux et talents"
                fill
                sizes="33vw"
                priority
                placeholder="blur"
                blurDataURL="/images/home/jeuxettalents.webp"
              />
            </div>
            <div className={styles["project-content"]}>
              <div className={styles["top"]}>
                <h3>Jeux et talents</h3>
                <p>Jeux éducatifs à imprimer</p>
              </div>
              <div className={styles["bottom"]}>
                <p>Site e-commerce Wordpress</p>
                <p>Divi + thème enfant</p>
              </div>
            </div>
          </div>

          <div className={styles["project"]}>
            <div className={styles["project-image"]}>
              <Image
                src="/images/home/mandapunk.webp"
                alt="Aperçu du site Jeux et talents"
                fill
                sizes="33vw"
                priority
                placeholder="blur"
                blurDataURL="/images/home/mandapunk.webp"
              />
            </div>
            <div className={styles["project-content"]}>
              <div className={styles["top"]}>
                <h3>Jeux et talents</h3>
                <p>Jeux éducatifs à imprimer</p>
              </div>
              <div className={styles["bottom"]}>
                <p>Site e-commerce Wordpress</p>
                <p>Divi + thème enfant</p>
              </div>
            </div>
          </div>

          <div className={styles["project"]}>
            <div className={styles["project-image"]}>
              <Image
                src="/images/home/qb.webp"
                alt="Aperçu du site Jeux et talents"
                fill
                sizes="33vw"
                priority
                placeholder="blur"
                blurDataURL="/images/home/qb.webp"
              />
            </div>
            <div className={styles["project-content"]}>
              <div className={styles["top"]}>
                <h3>Jeux et talents</h3>
                <p>Jeux éducatifs à imprimer</p>
              </div>
              <div className={styles["bottom"]}>
                <p>Site e-commerce Wordpress</p>
                <p>Divi + thème enfant</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles["projects-cta"]}>
          <Button text="Voir&nbsp;tous&nbsp;les&nbsp;projets" href="/realisations" />
        </div>
      </div>
    </section>
  );
}
