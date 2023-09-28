"use client";

import { useState } from "react";
import styles from "./ContactForm.module.scss";

export default function ContactForm({ showSnackbar, devMode }: ContactFormProps) {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form data
    const errors: FormErrors = {};
    if (!formData.firstName) {
      errors.firstName = "Veuillez renseigner votre prénom";
    }
    if (!formData.lastName) {
      errors.lastName = "Veuillez renseigner votre nom";
    }
    if (!formData.email) {
      errors.email = "Veuillez renseigner votre email";
    }
    if (!formData.message) {
      errors.message = "Veuillez renseigner une description de projet";
    }
    if (!formData.consent) {
      errors.consent = "Vous devez consentir à la collecte de données";
    }
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      if (devMode) {
        console.log("Form submitted locally!");
        showSnackbar("Formulaire soumis localement !", "success");
        // showSnackbar("Une erreur est survenue. Merci de ré-essayer plus tard.", "error");
      } else {
        // Prepare form data for submission
        const form = new FormData();
        form.append("firstName", formData.firstName);
        form.append("lastName", formData.lastName);
        form.append("email", formData.email);
        form.append("phone", formData.phone);
        form.append("website", formData.website);
        form.append("message", formData.message);

        // Send form data to Netlify
        fetch("/", {
          method: "POST",
          body: form,
        })
          .then(() => {
            console.log("Form submitted successfully!");
            showSnackbar("Message envoyé !", "success");
          })
          .catch((error) => {
            console.error("Error submitting form:", error);
            showSnackbar("Une erreur est survenue. Merci de ré-essayer plus tard.", "error");
          });
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true" className={styles.contactForm}>
        <input type="hidden" name="form-name" value="contact" />

        <div className={styles.formGroup}>
          <div className={styles.formField}>
            <label htmlFor="firstName">Prénom *</label>
            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
            <div className={styles.errorMessage}>{formErrors.firstName}</div>
          </div>
          <div className={styles.formField}>
            <label htmlFor="lastName">Nom *</label>
            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
            <div className={styles.errorMessage}>{formErrors.lastName}</div>
          </div>
        </div>

        <div className={styles.formGroup}>
          <div className={styles.formField}>
            <label htmlFor="email">Mail *</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
            <div className={styles.errorMessage}>{formErrors.email}</div>
          </div>
          <div className={styles.formField}>
            <label htmlFor="phone">Numéro de téléphone</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
            <div className={styles.errorMessage}>{formErrors.phone}</div>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="website">Votre site internet actuel (ou vos réseaux sociaux)</label>
          <input type="text" id="website" name="website" value={formData.website} onChange={handleChange} />
          <div className={styles.errorMessage}>{formErrors.website}</div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Décrivez-moi votre projet *</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} />
          <div className={styles.errorMessage}>{formErrors.message}</div>
        </div>

        <div className={`${styles.formGroup} ${styles.checkbox}`}>
          <label>
            <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} />
            En remplissant ce formulaire, je consens à ce que DiclicWeb collecte mes données afin de pouvoir répondre à mon message. Pour plus
            d’informations, consultez la politique de confidentialité.
          </label>
          <div className={styles.errorMessage}>{formErrors.consent}</div>
        </div>

        <button className={styles.button} type="submit">
          Envoyer
        </button>
      </form>
    </div>
  );
}
