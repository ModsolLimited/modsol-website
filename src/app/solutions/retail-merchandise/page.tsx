import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export const metadata: Metadata = { title: "Retail & Merchandise — Modsol Solutions" };

const capabilities = [
  { title: "Pop-Up Flagship Stores", body: "Temporary flagship retail environments that open and trade within days of a brief being confirmed. The Modwall panel system delivers the flush, precision-finished interior and shopfront quality that premium retail demands — without the permanence of a fit-out or the compromise of a display unit." },
  { title: "Seasonal Retail Destinations", body: "Planned seasonal retail structures — Christmas markets, summer pop-ups, festival merchandise venues and calendar-driven brand retail. Redeployable Modblock and Modwall systems that amortise the investment across multiple seasons and locations." },
  { title: "Luxury Brand Environments", body: "High-specification brand retail environments for luxury and premium brands where the quality of the structure is inseparable from the quality of the product. Material choices, proportion, threshold experience — all designed to match the brand's permanent retail standards." },
  { title: "Merchandise & Tour Retail", body: "Tour merchandise structures, festival retail units and event-attached brand stores. Built to manage high-volume transaction throughput with secure, weather-tight enclosures and purpose-designed display infrastructure." },
  { title: "Concession & Kiosk Formats", body: "Compact, high-impact retail formats for shopping centre concessions, transport hub installations and brand-owned footprints in third-party venues. Modwall-based systems that deliver brand presence in constrained spaces." },
  { title: "Multi-Location Rollouts", body: "Simultaneous retail deployments across multiple locations from a single system inventory. The same brand environment, identical specification, opened on the same day in different cities — managed as one coordinated Modsol project." },
];

export default function RetailMerchandisePage() {
  return (
    <>
      <PageHero
        label="Solution — Retail & Merchandise"
        title="Retail That<br/>Commands Attention."
        subtitle="Pop-up flagships, seasonal retail destinations and luxury brand environments. Permanent-quality retail — built and trading in days, not months."
      />

      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
            <div className="reveal">
              <p className="section-label">Retail Capability</p>
              <h2 className="section-title" style={{ marginBottom: "24px" }}>Open in Days.<br /><span style={{ color: "var(--yellow)" }}>Trade for Months.</span></h2>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "24px" }}>
                The retail landscape has shifted permanently in favour of the temporary. Brands that would have committed to a 10-year lease now want to open, trade, and move on — without sacrificing the quality of environment that their customers expect.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "24px" }}>
                Modsol's Modwall panel system was designed for exactly this brief. Precision-finished wall surfaces in a range of materials and colours, structural integrity for full shopfront glazing, and a system that builds in hours without any trade work or site remediation when it leaves.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "40px" }}>
                We've built retail environments for luxury fashion brands, global technology companies, major sports franchises and seasonal market operators. Every brief receives the same structural precision and the same delivery discipline.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                {[["60+","Retail Builds"],["5 Days","Avg. Open Time"],["0","Structural Failures"],["100%","On-Time Trading"]].map(([n, l]) => (
                  <div key={l} style={{ padding: "20px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "32px", color: "var(--yellow)", letterSpacing: "0.02em" }}>{n}</div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--muted)", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "4px" }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
              <ImagePlaceholder label="Retail — Pop-Up Flagship, Central London" aspectRatio="4/3" />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px" }}>
                <ImagePlaceholder label="Retail — Luxury Brand Environment" aspectRatio="1/1" />
                <ImagePlaceholder label="Retail — Festival Merchandise Store" aspectRatio="1/1" />
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
              <p className="section-label">The Modwall Difference</p>
              <h2 className="section-title" style={{ marginBottom: "24px" }}>Finished to<br /><span style={{ color: "var(--yellow)" }}>Retail Standard.</span></h2>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "24px" }}>
                The Modwall panel system is the structural reason Modsol retail environments look fundamentally different from any other temporary retail solution. Precision-engineered panels in aluminium composite, timber veneer, high-gloss lacquer and custom brand finishes — flush joints, no visible fixings, no compromise.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9" }}>
                When the pop-up closes, the system dismantles cleanly and leaves the host space undamaged. The panels repack efficiently and redeploy for the next location. No waste, no remediation, no reinstatement costs.
              </p>
            </div>
            <div className="reveal">
              <ImagePlaceholder label="Retail — Modwall Finish Detail" aspectRatio="16/9" />
              <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
                {[["Aluminium Composite","Precision-cut, flush, brushed or coated finish"],["Timber Veneer","Natural grain, engineered flat, premium interior feel"],["High-Gloss Lacquer","Mirror-finish or satin — luxury brand ready"],["Custom Wrap","Full-surface brand graphics, factory-laminated"]].map(([title, body]) => (
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
            <ImagePlaceholder label="Retail — Luxury Pop-Up Flagship" aspectRatio="16/9" />
            <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
              <ImagePlaceholder label="Retail — Seasonal Market Structure" aspectRatio="4/3" />
              <ImagePlaceholder label="Retail — Tour Merchandise Store" aspectRatio="4/3" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--dark2)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-label" style={{ justifyContent: "center" }}>Brief us on your retail</p>
          <h2 className="section-title reveal" style={{ marginBottom: "32px" }}>Ready to<br /><span style={{ color: "var(--yellow)" }}>Open?</span></h2>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <Link href="/contact" className="btn-primary">Start a Project</Link>
            <Link href="/solutions" className="btn-secondary">All Solutions</Link>
          </div>
        </div>
      </section>
    </>
  );
}
