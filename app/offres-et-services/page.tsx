import SectionTitle from "../components/SectionTitle/SectionTitle";
import SectionCatchPhrase from "../components/SectionCatchPhrase/SectionCatchPhrase";
import { sectionCatchphraseData, sectionTitleData } from "../_data/pages/offres-et-services";
import SectionServices from "./components/SectionServices/SectionServices";
import { sectionServicesData } from "../_data/entities/services";

export default function Services() {
  return (
    <main>
      <SectionTitle data={sectionTitleData} />
      <SectionCatchPhrase data={sectionCatchphraseData} />
      <SectionServices data={sectionServicesData} />
    </main>
  );
}
