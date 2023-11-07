"use client";

import React from "react";
import { FC, PropsWithChildren, RefObject, useEffect, useRef, useState } from "react";

export const useElementOnScreen = (ref: RefObject<Element>, rootMargin = "0px") => {
  const [isIntersecting, setIsIntersecting] = useState(true);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return isIntersecting;
};

export const AnimateIn: FC<PropsWithChildren<{ index: number }>> = ({ children, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useElementOnScreen(ref);
  const delay = index * 200;

  return React.cloneElement(children as React.ReactElement, {
    ref,
    style: {
      opacity: onScreen ? 1 : 0,
      transform: onScreen ? "none" : "translate(0, 30%)",
      transition: `600ms ${delay}ms cubic-bezier(0.63, 0.5, 0.62, 1.2) `,
      ...((children as React.ReactElement).props.style || {}),
    },
  });
};
