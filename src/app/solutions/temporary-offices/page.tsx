import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export const metadata: Metadata = { title: "Temporary Office Solutions" };

const capabilities = [
  { title: "Site Command Centres", body: "Professional on-site command facilities for major construction projects, infrastructure programmes and large-scale developments. Configured for project management, client presentations and contractor coordination — in a space that communicates the professionalism of the project." },
  { title: "Event Production Offices", body: "Production offices, show control rooms, accreditation centres and technical management facilities for events where the operational backbone needs to function as efficiently as the show itself." },
  { title: "Interim Headquarters", body: "Office environments for organisations managing relocations, refurbishments, rapid headcount growth or disaster recovery. Deployable within days, configured to your operational specification, removed without trace." },
  { title: "Meeting & Conference Suites", body: "Temporary meeting rooms, boardroom environments and training suites that maintain corporate standards wherever they're deployed — whether on a development site or adjacent to a permanent building under renovation." },
  { title: "Welfare & Crew Facilities", body: "On-site welfare buildings, changing facilities, canteens and crew welfare units that meet duty-of-care requirements for large workforces in event, construction and infrastructure environments." },
  { title: "Medical & Operations Centres", body: "Deployable medical facilities, event operations centres and emergency coordination structures. Pre-approved layouts for common operational configurations — fast to deploy in time-critical situations." },
];

export default function TemporaryOfficesPage() {
  return (
    <>
      <PageHero
        label="Solution — Temporary Offices"
        title="Office Space.<br/>On Demand."
        subtitle="Modular office, command centre and workspace environments that function at the level your team requires — without the permanence, the planning, or the lead time."
      />

      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
            <div className="reveal">
              <ImagePlaceholder label="Temporary Offices — Site Command Centre" aspectRatio="4/5" />
            </div>
            <div className="reveal">
              <p className="section-label">Workspace Capability</p>
              <h2 className="section-title" style={{ marginBottom: "24px" }}>Professional.<br /><span style={{ color: "var(--yellow)" }}>Wherever You Need It.</span></h2>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "24px" }}>
                The Modwall system creates partition walls, private offices and meeting rooms that look and feel permanent — because they're built to the same structural standard. The difference is they install in hours and depart without a trace.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "24px" }}>
                Used by construction firms, event producers, infrastructure organisations and corporations managing rapid change, Modsol temporary workspace solutions bridge the gap between where you are and where you're going — without asking people to accept a lower standard of working environment in the interim.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "40px" }}>
                We configure each environment to your operational brief: open plan or cellular, client-facing or back-of-house, welfare compliant for industrial environments or boardroom standard for corporate settings.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                {[["Days","Not months — from brief to operational"],["Certified","Meets Building Regs Part B (fire), Part M (access)"],["Configurable","Open plan, cellular, or mixed specification"],["Removable","Full site restoration on departure"]].map(([title, body]) => (
                  <div key={title} style={{ padding: "20px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "22px", color: "var(--yellow)", marginBottom: "8px" }}>{title}</div>
                    <p style={{ fontSize: "12px", color: "var(--muted)", lineHeight: "1.6" }}>{body}</p>
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
          <h2 className="section-title reveal" style={{ marginBottom: "48px" }}>Every Type<br /><span style={{ color: "var(--yellow)" }}>of Workspace.</span></h2>
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
              <p className="section-label">Specification Options</p>
              <h2 className="section-title" style={{ marginBottom: "24px" }}>Configured<br /><span style={{ color: "var(--yellow)" }}>to Brief.</span></h2>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9" }}>
                Every Modsol workspace deployment starts with an operational brief. We configure the partition layout, specify the internal finishes and integrate the services infrastructure (power, data, HVAC) to match your programme requirements and your team's actual working pattern.
              </p>
            </div>
            <div className="reveal">
              <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(255,255,255,0.06)" }}>
                {[
                  ["Shell — Structural Only","Modwall partition system, structural shell, weatherproof"],
                  ["Standard Fit-out","Flooring, lighting, power distribution, basic HVAC"],
                  ["Corporate Specification","Full finish, branded interiors, premium lighting, AV"],
                  ["Client-Facing Suite","Reception, meeting rooms, full corporate presentation spec"],
                ].map(([level, desc]) => (
                  <div key={level} style={{ background: "var(--dark)", padding: "24px 28px" }}>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--yellow)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "8px" }}>{level}</div>
                    <p style={{ fontSize: "13px", color: "var(--muted)" }}>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--dark)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <p className="section-label">Workspace Gallery</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "rgba(255,255,255,0.06)", marginTop: "48px" }}>
            <ImagePlaceholder label="Workspace — Site Command Centre" aspectRatio="16/9" />
            <ImagePlaceholder label="Workspace — Corporate Meeting Suite" aspectRatio="16/9" />
            <ImagePlaceholder label="Workspace — Event Production Office" aspectRatio="16/9" />
            <ImagePlaceholder label="Workspace — Interim Headquarters" aspectRatio="16/9" />
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--dark2)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-label" style={{ justifyContent: "center" }}>Brief us on your workspace</p>
          <h2 className="section-title reveal" style={{ marginBottom: "32px" }}>Need Space<br /><span style={{ color: "var(--yellow)" }}>Fast?</span></h2>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <Link href="/contact" className="btn-primary">Start a Project</Link>
            <Link href="/solutions" className="btn-secondary">All Solutions</Link>
          </div>
        </div>
      </section>
    </>
  );
}
