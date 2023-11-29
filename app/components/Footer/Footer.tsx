"use client";

import styles from "./Footer.module.scss";
import Image from "next/image";
import Link from "next/link";
import { rocaOne } from "../../styles/fonts/font-face";
import Button from "../Button/Button";
import SocialButton from "../SocialButton/SocialButton";
import useScrollFadeIn from "@/app/utils/useScrollFadeIn";

export default function Footer() {
  const socialItems = [
    { label: "LinkedIn", image: "/images/socials/linkedin.svg", url: "https://www.linkedin.com/in/diclicweb/" },
    { label: "Facebook", image: "/images/socials/facebook.svg", url: "https://www.facebook.com/diclicweb/" },
    { label: "Instagram", image: "/images/socials/instagram.svg", url: "https://www.instagram.com/diclicweb/" },
  ];
  const fadeIn = useScrollFadeIn();

  return (
    <footer className={styles["footer"]}>
      <div className={styles["background-circle"]}></div>

      <div className={styles["background-content"]}>
        <div className={styles["content"]}>
          <div className={styles["title-wrapper"]}>
            <h2 className={rocaOne.className} ref={fadeIn.ref} style={fadeIn.style}>
              Un projet de site ?
            </h2>
          </div>
          <p>Pour toute demande de renseignements</p>
          <Button text="Contactez-moi" href="/contact" />
        </div>
      </div>
      <div className={styles["subfooter"]}>
        <div className={styles["socials"]}>
          <ul>
            {socialItems.map((item, index) => (
              <SocialButton key={index} id={index} {...item} />
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
