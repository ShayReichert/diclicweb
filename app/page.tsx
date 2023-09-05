import SectionTitle from "./components/SectionTitle/SectionTitle";
import SectionCatchPhrase from "./components/SectionCatchPhrase/SectionCatchPhrase";
import SectionServices from "./components/SectionServices/SectionServices";
import SectionProjects from "./components/SectionProjects/SectionProjects";
import SectionAbout from "./components/SectionAbout/SectionAbout";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <SectionTitle title="Diclicweb" baseline="Création de sites engagés" has_decoration={false} />
      <SectionCatchPhrase
        text="Artisanat, écologie, art, éducation, culture, projets associatifs : je mets mes compétences au service de projets qui contribuent à un
            monde dans lequel je veux de vivre 🌱"
      />
      <SectionServices />
      <SectionProjects />
      <SectionAbout
        title="Je me présente"
        text={
          <>
            <p>
              Je m’appelle Shay et après plusieurs années de travail pour une agence web, j’ai décidé de me lancer en tant que
              <strong> freelance Wordpress</strong> pour mettre mes compétences au service de projets qui ont du sens pour moi. J’ai décidé de me
              spécialiser dans la création de <strong>sites internet engagés</strong> (dans les milieux culturels, artistiques, éducatifs, artisanaux,
              associatifs...).
            </p>
            <p>
              Je travaille régulièrement avec des personnes sensibles tout comme moi aux questions
              <strong> d’éco-conception, d’inclusivité et d’accessibilité.</strong>
            </p>
            <p>
              Durant mes collaborations, j’aime construire une relation où la communication et la transparence passent en priorité, dans une ambiance
              <strong> bienveillante et conviviale </strong>! 😊
            </p>
            <p>
              Pour plus d’informations sur mon parcours, mes engagements et mes outils,{" "}
              <Link href="/a-propos" role="link">
                rendez-vous ici.
              </Link>
            </p>
          </>
        }
        image="/images/home/a-propos.webp"
        image_alt="image description"
        // has_button={true}
        // button={<Button text="En&nbsp;savoir&nbsp;plus" href="/a-propos" />}
      />
    </main>
  );
}
