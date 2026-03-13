import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import SectionLabel from "@/components/ui/SectionLabel";
import AccentLine from "@/components/ui/AccentLine";

export const metadata: Metadata = {
  title: "The Knowledge Hub — Modular Architecture Insights & Guides",
  description:
    "Articles, industry insights, and technical guides from the Modsol team — covering modular architecture, events, exhibitions, and branded environments.",
};

const categories = [
  {
    name: "Articles",
    href: "/knowledge-hub/articles",
    code: "01",
    description: "Thinking, perspective, and case-based writing from the Modsol team on temporary architecture, modular design, and the events industry.",
    count: "12 Articles",
  },
  {
    name: "Industry Insights",
    href: "/knowledge-hub/industry-insights",
    code: "02",
    description: "Market trends, sector analysis, and forward-looking commentary on the temporary architecture and events industry.",
    count: "8 Insights",
  },
  {
    name: "Technical Guides",
    href: "/knowledge-hub/technical-guides",
    code: "03",
    description: "Practical technical documentation — load tables, system guides, specification sheets, and installation references for the Modsol platform.",
    count: "6 Guides",
  },
];

const latestArticles = [
  {
    category: "Industry Insights",
    title: "The Rise of Permanent-Quality Temporary Architecture",
    date: "March 2025",
    href: "/knowledge-hub/industry-insights",
  },
  {
    category: "Technical Guides",
    title: "Modblock Load Calculations: What You Need to Know",
    date: "February 2025",
    href: "/knowledge-hub/technical-guides",
  },
  {
    category: "Articles",
    title: "Designing for Repeatability: The Modsol Approach to Brand Activations",
    date: "January 2025",
    href: "/knowledge-hub/articles",
  },
  {
    category: "Industry Insights",
    title: "Why Exhibition Stand Design Is Finally Getting Serious",
    date: "December 2024",
    href: "/knowledge-hub/industry-insights",
  },
];

export default function KnowledgeHubPage() {
  return (
    <>
      <PageHero
        label="The Knowledge Hub"
        title="Insights. Expertise. Thinking."
        subtitle="Articles, technical guides, and industry insights from the people who build the industry's most demanding temporary structures."
      />

      {/* Categories */}
      <section className="py-24 lg:py-32" style={{ background: "#000000" }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <SectionLabel className="mb-12">Categories</SectionLabel>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className="group block p-10"
                style={{ background: "#000" }}
              >
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="text-[#C6FF02]"
                    style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", letterSpacing: "0.2em" }}
                  >
                    {cat.code}
                  </span>
                  <span
                    className="text-white/20 group-hover:text-[#C6FF02] transition-colors"
                    style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", letterSpacing: "0.15em" }}
                  >
                    {cat.count}
                  </span>
                </div>
                <AccentLine className="w-8 mb-6" />
                <h2
                  className="text-white uppercase mb-4 group-hover:text-[#C6FF02] transition-colors"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem", letterSpacing: "0.04em" }}
                >
                  {cat.name}
                </h2>
                <p
                  className="text-white/40 text-sm leading-relaxed mb-6"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {cat.description}
                </p>
                <span
                  className="text-[#C6FF02] uppercase"
                  style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", letterSpacing: "0.15em" }}
                >
                  Browse →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest content */}
      <section className="py-24 arch-grid" style={{ background: "#0A0A0A" }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <SectionLabel className="mb-12">Latest Content</SectionLabel>
          <div className="space-y-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {latestArticles.map((article, i) => (
              <Link
                key={i}
                href={article.href}
                className="group flex items-center justify-between p-6 hover:bg-white/03 transition-colors"
                style={{ background: "#0A0A0A" }}
              >
                <div className="flex items-start gap-6">
                  <span
                    className="text-[#C6FF02] shrink-0 mt-0.5"
                    style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", letterSpacing: "0.2em" }}
                  >
                    {article.category}
                  </span>
                  <h3
                    className="text-white group-hover:text-[#C6FF02] transition-colors"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.0625rem", fontWeight: 400 }}
                  >
                    {article.title}
                  </h3>
                </div>
                <div className="flex items-center gap-6 shrink-0">
                  <span
                    className="hidden md:block text-white/30"
                    style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", letterSpacing: "0.12em" }}
                  >
                    {article.date}
                  </span>
                  <span className="text-white/20 group-hover:text-[#C6FF02] transition-colors">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
