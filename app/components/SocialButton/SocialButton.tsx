"use client";

import { useState } from "react";
import styles from "./SocialButton.module.scss";
import Image from "next/image";

const SocialButton = ({ label, image, url }: SocialButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsHovered(false);

    const target = e.currentTarget;
    target.style.setProperty("--tx", "0px");
    target.style.setProperty("--ty", "0px");
    target.style.setProperty("--opacity", "0.25");
  };

  const calculateTransform = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isHovered) {
      const target = e.currentTarget as HTMLDivElement;
      const rect = target.getBoundingClientRect();
      const h = rect.width / 2;

      const x = e.clientX - rect.left - h;
      const y = e.clientY - rect.top - h;

      const r1 = Math.sqrt(x * x + y * y);
      const r2 = (1 - r1 / h) * r1;

      const angle = Math.atan2(y, x);
      const tx = Math.round(Math.cos(angle) * r2 * 100) / 100;
      const ty = Math.round(Math.sin(angle) * r2 * 100) / 100;

      target.style.setProperty("--tx", `${tx}px`);
      target.style.setProperty("--ty", `${ty}px`);
    }
  };

  return (
    <li className={styles["social"]}>
      <div className={styles["button"]} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseOver={calculateTransform}>
        <a href={url} target="_blank" role="link">
          <Image src={`/images/socials/${image}`} alt={`${label}`} width={20} height={20} />
        </a>
      </div>
    </li>
  );
};

export default SocialButton;
