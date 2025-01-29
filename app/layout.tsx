import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Script from "next/script";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SkipToContent from "./components/SkipToContent/SkipToContent";
import "./styles/globals.scss";

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
        <Script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js" strategy="lazyOnload" />
        <Script src="https://files.bpcontent.cloud/2025/01/28/16/20250128162425-KFAEW5D9.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
