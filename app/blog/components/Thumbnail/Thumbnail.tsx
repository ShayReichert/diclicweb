import styles from "./Thumbnail.module.scss";
import Image from "next/image";
import Link from "next/link";

interface ThumbnailProps {
  post: Post;
}

export default function Thumbnail({ post }: ThumbnailProps) {
  return (
    <li>
      <Link href={`/blog/${post.slug}/${post.id}`} role="link">
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
      </Link>
    </li>
  );
}
