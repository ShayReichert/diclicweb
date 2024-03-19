// MobileMenuIcon
interface MobileMenuIconProps {
  isOpen: boolean;
  onClick: () => void;
}

// Button
interface ButtonProps {
  text: string | JSX.Element[];
  href: string;
  isTargetBlank?: boolean;
}

// ButtonSubmit
interface ButtonSubmitProps {
  text: string | JSX.Element[];
}

// ItemHomeService
interface ItemHomeServiceProps {
  id: number;
  short_desc: string;
  icon: string;
  icon_alt?: string;
}

// ItemService
interface ItemServiceProps {
  id: number;
  title: string;
  text: JSX.Element[];
  icon: string;
  icon_alt?: string;
}

// ItemProject
interface ItemHomeProjectProps {
  title: string;
  subtitle: string;
  short_description: string;
  technology: string;
  image: string;
  image_alt?: string;
}

// ItemPack
interface ItemPackProps {
  title: string;
  price: string;
  promotion?: {
    new_price: string;
    text: string;
  };
  text_thumbnails: JSX.Element[];
  text: JSX.Element[];
  anchor?: string;
  image: string;
  image_alt?: string;
}

interface SectionPacksProps {
  data: {
    packs: ItemPackProps[];
  };
}

// ItemCommitment
interface ItemCommitmentProps {
  title: string;
  text: JSX.Element[];
  icon: string;
  icon_alt?: string;
}

interface SectionCommitmentsProps {
  data: {
    commitments: ItemCommitmentProps[];
  };
}

// ItemSteps
interface ItemStepsProps {
  title: string;
  text: JSX.Element[];
  image: string;
  image_alt?: string;
  isEven?: boolean;
  stepNumber?: number;
}

interface StepsProps {
  data: {
    steps: ItemStepsProps[];
  };
}

// ItemReview
interface ItemReviewProps {
  id: number;
  author: string;
  image: string;
  image_alt?: string;
  notation: number;
  text: JSX.Element[];
}

interface SectionReviewsProps {
  data: {
    reviews: ItemReviewProps[];
  };
}

// Snackbar
type SnackbarType = "success" | "error" | "info";

interface SnackbarProps {
  message: string;
  type: SnackbarType;
  onClose: () => void;
}

// SocialButton
interface SocialButtonProps {
  id: number;
  label: string;
  image: string;
  url?: string;
}

// GravityButton
interface GravityButtonProps {
  id: number;
  label: string;
  image: string;
  url?: string;
  imageWidth: number;
  imageHeight: number;
}
