import styles from "./styles/home.module.scss";
import SectionTitle from "./components/SectionTitle/SectionTitle";
import SectionCatchPhrase from "./components/SectionCatchPhrase/SectionCatchPhrase";
// import Image from "next/image";
// import { aceSans, livvic } from "./styles/fonts/font-face";

export default function Home() {
  return (
    <main>
      <SectionTitle title="Diclicweb" baseline="Création de sites engagés" has_decoration={false} />
      <SectionCatchPhrase
        text="Artisanat, écologie, art, éducation, culture, projets associatifs : je mets mes compétences au service de projets qui contribuent à un
            monde dans lequel je veux de vivre 🌱"
      />
    </main>
  );
}
