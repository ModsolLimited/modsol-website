import YellowButton from "@/components/ui/YellowButton";
import OutlineButton from "@/components/ui/OutlineButton";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100svh", background: "#000000" }}
    >
      {/* Background image placeholder */}
      <div className="absolute inset-0 z-0">
        <ImagePlaceholder
          label="HERO PHOTOGRAPHY — Replace with modular architecture image"
          height="100%"
          className="h-full"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.85) 50%, rgba(0,0,0,0.3) 100%)" }} />
      </div>

      {/* Thin yellow vertical line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-[#C6FF02] z-10 opacity-60" />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col justify-end pb-20 lg:pb-28" style={{ minHeight: "100svh" }}>
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
          className="anim-fade-up-2 text-white uppercase leading-none mb-4"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(5rem, 14vw, 13rem)",
            letterSpacing: "0.01em",
            lineHeight: 0.9,
          }}
        >
          BUILD.<br />
          <span className="text-[#C6FF02]">BOLD.</span>
        </h1>

        {/* Supporting text */}
        <p
          className="anim-fade-up-3 text-white/60 max-w-lg mb-10"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(1rem, 1.4vw, 1.125rem)",
            lineHeight: "1.7",
          }}
        >
          Modsol designs and manufactures precision modular systems for temporary architecture, events, exhibitions, branded environments and commercial spaces.
        </p>

        {/* CTAs */}
        <div className="anim-fade-up-4 flex flex-wrap gap-4">
          <YellowButton href="/products">Explore The Platform</YellowButton>
          <OutlineButton href="/projects">View Projects</OutlineButton>
        </div>

        {/* Scroll indicator */}
        <div className="anim-fade-in absolute bottom-8 right-12 flex flex-col items-center gap-2">
          <span
            className="text-white/30 uppercase"
            style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", letterSpacing: "0.2em", writingMode: "vertical-rl" }}
          >
            Scroll
          </span>
          <div className="w-px h-12 bg-white/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-[#C6FF02] scroll-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
