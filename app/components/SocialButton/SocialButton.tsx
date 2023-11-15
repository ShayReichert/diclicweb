import GravityButton from "../GravityButton/GravityButton";
import styles from "./SocialButton.module.scss";

const SocialButton = ({ id, label, image, url }: SocialButtonProps) => {
  return (
    <li className={styles["social"]}>
      <GravityButton id={id} label={label} image={image} url={url} />
    </li>
  );
};

export default SocialButton;
