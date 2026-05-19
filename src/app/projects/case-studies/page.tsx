"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

type CS = { img: string; tag: string; heading: string; body: string; images?: string[] };

/*
 * ─── CASE STUDIES — CONTENT RULES ───────────────────────────────────────────
 *
 * ORDER: New entries go at the TOP of this array. Newest first, always.
 *
 * FIELDS (all required unless marked optional):
 *
 *   img        Primary image path — shown on the card and as the first lightbox
 *              image. Use /case-studies/<kebab-slug>/<kebab-filename>.jpeg
 *              Images must be landscape, high quality, minimum 1200px wide.
 *              No white-bordered or branded overlay images — real photography only.
 *
 *   tag        System and category label. ALL CAPS, format: "SYSTEM — CATEGORY"
 *              System must be one of: MODBLOCK · MODWALL · MODFRAME · MODLAB
 *              or a combined form e.g. "MODWALL & MODFRAME"
 *              Category must match an existing value — do not invent new ones:
 *                HOSPITALITY · SHOWS & FESTIVALS · SHOWS & CONFERENCES
 *                EXHIBITION · BRAND ACTIVATION · BRAND ACTIVATION & EXPERIENTIAL
 *                SPORT & RETAIL · AUTOMOTIVE & MOTORSPORT · DOMESTIC & COMMERCIAL
 *
 *   heading    Project title. ALL CAPS. Format: "CLIENT — DESCRIPTOR" or
 *              "PROJECT NAME — LOCATION/EVENT". Keep concise — max ~6 words.
 *              Match the rhythm of existing headings. No sentence case, no punctuation
 *              other than em dashes (—) and ampersands (&).
 *
 *   body       Write-up in Modsol's voice — sharp, engineered, confident. Use
 *              "modular architecture" not "temporary structure". No passive voice.
 *              No bullet points — flowing prose only. Aim for 60–100 words.
 *              All entries must be consistent in length and register.
 *
 *   images     Optional. Array of image paths for multi-image lightbox switching.
 *              Include img as the first element. Minimum 2 images to activate controls.
 *              All images must be from the same /case-studies/<slug>/ directory.
 *              If only one image exists, omit this field entirely.
 *
 * AESTHETIC RULES (enforced by the renderer — do not work around them):
 *   · Cards render at fixed grid width (420px image + fluid content)
 *   · Image height fills the full row — no fixed px overrides on card images
 *   · Lightbox: 65% image / 35% text on desktop, stacked column on mobile portrait
 *   · Thumbnail controls appear automatically when images[] has 2+ entries
 *   · No inline style changes permitted — all visual rules live in CSS classes
 *
 * ────────────────────────────────────────────────────────────────────────────
 */
