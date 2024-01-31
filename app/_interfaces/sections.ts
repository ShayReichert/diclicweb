// SectionTitle
interface SectionTitleProps {
  data: {
    title: string;
    baseline?: string;
  };
  has_decoration?: boolean;
  is_long_title?: boolean;
}

// SectionCatchPhrase
interface SectionCatchPhraseProps {
  data: {
    text: string;
  };
}

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

// SectionProject
interface HomeProject {
  id: number;
  title: string;
  subtitle: string;
  short_description: string;
  technology: string;
  image: string;
  image_alt: string;
}

interface SectionHomeProjectsProps {
  data: {
    projects: HomeProject[];
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

// SectionFAQ
interface ItemFAQProps {
  item: FAQ;
  index: number;
  handleToggle: (index: number) => void;
  openIndex: number;
  answerRefs: React.MutableRefObject<HTMLDivElement | null>[];
}

interface FAQ {
  question: string;
  answer: JSX.Element[];
}

interface FAQProps {
  data: {
    faq: FAQ[];
  };
}

// SectionProject

interface ItemProjectProps {
  id: number;
  title: string;
  subtitle: string;
  short_description: string;
  technology: string;
  description: JSX.Element[];
  link: string;
  image: string;
  image_alt?: string;
  mockup: string;
}

interface SectionProjectsProps {
  data: {
    projects: ItemProjectProps[];
  };
}

// SectionAbout
interface ItemQuinconceProps {
  title: string;
  text: JSX.Element[];
  link?: string;
  text_link?: JSX.Element[];
  image: string;
  image_alt?: string;
  isEven?: boolean;
}

interface SectionQuinconcesProps {
  data: {
    quinconces: ItemQuinconceProps[];
  };
}

// SectionContact
interface SectionContactFormProps {
  data: {
    text: JSX.Element[];
  };
}

// SectionText
interface SectionTextProps {
  data: {
    text: JSX.Element[];
  };
}
