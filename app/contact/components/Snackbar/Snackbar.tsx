import styles from "./Snackbar.module.scss";

const typeClassMapping = {
  success: styles.success,
  error: styles.error,
  info: styles.info,
};

export default function Snackbar({ message, type, onClose }: SnackbarProps) {
  const snackbarClass = `${styles.snackbar} ${typeClassMapping[type]}`;

  return (
    <div className={snackbarClass}>
      <span>{message}</span>
      <button className={styles.button} onClick={onClose}>
        Fermer
      </button>
    </div>
  );
}
