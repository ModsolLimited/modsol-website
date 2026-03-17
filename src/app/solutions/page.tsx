import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export const metadata: Metadata = { title: "Solutions — Modsol" };

const solutions = [
  {
    num: "01", slug: "shows-festivals", label: "Shows & Festivals", tag: "Live & Touring",
    desc: "Festival infrastructure, main stages, touring concert builds, sporting stadia overlay, and corporate event environments. From 500-person private events to 200,000-capacity festivals — delivered to the same structural standard every time.",
    stat: "200+", statLabel: "Events",
  },
  {
    num: "02", slug: "exhibitions-conference", label: "Exhibitions & Conferences", tag: "Stands & Installs",
    desc: "Custom exhibition stands, world expo pavilions, conference environments and feature installations. Structural quality from 9m² shell-scheme upgrades to 900m² feature builds across a global show calendar.",
    stat: "150+", statLabel: "Stands",
  },
  {
    num: "03", slug: "hospitality-restaurants", label: "Hospitality & Restaurants", tag: "VIP & Dining",
    desc: "VIP pavilions, temporary restaurants, paddock clubs and championship hospitality villages. Structures that communicate quality before a single word is spoken — built for the most scrutinised guest experiences in sport, culture and dining.",
    stat: "80+", statLabel: "VIP Structures",
  },
  {
    num: "04", slug: "retail-merchandise", label: "Retail & Merchandise", tag: "Brand Retail",
    desc: "Pop-up flagships, seasonal retail destinations, luxury brand environments and tour merchandise stores. Permanent-quality retail built and trading in days, not months.",
    stat: "60+", statLabel: "Retail Builds",
  },
  {
    num: "05", slug: "brand-activations", label: "Brand Activations", tag: "Experiential",
    desc: "Product launches, consumer campaigns, press environments and immersive brand installations. Structural partners for creative teams who refuse to let the physical environment underdeliver on the concept.",
    stat: "90+", statLabel: "Activations",
  },
  {
    num: "06", slug: "experiential-marketing", label: "Experiential Marketing", tag: "Immersive & Touring",
    desc: "Immersive brand installations, national roadshows and public space activations. Complex geometry, multi-room spatial sequences and full AV integration — the structural partner for the most ambitious experiential briefs.",
    stat: "50+", statLabel: "Experiences",
  },
  {
    num: "07", slug: "automotive-motorsport", label: "Automotive & Motorsport", tag: "Circuit & Brand",
    desc: "Race circuit hospitality suites, full-season paddock clubs, fan zones, team environments and automotive brand launches. 23-race circuits. Zero build failures.",
    stat: "23", statLabel: "Race Weekends p/a",
  },
  {
    num: "08", slug: "domestic-commercial", label: "Domestic & Commercial", tag: "Office & Welfare",
    desc: "Site command centres, interim offices, welfare facilities, domestic garden annexes and temporary commercial accommodation. Professional-grade environments wherever the work is happening.",
    stat: "40+", statLabel: "Deployments",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        label="03 — Solutions"
        title="Built for<br/>Every Brief."
        subtitle="Eight sectors. One platform. Wherever temporary architecture is expected to perform at the level of permanent design, Modsol is there — built on 15 years of structural precision."
      />

      {/* Solution list */}
      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(255,255,255,0.06)" }}>
            {solutions.map((s) => (
              <Link key={s.slug} href={`/solutions/${s.slug}`} style={{ textDecoration: "none", display: "block", background: "var(--black)", transition: "background 0.3s" }}>
                <div style={{ display: "grid", gridTemplateColumns: "80px 60px 260px 1fr 100px", gap: "40px", alignItems: "center", padding: "40px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--muted)", letterSpacing: "0.2em" }}>{s.num}</div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "24px", color: "var(--yellow)", lineHeight: 1 }}>{s.stat}</div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "8px", color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "2px" }}>{s.statLabel}</div>
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "8px", color: "var(--yellow)", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "8px" }}>{s.tag}</div>
                    <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(20px, 2.5vw, 36px)", color: "var(--white)", letterSpacing: "0.02em", lineHeight: 1 }}>{s.label}</h2>
                  </div>
                  <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.7" }}>{s.desc}</p>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--yellow)", letterSpacing: "0.2em", textTransform: "uppercase", textAlign: "right", whiteSpace: "nowrap" }}>Explore →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Origin context */}
      <section className="section-pad" style={{ background: "var(--dark)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
            <div className="reveal">
              <p className="section-label">Where We Started</p>
              <h2 className="section-title" style={{ marginBottom: "24px" }}>From Premium<br /><span style={{ color: "var(--yellow)" }}>Event Marquees.</span></h2>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "24px" }}>
                Modsol began in the premium events marquee and temporary structures market — building high-quality frame marquees, tensile canopies and bespoke event shelters for brands and venues who refused to accept the standard offering.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "24px" }}>
                That foundation taught us everything that matters in temporary architecture: precision tolerances, site logistics, compressed build windows, unpredictable conditions, and the unforgiving standard of a live event where there is no &ldquo;not quite ready.&rdquo;
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9" }}>
                When we took that expertise and applied it to the development of a full architectural modular platform, we didn&apos;t leave any of that discipline behind. The Modblock, Modwall and Modframe carry the DNA of 15 years of precision temporary construction into every sector we serve.
              </p>
            </div>
            <div className="reveal">
              <ImagePlaceholder label="Solutions — Cross-Sector Platform Deployment" aspectRatio="4/3" />
              <div style={{ marginTop: "32px" }} className="stats-row">
                {[["500+","Projects"],["40+","Countries"],["8","Sectors"],["15+","Years"]].map(([n, l]) => (
                  <div className="stat-item" key={l}>
                    <div className="stat-num">{n}</div>
                    <div className="stat-label">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-sector banner */}
      <section className="section-pad" style={{ background: "var(--black)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <p className="section-label">Cross-Sector Capability</p>
          <h2 className="section-title reveal" style={{ marginBottom: "48px" }}>One Brief.<br /><span style={{ color: "var(--yellow)" }}>Multiple Sectors.</span></h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "rgba(255,255,255,0.06)" }}>
            {[
              ["Shared Platform", "All three systems — Modblock, Modwall and Modframe — deploy across all eight sectors, often in combination within a single project. A festival site might use Modblock stages, Modwall VIP perimeters and Modframe canopies simultaneously."],
              ["Certified for All Uses", "Our structural certifications cover public-use events, permanent planning applications, construction-site welfare and consumer-facing retail. One platform, every regulatory context."],
              ["In-House Expertise", "We don't outsource structural design, logistics or site management. Every discipline is in-house — from engineering to build crew — which means total quality control at every stage."],
              ["Emergency Response", "Our 48-hour emergency response capability has been deployed across multiple sectors. When unexpected problems arise on site, Modsol has the systems, crew and experience to resolve them before the event is affected."],
            ].map(([title, body]) => (
              <div key={title} style={{ background: "var(--black)", padding: "40px" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--yellow)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "16px" }}>{title}</div>
                <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.8" }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--dark2)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-label" style={{ justifyContent: "center" }}>Tell us your brief</p>
          <h2 className="section-title reveal" style={{ marginBottom: "32px" }}>What Are<br /><span style={{ color: "var(--yellow)" }}>You Building?</span></h2>
          <Link href="/contact" className="btn-primary">Start a Project</Link>
        </div>
      </section>
    </>
  );
}
