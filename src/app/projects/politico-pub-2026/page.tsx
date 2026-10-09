"use client";
import Link from "next/link";

const IMG_BASE = "/Case%20Studies/Politico%20Pub%202026%20-Labour%20Conference";
const IMAGES = [
  `${IMG_BASE}/8cf13c7d-45a5-48bf-96cc-5a7a5ca75fb7.JPG`,
  `${IMG_BASE}/c0742206-0bd3-4c09-837c-e5da0452dc5d.JPG`,
  `${IMG_BASE}/Pub%20Internal.avif`,
  `${IMG_BASE}/Pub%20Internal%20-%20Copy.avif`,
];

const systems = [
  {
    name: "THE MODFRAME",
    desc: "The Modframe provided the branded exterior façade of The Politico Pub — creating the bold visual identity and architectural finish that made the activation instantly recognisable on the conference floor.",
    logo: "/Modframe/MODFRAME yellow.png",
    link: "/products/modframe",
  },
  {
    name: "THE MODWALL",
    desc: "The Modwall was used to configure the interior of the pub environment — creating bar areas, private spaces and branded interior walls that delivered a premium hospitality experience within a temporary structure.",
    logo: "/Modwall/MODWALL R yellow transparent.png",
    link: "/products/modwall",
  },
];

const details = [
  { label: "CLIENT", value: "Politico" },
  { label: "EVENT", value: "Labour Conference 2026" },
  { label: "SYSTEMS", value: "Modframe & Modwall" },
  { label: "PARTNER", value: "Mahood Marquees" },
];

