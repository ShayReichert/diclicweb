import Image from "next/image";
import styles from "../styles/offres.module.scss";
import { lemonMilk } from "../styles/fonts/font-face";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import SectionCatchPhrase from "../components/SectionCatchPhrase/SectionCatchPhrase";

export default function Services() {
  return (
    <main>
      <SectionTitle title="Mes services" />
      <SectionCatchPhrase text="Sites vitrines, sites e-commerce, plans de maintenance, applications web : je vous propose différentes solutions pour répondre à vos besoins spécifiques ! 👌" />
    </main>
  );
}
