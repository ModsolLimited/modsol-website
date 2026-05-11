"use client";
import { useState } from "react";

const steps = [
  {
    num: "01",
    title: "BRIEF",
    expandTitle: "Tell us everything.",
    body: "Every Modlab project begins with a conversation. We want to understand the brief in full — the environment, the timeline, the budget and the ambition. The more detail you give us, the better the outcome. No brief is too complex, no idea too ambitious.",
    extra: "We'll ask the right questions, challenge where needed and make sure we fully understand what success looks like before a single line is drawn.",
  },
  {
    num: "02",
    title: "DESIGN",
    expandTitle: "Engineering from first principles.",
    body: "Our design team takes your brief and builds a solution from scratch. No templates, no shortcuts. Every Modlab project is designed specifically for its purpose — structurally calculated, materially specified and drawn to production-ready standards.",
    extra: "You'll receive detailed CAD drawings, material specifications and a full design pack before anything is confirmed.",
  },
  {
    num: "03",
    title: "REVIEW",
    expandTitle: "Your approval. Your confidence.",
    body: "Before fabrication begins, we present the full design for your review. This is your opportunity to refine, adjust and confirm every detail. We don't move to production until you are completely satisfied with the solution.",
    extra: "At this stage we also confirm the final timeline, delivery schedule and installation plan so there are no surprises on site.",
  },
  {
    num: "04",
    title: "FABRICATE",
    expandTitle: "Built to exact specification.",
    body: "With the design confirmed, fabrication begins. Every component is built to the precise tolerances specified in the design — no approximations, no shortcuts. Our production team works to the same standards on every Modlab project regardless of scale.",
    extra: "Quality checks are carried out at each stage of fabrication. You'll receive progress updates throughout the build process.",
  },
  {
    num: "05",
    title: "DEPLOY",
    expandTitle: "Delivered. Installed. Ready.",
    body: "The completed structure is delivered to site and installed by our experienced team. We manage the full installation process — from logistics and site preparation through to final sign-off.",
    extra: "Post-installation support is available on every Modlab project. We're not done until you're completely satisfied.",
  },
];

export default function ModlabProcess() {
  const [active, setActive] = useState<number | null>(null);

  const toggle = (i: number) => setActive((prev) => (prev === i ? null : i));

  return (
    <div>
      {/* Step header row */}
      <div className="modlab-process-grid" style={{ display: "flex", alignItems: "flex-start" }}>
        {steps.map((step, i) => (
          <div key={step.num} style={{ display: "flex", alignItems: "flex-start", flex: i < 4 ? "1 1 auto" : "0 0 auto" }}>
            {/* Step card */}
            <div
              onClick={() => toggle(i)}
              style={{
                flex: "0 0 auto",
                textAlign: "center",
                cursor: "pointer",
                padding: "20px 16px 16px",
                border: active === i ? "1px solid rgba(198,255,2,0.4)" : "1px solid transparent",
                background: active === i ? "rgba(198,255,2,0.03)" : "transparent",
                transition: "all 0.3s ease",
                minWidth: "120px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(48px, 6vw, 80px)",
                  color: active === i ? "#C6FF02" : "rgba(198,255,2,0.6)",
                  lineHeight: 1,
                  transition: "color 0.3s ease",
                }}
              >
                {step.num}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "22px",
                  color: "var(--white)",
                  letterSpacing: "0.05em",
                  marginTop: "8px",
                }}
              >
                {step.title}
              </div>
              <div
                style={{
                  color: "#C6FF02",
                  fontSize: "14px",
                  marginTop: "8px",
                  display: "inline-block",
                  transform: active === i ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
              >
                ▾
              </div>
            </div>

            {/* Connecting line segment between steps */}
            {i < 4 && (
              <div
                style={{
                  flex: 1,
                  height: "2px",
                  background: "rgba(198,255,2,0.35)",
                  alignSelf: "flex-start",
                  marginTop: "calc(20px + clamp(24px, 3vw, 40px))",
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Expanded content panels */}
      {steps.map((step, i) => (
        <div
          key={step.num}
          style={{
            maxHeight: active === i ? "400px" : "0px",
            overflow: "hidden",
            transition: "max-height 0.4s ease",
          }}
        >
          <div
            style={{
              padding: "32px 40px",
              borderTop: "1px solid rgba(198,255,2,0.2)",
              background: "rgba(198,255,2,0.02)",
              marginTop: "8px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "9px",
                color: "var(--yellow)",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              {step.num} — {step.title}
            </p>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "28px",
                color: "var(--white)",
                letterSpacing: "0.03em",
                marginBottom: "16px",
              }}
            >
              {step.expandTitle}
            </h3>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                color: "#888888",
                lineHeight: "1.8",
                maxWidth: "720px",
              }}
            >
              {step.body}
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                color: "rgba(255,255,255,0.4)",
                fontStyle: "italic",
                lineHeight: "1.7",
                marginTop: "12px",
                maxWidth: "720px",
              }}
            >
              {step.extra}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