export default function PoliticoPub2026Page() {
  return (
    <>
      <style>{`
        .pp26-overview-grid { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(48px, 6vw, 100px); align-items: start; }
        .pp26-systems-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: rgba(255,255,255,0.05); }
        .pp26-system-card { background: var(--dark); padding: clamp(32px, 4vw, 48px); position: relative; overflow: hidden; transition: background 0.3s ease; text-decoration: none; display: block; border-top: 2px solid transparent; }
        .pp26-system-card:hover { background: var(--dark2); border-top-color: var(--yellow); }
        .pp26-gallery-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; }
        .pp26-gallery-img { width: 100%; aspect-ratio: 16/9; object-fit: cover; display: block; filter: brightness(0.7); transition: filter 0.3s ease; cursor: pointer; }
        .pp26-gallery-img:hover { filter: brightness(1.0); }
        .pp26-details-row { display: grid; grid-template-columns: repeat(4, 1fr); border: 1px solid rgba(255,255,255,0.06); background: rgba(255,255,255,0.06); gap: 1px; }
        @media (max-width: 1024px) {
          .pp26-details-row { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .pp26-overview-grid { grid-template-columns: 1fr; }
          .pp26-systems-grid { grid-template-columns: 1fr; }
          .pp26-gallery-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ── SECTION 1: HERO ─────────────────────────────────────── */}
      <section style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "hidden",
        background: "#000",
      }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={IMAGES[0]}
          alt="The Politico Pub — Labour Conference 2026"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
        />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.75))",
          zIndex: 1,
        }} />

        <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: "120px" }}>
          <Link href="/projects/case-studies" style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "var(--yellow)",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            textDecoration: "none",
          }}>
            THE PROJECTS
          </Link>
        </div>

        <div className="container" style={{ position: "relative", zIndex: 2, paddingBottom: "80px" }}>
          <p style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            color: "#C6FF02",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: "24px",
          }}>
            HOSPITALITY · POLITICAL EVENTS
          </p>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(80px, 12vw, 160px)",
            color: "var(--white)",
            lineHeight: 0.95,
            letterSpacing: "0.01em",
          }}>
            THE POLITICO PUB
          </h1>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(40px, 6vw, 80px)",
            color: "#C6FF02",
            lineHeight: 0.95,
            letterSpacing: "0.02em",
            marginBottom: "24px",
          }}>
            LABOUR CONFERENCE 2026
          </h2>
          <p style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            color: "rgba(255,255,255,0.7)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}>
            MODFRAME · MODWALL · IN COLLABORATION WITH MAHOOD MARQUEES
          </p>
        </div>
      </section>

      {/* ── SECTION 2: PROJECT OVERVIEW ─────────────────────────── */}
      <section style={{ background: "#0A0A0A", padding: "clamp(80px, 8vh, 120px) 0" }}>
        <div className="container">
          <div className="pp26-overview-grid">
            <div className="reveal">
              <h2 className="section-title">THE BRIEF</h2>
            </div>
            <div className="reveal">
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9" }}>
                For the second consecutive year, Modsol Limited was appointed to deliver The Politico Pub — the iconic hospitality environment at the Labour Party Conference. Working alongside our sister company Mahood Marquees, we deployed the Modframe and Modwall systems to create a fully branded pub environment that became one of the most talked-about spaces at conference. This year the activation reached new heights — hosting the Prime Minister amongst its guests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: THE SYSTEMS DEPLOYED ─────────────────────── */}
      <section style={{ background: "#000", padding: "clamp(80px, 8vh, 120px) 0" }}>
        <div className="container">
          <p className="section-label">The Systems Deployed</p>
          <h2 className="section-title reveal" style={{ marginBottom: "48px" }}>
            BUILT FOR <span style={{ color: "#C6FF02" }}>IMPACT</span>
          </h2>
          <div className="pp26-systems-grid">
            {systems.map((s) => (
              <Link key={s.name} href={s.link} className="pp26-system-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.logo} alt={s.name} style={{ height: "56px", width: "auto", objectFit: "contain", marginBottom: "28px", display: "block" }} />
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "32px", letterSpacing: "0.05em", color: "var(--white)", marginBottom: "16px" }}>
                  {s.name}
                </h3>
                <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.8", marginBottom: "24px" }}>
                  {s.desc}
                </p>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "#C6FF02", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                  EXPLORE →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: IMAGE GALLERY ─────────────────────────────── */}
      <section style={{ background: "#0A0A0A" }}>
        <div className="pp26-gallery-grid">
          {IMAGES.map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={src} src={src} alt={`The Politico Pub — Labour Conference 2026, image ${i + 1}`} className="pp26-gallery-img" />
          ))}
        </div>
      </section>

      {/* ── SECTION 5: PROJECT DETAILS ───────────────────────────── */}
      <section style={{ background: "#000", padding: "clamp(60px, 6vh, 80px) 0" }}>
        <div className="container">
          <div className="pp26-details-row">
            {details.map((d) => (
              <div key={d.label} className="stat-item" style={{ textAlign: "center", padding: "40px 24px" }}>
                <p className="stat-label" style={{ marginBottom: "12px", justifyContent: "center" }}>{d.label}</p>
                <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(22px, 2.5vw, 34px)", color: "var(--white)", lineHeight: 1 }}>
                  {d.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: NOTABLE HIGHLIGHT ─────────────────────────── */}
      <section style={{ background: "var(--dark2)", padding: "clamp(80px, 8vh, 120px) 0", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <div style={{ borderLeft: "4px solid #C6FF02", paddingLeft: "clamp(24px, 4vw, 48px)", maxWidth: "900px" }}>
            <h2 className="section-title-sm reveal" style={{ marginBottom: "24px" }}>
              A SECOND YEAR. <span style={{ color: "#C6FF02" }}>A HIGHER BAR.</span>
            </h2>
            <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9" }}>
              The Politico Pub has become one of the most anticipated environments at the Labour Party Conference. Returning for a second year gave us the opportunity to build on what we learned and raise the standard further. The result was an activation that hosted some of the most influential figures in British politics — including the Prime Minister.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: COLLABORATOR CALLOUT ─────────────────────── */}
      <section style={{ background: "var(--dark2)", padding: "clamp(80px, 8vh, 120px) 0", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <div style={{ borderLeft: "4px solid #C6FF02", paddingLeft: "clamp(24px, 4vw, 48px)", maxWidth: "900px" }}>
            <h2 className="section-title-sm reveal" style={{ marginBottom: "24px" }}>
              IN COLLABORATION WITH <span style={{ color: "#C6FF02" }}>MAHOOD MARQUEES</span>
            </h2>
            <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9" }}>
              Delivered in close partnership with Mahood Marquees — the UK&apos;s leading premium marquee and event structure company and our sister business. Two years running. Two exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: CTA ───────────────────────────────────────── */}
      <section style={{ background: "#C6FF02", padding: "clamp(80px, 8vh, 120px) 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(48px, 6vw, 88px)",
            color: "#000",
            lineHeight: 0.95,
            letterSpacing: "0.02em",
            marginBottom: "24px",
          }}>
            BUILD BOLD WITH MODSOL
          </h2>
          <p style={{
            fontSize: "16px",
            color: "rgba(0,0,0,0.75)",
            lineHeight: "1.8",
            maxWidth: "560px",
            margin: "0 auto 40px",
          }}>
            Planning a hospitality environment or branded activation? Get in touch.
          </p>
          <Link href="/contact" style={{
            background: "#000",
            color: "#fff",
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
          }}>
            GET IN TOUCH →
          </Link>
        </div>
      </section>
    </>
  );
}
