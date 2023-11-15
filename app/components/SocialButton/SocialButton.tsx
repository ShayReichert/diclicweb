import GravityButton from "../GravityButton/GravityButton";
import styles from "./SocialButton.module.scss";

const SocialButton = ({ id, label, image, url }: SocialButtonProps) => {
  return (
    <li className={styles["social"]}>
      <GravityButton id={id} label={label} image={image} url={url} imageWidth={20} imageHeight={20} />
    </li>
  );
};

export default SocialButton;
