import styles from "./ItemCommitment.module.scss";
import Image from "next/image";
import { rocaOne } from "../../../styles/fonts/font-face";

export default function ItemCommitment({ title, text, icon, icon_alt }: ItemCommitmentProps) {
  return (
    <div className={styles["commitment"]}>
      <div className={styles["commitment-content"]}>
        <div className={styles["top"]}>
          <div className={styles["icon"]}>
            <Image src={icon} alt={icon_alt ? icon_alt : ""} width={88} height={62} priority placeholder="blur" blurDataURL={icon} />
          </div>
          <h3 className={rocaOne.className}>{title}</h3>
        </div>

        <div className={styles["bottom"]}>
          <div className={styles["text"]}>{text}</div>
        </div>
      </div>
    </div>
  );
}
