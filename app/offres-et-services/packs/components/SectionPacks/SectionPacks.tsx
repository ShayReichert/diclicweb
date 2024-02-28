import ItemPack from "../ItemPack/ItemPack";
import styles from "./SectionPacks.module.scss";

export default function SectionPacks({ data }: SectionPacksProps) {
  const { packs } = data;

  return (
    <section className={styles["section-pack"]}>
      <div className={styles["content-wrapper"]}>
        {packs.map((pack, index) => (
          <ItemPack key={index} {...pack} />
        ))}
      </div>
    </section>
  );
}
