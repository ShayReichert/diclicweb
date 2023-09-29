"use client";

import { useState, ReactNode } from "react";
import ContactForm from "../ContactForm/ContactForm";
import styles from "./SectionContactForm.module.scss";
import Snackbar from "../Snackbar/Snackbar";

export default function SectionContactForm({ data }: SectionContactFormProps) {
  const { text } = data;

  const [devMode, setDevMode] = useState(true);

  const [snackbar, setSnackbar] = useState<ReactNode | null>(null);

  const showSnackbar = (message: string, type: SnackbarType) => {
    setSnackbar(<Snackbar message={message} type={type} onClose={handleSnackbarClose} />);
  };

  const handleSnackbarClose = () => {
    setSnackbar(null);
  };

  return (
    <section id="scroll-submit" className={styles["section-contact-form"]}>
      <div className={styles["content-wrapper"]}>
        <div className={styles["text-wrapper"]}>{text}</div>
        <div className={styles["form-wrapper"]}>
          <ContactForm showSnackbar={showSnackbar} devMode={devMode} />
        </div>
      </div>
      {snackbar}
    </section>
  );
}
