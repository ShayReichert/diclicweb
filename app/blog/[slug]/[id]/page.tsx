import fetchPostById from "@/app/utils/fetchPostById";
import SectionTitle from "./components/SectionTitle/SectionTitle";
import SectionCatchPhrase from "@/app/components/SectionCatchPhrase/SectionCatchPhrase";
import SectionContent from "./components/SectionContent/SectionContent";

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
  const post = fetchPostById(parseInt(id));

  return (
    <main id="main">
      <SectionTitle title={post.title} />
      <SectionCatchPhrase data={{ text: post.excerpt }} />
      <SectionContent data={post} />
      {/* SectionRelatedPosts */}
    </main>
  );
}
