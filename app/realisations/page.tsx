import Image from "next/image";
import styles from "../styles/realisations.module.scss";
import { lemonMilk } from "../styles/fonts/font-face";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import SectionCatchPhrase from "../components/SectionCatchPhrase/SectionCatchPhrase";

export default function Projects() {
  return (
    <main>
      <SectionTitle title="Réalisations" />
      <SectionCatchPhrase text="Je vous présente les derniers projets de sites web sur lesquels j’ai eu le plaisir de travailler 😊" />
    </main>
  );
}
