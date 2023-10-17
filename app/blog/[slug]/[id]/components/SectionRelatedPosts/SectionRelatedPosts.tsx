import styles from "./SectionRelatedPostsProps.module.scss";
import { fetchPostById } from "@/app/utils/blog";
import ThumbnailPost from "@/app/blog/components/ThumbnailPost/ThumbnailPost";

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
          return <ThumbnailPost key={post.id} post={post} />;
        })}
      </ul>
    </section>
  );
}
