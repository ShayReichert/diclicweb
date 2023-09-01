import styles from "./styles/home.module.scss";
import TitleSection from "./components/TitleSection/TitleSection";
import CatchPhraseSection from "./components/CatchPhraseSection/CatchPhraseSection";
// import Image from "next/image";
// import { aceSans, livvic } from "./styles/fonts/font-face";

export default function Home() {
  return (
    <main>
      <TitleSection title="Diclicweb" baseline="Création de sites engagés" has_decoration={false} />
      <CatchPhraseSection
        text="Artisanat, écologie, art, éducation, culture, projets associatifs : je mets mes compétences au service de projets qui contribuent à un
            monde dans lequel je veux de vivre 🌱"
      />
    </main>
  );
}
