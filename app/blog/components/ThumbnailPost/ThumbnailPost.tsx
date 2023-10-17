import styles from "./ThumbnailPost.module.scss";
import Image from "next/image";
import Link from "next/link";

interface ThumbnailPostProps {
  post: Post;
}

export default function ThumbnailPost({ post }: ThumbnailPostProps) {
  return (
    <li>
      <Link href={`/blog/${post.slug}/${post.id}`} role="link">
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
      </Link>
    </li>
  );
}
