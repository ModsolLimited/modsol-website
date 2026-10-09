"use client";
import Link from "next/link";
import Image from "next/image";
import ShareBar from "@/components/ui/ShareBar";

const IMG_BASE = "/Case%20Studies/Hot%20Wheels%20-%20CarFest%2026";
const IMAGES = [
  `${IMG_BASE}/26982250-92e6-4856-aae3-ed6153b28522.JPG`,
  `${IMG_BASE}/193908d0-d510-4d6f-87f6-6a72a2c8004f.JPG`,
  `${IMG_BASE}/1fa28fcc-adff-4f98-9a94-d8fa17d00e0d.JPG`,
  `${IMG_BASE}/76755936-6295-4325-a962-dfc79d6403d7.JPG`,
];

const systems = [
  {
    name: "THE MODFRAME",
    desc: "The Modframe was deployed to create the primary branded façade for the Hot Wheels activation — delivering large-scale visual impact and a bold branded environment that drew visitors in from across the festival site.",
    logo: "/Modframe/MODFRAME yellow.png",
    link: "/products/modframe",
  },
  {
    name: "THE MODWALL",
    desc: "The Modwall was used to create the interior divisions and branded wall environments within the activation space — clean, precise modular panels configured to the exact layout required by the Hot Wheels brief.",
    logo: "/Modwall/MODWALL R yellow transparent.png",
    link: "/products/modwall",
  },
];

const details = [
  { label: "CLIENT", value: "Hot Wheels" },
  { label: "EVENT", value: "CarFest South 2026" },
  { label: "SYSTEMS", value: "Modframe & Modwall" },
  { label: "PARTNER", value: "Mahood Marquees" },
];

export default function HotWheelsCarfestPage() {
  return (
    <>
      <style>{`
        .hwcf-overview-grid { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(48px, 6vw, 100px); align-items: start; }
        .hwcf-systems-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: rgba(255,255,255,0.05); }
        .hwcf-system-card { background: var(--dark); padding: clamp(32px, 4vw, 48px); position: relative; overflow: hidden; transition: background 0.3s ease; text-decoration: none; display: block; border-top: 2px solid transparent; }
        .hwcf-system-card:hover { background: var(--dark2); border-top-color: var(--yellow); }
        .hwcf-gallery-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; }
        .hwcf-gallery-cell { position: relative; width: 100%; aspect-ratio: 16/9; overflow: hidden; cursor: pointer; }
        .hwcf-gallery-img { object-fit: cover; filter: brightness(0.7); transition: filter 0.3s ease; }
        .hwcf-gallery-cell:hover .hwcf-gallery-img { filter: brightness(1.0); }
        .hwcf-details-row { display: grid; grid-template-columns: repeat(4, 1fr); border: 1px solid rgba(255,255,255,0.06); background: rgba(255,255,255,0.06); gap: 1px; }
        @media (max-width: 1024px) {
          .hwcf-details-row { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .hwcf-overview-grid { grid-template-columns: 1fr; }
          .hwcf-systems-grid { grid-template-columns: 1fr; }
          .hwcf-gallery-grid { grid-template-columns: 1fr; }
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
        <Image
          src={IMAGES[0]}
          alt="Hot Wheels — CarFest South 2026"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", zIndex: 0 }}
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
            BRAND ACTIVATION · EXPERIENTIAL
          </p>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(80px, 12vw, 160px)",
            color: "var(--white)",
            lineHeight: 0.95,
            letterSpacing: "0.01em",
          }}>
            HOT WHEELS
          </h1>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(40px, 6vw, 80px)",
            color: "#C6FF02",
            lineHeight: 0.95,
            letterSpacing: "0.02em",
            marginBottom: "24px",
          }}>
            CARFEST SOUTH 2026
          </h2>
          <p style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            color: "rgba(255,255,255,0.7)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "32px",
          }}>
            MODFRAME · MODWALL · IN COLLABORATION WITH MAHOOD MARQUEES
          </p>
          <ShareBar title="Hot Wheels — CarFest South 2026 | Modsol" />
        </div>
      </section>

      {/* ── SECTION 2: PROJECT OVERVIEW ─────────────────────────── */}
      <section style={{ background: "#0A0A0A", padding: "clamp(80px, 8vh, 120px) 0" }}>
        <div className="container">
          <div className="hwcf-overview-grid">
            <div className="reveal">
              <h2 className="section-title">THE BRIEF</h2>
            </div>
            <div className="reveal">
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9" }}>
                Modsol Limited was appointed to deliver the branded activation environment for Hot Wheels at CarFest South 2026 — one of the UK&apos;s most celebrated family motorsport festivals. Working in close collaboration with our sister company Mahood Marquees, we deployed two of our core modular systems to create a bold, immersive brand environment that captured the energy and identity of one of the world&apos;s most iconic brands.
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
          <div className="hwcf-systems-grid">
            {systems.map((s) => (
              <Link key={s.name} href={s.link} className="hwcf-system-card">
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
        <div className="hwcf-gallery-grid">
          {IMAGES.map((src, i) => (
            <div key={src} className="hwcf-gallery-cell">
              <Image src={src} alt={`Hot Wheels — CarFest South 2026, image ${i + 1}`} fill sizes="(max-width: 768px) 100vw, 50vw" className="hwcf-gallery-img" />
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 5: PROJECT DETAILS ───────────────────────────── */}
      <section style={{ background: "#000", padding: "clamp(60px, 6vh, 80px) 0" }}>
        <div className="container">
          <div className="hwcf-details-row">
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

      {/* ── SECTION 6: COLLABORATOR CALLOUT ─────────────────────── */}
      <section style={{ background: "var(--dark2)", padding: "clamp(80px, 8vh, 120px) 0", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <div style={{ borderLeft: "4px solid #C6FF02", paddingLeft: "clamp(24px, 4vw, 48px)", maxWidth: "900px" }}>
            <h2 className="section-title-sm reveal" style={{ marginBottom: "24px" }}>
              IN COLLABORATION WITH <span style={{ color: "#C6FF02" }}>MAHOOD MARQUEES</span>
            </h2>
            <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9" }}>
              This project was delivered in close partnership with Mahood Marquees — the UK&apos;s leading premium marquee and event structure company and our sister business. The combination of Mahood Marquees&apos; event infrastructure expertise and Modsol&apos;s modular systems capability made this activation possible.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: CTA ───────────────────────────────────────── */}
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
            Planning a brand activation or experiential environment? Get in touch and let us show you what the Modsol platform can deliver.
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
