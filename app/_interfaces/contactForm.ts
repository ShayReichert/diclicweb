interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  website?: string;
  message?: string;
  consent?: string;
}

interface FormDataInterface {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  website: string;
  message: string;
  consent: boolean;
}

type ShowSnackbar = (message: string, type: SnackbarType) => void;

interface ContactFormProps {
  showSnackbar: ShowSnackbar;
  isLocal: boolean;
}
