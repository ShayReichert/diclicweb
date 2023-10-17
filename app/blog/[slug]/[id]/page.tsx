import { fetchPostById, getRandomRelatedPosts } from "@/app/utils/blog";
import SectionTitle from "./components/SectionTitle/SectionTitle";
import SectionCatchPhrase from "@/app/components/SectionCatchPhrase/SectionCatchPhrase";
import SectionContent from "./components/SectionContent/SectionContent";
import SectionRelatedPosts from "./components/SectionRelatedPosts/SectionRelatedPosts";

export function generateMetadata({ params: { id } }: Props) {
  const post = fetchPostById(parseInt(id));

  return {
    title: `Blog | ${post.title}`,
    description: post.excerpt,
    openGraph: {
      ...{ images: [`${post.thumbnail}`] },
    },
  };
}

type Props = {
  params: {
    id: string;
  };
};

export default function Post({ params: { id } }: Props) {
  const postId = parseInt(id);
  const post = fetchPostById(postId);
  const totalRelatedPosts = 3;
  const relatedPosts = getRandomRelatedPosts(post.related_posts, totalRelatedPosts, postId);

  return (
    <main id="main">
      <SectionTitle title={post.title} />
      <SectionCatchPhrase data={{ text: post.excerpt }} />
      <SectionContent data={post} />
      <SectionRelatedPosts relatedPosts={relatedPosts} />
    </main>
  );
}
