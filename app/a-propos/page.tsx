import type { Metadata } from "next";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import SectionCatchPhrase from "../components/SectionCatchPhrase/SectionCatchPhrase";
import { sectionCatchphraseData, sectionQuinconces, sectionTitleData } from "../_data/pages/a-propos";
import SectionQuinonces from "./components/SectionQuinconces/SectionQuinconces";

export const metadata: Metadata = {
  title: "À propos | Diclicweb",
  description: "Découvrez mon parcours, mes engagements et mes outils. Je suis spécialisé dans la création de sites internet engagés.",
};

export default function About() {
  return (
    <main id="main">
      <SectionTitle data={sectionTitleData} />
      <SectionCatchPhrase data={sectionCatchphraseData} />
      <SectionQuinonces data={sectionQuinconces} />
    </main>
  );
}
