import type { Metadata } from "next";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SectionCatchPhrase from "../../components/SectionCatchPhrase/SectionCatchPhrase";
import SectionPacks from "./components/SectionPacks/SectionPacks";
import { sectionPacksData } from "../../_data/entities/packs";
import { sectionCatchphraseData, sectionTitleData } from "../../_data/pages/packs";

export const metadata: Metadata = {
  title: "Les packs de création de site internet | Diclicweb",
  description: "Des sites Wordpress professionnels, éco-conçus et accessibles pour présenter votre activité ou vendre vos produits.",
};

export default function Packs() {
  return (
    <main id="main">
      <SectionTitle data={sectionTitleData} />
      <SectionCatchPhrase data={sectionCatchphraseData} />
      <SectionPacks data={sectionPacksData} />
    </main>
  );
}
