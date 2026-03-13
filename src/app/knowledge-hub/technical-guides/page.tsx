import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import SectionLabel from "@/components/ui/SectionLabel";
import AccentLine from "@/components/ui/AccentLine";
import YellowButton from "@/components/ui/YellowButton";

export const metadata: Metadata = {
  title: "Technical Guides — Knowledge Hub",
  description:
    "Practical technical documentation for the Modsol platform — load tables, system guides, specification sheets, and installation references.",
};

const guides = [
  {
    system: "Modblock",
    title: "Modblock Load Calculations: What You Need to Know",
    excerpt: "A practical guide to understanding load ratings, stack heights, and safe configurations for the Modblock system — with worked examples.",
    date: "February 2025",
    type: "Load Guide",
    pages: "12 pages",
  },
  {
    system: "Modwall",
    title: "Modwall Panel Specification Guide",
    excerpt: "Complete reference for Modwall panel sizes, face finish options, acoustic specifications, and connection details.",
    date: "January 2025",
    type: "Specification",
    pages: "18 pages",
  },
  {
    system: "Modframe",
    title: "Modframe Span Tables and Configuration Reference",
    excerpt: "Span tables, configuration diagrams, and permissible load guidance for all standard Modframe configurations up to 12m clear span.",
    date: "November 2024",
    type: "Engineering Reference",
    pages: "24 pages",
  },
  {
    system: "All Systems",
    title: "Modsol System Integration Guide",
    excerpt: "How The Modblock, Modwall, and Modframe systems connect and combine — connection details, tolerance guidance, and hybrid configuration examples.",
    date: "October 2024",
    type: "Integration Guide",
    pages: "16 pages",
  },
  {
    system: "Modblock",
    title: "Modblock Assembly & Installation Manual",
    excerpt: "Step-by-step installation reference for the Modblock system — team requirements, sequence, common configurations, and de-rig guidance.",
    date: "September 2024",
    type: "Installation Manual",
    pages: "20 pages",
  },
  {
    system: "Modframe",
    title: "Temporary Structure Wind Load Reference",
    excerpt: "Wind load guidance for Modsol temporary structures — Eurocode compliance, site condition adjustments, and documentation requirements.",
    date: "August 2024",
    type: "Compliance Guide",
    pages: "14 pages",
  },
];

export default function TechnicalGuidesPage() {
  return (
    <>
      <PageHero
        label="Knowledge Hub / Technical Guides"
        title="Technical Guides"
        subtitle="Practical technical documentation for the Modsol platform — load tables, system guides, specification sheets, and installation references."
      />

      <section className="py-24 lg:py-32" style={{ background: "#000000" }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <SectionLabel className="mb-12">All Technical Guides</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {guides.map((guide, i) => (
              <div
                key={i}
                className="group p-8 hover:bg-white/02 transition-colors cursor-pointer"
                style={{ background: "#000" }}
              >
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="text-[#C6FF02] uppercase"
                    style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", letterSpacing: "0.2em" }}
                  >
                    {guide.system} — {guide.type}
                  </span>
                  <span
                    className="text-white/20"
                    style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px" }}
                  >
                    {guide.pages}
                  </span>
                </div>
                <AccentLine className="w-6 mb-5" />
                <h3
                  className="text-white mb-3 group-hover:text-[#C6FF02] transition-colors leading-snug"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.125rem", fontWeight: 500 }}
                >
                  {guide.title}
                </h3>
                <p
                  className="text-white/40 text-sm leading-relaxed mb-6"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {guide.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span
                    className="text-[#C6FF02] uppercase"
                    style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", letterSpacing: "0.15em" }}
                  >
                    Download PDF →
                  </span>
                  <span
                    className="text-white/20"
                    style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px" }}
                  >
                    {guide.date}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p
              className="text-white/40 mb-6"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem" }}
            >
              Need a specific technical document not listed here?
            </p>
            <YellowButton href="/contact">Contact the Technical Team</YellowButton>
          </div>
        </div>
      </section>
    </>
  );
}
