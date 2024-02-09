import { fetchPostById, getRandomRelatedPosts } from "@/app/utils/blog";
import SectionBlogTitle from "./components/SectionBlogTitle/SectionBlogTitle";
import SectionCatchPhrase from "@/app/components/SectionCatchPhrase/SectionCatchPhrase";
import SectionContent from "./components/SectionContent/SectionContent";
import SectionRelatedPosts from "./components/SectionRelatedPosts/SectionRelatedPosts";

export function generateMetadata({ params: { id } }: PostProps) {
  const post = fetchPostById(parseInt(id));
  return {
    title: `Blog | Diclicweb | ${post.title}`,
    description: post.excerpt,
    openGraph: {
      ...{ images: [`${post.thumbnail}`] },
    },
  };
}

export default function Post({ params: { id } }: PostProps) {
  const postId = parseInt(id);
  const post = fetchPostById(postId);
  const totalRelatedPosts = 3;
  const relatedPosts = getRandomRelatedPosts(post.related_posts, totalRelatedPosts, postId);

  return (
    <main id="main">
      <SectionBlogTitle title={post.title} />
      <SectionCatchPhrase data={{ text: post.excerpt }} />
      <SectionContent data={post} />
      <SectionRelatedPosts relatedPosts={relatedPosts} />
    </main>
  );
}
