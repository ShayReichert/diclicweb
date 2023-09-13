import styles from "./ItemService.module.scss";
import Image from "next/image";
import { rocaOne } from "../../../styles/fonts/font-face";

export default function ItemService({ title, text, icon, icon_alt }: ItemServiceProps) {
  return (
    <div className={styles["service"]}>
      <div className={styles["service-icon"]}>
        <Image src={icon} alt={icon_alt ? icon_alt : ""} width={84} height={84} priority placeholder="blur" blurDataURL={icon} />
      </div>
      <div className={styles["service-content"]}>
        <h2 className={rocaOne.className}>{title}</h2>
        <div className={styles["service-text"]}>{text}</div>
      </div>
    </div>
  );
}
