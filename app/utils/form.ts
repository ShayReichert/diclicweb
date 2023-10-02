export const validateFormData = (formData: FormDataInterface) => {
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

  return errors;
};

export const submitFormToNetlify = async (formData: FormDataInterface): Promise<boolean> => {
  const form = new FormData();
  form.append("firstName", formData.firstName);
  form.append("lastName", formData.lastName);
  form.append("email", formData.email);
  form.append("phone", formData.phone);
  form.append("website", formData.website);
  form.append("message", formData.message);

  try {
    const response = await fetch("/", {
      method: "POST",
      body: form,
    });

    if (response.ok) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    return false;
  }
};
