import styles from "./MobileMenuIcon.module.scss";

interface MobileMenuIconProps {
  isOpen: boolean;
  onClick: () => void;
}

const MobileMenuIcon: React.FC<MobileMenuIconProps> = ({ isOpen, onClick }) => (
  <div
    className={`${styles["mobile-menu-icon"]} ${isOpen ? styles["open"] : ""}`}
    onClick={onClick}
    role="button"
    tabIndex={0}
    aria-label="Ouvrir et fermer le menu"
    onKeyUp={(event) => {
      if (event.key === "Enter" || event.key === " ") {
        onClick();
      }
    }}
  >
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
);

export default MobileMenuIcon;
