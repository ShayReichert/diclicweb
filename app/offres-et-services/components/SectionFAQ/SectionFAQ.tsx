"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./SectionFAQ.module.scss";
import ItemFAQ from "../ItemFAQ/ItemFAQ";

export default function SectionFAQ({ data }: FAQProps) {
  const { faq } = data;
  const [openIndex, setOpenIndex] = useState(-1);
  const answerRefs = faq.map(() => useRef<HTMLDivElement | null>(null));
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (height !== null) {
      answerRefs.forEach((ref, index) => {
        if (openIndex === index && ref.current !== null) {
          ref.current.style.height = `${height}px`;
        } else if (ref.current !== null) {
          ref.current.style.height = "0";
        }
      });
    }
  }, [height, openIndex]);

  const handleToggle = (index: number) => {
    const targetAnswer = answerRefs[index]?.current;

    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);

      if (targetAnswer) {
        const newHeight = targetAnswer.scrollHeight;
        setHeight(newHeight);
      }
    }
  };

  return (
    <section className={styles["section-faq"]}>
      <div className={styles["section-content"]}>
        <h2>FAQ</h2>

        <div className={styles["faq-wrapper"]}>
          {faq.map((item, index) => (
            <ItemFAQ key={index} index={index} item={item} handleToggle={handleToggle} openIndex={openIndex} answerRefs={answerRefs} />
          ))}
        </div>
      </div>
    </section>
  );
}
