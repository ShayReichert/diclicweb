import type { Metadata } from "next";
import { sectionTextData } from "../_data/pages/cgv-maintenance";
import SectionCatchPhrase from "../components/SectionCatchPhrase/SectionCatchPhrase";
import SectionText from "../components/SectionText/SectionText";
import SectionTitle from "../components/SectionTitle/SectionTitle";

export const metadata: Metadata = {
  title: "CGV Maintenance| Diclicweb",
  description: "Conditions générales de vente de la maintenance Diclicweb.",
};

export default function CGVMaitenance() {
  return (
    <main id="main">
      <SectionTitle data={{ title: "CGV Maintenance" }} has_decoration={false} is_long_title={true} />
      <SectionCatchPhrase data={{ text: "✍️ 🔖 ✍️" }} />
      <SectionText data={sectionTextData} />
    </main>
  );
}
