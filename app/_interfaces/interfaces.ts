//////////////////////
// SECTIONS
//////////////////////

// SectionTitle
interface SectionTitleProps {
  data: {
    title: string;
    baseline?: string;
  };
  has_decoration?: boolean;
}

// SectionCatchPhrase
interface SectionCatchPhraseProps {
  data: {
    text: string;
  };
}

// SectionProject
interface Project {
  title: string;
  subtitle: string;
  description: string;
  technology: string;
  image: string;
  image_alt: string;
}

interface SectionProjectsProps {
  data: {
    projects: Project[];
  };
}

// SectionAbout
interface SectionAboutProps {
  data: {
    title: string;
    text: JSX.Element[];
    image: string;
    image_alt?: string;
  };
  has_button?: boolean;
  button?: JSX.Element;
}

//////////////////////
// ENTITIES
//////////////////////

//  Services
interface Service {
  id: number;
  title: string;
  short_desc: string;
  text: JSX.Element[];
  icon: string;
  icon_alt?: string;
}

interface ServicesProps {
  data: {
    services: Service[];
  };
}

//////////////////////
// COMPONENTS
//////////////////////

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

// ItemHomeService
interface ItemHomeServiceProps {
  short_desc: string;
  icon: string;
  icon_alt?: string;
}

// ItemService
interface ItemServiceProps {
  title: string;
  text: JSX.Element[];
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
