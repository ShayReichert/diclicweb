"use client";

import { useState } from "react";
import SectionCategories from "../SectionCategories/SectionCategories";
import SectionPosts from "../SectionPosts/SectionPosts";
import Pagination from "../Pagination/Pagination";
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
      <SectionPosts posts={currentPosts} currentPage={currentPage} />
      {filteredPosts.length > postsPerPage && <Pagination currentPage={currentPage} totalPages={totalPages} next={next} prev={prev} />}
    </div>
  );
};

export default BlogContainer;
