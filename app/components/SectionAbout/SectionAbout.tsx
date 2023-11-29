import styles from "./SectionAbout.module.scss";
import { rocaOne } from "../../styles/fonts/font-face";
import Image from "next/image";
import useScrollFadeIn from "@/app/utils/useScrollFadeIn";

export default function SectionAbout({ data, has_button = false, button }: SectionAboutProps) {
  const { title, text, image, image_alt } = data;
  const fadeIn = useScrollFadeIn();

  return (
    <section className={styles["section-about"]}>
      <div className={styles["content-wrapper"]}>
        <div className={styles["title-wrapper"]}>
          <h2 className={rocaOne.className} ref={fadeIn.ref} style={fadeIn.style}>
            {title}
          </h2>
        </div>
        <div className={styles["content"]}>
          <div className={styles["left-content"]}>
            <div className={styles["image"]}>
              <Image
                src={image}
                alt={image_alt ? image_alt : ""}
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
                placeholder="blur"
                blurDataURL={image}
              />
            </div>
          </div>
          <div className={styles["right-content"]}>
            <div className={styles["text-wrapper"]}>
              {text.map((paragraph, index) => (
                <div key={index} className={styles["text"]}>
                  {paragraph}
                </div>
              ))}

              {has_button ? <div className={styles["cta"]}>{button}</div> : ""}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
