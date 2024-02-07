"use client";

import { useState, useEffect } from "react";
import { fetchPostById, getRandomRelatedPosts } from "@/app/utils/blog";
import SectionBlogTitle from "../SectionBlogTitle/SectionBlogTitle";
import SectionCatchPhrase from "@/app/components/SectionCatchPhrase/SectionCatchPhrase";
import SectionContent from "../SectionContent/SectionContent";
import SectionRelatedPosts from "../SectionRelatedPosts/SectionRelatedPosts";
import Loader from "@/app/components/Loader/Loader";
import SectionTitle from "@/app/components/SectionTitle/SectionTitle";
import Button from "@/app/components/Button/Button";
import styles from "@/app/styles/not-found.module.scss";

export default function PostContainer({ postId }: { postId: number }) {
  const [post, setPost] = useState<Post | null>(null);
  const [relatedPostIds, setRelatedPostIds] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPostData = async () => {
      setLoading(true);
      try {
        const fetchedPost = await fetchPostById(postId);
        setPost(fetchedPost);

        if (fetchedPost.related_posts && fetchedPost.related_posts.length > 0) {
          const ids = getRandomRelatedPosts(fetchedPost.related_posts, 3, postId);
          setRelatedPostIds(ids);
        }
      } catch (error) {
        console.error("Erreur lors du chargement de l'article :", error);
      } finally {
        setLoading(false);
      }
    };

    loadPostData();
  }, [postId]);

  if (loading) {
    return <Loader />;
  }

  if (!post) {
    return (
      <main id="main" className={styles["not-found"]}>
        <SectionTitle data={{ title: "C'est fâcheux...", baseline: "L'article n'a pas pu être chargé" }} has_decoration={false} />;
        <Button href="/" text="Retour&nbsp;à&nbsp;l'accueil" />
      </main>
    );
  }

  return (
    <main id="main">
      <SectionBlogTitle title={post.title} />
      <SectionCatchPhrase data={{ text: post.excerpt }} />
      <SectionContent data={post} />
      <SectionRelatedPosts relatedPosts={relatedPostIds} />
    </main>
  );
}
