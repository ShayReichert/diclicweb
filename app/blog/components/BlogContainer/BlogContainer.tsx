"use client";

import { useState } from "react";
import SectionCategories from "../SectionCategories/SectionCategories";
import SectionPosts from "../SectionPosts/SectionPosts";
import { filterCategories } from "@/app/utils/blog";
import { usePagination } from "@/app/utils/usePagination";

const BlogContainer = ({ posts, categoriesData }: BlogContainerProps) => {
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const filteredCategories = filterCategories(categoriesData, posts);

  const postsPerPage = 7;
  const { currentPage, totalPages, next, prev, getPageItems, setCurrentPage } = usePagination(filteredPosts.length, postsPerPage);
  const currentPosts = getPageItems(filteredPosts);

  const handleCategoryClick = (id: number | null) => {
    if (id !== null) {
      const filtered = posts.filter((post) => post.category.includes(id));
      setFilteredPosts(filtered);
      setCurrentPage(1);
    } else {
      setFilteredPosts(posts);
    }
  };
  return (
    <div>
      <SectionCategories categories={filteredCategories} onCategoryClick={handleCategoryClick} />
      <SectionPosts posts={currentPosts} />
      <div className="pagination">
        <button onClick={prev} disabled={currentPage === 1}>
          Précédent
        </button>
        <button onClick={next} disabled={currentPage === totalPages}>
          Suivant
        </button>
      </div>
    </div>
  );
};

export default BlogContainer;
