import ThumbnailPost from "../ThumbnailPost/ThumbnailPost";
import styles from "./SectionPosts.module.scss";

export default function SectionPosts({ posts }: SectionPostsProps) {
  return (
    <section>
      <h2>Derniers Articles</h2>
      <ul>
        {posts.map((post) => (
          <ThumbnailPost key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}
