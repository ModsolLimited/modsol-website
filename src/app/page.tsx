import Link from "next/link";
import Ticker from "@/components/Ticker";
import SectionLabel from "@/components/SectionLabel";
import ScrollReveal from "@/components/ScrollReveal";

/* ─── Shared style objects ─── */
const btnPrimary: React.CSSProperties = {
  background: "#C6FF02",
  color: "#000",
  padding: "16px 32px",
  fontFamily: "var(--font-mono)",
  fontSize: "11px",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  fontWeight: 700,
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  gap: "10px",
};

const btnSecondary: React.CSSProperties = {
  background: "transparent",
  color: "#fff",
  padding: "16px 32px",
  fontFamily: "var(--font-mono)",
  fontSize: "11px",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  fontWeight: 400,
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  gap: "10px",
  border: "1px solid rgba(255,255,255,0.2)",
};

const linkArrow: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "10px",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "#C6FF02",
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
};

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", paddingTop: "72px" }}>
        {/* Backgrounds */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(198,255,2,0.04) 0%, transparent 50%), linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 100%), #0A0A0A", zIndex: 0 }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)", backgroundSize: "80px 80px", zIndex: 1 }} />
        <div className="anim-line-reveal" style={{ position: "absolute", top: 0, right: "120px", width: "1px", height: "100%", background: "linear-gradient(to bottom, transparent, #C6FF02, transparent)", opacity: 0.4, zIndex: 2 }} />
        <div style={{ position: "absolute", bottom: "20%", left: 0, right: 0, height: "1px", background: "linear-gradient(to right, transparent, #C6FF02 30%, transparent)", opacity: 0.2, zIndex: 2 }} />

        {/* Right image block */}
        <div style={{ position: "absolute", right: 0, top: "72px", bottom: 0, width: "55%", background: "#161616", zIndex: 1, overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #000 0%, transparent 40%)", zIndex: 2 }} />
          <div style={{ width: "100%", height: "100%", background: "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(198,255,2,0.06) 39px, rgba(198,255,2,0.06) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(198,255,2,0.04) 39px, rgba(198,255,2,0.04) 40px), linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0a0a0a 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {/* Modular blocks decoration */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 48px)", gridTemplateRows: "repeat(5, 48px)", gap: "3px", opacity: 0.6 }}>
              {[0.6,0,0.15,0,0.08, 0,0.4,0,0.6,0, 0,0,0.2,0,0.5, 0.1,0,0,0.08,0, 0.3,0,0.7,0,0.15].map((op, i) => (
                <div key={i} style={{ background: op > 0 ? `rgba(198,255,2,${op})` : "#1a1a1a", border: op === 0 ? "1px solid rgba(255,255,255,0.06)" : "none" }} />
              ))}
            </div>
          </div>
          <div style={{ position: "absolute", right: "32px", bottom: "40px", fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.3em", color: "rgba(198,255,2,0.3)", textTransform: "uppercase", writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
            Modular Systems Architecture
          </div>
        </div>

        {/* Content */}
        <div style={{ position: "relative", zIndex: 5, padding: "0 40px", maxWidth: "1440px", margin: "0 auto", width: "100%" }}>
          <p className="anim-fade-up-1" style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C6FF02", marginBottom: "32px" }}>
            01 — Modular Systems Architecture
          </p>
          <h1 className="anim-fade-up-2" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(100px, 14vw, 200px)", lineHeight: 0.88, letterSpacing: "0.02em", color: "#fff", marginBottom: "40px" }}>
            BUILD.<br />
            <span style={{ color: "#C6FF02" }}>BOLD.</span>
          </h1>
          <p className="anim-fade-up-3" style={{ fontSize: "15px", fontWeight: 300, color: "#888", maxWidth: "380px", lineHeight: 1.7, marginBottom: "48px" }}>
            Modular systems engineered for the next generation of temporary architecture.
          </p>
          <div className="anim-fade-up-4" style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/products" style={btnPrimary}>Explore The Products →</Link>
            <Link href="/solutions" style={btnSecondary}>Explore The Solutions →</Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="anim-fade-in" style={{ position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)", zIndex: 5, display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
          <div className="scroll-pulse" style={{ width: "1px", height: "48px", background: "linear-gradient(to bottom, #C6FF02, transparent)" }} />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "8px", color: "rgba(255,255,255,0.2)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Scroll</span>
        </div>
      </section>

      <Ticker />

      {/* ── THE PLATFORM ── */}
      <section style={{ background: "#0A0A0A", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "120px 0" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "end", marginBottom: "80px" }} className="platform-intro">
            <div>
              <SectionLabel>02 — The Platform</SectionLabel>
              <ScrollReveal>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(48px, 6vw, 88px)", lineHeight: 0.92, letterSpacing: "0.02em", color: "#fff" }}>
                  The Modsol<br />Platform
                </h2>
              </ScrollReveal>
            </div>
            <div>
              <ScrollReveal delay={0.1}>
                <p style={{ fontSize: "15px", color: "#888", lineHeight: 1.8, marginBottom: "40px" }}>
                  Three precision-engineered modular systems. One unified platform. Modsol delivers the infrastructure behind the world&apos;s most ambitious temporary environments — from flagship event structures to international brand activations.
                </p>
              </ScrollReveal>
              {/* Stats */}
              <ScrollReveal delay={0.2}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.06)", gap: "1px" }} className="stats-grid">
                  {[["3", "Core Systems"], ["6+", "Industries"], ["48h", "Install Time"], ["∞", "Configurations"]].map(([num, label]) => (
                    <div key={label} style={{ background: "#0A0A0A", padding: "32px 24px" }}>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: "48px", color: "#C6FF02", lineHeight: 1, marginBottom: "4px" }}>{num}</div>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#888" }}>{label}</div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Platform cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.06)" }} className="platform-cards-grid">
            {[
              { num: "01", title: "The Modblock", body: "A premium modular building system engineered for adaptable temporary architecture. Flat-packable. Rapidly deployable. Infinitely scalable.", href: "/products/modblock", cta: "Explore Modblock" },
              { num: "02", title: "The Modwall", body: "A modular interior wall system engineered for exhibitions, events and temporary environments. Clean finish. Rapid installation. Zero compromise.", href: "/products/modwall", cta: "Explore Modwall" },
              { num: "03", title: "The Modframe", body: "A modular aluminium framework for branding, façades and large-scale visual environments. Engineered for brand impact at any scale.", href: "/products/modframe", cta: "Explore Modframe" },
            ].map((card, i) => (
              <ScrollReveal key={card.num} delay={i * 0.1}>
                <div style={{ background: "#0A0A0A", padding: "48px 40px", position: "relative", overflow: "hidden", height: "100%" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "72px", color: "rgba(255,255,255,0.04)", lineHeight: 1, position: "absolute", top: "20px", right: "20px", pointerEvents: "none" }}>{card.num}</div>
                  <div style={{ width: "48px", height: "48px", border: "1px solid rgba(198,255,2,0.3)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "28px" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C6FF02" strokeWidth="1.5">
                      {card.num === "01" && <><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></>}
                      {card.num === "02" && <><line x1="3" y1="4" x2="21" y2="4"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="14" x2="21" y2="14"/><line x1="3" y1="19" x2="21" y2="19"/></>}
                      {card.num === "03" && <><polyline points="4 7 12 3 20 7"/><polyline points="4 12 12 8 20 12"/><polyline points="4 17 12 13 20 17"/><polyline points="4 7 4 17"/><polyline points="20 7 20 17"/></>}
                    </svg>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "32px", letterSpacing: "0.05em", marginBottom: "16px", color: "#fff" }}>{card.title}</h3>
                  <p style={{ fontSize: "13px", color: "#888", lineHeight: 1.7, marginBottom: "28px" }}>{card.body}</p>
                  <Link href={card.href} style={linkArrow}>{card.cta} →</Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div style={{ width: "100%", height: "1px", background: "linear-gradient(to right, #C6FF02 0%, rgba(198,255,2,0.1) 100%)" }} />

      {/* ── PRODUCTS ── */}
      <section style={{ background: "#000", padding: "120px 0" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 40px" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "64px", flexWrap: "wrap", gap: "24px" }}>
            <div>
              <SectionLabel>03 — The Products</SectionLabel>
              <ScrollReveal>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(48px, 6vw, 88px)", lineHeight: 0.92, letterSpacing: "0.02em", color: "#fff" }}>
                  Three Systems.<br />One Platform.
                </h2>
              </ScrollReveal>
            </div>
            <ScrollReveal>
              <Link href="/products" style={linkArrow}>View All Products →</Link>
            </ScrollReveal>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px" }} className="products-grid">
            {[
              { tag: "Build Modular Architecture", name: "THE\nMODBLOCK", desc: "For Modular Buildings", href: "/products/modblock", bg: "linear-gradient(135deg, #0d0d0d, #1a1a1a)" },
              { tag: "Build Bold Interior Environments", name: "THE\nMODWALL", desc: "For Modular Interiors", href: "/products/modwall", bg: "linear-gradient(135deg, #111, #1c1c1c)" },
              { tag: "Build Bold Branded Environments", name: "THE\nMODFRAME", desc: "For Modular Branding", href: "/products/modframe", bg: "linear-gradient(135deg, #0a0a0a, #181818)" },
            ].map((p) => (
              <Link key={p.name} href={p.href} style={{ textDecoration: "none", display: "block", background: "#161616", position: "relative", overflow: "hidden", aspectRatio: "3/4" }}>
                <div style={{ position: "absolute", inset: 0, background: p.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 40px)", gap: "3px", opacity: 0.3 }}>
                    {[0.5,0.1,0.3, 0.2,0.6,0.1, 0.4,0.2,0.5].map((op, i) => (
                      <div key={i} style={{ width: "40px", height: "40px", background: `rgba(198,255,2,${op})` }} />
                    ))}
                  </div>
                </div>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "40px", zIndex: 5 }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#C6FF02", marginBottom: "12px" }}>{p.tag}</div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "42px", letterSpacing: "0.04em", lineHeight: 0.95, color: "#fff", marginBottom: "8px", whiteSpace: "pre-line" }}>{p.name}</h3>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", marginBottom: "24px" }}>{p.desc}</p>
                  <span style={{ ...btnPrimary, fontSize: "9px", padding: "12px 20px", alignSelf: "flex-start" }}>Explore System →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS ── */}
      <section style={{ background: "#0A0A0A", padding: "120px 0" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 40px" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "64px", flexWrap: "wrap", gap: "24px" }}>
            <div>
              <SectionLabel>04 — The Solutions</SectionLabel>
              <ScrollReveal>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(48px, 6vw, 88px)", lineHeight: 0.92, letterSpacing: "0.02em", color: "#fff" }}>
                  Industries<br />We Serve
                </h2>
              </ScrollReveal>
            </div>
            <ScrollReveal>
              <p style={{ fontSize: "15px", color: "#888", lineHeight: 1.8, maxWidth: "360px" }}>
                Modsol systems deploy across the most demanding temporary environments in the world. Built for speed. Built for impact. Built to build bold.
              </p>
            </ScrollReveal>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "1px", background: "rgba(255,255,255,0.06)" }} className="industries-grid">
            {[
              { icon: "M", title: "Events", body: "Festival infrastructure, VIP suites, temporary pavilions and event villages at scale." },
              { icon: "E", title: "Exhibitions", body: "Stand construction, gallery environments and exhibition infrastructure worldwide." },
              { icon: "H", title: "Hospitality", body: "Premium hospitality suites, VIP lounges and brand-led guest environments." },
              { icon: "R", title: "Retail", body: "Pop-up retail, flagship activations and branded sales environments." },
              { icon: "O", title: "Temp. Offices", body: "Deployable workspace solutions, site offices and temporary commercial environments." },
              { icon: "B", title: "Brand Activation", body: "Large-scale brand environments, roadshows and high-impact marketing installations." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.06}>
                <Link href="/solutions" style={{ textDecoration: "none", display: "block", background: "#0A0A0A", padding: "40px 28px", height: "100%", borderBottom: "2px solid transparent" }}>
                  <div style={{ width: "40px", height: "40px", border: "1px solid rgba(198,255,2,0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#C6FF02", fontFamily: "var(--font-display)", fontSize: "20px", marginBottom: "20px" }}>{item.icon}</div>
                  <h4 style={{ fontFamily: "var(--font-display)", fontSize: "20px", letterSpacing: "0.05em", color: "#fff", lineHeight: 1, marginBottom: "12px" }}>{item.title}</h4>
                  <p style={{ fontSize: "12px", color: "#888", lineHeight: 1.6 }}>{item.body}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section style={{ background: "#000", padding: "120px 0" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 40px" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "64px", flexWrap: "wrap", gap: "24px" }}>
            <div>
              <SectionLabel>05 — The Projects</SectionLabel>
              <ScrollReveal>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(48px, 6vw, 88px)", lineHeight: 0.92, letterSpacing: "0.02em", color: "#fff" }}>
                  Selected<br />Work
                </h2>
              </ScrollReveal>
            </div>
            <ScrollReveal>
              <Link href="/projects" style={btnSecondary}>View All Projects →</Link>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }} className="projects-grid">
              {/* Hero project */}
              <Link href="/projects" style={{ textDecoration: "none", gridColumn: "span 2", aspectRatio: "16/7", background: "#161616", position: "relative", overflow: "hidden", display: "block" }}>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #1a1200, #0d0d0d)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(198,255,2,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(198,255,2,0.04) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "80px", color: "rgba(198,255,2,0.12)", letterSpacing: "0.1em", textAlign: "center", position: "relative", zIndex: 2, lineHeight: 1 }}>ASTON<br />MARTIN</div>
                </div>
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "32px 36px", background: "linear-gradient(to top, rgba(0,0,0,0.98) 0%, transparent 100%)", display: "flex", alignItems: "flex-end", justifyContent: "space-between", zIndex: 5 }}>
                  <div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#C6FF02", marginBottom: "8px" }}>Hospitality · Motorsport</div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(20px, 2.5vw, 32px)", letterSpacing: "0.03em", color: "#fff", lineHeight: 1 }}>Aston Martin<br />Hospitality Suite</div>
                    <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)", marginTop: "8px", maxWidth: "400px" }}>Premium modular hospitality environment for Aston Martin&apos;s Formula 1 programme. Flat-packed. Deployed in 48 hours.</div>
                  </div>
                  <div style={{ width: "44px", height: "44px", border: "1px solid rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "16px", flexShrink: 0 }}>→</div>
                </div>
              </Link>

              {[
                { title: "The Politico Pub", cat: "Hospitality · Media", desc: "Fully branded modular pub environment for Politico's political convention activation.", label: "THE POLITICO PUB", bg: "linear-gradient(135deg, #120000, #0d0d0d)" },
                { title: "Oasis Live '25 Merch Environment", cat: "Retail · Music", desc: "Large-scale modular merchandise retail environment for the Oasis reunion tour.", label: "OASIS LIVE '25", bg: "linear-gradient(135deg, #001a0d, #0d0d0d)" },
              ].map((proj) => (
                <Link key={proj.title} href="/projects" style={{ textDecoration: "none", aspectRatio: "4/3", background: "#161616", position: "relative", overflow: "hidden", display: "block" }}>
                  <div style={{ position: "absolute", inset: 0, background: proj.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(198,255,2,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(198,255,2,0.04) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "44px", color: "rgba(255,255,255,0.07)", letterSpacing: "0.06em", textAlign: "center", position: "relative", zIndex: 2, lineHeight: 1 }}>{proj.label}</div>
                  </div>
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "24px 28px", background: "linear-gradient(to top, rgba(0,0,0,0.98) 0%, transparent 100%)", display: "flex", alignItems: "flex-end", justifyContent: "space-between", zIndex: 5 }}>
                    <div>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#C6FF02", marginBottom: "8px" }}>{proj.cat}</div>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(18px, 2vw, 26px)", letterSpacing: "0.03em", color: "#fff", lineHeight: 1 }}>{proj.title}</div>
                      <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)", marginTop: "6px" }}>{proj.desc}</div>
                    </div>
                    <div style={{ width: "36px", height: "36px", border: "1px solid rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", flexShrink: 0, fontSize: "14px" }}>→</div>
                  </div>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── BRAND STATEMENT ── */}
      <section style={{ background: "#0A0A0A", padding: "160px 0", overflow: "hidden", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ padding: "0 40px" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {[
              [{ text: "BUILD.", filled: true }, { dot: true }, { text: "MODULAR.", filled: false }],
              [{ text: "SCALABLE.", filled: false }, { dot: true }, { text: "BOLD.", yellow: true }],
              [{ text: "ADAPTABLE.", filled: false }, { dot: true }, { text: "PRECISE.", filled: true }],
            ].map((row, ri) => (
              <div key={ri} style={{ display: "flex", alignItems: "center", gap: "24px", marginTop: ri > 0 ? "-16px" : 0 }}>
                {row.map((item: any, ii) =>
                  item.dot ? (
                    <div key={ii} style={{ width: "12px", height: "12px", background: "#C6FF02", flexShrink: 0 }} />
                  ) : (
                    <span key={ii} style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(60px, 10vw, 160px)",
                      letterSpacing: "0.01em",
                      lineHeight: 0.9,
                      color: item.yellow ? "#C6FF02" : item.filled ? "#fff" : "transparent",
                      WebkitTextStroke: (!item.filled && !item.yellow) ? "1px rgba(255,255,255,0.12)" : "none",
                    }}>{item.text}</span>
                  )
                )}
              </div>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "80px", paddingTop: "60px", borderTop: "1px solid rgba(255,255,255,0.06)", flexWrap: "wrap", gap: "40px" }}>
            <div>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#C6FF02", marginBottom: "16px" }}>Modsol Limited — Modular Systems</p>
              <p style={{ fontSize: "15px", color: "#888", maxWidth: "480px", lineHeight: 1.7 }}>
                Temporary environments should achieve the ambition of permanent architecture. That belief is engineered into every Modsol system, every component, every deployment.
              </p>
            </div>
            <Link href="/contact" style={btnPrimary}>Start a Project →</Link>
          </div>
        </div>
      </section>

      {/* ── KNOWLEDGE HUB PREVIEW ── */}
      <section style={{ background: "#111111", borderTop: "1px solid rgba(255,255,255,0.05)", padding: "120px 0" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 40px" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "64px", flexWrap: "wrap", gap: "24px" }}>
            <div>
              <SectionLabel>06 — The Knowledge Hub</SectionLabel>
              <ScrollReveal>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(48px, 6vw, 88px)", lineHeight: 0.92, letterSpacing: "0.02em", color: "#fff" }}>
                  Insights &amp;<br />Intelligence
                </h2>
              </ScrollReveal>
            </div>
            <ScrollReveal>
              <Link href="/knowledge" style={linkArrow}>View All Articles →</Link>
            </ScrollReveal>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px" }} className="articles-grid">
            {[
              { cat: "Architecture", title: "The Future of Modular Architecture", excerpt: "How modular systems are redefining what's possible in temporary and semi-permanent construction — and why the best is yet to come." },
              { cat: "Events", title: "Designing Modular Event Environments", excerpt: "The principles behind great modular event design — from spatial planning to rapid installation and branded finish." },
              { cat: "Exhibitions", title: "How Modular Systems Transform Exhibitions", excerpt: "Why the world's leading exhibition brands are choosing modular infrastructure over traditional stand construction." },
            ].map((article, i) => (
              <ScrollReveal key={article.title} delay={i * 0.1}>
                <Link href="/knowledge" style={{ textDecoration: "none", display: "block", background: "#161616", padding: "40px", borderTop: "2px solid rgba(255,255,255,0.06)", height: "100%" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#C6FF02", marginBottom: "20px" }}>{article.cat}</div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "26px", letterSpacing: "0.03em", lineHeight: 1.05, color: "#fff", marginBottom: "16px" }}>{article.title}</div>
                  <p style={{ fontSize: "13px", color: "#888", lineHeight: 1.7, marginBottom: "28px" }}>{article.excerpt}</p>
                  <span style={linkArrow}>Read Article →</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section style={{ background: "#000", padding: "160px 0", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 40px", textAlign: "center" }}>
          <ScrollReveal>
            <SectionLabel>07 — Contact</SectionLabel>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(60px, 8vw, 120px)", lineHeight: 0.9, letterSpacing: "0.02em", color: "#fff", marginBottom: "32px" }}>
              Let&apos;s Build<br /><span style={{ color: "#C6FF02" }}>Something</span><br />Bold.
            </h2>
            <p style={{ fontSize: "15px", color: "#888", maxWidth: "480px", lineHeight: 1.8, margin: "0 auto 48px" }}>
              Tell us about your project. Whether you&apos;re planning an event structure, exhibition environment or branded activation — Modsol has the system.
            </p>
            <Link href="/contact" style={btnPrimary}>Start a Project →</Link>
          </ScrollReveal>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .platform-intro { grid-template-columns: 1fr !important; gap: 40px !important; }
          .platform-cards-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .products-grid { grid-template-columns: 1fr 1fr !important; }
          .industries-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .articles-grid { grid-template-columns: 1fr 1fr !important; }
          .projects-grid { grid-template-columns: 1fr !important; }
          .projects-grid > *:first-child { grid-column: span 1 !important; aspect-ratio: 4/3 !important; }
        }
        @media (max-width: 768px) {
          .products-grid { grid-template-columns: 1fr !important; }
          .industries-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .articles-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </>
  );
}
