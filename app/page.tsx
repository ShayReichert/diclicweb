import Image from "next/image";
import styles from "./styles/home.module.scss";

export default function Home() {
  return (
    <main>
      <div className={styles.logo}>
        <Image src="/images/logo_blue.png" alt="Logo de DiclicWeb" width={297} height={208} priority />
      </div>

      <section>
        <h2>Mes Services</h2>
        <div>
          <p>Service 1</p>
          <p>Service 2</p>
          <p>Service 3</p>
        </div>
      </section>
    </main>
  );
}
