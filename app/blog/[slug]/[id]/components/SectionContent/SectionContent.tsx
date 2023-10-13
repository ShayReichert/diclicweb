import styles from "./SectionContent.module.scss";
import Image from "next/image";

interface SectionContentProps {
  data: Post;
}

export default function SectionContent({ data }: SectionContentProps) {
  const { content } = data;

  return (
    <section>
      {content.map((item, index) => {
        switch (item.type) {
          case "paragraph":
            return <div key={index}>{item.text}</div>;
          case "image":
            return (
              item.path && (
                <div className={styles["image-wrapper"]}>
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
    </section>
  );
}
