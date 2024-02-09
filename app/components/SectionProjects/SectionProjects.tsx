"use client";

import styles from "./SectionProjects.module.scss";
import { rocaOne } from "../../styles/fonts/font-face";
import Button from "../Button/Button";
import ItemProject from "../ItemProject/ItemProject";
import useScrollFadeIn from "@/app/utils/useScrollFadeIn";

export default function SectionProjects({ data }: SectionHomeProjectsProps) {
  const { projects } = data;
  const fadeIn = useScrollFadeIn();

  return (
    <section className={styles["section-projects"]}>
      <div className={styles["section-content"]}>
        <div className={styles["title-wrapper"]}>
          <h2 className={rocaOne.className} ref={fadeIn.ref} style={fadeIn.style}>
            Mes dernières réalisations
          </h2>
        </div>

        <div className={styles["projects-wrapper"]}>
          {projects.slice(0, 3).map((project, index) => (
            <ItemProject key={index} {...project} />
          ))}
        </div>

        <div className={styles["projects-cta"]}>
          <Button text="Voir&nbsp;tous&nbsp;les&nbsp;sites" href="/realisations" />
        </div>
      </div>
    </section>
  );
}
