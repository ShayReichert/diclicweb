import Button from "./components/Button/Button";
import SectionTitle from "./components/SectionTitle/SectionTitle";
import styles from "./styles/not-found.module.scss";

export default function NotFound() {
  return (
    <main id="main" className={styles["not-found"]}>
      <SectionTitle data={{ title: "Ooooups !", baseline: "Cette page n'existe pas" }} has_decoration={false} />
      <Button href="/" text="Retour&nbsp;à&nbsp;l'accueil" />
    </main>
  );
}
