import Link from "next/link";
import AccentLine from "@/components/ui/AccentLine";

const footerLinks = {
  Products: [
    { label: "The Modblock", href: "/products/modblock" },
    { label: "The Modwall", href: "/products/modwall" },
    { label: "The Modframe", href: "/products/modframe" },
  ],
  Solutions: [
    { label: "Event Solutions", href: "/solutions/events" },
    { label: "Exhibition Solutions", href: "/solutions/exhibitions" },
    { label: "Hospitality Solutions", href: "/solutions/hospitality" },
    { label: "Retail Solutions", href: "/solutions/retail" },
    { label: "Brand Activations", href: "/solutions/brand-activations" },
    { label: "Temporary Offices", href: "/solutions/temporary-offices" },
  ],
  Company: [
    { label: "The Company", href: "/company" },
    { label: "The Projects", href: "/projects" },
    { label: "Knowledge Hub", href: "/knowledge-hub" },
    { label: "Contact", href: "/contact" },
  ],
  Knowledge: [
    { label: "Articles", href: "/knowledge-hub/articles" },
    { label: "Industry Insights", href: "/knowledge-hub/industry-insights" },
    { label: "Technical Guides", href: "/knowledge-hub/technical-guides" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: "#0A0A0A", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Top section */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 bg-[#C6FF02] flex items-center justify-center"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "22px", color: "#000" }}
              >
                M
              </div>
              <span
                className="text-white tracking-[0.18em] uppercase"
                style={{ fontFamily: "'Space Mono', monospace", fontSize: "13px" }}
              >
                MODSOL
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Modular systems for temporary architecture, events, exhibitions, branded environments and commercial spaces.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-4 h-px bg-[#C6FF02]" />
              <span
                className="text-[#C6FF02] uppercase"
                style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", letterSpacing: "0.2em" }}
              >
                Build. Bold.
              </span>
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <div className="mb-4">
                <span
                  className="text-[#C6FF02] uppercase"
                  style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", letterSpacing: "0.18em" }}
                >
                  {heading}
                </span>
                <AccentLine className="mt-2 w-8" />
              </div>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/50 hover:text-white transition-colors duration-150 text-sm"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <AccentLine />

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-white/30 text-xs"
            style={{ fontFamily: "'Space Mono', monospace", letterSpacing: "0.08em" }}
          >
            &copy; {new Date().getFullYear()} Modsol Limited. All rights reserved.
          </p>
          <p
            className="text-white/30 text-xs"
            style={{ fontFamily: "'Space Mono', monospace", letterSpacing: "0.08em" }}
          >
            Registered in England &amp; Wales
          </p>
        </div>
      </div>
    </footer>
  );
}
