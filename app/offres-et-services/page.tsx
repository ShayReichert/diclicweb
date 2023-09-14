import SectionTitle from "../components/SectionTitle/SectionTitle";
import SectionCatchPhrase from "../components/SectionCatchPhrase/SectionCatchPhrase";
import { sectionCatchphraseData, sectionTitleData } from "../_data/pages/offres-et-services";
import SectionServices from "./components/SectionServices/SectionServices";
import { sectionServicesData } from "../_data/entities/services";
import SectionCommitments from "./components/SectionCommitments/SectionCommitments";
import { sectionCommitmentsData } from "../_data/pages/realisations";

export default function Services() {
  return (
    <main>
      <SectionTitle data={sectionTitleData} />
      <SectionCatchPhrase data={sectionCatchphraseData} />
      <SectionServices data={sectionServicesData} />
      <SectionCommitments data={sectionCommitmentsData} />
    </main>
  );
}
