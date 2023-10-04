import SectionTitle from "../components/SectionTitle/SectionTitle";
import SectionCatchPhrase from "../components/SectionCatchPhrase/SectionCatchPhrase";
import { sectionCatchphraseData, sectionContactFormData, sectionTitleData } from "../_data/pages/contact";
import SectionContactForm from "./components/SectionContactForm/SectionContactForm";

export default function Contact() {
  return (
    <main id="main">
      <SectionTitle data={sectionTitleData} />
      <SectionCatchPhrase data={sectionCatchphraseData} />
      <SectionContactForm data={sectionContactFormData} />
    </main>
  );
}
