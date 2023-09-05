import styles from "./ItemService.module.scss";
import Image from "next/image";

interface ItemServiceProps {
  text: string;
  icon: string;
  icon_alt?: string;
}

export default function ItemService({ text, icon, icon_alt }: ItemServiceProps) {
  return (
    <div className={styles["service"]}>
      <div className={styles["service-icon"]}>
        <Image src={icon} alt={icon_alt ? icon_alt : ""} width={150} height={150} priority placeholder="blur" blurDataURL={`${icon}`} />
      </div>
      <div className={styles["service-text"]}>{text}</div>
    </div>
  );
}
