"use client";

import { useEffect, useRef } from "react";
import styles from "./Button.module.scss";
import Link from "next/link";
import { splitButtonText } from "@/app/utils/splitButtonText";

interface ButtonProps {
  text: string;
  href: string;
  isTargetBlank?: boolean;
}

export default function Button({ text, href, isTargetBlank = false }: ButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    splitButtonText(buttonRef.current);
  }, []);

  return (
    <Link ref={buttonRef} className={styles["button"]} href={href} role="link">
      {text}
    </Link>
  );
}
