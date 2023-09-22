import SectionTitle from "../components/SectionTitle/SectionTitle";
import SectionCatchPhrase from "../components/SectionCatchPhrase/SectionCatchPhrase";
import { sectionCatchphraseData, sectionTitleData } from "../_data/pages/realisations";
import SectionProjects from "./components/SectionProjects/SectionProjects";
import { sectionProjectsData } from "../_data/entities/projects";

export default function Projects() {
  return (
    <main>
      <SectionTitle data={sectionTitleData} />
      <SectionCatchPhrase data={sectionCatchphraseData} />
      <SectionProjects data={sectionProjectsData} />
    </main>
  );
}
