import styles from "./ItemCommitment.module.scss";
import Image from "next/image";
import { rocaOne } from "../../../styles/fonts/font-face";

export default function ItemCommitment({ title, text, icon, icon_alt }: ItemCommitmentProps) {
  return (
    <div className={styles["commitment"]}>
      <div className={styles["commitment-content"]}>
        <div className={styles["top"]}>
          <div className={styles["icon"]}>
            <Image src={icon} alt={icon_alt ? icon_alt : ""} width={130} height={130} placeholder="blur" blurDataURL={icon} />
          </div>
          <h3 className={rocaOne.className}>{title}</h3>
        </div>

        <div className={styles["bottom"]}>
          {text.map((paragraph, index) => (
            <div key={index} className={styles["text"]}>
              {paragraph}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
