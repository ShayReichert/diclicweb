import Image from "next/image";
import styles from "../styles/contact.module.scss";
import { aceSans, livvic } from "../styles/fonts/font-face";
import TitleSection from "../components/TitleSection/TitleSection";
import CatchPhraseSection from "../components/CatchPhraseSection/CatchPhraseSection";

export default function Contact() {
  return (
    <main>
      <TitleSection title="Contact" />
      <CatchPhraseSection text="Parlez-moi de votre projet !" />
    </main>
  );
}
