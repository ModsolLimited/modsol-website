import AccentLine from "@/components/ui/AccentLine";

export default function BrandStatement() {
  return (
    <section
      className="py-24 lg:py-40 relative overflow-hidden arch-grid"
      style={{ background: "#111111" }}
    >
      {/* Yellow left border */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#C6FF02]" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="max-w-4xl">
          <AccentLine className="w-16 mb-10" />

          <p
            className="text-white/30 uppercase mb-4"
            style={{ fontFamily: "'Space Mono', monospace", fontSize: "11px", letterSpacing: "0.2em" }}
          >
            The Modsol Ethos
          </p>

          <h2
            className="text-white uppercase leading-none mb-12"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(3.5rem, 9vw, 9rem)",
              letterSpacing: "0.01em",
              lineHeight: 0.92,
            }}
          >
            We don&apos;t build<br />
            <span className="text-[#C6FF02]">temporary.</span><br />
            We build<br />
            <span className="text-[#C6FF02]">unforgettable.</span>
          </h2>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            <div className="lg:w-1/2">
              <p
                className="text-white/50 leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.0625rem", lineHeight: "1.75" }}
              >
                Every structure Modsol delivers is an expression of precision engineering and bold design thinking. We believe that temporary architecture should be as considered, as polished, and as impactful as any permanent build.
              </p>
            </div>
            <div className="lg:w-1/2">
              <p
                className="text-white/50 leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.0625rem", lineHeight: "1.75" }}
              >
                Our modular platform means faster builds, zero compromise on quality, and structures that leave a lasting impression long after they come down.
              </p>
            </div>
          </div>

          <AccentLine className="w-16 mt-12" />
        </div>
      </div>
    </section>
  );
}
