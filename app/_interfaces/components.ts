// MobileMenuIcon
interface MobileMenuIconProps {
  isOpen: boolean;
  onClick: () => void;
}

// Button
interface ButtonProps {
  text: string;
  href: string;
  isTargetBlank?: boolean;
}

// ItemService
interface ItemServiceProps {
  text: string;
  icon: string;
  icon_alt?: string;
}

// ItemProject
interface ItemProjectProps {
  title: string;
  subtitle: string;
  description: string;
  technology: string;
  image: string;
  image_alt?: string;
}
