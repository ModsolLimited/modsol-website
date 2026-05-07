"use client";
import Link from "next/link";

const features = [
  {
    title: "MODULAR ALUMINIUM FRAME",
    desc: "Precision-extruded aluminium profiles that connect, align and lock at any configuration.",
    icon: (
      <div style={{ position: "relative", width: "40px", height: "32px", border: "1px solid rgba(198,255,2,0.6)" }}>
        {/* Inner grid lines */}
        <div style={{ position: "absolute", top: 0, bottom: 0, left: "50%", width: "1px", background: "rgba(198,255,2,0.25)" }} />
        <div style={{ position: "absolute", left: 0, right: 0, top: "50%", height: "1px", background: "rgba(198,255,2,0.25)" }} />
      </div>
    ),
  },
  {
    title: "GRAPHIC INTEGRATION",
    desc: "Engineered to carry large-format printed graphics, tensioned fabric and rigid panel systems.",
    icon: (
      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <div style={{ width: "40px", height: "6px", background: "rgba(198,255,2,0.35)" }} />
        <div style={{ width: "40px", height: "6px", background: "rgba(198,255,2,0.2)" }} />
        <div style={{ width: "40px", height: "6px", background: "rgba(198,255,2,0.35)" }} />
        <div style={{ width: "40px", height: "6px", background: "rgba(198,255,2,0.1)" }} />
      </div>
    ),
  },
  {
    title: "RAPID INSTALLATION",
    desc: "Full façade structures assembled in hours — no specialist tools, no heavy plant required.",
    icon: (
      <div style={{ position: "relative", width: "36px", height: "36px" }}>
        <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "1px solid rgba(198,255,2,0.6)" }} />
        <div style={{ position: "absolute", bottom: "50%", left: "50%", width: "1px", height: "10px", background: "rgba(198,255,2,0.6)", transformOrigin: "bottom center", transform: "translateX(-50%)" }} />
        <div style={{ position: "absolute", top: "50%", left: "50%", width: "14px", height: "1px", background: "#C6FF02", transformOrigin: "left center", transform: "translateY(-50%)" }} />
        <div style={{ position: "absolute", top: "50%", left: "50%", width: "3px", height: "3px", borderRadius: "50%", background: "#C6FF02", transform: "translate(-50%, -50%)" }} />
      </div>
    ),
  },
  {
    title: "SCALABLE ENVIRONMENTS",
    desc: "Start with a single bay. Scale to a full building façade. The Modframe grows with the brief.",
    icon: (
      <div style={{ display: "flex", gap: "4px", alignItems: "flex-end" }}>
        <div style={{ width: "14px", height: "14px", border: "1px solid rgba(198,255,2,0.3)" }} />
        <div style={{ width: "22px", height: "22px", border: "1px solid rgba(198,255,2,0.35)" }} />
        <div style={{ width: "32px", height: "32px", border: "1px solid rgba(198,255,2,0.4)" }} />
      </div>
    ),
  },
  {
    title: "MODBLOCK COMPATIBLE",
    desc: "Designed to integrate directly with the Modblock as the branded exterior cladding system.",
    icon: (
      <div style={{ display: "flex", gap: "3px", alignItems: "center" }}>
        <div style={{ width: "18px", height: "28px", border: "1px solid rgba(198,255,2,0.6)" }} />
        <div style={{ width: "4px", height: "2px", background: "rgba(198,255,2,0.5)" }} />
        <div style={{ width: "18px", height: "28px", border: "1px solid rgba(198,255,2,0.6)" }} />
      </div>
    ),
  },
  {
    title: "ILLUMINATION READY",
    desc: "Frame profiles accommodate LED strip and back-lit graphic systems for 24-hour brand environments.",
    icon: (
      <div style={{ position: "relative", width: "40px", height: "28px", border: "1px solid rgba(198,255,2,0.6)" }}>
        {/* LED dots across top */}
        {[6, 14, 22, 30].map((x) => (
          <div key={x} style={{ position: "absolute", top: "4px", left: `${x}px`, width: "4px", height: "4px", borderRadius: "50%", background: "rgba(198,255,2,0.7)" }} />
        ))}
        {/* Glow suggestion */}
        <div style={{ position: "absolute", top: "12px", left: 0, right: 0, height: "1px", background: "rgba(198,255,2,0.15)" }} />
      </div>
    ),
  },
  {
    title: "EXHIBITION STANDS",
    desc: "Fully branded exhibition stand structures adaptable to any shape, size or floor plan — from compact single-storey stands to large multi-bay feature environments.",
    icon: (
      <div style={{ position: "relative", width: "44px", height: "36px", border: "1px solid rgba(198,255,2,0.6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: "28px", height: "20px", border: "1px solid rgba(198,255,2,0.4)" }} />
      </div>
    ),
  },
  {
    title: "REDEPLOYABLE",
    desc: "Every component is built for repeated deployment — reducing material waste, eliminating single-use construction and delivering a measurably lower environmental impact across every project.",
    icon: (
      <div style={{ position: "relative", width: "40px", height: "40px" }}>
        <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "2px solid rgba(198,255,2,0.3)", borderTopColor: "transparent" }} />
        <div style={{ position: "absolute", top: "-3px", right: "6px", width: 0, height: 0, borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderBottom: "8px solid rgba(198,255,2,0.4)", transform: "rotate(30deg)" }} />
      </div>
    ),
  },
];

