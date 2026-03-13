import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import NewsletterSignup from "@/components/sections/NewsletterSignup";

export const metadata: Metadata = { title: "Knowledge Hub" };

const articles = [
  { slug: "articles", category: "Insight", date: "Feb 2025", title: "Why Temporary Architecture Fails Brands", body: "The standard of temporary architecture in event and exhibition environments consistently underdelivers. Here's the structural and commercial case for why it happens — and what fixing it actually looks like." },
  { slug: "technical-guides", category: "Technical", date: "Jan 2025", title: "Specifying Modular Systems: A Structural Engineer's Guide", body: "Load tables, connection details, CE certification requirements and planning considerations for the Modsol platform — everything a structural engineer needs to specify with confidence." },
  { slug: "industry-insights", category: "Industry", date: "Jan 2025", title: "The Event Industry's Sustainability Crisis", body: "Single-use structures are the dirty secret of the events industry. Modular, redeployable systems aren't just better design — they're the only credible response to a sector under serious environmental scrutiny." },
  { slug: "technical-guides", category: "Technical", date: "Dec 2024", title: "48-Hour Builds: Project Management for Fast Turnarounds", body: "How Modsol manages complex builds in compressed windows — planning methodology, crew sequencing, material staging, and the quality checklist that keeps every build on time and to spec." },
  { slug: "industry-insights", category: "Industry", date: "Nov 2024", title: "Motorsport Paddock Club Design: Raising the Standard", body: "Formula 1 hospitality is the most demanding temporary architecture brief in sport. What it takes to deliver at this level, race after race, venue after venue, across five continents." },
];

const categories = [
  { slug: "articles", label: "Articles", desc: "Long-form editorial on temporary architecture, brand environments, and the intersection of events infrastructure and architectural design. Written by the people who build it.", count: "12" },
  { slug: "industry-insights", label: "Industry Insights", desc: "Data, trends, and informed perspectives on the sectors Modsol operates in — from events and exhibitions to retail, hospitality and brand activation.", count: "9" },
  { slug: "technical-guides", label: "Technical Guides", desc: "Specification documents, load tables, technical drawings and engineering guides for the Modsol platform. Everything you need to specify or design with our systems.", count: "8" },
];

export default function KnowledgeHubPage() {
  return (
    <>
      <PageHero
        label="05 — Knowledge Hub"
        title="Built on<br/>Knowledge."
        subtitle="Insights, technical guides and industry analysis from the team that has been building precision temporary structures since 2008. Fifteen years of learning. All of it here."
      />

      {/* Category nav */}
      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container">
          <p className="section-label">Browse by Category</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", marginTop: "48px", background: "rgba(255,255,255,0.06)" }}>
            {categories.map((c) => (
              <Link key={c.slug} href={`/knowledge-hub/${c.slug}`} style={{ textDecoration: "none", display: "block", background: "var(--black)", padding: "40px", transition: "background 0.3s" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--yellow)", letterSpacing: "0.3em", textTransform: "uppercase" }}>Browse</div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "28px", color: "rgba(255,255,255,0.15)" }}>{c.count}</div>
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "28px", color: "var(--white)", marginBottom: "16px", letterSpacing: "0.02em" }}>{c.label}</h3>
                <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: "1.7", marginBottom: "24px" }}>{c.desc}</p>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--yellow)", letterSpacing: "0.2em", textTransform: "uppercase" }}>View All →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest articles + newsletter */}
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
                <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: "1.7" }}>{a.body}</p>
                <div style={{ marginTop: "24px", fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--yellow)", letterSpacing: "0.2em", textTransform: "uppercase" }}>Read More →</div>
              </Link>
            ))}
            <NewsletterSignup />
          </div>
        </div>
      </section>

      {/* About the knowledge hub */}
      <section className="section-pad" style={{ background: "var(--black)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
            <div className="reveal">
              <p className="section-label">Why We Publish</p>
              <h2 className="section-title" style={{ marginBottom: "24px" }}>Expertise<br /><span style={{ color: "var(--yellow)" }}>Shared Freely.</span></h2>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "24px" }}>
                Fifteen years of building precision temporary structures teaches you things that aren't written down anywhere. The failures that never make it into case studies. The tolerances that matter and the ones that don't. The site conditions that change everything.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9" }}>
                We publish everything we know — not because we're giving away competitive advantage, but because better-informed clients make better projects. And better projects are what we're here for.
              </p>
            </div>
            <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {[
                { label: "29", sub: "Articles & Guides" },
                { label: "15+", sub: "Years of Experience" },
                { label: "Free", sub: "All Content, Always" },
              ].map(({ label, sub }) => (
                <div key={sub} style={{ display: "flex", alignItems: "center", gap: "24px", padding: "24px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "48px", color: "var(--yellow)", lineHeight: 1, minWidth: "80px" }}>{label}</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--muted)", letterSpacing: "0.2em", textTransform: "uppercase" }}>{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
