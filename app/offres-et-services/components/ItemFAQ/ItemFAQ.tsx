import { useEffect } from "react";

import styles from "./ItemFAQ.module.scss";
import Image from "next/image";

export default function ItemFAQ({ item, index, handleToggle, openIndex, answerRefs }: ItemFAQProps) {
  // Open first question on page load
  useEffect(() => {
    const firstQuestion = document.querySelector(`.${styles["question"]}`);

    if (firstQuestion) {
      const clickEvent = new MouseEvent("click", {
        view: window,
        bubbles: true,
        cancelable: true,
      });

      firstQuestion.dispatchEvent(clickEvent);
    }
  }, []);

  return (
    <div className={styles["faq-item"]} key={index}>
      <div className={styles["question"]} onClick={() => handleToggle(index)}>
        <h3>{item.question}</h3>
        <span className={`${openIndex === index ? styles["arrow-up"] : styles["arrow-down"]}`}>
          <Image priority src="/images/services/arrow.svg" width={15} height={26} alt="" />
        </span>
      </div>
      <div ref={answerRefs[index]} className={`${styles["answer"]} `}>
        {item.answer}
      </div>
    </div>
  );
}
