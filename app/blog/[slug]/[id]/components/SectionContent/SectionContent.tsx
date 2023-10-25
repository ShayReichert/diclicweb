import styles from "./SectionContent.module.scss";
import Image from "next/image";
import { formatDate } from "@/app/utils/formatDate";
import { getCategoryName } from "@/app/utils/blog";
import { categoriesData } from "@/app/_data/entities/categories";

interface SectionContentProps {
  data: Post;
}

export default function SectionContent({ data }: SectionContentProps) {
  const { content, thumbnail } = data;

  return (
    <section className={styles["section-content"]}>
      <div className={styles["main-image-wrapper"]}>
        <Image src={thumbnail.path} alt={thumbnail.alt} fill sizes="(max-width: 767px) 100vw, 80vw" placeholder="blur" blurDataURL={thumbnail.path} />
      </div>
      {content.map((item, index) => {
        switch (item.type) {
          case "paragraph":
            return (
              <div key={index} className={styles["text-wrapper"]}>
                {item.text}
              </div>
            );
          case "image":
            return (
              item.path && (
                <div key={index} className={styles["image-wrapper"]}>
                  <Image
                    src={item.path}
                    alt={item.alt ? item.alt : ""}
                    fill
                    sizes="(max-width: 767px) 100vw, 50vw"
                    placeholder="blur"
                    blurDataURL={item.path}
                  />
                </div>
              )
            );
          default:
            return null;
        }
      })}
      <div className={styles["infos-wrapper"]}>
        <p>
          {data.author && <span>{data.author}</span>} - {data.date && <span>{formatDate(data.date)}</span>} -{" "}
          {data.category && <span>{getCategoryName(categoriesData.categories, data.category)}</span>}
        </p>
      </div>
    </section>
  );
}
