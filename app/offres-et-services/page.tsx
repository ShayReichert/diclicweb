import type { Metadata } from "next";
import {
  sectionCommitmentsData,
  sectionCTAData,
  sectionCatchphraseData,
  sectionFAQData,
  sectionStepsData,
  sectionTitleData,
} from "../_data/pages/offres-et-services";
import { sectionServicesData } from "../_data/entities/services";
import { sectionReviewsData } from "../_data/entities/reviews";
import { sectionPacksData } from "../_data/entities/packs";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import SectionCatchPhrase from "../components/SectionCatchPhrase/SectionCatchPhrase";
import SectionServices from "./components/SectionServices/SectionServices";
import SectionPacks from "./components/SectionPacks/SectionPacks";
import SectionCTA from "../components/SectionCTA/SectionCTA";
import SectionCommitments from "./components/SectionCommitments/SectionCommitments";
import SectionSteps from "./components/SectionSteps/SectionSteps";
import SectionReviews from "./components/SectionReviews/SectionReviews";
import SectionFAQ from "./components/SectionFAQ/SectionFAQ";

export const metadata: Metadata = {
  title: "Offres et services | Diclicweb",
  description: "Site vitrine, site e-commerce, application web... Je propose également de la maintenance et du support.",
};

export default function Services() {
  return (
    <main id="main">
      <SectionTitle data={sectionTitleData} />
      <SectionCatchPhrase data={sectionCatchphraseData} />
      <SectionServices data={sectionServicesData} />
      <SectionPacks data={sectionPacksData} />
      <SectionCTA data={sectionCTAData} id="site-sur-mesure" />
      <SectionCommitments data={sectionCommitmentsData} />
      <SectionSteps data={sectionStepsData} />
      <SectionReviews data={sectionReviewsData} />
      <SectionFAQ data={sectionFAQData} />
    </main>
  );
}
