"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import KeyFeatures from "@/components/sections/KeyFeatures";

const tabs = ["THE MODBLOCK", "THE MODWALL", "THE MODFRAME"] as const;
type Tab = typeof tabs[number];

const tabContent: Record<Tab, {
  img: string;
  logo: string;
  logoWidth: number;
  heading: string;
  body: string;
  bullets: string[];
  link: string;
}> = {
  "THE MODBLOCK": {
    img: "/Modblock/MODBLOCK ACTIVATION NIKE 2.png",
    logo: "/Modblock/MODBLOCK R yellow transparent.png",
    logoWidth: 160,
    heading: "YOUR BRAND. BUILT IN.",
    body: "The Modblock provides the structural canvas for brand activation environments — custom-configured structures that carry full brand identity from foundation to roofline. Rapidly deployed at any event or location, with every surface available for brand expression and every configuration redeployable across campaigns.",
    bullets: [
      "Full exterior brand wrap — every panel, every face",
      "Custom configuration per activation brief",
      "Redeployable across the full campaign calendar",
    ],
    link: "/products/modblock",
  },
  "THE MODWALL": {
    img: "/Modwall/Modwall 1.jpg",
    logo: "/Modwall/MODWALL R yellow transparent.png",
    logoWidth: 160,
    heading: "EVERY SURFACE IS A CANVAS.",
    body: "Inside every brand activation, the Modwall delivers interior environments that are entirely on-brand — graphic wall panels, LED-integrated surfaces, interactive display zones and immersive room configurations. Every panel is interchangeable so the space evolves with the campaign.",
    bullets: [
      "Full graphic print and vinyl wrap on every panel",
      "LED integration and backlit panel options",
      "Interactive display and product showcase zones",
    ],
    link: "/products/modwall",
  },
  "THE MODFRAME": {
    img: "/Modframe/Renault.jpg",
    logo: "/Modframe/MODFRAME yellow.png",
    logoWidth: 160,
    heading: "THE FRAME THAT FLIES YOUR FLAG.",
    body: "The Modframe delivers the overhead brand presence that makes activation environments visible from across any event or venue — large-format graphic canopies, branded entrance arches and high-level signage structures that command attention and drive footfall to the activation.",
    bullets: [
      "Large-format overhead graphic canopy systems",
      "Branded entrance and gateway arch configurations",
      "Visible at distance — drives footfall to the activation",
    ],
    link: "/products/modframe",
  },
};

const stats = [
  { value: "100%",  label: "FULL GRAPHIC WRAP" },
  { value: "LED",   label: "READY" },
  { value: "48HR",  label: "TURNAROUND" },
  { value: "400MM", label: "GRID SYSTEM" },
];

const projects = [
  {
    img: "/Modblock/MODBLOCK RETAIL ADIDAS 3.png",
    title: "GLOBAL BRAND ACTIVATION — SPORTING EVENT",
    category: "Brand Activation",
    desc: "A full Modblock brand activation environment deployed at a major international sporting event — fully wrapped structure, LED interior, product display zones and consumer interaction areas, installed and operational in 36 hours.",
  },
  {
    img: "/Modframe/Renault.jpg",
    title: "PRODUCT LAUNCH ACTIVATION",
    category: "Brand & Product Launch",
    desc: "A bespoke brand activation structure built for a major automotive product launch — custom Modblock footprint with full exterior wrap, Modframe branded canopy and Modwall immersive interior experience, redeployed across 6 European cities.",
  },
];

