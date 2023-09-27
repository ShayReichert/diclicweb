import SectionTitle from "../components/SectionTitle/SectionTitle";
import SectionCatchPhrase from "../components/SectionCatchPhrase/SectionCatchPhrase";
import { sectionCatchphraseData, sectionQuinconces, sectionTitleData } from "../_data/pages/a-propos";
import SectionQuinonces from "./components/SectionQuinconces/SectionQuinconces";

export default function About() {
  return (
    <main>
      <SectionTitle data={sectionTitleData} />
      <SectionCatchPhrase data={sectionCatchphraseData} />
      <SectionQuinonces data={sectionQuinconces} />
    </main>
  );
}
