import type { Metadata } from "next";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import SectionCatchPhrase from "../components/SectionCatchPhrase/SectionCatchPhrase";
import { sectionCatchphraseData, sectionFAQData, sectionStepsData, sectionTitleData } from "../_data/pages/offres-et-services";
import SectionServices from "./components/SectionServices/SectionServices";
import { sectionServicesData } from "../_data/entities/services";
import SectionCommitments from "./components/SectionCommitments/SectionCommitments";
import { sectionCommitmentsData } from "../_data/pages/offres-et-services";
import SectionSteps from "./components/SectionSteps/SectionSteps";
import SectionReviews from "./components/SectionReviews/SectionReviews";
import { sectionReviewsData } from "../_data/entities/reviews";
import SectionFAQ from "./components/SectionFAQ/SectionFAQ";

export const metadata: Metadata = {
  title: "Offres et services | Diclicweb",
  description: "Des solutions sur mesure : site vitrine, e-commerce, applications web. Je propose également de la maintenance et du support.",
};

export default function Services() {
  return (
    <main id="main">
      <SectionTitle data={sectionTitleData} />
      <SectionCatchPhrase data={sectionCatchphraseData} />
      <SectionServices data={sectionServicesData} />
      <SectionCommitments data={sectionCommitmentsData} />
      <SectionSteps data={sectionStepsData} />
      <SectionReviews data={sectionReviewsData} />
      <SectionFAQ data={sectionFAQData} />
    </main>
  );
}
