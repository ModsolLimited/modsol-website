import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "The Modblock — Modsol" };

const features = [
  {
    title: "FLAT PACKABLE",
    desc: "Fully demountable and flat-packable for efficient transport and storage between deployments.",
    icon: (
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        {[40, 40, 40].map((w, i) => (
          <div key={i} style={{ width: `${w}px`, height: "4px", background: "rgba(198,255,2,0.4)" }} />
        ))}
      </div>
    ),
  },
  {
    title: "RAPID INSTALLATION",
    desc: "Engineered for fast assembly. A full Modblock structure can be installed in hours by a small team.",
    icon: (
      <div style={{ position: "relative", width: "36px", height: "36px" }}>
        {/* Clock face */}
        <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "1px solid rgba(198,255,2,0.6)" }} />
        {/* Hour hand — 12 o'clock */}
        <div style={{ position: "absolute", bottom: "50%", left: "50%", width: "1px", height: "10px", background: "rgba(198,255,2,0.6)", transformOrigin: "bottom center", transform: "translateX(-50%)" }} />
        {/* Minute hand — 3 o'clock */}
        <div style={{ position: "absolute", top: "50%", left: "50%", width: "14px", height: "1px", background: "#C6FF02", transformOrigin: "left center", transform: "translateY(-50%)" }} />
        {/* Centre dot */}
        <div style={{ position: "absolute", top: "50%", left: "50%", width: "3px", height: "3px", borderRadius: "50%", background: "#C6FF02", transform: "translate(-50%, -50%)" }} />
      </div>
    ),
  },
  {
    title: "STACKABLE SYSTEM",
    desc: "Units stack vertically to create multi-level structures — expanding what's architecturally possible.",
    icon: (
      <div style={{ display: "flex", flexDirection: "column", gap: "4px", alignItems: "center" }}>
        {[0, 1, 2].map((i) => (
          <div key={i} style={{ width: "36px", height: "10px", border: "1px solid rgba(198,255,2,0.6)" }} />
        ))}
      </div>
    ),
  },
  {
    title: "MODULAR SCALABILITY",
    desc: "Start with a single unit. Scale to a full building. The Modblock grows with your brief.",
    icon: (
      <div style={{ display: "flex", gap: "4px", alignItems: "flex-end" }}>
        <div style={{ width: "14px", height: "14px", border: "1px solid rgba(198,255,2,0.3)" }} />
        <div style={{ width: "22px", height: "22px", border: "1px solid rgba(198,255,2,0.35)" }} />
        <div style={{ width: "32px", height: "32px", border: "1px solid rgba(198,255,2,0.4)" }} />
      </div>
    ),
  },
  {
    title: "INTERCHANGEABLE PANELS",
    desc: "Wall panels are fully interchangeable — solid, glazed, branded or perforated — configured to exact specification and swappable between deployments.",
    icon: (
      <div style={{ display: "flex", gap: "4px" }}>
        <div style={{ width: "16px", height: "36px", border: "1px solid rgba(198,255,2,0.4)" }} />
        <div style={{ width: "16px", height: "36px", border: "1px solid rgba(198,255,2,0.25)", background: "rgba(198,255,2,0.05)" }} />
        <div style={{ width: "16px", height: "36px", border: "1px dashed rgba(198,255,2,0.3)" }} />
      </div>
    ),
  },
  {
    title: "BRANDED ENVIRONMENTS",
    desc: "The Modblock is designed to carry full brand environments — external cladding, graphic wraps, signage integration and illuminated panels. Your brand, built in.",
    icon: (
      <div style={{ position: "relative", width: "36px", height: "28px", border: "1px solid rgba(198,255,2,0.6)" }}>
        {/* Branding fascia — top third */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "9px", background: "rgba(198,255,2,0.3)" }} />
        {/* Signage posts */}
        <div style={{ position: "absolute", bottom: "3px", left: "10px", width: "1px", height: "8px", background: "rgba(198,255,2,0.5)" }} />
        <div style={{ position: "absolute", bottom: "3px", left: "24px", width: "1px", height: "8px", background: "rgba(198,255,2,0.5)" }} />
      </div>
    ),
  },
  {
    title: "CUSTOMISABLE PANELS",
    desc: "Every Modblock can be configured with solid panels, full glazing, branded graphic panels or any combination — fully tailored to your brief.",
    icon: (
      <div style={{ position: "relative", width: "40px", height: "28px", border: "1px solid rgba(198,255,2,0.6)", display: "flex", overflow: "hidden" }}>
        {/* Left panel — solid */}
        <div style={{ flex: 1, background: "rgba(198,255,2,0.15)", borderRight: "1px solid rgba(198,255,2,0.4)" }} />
        {/* Middle panel — glazed (no fill) */}
        <div style={{ flex: 1, borderRight: "1px solid rgba(198,255,2,0.4)" }} />
        {/* Right panel — branded */}
        <div style={{ flex: 1, background: "rgba(198,255,2,0.08)" }} />
      </div>
    ),
  },
  {
    title: "REDEPLOYABLE",
    desc: "Every component is built for repeated use. The same system, redeployed across hundreds of projects.",
    icon: (
      <div style={{ position: "relative", width: "40px", height: "40px" }}>
        <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "2px solid rgba(198,255,2,0.3)", borderTopColor: "transparent" }} />
        <div style={{ position: "absolute", top: "-3px", right: "6px", width: 0, height: 0, borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderBottom: "8px solid rgba(198,255,2,0.4)", transform: "rotate(30deg)" }} />
      </div>
    ),
  },
];

