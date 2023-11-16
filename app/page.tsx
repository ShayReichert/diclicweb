"use client";

import { useEffect } from "react";
import SectionTitle from "./components/SectionTitle/SectionTitle";
import SectionCatchPhrase from "./components/SectionCatchPhrase/SectionCatchPhrase";
import SectionServices from "./components/SectionServices/SectionServices";
import SectionProjects from "./components/SectionProjects/SectionProjects";
import SectionAbout from "./components/SectionAbout/SectionAbout";
import { sectionTitleData, sectionCatchphraseData, sectionAboutData } from "./_data/pages/accueil";
import { sectionServicesData } from "./_data/entities/services";
import { sectionProjectsData } from "./_data/entities/projects";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main id="main">
      <SectionTitle data={sectionTitleData} has_decoration={false} />
      <SectionCatchPhrase data={sectionCatchphraseData} />
      <SectionServices data={sectionServicesData} />
      <SectionProjects data={sectionProjectsData} />
      <SectionAbout data={sectionAboutData} />
    </main>
  );
}
