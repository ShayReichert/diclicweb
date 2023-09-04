import styles from "./SectionServices.module.scss";
import { rocaOne } from "../../styles/fonts/font-face";
import Button from "../Button/Button";
import ItemService from "../ItemService/ItemService";

export default function SectionServices() {
  const services = [
    {
      text: "Je réalise des sites vitrines et e-commerce optimisés, performants et personnalisés grâce à WordPress.",
      icon: "/images/home/icon_site.png",
      icon_alt: "Icone de site internet",
    },
    {
      text: "Je propose de la maintenance mensuelle pour que votre site reste sécurisé et en bonne santé.",
      icon: "/images/home/icon_maintenance.png",
      icon_alt: "Icone d'outil",
    },
    {
      text: " Pour les projets plus spécifiques, je peux également coder des sites et des applications sur-mesure (React / Next.js).",
      icon: "/images/home/icon_code.png",
      icon_alt: "Icone d'ordinateur",
    },
  ];

  return (
    <section className={styles["section-services"]}>
      <div className={styles["section-content"]}>
        <h2 className={rocaOne.className}>Mes services</h2>
        <div className={styles["services-wrapper"]}>
          {services.map((service, index) => (
            <ItemService key={index} text={service.text} icon={service.icon} icon_alt={service.icon_alt} />
          ))}
        </div>

        <div className={styles["services-cta"]}>
          <Button text="En&nbsp;savoir&nbsp;plus" href="/offres-et-services" />
        </div>
      </div>
    </section>
  );
}
