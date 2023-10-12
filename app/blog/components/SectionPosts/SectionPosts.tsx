import styles from "./SectionPosts.module.scss";

export default function SectionPosts({ posts }: SectionPostsProps) {
  return (
    <section>
      <h2>Derniers Articles</h2>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
