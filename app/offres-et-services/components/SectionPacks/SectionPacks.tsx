"use client";

import styles from "./SectionPacks.module.scss";
import { rocaOne } from "../../../styles/fonts/font-face";
import ItemPack from "../ItemPack/ItemPack";
import useScrollFadeIn from "@/app/utils/useScrollFadeIn";

export default function SectionPacks({ data }: SectionPacksProps) {
  const { packs } = data;
  const fadeIn = useScrollFadeIn();

  return (
    <section className={styles["section-packs"]}>
      <div className={styles["section-content"]}>
        <div className={styles["title-wrapper"]}>
          <h2 className={rocaOne.className} ref={fadeIn.ref} style={fadeIn.style}>
            Mes packs de création
          </h2>
        </div>
        <div className={styles["packs-wrapper"]}>
          {packs.map((pack, index) => (
            <ItemPack key={index} {...pack} />
          ))}
        </div>
      </div>
    </section>
  );
}
