"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./NavBar.module.scss";
import { aceSans } from "../../styles/fonts/font-face";
import { usePathname } from "next/navigation";
import MobileMenuIcon from "../MobileMenuIcon/MobileMenuIcon";

export default function NavBar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement | null>(null);

  const menuItems = [
    { id: "services", label: "Offres et Services", path: "/offres-et-services" },
    { id: "projects", label: "Réalisations", path: "/realisations" },
    { id: "about", label: "À propos", path: "/a-propos" },
    { id: "contact", label: "Contact", path: "/contact" },
    { id: "blog", label: "Blog", path: "/blog" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleTransitionEnd = () => {
    if (isMobileMenuOpen) {
      if (menuRef.current) {
        const firstMenuItem = menuRef.current.querySelector("li:first-child a") as HTMLElement;
        if (firstMenuItem) {
          firstMenuItem.focus();
        }
      }
    }
  };

  return (
    <nav className={`${styles["navbar"]} ${isMobileMenuOpen ? styles["mobile-menu-open"] : ""}`}>
      <div className={styles["logo"]}>
        <Link href="/">
          <Image src="/images/logo_baseline_white.png" alt="Logo de DiclicWeb" width={131} height={84} priority />
        </Link>
      </div>

      <ul
        ref={menuRef}
        className={`${styles["links"]} ${aceSans.className} ${isMobileMenuOpen ? styles["menu-open"] : ""}`}
        onTransitionEnd={handleTransitionEnd}
      >
        {menuItems.map((item) => (
          <li key={item.id} className={pathname === item.path ? styles["current"] : ""}>
            <Link href={item.path} aria-current={pathname === item.path ? "page" : undefined}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <MobileMenuIcon isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
    </nav>
  );
}
