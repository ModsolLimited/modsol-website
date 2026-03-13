import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export const metadata: Metadata = { title: "Brand Activation Solutions" };

const capabilities = [
  { title: "Product Launches", body: "Physical environments designed around the narrative of a launch — from intimate press reveals to large-scale consumer first-look events. The space should amplify the product story, not compete with it." },
  { title: "Consumer Campaigns", body: "High-footfall consumer activations in retail environments, public spaces, festival settings and brand-owned locations. Structures engineered for public use intensity — crowd load, weather exposure, rapid entry and egress." },
  { title: "Press & Media Events", body: "Controlled, meticulously branded environments for press days, media launches and influencer events where every frame of footage and every background in every photograph carries your brand precisely." },
  { title: "Experiential Installations", body: "Immersive architectural experiences that put the consumer inside a brand narrative. Complex geometry, multi-room journeys, audio-visual integration — structural partners who can execute what the creative team imagines." },
  { title: "Roadshows & Touring", body: "Consistent brand environments built and rebuilt across a national or international roadshow. Our touring systems maintain the same specification at every location — same quality, same impact, from city one to city ten." },
  { title: "Award & PR Stunts", body: "Structural support for high-profile PR moments — temporary installations in public spaces, landmark locations and premium environments that generate earned media through physical presence alone." },
];

export default function BrandActivationsPage() {
  return (
    <>
      <PageHero
        label="Solution — Brand Activations"
        title="Activate.<br/>Amplify."
        subtitle="Experiential environments for product launches, press activations and consumer campaigns. Three-dimensional brand storytelling, engineered to specification."
      />

      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
            <div className="reveal">
              <p className="section-label">Activation Capability</p>
              <h2 className="section-title" style={{ marginBottom: "24px" }}>Your Brand.<br /><span style={{ color: "var(--yellow)" }}>In Three Dimensions.</span></h2>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "24px" }}>
                Brand activations live or die on the quality of the physical environment. An underwhelming structure undermines a brilliant creative concept. A structure that exceeds expectation amplifies everything inside it.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "24px" }}>
                Modsol's platform has been deployed in some of the most ambitious brand activations in the world. Our systems support complex geometry, multi-space programmes, full AV integration and public-intensity use cases that most temporary structure suppliers would decline.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "40px" }}>
                We partner with creative agencies, brand teams and experience designers from brief stage — giving structural feasibility feedback before concept is committed, so the design process runs forward, not backwards.
              </p>
              <div style={{ padding: "24px", background: "rgba(198,255,2,0.04)", borderLeft: "2px solid var(--yellow)" }}>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--yellow)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "12px" }}>Creative Partner</p>
                <p style={{ fontSize: "14px", color: "var(--off-white)", lineHeight: "1.7" }}>
                  We have never told a creative team that a design can't be built. We have occasionally told them it needs to be refined — and we've always provided an alternative that delivers the creative intent with structural integrity. That's the difference.
                </p>
              </div>
            </div>
            <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
              <ImagePlaceholder label="Brand Activation — Immersive Install" aspectRatio="4/3" />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px" }}>
                <ImagePlaceholder label="Activation — Product Launch" aspectRatio="1/1" />
                <ImagePlaceholder label="Activation — Press Environment" aspectRatio="1/1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--dark)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <p className="section-label">Capabilities</p>
          <h2 className="section-title reveal" style={{ marginBottom: "48px" }}>Every Type<br /><span style={{ color: "var(--yellow)" }}>of Activation.</span></h2>
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
              <p className="section-label">Why Structure Matters</p>
              <h2 className="section-title" style={{ marginBottom: "24px" }}>The Environment<br /><span style={{ color: "var(--yellow)" }}>Is the Message.</span></h2>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "24px" }}>
                In an activation, there is no separation between the brand and the space. The structure is the brand. The material quality, the proportions, the spatial sequence — all of it communicates brand values before any content is encountered.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9" }}>
                This is why the quality of the structural partner matters as much as the quality of the creative concept. Modsol's platform delivers environments that match the ambition of the most demanding brand briefs in the world.
              </p>
            </div>
            <div className="reveal">
              <ImagePlaceholder label="Brand Activation — Consumer Campaign Space" aspectRatio="16/9" />
              <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
                {[["Public Safety Rating","All structures certified for public-density use"],["AV Integration","Structural provisions for screens, speakers, lighting"],["Weatherproofing","Designed for outdoor use in all UK conditions"],["Access & Egress","Crowd flow engineering as standard"]].map(([title, body]) => (
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
          <p className="section-label">Activation Gallery</p>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "1px", background: "rgba(255,255,255,0.06)", marginTop: "48px" }}>
            <ImagePlaceholder label="Activation — Global Tech Product Launch" aspectRatio="16/9" />
            <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
              <ImagePlaceholder label="Activation — Consumer Campaign" aspectRatio="4/3" />
              <ImagePlaceholder label="Activation — Influencer Press Event" aspectRatio="4/3" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--dark2)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-label" style={{ justifyContent: "center" }}>Brief us on your activation</p>
          <h2 className="section-title reveal" style={{ marginBottom: "32px" }}>Ready to<br /><span style={{ color: "var(--yellow)" }}>Activate?</span></h2>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <Link href="/contact" className="btn-primary">Start a Project</Link>
            <Link href="/solutions" className="btn-secondary">All Solutions</Link>
          </div>
        </div>
      </section>
    </>
  );
}
