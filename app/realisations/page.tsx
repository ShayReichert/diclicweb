import SectionTitle from "../components/SectionTitle/SectionTitle";
import SectionCatchPhrase from "../components/SectionCatchPhrase/SectionCatchPhrase";
import { sectionAboutData, sectionCatchphraseData, sectionTitleData } from "../_data/pages/realisations";
import SectionProjects from "./components/SectionProjects/SectionProjects";
import { sectionProjectsData } from "../_data/entities/projects";
import SectionAbout from "../components/SectionAbout/SectionAbout";
import Button from "../components/Button/Button";

export default function Projects() {
  return (
    <main id="main">
      <SectionTitle data={sectionTitleData} />
      <SectionCatchPhrase data={sectionCatchphraseData} />
      <SectionProjects data={sectionProjectsData} />
      <SectionAbout data={sectionAboutData} has_button={true} button={<Button text="En&nbsp;savoir&nbsp;plus" href="/a-propos" />} />
    </main>
  );
}
