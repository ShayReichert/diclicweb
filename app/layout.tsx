import "./styles/global/globals.scss";
import type { Metadata } from "next";
import { Almarai } from "next/font/google";
import NavBar from "./components/NavBar/NavBar";

const almarai = Almarai({ subsets: ["arabic"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "DiclicWeb - Création de sites web engagés",
  description: "Je crée des sites wordpress éthiques et responsables pour des projets engagés",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={almarai.className}>
        <header>
          <NavBar />
        </header>
        {children}
      </body>
    </html>
  );
}
