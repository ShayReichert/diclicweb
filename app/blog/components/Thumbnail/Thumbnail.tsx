import { formatDate } from "@/app/utils/formatDate";
import styles from "./Thumbnail.module.scss";
import Image from "next/image";
import Link from "next/link";

interface ThumbnailProps {
  post: Post;
  isFirst: boolean;
}

export default function Thumbnail({ post, isFirst }: ThumbnailProps) {
  return (
    <li className={`${styles["thumbnail"]} ${isFirst ? styles["fullwidth"] : ""}`}>
      <Link href={`/blog/${post.slug}/${post.id}`} role="link">
        <div className={styles["thumbnail-content"]}>
          <div className={styles["image-wrapper"]}>
            <Image
              src={post.thumbnail.path}
              alt={post.thumbnail.alt ? post.thumbnail.alt : ""}
              fill
              sizes="(max-width: 767px) 100vw, 50vw"
              placeholder="blur"
              blurDataURL={post.thumbnail.path}
            />
          </div>
          <div className={styles["thumbnail-text"]}>
            <h3>{post.title}</h3>
            <p className={styles["date"]}>{formatDate(post.date)}</p>
            <p className={styles["excert"]}>{post.excerpt}</p>
          </div>
        </div>
      </Link>
    </li>
  );
}