const caseStudies: CS[] = [
  { img: "/case-studies/take-that-southampton-26/modwall-catering-1.jpeg", tag: "MODWALL — SHOWS & FESTIVALS", heading: "TAKE THAT — SOUTHAMPTON 2026", body: "A headline arena run demanded a complete backstage world, delivered to performance standard and built at touring pace. Modsol answered with a fully connected Modwall complex — laundry facilities, wardrobe suites, dressing rooms, catering spaces and VIP hospitality areas — engineered as one continuous modular architecture rather than a collection of separate units. Every panel locked to the next on a precision post system, giving the production a clean, finished, demountable environment that went up fast, performed under the pressure of a live show, and struck without trace.", images: ["/case-studies/take-that-southampton-26/modwall-catering-1.jpeg", "/case-studies/take-that-southampton-26/modwall-make-up.jpeg", "/case-studies/take-that-southampton-26/modwall-dressing-room.jpeg"] },
  { img: "/Modwall/Aston Martin Internal.JPG", tag: "MODWALL — HOSPITALITY", heading: "ASTON MARTIN HOSPITALITY FIT-OUT", body: "The Modwall system was deployed to create a premium interior environment for Aston Martin's hospitality suite. Clean panel construction provided the architectural backdrop for integrated TVs, curated artwork and branded fixtures — delivering a permanent-quality finish on a temporary timeline. Every surface specified to reflect the Aston Martin standard." },
  { img: "/Modwall/Modwall 1.jpg", tag: "MODWALL — SHOWS & FESTIVALS", heading: "COLDPLAY — HULL 2025", body: "Deployed at Coldplay's Hull concert in 2025, the Modwall system created a series of private changing rooms, dressing rooms and artist support spaces within the festival footprint. Rapid installation, clean finish and fully demountable — the system was on site, operational and struck without disrupting the event schedule." },
  { img: "/Modframe/Events-Ford-001.jpg", tag: "MODFRAME — EXHIBITION", heading: "FORD — BESPOKE CURVED EXHIBITION BACKDROP", body: "The Modframe TFS system was engineered and installed to produce a large-format curved fabric backdrop for Ford's exhibition presence. The system's flexibility allowed for a sweeping architectural form that standard exhibition structures cannot achieve — delivering a centrepiece that commanded the floor." },
  { img: "/Modframe/Events-Nugget-Box-17.jpg", tag: "MODFRAME — BRAND ACTIVATION", heading: "McDONALD'S — THE NUGGET BOX", body: "Commissioned to bring one of the most recognisable packaging formats in the world to life at scale, the Modframe was fabricated and finished to replicate a McDonald's chicken nugget box as a full walk-in brand activation structure. A bespoke build that demonstrated exactly what The Modlab is capable of when the brief goes beyond the standard platform." },
  { img: "/Modframe/The Politico Pub.JPG", tag: "MODFRAME — SHOWS & CONFERENCES", heading: "THE POLITICO PUB — LABOUR & CONSERVATIVE CONFERENCE", body: "Working alongside sister company Mahood Marquees, the Modframe was used to create an aesthetic interior replicating a traditional British pub — installed at both the Labour and Conservative Party Conferences. The system integrated seamlessly with the temporary structure to deliver a hospitality environment with genuine character and permanence of finish." },
  { img: "/Modframe/NFL.JPG", tag: "MODWALL & MODFRAME — SPORT & RETAIL", heading: "NFL WEMBLEY MEGASTORE", body: "A two-system installation combining the Modwall and Modframe to deliver the NFL's Wembley Megastore — one of the highest-footfall retail environments in the UK events calendar. Supplied alongside Mahood Marquees, this project has been delivered for four consecutive years, with the same structural precision and retail-quality finish every time." },
  { img: "/Modframe/Oasis.JPG", tag: "MODFRAME — SHOWS & FESTIVALS", heading: "OASIS REUNION TOUR — OVERHEAD PRODUCT DISPLAY", body: "Alongside Mahood Marquees, the Modframe TFS system was deployed on the Oasis reunion tour to create a bold overhead product display structure for queuing customers — an industry first for TFS implementation at this scale within a touring live music environment. Engineered to perform in all conditions across multiple tour dates." },
  { img: "/Modframe/Modframe 1.jpg", tag: "MODFRAME — HOSPITALITY", heading: "ASTON MARTIN — CHELTENHAM FESTIVAL", body: "The Modframe delivered a bold and striking exterior fascia for Aston Martin's Cheltenham Festival hospitality unit, positioning it as the standout presence within the hospitality village. Large-format branding, clean architectural lines and rapid deployment — everything the festival environment demands, at the standard a marque like Aston Martin requires." },
  { img: "/Modframe/Exhibition.jpg", tag: "MODWALL & MODFRAME — EXHIBITION", heading: "EXHIBITION STAND — DESIGN & BUILD", body: "A fully designed and executed exhibition stand combining the Modwall and Modframe systems to produce a bold, cohesive brand environment. The installation created a commanding focal point within the exhibition hall — structured, considered and built to a specification that converts footfall into engagement." },
  { img: "/Modblock/Modblock - VW.png", tag: "MODBLOCK — BRAND ACTIVATION & EXPERIENTIAL", heading: "VOLKSWAGEN — EUROPEAN ROADSHOW", body: "Two Modblock units deployed across VW's European experiential marketing roadshow. The configuration placed a vehicle on the first floor with operational office space below — each unit covering 14m² of architectural footprint. Flat-packed between locations, rapidly installed at each stop, and branded to full specification throughout." },
  { img: "/Modblock/Modblock - Motorsport.png", tag: "MODBLOCK — AUTOMOTIVE & MOTORSPORT", heading: "PIT LANE GARAGES — MOTORSPORT", body: "Multiple Modblocks customised and deployed as pit lane garage structures, complete with roller shutters, full garage specification and custom access ramps for motorbike ingress and egress. Event control occupied the upper level, accessed via an external staircase. Every unit built to the operational demands of a live race environment." },
  { img: "/Modblock/Modblock - Domestic.png", tag: "MODBLOCK — DOMESTIC & COMMERCIAL", heading: "GARDEN ROOM — DOMESTIC INSTALLATION", body: "A custom-dimensioned Modblock designed, fabricated and installed as a permanent garden room for domestic use. Proof that the system's engineering extends beyond the event world — the same structural rigour, the same quality of finish, applied to a residential brief that demanded something beyond the off-the-shelf market." },
];

