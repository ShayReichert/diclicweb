import Image from "next/image";
import styles from "../styles/offres.module.scss";
import { aceSans } from "../styles/fonts/font-face";

export default function Services() {
  return (
    <main>
      <div className={styles["logo"]}>
        <Image src="/images/logo_blue.png" alt="Logo de DiclicWeb" width={297} height={208} priority />
      </div>

      <section>
        <h1 className={aceSans.className}>Offres et Services</h1>
      </section>
      <section>
        <h2 className={aceSans.className}>Titre h2</h2>
        <div>
          <p>paragraphe 1</p>
          <p>paragraphe 2</p>
          <p>paragraphe 3</p>
        </div>
      </section>
    </main>
  );
}
