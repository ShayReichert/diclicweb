import SectionTitle from "../components/SectionTitle/SectionTitle";
import SectionCatchPhrase from "../components/SectionCatchPhrase/SectionCatchPhrase";
import { sectionCatchphraseData, sectionTitleData } from "../_data/pages/contact";
import SectionContactForm from "./components/SectionContactForm/SectionContactForm";

export default function Contact() {
  return (
    <main>
      <SectionTitle data={sectionTitleData} />
      <SectionCatchPhrase data={sectionCatchphraseData} />
      <SectionContactForm />
    </main>
  );
}
