import styles from "./SectionProjects.module.scss";
import { rocaOne } from "../../styles/fonts/font-face";
import Button from "../Button/Button";
import ItemProject from "../ItemProject/ItemProject";

export default function SectionProjects() {
  const projects = [
    {
      title: "Jeux et talents",
      subtitle: "Jeux éducatifs à imprimer",
      description: "Site e-commerce Wordpress",
      technology: "Divi + thème enfant",
      image: "/images/home/jeuxettalents.webp",
      image_alt: "Aperçu du site Jeux et talents",
    },
    {
      title: "Mandapunk",
      subtitle: "Couture alternative / créations engagées",
      description: "Site e-commerce Wordpress",
      technology: "Botiga + thème enfant",
      image: "/images/home/mandapunk.webp",
      image_alt: "Aperçu du site Mandapunk",
    },
    {
      title: "La Queer Bogossité",
      subtitle: "Bougies artisanales déviantes",
      description: "Site e-commerce Wordpress",
      technology: "Divi + thème enfant",
      image: "/images/home/qb.webp",
      image_alt: "Aperçu du site La Queer Bogossité",
    },
  ];

  return (
    <section className={styles["section-projects"]}>
      <div className={styles["section-content"]}>
        <h2 className={rocaOne.className}>Mes dernières réalisations</h2>
        <div className={styles["projects-wrapper"]}>
          {projects.map((project, index) => (
            <ItemProject
              key={index}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              technology={project.technology}
              image={project.image}
              image_alt={project.image_alt}
            />
          ))}
        </div>

        <div className={styles["projects-cta"]}>
          <Button text="Voir&nbsp;tous&nbsp;les&nbsp;projets" href="/realisations" />
        </div>
      </div>
    </section>
  );
}