// ── Gallery ────────────────────────────────────────────────────────────────
const allImages = [
  // MODBLOCK
  { src: '/Modblock/MODBLOCK MOTORSPORT PORSCHE 2.png', product: 'MODBLOCK' },
  { src: '/Modblock/MODBLOCK MOTORSPORT MERCEDES BENZ 2.png', product: 'MODBLOCK' },
  { src: '/Modblock/MODBLOCK EXPERIENTIAL MARKETING NETFLIX 2.png', product: 'MODBLOCK' },
  { src: '/Modblock/MODBLOCK EXPERIENTIAL MARKETING PEPSI 2.png', product: 'MODBLOCK' },
  { src: '/Modblock/MODBLOCK EXPERIENTIAL REDBULL 2.png', product: 'MODBLOCK' },
  { src: '/Modblock/MODBLOCK EXPERIENTIAL PLAYSTATION 2.png', product: 'MODBLOCK' },
  { src: '/Modblock/COFFEE SHOP 2.png', product: 'MODBLOCK' },
  { src: '/Modblock/MODBLOCK COMMERCIAL OFFICE 2.png', product: 'MODBLOCK' },
  { src: '/Modblock/MODBLOCK RETAIL ACTIVATION THE NORTH FACE 2.png', product: 'MODBLOCK' },
  { src: '/Modblock/MODBLOCK ACTIVATION NIKE 2.png', product: 'MODBLOCK' },
  { src: '/Modblock/MODBLOCK RETAIL ADIDAS 3.png', product: 'MODBLOCK' },
  { src: '/Modblock/MODBLOCK ACTIVATION GYM POD.png', product: 'MODBLOCK' },
  { src: '/Modblock/MODBLOCK RETAIL ACTIVATION THE NORTH FACE 2.png', product: 'MODBLOCK' },
  { src: '/Modblock/MODBLOCK RETAIL CARTIER 2.png', product: 'MODBLOCK' },
  { src: '/Modblock/MODBLOCK RETAIL ADIDAS 2.png', product: 'MODBLOCK' },
  { src: '/Modblock/MODBLOCK RETAIL PUMA 2.png', product: 'MODBLOCK' },
  { src: '/Modblock/MODBLOCK RETAIL IKEA 2.png', product: 'MODBLOCK' },
  { src: '/Modblock/CONFERENCE SPACE 2.png', product: 'MODBLOCK' },
  { src: '/Modblock/MODBLOCK DOMESTIC RESIDENTIAL 2.png', product: 'MODBLOCK' },
  { src: '/Modblock/MODBLOCK DOMESTIC GLAMPING POD 2.png', product: 'MODBLOCK' },
  { src: '/Modblock/MODBLOCK AUTOMOTIVE AUDI 2.png', product: 'MODBLOCK' },
  { src: '/Modblock/Modblock - Festival.png', product: 'MODBLOCK' },
  { src: '/Modblock/Gaucho - Modblock.png', product: 'MODBLOCK' },
  // MODWALL
  { src: '/Modwall/Modwall 1.jpg', product: 'MODWALL' },
  { src: '/Modwall/Modwall - Exhibition.png', product: 'MODWALL' },
  { src: '/Modwall/Modwall - Exhibition2.png', product: 'MODWALL' },
  { src: '/Modwall/Modwall - Exhibition4.png', product: 'MODWALL' },
  { src: '/Modwall/Modwall - Office.png', product: 'MODWALL' },
  { src: '/Modwall/Modwall - Dressing Room.png', product: 'MODWALL' },
  { src: '/Modwall/Modwall - Clothes.png', product: 'MODWALL' },
  { src: '/Modwall/Modwall - Vinyl.png', product: 'MODWALL' },
  { src: '/Modwall/Modwall - White Colour Shop.png', product: 'MODWALL' },
  { src: '/Modwall/Modwall - BedStay.jpg', product: 'MODWALL' },
  { src: '/Modwall/MODWALL SLATWALL.png', product: 'MODWALL' },
  { src: '/Modwall/MODWALL - PEGBOARD.png', product: 'MODWALL' },
  // MODFRAME
  { src: '/Modframe/Renault.jpg', product: 'MODFRAME' },
  { src: '/Modframe/Oasis.JPG', product: 'MODFRAME' },
  { src: '/Modframe/Events-Ford-001.jpg', product: 'MODFRAME' },
  { src: '/Modframe/The Politico Pub.JPG', product: 'MODFRAME' },
  { src: '/Modframe/NFL.JPG', product: 'MODFRAME' },
  { src: '/Modframe/Events-Nugget-Box-17.jpg', product: 'MODFRAME' },
  { src: '/Modframe/Aston Martin Internal.JPG', product: 'MODFRAME' },
];

const galleryGridLayout = [
  { gridColumn: '1', gridRow: '1 / 3' },
  { gridColumn: '2', gridRow: '1' },
  { gridColumn: '3', gridRow: '1' },
  { gridColumn: '2', gridRow: '2' },
  { gridColumn: '3', gridRow: '2' },
];

