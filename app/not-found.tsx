import SectionTitle from "./components/SectionTitle/SectionTitle";

export default function NotFound() {
  return (
    <main id="main">
      <SectionTitle data={{ title: "Ooooups !", baseline: "Cette page n'existe pas" }} has_decoration={false} />
    </main>
  );
}
