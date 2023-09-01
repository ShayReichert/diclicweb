import Image from "next/image";
import styles from "../styles/realisations.module.scss";
import { aceSans, livvic } from "../styles/fonts/font-face";
import TitleSection from "../components/TitleSection/TitleSection";
import CatchPhraseSection from "../components/CatchPhraseSection/CatchPhraseSection";

export default function Projects() {
  return (
    <main>
      <TitleSection title="Réalisations" />
      <CatchPhraseSection text="Je vous présente les derniers projets de sites web sur lesquels j’ai eu le plaisir de travailler 🖥️" />
    </main>
  );
}
