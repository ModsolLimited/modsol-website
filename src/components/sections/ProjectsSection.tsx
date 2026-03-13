import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import YellowButton from "@/components/ui/YellowButton";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

const featuredProjects = [
  {
    client: "Aston Martin",
    title: "Global Brand Pavilion",
    sector: "Brand Activation",
    href: "/projects",
    image: "ASTON MARTIN PROJECT — Replace with event photography",
    wide: true,
  },
  {
    client: "Politico",
    title: "Politico Pub Summit",
    sector: "Exhibition",
    href: "/projects",
    image: "POLITICO PUB — Replace with event photography",
    wide: false,
  },
  {
    client: "Oasis Live '25",
    title: "Fan Experience Village",
    sector: "Events",
    href: "/projects",
    image: "OASIS LIVE 25 — Replace with event photography",
    wide: false,
  },
  {
    client: "NFL",
    title: "NFL Fan Experience",
    sector: "Events",
    href: "/projects",
    image: "NFL FAN EXPERIENCE — Replace with event photography",
    wide: false,
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-24 lg:py-32" style={{ background: "#0A0A0A" }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div>
            <SectionLabel className="mb-4">Featured Projects</SectionLabel>
            <h2
              className="text-white uppercase leading-none"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                letterSpacing: "0.02em",
              }}
            >
              Built for the<br />
              <span className="text-[#C6FF02]">World's Best Brands.</span>
            </h2>
          </div>
          <YellowButton href="/projects">All Projects</YellowButton>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
          {/* Wide feature */}
          <div className="lg:col-span-8 group" style={{ background: "#0A0A0A" }}>
            <ImagePlaceholder
              label={featuredProjects[0].image}
              aspectRatio="16/9"
            />
            <div className="p-8 flex items-start justify-between">
              <div>
                <span
                  className="text-[#C6FF02] block mb-2"
                  style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", letterSpacing: "0.2em" }}
                >
                  {featuredProjects[0].sector}
                </span>
                <h3
                  className="text-white uppercase group-hover:text-[#C6FF02] transition-colors"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem", letterSpacing: "0.04em" }}
                >
                  {featuredProjects[0].client}
                </h3>
                <p className="text-white/40 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {featuredProjects[0].title}
                </p>
              </div>
              <span
                className="text-white/20 group-hover:text-[#C6FF02] transition-colors mt-1"
                style={{ fontFamily: "'Space Mono', monospace", fontSize: "14px" }}
              >
                →
              </span>
            </div>
          </div>

          {/* Stack of 3 */}
          <div className="lg:col-span-4 flex flex-col gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {featuredProjects.slice(1).map((project) => (
              <Link key={project.client} href={project.href} className="group flex-1" style={{ background: "#0A0A0A" }}>
                <ImagePlaceholder
                  label={project.image}
                  aspectRatio="16/9"
                />
                <div className="px-6 py-4">
                  <span
                    className="text-[#C6FF02] block mb-1"
                    style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", letterSpacing: "0.2em" }}
                  >
                    {project.sector}
                  </span>
                  <h3
                    className="text-white uppercase group-hover:text-[#C6FF02] transition-colors"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.4rem", letterSpacing: "0.04em" }}
                  >
                    {project.client}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