function GallerySection() {
  const [hoveredCell, setHoveredCell] = useState<number | null>(null);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxProduct, setLightboxProduct] = useState<string>('');
  const [selected, setSelected] = useState<typeof allImages>([]);

  useEffect(() => {
    // Always pick at least one from each product type
    const modblockPool = allImages.filter(i => i.product === 'MODBLOCK')
    const modwallPool  = allImages.filter(i => i.product === 'MODWALL')
    const modframePool = allImages.filter(i => i.product === 'MODFRAME')

    const shuffle = (arr: typeof allImages) => [...arr].sort(() => Math.random() - 0.5)

    // Pick one guaranteed from each
    const guaranteed = [
      shuffle(modblockPool)[0],
      shuffle(modwallPool)[0],
      shuffle(modframePool)[0],
    ]

    // Fill remaining 2 slots from the full shuffled pool, avoiding duplicates
    const usedSrcs = new Set(guaranteed.map(i => i.src))
    const remaining = shuffle(allImages).filter(i => !usedSrcs.has(i.src))
    const extra = remaining.slice(0, 2)

    // Shuffle the final 5 so guaranteed ones aren't always in the same position
    const final = shuffle([...guaranteed, ...extra])
    setSelected(final)
  }, []);

  useEffect(() => {
    if (!lightboxSrc) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setLightboxSrc(null);
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxSrc]);

  return (
    <>
      {lightboxSrc && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9000,
            background: 'rgba(0,0,0,0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => setLightboxSrc(null)}
        >
          <div
            style={{ width: '90vw', height: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={lightboxSrc}
              alt="Gallery image"
              style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
            />
          </div>
          <button
            onClick={() => setLightboxSrc(null)}
            style={{
              position: 'fixed',
              top: '24px',
              right: '32px',
              background: 'none',
              border: 'none',
              color: '#fff',
              fontSize: '28px',
              cursor: 'pointer',
              lineHeight: 1,
              zIndex: 9001,
            }}
            aria-label="Close"
          >
            ✕
          </button>
          <div style={{
            position: 'fixed',
            bottom: '32px',
            left: '32px',
            fontFamily: 'var(--font-mono)',
            fontSize: '9px',
            letterSpacing: '0.2em',
            color: '#C6FF02',
            textTransform: 'uppercase',
            zIndex: 9001,
          }}>
            {lightboxProduct}
          </div>
        </div>
      )}
      <div
        className="mosaic-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr',
          gridTemplateRows: '320px 320px',
          gap: '2px',
          background: '#C6FF02',
          width: '100%',
        }}
      >
        {selected.length === 0 ? (
          galleryGridLayout.map((layout, i) => (
            <div
              key={i}
              style={{
                gridColumn: layout.gridColumn,
                gridRow: layout.gridRow,
                position: 'relative',
                overflow: 'hidden',
                background: '#111111',
                backgroundImage: 'linear-gradient(rgba(198,255,2,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(198,255,2,0.03) 1px, transparent 1px)',
                backgroundSize: '32px 32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '9px',
                letterSpacing: '0.2em',
                color: 'rgba(198,255,2,0.3)',
                textTransform: 'uppercase',
              }}>
                LOADING...
              </span>
            </div>
          ))
        ) : (
          selected.map((img, i) => {
            const layout = galleryGridLayout[i];
            const isHovered = hoveredCell === i;
            return (
              <div
                key={i}
                style={{
                  gridColumn: layout.gridColumn,
                  gridRow: layout.gridRow,
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  outline: isHovered ? '2px solid #C6FF02' : 'none',
                  outlineOffset: '-2px',
                  transition: 'outline 0.3s ease',
                }}
                onMouseEnter={() => setHoveredCell(i)}
                onMouseLeave={() => setHoveredCell(null)}
                onClick={() => { setLightboxSrc(img.src); setLightboxProduct(img.product); }}
              >
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: '#111111',
                  backgroundImage: 'linear-gradient(rgba(198,255,2,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(198,255,2,0.03) 1px, transparent 1px)',
                  backgroundSize: '32px 32px',
                }} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.product}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    filter: isHovered ? 'brightness(0.9) grayscale(0)' : 'brightness(0.65) grayscale(0.2)',
                    transform: isHovered ? 'scale(1.04)' : 'scale(1)',
                    transition: 'filter 0.5s ease, transform 0.5s ease',
                  }}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  fontFamily: 'var(--font-mono)',
                  fontSize: '9px',
                  letterSpacing: '0.2em',
                  color: '#C6FF02',
                  padding: '12px 16px',
                  background: 'rgba(0,0,0,0.6)',
                  opacity: isHovered ? 1 : 0,
                  transition: 'opacity 0.3s ease',
                  pointerEvents: 'none',
                  textTransform: 'uppercase',
                }}>
                  {img.product}
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}

