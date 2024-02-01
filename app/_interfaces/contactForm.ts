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
  [key: string]: any;
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
}
