"use client";

import { useEffect, useRef } from "react";
import styles from "./Button.module.scss";
import Link from "next/link";
import { splitButtonText } from "@/app/utils/splitButtonText";
import { rocaOne } from "../../styles/fonts/font-face";

export default function Button({ text, href, isTargetBlank = false }: ButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    splitButtonText(buttonRef.current);
  }, []);

  return (
    <Link ref={buttonRef} className={`${rocaOne.className} ${styles["button"]}`} href={href} role="link" target={isTargetBlank ? "_blank" : ""}>
      {Array.isArray(text)
        ? text.map((paragraph, index) => (
            <div key={index} className={styles["text"]}>
              {paragraph}
            </div>
          ))
        : text}
    </Link>
  );
}
