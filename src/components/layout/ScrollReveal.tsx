"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px 0px 0px" }
    );

    const observe = () => {
      document.querySelectorAll(".reveal").forEach((el) => {
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

    // Fallback: force all reveal elements visible after 300ms
    const timer = setTimeout(() => {
      document.querySelectorAll(".reveal").forEach((el) => {
        el.classList.add("visible");
      });
    }, 300);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [pathname]); // Re-run on route change to pick up new page elements

  return null;
}
