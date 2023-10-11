import "./styles/globals.scss";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SkipToContent from "./components/SkipToContent/SkipToContent";

const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "700"] });

export const metadata: Metadata = {
  title: "Diclicweb - Création de sites web engagés",
  description: "Je crée des sites wordpress éthiques et responsables pour des projets engagés",
  openGraph: {
    ...{ images: ["http://localhost:3000/_next/image?url=%2Fimages%2Flogo_blue.png&w=384&q=75"] },
    // ...{ images: ["https://diclicweb.fr/_next/image?url=%2Fimages%2Flogo_blue.png&w=384&q=75"] },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={roboto.className}>
        <SkipToContent />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
