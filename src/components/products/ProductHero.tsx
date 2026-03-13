import SectionLabel from "@/components/ui/SectionLabel";
import YellowButton from "@/components/ui/YellowButton";
import OutlineButton from "@/components/ui/OutlineButton";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import AccentLine from "@/components/ui/AccentLine";

interface ProductHeroProps {
  code: string;
  name: string;
  tagline: string;
  description: string;
  imageLabel: string;
  specs: { label: string; value: string }[];
}

export default function ProductHero({ code, name, tagline, description, imageLabel, specs }: ProductHeroProps) {
  return (
    <section className="pt-[72px]" style={{ background: "#000000" }}>
      {/* Full bleed image */}
      <ImagePlaceholder
        label={imageLabel}
        aspectRatio="21/9"
        className="w-full"
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main content */}
          <div className="lg:col-span-7">
            <SectionLabel className="mb-4">{code}</SectionLabel>
            <h1
              className="text-white uppercase leading-none mb-4"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(4rem, 10vw, 9rem)",
                letterSpacing: "0.02em",
              }}
            >
              {name}
            </h1>
            <p
              className="text-[#C6FF02] uppercase mb-6"
              style={{ fontFamily: "'Space Mono', monospace", fontSize: "13px", letterSpacing: "0.12em" }}
            >
              {tagline}
            </p>
            <AccentLine className="w-12 mb-6" />
            <p
              className="text-white/50 max-w-lg leading-relaxed mb-10"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.0625rem", lineHeight: "1.75" }}
            >
              {description}
            </p>
            <div className="flex flex-wrap gap-4">
              <YellowButton href="/contact">Request a Quote</YellowButton>
              <OutlineButton href="/contact">Download Spec Sheet</OutlineButton>
            </div>
          </div>

          {/* Specs panel */}
          <div className="lg:col-span-5">
            <div
              className="border-l-2 border-[#C6FF02] pl-8"
            >
              <span
                className="text-[#C6FF02] uppercase block mb-6"
                style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", letterSpacing: "0.2em" }}
              >
                Technical Specifications
              </span>
              <div className="space-y-4">
                {specs.map((spec) => (
                  <div key={spec.label} className="flex flex-col gap-1">
                    <span
                      className="text-white/30 uppercase"
                      style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", letterSpacing: "0.18em" }}
                    >
                      {spec.label}
                    </span>
                    <span
                      className="text-white"
                      style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem" }}
                    >
                      {spec.value}
                    </span>
                    <div className="w-full h-px bg-white/08 mt-1" style={{ background: "rgba(255,255,255,0.06)" }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
