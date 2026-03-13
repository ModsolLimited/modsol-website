import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero label="06 — Contact" title="Start a<br/>Project." subtitle="Tell us your brief. We'll respond within one business day with an initial assessment and next steps." />

      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container">
          <div className="contact-inner">
            <div>
              <p className="section-label">Get in Touch</p>
              <h2 className="section-title reveal" style={{ marginBottom: "40px" }}>Let&apos;s Build<br /><span style={{ color: "var(--yellow)" }}>Something.</span></h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                {[
                  { label: "Email", value: "hello@modsol.co.uk" },
                  { label: "Phone", value: "+44 (0)20 0000 0000" },
                  { label: "Location", value: "London, United Kingdom" },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--muted)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "8px" }}>{label}</div>
                    <div style={{ fontSize: "15px", color: "var(--white)" }}>{value}</div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: "48px", paddingTop: "40px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--muted)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "16px" }}>Follow</div>
                <div style={{ display: "flex", gap: "16px" }}>
                  {["LinkedIn", "Instagram", "X"].map((s) => (
                    <span key={s} style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em" }}>{s}</span>
                  ))}
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
