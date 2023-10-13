import type { Metadata } from "next";
import fetchPostById from "@/app/utils/fetchPostById";
import SectionTitle from "./components/SectionTitle/SectionTitle";

// export const metadata: Metadata = {
//   title: "Blog | Diclicweb",
//   description:
//     "Retrouvez ici mes actualités, des conseils et des astuces pour gérer votre site web (éco-conception, optimisation, inclusivité et accessibilité web...).",
// };

//

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
      {/* Section catchphrase */}
      {/* SectionPostContent */}
      {/* SectionRelatedPosts */}
    </main>
  );
}
