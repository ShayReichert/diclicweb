"use client";

import { useState, KeyboardEvent } from "react";
import styles from "./SectionCategories.module.scss";

export default function SectionCategories({ categories, onCategoryClick }: SectionCategoriesProps) {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);

  const handleClick = (category: Category | null) => {
    setActiveCategory(category);
    onCategoryClick(category ? category.id : null);
  };

  const handleKeyDown = (e: KeyboardEvent, category: Category | null) => {
    if (e.key === "Enter" || e.key === " ") {
      handleClick(category);
      e.preventDefault();
    }
  };

  return (
    <section id="section-categories" className={styles["section-categories"]}>
      <div className={styles["background-circle"]}></div>

      <div className={styles["background-content"]}>
        <div className={styles["content"]}>
          <ul>
            <li
              onClick={() => handleClick(null)}
              onKeyDown={(e) => handleKeyDown(e, null)}
              className={!activeCategory ? styles["active"] : ""}
              tabIndex={0}
            >
              TOUT
            </li>
            {categories.map((category) => (
              <li
                key={category.id}
                onClick={() => handleClick(category)}
                onKeyDown={(e) => handleKeyDown(e, category)}
                className={activeCategory && activeCategory.id === category.id ? styles["active"] : ""}
                tabIndex={0}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
