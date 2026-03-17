import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export const metadata: Metadata = { title: "Experiential Marketing — Modsol Solutions" };

const capabilities = [
  { title: "Immersive Brand Installations", body: "Architectural experiences that place the consumer inside a brand narrative. Complex geometry, multi-room spatial sequences, audio-visual integration — the Modblock system provides the structural backbone for environments that push the boundaries of temporary construction." },
  { title: "Consumer Campaigns", body: "High-footfall public activations in retail environments, transport hubs, public spaces and brand-owned locations. Modblock structures are engineered for public-use intensity — crowd load calculations, all-weather certification, and rapid entry and egress design as standard." },
  { title: "Product Reveal Environments", body: "Controlled, precisely proportioned environments for press reveals, product launches and first-look consumer events. Modwall delivers the flush, seamless interior finish that makes every surface a brand surface. Modframe provides lighting and rigging infrastructure overhead." },
  { title: "Roadshows & National Touring", body: "Consistent brand environments built and rebuilt across a national or international roadshow schedule. Pre-numbered Modblock component packs maintain identical specification at every location — same quality and impact from city one to city twenty." },
  { title: "Public Space Installations", body: "Temporary architectural installations in public spaces, landmark locations and premium city environments. Structures designed to generate attention through physical presence — engineered to meet local authority, planning and safety requirements wherever they land." },
  { title: "Agency & Creative Partnerships", body: "We partner with experiential agencies and creative studios from brief stage — providing structural feasibility input before concept is committed, so the design process runs forward. We have never told a creative team a design can't be built. We find a way." },
];

export default function ExperientialMarketingPage() {
  return (
    <>
      <PageHero
        label="Solution — Experiential Marketing"
        title="Activate.<br/>Amplify."
        subtitle="Immersive brand installations, consumer campaigns and product reveal environments. The structural partner for creative teams who refuse to let the physical environment underdeliver on the concept."
      />

      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
            <div className="reveal">
              <p className="section-label">Experiential Capability</p>
              <h2 className="section-title" style={{ marginBottom: "24px" }}>Your Brand.<br /><span style={{ color: "var(--yellow)" }}>In Three Dimensions.</span></h2>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "24px" }}>
                Experiential marketing lives or dies on the quality of the physical environment. An underwhelming structure undermines a brilliant creative concept. A structure that exceeds expectation amplifies everything inside it.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "24px" }}>
                Modsol's platform has been deployed in some of the most ambitious brand experiences in the world. Our Modblock system supports complex geometry, multi-space programmes and full AV integration — use cases that most temporary structure suppliers would decline.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "40px" }}>
                We partner with creative agencies, brand teams and experience designers from brief stage — providing structural feasibility feedback before concept is committed, so the design process runs forward, not backwards.
              </p>
              <div style={{ padding: "24px", background: "rgba(198,255,2,0.04)", borderLeft: "2px solid var(--yellow)" }}>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--yellow)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "12px" }}>Creative Partner</p>
                <p style={{ fontSize: "14px", color: "var(--off-white)", lineHeight: "1.7" }}>
                  We have never told a creative team that a design can't be built. We have occasionally told them it needs refinement — and we always provide an alternative that delivers the creative intent with structural integrity. That's the difference.
                </p>
              </div>
            </div>
            <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
              <ImagePlaceholder label="Experiential — Immersive Brand Installation" aspectRatio="4/3" />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px" }}>
                <ImagePlaceholder label="Experiential — Product Launch Environment" aspectRatio="1/1" />
                <ImagePlaceholder label="Experiential — Consumer Campaign Space" aspectRatio="1/1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--dark)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <p className="section-label">Capabilities</p>
          <h2 className="section-title reveal" style={{ marginBottom: "48px" }}>Every Type<br /><span style={{ color: "var(--yellow)" }}>of Experience.</span></h2>
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
                In an experiential activation, there is no separation between the brand and the space. The structure is the brand. The material quality, the proportions, the spatial sequence — all of it communicates brand values before any content is encountered.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9" }}>
                This is why the quality of the structural partner matters as much as the creative concept. Modsol's platform delivers environments that match the ambition of the most demanding brand briefs — consistently, on schedule, and certified for public use.
              </p>
            </div>
            <div className="reveal">
              <ImagePlaceholder label="Experiential — Brand Campaign Structure" aspectRatio="16/9" />
              <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
                {[["Public Safety Certified","All structures rated for public-density crowd use"],["AV & Technical Integration","Modblock provisions for screens, speakers and rigging"],["All-Weather Operation","Designed for outdoor use in all conditions, all seasons"],["Access & Egress Design","Crowd flow engineering embedded in the structural brief"]].map(([title, body]) => (
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
            <ImagePlaceholder label="Experiential — Global Tech Product Launch" aspectRatio="16/9" />
            <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
              <ImagePlaceholder label="Experiential — Consumer Campaign" aspectRatio="4/3" />
              <ImagePlaceholder label="Experiential — Press & Influencer Event" aspectRatio="4/3" />
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
