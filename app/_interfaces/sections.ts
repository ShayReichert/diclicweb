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

//  SectionService
interface Service {
  text: string;
  icon: string;
  icon_alt: string;
}

interface SectionServicesProps {
  data: {
    services: Service[];
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
