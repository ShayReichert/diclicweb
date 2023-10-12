"use client";

import { useState } from "react";
import styles from "./SectionCategories.module.scss";

export default function SectionCategories({ data, onCategoryClick }: SectionCategoriesProps) {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);

  const handleClick = (category: Category | null) => {
    setActiveCategory(category);
    onCategoryClick(category ? category.id : null);
  };

  return (
    <section className={styles["section-categories"]}>
      <div className={styles["background-circle"]}></div>

      <div className={styles["background-content"]}>
        <div className={styles["content"]}>
          <ul>
            <li onClick={() => handleClick(null)}>TOUT</li>
            {data.categories.map((category) => (
              <li key={category.id} onClick={() => handleClick(category)}>
                {category.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
