import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="06 — Contact"
        title="Start a<br/>Project."
        subtitle="Tell us your brief. We respond within one business day with an initial assessment of your project and the next steps to get it built."
      />

      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container">
          <div className="contact-inner">
            {/* Left column */}
            <div>
              <p className="section-label">Get in Touch</p>
              <h2 className="section-title reveal" style={{ marginBottom: "40px" }}>Let&apos;s Build<br /><span style={{ color: "var(--yellow)" }}>Something.</span></h2>

              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "40px", maxWidth: "360px" }}>
                Whether you have a detailed brief or a rough idea, we're the right first call. We've been solving temporary architecture problems since 2008 — the more specific you can be, the faster we can help.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "32px", marginBottom: "48px" }}>
                {[
                  { label: "Email", value: "sales@modsol.co.uk" },
                  { label: "Phone", value: "+44 (0)20 0000 0000" },
                  { label: "Location", value: "London, United Kingdom" },
                  { label: "Response Time", value: "Within one business day" },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--muted)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "8px" }}>{label}</div>
                    <div style={{ fontSize: "15px", color: "var(--white)" }}>{value}</div>
                  </div>
                ))}
              </div>

              <div style={{ paddingTop: "32px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--muted)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "16px" }}>Follow Modsol</div>
                <div style={{ display: "flex", gap: "20px" }}>
                  {[["Li", "LinkedIn"],["Ig", "Instagram"],["X", "X / Twitter"]].map(([code, label]) => (
                    <div key={code} style={{ display: "flex", flexDirection: "column", gap: "4px", cursor: "pointer" }}>
                      <span style={{ fontFamily: "var(--font-display)", fontSize: "20px", color: "var(--white)", letterSpacing: "0.05em" }}>{code}</span>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "8px", color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: "40px", padding: "24px", background: "rgba(198,255,2,0.04)", borderLeft: "2px solid var(--yellow)" }}>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--yellow)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "12px" }}>Technical Enquiries</p>
                <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: "1.7" }}>Structural engineers, architects and designers with specification questions: <span style={{ color: "var(--white)" }}>technical@modsol.co.uk</span></p>
              </div>
            </div>

            {/* Right column — form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="section-pad" style={{ background: "var(--dark)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <p className="section-label">What Happens Next</p>
          <h2 className="section-title reveal" style={{ marginBottom: "48px" }}>From Brief<br /><span style={{ color: "var(--yellow)" }}>to Build.</span></h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(255,255,255,0.06)" }}>
            {[
              { step: "01", title: "We Read Your Brief", body: "Every enquiry is reviewed by a project manager and structural engineer within one business day. If we need clarification, we call — we don't send a form." },
              { step: "02", title: "Initial Assessment", body: "We provide an honest initial assessment of feasibility, timeline and indicative cost range. If your brief needs refining, we'll tell you what information would make our response more accurate." },
              { step: "03", title: "Proposal & Structural Design", body: "For confirmed projects, we produce a full structural proposal with certified drawings, programme schedule and detailed pricing. No surprises downstream." },
              { step: "04", title: "We Build It", body: "Our crew builds to schedule. You get a structure that matches the specification, delivered on time, managed throughout. That's been our record for 15 years and it's not changing." },
            ].map((p) => (
              <div key={p.step} style={{ background: "var(--dark)", padding: "40px", display: "grid", gridTemplateColumns: "80px 220px 1fr", gap: "40px", alignItems: "start" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--yellow)", letterSpacing: "0.2em" }}>{p.step}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", color: "var(--white)", letterSpacing: "0.05em", lineHeight: 1.1 }}>{p.title}</h3>
                <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.8" }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
