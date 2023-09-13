import styles from "./ItemService.module.scss";
import Image from "next/image";

export default function ItemService({ short_desc, icon, icon_alt }: ItemHomeServiceProps) {
  return (
    <div className={styles["service"]}>
      <div className={styles["service-icon"]}>
        <Image src={icon} alt={icon_alt ? icon_alt : ""} width={150} height={150} priority placeholder="blur" blurDataURL={icon} />
      </div>
      <div className={styles["service-text"]}>{short_desc}</div>
    </div>
  );
}
