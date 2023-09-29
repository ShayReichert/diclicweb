import { useState } from "react";
import styles from "./Snackbar.module.scss";

const typeClassMapping = {
  success: styles.success,
  error: styles.error,
  info: styles.info,
};

export default function Snackbar({ message, type, onClose }: SnackbarProps) {
  const [exit, setExit] = useState(false);
  const snackbarClass = `${styles.snackbar} ${typeClassMapping[type]} ${exit ? styles.exit : ""}`;

  const handleAnimationEnd = () => {
    if (exit) {
      onClose();
    }
  };

  return (
    <div className={snackbarClass} onAnimationEnd={handleAnimationEnd}>
      <span>{message}</span>
      <button className={styles["button"]} onClick={() => setExit(true)}>
        Fermer
      </button>
    </div>
  );
}
