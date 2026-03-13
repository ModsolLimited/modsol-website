import YellowButton from "@/components/ui/YellowButton";
import OutlineButton from "@/components/ui/OutlineButton";
import AccentLine from "@/components/ui/AccentLine";

export default function ContactCTA() {
  return (
    <section
      className="py-24 lg:py-36 relative overflow-hidden"
      style={{ background: "#0A0A0A", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      {/* Yellow accent top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[#C6FF02]" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-3">
            <AccentLine className="w-8" />
            <span
              className="text-[#C6FF02] uppercase"
              style={{ fontFamily: "'Space Mono', monospace", fontSize: "11px", letterSpacing: "0.2em" }}
            >
              Start Your Project
            </span>
            <AccentLine className="w-8" />
          </div>
        </div>

        <h2
          className="text-white uppercase leading-none mb-8 mx-auto"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(3rem, 8vw, 8rem)",
            letterSpacing: "0.02em",
            maxWidth: "900px",
          }}
        >
          Ready to<br />
          <span className="text-[#C6FF02]">Build Bold?</span>
        </h2>

        <p
          className="text-white/40 mb-12 mx-auto max-w-lg"
          style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.0625rem", lineHeight: "1.75" }}
        >
          Tell us about your project and our team will get back to you within one business day.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <YellowButton href="/contact">Get In Touch</YellowButton>
          <OutlineButton href="/products">Explore The Platform</OutlineButton>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "rgba(255,255,255,0.06)", maxWidth: "900px", margin: "5rem auto 0" }}>
          {[
            { value: "500+", label: "Projects Delivered" },
            { value: "12+", label: "Years Experience" },
            { value: "40+", label: "Countries" },
            { value: "100%", label: "Bespoke Builds" },
          ].map((stat) => (
            <div key={stat.label} className="py-8 px-6" style={{ background: "#0A0A0A" }}>
              <div
                className="text-[#C6FF02] mb-1"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2.5rem", letterSpacing: "0.04em" }}
              >
                {stat.value}
              </div>
              <div
                className="text-white/40 uppercase"
                style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", letterSpacing: "0.18em" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
