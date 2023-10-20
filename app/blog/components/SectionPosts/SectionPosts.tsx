import Thumbnail from "../Thumbnail/Thumbnail";
import styles from "./SectionPosts.module.scss";

export default function SectionPosts({ posts, currentPage }: SectionPostsProps) {
  return (
    <section className={styles["section-posts"]}>
      <ul className={styles["section-content"]}>
        {posts.map((post, index) => (
          <Thumbnail key={post.id} post={post} isFirst={currentPage === 1 && index === 0} />
        ))}
      </ul>
    </section>
  );
}
