import type { Metadata } from "next";
import { sectionTextData } from "../_data/pages/cgv";
import SectionCatchPhrase from "../components/SectionCatchPhrase/SectionCatchPhrase";
import SectionText from "../components/SectionText/SectionText";
import SectionTitle from "../components/SectionTitle/SectionTitle";

export const metadata: Metadata = {
  title: "CGV | Diclicweb",
  description: "Conditions générales de vente du site internet Diclicweb.",
};

export default function CGV() {
  return (
    <main id="main">
      <SectionTitle data={{ title: "CGV" }} has_decoration={false} is_long_title={true} />
      <SectionCatchPhrase data={{ text: "✍️ 🔖 ✍️" }} />
      <SectionText data={sectionTextData} />
    </main>
  );
}
