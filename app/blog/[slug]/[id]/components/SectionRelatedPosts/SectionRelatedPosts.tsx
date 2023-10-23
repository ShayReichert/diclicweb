import Link from "next/link";
import Image from "next/image";
import ItemPost from "@/app/blog/components/ItemPost/ItemPost";
import styles from "./SectionRelatedPosts.module.scss";
import { rocaOne } from "@/app/styles/fonts/font-face";
import { fetchPostById } from "@/app/utils/blog";
interface SectionRelatedPostsProps {
  relatedPosts: number[];
}

export default function SectionRelatedPosts({ relatedPosts }: SectionRelatedPostsProps) {
  return (
    <section className={styles["related-posts"]}>
      <div className={styles["section-content"]}>
        <h2 className={rocaOne.className}>Articles similaires</h2>
        <ul>
          {relatedPosts.map((postId) => {
            const post = fetchPostById(postId);
            return <ItemPost key={post.id} post={post} />;
          })}
        </ul>
        <Link href="/blog/#section-categories" role="link" className={styles["blog-link"]}>
          <Image src="/images/blog/arrow.png" alt="arrow-left" width={30} height={30} />
          <span>Voir tous les articles</span>
        </Link>
      </div>
    </section>
  );
}