export default function CaseStudiesPage() {
  const [selected, setSelected] = useState<CS | null>(null);
  const [lbIndex, setLbIndex] = useState(0);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setSelected(null); };
    if (selected) {
      document.body.style.overflow = "hidden";
      setLbIndex(0);
      window.addEventListener("keydown", onKey);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <>
      <section className="page-hero" style={{ paddingTop: "clamp(80px, 8vw, 120px)", paddingBottom: "48px" }}>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <p className="section-label">The Case Studies</p>
        </div>
      </section>

      <style>{`
        .case-study-bar { display: grid; grid-template-columns: 420px 1fr; border-bottom: 1px solid rgba(255,255,255,0.06); background: var(--black); transition: background 0.3s ease, box-shadow 0.3s ease; cursor: pointer; }
        .case-study-bar img { width: 100%; height: 100%; min-height: 320px; object-fit: cover; filter: brightness(0.85); display: block; transition: filter 0.4s ease; }
        .case-study-bar:hover { background: rgba(198, 255, 2, 0.03); box-shadow: inset 0 0 0 1px rgba(198, 255, 2, 0.15), 0 0 40px rgba(198, 255, 2, 0.04); }
        .case-study-bar:hover img { filter: brightness(1.0); }
        .cs-content { padding: 48px; display: flex; flex-direction: column; justify-content: center; }
        .cs-tag { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.2em; color: #C6FF02; text-transform: uppercase; margin-bottom: 12px; }
        .cs-heading { font-family: var(--font-display); font-size: clamp(32px, 4vw, 52px); color: var(--white); line-height: 1; letter-spacing: 0.02em; }
        .cs-body { font-family: var(--font-body); font-size: 14px; font-weight: 300; color: rgba(255,255,255,0.65); line-height: 1.75; max-width: 620px; margin-top: 16px; }
        @media (max-width: 768px) { .case-study-bar { grid-template-columns: 1fr; } .case-study-bar img { height: 240px; } }
      `}</style>
      <section style={{ background: "var(--black)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div>
          {caseStudies.map((cs, i) => (
            <div key={i} className="case-study-bar" onClick={() => setSelected(cs)}>
              <img src={cs.img} alt={cs.heading} />
              <div className="cs-content">
                <div className="cs-tag">{cs.tag}</div>
                <h3 className="cs-heading">{cs.heading}</h3>
                <p className="cs-body">{cs.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selected && (() => {
        const lbImages = selected.images && selected.images.length > 0 ? selected.images : [selected.img];
        return (
          <div className="cs-modal" style={{ position: "fixed", inset: 0, zIndex: 1000, background: "#000", display: "flex" }}>
            <div className="cs-modal-image" style={{ flex: "0 0 65%", height: "100%", overflow: "hidden" }}>
              <img src={lbImages[lbIndex]} alt={selected.heading} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <div className="cs-modal-text" style={{ flex: "0 0 35%", background: "#111111", padding: "40px", display: "flex", flexDirection: "column", justifyContent: "flex-end", overflowY: "auto" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#C6FF02", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "16px" }}>{selected.tag}</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 4vw, 64px)", color: "#fff", lineHeight: 1, marginBottom: "24px" }}>{selected.heading}</h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "#888888", lineHeight: 1.7, margin: 0 }}>{selected.body}</p>
              {lbImages.length > 1 && (
                <div className="cs-modal-thumbs" style={{ display: "flex", gap: "8px", marginTop: "24px", flexWrap: "wrap" }}>
                  {lbImages.map((src, i) => (
                    <button
                      key={i}
                      onClick={() => setLbIndex(i)}
                      aria-label={`View image ${i + 1}`}
                      style={{
                        width: "64px",
                        height: "48px",
                        padding: 0,
                        border: i === lbIndex ? "1px solid #C6FF02" : "1px solid rgba(255,255,255,0.15)",
                        background: "#161616",
                        cursor: "pointer",
                        overflow: "hidden",
                        flexShrink: 0,
                      }}
                    >
                      <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              onClick={() => setSelected(null)}
              style={{ position: "absolute", top: "24px", right: "24px", background: "none", border: "none", color: "#fff", fontSize: "24px", cursor: "pointer", lineHeight: 1, padding: 0 }}
              aria-label="Close"
            >✕</button>
          </div>
        );
      })()}


      <section className="section-pad" style={{ background: "var(--dark2)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-label" style={{ justifyContent: "center" }}>Add yours</p>
          <h2 className="section-title reveal" style={{ marginBottom: "32px" }}>
            Brief Us On<br /><span style={{ color: "var(--yellow)" }}>Your Project.</span>
          </h2>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <Link href="/contact" className="btn-primary">Start a Project</Link>
            <Link href="/projects/case-studies" className="btn-secondary">All Projects</Link>
          </div>
        </div>
      </section>
    </>
  );
}
