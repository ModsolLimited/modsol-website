import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import SectionLabel from "@/components/ui/SectionLabel";
import AccentLine from "@/components/ui/AccentLine";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import YellowButton from "@/components/ui/YellowButton";

export const metadata: Metadata = {
  title: "The Projects — Modsol Case Studies",
  description:
    "Modsol project case studies — from Aston Martin global brand pavilions to the Oasis Live '25 fan experience. Real builds. Real scale.",
};

const projects = [
  {
    client: "Aston Martin",
    title: "Global Brand Pavilion",
    sector: "Brand Activation",
    year: "2024",
    location: "Various — International Tour",
    description:
      "A large-format modular brand pavilion touring six countries across the Aston Martin global launch campaign. Modframe chassis, full Modwall surface specification, and bespoke joinery integration.",
    systems: ["The Modframe", "The Modwall", "The Modblock"],
    imageLabel: "ASTON MARTIN — Replace with project photography",
    featured: true,
  },
  {
    client: "Politico",
    title: "Politico Pub Summit",
    sector: "Exhibition",
    year: "2024",
    location: "Brussels, Belgium",
    description:
      "A multi-zone exhibition environment for the Politico Publisher Summit — editorial conference rooms, sponsor stands, and networking areas across a single modular platform.",
    systems: ["The Modblock", "The Modwall"],
    imageLabel: "POLITICO PUB — Replace with project photography",
    featured: false,
  },
  {
    client: "Oasis Live '25",
    title: "Fan Experience Village",
    sector: "Events",
    year: "2025",
    location: "UK & Ireland Tour",
    description:
      "The official fan experience village for the Oasis Live '25 reunion tour — brand activation structures, merchandise environments, and concession units across all UK and Ireland venues.",
    systems: ["The Modframe", "The Modblock", "The Modwall"],
    imageLabel: "OASIS LIVE 25 — Replace with project photography",
    featured: false,
  },
  {
    client: "NFL",
    title: "NFL Fan Experience",
    sector: "Events",
    year: "2024",
    location: "London, UK",
    description:
      "A multi-zone NFL fan experience environment at Wembley Stadium — interactive zones, brand activation structures, food and beverage units, and a centrepiece Modframe viewing tower.",
    systems: ["The Modframe", "The Modwall", "The Modblock"],
    imageLabel: "NFL FAN EXPERIENCE — Replace with project photography",
    featured: false,
  },
  {
    client: "Confidential Client",
    title: "Automotive Launch Structure",
    sector: "Brand Activation",
    year: "2025",
    location: "Dubai, UAE",
    description:
      "A reveal structure for a major automotive manufacturer's Middle East launch event — enclosed reveal room, product turntable integration, and full-ceiling LED installation.",
    systems: ["The Modframe", "The Modwall"],
    imageLabel: "AUTOMOTIVE LAUNCH — Replace with project photography",
    featured: false,
  },
  {
    client: "Confidential Client",
    title: "Double-Deck Exhibition Stand",
    sector: "Exhibition",
    year: "2025",
    location: "Hannover Messe, Germany",
    description:
      "A 400m² double-deck exhibition stand at Hannover Messe — ground-floor product display and hospitality, upper level meeting suite with full scenic build.",
    systems: ["The Modframe", "The Modblock", "The Modwall"],
    imageLabel: "DOUBLE-DECK STAND — Replace with project photography",
    featured: false,
  },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        label="The Projects"
        title="Built for the World's Best Brands"
        subtitle="A selection of Modsol projects — from global brand campaigns to bespoke exhibition environments and landmark event structures."
      />

      {/* Featured project */}
      <section className="py-24 lg:py-32" style={{ background: "#000000" }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <SectionLabel className="mb-12">Featured Project</SectionLabel>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8">
              <ImagePlaceholder
                label={projects[0].imageLabel}
                aspectRatio="16/9"
              />
            </div>
            <div className="lg:col-span-4">
              <span
                className="text-[#C6FF02] uppercase block mb-3"
                style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", letterSpacing: "0.2em" }}
              >
                {projects[0].sector} — {projects[0].year}
              </span>
              <h2
                className="text-white uppercase leading-none mb-2"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2.5rem", letterSpacing: "0.04em" }}
              >
                {projects[0].client}
              </h2>
              <p
                className="text-white/50 mb-2"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9375rem" }}
              >
                {projects[0].title}
              </p>
              <div
                className="text-white/30 mb-6"
                style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", letterSpacing: "0.15em" }}
              >
                {projects[0].location}
              </div>
              <AccentLine className="w-8 mb-6" />
              <p
                className="text-white/40 leading-relaxed mb-6"
                style={{ fontFamily: "'DM Sans', sans-serif", lineHeight: "1.7" }}
              >
                {projects[0].description}
              </p>
              <div className="space-y-2 mb-8">
                {projects[0].systems.map((sys) => (
                  <div key={sys} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-[#C6FF02]" />
                    <span
                      className="text-white/40"
                      style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", letterSpacing: "0.1em" }}
                    >
                      {sys}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All projects grid */}
      <section className="py-24 lg:py-32" style={{ background: "#0A0A0A" }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <SectionLabel className="mb-12">All Projects</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {projects.slice(1).map((project) => (
              <div key={project.client + project.title} className="group" style={{ background: "#0A0A0A" }}>
                <ImagePlaceholder
                  label={project.imageLabel}
                  aspectRatio="16/9"
                />
                <div className="p-6">
                  <span
                    className="text-[#C6FF02] uppercase block mb-2"
                    style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", letterSpacing: "0.2em" }}
                  >
                    {project.sector} — {project.year}
                  </span>
                  <h3
                    className="text-white uppercase mb-1 group-hover:text-[#C6FF02] transition-colors"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.5rem", letterSpacing: "0.04em" }}
                  >
                    {project.client}
                  </h3>
                  <p
                    className="text-white/40 text-sm mb-1"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {project.title}
                  </p>
                  <p
                    className="text-white/20"
                    style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", letterSpacing: "0.12em" }}
                  >
                    {project.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center" style={{ background: "#000000", borderTop: "1px solid rgba(198,255,2,0.15)" }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <h2
            className="text-white uppercase leading-none mb-8"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.5rem, 6vw, 6rem)", letterSpacing: "0.02em" }}
          >
            Your project<br /><span className="text-[#C6FF02]">belongs here.</span>
          </h2>
          <YellowButton href="/contact">Start a Conversation</YellowButton>
        </div>
      </section>
    </>
  );
}
