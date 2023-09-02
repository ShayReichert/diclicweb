import Image from "next/image";
import styles from "../styles/contact.module.scss";
import { aceSans, livvic } from "../styles/fonts/font-face";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import SectionCatchPhrase from "../components/SectionCatchPhrase/SectionCatchPhrase";

export default function Contact() {
  return (
    <main>
      <SectionTitle title="Contact" />
      <SectionCatchPhrase text="Parlez-moi de votre projet !" />
    </main>
  );
}
