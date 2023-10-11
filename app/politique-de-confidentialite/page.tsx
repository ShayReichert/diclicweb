import type { Metadata } from "next";
import { sectionTextData } from "../_data/pages/politique-de-confidentialite";
import SectionCatchPhrase from "../components/SectionCatchPhrase/SectionCatchPhrase";
import SectionText from "../components/SectionText/SectionText";
import SectionTitle from "../components/SectionTitle/SectionTitle";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | Diclicweb",
  description: "Politique de confidentialité du site internet Diclicweb.",
};

export default function PrivacPolicy() {
  return (
    <main id="main">
      <SectionTitle data={{ title: "Politique de Confidentialité" }} has_decoration={false} is_long_title={true} />
      <SectionCatchPhrase data={{ text: "🔒 🤫 🔒" }} />
      <SectionText data={sectionTextData} />
    </main>
  );
}
