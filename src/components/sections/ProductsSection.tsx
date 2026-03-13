import SectionLabel from "@/components/ui/SectionLabel";
import YellowButton from "@/components/ui/YellowButton";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

const products = [
  {
    name: "The Modblock",
    tagline: "The structural backbone of temporary architecture.",
    href: "/products/modblock",
    label: "MODBLOCK — Large format product shot, white background or on-site installation",
    wide: true,
  },
  {
    name: "The Modwall",
    tagline: "Surface systems built for maximum brand impact.",
    href: "/products/modwall",
    label: "MODWALL — Panel detail or branded environment shot",
    wide: false,
  },
  {
    name: "The Modframe",
    tagline: "Large-span frameworks. From single storey to multi-level.",
    href: "/products/modframe",
    label: "MODFRAME — Structural frame on-site or technical render",
    wide: false,
  },
];

export default function ProductsSection() {
  return (
    <section className="py-24 lg:py-32 arch-grid" style={{ background: "#0A0A0A" }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div>
            <SectionLabel className="mb-4">The Products</SectionLabel>
            <h2
              className="text-white uppercase leading-none"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                letterSpacing: "0.02em",
              }}
            >
              Engineered Systems.<br />
              <span className="text-[#C6FF02]">Built to Perform.</span>
            </h2>
          </div>
          <YellowButton href="/products">All Products</YellowButton>
        </div>

        {/* Large modblock + two smaller */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
          {/* Featured — wide */}
          <div className="lg:col-span-7 group" style={{ background: "#0A0A0A" }}>
            <ImagePlaceholder
              label={products[0].label}
              aspectRatio="16/10"
            />
            <div className="p-8">
              <h3
                className="text-white uppercase mb-2 group-hover:text-[#C6FF02] transition-colors"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2.25rem", letterSpacing: "0.04em" }}
              >
                {products[0].name}
              </h3>
              <p className="text-white/40 text-sm mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {products[0].tagline}
              </p>
              <a
                href={products[0].href}
                className="text-[#C6FF02] uppercase hover:text-white transition-colors"
                style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", letterSpacing: "0.15em" }}
              >
                Discover →
              </a>
            </div>
          </div>

          {/* Stack of two */}
          <div className="lg:col-span-5 flex flex-col gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {products.slice(1).map((product) => (
              <div key={product.name} className="group flex-1" style={{ background: "#0A0A0A" }}>
                <ImagePlaceholder
                  label={product.label}
                  aspectRatio="16/9"
                />
                <div className="p-6">
                  <h3
                    className="text-white uppercase mb-2 group-hover:text-[#C6FF02] transition-colors"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.75rem", letterSpacing: "0.04em" }}
                  >
                    {product.name}
                  </h3>
                  <p className="text-white/40 text-sm mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {product.tagline}
                  </p>
                  <a
                    href={product.href}
                    className="text-[#C6FF02] uppercase hover:text-white transition-colors"
                    style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", letterSpacing: "0.15em" }}
                  >
                    Discover →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
