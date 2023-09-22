import ItemProject from "../ItemProject/ItemProject";
import styles from "./SectionProjects.module.scss";

export default function SectionProjects({ data }: SectionProjectsProps) {
  const { projects } = data;

  return (
    <section className={styles["section-project"]}>
      <div className={styles["section-content"]}>
        <div className={styles["projects-wrapper"]}>
          {projects.map((project, index) => (
            <ItemProject key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
