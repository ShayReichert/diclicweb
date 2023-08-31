import styles from "./styles/home.module.scss";
import TitleSection from "./components/TitleSection/TitleSection";
// import Image from "next/image";
// import { aceSans, livvic } from "./styles/fonts/font-face";

export default function Home() {
  return (
    <main>
      <TitleSection title="Diclicweb" baseline="Création de sites engagés" has_decoration={false} />
    </main>
  );
}
