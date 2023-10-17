"use client";

import { useState } from "react";
import SectionCategories from "../SectionCategories/SectionCategories";
import SectionPosts from "../SectionPosts/SectionPosts";
import { filterCategories } from "@/app/utils/blog";

const BlogContainer = ({ posts, categoriesData }: BlogContainerProps) => {
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const filteredCategories = filterCategories(categoriesData, posts);

  const handleCategoryClick = (id: number | null) => {
    if (id !== null) {
      const filtered = posts.filter((post) => post.category.includes(id));
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts(posts);
    }
  };
  return (
    <div>
      <SectionCategories categories={filteredCategories} onCategoryClick={handleCategoryClick} />
      <SectionPosts posts={filteredPosts} />
    </div>
  );
};

export default BlogContainer;
