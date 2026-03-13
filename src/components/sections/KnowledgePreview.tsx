import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import OutlineButton from "@/components/ui/OutlineButton";
import AccentLine from "@/components/ui/AccentLine";

const articles = [
  {
    category: "Industry Insights",
    title: "The Rise of Permanent-Quality Temporary Architecture",
    excerpt: "Why brands and event producers are demanding higher standards from temporary structures — and how modular systems are delivering.",
    date: "March 2025",
    href: "/knowledge-hub/industry-insights",
  },
  {
    category: "Technical Guides",
    title: "Modblock Load Calculations: What You Need to Know",
    excerpt: "A practical guide to understanding load ratings, stack heights, and safe configurations for the Modblock system.",
    date: "February 2025",
    href: "/knowledge-hub/technical-guides",
  },
  {
    category: "Articles",
    title: "Designing for Repeatability: The Modsol Approach to Brand Activations",
    excerpt: "How modular thinking allows brands to maintain visual consistency across dozens of activations without starting from scratch.",
    date: "January 2025",
    href: "/knowledge-hub/articles",
  },
];

export default function KnowledgePreview() {
  return (
    <section className="py-24 lg:py-32" style={{ background: "#000000" }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div>
            <SectionLabel className="mb-4">The Knowledge Hub</SectionLabel>
            <h2
              className="text-white uppercase leading-none"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                letterSpacing: "0.02em",
              }}
            >
              Insights.<br />
              <span className="text-[#C6FF02]">Expertise. Thinking.</span>
            </h2>
          </div>
          <OutlineButton href="/knowledge-hub">All Articles</OutlineButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
          {articles.map((article, i) => (
            <Link
              key={i}
              href={article.href}
              className="group block p-8 transition-colors hover:bg-white/02"
              style={{ background: "#000" }}
            >
              <div className="flex items-center justify-between mb-6">
                <span
                  className="text-[#C6FF02] uppercase"
                  style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", letterSpacing: "0.2em" }}
                >
                  {article.category}
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
                className="text-white mb-4 group-hover:text-[#C6FF02] transition-colors duration-200 leading-tight"
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

              <span
                className="text-[#C6FF02] uppercase"
                style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", letterSpacing: "0.15em" }}
              >
                Read Article →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
