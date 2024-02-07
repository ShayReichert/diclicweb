import { fetchPostById } from "@/app/utils/blog";
import PostContainer from "./components/PostContainer/PostContainer";

export function generateMetadata({ params: { id } }: PostProps) {
  const post = fetchPostById(parseInt(id));

  return {
    title: `Blog | Diclicweb | ${post.title}`,
    description: post.excerpt,
    openGraph: {
      ...{ images: [`${post.thumbnail.path}`] },
    },
  };
}

export default function Post({ params: { id } }: PostProps) {
  const postId = parseInt(id);
  return <PostContainer postId={postId} />;
}
