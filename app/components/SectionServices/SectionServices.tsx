import styles from "./SectionServices.module.scss";
import Image from "next/image";
import { livvic } from "../../styles/fonts/font-face";
import Button from "../Button/Button";

export default function SectionServices() {
  return (
    <section className={styles["section-services"]}>
      <div className={styles["section-content"]}>
        <h2 className={livvic.className}>Mes Services</h2>
        <div className={styles["services-wrapper"]}>
          <div className={styles["service"]}>
            <div className={styles["service-icon"]}>
              <Image src="/images/home/icon_desktop.png" alt="Icon d'ordinateur" width={200} height={200} priority />
            </div>
            <div className={styles["service-text"]}>
              Je réalise des sites vitrines et e-commerce optimisés, performants et personnalisés grâce à WordPress.
            </div>
          </div>
          <div className={styles["service"]}>
            <div className={styles["service-icon"]}>
              <Image src="/images/home/icon_desktop.png" alt="" width={200} height={200} priority />
            </div>
            <div className={styles["service-text"]}>Je propose de la maintenance mensuelle pour que votre site reste sécurisé et en bonne santé.</div>
          </div>
          <div className={styles["service"]}>
            <div className={styles["service-icon"]}>
              <Image src="/images/home/icon_desktop.png" alt="" width={200} height={200} priority />
            </div>
            <div className={styles["service-text"]}>
              Pour les projets plus spécifiques, je peux également coder des sites et des applications sur-mesure (React / Next.js).
            </div>
          </div>
        </div>

        <div className={styles["services-cta"]}>
          <Button text="En&nbsp;savoir&nbsp;plus" href="/offres-et-services" />
        </div>
      </div>
    </section>
  );
}
