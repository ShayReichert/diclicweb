import Image from "next/image";
import styles from "../styles/a-propos.module.scss";
import { aceSans, livvic } from "../styles/fonts/font-face";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import SectionCatchPhrase from "../components/SectionCatchPhrase/SectionCatchPhrase";

export default function About() {
  return (
    <main>
      <SectionTitle title="À propos" />
      <SectionCatchPhrase text="Je m’appelle Shay 👋" />
    </main>
  );
}
