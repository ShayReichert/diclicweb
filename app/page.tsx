import SectionTitle from "./components/SectionTitle/SectionTitle";
import SectionCatchPhrase from "./components/SectionCatchPhrase/SectionCatchPhrase";
import SectionServices from "./components/SectionServices/SectionServices";
import SectionProjects from "./components/SectionProjects/SectionProjects";

export default function Home() {
  return (
    <main>
      <SectionTitle title="Diclicweb" baseline="Création de sites engagés" has_decoration={false} />
      <SectionCatchPhrase
        text="Artisanat, écologie, art, éducation, culture, projets associatifs : je mets mes compétences au service de projets qui contribuent à un
            monde dans lequel je veux de vivre 🌱"
      />
      <SectionServices />
      <SectionProjects />
    </main>
  );
}
