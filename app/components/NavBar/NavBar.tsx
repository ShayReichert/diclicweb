"use client";

import { useEffect, useRef, useState } from "react";
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
  const [movingBarPosition, setMovingBarPosition] = useState({ width: 0, left: 0 });
  const [isBarPendingUpdate, setIsBarPendingUpdate] = useState(false);

  const menuItems = [
    { id: "services", label: "Offres et Services", path: "/offres-et-services" },
    { id: "projects", label: "Réalisations", path: "/realisations" },
    { id: "about", label: "À propos", path: "/a-propos" },
    { id: "contact", label: "Contact", path: "/contact" },
    { id: "blog", label: "Blog", path: "/blog" },
  ];

  useEffect(() => {
    // Clean state when an update of the moving bar is completed
    if (!isBarPendingUpdate) {
      const currentMenuItem = menuRef.current?.querySelector(`.${styles["current"]}`) as HTMLElement;
      if (currentMenuItem) {
        setMovingBarPosition({
          width: currentMenuItem.offsetWidth,
          left: currentMenuItem.offsetLeft,
        });
      }
    }
  }, [isBarPendingUpdate]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleClickMenuItem = () => {
    setIsMobileMenuOpen(false);
  };

  // Accessibility : menu mobile focus
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

  // Accessibility : menu desktop navigation
  const handleLinkKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (e.key === "Enter") {
      const link = e.currentTarget;
      const width = link.offsetWidth;
      const left = link.offsetLeft;
      setMovingBarPosition({ width, left });
    }
  };

  const handleBarMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const link = e.currentTarget;
    const width = link.offsetWidth;
    const left = link.offsetLeft;
    setMovingBarPosition({ width, left });
  };

  const handleBarMouseLeave = () => {
    setIsBarPendingUpdate(true);
    setTimeout(() => {
      const currentMenuItem = menuItems.find((item) => pathname === item.path);
      const movingBar = menuRef.current?.querySelector(`.${styles["moving-bar"]}`) as HTMLElement;

      if (currentMenuItem && movingBar) {
        const menuItemElement = menuRef.current?.querySelector(`.${styles["current"]}`) as HTMLElement;
        const width = menuItemElement.offsetWidth;
        const left = menuItemElement.offsetLeft;
        movingBar.style.width = `${width}px`;
        movingBar.style.left = `${left}px`;
      }
      setIsBarPendingUpdate(false);
    }, 300);
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
        onMouseLeave={handleBarMouseLeave}
      >
        {menuItems.map((item) => (
          <li key={item.id} className={pathname === item.path ? styles["current"] : ""}>
            <Link
              href={item.path}
              aria-current={pathname === item.path ? "page" : undefined}
              onClick={handleClickMenuItem}
              onMouseEnter={handleBarMouseEnter}
              role="link"
              tabIndex={0}
              onKeyDown={handleLinkKeyDown}
            >
              {item.label}
            </Link>
          </li>
        ))}
        <span className={styles["moving-bar"]} style={{ width: `${movingBarPosition.width}px`, left: `${movingBarPosition.left}px` }}></span>
      </ul>

      <MobileMenuIcon isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
    </nav>
  );
}
