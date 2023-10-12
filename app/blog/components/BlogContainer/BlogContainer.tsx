"use client";

import { useState } from "react";
import SectionCategories from "../SectionCategories/SectionCategories";
import SectionPosts from "../SectionPosts/SectionPosts";

const BlogContainer = ({ posts, blogCategoriesData }: BlogContainerProps) => {
  const [filteredPosts, setFilteredPosts] = useState(posts);

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
      <SectionCategories data={blogCategoriesData} onCategoryClick={handleCategoryClick} />
      <SectionPosts posts={filteredPosts} />
    </div>
  );
};

export default BlogContainer;
