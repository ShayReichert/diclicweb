"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./styles/home.module.scss";
import { aceSans } from "../styles/fonts/font-face";

export default function NavBar() {
  return (
    <nav className="header-menu">
      <Link href="/">
        <Image src="/images/logo_baseline_white.png" alt="Logo de DiclicWeb" width={131} height={84} priority />
      </Link>

      <ul className={`${aceSans.className} links`}>
        <li className="current">
          <Link href="/offres-et-services">Offres et Services</Link>
        </li>
        <li>
          <Link href="/realisations">Réalisations</Link>
        </li>
        <li>
          <Link href="/a-propos">À Propos</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
}
