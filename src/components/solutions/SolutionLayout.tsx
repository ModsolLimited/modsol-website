import PageHero from "@/components/layout/PageHero";
import SectionLabel from "@/components/ui/SectionLabel";
import YellowButton from "@/components/ui/YellowButton";
import OutlineButton from "@/components/ui/OutlineButton";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import AccentLine from "@/components/ui/AccentLine";

interface Capability {
  title: string;
  description: string;
}

interface SolutionLayoutProps {
  label: string;
  title: string;
  subtitle: string;
  heroImageLabel: string;
  intro: string;
  capabilities: Capability[];
  systems: string[];
  galleryImages: { label: string }[];
}

export default function SolutionLayout({
  label,
  title,
  subtitle,
  heroImageLabel,
  intro,
  capabilities,
  systems,
  galleryImages,
}: SolutionLayoutProps) {
  return (
    <>
      <PageHero label={label} title={title} subtitle={subtitle} />

      {/* Hero image */}
      <section style={{ background: "#000" }}>
        <ImagePlaceholder
          label={heroImageLabel}
          aspectRatio="21/9"
          className="w-full"
        />
      </section>

      {/* Intro section */}
      <section className="py-24 lg:py-32" style={{ background: "#000000" }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <AccentLine className="w-12 mb-8" />
              <p
                className="text-white/60 leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.125rem, 1.5vw, 1.375rem)", lineHeight: "1.75" }}
              >
                {intro}
              </p>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <span
                className="text-[#C6FF02] uppercase block mb-4"
                style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", letterSpacing: "0.2em" }}
              >
                Modsol Systems Used
              </span>
              <div className="space-y-2">
                {systems.map((system) => (
                  <div key={system} className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-[#C6FF02]" />
                    <span
                      className="text-white/70"
                      style={{ fontFamily: "'Space Mono', monospace", fontSize: "11px", letterSpacing: "0.08em" }}
                    >
                      {system}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities grid */}
      <section className="py-24 arch-grid" style={{ background: "#0A0A0A" }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <SectionLabel className="mb-12">Capabilities</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {capabilities.map((cap, i) => (
              <div key={i} className="p-8" style={{ background: "#0A0A0A" }}>
                <AccentLine className="w-6 mb-5" />
                <h3
                  className="text-white uppercase mb-3"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.75rem", letterSpacing: "0.04em" }}
                >
                  {cap.title}
                </h3>
                <p
                  className="text-white/40 text-sm leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image gallery */}
      <section className="py-24" style={{ background: "#000000" }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <SectionLabel className="mb-12">Project Gallery</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {galleryImages.map((img, i) => (
              <ImagePlaceholder
                key={i}
                label={img.label}
                aspectRatio="4/3"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 lg:py-32 text-center"
        style={{ background: "#111111", borderTop: "1px solid rgba(198,255,2,0.2)" }}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <h2
            className="text-white uppercase leading-none mb-8"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 6rem)",
              letterSpacing: "0.02em",
            }}
          >
            Have a project<br />
            <span className="text-[#C6FF02]">in mind?</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <YellowButton href="/contact">Start a Conversation</YellowButton>
            <OutlineButton href="/projects">See Our Work</OutlineButton>
          </div>
        </div>
      </section>
    </>
  );
}
