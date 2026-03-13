import YellowButton from "@/components/ui/YellowButton";
import OutlineButton from "@/components/ui/OutlineButton";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden arch-grid"
      style={{ minHeight: "100svh", background: "#000000" }}
    >
      {/* Background image placeholder */}
      <div className="absolute inset-0 z-0">
        <ImagePlaceholder
          label="HERO PHOTOGRAPHY — Replace with modular architecture image"
          height="100%"
          className="h-full"
        />
        {/* Dark gradient overlay — heavier on left so text is readable */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(105deg, rgba(0,0,0,0.92) 40%, rgba(0,0,0,0.45) 100%)" }}
        />
      </div>

      {/* Thin yellow vertical accent line — RIGHT side */}
      <div className="absolute right-0 top-0 bottom-0 w-px bg-[#C6FF02] z-10" style={{ opacity: 0.7 }} />

      {/* Content — aligned to bottom left */}
      <div
        className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col justify-end pb-24 lg:pb-32"
        style={{ minHeight: "100svh" }}
      >
        {/* Label */}
        <div className="anim-fade-up-1 flex items-center gap-3 mb-6">
          <div className="w-8 h-px bg-[#C6FF02]" />
          <span
            className="text-[#C6FF02] uppercase"
            style={{ fontFamily: "'Space Mono', monospace", fontSize: "11px", letterSpacing: "0.2em" }}
          >
            Modular Solutions — Build. Bold.
          </span>
        </div>

        {/* Headline */}
        <h1
          className="anim-fade-up-2 uppercase leading-none mb-6"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(5rem, 14vw, 13rem)",
            letterSpacing: "0.01em",
            lineHeight: 0.88,
          }}
        >
          <span style={{ color: "#ffffff" }}>BUILD.</span>
          <br />
          <span style={{ color: "#C6FF02" }}>BOLD.</span>
        </h1>

        {/* Supporting text */}
        <p
          className="anim-fade-up-3 max-w-lg mb-10"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(0.9375rem, 1.4vw, 1.125rem)",
            lineHeight: "1.75",
            color: "rgba(255,255,255,0.55)",
          }}
        >
          Modsol designs and manufactures precision modular systems for temporary architecture,
          events, exhibitions, branded environments and commercial spaces.
        </p>

        {/* CTAs */}
        <div className="anim-fade-up-4 flex flex-wrap gap-4">
          <YellowButton href="/products">Explore The Platform</YellowButton>
          <OutlineButton href="/projects">View Projects</OutlineButton>
        </div>
      </div>

      {/* Scroll indicator — bottom centre */}
      <div
        className="anim-fade-in absolute bottom-8 left-1/2 z-20 flex flex-col items-center gap-3"
        style={{ transform: "translateX(-50%)" }}
      >
        <div
          className="w-px overflow-hidden"
          style={{ height: "56px", background: "rgba(255,255,255,0.15)" }}
        >
          <div
            className="w-full scroll-pulse"
            style={{ height: "50%", background: "#C6FF02" }}
          />
        </div>
        <span
          className="text-white/30 uppercase"
          style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", letterSpacing: "0.25em" }}
        >
          Scroll
        </span>
      </div>
    </section>
  );
}
