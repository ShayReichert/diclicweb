import styles from "./SectionPosts.module.scss";
import Link from "next/link";

export default function SectionPosts({ posts }: SectionPostsProps) {
  return (
    <section>
      <h2>Derniers Articles</h2>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/blog/${post.slug}/${post.id}`} role="link">
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
