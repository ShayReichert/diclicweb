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
        <Image src={icon} alt={icon_alt ? icon_alt : ""} width={200} height={200} priority placeholder="blur" blurDataURL={`${icon}`} />
      </div>
      <div className={styles["service-text"]}>{text}</div>
    </div>
  );
}
