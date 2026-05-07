"use client";
import Link from "next/link";

const features = [
  {
    title: "MODULAR PANEL SYSTEM",
    desc: "Precision-engineered panels that connect, align and lock with zero visible fixings.",
    icon: (
      <div style={{ position: "relative", width: "40px", height: "28px", border: "1px solid rgba(198,255,2,0.6)", display: "flex", overflow: "hidden" }}>
        <div style={{ flex: 1, background: "rgba(198,255,2,0.15)", borderRight: "1px solid rgba(198,255,2,0.4)" }} />
        <div style={{ flex: 1, borderRight: "1px solid rgba(198,255,2,0.4)" }} />
        <div style={{ flex: 1, background: "rgba(198,255,2,0.08)" }} />
      </div>
    ),
  },
  {
    title: "RAPID INSTALLATION",
    desc: "Full room configurations installed in hours by a small team. No specialist tools required.",
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
    title: "INTEGRATED DOOR SYSTEMS",
    desc: "Flush door systems that integrate seamlessly into the wall panel grid — hinged, sliding or bi-fold.",
    icon: (
      <div style={{ position: "relative", width: "36px", height: "44px", border: "1px solid rgba(198,255,2,0.6)" }}>
        <div style={{ position: "absolute", bottom: 0, left: "8px", width: "16px", height: "28px", border: "1px solid rgba(198,255,2,0.4)", background: "rgba(198,255,2,0.06)" }} />
        <div style={{ position: "absolute", bottom: "12px", left: "20px", width: "3px", height: "3px", borderRadius: "50%", background: "#C6FF02" }} />
      </div>
    ),
  },
  {
    title: "SUSTAINABILITY",
    desc: "Built for repeated use across hundreds of deployments — reducing waste, eliminating single-use construction and lowering environmental impact.",
    icon: (
      <span style={{ fontSize: "32px", color: "#C6FF02", lineHeight: 1 }}>♻</span>
    ),
  },
  {
    title: "VARIOUS PANEL OPTIONS",
    desc: "Available in slat wall, pegboard, solid and custom panel configurations — adaptable to any retail, hospitality or exhibition brief.",
    icon: (
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 10px)", gap: "3px" }}>
        {[true, false, true, false, true, false].map((filled, i) => (
          <div key={i} style={{ width: "10px", height: "10px", border: "1px solid rgba(198,255,2,0.6)", background: filled ? "rgba(198,255,2,0.3)" : "transparent" }} />
        ))}
      </div>
    ),
  },
  {
    title: "BRANDED FINISH OPTIONS",
    desc: "Panels accept direct print, vinyl wrap, fabric tensioning and paint finishes.",
    icon: (
      <div style={{ position: "relative", width: "36px", height: "28px", border: "1px solid rgba(198,255,2,0.6)" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "9px", background: "rgba(198,255,2,0.3)" }} />
        <div style={{ position: "absolute", bottom: "3px", left: "10px", width: "1px", height: "8px", background: "rgba(198,255,2,0.5)" }} />
        <div style={{ position: "absolute", bottom: "3px", left: "24px", width: "1px", height: "8px", background: "rgba(198,255,2,0.5)" }} />
      </div>
    ),
  },
  {
    title: "REDEPLOYABLE",
    desc: "Every Modwall panel is built for repeated deployment — the same components, reused across hundreds of projects and environments.",
    icon: (
      <div style={{ position: "relative", width: "36px", height: "36px" }}>
        <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "1px solid rgba(198,255,2,0.6)", borderTopColor: "transparent", transform: "rotate(-30deg)" }} />
        <div style={{ position: "absolute", top: "1px", right: "4px", width: 0, height: 0, borderLeft: "4px solid transparent", borderRight: "4px solid transparent", borderBottom: "6px solid rgba(198,255,2,0.6)", transform: "rotate(60deg)" }} />
      </div>
    ),
  },
  {
    title: "SYSTEM INTEGRATION",
    desc: "Integrates directly with both the Modblock structural system and the Modframe branding system — delivering a complete interior and exterior solution from a single unified platform.",
    icon: (
      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <div style={{ width: "16px", height: "22px", border: "1px solid rgba(198,255,2,0.6)" }} />
        <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
          <div style={{ width: "6px", height: "1px", background: "rgba(198,255,2,0.6)" }} />
          <div style={{ width: "4px", height: "4px", border: "1px solid rgba(198,255,2,0.6)", borderRadius: "1px" }} />
          <div style={{ width: "6px", height: "1px", background: "rgba(198,255,2,0.6)" }} />
        </div>
        <div style={{ width: "16px", height: "22px", border: "1px solid rgba(198,255,2,0.6)" }} />
      </div>
    ),
  },
];

