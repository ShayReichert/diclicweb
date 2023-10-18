import styles from "./SectionRelatedPostsProps.module.scss";
import { fetchPostById } from "@/app/utils/blog";
import Thumbnail from "@/app/blog/components/Thumbnail/Thumbnail";

interface SectionRelatedPostsProps {
  relatedPosts: number[];
}

export default function SectionRelatedPosts({ relatedPosts }: SectionRelatedPostsProps) {
  return (
    <section className="related-posts">
      <h2>Articles Connexes</h2>
      <ul>
        {relatedPosts.map((postId) => {
          const post = fetchPostById(postId);
          return <Thumbnail key={post.id} post={post} />;
        })}
      </ul>
    </section>
  );
}
