import { useEffect } from "react";
import styles from "./ItemFAQ.module.scss";
import Image from "next/image";

export default function ItemFAQ({ item, index, handleToggle, openIndex, answerRef }: ItemFAQProps) {
  // Open first question on page load
  useEffect(() => {
    const firstQuestion = document.querySelectorAll(`.${styles["question"]}`)[1];

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
    <div className={styles["faq-item"]}>
      <div className={styles["question"]} onClick={() => handleToggle(index)}>
        <h3>{item.question}</h3>
        <span className={`${openIndex === index ? styles["arrow-up"] : styles["arrow-down"]}`}>
          <Image src="/images/services/arrow.svg" width={15} height={26} alt="" />
        </span>
      </div>

      <div ref={answerRef} className={`${styles["answer"]} `}>
        {item.answer.map((text, index) => (
          <div key={index} className={styles["text"]}>
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}