const applications = [
  { title: "FESTIVALS & SHOWS",         label: "Live Events",        img: "/Modframe/Oasis.JPG",                 desc: "Large-scale branded environments and visual façades at major music festivals, touring shows and live events.",                                                          link: "/solutions/shows-festivals" },
  { title: "RETAIL & MERCHANDISE",      label: "Brand Retail",       img: "/Modframe/NFL.JPG",                   desc: "Modular branded retail structures and merchandise environments at sporting events, festivals and brand activations.",                                                  link: "/solutions/retail-merchandise" },
  { title: "INTERNAL FIT-OUT",          label: "Interiors",          img: "/Modframe/Aston Martin Internal.JPG", desc: "Modframe structures deployed internally as feature walls, room dividers and branded interior environments.",                                                           link: "/solutions/hospitality-restaurants" },
  { title: "EXHIBITIONS",               label: "Stands & Installs",  img: "/Modframe/Exhibition.jpg",            desc: "Premium exhibition stand structures and feature builds at trade shows, world expos and brand showcases.",                                                             link: "/solutions/exhibitions-conference" },
  { title: "TRADE & ROAD SHOWS",         label: "Conference & Expo",  img: "/Modframe/Man City.jpg",              desc: "Scalable modular structures for trade show environments — from single bay stands to full pavilion builds.",                                                           link: "/solutions/exhibitions-conference" },
  { title: "EXPERIENTIAL MARKETING",    label: "Campaign",           img: "/Modframe/Events-Nugget-Box-17.jpg",  desc: "Immersive brand environments and experiential installations that create unforgettable moments at scale.",                                                             link: "/solutions/experiential-marketing" },
  { title: "STRUCTURE FASCIA SYSTEM",   label: "Architecture",       img: "/Modframe/Renault.jpg",               desc: "The Modframe deployed as a complete building fascia — cladding, branding and weatherproofing in one unified system.",                                                link: "/solutions/automotive-motorsport" },
];

const specs = [
  { label: "FRAME PROFILE",       value: "Extruded Aluminium" },
  { label: "CONFIGURATIONS",      value: "∞", fontSize: "clamp(48px, 6vw, 80px)" },
  { label: "GRAPHIC OPTIONS",     value: "Print / Fabric / Rigid Panel" },
  { label: "INSTALLATION TIME",   value: "From 1 Hour" },
  { label: "ACCESSORIES",         value: "LED Lighting / 3D Signage / Textured Panelling" },
  { label: "TRANSPORT",           value: "Flat-Pack" },
];

const sectionPad = "clamp(80px, 8vh, 120px)";

