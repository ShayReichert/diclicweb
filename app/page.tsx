import SectionTitle from "./components/SectionTitle/SectionTitle";
import SectionCatchPhrase from "./components/SectionCatchPhrase/SectionCatchPhrase";
import SectionServices from "./components/SectionServices/SectionServices";
import SectionProjects from "./components/SectionProjects/SectionProjects";
import SectionAbout from "./components/SectionAbout/SectionAbout";
import { sectionTitleData, sectionCatchphraseData, sectionAboutData, sectionProjectsData } from "./_data/pages/accueil";
import { sectionServicesData } from "./_data/entities/services";

export default function Home() {
  return (
    <main>
      <SectionTitle data={sectionTitleData} has_decoration={false} />
      <SectionCatchPhrase data={sectionCatchphraseData} />
      <SectionServices data={sectionServicesData} />
      <SectionProjects data={sectionProjectsData} />
      <SectionAbout data={sectionAboutData} />
    </main>
  );
}
