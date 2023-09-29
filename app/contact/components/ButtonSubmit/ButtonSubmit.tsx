"use client";

import { useEffect, useRef } from "react";
import styles from "./ButtonSubmit.module.scss";
import { splitButtonText } from "@/app/utils/splitButtonText";
import { rocaOne } from "../../../styles/fonts/font-face";

export default function ButtonSubmit({ text }: ButtonSubmitProps) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    splitButtonText(buttonRef.current);
  }, []);

  return (
    <button ref={buttonRef} className={`${rocaOne.className} ${styles["button"]}`} type="submit">
      {text}
    </button>
  );
}
