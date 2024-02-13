"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import axios from "axios";
import styles from "./ContactForm.module.scss";
import Button from "@/app/components/Button/Button";
import ButtonSubmit from "../ButtonSubmit/ButtonSubmit";
import { validateFormData } from "@/app/utils/form";

export default function ContactForm({ showSnackbar }: ContactFormProps) {
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const successRef = useRef(null);
  const [formData, setFormData] = useState<FormDataInterface>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    website: "",
    message: "",
    consent: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    // Delete error message when user typing a correct value
    const newErrors: FormErrors = { ...formErrors };
    const fieldErrors: FormErrors = validateFormData({ ...formData, [name]: value });

    if (!fieldErrors[name as keyof FormErrors]) {
      delete newErrors[name as keyof FormErrors];
      setFormErrors(newErrors);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const honeypot = (e.target as HTMLFormElement).querySelector('[name="bot-field"]') as HTMLInputElement;

    if (honeypot && honeypot.value) {
      console.warn("Tentative de soumission détectée comme spam.");
      setIsSubmitting(false);
      return;
    }

    const errors = validateFormData(formData);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      axios
        .post("https://eopieniaed5xeqb.m.pipedream.net", formData)
        .then((response) => {
          setSuccessMessage("Merci pour votre message, je vous recontacte bientôt !");
          showSnackbar("Votre message a bien été envoyé.", "success");
          setFormSubmitted(true);

          if (successRef.current) {
            const successPosition = (successRef.current as HTMLElement).getBoundingClientRect().top + window.scrollY - 500;
            window.scrollTo({ top: successPosition, behavior: "smooth" });
          }
        })
        .catch((error) => {
          console.error("Erreur lors de l'envoi du formulaire :", error);
          showSnackbar("Une erreur s'est produite, veuillez réessayer.", "error");
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    } else {
      setIsSubmitting(false);
    }
  };

  return (
    <div ref={successRef}>
      {formSubmitted ? (
        <div className={styles["message-success"]}>
          <p>{successMessage}</p>
          <Button text="Retour&nbsp;à&nbsp;l'accueil" href="/" />
        </div>
      ) : (
        <form onSubmit={onSubmit} className={styles["contact-form"]}>
          <input type="hidden" name="form-name" value="contact" />

          <p className={styles["hidden"]}>
            <label>
              <input name="bot-field" autoComplete="new-password" tabIndex={-1} />
            </label>
          </p>

          <div className={styles["form-group"]}>
            <div className={styles["form-field"]}>
              <label htmlFor="firstName">Prénom *</label>
              <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Jane" />
              <div className={styles["error-message"]}>{formErrors.firstName}</div>
            </div>
            <div className={styles["form-field"]}>
              <label htmlFor="lastName">Nom *</label>
              <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Doe" />
              <div className={styles["error-message"]}>{formErrors.lastName}</div>
            </div>
          </div>

          <div className={styles["form-group"]}>
            <div className={styles["form-field"]}>
              <label htmlFor="email">Mail *</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="jane.doe@gmail.com" />
              <div className={styles["error-message"]}>{formErrors.email}</div>
            </div>
            <div className={styles["form-field"]}>
              <label htmlFor="phone">Numéro de téléphone</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="06 xx xx xx xx" />
              <div className={styles["error-message"]}>{formErrors.phone}</div>
            </div>
          </div>

          <div className={styles["form-group"]}>
            <label htmlFor="website">Votre site internet actuel (ou vos réseaux sociaux)</label>
            <input type="text" id="website" name="website" value={formData.website} onChange={handleChange} placeholder="monsite.fr" />
            <div className={styles["error-message"]}>{formErrors.website}</div>
          </div>

          <div className={styles["form-group"]}>
            <label htmlFor="message">Décrivez-moi votre projet *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="N’hésitez pas à rentrer dans les détails : votre situation, vos objectifs, pourquoi vous avez besoin d’un site, vos contraintes..."
              rows={12}
            />
            <div className={styles["error-message"]}>{formErrors.message}</div>
          </div>

          <div className={`${styles["form-group"]} ${styles["checkbox"]}`}>
            <label>
              <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} />
              <span>
                En remplissant ce formulaire, je consens à ce que Diclicweb collecte mes données afin de pouvoir répondre à mon message. Pour plus
                d’informations, consultez la <a href="politique-de-confidentialite">politique de confidentialité</a>.
              </span>
            </label>
            <div className={styles["error-message"]}>{formErrors.consent}</div>
          </div>

          <ButtonSubmit text={isSubmitting ? "Envoi en cours..." : "Envoyer"} />

          <Image className={styles["form-image"]} src="/images/contact/bird.svg" alt="Illustration de formulaire" width={200} height={200} />
        </form>
      )}
    </div>
  );
}
