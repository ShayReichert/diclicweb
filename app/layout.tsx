import "./styles/globals.scss";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const almarai = Roboto({ subsets: ["latin"], weight: ["300", "400", "700"] });

export const metadata: Metadata = {
  title: "Diclicweb - Création de sites web engagés",
  description: "Je crée des sites wordpress éthiques et responsables pour des projets engagés",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={almarai.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
