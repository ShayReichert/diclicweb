import styles from "./ItemService.module.scss";
import Image from "next/image";
import { rocaOne } from "../../../styles/fonts/font-face";

export default function ItemService({ id, title, text, icon, icon_alt }: ItemServiceProps) {
  return (
    <div id={`service-${id}`} className={styles["service"]}>
      <div className={styles["service-icon"]}>
        <Image src={icon} alt={icon_alt ? icon_alt : ""} width={84} height={84} placeholder="blur" blurDataURL={icon} />
      </div>
      <div className={styles["service-content"]}>
        <h2 className={rocaOne.className}>{title}</h2>
        {text.map((paragraph, index) => (
          <div key={index} className={styles["service-text"]}>
            {paragraph}
          </div>
        ))}
      </div>
    </div>
  );
}
