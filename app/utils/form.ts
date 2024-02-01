export const validateFormData = (formData: FormDataInterface) => {
  const errors: FormErrors = {};

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/;
  const codeRegex = /<.*?>|&.*?;/g;

  if (!formData.firstName) {
    errors.firstName = "Veuillez renseigner votre prénom";
  } else if (codeRegex.test(formData.firstName)) {
    errors.firstName = "Le prénom ne peut pas contenir de code ou de balises HTML";
  }

  if (!formData.lastName) {
    errors.lastName = "Veuillez renseigner votre nom";
  } else if (codeRegex.test(formData.lastName)) {
    errors.lastName = "Le nom ne peut pas contenir de code ou de balises HTML";
  }

  if (!formData.email) {
    errors.email = "Veuillez renseigner votre email";
  } else if (!emailRegex.test(formData.email)) {
    errors.email = "Veuillez entrer une adresse email valide";
  } else if (codeRegex.test(formData.email)) {
    errors.email = "L'email ne peut pas contenir de code ou de balises HTML";
  }

  if (formData.phone && !phoneRegex.test(formData.phone)) {
    errors.phone = "Veuillez entrer un numéro de téléphone valide (10 chiffres)";
  } else if (codeRegex.test(formData.phone)) {
    errors.phone = "Le téléphone ne peut pas contenir de code ou de balises HTML";
  }

  if (codeRegex.test(formData.website)) {
    errors.website = "Le site web ne peut pas contenir de code ou de balises HTML";
  }

  if (!formData.message) {
    errors.message = "Veuillez renseigner une description de projet";
  } else if (codeRegex.test(formData.message)) {
    errors.message = "Le message ne peut pas contenir de code ou de balises HTML";
  }

  if (!formData.consent) {
    errors.consent = "Vous devez consentir à la collecte de données";
  }

  return errors;
};

export const submitFormToNetlify = async (formData: FormDataInterface): Promise<any> => {
  // export const submitFormToNetlify = async (formData: FormDataInterface): Promise<boolean> => {
  const params = new URLSearchParams();

  for (const key in formData) {
    const value = formData[key as keyof FormDataInterface];
    if (value !== undefined) {
      params.append(key, value.toString());
    }
  }

  try {
    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });

    if (response.ok) {
      return true;
    } else {
      return response;
      return false;
    }
  } catch (error) {
    // console.error("Error submitting form:", error);
    return error;
    return false;
  }
};
