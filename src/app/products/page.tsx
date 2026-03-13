import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import SectionLabel from "@/components/ui/SectionLabel";
import AccentLine from "@/components/ui/AccentLine";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import YellowButton from "@/components/ui/YellowButton";

export const metadata: Metadata = {
  title: "The Products — Modular Architecture Systems",
  description:
    "Three precision modular systems — The Modblock, The Modwall, and The Modframe — engineered for events, exhibitions, and branded environments.",
};

const products = [
  {
    code: "SYS-01",
    name: "The Modblock",
    href: "/products/modblock",
    tagline: "The structural backbone.",
    description:
      "A precision-engineered structural block system. The foundational element of every Modsol build — rapid assembly, infinite configuration, rated for demanding temporary architecture.",
    imageLabel: "MODBLOCK — Replace with hero product photography",
    specs: ["Load-rated to 500kg", "Tool-free connection system", "6061 Aluminium extrusion", "Anodised finish options"],
  },
  {
    code: "SYS-02",
    name: "The Modwall",
    href: "/products/modwall",
    tagline: "Surface systems for maximum impact.",
    description:
      "High-impact surface panels engineered for branded environments. Seamless graphics, acoustic options, and interchangeable face finishes across a single panel grid.",
    imageLabel: "MODWALL — Replace with panel/surface product photography",
    specs: ["Full bleed print-ready surface", "Acoustic variants available", "10mm, 18mm panel depths", "Flush edge-to-edge finish"],
  },
  {
    code: "SYS-03",
    name: "The Modframe",
    href: "/products/modframe",
    tagline: "Large-span temporary frameworks.",
    description:
      "A skeletal framework system for large-format temporary architecture. Spanning, cantilevering, and multi-storey configurations — all from a single connection standard.",
    imageLabel: "MODFRAME — Replace with structural/framework photography",
    specs: ["Engineered steel pin joints", "Span configurations up to 12m", "Multi-level capable", "Wind & load certified"],
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        label="The Products"
        title="The Modsol Platform"
        subtitle="Three precision-engineered modular systems — designed to work independently or in combination, across any temporary architecture brief."
      />

      {/* Product listing */}
      {products.map((product, i) => (
        <section
          key={product.code}
          className="py-24 lg:py-32"
          style={{ background: i % 2 === 0 ? "#000000" : "#0A0A0A" }}
        >
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              {/* Image */}
              <ImagePlaceholder
                label={product.imageLabel}
                aspectRatio="4/3"
              />

              {/* Content */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span
                    className="text-[#C6FF02] uppercase"
                    style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", letterSpacing: "0.2em" }}
                  >
                    {product.code}
                  </span>
                  <AccentLine className="w-8" />
                </div>

                <h2
                  className="text-white uppercase leading-none mb-3"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "clamp(3rem, 6vw, 5.5rem)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {product.name}
                </h2>
                <p
                  className="text-[#C6FF02] uppercase mb-6"
                  style={{ fontFamily: "'Space Mono', monospace", fontSize: "12px", letterSpacing: "0.12em" }}
                >
                  {product.tagline}
                </p>
                <AccentLine className="w-10 mb-6" />
                <p
                  className="text-white/50 mb-8 leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.0625rem", lineHeight: "1.75" }}
                >
                  {product.description}
                </p>

                <SectionLabel className="mb-4">Key Specs</SectionLabel>
                <ul className="space-y-2 mb-10">
                  {product.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-3">
                      <div className="w-1 h-1 bg-[#C6FF02]" />
                      <span
                        className="text-white/50"
                        style={{ fontFamily: "'Space Mono', monospace", fontSize: "11px", letterSpacing: "0.08em" }}
                      >
                        {spec}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={product.href}
                  className="inline-block bg-[#C6FF02] text-black px-8 py-4 uppercase font-semibold hover:bg-white transition-colors"
                  style={{ fontFamily: "'Space Mono', monospace", fontSize: "12px", letterSpacing: "0.12em" }}
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-24 text-center" style={{ background: "#111111", borderTop: "1px solid rgba(198,255,2,0.15)" }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <h2
            className="text-white uppercase leading-none mb-8"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.5rem, 6vw, 6rem)", letterSpacing: "0.02em" }}
          >
            Specify your<br /><span className="text-[#C6FF02]">next build.</span>
          </h2>
          <YellowButton href="/contact">Talk to the Team</YellowButton>
        </div>
      </section>
    </>
  );
}
