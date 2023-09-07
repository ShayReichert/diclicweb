import styles from "./SectionProjects.module.scss";
import { rocaOne } from "../../styles/fonts/font-face";
import Button from "../Button/Button";
import ItemProject from "../ItemProject/ItemProject";

export default function SectionProjects({ data }: SectionProjectsProps) {
  const { projects } = data;

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
