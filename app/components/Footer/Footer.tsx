import styles from "./Footer.module.scss";
import Image from "next/image";
import Link from "next/link";
import { rocaOne } from "../../styles/fonts/font-face";
import Button from "../Button/Button";

export default function Footer() {
  const socialItems = [
    { id: "linkedin", label: "LinkedIn", image: "linkedin.png", url: "https://www.linkedin.com/in/diclicweb/" },
    { id: "facebook", label: "Facebook", image: "facebook.png", url: "https://www.facebook.com/diclicweb/" },
    { id: "instagram", label: "Instagram", image: "instagram.png", url: "https://www.instagram.com/diclicweb/" },
  ];

  return (
    <footer className={styles["footer"]}>
      <div className={styles["background-circle"]}></div>

      <div className={styles["background-content"]}>
        <div className={styles["content"]}>
          <h2 className={rocaOne.className}>Un projet de site ?</h2>
          <p>Pour toute demande de renseignements</p>
          <Button text="Contactez-moi" href="/contact" />
        </div>
      </div>
      <div className={styles["subfooter"]}>
        <div className={styles["socials"]}>
          <ul>
            {socialItems.map((item, index) => (
              <li key={index} className={styles["socials"]}>
                <a href={item.url} target="_blank" role="link">
                  <Image src={`/images/socials/${item.image}`} alt={`item.label`} width={20} height={20} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles["legals"]}>
          <ul>
            <li>
              <Link href="/mentions-legales" role="link">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link href="/politique-de-confidentialite" role="link">
                Politique de confidentialité
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles["logo-wrapper"]}>
          <Image
            src={`/images/logo_white.png`}
            alt="Logo Diclicweb"
            width={594}
            height={416}
            placeholder="blur"
            blurDataURL={`/images/logo_white.png`}
          />
        </div>
      </div>
    </footer>
  );
}
