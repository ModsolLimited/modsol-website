import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export const metadata: Metadata = { title: "Domestic & Commercial Spaces — Modsol Solutions" };

const capabilities = [
  { title: "Site Command Centres", body: "Professional-grade command and control environments for construction projects, infrastructure works and large-scale site operations. Modblock-based structures that arrive flat-packed, install in hours and provide a permanent-quality working environment for the duration of any project." },
  { title: "Temporary Commercial Offices", body: "Interim office accommodation for businesses undergoing refurbishment, relocation or rapid expansion. The Modwall panel system delivers the acoustic performance and interior finish quality that professional working environments demand — without the planning delay or capital cost of permanent construction." },
  { title: "Welfare & Amenity Facilities", body: "Fully equipped welfare facilities for construction sites, outdoor events and remote project locations. Compliant with current CDM and welfare regulations. Modblock structures accommodate washrooms, changing rooms, canteen facilities and first aid provision within a single coordinated build." },
  { title: "Temporary Healthcare Facilities", body: "Emergency and temporary healthcare structures with the clinical-grade internal environment that medical use requires. Modsol deployed healthcare structures during the 2020 pandemic — our platform's adaptability and speed of deployment proved its capability beyond the events sector." },
  { title: "Garden Rooms & Annexes", body: "Premium domestic structures for homeowners requiring additional living space, home offices, studio spaces or leisure environments. Modwall-finished interiors with Modblock structural systems — architecturally considered temporary additions that don't require full planning permission in most cases." },
  { title: "Interim Retail & Commercial Fit-Out", body: "Commercial accommodation for businesses needing to trade or operate during permanent fit-out works. Modsol structures integrate with existing buildings, share utility connections, and provide code-compliant commercial environments on timescales that permanent construction cannot match." },
];

export default function DomesticCommercialPage() {
  return (
    <>
      <PageHero
        label="Solution — Domestic & Commercial Spaces"
        title="Professional Space.<br/>Anywhere."
        subtitle="Temporary offices, welfare facilities, site command centres and domestic annexes. Permanent-quality environments delivered on a temporary timeline — wherever the work is happening."
      />

      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
            <div className="reveal">
              <p className="section-label">Domestic & Commercial Capability</p>
              <h2 className="section-title" style={{ marginBottom: "24px" }}>Work Happens<br /><span style={{ color: "var(--yellow)" }}>Everywhere.</span></h2>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "24px" }}>
                The demand for high-quality temporary and semi-permanent space is no longer limited to events and exhibitions. Construction sites need professional command environments. Businesses need interim accommodation during works. Homeowners need additional space without the cost or disruption of an extension.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "24px" }}>
                Modsol's Modblock structural system and Modwall panel finish are as effective in a commercial office context as they are on an event site. The platform is CE-certified, CDM-compliant and designed to meet the structural and thermal performance requirements of occupied commercial space.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "40px" }}>
                In 2020, Modsol deployed its systems for temporary healthcare facilities, site welfare units and emergency command structures — demonstrating the platform's capability beyond events in the most demanding possible conditions.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                {[["40+","Commercial Deployments"],["72h","Typical Install Time"],["CE","Structural Certified"],["CDM","Welfare Compliant"]].map(([n, l]) => (
                  <div key={l} style={{ padding: "20px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "32px", color: "var(--yellow)", letterSpacing: "0.02em" }}>{n}</div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--muted)", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "4px" }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
              <ImagePlaceholder label="Commercial — Site Command Centre" aspectRatio="4/3" />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px" }}>
                <ImagePlaceholder label="Commercial — Temporary Office Interior" aspectRatio="1/1" />
                <ImagePlaceholder label="Domestic — Garden Annexe" aspectRatio="1/1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--dark)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <p className="section-label">Capabilities</p>
          <h2 className="section-title reveal" style={{ marginBottom: "48px" }}>Every Format<br /><span style={{ color: "var(--yellow)" }}>of Space.</span></h2>
          <div className="platform-cards reveal">
            {capabilities.map((c) => (
              <div className="platform-card" key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--black)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
            <div className="reveal">
              <p className="section-label">Platform Suitability</p>
              <h2 className="section-title" style={{ marginBottom: "24px" }}>Built to<br /><span style={{ color: "var(--yellow)" }}>Occupancy Standard.</span></h2>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "24px" }}>
                The Modsol platform isn't adapted for commercial use — it was engineered for structural loads, thermal performance and internal environment quality from the outset. Every system carries CE certification and is designed to meet UK building regulations for temporary occupied structures.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9" }}>
                The result is a temporary building that feels permanent: structurally confident, thermally comfortable, acoustically competent and finished to a standard that reflects professional use. Not a site cabin. An architectural temporary building.
              </p>
            </div>
            <div className="reveal">
              <ImagePlaceholder label="Commercial — Temporary Office Building" aspectRatio="16/9" />
              <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
                {[["CE Structural Certification","Certified load-bearing system, no site fabrication"],["CDM Welfare Compliance","All welfare regulations met as standard specification"],["Thermal Performance","Insulated Modwall panels to Part L standards"],["Acoustic Performance","Modwall systems tested to Rw 42dB partition rating"]].map(([title, body]) => (
                  <div key={title} style={{ display: "flex", gap: "16px", padding: "16px 20px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div style={{ width: "6px", height: "6px", background: "var(--yellow)", flexShrink: 0, marginTop: "5px" }} />
                    <div>
                      <span style={{ fontSize: "13px", color: "var(--white)", fontWeight: 500 }}>{title}</span>
                      <span style={{ fontSize: "12px", color: "var(--muted)", marginLeft: "8px" }}>{body}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--dark)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <p className="section-label">Project Gallery</p>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "1px", background: "rgba(255,255,255,0.06)", marginTop: "48px" }}>
            <ImagePlaceholder label="Commercial — Major Construction Site HQ" aspectRatio="16/9" />
            <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
              <ImagePlaceholder label="Commercial — Interim Office During Refurb" aspectRatio="4/3" />
              <ImagePlaceholder label="Domestic — Premium Garden Studio" aspectRatio="4/3" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--dark2)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-label" style={{ justifyContent: "center" }}>Brief us on your space</p>
          <h2 className="section-title reveal" style={{ marginBottom: "32px" }}>Tell Us<br /><span style={{ color: "var(--yellow)" }}>What You Need.</span></h2>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <Link href="/contact" className="btn-primary">Start a Project</Link>
            <Link href="/solutions" className="btn-secondary">All Solutions</Link>
          </div>
        </div>
      </section>
    </>
  );
}
