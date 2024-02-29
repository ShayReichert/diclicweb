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
    {
      id: "services",
      label: "Offres et services",
      path: "/offres-et-services",
      subMenu: [
        { id: "pack-site-vitrine", label: "Pack Site Vitrine", path: "/offres-et-services/packs#site-vitrine" },
        { id: "pack-site-e-commerce", label: "Pack Site E-commerce", path: "/offres-et-services/packs#site-e-commerce" },
        { id: "site-sur-mesure", label: "Site Sur-mesure", path: "/offres-et-services#site-sur-mesure" },
        { id: "charte-graphique", label: "Charte Graphique", path: "/offres-et-services/packs#charte-graphique" },
      ],
    },
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

  const isParentOrSubMenuCurrent = (parentPath: string, subMenu: any[] | undefined) => {
    if (pathname.startsWith(parentPath)) {
      return true;
    }

    if (subMenu) {
      return subMenu.some((subItem) => {
        return pathname.includes(subItem.path.split("#")[0]) || pathname.includes(subItem.path.split("#")[1]);
      });
    }

    return false;
  };

  const removeMovingBar = () => {
    menuRef.current?.querySelectorAll(`.${styles["current"]}`).forEach((item) => {
      item.classList.remove(styles["current"]);
    });
    setMovingBarPosition({ width: 0, left: 0 });
  };

  const updateMovingBarPosition = () => {
    let currentMenuItem = menuRef.current?.querySelector(`[href="${currentPath}"]`) as HTMLElement;

    // If no main menu item is found, search in sub-menus
    if (!currentMenuItem) {
      menuItems.forEach((item) => {
        if (pathname.startsWith(item.path)) {
          currentMenuItem = menuRef.current?.querySelector(`[href="${item.path}"]`) as HTMLElement;
        }

        item.subMenu?.forEach((subItem) => {
          if (pathname === subItem.path || pathname.startsWith(subItem.path.split("#")[0])) {
            currentMenuItem = menuRef.current?.querySelector(`[href="${item.path}"]`) as HTMLElement;
          }
        });
      });
    }

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

    // Remove focus from all sub-menu items if the path is "/offres-et-services" or included in a sub-menu
    if (path === "/offres-et-services" || menuItems.some((item) => item.subMenu && item.subMenu.some((subItem) => subItem.path === path))) {
      const parentMenuItem = menuRef.current?.querySelector(`[href="${path}"]`) as HTMLAnchorElement;

      if (parentMenuItem) {
        parentMenuItem.blur();
      }
    }
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
            <Image src="/images/logo_baseline_white.webp" alt="Logo de Diclicweb" width={131} height={82} priority />
          </Link>
        </div>

        <div
          ref={menuRef as React.RefObject<HTMLDivElement>}
          className={`${styles["links"]} ${rocaOne.className} ${isMobileMenuOpen ? styles["menu-open"] : ""}`}
          onTransitionEnd={handleTransitionEnd}
        >
          <ul>
            {menuItems.map((item, index) => (
              <li key={index} className={isParentOrSubMenuCurrent(item.path, item.subMenu) ? styles["current"] : ""}>
                <Link
                  href={item.path}
                  aria-current={isParentOrSubMenuCurrent(item.path, item.subMenu) ? "page" : undefined}
                  onClick={() => handleClickMenuItem(item.path)}
                  role="link"
                  tabIndex={0}
                  onKeyDown={handleLinkKeyDown}
                >
                  {item.label}
                </Link>
                {item.subMenu && (
                  <ul className={styles["sub-menu"]}>
                    {item.subMenu.map((subItem, subIndex) => (
                      <li key={subIndex} className={pathname.includes(subItem.path) ? styles["current"] : ""}>
                        <Link
                          href={subItem.path}
                          onClick={() => handleClickMenuItem(subItem.path)}
                          role="link"
                          tabIndex={0}
                          onKeyDown={handleLinkKeyDown}
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <span className={styles["moving-bar"]} style={{ width: `${movingBarPosition.width}px`, left: `${movingBarPosition.left}px` }}></span>
        </div>

        <MobileMenuIcon isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
      </nav>
    </header>
  );
}
