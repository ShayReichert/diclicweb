import Image from "next/image";
import styles from "../styles/offres.module.scss";
import { aceSans, livvic } from "../styles/fonts/font-face";
import TitleSection from "../components/TitleSection/TitleSection";
import CatchPhraseSection from "../components/CatchPhraseSection/CatchPhraseSection";

export default function Services() {
  return (
    <main>
      <TitleSection title="Mes services" />
      <CatchPhraseSection text="Sites vitrines, sites e-commerce, plans de maintenance, applications web : je vous propose différentes solutions pour répondre à vos besoins spécifiques ! 👌" />
    </main>
  );
}
