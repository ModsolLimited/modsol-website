import SectionLabel from "@/components/ui/SectionLabel";
import AccentLine from "@/components/ui/AccentLine";

interface Feature {
  number: string;
  title: string;
  description: string;
}

interface ProductFeaturesProps {
  features: Feature[];
}

export default function ProductFeatures({ features }: ProductFeaturesProps) {
  return (
    <section className="py-24 lg:py-32 arch-grid" style={{ background: "#0A0A0A" }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <SectionLabel className="mb-6">Key Features</SectionLabel>
        <h2
          className="text-white uppercase leading-none mb-16"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(2rem, 5vw, 4rem)",
            letterSpacing: "0.02em",
          }}
        >
          Built Different.<br />
          <span className="text-[#C6FF02]">Engineered to Last.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
          {features.map((feature) => (
            <div key={feature.number} className="p-8" style={{ background: "#0A0A0A" }}>
              <div
                className="text-[#C6FF02] mb-4"
                style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", letterSpacing: "0.2em" }}
              >
                {feature.number}
              </div>
              <AccentLine className="w-6 mb-5" />
              <h3
                className="text-white uppercase mb-3"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.75rem", letterSpacing: "0.04em" }}
              >
                {feature.title}
              </h3>
              <p
                className="text-white/40 text-sm leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
