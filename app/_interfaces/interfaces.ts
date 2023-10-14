//////////////////////
// SECTIONS
//////////////////////

// SectionTitle
// interface SectionTitleProps {
//   data: {
//     title: string;
//     baseline?: string;
//   };
//   has_decoration?: boolean;
//   is_long_title?: boolean;
// }

// SectionCatchPhrase
interface SectionCatchPhraseProps {
  data: {
    text: string;
  };
}

// SectionProject
interface HomeProject {
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
  item: {
    question: string;
    answer: JSX.Element[];
  };
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
interface ItemHomeProjectProps {
  title: string;
  subtitle: string;
  short_description: string;
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

//////////////////////
// CONTACT FORM
//////////////////////

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

//////////////////////
// BLOG
//////////////////////

interface Category {
  id: number;
  name: string;
  slug: string;
}

interface Categories {
  categories: Category[];
}

interface SectionCategoriesProps {
  data: Categories;
  onCategoryClick: (id: Category["id"] | null) => void;
}

interface Content {
  type: string;
  text?: JSX.Element[];
  path?: string;
  alt?: string;
}

interface Post {
  id: number;
  title: string;
  author: string;
  slug: string;
  date: string;
  category: number[];
  excerpt: string;
  thumbnail: { path: string; alt: string };
  content: Content[];
  related_posts: number[];
}

interface SectionPostsProps {
  posts: Post[];
}

interface BlogContainerProps {
  posts: Post[];
  blogCategoriesData: Categories;
}
