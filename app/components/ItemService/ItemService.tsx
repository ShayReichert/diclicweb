import GravityButton from "../GravityButton/GravityButton";
import styles from "./ItemService.module.scss";

export default function ItemService({ id, short_desc, icon, icon_alt }: ItemHomeServiceProps) {
  return (
    <div className={styles["service"]}>
      <div className={styles["service-icon"]}>
        <GravityButton id={id} label={icon_alt ? icon_alt : ""} image={icon} imageWidth={120} imageHeight={120} />
      </div>
      <div className={styles["service-text"]}>{short_desc}</div>
    </div>
  );
}
