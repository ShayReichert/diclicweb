import type { Metadata } from "next";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import { blogCategoriesData } from "../_data/entities/blogCaterogies";
import posts from "../_data/blog";
import BlogContainer from "./components/BlogContainer/BlogContainer";

export const metadata: Metadata = {
  title: "Blog | Diclicweb",
  description:
    "Retrouvez ici mes actualités, des conseils et des astuces pour gérer votre site web (éco-conception, optimisation, inclusivité et accessibilité web...).",
};

export default function Blog() {
  return (
    <main id="main">
      <SectionTitle data={{ title: "Blog" }} />
      <BlogContainer posts={posts} blogCategoriesData={blogCategoriesData} />
    </main>
  );
}
