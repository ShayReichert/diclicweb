import Link from "next/link";

export const sectionTitleData = {
  title: "Diclicweb",
  baseline: "Création de sites engagés",
};

export const sectionCatchphraseData = {
  // text: "Artisanat, écologie, art, éducation, culture, projets associatifs : je mets mes compétences au service de projets qui contribuent à un monde dans lequel je veux vivre 🌱",
  text: "Bonjour 👋 Moi c'est Shay, je suis développeur web front-end et je mets mes compétences au service de projets qui contribuent à un monde dans lequel je veux vivre 🌱",
};

export const sectionProjectsData = {
  projects: [
    {
      title: "Wonderwomath",
      subtitle: "Mathématiques utiles et belles",
      short_description: "Site e-learning WordPress",
      technology: "Divi + TutorLMS",
      image: "/images/home/wonderwomath.webp",
      image_alt: "Aperçu du site Wonderwomath",
    },
    {
      title: "Jeux et talents",
      subtitle: "Jeux éducatifs à imprimer",
      short_description: "Site e-commerce WordPress",
      technology: "Divi + thème enfant",
      image: "/images/home/jeuxettalents.webp",
      image_alt: "Aperçu du site Jeux et talents",
    },
    {
      title: "Mandapunk",
      subtitle: "Couture alternative / créations engagées",
      short_description: "Site e-commerce WordPress",
      technology: "Botiga + thème enfant",
      image: "/images/home/mandapunk.webp",
      image_alt: "Aperçu du site Mandapunk",
    },
    // {
    //   title: "La Queer Bogossité",
    //   subtitle: "Bougies artisanales déviantes",
    //   short_description: "Site e-commerce WordPress",
    //   technology: "Divi + thème enfant",
    //   image: "/images/home/qb.webp",
    //   image_alt: "Aperçu du site La Queer Bogossité",
    // },
  ],
};

export const sectionAboutData = {
  title: "Je me présente",
  text: [
    <>
      <p>
        Je m’appelle Shay et après plusieurs années de travail pour une agence web, j’ai décidé de me lancer en tant que
        <strong> développeur freelance </strong> et de me spécialiser dans la création de <strong>sites internet engagés</strong> (dans les milieux
        culturels, artistiques, éducatifs, artisanaux, associatifs...).
      </p>
      <p>
        Je travaille régulièrement avec des personnes sensibles tout comme moi aux questions
        <strong> d’éco-conception, d’inclusivité et d’accessibilité.</strong>
      </p>
      <p>
        Durant mes collaborations, je privilégie<strong> la communication, la transparence, la bienveillance et la convivialité </strong> 😊
      </p>
      <p>
        Pour plus d’informations sur mon parcours, mes engagements et mes outils, rendez-vous sur la page{" "}
        <Link href="/a-propos" role="link">
          À propos.
        </Link>
      </p>
    </>,
  ],
  image: "/images/home/a_propos.webp",
  image_alt: "Shay, créateur de sites web engagés",
};
