import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import SectionLabel from "@/components/ui/SectionLabel";
import AccentLine from "@/components/ui/AccentLine";

export const metadata: Metadata = {
  title: "Industry Insights — Knowledge Hub",
  description:
    "Market trends, sector analysis, and forward-looking commentary on temporary architecture, events, exhibitions, and branded environments.",
};

const insights = [
  {
    title: "The Rise of Permanent-Quality Temporary Architecture",
    excerpt: "Why brands and event producers are demanding higher standards from temporary structures — and how modular systems are delivering.",
    date: "March 2025",
    readTime: "8 min read",
    tag: "Market Trend",
  },
  {
    title: "Why Exhibition Stand Design Is Finally Getting Serious",
    excerpt: "After a decade of declining standards, the exhibition industry is experiencing a quality renaissance driven by brand-led demand.",
    date: "December 2024",
    readTime: "7 min read",
    tag: "Exhibitions",
  },
  {
    title: "The Sustainability Shift in Temporary Architecture",
    excerpt: "How the events industry is rethinking the lifecycle of temporary structures — and why modularity is the most honest answer.",
    date: "October 2024",
    readTime: "6 min read",
    tag: "Sustainability",
  },
  {
    title: "Live Events Post-2020: What's Changed in Structural Requirements",
    excerpt: "The regulatory and insurance landscape for temporary structures at live events has shifted significantly. Here's what operators need to know.",
    date: "September 2024",
    readTime: "9 min read",
    tag: "Regulation",
  },
  {
    title: "Brand Activation Budgets in 2025: Where the Money Is Moving",
    excerpt: "Analysis of brand activation investment trends — and why physical, spatial experiences are gaining share from digital.",
    date: "August 2024",
    readTime: "5 min read",
    tag: "Brand Activations",
  },
  {
    title: "The Future of Exhibition Infrastructure: A 2030 Outlook",
    excerpt: "How technology integration, sustainability requirements, and changing event formats will reshape exhibition stand design by the end of the decade.",
    date: "June 2024",
    readTime: "10 min read",
    tag: "Future Outlook",
  },
];

export default function IndustryInsightsPage() {
  return (
    <>
      <PageHero
        label="Knowledge Hub / Industry Insights"
        title="Industry Insights"
        subtitle="Market trends, sector analysis, and forward-looking commentary on temporary architecture, events, and branded environments."
      />

      <section className="py-24 lg:py-32" style={{ background: "#000000" }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <SectionLabel className="mb-12">All Insights</SectionLabel>
          <div className="space-y-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {insights.map((insight, i) => (
              <div
                key={i}
                className="group p-8 flex flex-col md:flex-row md:items-start md:justify-between gap-6 hover:bg-white/02 transition-colors cursor-pointer"
                style={{ background: "#000" }}
              >
                <div className="flex items-start gap-6 flex-1">
                  <div className="shrink-0 mt-1">
                    <span
                      className="text-[#C6FF02] uppercase block"
                      style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", letterSpacing: "0.2em" }}
                    >
                      {insight.tag}
                    </span>
                  </div>
                  <div>
                    <AccentLine className="w-6 mb-4" />
                    <h3
                      className="text-white mb-2 group-hover:text-[#C6FF02] transition-colors"
                      style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.125rem", fontWeight: 500 }}
                    >
                      {insight.title}
                    </h3>
                    <p
                      className="text-white/40 text-sm leading-relaxed"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {insight.excerpt}
                    </p>
                  </div>
                </div>
                <div className="shrink-0 flex flex-col items-end gap-2">
                  <span
                    className="text-white/30"
                    style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", letterSpacing: "0.12em" }}
                  >
                    {insight.date}
                  </span>
                  <span
                    className="text-white/20"
                    style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px" }}
                  >
                    {insight.readTime}
                  </span>
                  <span
                    className="text-[#C6FF02] mt-2"
                    style={{ fontFamily: "'Space Mono', monospace", fontSize: "11px" }}
                  >
                    →
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
