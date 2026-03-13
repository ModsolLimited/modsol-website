import SectionLabel from "@/components/ui/SectionLabel";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import YellowButton from "@/components/ui/YellowButton";

interface Application {
  sector: string;
  description: string;
  imageLabel: string;
}

interface ProductApplicationsProps {
  applications: Application[];
  productName: string;
}

export default function ProductApplications({ applications, productName }: ProductApplicationsProps) {
  return (
    <section className="py-24 lg:py-32" style={{ background: "#000000" }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <SectionLabel className="mb-6">Applications</SectionLabel>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <h2
            className="text-white uppercase leading-none"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2rem, 5vw, 4rem)",
              letterSpacing: "0.02em",
            }}
          >
            Where {productName}<br />
            <span className="text-[#C6FF02]">Gets Deployed.</span>
          </h2>
          <YellowButton href="/contact">Request a Quote</YellowButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
          {applications.map((app) => (
            <div key={app.sector} className="group" style={{ background: "#000" }}>
              <ImagePlaceholder
                label={app.imageLabel}
                aspectRatio="4/3"
              />
              <div className="p-6">
                <h3
                  className="text-white uppercase mb-2 group-hover:text-[#C6FF02] transition-colors"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.75rem", letterSpacing: "0.04em" }}
                >
                  {app.sector}
                </h3>
                <p
                  className="text-white/40 text-sm leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {app.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
