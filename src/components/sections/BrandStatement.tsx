"use client";

import { useState } from "react";

type WordConfig = {
  text: string;
  outline: boolean;
  align: "left" | "right";
};

const words: WordConfig[] = [
  { text: "BUILD.", outline: false, align: "left" },
  { text: "BOLD.", outline: true, align: "right" },
  { text: "MODULAR.", outline: false, align: "left" },
  { text: "SCALABLE.", outline: true, align: "right" },
  { text: "ADAPTABLE.", outline: false, align: "left" },
  { text: "PRECISE.", outline: true, align: "right" },
];

function InteractiveWord({ text, outline, align }: WordConfig) {
  const [hovered, setHovered] = useState(false);

  const baseStyle: React.CSSProperties = {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: "clamp(5rem, 13vw, 12rem)",
    letterSpacing: "0.01em",
    lineHeight: 0.88,
    cursor: "default",
    display: "block",
    textAlign: align,
    transition: "color 0.18s ease, -webkit-text-stroke 0.18s ease",
    userSelect: "none",
  };

  let colorStyle: React.CSSProperties;

  if (hovered) {
    colorStyle = {
      color: "#C6FF02",
      WebkitTextStroke: "0px",
    };
  } else if (outline) {
    colorStyle = {
      color: "transparent",
      WebkitTextStroke: "2px #ffffff",
    };
  } else {
    colorStyle = {
      color: "#ffffff",
      WebkitTextStroke: "0px",
    };
  }

  return (
    <span
      style={{ ...baseStyle, ...colorStyle }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {text}
    </span>
  );
}

export default function BrandStatement() {
  return (
    <section
      className="py-20 lg:py-32 relative overflow-hidden arch-grid"
      style={{ background: "#111111" }}
    >
      {/* Yellow left border */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#C6FF02]" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Label */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-6 h-px bg-[#C6FF02]" />
          <span
            className="text-[#C6FF02] uppercase"
            style={{ fontFamily: "'Space Mono', monospace", fontSize: "11px", letterSpacing: "0.2em" }}
          >
            The Modsol Ethos
          </span>
        </div>

        {/* Interactive words */}
        <div className="space-y-2">
          {words.map((word, i) => (
            <div key={i} className="relative">
              {/* Yellow square separator above each word except first */}
              {i > 0 && (
                <div
                  className="mb-2"
                  style={{ textAlign: words[i - 1].align === "left" ? "left" : "right" }}
                >
                  <span
                    className="inline-block w-3 h-3 bg-[#C6FF02]"
                    style={{ opacity: 0.6 }}
                  />
                </div>
              )}
              <InteractiveWord {...word} />
            </div>
          ))}
        </div>

        {/* Body copy below */}
        <div className="mt-16 flex flex-col lg:flex-row gap-8 lg:gap-20 border-t border-white/10 pt-10">
          <p
            className="text-white/40 max-w-lg"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.0625rem", lineHeight: "1.75" }}
          >
            Every structure Modsol delivers is an expression of precision engineering and bold design thinking. We believe temporary architecture should be as considered, as polished, and as impactful as any permanent build.
          </p>
          <p
            className="text-white/40 max-w-lg"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.0625rem", lineHeight: "1.75" }}
          >
            Our modular platform means faster builds, zero compromise on quality, and structures that leave a lasting impression long after they come down.
          </p>
        </div>
      </div>
    </section>
  );
}
