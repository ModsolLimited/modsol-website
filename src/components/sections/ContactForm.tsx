"use client";

import { useState } from "react";

const projectTypes = [
  "Event Infrastructure",
  "Exhibition Stand",
  "Hospitality Structure",
  "Retail / Pop-up",
  "Brand Activation",
  "Temporary Office",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div style={{ padding: "48px", background: "rgba(198,255,2,0.04)", border: "1px solid rgba(198,255,2,0.2)", textAlign: "center" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--yellow)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "20px" }}>Received</div>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "36px", color: "var(--white)", marginBottom: "16px" }}>Message Sent.</h3>
        <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.7" }}>We&apos;ll respond within one business day with an initial assessment of your brief and suggested next steps.</p>
      </div>
    );
  }

  return (
    <form
      className="contact-form"
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
        <div>
          <label style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--muted)", letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>First Name</label>
          <input type="text" name="firstName" required className="form-field" placeholder="James" />
        </div>
        <div>
          <label style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--muted)", letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>Last Name</label>
          <input type="text" name="lastName" required className="form-field" placeholder="Anderson" />
        </div>
      </div>

      <div>
        <label style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--muted)", letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>Company</label>
        <input type="text" name="company" className="form-field" placeholder="Anderson Agency" />
      </div>

      <div>
        <label style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--muted)", letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>Email</label>
        <input type="email" name="email" required className="form-field" placeholder="james@andersonagency.com" />
      </div>

      <div>
        <label style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--muted)", letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>Project Type</label>
        <select name="projectType" className="form-field" style={{ appearance: "none", cursor: "pointer" }}>
          <option value="">Select a project type</option>
          {projectTypes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div>
        <label style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--muted)", letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>Tell Us About Your Project</label>
        <textarea name="message" rows={5} required className="form-field" placeholder="Brief description of your project, timeline, scale, and any specific requirements..." style={{ resize: "vertical" }} />
      </div>

      <button type="submit" className="btn-primary" style={{ width: "100%", textAlign: "center" }}>
        Send Brief
      </button>
    </form>
  );
}
