import Image from "next/image";
import styles from "../styles/a-propos.module.scss";
import { aceSans, livvic } from "../styles/fonts/font-face";
import TitleSection from "../components/TitleSection/TitleSection";

export default function About() {
  return (
    <main>
      <TitleSection title="À propos" />
    </main>
  );
}
