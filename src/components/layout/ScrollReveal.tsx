"use client";
import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const observe = () => {
      document.querySelectorAll(".reveal").forEach((el, i) => {
        observer.observe(el);
      });
      // Stagger children
      document.querySelectorAll(
        ".platform-cards .platform-card, .articles-grid .article-card, .industries-grid .industry-item"
      ).forEach((el, i) => {
        (el as HTMLElement).style.transitionDelay = i * 0.08 + "s";
        el.classList.add("reveal");
        observer.observe(el);
      });
    };

    observe();

    return () => observer.disconnect();
  }, []);

  return null;
}
