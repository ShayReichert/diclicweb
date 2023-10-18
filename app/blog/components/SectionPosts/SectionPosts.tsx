import Thumbnail from "../Thumbnail/Thumbnail";
import styles from "./SectionPosts.module.scss";

export default function SectionPosts({ posts }: SectionPostsProps) {
  return (
    <section>
      <h2>Derniers Articles</h2>
      <ul>
        {posts.map((post) => (
          <Thumbnail key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}