const applications = [
  { title: "SHOWS & FESTIVALS",         label: "Live & Touring",    img: "/Modblock/Modblock - Festival.png",    desc: "Festival infrastructure, touring concert environments and corporate event structures at scale.",           link: "/solutions/shows-festivals" },
  { title: "EXHIBITIONS & CONFERENCES", label: "Stands & Installs", img: "/Modblock/Modblock - Exhibition.png",  desc: "Custom exhibition stands, conference environments and world expo pavilions.",                           link: "/solutions/exhibitions-conference" },
  { title: "HOSPITALITY & RESTAURANTS", label: "VIP & Dining",      img: "/Modblock/Gaucho - Modblock.png",      desc: "VIP pavilions, temporary restaurants, paddock clubs and championship hospitality.",                    link: "/solutions/hospitality-restaurants" },
  { title: "RETAIL & MERCHANDISE",      label: "Brand Retail",      img: "/Modblock/MODBLOCK RETAIL ADIDAS 2.png",         desc: "Pop-up flagships, seasonal retail destinations and luxury brand environments.",                        link: "/solutions/retail-merchandise" },
  { title: "BRAND ACTIVATIONS",         label: "Experiential",      img: "/Modblock/Modblock - Lego.png",        desc: "Product launches, consumer campaigns and immersive brand installations.",                              link: "/solutions/brand-activations" },
  { title: "EXPERIENTIAL MARKETING",    label: "Campaign",          img: "/Modblock/Modblock - VW.png",          desc: "Roadshows, brand experiences and high-impact marketing installations that stop people in their tracks.", link: "/solutions/experiential-marketing" },
  { title: "AUTOMOTIVE & MOTORSPORT",   label: "Race & Road",       img: "/Modblock/Modblock - Motorsport.png",  desc: "Race circuit hospitality, paddock environments, fan zones and automotive brand activations.",            link: "/solutions/automotive-motorsport" },
  { title: "DOMESTIC & COMMERCIAL",     label: "Offices & Welfare", img: "/Modblock/Modblock - Domestic.png",    desc: "Site command centres, interim offices, welfare facilities and domestic annexes.",                      link: "/solutions/domestic-commercial" },
];

const specs = [
  { label: "UNIT DIMENSIONS",  value: "6000 × 2500 × 2900mm" },
  { label: "UNIT WEIGHT",      value: "1,400kg" },
  { label: "FLOOR CAPACITY",   value: "5 kN/m²", sub: "Uniformly distributed load" },
  { label: "INSTALLATION TIME",value: "From 1 Hour" },
  { label: "MAX STACK HEIGHT", value: "3 Units" },
  { label: "TRANSPORT",        value: "4 per 20ft / 8 per 40ft", sub: "Units per standard trailer" },
];

const sectionPad = "clamp(80px, 8vh, 120px)";

