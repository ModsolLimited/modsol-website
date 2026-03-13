import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import AccentLine from "@/components/ui/AccentLine";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

const systems = [
  {
    name: "The Modblock",
    code: "SYS-01",
    href: "/products/modblock",
    description:
      "A precision-engineered structural block system. The foundational element of every Modsol build — rapid assembly, infinite configuration.",
    specs: ["Load-rated to 500kg", "Tool-free connection", "Aluminium extrusion"],
    image: "MODBLOCK — Replace with product photography",
  },
  {
    name: "The Modwall",
    code: "SYS-02",
    href: "/products/modwall",
    description:
      "High-impact surface panels for branded environments. Seamless graphics, acoustic options, and interchangeable face finishes.",
    specs: ["Full bleed print-ready", "Acoustic variants", "Modular panel sizing"],
    image: "MODWALL — Replace with product photography",
  },
  {
    name: "The Modframe",
    code: "SYS-03",
    href: "/products/modframe",
    description:
      "A skeletal framework system for large-format temporary architecture. Spanning, cantilevering, multi-storey builds.",
    specs: ["Engineered steel joints", "Span up to 12m", "Multi-level capable"],
    image: "MODFRAME — Replace with product photography",
  },
];

export default function PlatformSection() {
  return (
    <section className="py-24 lg:py-32" style={{ background: "#000000" }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div>
            <SectionLabel className="mb-4">The Platform</SectionLabel>
            <h2
              className="text-white uppercase leading-none"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                letterSpacing: "0.02em",
              }}
            >
              Three Systems.<br />
              <span className="text-[#C6FF02]">Infinite Configurations.</span>
            </h2>
          </div>
          <p
            className="text-white/40 max-w-sm"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", lineHeight: "1.7" }}
          >
            Every Modsol structure is built from one of three precision-engineered systems — or a combination of all three.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
          {systems.map((system) => (
            <Link
              key={system.name}
              href={system.href}
              className="group block"
              style={{ background: "#000" }}
            >
              {/* Image area */}
              <ImagePlaceholder
                label={system.image}
                aspectRatio="4/3"
              />

              {/* Content */}
              <div className="p-8 border-t border-white/08" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-[#C6FF02]"
                    style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", letterSpacing: "0.2em" }}
                  >
                    {system.code}
                  </span>
                  <AccentLine className="w-8" />
                </div>

                <h3
                  className="text-white uppercase mb-3 group-hover:text-[#C6FF02] transition-colors duration-200"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "2rem",
                    letterSpacing: "0.04em",
                  }}
                >
                  {system.name}
                </h3>

                <p
                  className="text-white/40 mb-6 text-sm leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {system.description}
                </p>

                {/* Specs */}
                <ul className="space-y-1.5">
                  {system.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-[#C6FF02]" />
                      <span
                        className="text-white/50"
                        style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", letterSpacing: "0.08em" }}
                      >
                        {spec}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex items-center gap-2">
                  <span
                    className="text-[#C6FF02] uppercase group-hover:gap-4 transition-all"
                    style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", letterSpacing: "0.15em" }}
                  >
                    Learn More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
