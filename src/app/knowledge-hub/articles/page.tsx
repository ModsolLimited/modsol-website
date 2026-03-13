import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import SectionLabel from "@/components/ui/SectionLabel";
import AccentLine from "@/components/ui/AccentLine";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Articles — Knowledge Hub",
  description:
    "Thinking, perspective, and case-based writing from the Modsol team on temporary architecture, modular design, and the events industry.",
};

const articles = [
  {
    title: "Designing for Repeatability: The Modsol Approach to Brand Activations",
    excerpt: "How modular thinking allows brands to maintain visual consistency across dozens of activations without starting from scratch.",
    date: "January 2025",
    readTime: "6 min read",
  },
  {
    title: "The Case for Engineering-Led Temporary Architecture",
    excerpt: "When your temporary structure carries your brand, the standard of engineering communicates as loudly as the graphics.",
    date: "November 2024",
    readTime: "5 min read",
  },
  {
    title: "What Film Productions Get Wrong About Temporary Structures",
    excerpt: "On-location build requirements are some of the most demanding in any sector — and most productions underestimate them.",
    date: "October 2024",
    readTime: "7 min read",
  },
  {
    title: "The Real Cost of Non-Modular Exhibition Stands",
    excerpt: "Custom bespoke sounds expensive. Non-modular custom is almost always more expensive — once you factor in the full lifecycle.",
    date: "September 2024",
    readTime: "5 min read",
  },
  {
    title: "Five Reasons Hospitality Structures Fail at Events",
    excerpt: "From structural integrity to service flow — the avoidable mistakes that turn premium hospitality into an ordeal.",
    date: "August 2024",
    readTime: "6 min read",
  },
  {
    title: "How to Brief a Modular Structure Supplier",
    excerpt: "The information your modular supplier actually needs to quote accurately and deliver confidently — a practical guide.",
    date: "July 2024",
    readTime: "4 min read",
  },
];

export default function ArticlesPage() {
  return (
    <>
      <PageHero
        label="Knowledge Hub / Articles"
        title="Articles"
        subtitle="Thinking, perspective, and case-based writing from the Modsol team on temporary architecture, modular design, and the events industry."
      />

      <section className="py-24 lg:py-32" style={{ background: "#000000" }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <SectionLabel className="mb-12">All Articles</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {articles.map((article, i) => (
              <div key={i} className="group p-8 cursor-pointer hover:bg-white/02 transition-colors" style={{ background: "#000" }}>
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="text-[#C6FF02] uppercase"
                    style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", letterSpacing: "0.2em" }}
                  >
                    Article
                  </span>
                  <span
                    className="text-white/20"
                    style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", letterSpacing: "0.1em" }}
                  >
                    {article.date}
                  </span>
                </div>
                <AccentLine className="w-6 mb-5" />
                <h3
                  className="text-white mb-3 group-hover:text-[#C6FF02] transition-colors leading-snug"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.125rem", fontWeight: 500 }}
                >
                  {article.title}
                </h3>
                <p
                  className="text-white/40 text-sm leading-relaxed mb-6"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span
                    className="text-[#C6FF02] uppercase"
                    style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", letterSpacing: "0.15em" }}
                  >
                    Read →
                  </span>
                  <span
                    className="text-white/20"
                    style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px" }}
                  >
                    {article.readTime}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
