import "./styles/globals.scss";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SkipToContent from "./components/SkipToContent/SkipToContent";

const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://diclicweb.fr"),
  title: "Diclicweb - Création de sites web engagés",
  description:
    "Je suis développeur front-end et j'aide les entreprises et les associations à transformer leurs visions en solutions numériques éthiques et sur mesure (sites web, applications web, SaaS…)",
  openGraph: {
    images: "/images/opengraph-image.jpg",
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
