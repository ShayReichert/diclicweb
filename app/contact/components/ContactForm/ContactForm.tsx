"use client";

import { useState } from "react";
import styles from "./ContactForm.module.scss";
import Button from "@/app/components/Button/Button";
import ButtonSubmit from "../ButtonSubmit/ButtonSubmit";
import { submitFormToNetlify, validateFormData } from "@/app/utils/form";

export default function ContactForm({ showSnackbar, isLocal }: ContactFormProps) {
  const [formData, setFormData] = useState<FormDataInterface>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    website: "",
    message: "",
    consent: false,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const [formSubmitted, setFormSubmitted] = useState(false);

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
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // HoneyPot
    const honeypot = (e.target as HTMLFormElement).querySelector('[name="bot-field"]') as HTMLInputElement;

    if (honeypot && honeypot.value) {
      return;
    }

    // Errors
    const errors = validateFormData(formData);
    setFormErrors(errors);

    if (Object.keys(errors).length !== 0) {
      return;
    }

    // Submit
    if (isLocal) {
      console.log("Form submitted locally!");
      setFormSubmitted(true);
      showSnackbar("Formulaire soumis localement !", "success");
      // showSnackbar("Une erreur est survenue. Merci de ré-essayer plus tard.", "error");
      window.location.href = "#scroll-submit";
    } else {
      const submissionSuccess = await submitFormToNetlify(formData);

      if (submissionSuccess) {
        console.log("Form submitted successfully!");
        setFormSubmitted(true);
        showSnackbar("Message envoyé !", "success");
        window.location.href = "#scroll-submit";
      } else {
        setFormSubmitted(false);
        showSnackbar("Une erreur est survenue. Merci de ré-essayer plus tard.", "error");
        window.location.href = "#scroll-submit";
      }
    }
  };

  return (
    <div>
      {formSubmitted ? (
        <div className={styles["message-success"]}>
          <p>Merci pour votre message, je vous recontacterai dans les plus brefs délais.</p>
          <Button text="Retour&nbsp;à&nbsp;l'accueil" href="/" />
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          netlify-honeypot="bot-field"
          name="contact"
          method="POST"
          data-netlify="true"
          className={styles["contact-form"]}
        >
          <input type="hidden" name="form-name" value="contact" />

          <p className={styles["hidden"]}>
            <label>
              <input name="bot-field" />
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

          <ButtonSubmit text="Envoyer" />
        </form>
      )}
    </div>
  );
}