export default function ModblockPage() {
  return (
    <>
      {/* ── SECTION 1: HERO ─────────────────────────────────────── */}
      <section style={{
        display: "flex",
        alignItems: "stretch",
        background: "#000",
        paddingTop: "100px",
        paddingBottom: "60px",
      }}>
        {/* Left — text */}
        <div style={{
          flex: "0 0 50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          padding: `0 clamp(40px, 4vw, 120px)`,
        }}>
          <p style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            color: "var(--yellow)",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: "24px",
          }}>
            THE PRODUCTS
          </p>

          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(80px, 12vw, 180px)",
            color: "var(--white)",
            lineHeight: 0.9,
            letterSpacing: "0.01em",
            marginBottom: "24px",
          }}>
            THE<br />MODBLOCK
          </h1>

          <p style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(16px, 2vw, 22px)",
            color: "#C6FF02",
            letterSpacing: "0.08em",
            marginBottom: "32px",
          }}>
            MODULAR ARCHITECTURE
          </p>

          <p style={{
            fontSize: "15px",
            color: "var(--muted)",
            lineHeight: "1.8",
            maxWidth: "460px",
            marginBottom: "48px",
          }}>
            The Modblock is Modsol&apos;s flagship modular building system. Engineered for premium modular architecture — from motorsport hospitality suites to festival retail environments. Flat-packable, rapidly deployable and scales in infinite 14m² multiples.
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary">ENQUIRE NOW</Link>
            <Link href="/projects/case-studies" className="btn-secondary">VIEW PROJECTS</Link>
          </div>
        </div>

        {/* Right — hero image */}
        <div style={{ flex: "0 0 50%", position: "relative", overflow: "hidden" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Modblock/Modblock - VW.png"
            alt="Modblock — Vodafone"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 100%)",
          }} />
        </div>
      </section>

      {/* ── VIDEO ───────────────────────────────────────────────── */}
      <section style={{ background: "#000", paddingTop: 0, paddingBottom: 0, position: "relative" }}>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{ width: "100%", display: "block", objectFit: "cover" }}
        >
          <source src="/Modblock/MODBLOCK%20ANIMATION%2020-10-2025.mp4" type="video/mp4" />
        </video>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
        }}>
          {/* Label */}
          <p style={{
            fontFamily: "var(--font-mono)",
            fontSize: "16px",
            color: "#000000",
            fontWeight: 900,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            margin: 0,
            textShadow: "0 0 10px rgba(0,0,0,0.8)",
          }}>
            SCROLL
          </p>

          {/* Line track + animated highlight */}
          <div style={{ position: "relative", width: "3px", height: "80px", background: "#000000" }}>
            <div
              className="scroll-indicator-line-highlight"
              style={{
                position: "absolute",
                left: 0,
                width: "3px",
                background: "#000000",
              }}
            />
          </div>

          {/* Chevron */}
          <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L12 13L23 1" stroke="#000000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* ── SECTION 2: OVERVIEW ─────────────────────────────────── */}
      <section style={{ background: "#0A0A0A", padding: `80px 0 ${sectionPad}` }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(48px, 6vw, 100px)", alignItems: "start" }}>
            <div className="reveal">
              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(36px, 4vw, 60px)",
                color: "var(--white)",
                lineHeight: 1.0,
                letterSpacing: "0.02em",
              }}>
                ENGINEERED FOR MODULAR ARCHITECTURE.<br />
                <span style={{ color: "#C6FF02" }}>BUILT TO PERMANENT STANDARDS.</span>
              </h2>
            </div>
            <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9" }}>
                The Modblock is not a tent. It is not a container. It is a precision-engineered modular building system designed from the ground up for the demands of modular architecture.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9" }}>
                Every component is designed to flat-pack, stack and connect with precision tolerances. The system deploys in hours, performs for days, weeks or months — and redeploys across hundreds of future projects.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9" }}>
                The result is a temporary structure that achieves the aesthetic and structural quality of permanent architecture — at a fraction of the cost and in a fraction of the time.
              </p>
            </div>
          </div>
          {/* Equaliser bars */}
          <div style={{ display: "flex", alignItems: "flex-end", height: "80px", gap: "3px", margin: "48px 0" }}>
            {Array.from({ length: 16 }).map((_, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: "60px",
                  background: "rgba(198,255,2,0.2)",
                  animation: `equalizerPulse 0.8s ease-in-out infinite alternate`,
                  animationDelay: `${i * 0.05}s`,
                }}
              />
            ))}
          </div>
          {/* Accent line */}
          <div style={{ marginTop: `${sectionPad}`, height: "1px", background: "#C6FF02", opacity: 0.6 }} />
        </div>
      </section>

      {/* ── SECTION 3: KEY FEATURES ─────────────────────────────── */}
      <section style={{ background: "#000", padding: `${sectionPad} 0` }}>
        <div className="container">
          <p className="section-label">Key Features</p>
          <h2 className="section-title reveal" style={{ marginBottom: "48px" }}>
            WHAT THE MODBLOCK <span style={{ color: "#C6FF02" }}>DELIVERS</span>
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px",
            background: "rgba(255,255,255,0.05)",
            alignItems: "stretch",
          }}>
            {features.map((f) => (
              <div key={f.title} className="modblock-feature-card">
                <div className="modblock-feature-icon">
                  {f.icon}
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: APPLICATIONS ─────────────────────────────── */}
      <section style={{ background: "#0A0A0A", paddingTop: `${sectionPad}`, paddingBottom: 0 }}>
        <div className="container" style={{ paddingBottom: "48px" }}>
          <p className="section-label">Applications</p>
          <h2 className="section-title reveal">
            WHERE THE MODBLOCK <span style={{ color: "#C6FF02" }}>PERFORMS</span>
          </h2>
        </div>
        {/* Full-width horizontal accordion */}
        <div className="modblock-accordion">
          {applications.map((a) => (
            <Link key={a.title} href={a.link} className="modblock-acc-panel">
              {/* Background image */}
              <div style={{
                position: "absolute", inset: 0,
                backgroundImage: `url('${a.img}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }} />
              {/* Overlay */}
              <div className="modblock-acc-overlay" />
              {/* Vertical title — default */}
              <div className="modblock-acc-vtitle">
                <span>{a.title}</span>
              </div>
              {/* Expanded content — on hover */}
              <div className="modblock-acc-content">
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "#C6FF02", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "8px" }}>{a.label}</p>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "36px", color: "var(--white)", letterSpacing: "0.02em", lineHeight: 1, marginBottom: "12px" }}>{a.title}</h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "rgba(255,255,255,0.6)", lineHeight: "1.6", marginBottom: "16px" }}>{a.desc}</p>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "#C6FF02", letterSpacing: "0.2em", textTransform: "uppercase" }}>EXPLORE →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── SECTION 5: TECHNICAL SPECIFICATION ──────────────────── */}
      <section style={{ background: "#000", padding: `${sectionPad} 0` }}>
        <div className="container">
          <p className="section-label">Technical Specification</p>
          <h2 className="section-title reveal" style={{ marginBottom: "16px" }}>
            THE <span style={{ color: "#C6FF02" }}>NUMBERS</span>
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--muted)", fontStyle: "italic", marginBottom: "48px" }}>
            Full technical specifications available on request. Key indicative data shown below.
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "rgba(255,255,255,0.05)",
          }}>
            {specs.map(({ label, value, sub }) => (
              <div key={label} className="modblock-spec-card">
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "#C6FF02", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "12px" }}>
                  {label}
                </p>
                <p className="modblock-spec-value" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px, 3vw, 40px)", color: "var(--white)", lineHeight: 1 }}>
                  {value}
                </p>
                {sub && (
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "rgba(255,255,255,0.4)", marginTop: "8px" }}>
                    {sub}
                  </p>
                )}
              </div>
            ))}
          </div>
          <div style={{ marginTop: "40px" }}>
            <Link href="/contact" className="btn-primary">FULL SPECIFICATION PACK AVAILABLE ON REQUEST</Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: PROJECT REFERENCE + CTA ──────────────────── */}
      <section style={{ background: "#0A0A0A", padding: `${sectionPad} 0 clamp(40px, 4vh, 60px)`, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "rgba(255,255,255,0.05)" }}>
            {/* Left — project reference */}
            <div style={{ position: "relative", minHeight: "480px", overflow: "hidden" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Aston Martin Internal.JPG"
                alt="Aston Martin Hospitality Suite"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  opacity: 0.5,
                }}
              />
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.1) 100%)",
              }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "48px" }}>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "#C6FF02", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "12px" }}>
                  SEEN IN ACTION
                </p>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 3vw, 44px)", color: "var(--white)", letterSpacing: "0.03em", lineHeight: 1.0, marginBottom: "16px" }}>
                  ASTON MARTIN<br />HOSPITALITY SUITE
                </h3>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", lineHeight: "1.7", marginBottom: "24px", maxWidth: "380px" }}>
                  The Modblock was deployed as the primary structure for the Aston Martin hospitality suite — a premium branded environment delivered at race pace.
                </p>
                <Link href="/projects/case-studies" style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  color: "#C6FF02",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}>
                  VIEW ALL PROJECTS →
                </Link>
              </div>
            </div>

            {/* Right — CTA */}
            <div style={{
              background: "#000",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "clamp(48px, 6vw, 80px)",
            }}>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "#C6FF02", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "24px" }}>
                START A PROJECT
              </p>
              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(40px, 5vw, 72px)",
                color: "var(--white)",
                lineHeight: 0.95,
                letterSpacing: "0.02em",
                marginBottom: "24px",
              }}>
                READY TO<br /><span style={{ color: "#C6FF02" }}>BUILD BOLD?</span>
              </h2>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.8", marginBottom: "40px", maxWidth: "400px" }}>
                Tell us about your project and we&apos;ll show you exactly what the Modblock can deliver.
              </p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn-primary">ENQUIRE NOW</Link>
                <Link href="/contact" className="btn-secondary">GET A SPEC PACK</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