export default function BrandActivationsPage() {
  const [activeTab, setActiveTab] = useState<Tab>("THE MODBLOCK");
  function switchTab(tab: Tab) {
    if (tab === activeTab) return;
    setActiveTab(tab);
  }

  return (
    <>
      {/* ── SECTION 1: HERO ─────────────────────────────────────── */}
      <section style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: "600px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Modblock/Modblock - Lego.png"
          alt=""
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
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
          background: "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))",
        }} />

        <div style={{
          position: "absolute",
          top: "100px",
          left: "clamp(40px, 4vw, 80px)",
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          color: "var(--yellow)",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          zIndex: 10,
        }}>
          THE SOLUTIONS
        </div>

        <div style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          padding: "0 clamp(24px, 4vw, 80px)",
          maxWidth: "1000px",
        }}>
          <p style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "#C6FF02",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: "24px",
          }}>
            BRAND ACTIVATIONS
          </p>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(60px, 10vw, 140px)",
            color: "var(--white)",
            lineHeight: 0.92,
            letterSpacing: "0.01em",
            textAlign: "center",
            marginBottom: "32px",
          }}>
            BUILD THE BRAND.<br />BUILD BOLD.
          </h1>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "16px",
            color: "rgba(255,255,255,0.7)",
            lineHeight: "1.7",
            maxWidth: "600px",
            margin: "0 auto",
          }}>
            Modular brand environments that make an impression — at any event, in any space.
          </p>
        </div>

        <div style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          zIndex: 10,
        }}>
          <div style={{
            width: "1px",
            height: "60px",
            background: "linear-gradient(to bottom, rgba(198,255,2,0) 0%, #C6FF02 100%)",
            animation: "scrollPulse 2s ease-in-out infinite",
          }} />
        </div>
      </section>

      {/* ── SECTION 2: THE CHALLENGE ─────────────────────────────── */}
      <section style={{ background: "#000", padding: "clamp(80px, 10vh, 140px) 0", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute",
          top: "-60px",
          left: "-40px",
          fontFamily: "var(--font-display)",
          fontSize: "clamp(200px, 28vw, 400px)",
          color: "rgba(198,255,2,0.04)",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
          whiteSpace: "nowrap",
        }}>
          BRAND.
        </div>

        <div style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 clamp(40px, 4vw, 80px)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(48px, 6vw, 100px)",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}>
          <div>
            <p style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: "#C6FF02",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}>
              THE CHALLENGE
            </p>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 4.5vw, 64px)",
              color: "var(--white)",
              lineHeight: 1.0,
              letterSpacing: "0.02em",
              marginBottom: "32px",
            }}>
              ATTENTION IS EARNED<br />
              <span style={{ color: "#C6FF02" }}>IN THREE SECONDS.<br />STRUCTURE IS HOW YOU EARN IT.</span>
            </h2>
            <p style={{
              fontSize: "15px",
              color: "rgba(255,255,255,0.6)",
              lineHeight: "1.9",
            }}>
              Brand activations compete for attention in environments that are already saturated with visual noise. The brands that break through are the ones that occupy physical space with authority — and do it fast enough to follow the campaign wherever it goes.
            </p>
          </div>

          <div style={{
            position: "relative",
            height: "clamp(360px, 50vw, 560px)",
            overflow: "hidden",
            borderLeft: "2px solid #C6FF02",
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Modblock/MODBLOCK RETAIL ACTIVATION THE NORTH FACE 2.png"
              alt="Brand activation"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 100%)",
            }} />
          </div>
        </div>
      </section>

      {/* ── SECTION 3: PRODUCT SELECTOR ──────────────────────────── */}
      <section style={{ background: "#0A0A0A", paddingTop: "clamp(80px, 10vh, 120px)" }}>

        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 clamp(40px, 4vw, 80px)", paddingBottom: "48px" }}>
          <p style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            color: "#C6FF02",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}>
            THE MODSOL SOLUTION
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(36px, 4vw, 60px)",
            color: "var(--white)",
            letterSpacing: "0.02em",
            lineHeight: 1.0,
          }}>
            ONE PLATFORM. <span style={{ color: "#C6FF02" }}>EVERY REQUIREMENT.</span>
          </h2>
        </div>

        <p style={{
          fontFamily: "var(--font-mono)",
          fontSize: "13px",
          color: "#C6FF02",
          letterSpacing: "0.35em",
          textTransform: "uppercase",
          textAlign: "left",
          padding: "24px clamp(40px, 4vw, 120px) 16px",
          margin: 0,
          borderTop: "1px solid rgba(198,255,2,0.2)",
        }}>
          — SELECT A SYSTEM —
        </p>

        <div style={{
          display: "flex",
          flexWrap: "nowrap",
          gap: 0,
          width: "100%",
          background: "linear-gradient(rgba(198,255,2,0.015), rgba(198,255,2,0.015)), #0D0D0D",
          borderTop: "1px solid rgba(198,255,2,0.25)",
          borderBottom: "1px solid rgba(198,255,2,0.25)",
        }}>
          {tabs.map((tab, tabIndex) => {
            const isActive = activeTab === tab;
            const tabNumber = String(tabIndex + 1).padStart(2, "0");
            return (
              <button
                key={tab}
                onClick={() => switchTab(tab)}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: isActive ? "#C6FF02" : "rgba(255,255,255,0.5)",
                  background: isActive ? "rgba(198,255,2,0.1)" : "transparent",
                  border: "none",
                  borderRight: "1px solid rgba(255,255,255,0.08)",
                  borderBottom: isActive ? "3px solid #C6FF02" : "3px solid transparent",
                  flex: 1,
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  padding: "28px 56px",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  textShadow: isActive ? "0 0 20px rgba(198,255,2,0.4)" : "none",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                    e.currentTarget.style.background = "rgba(198,255,2,0.06)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                    e.currentTarget.style.background = "transparent";
                  }
                }}
              >
                <span style={{
                  fontSize: "9px",
                  letterSpacing: "0.15em",
                  color: "#C6FF02",
                  opacity: isActive ? 1 : 0.35,
                }}>
                  {tabNumber}
                </span>
                {tab}
              </button>
            );
          })}
        </div>

        {tabs.map((tab) => {
          const c = tabContent[tab];
          const tabImg = tab === "THE MODBLOCK"
            ? "/Modblock/MODBLOCK RETAIL ACTIVATION THE NORTH FACE 2.png"
            : tab === "THE MODWALL"
            ? "/Modwall/Modwall 1.jpg"
            : "/Modframe/Renault.jpg";
          return (
            <div
              key={tab}
              style={{
                display: activeTab === tab ? "grid" : "none",
                gridTemplateColumns: "1fr 1fr",
                width: "100%",
              }}
            >
              <div style={{ position: "relative", minHeight: "520px", overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tabImg}
                  alt={tab}
                  loading="eager"
                  fetchPriority="high"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    position: "absolute",
                    inset: 0,
                  }}
                />
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to right, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 100%)",
                }} />
              </div>

              <div style={{
                background: "#0A0A0A",
                padding: "clamp(48px, 6vw, 100px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "24px",
              }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.logo}
                  alt={tab}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                  style={{
                    width: `${c.logoWidth}px`,
                    height: "auto",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
                <h3 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(24px, 2.5vw, 36px)",
                  color: "var(--white)",
                  letterSpacing: "0.03em",
                  lineHeight: 1.1,
                }}>
                  {c.heading}
                </h3>
                <p style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "15px",
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: "1.8",
                }}>
                  {c.body}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                  {c.bullets.map((b) => (
                    <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                      <span style={{
                        display: "inline-block",
                        width: "6px",
                        height: "6px",
                        background: "#C6FF02",
                        marginTop: "6px",
                        flexShrink: 0,
                      }} />
                      <span style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "rgba(255,255,255,0.65)", lineHeight: "1.6" }}>{b}</span>
                    </li>
                  ))}
                </ul>
                <div>
                  <Link
                    href={c.link}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      color: "#C6FF02",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      borderBottom: "1px solid rgba(198,255,2,0.3)",
                      paddingBottom: "4px",
                    }}
                  >
                    LEARN MORE →
                  </Link>
                </div>
              </div>
            </div>
          );
        })}

      </section>

      {/* ── SECTION 3.5: THE GALLERY — IMAGE MOSAIC ──────────────── */}
      <section style={{ background: "#000", padding: 0, width: "100%" }}>

        <div style={{
          textAlign: "center",
          padding: "clamp(60px, 6vw, 100px) clamp(40px, 4vw, 120px) 40px",
        }}>
          <p style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            color: "#C6FF02",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            margin: "0 0 16px",
          }}>
            — THE GALLERY —
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(36px, 5vw, 72px)",
            color: "var(--white)",
            lineHeight: 1.0,
            letterSpacing: "0.02em",
            marginBottom: "16px",
          }}>
            EVERY BUILD. A STATEMENT.
          </h2>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "15px",
            color: "rgba(255,255,255,0.5)",
            lineHeight: "1.7",
          }}>
            From intimate brand spaces to full-scale festival architecture — these are the structures Modsol has designed, engineered and delivered. Each one built to specification, on time, and impossible to ignore.
          </p>
        </div>

        <GallerySection />

      </section>

      {/* ── SECTION 4: PROJECT REFERENCE ─────────────────────────── */}
      <section style={{ background: "#000", padding: "clamp(80px, 10vh, 120px) 0 clamp(40px, 5vh, 60px)" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 clamp(40px, 4vw, 80px)" }}>
          <p style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            color: "#C6FF02",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: "48px",
          }}>
            SEEN IN ACTION
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1px",
            background: "rgba(255,255,255,0.06)",
          }}>
            {projects.map((p) => (
              <div
                key={p.title}
                style={{
                  background: "#000",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.04)",
                  transition: "border-color 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#C6FF02")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.04)")}
              >
                <div style={{ position: "relative", height: "260px", overflow: "hidden" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.img}
                    alt={p.title}
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 60%)",
                  }} />
                </div>
                <div style={{ padding: "32px", flex: 1 }}>
                  <p style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "9px",
                    color: "#C6FF02",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    marginBottom: "12px",
                  }}>
                    {p.category}
                  </p>
                  <h3 style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(22px, 2.5vw, 32px)",
                    color: "var(--white)",
                    letterSpacing: "0.03em",
                    lineHeight: 1.1,
                    marginBottom: "12px",
                  }}>
                    {p.title}
                  </h3>
                  <p style={{
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: "1.7",
                  }}>
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "40px", display: "flex", justifyContent: "flex-end" }}>
            <Link
              href="/projects/case-studies"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "#C6FF02",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                borderBottom: "1px solid rgba(198,255,2,0.3)",
                paddingBottom: "4px",
              }}
            >
              VIEW ALL PROJECTS →
            </Link>
          </div>
        </div>
      </section>

      <KeyFeatures />

      {/* ── SECTION 6: CTA ───────────────────────────────────────── */}
      <section style={{
        background: "#C6FF02",
        padding: "clamp(80px, 10vh, 120px) clamp(40px, 4vw, 80px)",
        textAlign: "center",
      }}>
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(48px, 7vw, 100px)",
          color: "#000",
          lineHeight: 0.95,
          letterSpacing: "0.02em",
          marginBottom: "24px",
        }}>
          READY TO BUILD BOLD?
        </h2>
        <p style={{
          fontFamily: "var(--font-body)",
          fontSize: "16px",
          color: "rgba(0,0,0,0.65)",
          marginBottom: "40px",
        }}>
          Tell us about your next brand activation brief.
        </p>
        <Link
          href="/contact"
          style={{
            display: "inline-block",
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#C6FF02",
            background: "#000",
            padding: "18px 40px",
            textDecoration: "none",
            transition: "background 0.2s",
          }}
        >
          GET IN TOUCH →
        </Link>
      </section>

      <style>{`
        @keyframes scrollPulse {
          0%   { opacity: 0; transform: scaleY(0); transform-origin: top; }
          50%  { opacity: 1; transform: scaleY(1); transform-origin: top; }
          100% { opacity: 0; transform: scaleY(1); transform-origin: top; }
        }
        @media (max-width: 768px) {
          .mosaic-grid {
            grid-template-columns: 1fr !important;
            grid-template-rows: none !important;
          }
          .mosaic-grid > div {
            grid-column: 1 !important;
            grid-row: auto !important;
            height: 260px !important;
          }
        }
      `}</style>
    </>
  );
}