const applications = [
  { title: "EXHIBITIONS & CONFERENCES", label: "Stands & Installs", img: "/Modwall/Modwall - Exhibition2.png",   desc: "Custom exhibition interiors, conference room builds and world expo environments.",            link: "/solutions/exhibitions-conference" },
  { title: "EVENT INTERIORS",           label: "Live & Touring",    img: "/Modwall/Modwall - Vinyl.png",         desc: "Premium interior environments within marquees, temporary venues and event structures.",     link: "/solutions/shows-festivals" },
  { title: "HOSPITALITY ENVIRONMENTS",  label: "VIP & Dining",      img: "/Modwall/Aston Martin Internal.JPG",   desc: "VIP interiors, restaurant fit-outs and premium hospitality suite environments.",            link: "/solutions/hospitality-restaurants" },
  { title: "RETAIL ENVIRONMENTS",       label: "Brand Retail",      img: "/Modwall/Modwall - Clothes.png",       desc: "Pop-up retail interiors, brand store fit-outs and merchandise environment builds.",        link: "/solutions/retail-merchandise" },
  { title: "TEMPORARY OFFICES",         label: "Offices & Welfare", img: "/Modwall/Modwall - Office.png",        desc: "Deployable office environments, site welfare facilities and interim workspace solutions.",  link: "/solutions/domestic-commercial" },
  { title: "BRAND ACTIVATIONS",         label: "Experiential",      img: "/Modwall/Modwall - Branded Vinyl.png", desc: "Immersive branded interior environments for product launches and experiential campaigns.", link: "/solutions/brand-activations" },
  { title: "ACCOMMODATION",             label: "Welfare & Living",  img: "/Modwall/Modwall - BedStay.jpg",       desc: "Temporary accommodation and welfare environments built to permanent quality standards.",   link: "/solutions/hospitality-restaurants" },
];

const specs = [
  { label: "PANEL DIMENSIONS",  value: "2300 × 992MM" },
  { label: "PANEL WEIGHT",      value: "20KG Per Panel" },
  { label: "SURFACE FINISHES",  value: "White / Colour / Texture & Custom" },
  { label: "INSTALLATION TIME", value: "From 1 Hour" },
  { label: "PANEL OPTIONS",     value: "Standard / Peg Board / Slat Wall / Door" },
  { label: "TRANSPORT",         value: "Flat-Pack" },
];

const sectionPad = "clamp(80px, 8vh, 120px)";

export default function ModwallPage() {
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
            THE<br />MODWALL
          </h1>

          <p style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(16px, 2vw, 22px)",
            color: "#C6FF02",
            letterSpacing: "0.08em",
            marginBottom: "32px",
          }}>
            MODULAR INTERIOR ENVIRONMENTS
          </p>

          <p style={{
            fontSize: "15px",
            color: "var(--muted)",
            lineHeight: "1.8",
            maxWidth: "460px",
            marginBottom: "48px",
          }}>
            The Modwall is Modsol&apos;s precision modular walling system. Engineered for exhibitions, events and temporary environments — delivering clean architectural interiors in hours. Adaptable, redeployable and built to perform.
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary">ENQUIRE NOW</Link>
            <Link href="/projects/case-studies" className="btn-secondary">VIEW PROJECTS</Link>
          </div>
        </div>

        {/* Right — hero image */}
        <div className="product-hero-image" style={{ position: "relative", overflow: "hidden", minWidth: "min(100%, 400px)", flex: "1 1 50%" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Modwall/Modwall 1.jpg"
            alt="Modwall"
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
          <source src="/Modwall/MODWALL%203D%20ANIMATION_SHORT%20VIDEO%20-%20For%20Sharing.mp4" type="video/mp4" />
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
          <div style={{ position: "relative", width: "3px", height: "80px", background: "#000000" }}>
            <div
              className="scroll-indicator-line-highlight"
              style={{ position: "absolute", left: 0, width: "3px", background: "#000000" }}
            />
          </div>
          <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L12 13L23 1" stroke="#000000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
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
                ENGINEERED FOR INTERIORS.<br />
                <span style={{ color: "#C6FF02" }}>BUILT FOR EVERY ENVIRONMENT.</span>
              </h2>
            </div>
            <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9" }}>
                Temporary environments have always compromised on interior quality — thin linings, visible fixings, finishes that undermine the brand they're meant to represent. The Modwall exists to end that compromise.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9" }}>
                Panels connect with precision-engineered tolerance, producing flat, seamless wall surfaces with no visible fixings and no remedial finishing. What takes traditional methods days, the Modwall delivers in hours.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9" }}>
                Deploy it as a standalone interior system or integrate it directly with the Modblock and Modframe. Marquees, exhibition halls, event venues, permanent structures — the Modwall performs in all of them.
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
            WHAT THE MODWALL <span style={{ color: "#C6FF02" }}>DELIVERS</span>
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
            WHERE THE MODWALL <span style={{ color: "#C6FF02" }}>PERFORMS</span>
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
            {specs.map(({ label, value }) => (
              <div key={label} className="modblock-spec-card">
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "#C6FF02", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "12px" }}>
                  {label}
                </p>
                <p className="modblock-spec-value" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(18px, 2.5vw, 32px)", color: "var(--white)", lineHeight: 1, whiteSpace: "nowrap" }}>
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
                src="/Modwall/Aston Martin Internal.JPG"
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
                  The Modwall was specified for the complete interior fit-out of the Aston Martin hospitality suite — delivering a premium architectural interior environment within a temporary structure.
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
                Tell us about your project and we&apos;ll show you exactly what the Modwall can deliver.
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
