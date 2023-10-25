import { formatDate } from "@/app/utils/formatDate";
import styles from "./ItemPost.module.scss";
import Image from "next/image";
import Link from "next/link";
import { rocaOne } from "@/app/styles/fonts/font-face";

interface ItemPostProps {
  post: Post;
  isFirst?: boolean;
}

export default function ItemPost({ post, isFirst }: ItemPostProps) {
  return (
    <li className={`${styles["item-post"]} ${isFirst ? styles["fullwidth"] : ""}`}>
      <Link href={`/blog/${post.slug}/${post.id}`} role="link">
        <div className={styles["item-post-content"]}>
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
          <div className={styles["item-post-text"]}>
            <h3 className={rocaOne.className}>{post.title}</h3>
            <p className={styles["date"]}>{formatDate(post.date)}</p>
            <p className={styles["excert"]}>{post.excerpt}</p>
          </div>
        </div>
      </Link>
    </li>
  );
}
