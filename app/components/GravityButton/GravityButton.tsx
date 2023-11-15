"use client";

import { useState } from "react";
import styles from "./GravityButton.module.scss";
import Image from "next/image";

const GravityButton = ({ label, image, url, imageWidth, imageHeight }: GravityButtonProps) => {
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
    <div
      className={styles["gravity-button"]}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={calculateTransform}
      style={{ width: imageWidth * 1.5, height: imageHeight * 1.5 }}
    >
      {url ? (
        <a href={url} target="_blank" role="link">
          <Image src={image} alt={`${label}`} width={imageWidth} height={imageHeight} priority />
        </a>
      ) : (
        <Image src={image} alt={`${label}`} width={imageWidth} height={imageHeight} priority />
      )}
    </div>
  );
};

export default GravityButton;