export default function ModframePage() {
  return (
    <>
      <style>{`
        .product-hero-content, .product-hero-image { flex: 0 0 50%; }
        @media (max-width: 768px) {
          .product-hero {
            flex-direction: column !important;
            padding-top: 80px !important;
          }
          .product-hero-content {
            width: 100vw !important;
            min-width: 100vw !important;
            max-width: 100vw !important;
            flex: none !important;
            padding: 32px 24px !important;
            box-sizing: border-box !important;
          }
          .product-hero-image {
            width: 100vw !important;
            min-width: 100vw !important;
            max-width: 100vw !important;
            flex: none !important;
            height: 260px !important;
            min-height: unset !important;
            position: relative !important;
            order: -1 !important;
          }
          .product-features-grid {
            grid-template-columns: 1fr !important;
            width: 100% !important;
            overflow: hidden !important;
          }
          .product-numbers-grid {
            grid-template-columns: 1fr 1fr !important;
            width: 100% !important;
            margin-left: 0 !important;
            padding-left: 0 !important;
            box-sizing: border-box !important;
          }
          .product-cta-grid {
            grid-template-columns: 1fr !important;
            width: 100% !important;
          }
          .product-cta-image {
            width: 100% !important;
            height: 240px !important;
            min-height: unset !important;
          }
          .nav-cta {
            white-space: nowrap !important;
            padding: 8px 10px !important;
            font-size: 10px !important;
            line-height: 1 !important;
          }
        }
      `}</style>
      {/* ── SECTION 1: HERO ─────────────────────────────────────── */}
      <section className="product-hero" style={{
        display: "flex",
        alignItems: "stretch",
        flexWrap: "wrap",
        overflow: "hidden",
        background: "#000",
        paddingTop: "100px",
        paddingBottom: "60px",
      }}>
        {/* Left — text */}
        <div className="product-hero-content" style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          padding: `0 clamp(40px, 4vw, 120px)`,
          minWidth: "min(100%, 400px)",
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
            THE<br />MODFRAME
          </h1>

          <p style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(16px, 2vw, 22px)",
            color: "#C6FF02",
            letterSpacing: "0.08em",
            marginBottom: "32px",
          }}>
            MODULAR BRANDING ENVIRONMENTS
          </p>

          <p style={{
            fontSize: "15px",
            color: "var(--muted)",
            lineHeight: "1.8",
            maxWidth: "460px",
            marginBottom: "48px",
          }}>
            The Modframe is Modsol&apos;s modular aluminium framework system. Engineered for large-scale branded environments, façades and visual installations — at any scale, in any environment.
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary">ENQUIRE NOW</Link>
            <Link href="/projects/case-studies" className="btn-secondary">VIEW PROJECTS</Link>
          </div>
        </div>

        {/* Right — hero image */}
        <div className="product-hero-image" style={{ position: "relative", overflow: "hidden", background: "#000", minWidth: "min(100%, 400px)", flex: "1 1 50%" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Modframe/Modframe 1.jpg"
            alt="Modframe"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
            }}
          />
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 100%)",
          }} />
        </div>
      </section>

      {/* ── LOGO ────────────────────────────────────────────────── */}
      <section style={{ background: "#000", padding: "80px 0", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Modframe/MODFRAME yellow.png"
          alt="Modframe"
          style={{
            width: "80%",
            maxWidth: "1080px",
            height: "auto",
            objectFit: "contain",
            display: "block",
          }}
        />
      </section>

      {/* ── SECTION 2: OVERVIEW ─────────────────────────────────── */}
      <section style={{ background: "#0A0A0A", padding: `80px 0 ${sectionPad}` }}>
        <div className="container">
          <div className="product-overview-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(48px, 6vw, 100px)", alignItems: "start" }}>
            <div className="reveal">
              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(36px, 4vw, 60px)",
                color: "var(--white)",
                lineHeight: 1.0,
                letterSpacing: "0.02em",
              }}>
                ENGINEERED FOR BRAND.<br />
                <span style={{ color: "#C6FF02" }}>BUILT FOR IMPACT.</span>
              </h2>
            </div>
            <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9" }}>
                The Modframe is a precision-engineered aluminium framing system designed to carry large-format graphics, branding panels and visual environments at any scale.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9" }}>
                From festival retail façades to construction hoarding, from motorsport paddock branding to exhibition stand structures — the Modframe deploys rapidly and performs visually at the highest level.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9" }}>
                The Modframe integrates with the Modblock and Modwall systems — providing the branded exterior layer to the complete Modsol platform.
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
          <div style={{ marginTop: `${sectionPad}`, height: "1px", background: "#C6FF02", opacity: 0.6 }} />
        </div>
      </section>

      {/* ── SECTION 3: KEY FEATURES ─────────────────────────────── */}
      <section style={{ background: "#000", padding: `${sectionPad} 0` }}>
        <div className="container">
          <p className="section-label">Key Features</p>
          <h2 className="section-title reveal" style={{ marginBottom: "48px" }}>
            WHAT THE MODFRAME <span style={{ color: "#C6FF02" }}>DELIVERS</span>
          </h2>
          <div className="product-features-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px",
            background: "rgba(255,255,255,0.05)",
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
            WHERE THE MODFRAME <span style={{ color: "#C6FF02" }}>PERFORMS</span>
          </h2>
        </div>
        <div className="modblock-accordion">
          {applications.map((a) => (
            <Link key={a.title} href={a.link} className="modblock-acc-panel">
              {a.img ? (
                <div style={{
                  position: "absolute", inset: 0,
                  backgroundImage: `url('${a.img}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }} />
              ) : (
                <div className="modblock-acc-placeholder" />
              )}
              <div className="modblock-acc-overlay" />
              <div className="modblock-acc-vtitle">
                <span>{a.title}</span>
              </div>
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
          <div className="product-numbers-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "rgba(255,255,255,0.05)",
          }}>
            {specs.map(({ label, value, fontSize }) => (
              <div key={label} className="modblock-spec-card">
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "#C6FF02", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "12px" }}>
                  {label}
                </p>
                <p className="modblock-spec-value" style={{ fontFamily: "var(--font-display)", fontSize: fontSize ?? "clamp(24px, 3vw, 40px)", color: "var(--white)", lineHeight: 1 }}>
                  {value}
                </p>
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
          <div className="product-cta-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "rgba(255,255,255,0.05)" }}>
            {/* Left — project reference */}
            <div className="product-cta-image" style={{ position: "relative", minHeight: "480px", overflow: "hidden" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Modframe/Oasis.JPG"
                alt="Oasis Live '25 Merchandise Environment"
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
                  OASIS LIVE &apos;25<br />MERCHANDISE ENVIRONMENT
                </h3>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", lineHeight: "1.7", marginBottom: "24px", maxWidth: "380px" }}>
                  The Modframe was deployed across the full Oasis Live &apos;25 tour as the primary branding and retail façade system — delivering large-scale visual environments at multiple major venues across the UK.
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
                Tell us about your project and we&apos;ll show you exactly what the Modframe can deliver.
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
