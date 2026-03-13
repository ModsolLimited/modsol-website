import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export const metadata: Metadata = { title: "Retail & Pop-up Solutions" };

const capabilities = [
  { title: "Pop-up Flagship Stores", body: "Temporary flagship retail environments that carry the full weight of a permanent store — from brand architecture to display systems. Built to attract, built to convert, built to leave a lasting impression." },
  { title: "Seasonal Retail", body: "Christmas pop-ups, summer activations and seasonal brand destinations. Structures that create genuine retail moments in high-footfall locations — fast to deploy, impactful in-situ, clean on departure." },
  { title: "Luxury Brand Pop-ups", body: "For luxury brands, the physical environment is a direct expression of product quality. Our modular systems deliver the material finish and spatial quality that luxury retail demands — without the lead time or cost of permanent construction." },
  { title: "Market & Fair Retail", body: "Premium market stalls and fair retail structures that stand apart from the canvas-and-scaffold standard. Consistent brand presentation across multiple units, scalable from a single pitch to a branded market village." },
  { title: "In-Store Brand Zones", body: "Modular in-store installations for product launches, seasonal campaigns and permanent brand zone upgrades within existing retail environments. Fits standard retail floor constraints." },
  { title: "Concession & Kiosk", body: "Branded concession units and kiosk structures for airports, transport hubs, shopping centres and public space. Turnkey from design through to operational handover." },
];

export default function RetailPage() {
  return (
    <>
      <PageHero
        label="Solution — Retail & Pop-up"
        title="Retail That<br/>Stops Traffic."
        subtitle="Temporary retail environments that carry the full weight of your brand. Designed to the standard of permanent retail, built and struck on a temporary timeline."
      />

      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
            <div className="reveal">
              <ImagePlaceholder label="Retail — Luxury Brand Pop-up Flagship" aspectRatio="4/5" />
            </div>
            <div className="reveal">
              <p className="section-label">Retail Capability</p>
              <h2 className="section-title" style={{ marginBottom: "24px" }}>Temporary.<br /><span style={{ color: "var(--yellow)" }}>Never Cheap.</span></h2>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "24px" }}>
                The pop-up retail market has a persistent problem: most temporary structures look temporary. The material quality, the structural finish, the spatial experience — all of it communicates "this is only here for a bit" instead of "this brand commands this space."
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "24px" }}>
                Modsol's platform changes that. The same structural precision that we apply to premium event infrastructure applies directly to retail environments. Clean block walls with permanent-quality finishes. Modwall panels that accept any surface specification. Modframe structures that frame retail space with architectural confidence.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "40px" }}>
                The result: retail environments that consumers don't experience as temporary — they experience as brand. Which is exactly the point.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  ["Built in hours","Not weeks — without compromising quality"],
                  ["Any surface finish","Raw to luxury material specification"],
                  ["Redeployable","Use the same system for multiple locations"],
                  ["Planning friendly","Pre-certified structural drawings"],
                ].map(([title, sub]) => (
                  <div key={title} style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                    <div style={{ width: "8px", height: "8px", background: "var(--yellow)", flexShrink: 0 }} />
                    <div>
                      <span style={{ fontSize: "14px", color: "var(--white)", fontWeight: 500 }}>{title}</span>
                      <span style={{ fontSize: "13px", color: "var(--muted)", marginLeft: "8px" }}>{sub}</span>
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
          <p className="section-label">Capabilities</p>
          <h2 className="section-title reveal" style={{ marginBottom: "48px" }}>Every Format<br /><span style={{ color: "var(--yellow)" }}>of Retail.</span></h2>
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
              <p className="section-label">The Redeployment Advantage</p>
              <h2 className="section-title" style={{ marginBottom: "24px" }}>Build Once.<br /><span style={{ color: "var(--yellow)" }}>Deploy Many.</span></h2>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "24px" }}>
                Traditional retail pop-ups are designed to be thrown away. The Modsol system is engineered for redeployment — the same components, shipped and rebuilt at your next location, maintaining the same quality without the same cost.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9" }}>
                For brands rolling out multi-location pop-up programmes, our system approach delivers significant cost advantage beyond location two while ensuring consistent brand presentation everywhere.
              </p>
            </div>
            <div className="reveal">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
                {[["Cost Reduction","~40% lower build cost from location 2 onwards"],["Brand Consistency","Identical specification every location"],["Fast Deployment","Crew and system knowledge built in from day one"],["Central Storage","Managed system storage between deployments"]].map(([title, body]) => (
                  <div key={title} style={{ padding: "24px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--yellow)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "12px" }}>{title}</div>
                    <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: "1.6" }}>{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--dark)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <p className="section-label">Retail Gallery</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1px", background: "rgba(255,255,255,0.06)", marginTop: "48px" }}>
            <ImagePlaceholder label="Retail — Luxury Pop-up Flagship" aspectRatio="4/3" />
            <ImagePlaceholder label="Retail — Seasonal Christmas Destination" aspectRatio="4/3" />
            <ImagePlaceholder label="Retail — Branded Market Village" aspectRatio="4/3" />
            <ImagePlaceholder label="Retail — In-Store Brand Zone" aspectRatio="4/3" />
            <ImagePlaceholder label="Retail — Transport Hub Concession" aspectRatio="4/3" />
            <ImagePlaceholder label="Retail — Multi-Location Pop-up" aspectRatio="4/3" />
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--dark2)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-label" style={{ justifyContent: "center" }}>Brief us on your retail project</p>
          <h2 className="section-title reveal" style={{ marginBottom: "32px" }}>Open Your<br /><span style={{ color: "var(--yellow)" }}>Pop-up.</span></h2>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <Link href="/contact" className="btn-primary">Start a Project</Link>
            <Link href="/solutions" className="btn-secondary">All Solutions</Link>
          </div>
        </div>
      </section>
    </>
  );
}
