import type { Metadata } from "next";
import { sectionTextData } from "../_data/pages/mentions-legales";
import SectionCatchPhrase from "../components/SectionCatchPhrase/SectionCatchPhrase";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import SectionText from "../components/SectionText/SectionText";

export const metadata: Metadata = {
  title: "Mentions Légales | Diclicweb",
  description: "Mentions légales du site internet Diclicweb.",
};

export default function Legals() {
  return (
    <main id="main">
      <SectionTitle data={{ title: "Mentions Légales" }} has_decoration={false} is_long_title={true} />
      <SectionCatchPhrase data={{ text: "📖 🤓 📖" }} />
      <SectionText data={sectionTextData} />
    </main>
  );
}
