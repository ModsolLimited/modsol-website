import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import NewsletterSignup from "@/components/sections/NewsletterSignup";

export const metadata: Metadata = { title: "Knowledge Hub" };

const articles = [
  { slug: "articles", category: "Insight", date: "Feb 2025", title: "Why Temporary Architecture Fails Brands", body: "The standard of temporary architecture in event and exhibition environments consistently underdelivers. Here's why — and how to fix it." },
  { slug: "articles", category: "Technical", date: "Jan 2025", title: "Specifying Modular Systems: A Structural Engineer's Guide", body: "Load tables, connection details, and certification requirements for the Modsol platform — everything a structural engineer needs to specify with confidence." },
  { slug: "industry-insights", category: "Industry", date: "Jan 2025", title: "The Event Industry's Sustainability Problem", body: "Single-use structures are the dirty secret of the events industry. Modular systems aren't just better design — they're the only credible sustainability answer." },
  { slug: "technical-guides", category: "Technical", date: "Dec 2024", title: "48-Hour Builds: Project Management for Fast Turnarounds", body: "How Modsol manages complex builds in compressed windows — planning methodology, crew sequencing, and the checklist that keeps every build on track." },
  { slug: "industry-insights", category: "Industry", date: "Nov 2024", title: "Motorsport Paddock Club Design: Raising the Standard", body: "Formula 1 hospitality is the most demanding temporary architecture brief in sport. What it takes to deliver at this level, week after week." },
];

const categories = [
  { slug: "articles", label: "Articles", desc: "Long-form editorial and analysis on temporary architecture, brand environments, and the events industry." },
  { slug: "industry-insights", label: "Industry Insights", desc: "Data, trends, and informed perspectives on the sectors Modsol operates in." },
  { slug: "technical-guides", label: "Technical Guides", desc: "Specification documents, technical drawings, and engineering guides for the Modsol platform." },
];

export default function KnowledgeHubPage() {
  return (
    <>
      <PageHero label="05 — Knowledge Hub" title="Built on<br/>Knowledge." subtitle="Insights, technical guides, and industry analysis from the team that builds some of the world's most demanding temporary structures." />

      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", marginBottom: "1px", background: "rgba(255,255,255,0.06)" }}>
            {categories.map((c) => (
              <Link key={c.slug} href={`/knowledge-hub/${c.slug}`} style={{ textDecoration: "none", display: "block", background: "var(--black)", padding: "32px", transition: "background 0.3s" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--yellow)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "16px" }}>Browse</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "28px", color: "var(--white)", marginBottom: "12px", letterSpacing: "0.02em" }}>{c.label}</h3>
                <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: "1.6" }}>{c.desc}</p>
                <div style={{ marginTop: "24px", fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--yellow)", letterSpacing: "0.2em", textTransform: "uppercase" }}>View All →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--dark)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <p className="section-label">Latest</p>
          <div className="articles-grid reveal" style={{ marginTop: "48px" }}>
            {articles.map((a) => (
              <Link key={a.title} href={`/knowledge-hub/${a.slug}`} className="article-card" style={{ textDecoration: "none" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--yellow)", letterSpacing: "0.2em", textTransform: "uppercase" }}>{a.category}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--muted)", letterSpacing: "0.1em" }}>{a.date}</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", color: "var(--white)", marginBottom: "12px", lineHeight: "1.1", letterSpacing: "0.02em" }}>{a.title}</h3>
                <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: "1.6" }}>{a.body}</p>
                <div style={{ marginTop: "24px", fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--yellow)", letterSpacing: "0.2em", textTransform: "uppercase" }}>Read More →</div>
              </Link>
            ))}
            <NewsletterSignup />
          </div>
        </div>
      </section>
    </>
  );
}
