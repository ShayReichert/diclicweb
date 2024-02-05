"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss";
import { rocaOne } from "../../styles/fonts/font-face";
import { usePathname } from "next/navigation";
import MobileMenuIcon from "../MobileMenuIcon/MobileMenuIcon";

export default function Header() {
  const pathname = usePathname();
  const menuRef = useRef<HTMLUListElement | null>(null);
  const headerRef = useRef<HTMLUListElement | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [movingBarPosition, setMovingBarPosition] = useState({ width: 0, left: 0 });
  const [currentPath, setCurrentPath] = useState(pathname);
  const [isScrolling, setIsScrolling] = useState(false);

  const menuItems = [
    { id: "services", label: "Offres et services", path: "/offres-et-services" },
    { id: "projects", label: "Réalisations", path: "/realisations" },
    { id: "about", label: "À propos", path: "/a-propos" },
    { id: "contact", label: "Contact", path: "/contact" },
    { id: "blog", label: "Blog", path: "/blog" },
  ];

  useEffect(() => {
    setCurrentPath(pathname);
    updateMovingBarPosition();

    if (pathname === "/") {
      removeMovingBar();
      setIsMobileMenuOpen(false);
    }
  }, [currentPath, pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (headerRef) {
        if (scrollY > 100) {
          setIsScrolling(true);
        } else {
          setIsScrolling(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const removeMovingBar = () => {
    menuRef.current?.querySelectorAll(`.${styles["current"]}`).forEach((item) => {
      item.classList.remove(styles["current"]);
    });
    setMovingBarPosition({ width: 0, left: 0 });
  };

  const updateMovingBarPosition = () => {
    const currentMenuItem = menuRef.current?.querySelector(`[href="${currentPath}"]`) as HTMLElement;

    if (currentMenuItem) {
      setMovingBarPosition({
        width: currentMenuItem.offsetWidth,
        left: currentMenuItem.offsetLeft,
      });
    }
  };

  const handleClickMenuItem = (path: string) => {
    menuRef.current?.querySelectorAll(`.${styles["current"]}`).forEach((item) => {
      item.classList.remove(styles["current"]);
    });

    const currentMenuItem = menuRef.current?.querySelector(`[href="${path}"]`);
    if (currentMenuItem) {
      currentMenuItem.classList.add(styles["current"]);
    }
    setCurrentPath(path);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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

  return (
    <header ref={headerRef} className={` ${styles["header"]} ${isScrolling ? styles["scroll-menu"] : ""}`}>
      <nav className={`${styles["navbar"]} ${isMobileMenuOpen ? styles["mobile-menu-open"] : ""}`}>
        <div className={`${styles["logo"]}  ${pathname === "/" ? styles["current"] : ""}`}>
          <Link href="/">
            <Image
              src="/images/logo_baseline_white.png"
              alt="Logo de Diclicweb"
              width={131}
              height={84}
              priority
              // placeholder="blur"
              // blurDataURL="/images/logo_baseline_white.png"
            />
          </Link>
        </div>

        <ul
          ref={menuRef}
          className={`${styles["links"]} ${rocaOne.className} ${isMobileMenuOpen ? styles["menu-open"] : ""}`}
          onTransitionEnd={handleTransitionEnd}
        >
          {menuItems.map((item, index) => (
            <li key={index} className={pathname === item.path ? styles["current"] : ""}>
              <Link
                href={item.path}
                aria-current={pathname === item.path ? "page" : undefined}
                onClick={() => handleClickMenuItem(item.path)}
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
    </header>
  );
}
