"use client";

import { useCallback, useEffect, useState, RefCallback } from "react";

interface UseScrollFadeInArgs {
  duration?: number;
  delay?: number;
  translateY?: string;
}

const useScrollFadeIn = ({ duration = 0.4, delay = 0, translateY = "100%" }: UseScrollFadeInArgs = {}) => {
  const [element, setElement] = useState<HTMLElement | null>(null);

  const handleScroll = useCallback(() => {
    if (element) {
      const { top, bottom } = element.getBoundingClientRect();
      const vHeight = window.innerHeight || document.documentElement.clientHeight;

      if (top < vHeight && bottom >= 0) {
        element.style.transition = `opacity ${duration}s ease-in-out ${delay}s, transform ${duration}s ease-in-out ${delay}s`;
        element.style.opacity = "1";
        element.style.transform = "translateY(0px)";
      }
    }
  }, [element, duration, delay, translateY]);

  useEffect(() => {
    if (element) {
      handleScroll();

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [element, handleScroll]);

  const setRef: RefCallback<HTMLElement> = useCallback((node) => {
    if (node) {
      setElement(node);
    }
  }, []);

  return {
    ref: setRef,
    style: {
      opacity: 0,
      transform: `translateY(${translateY})`,
    },
  };
};

export default useScrollFadeIn;
