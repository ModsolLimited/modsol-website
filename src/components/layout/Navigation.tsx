"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "The Company", href: "/company" },
  {
    label: "The Products",
    href: "/products",
    children: [
      { label: "The Modblock", href: "/products/modblock" },
      { label: "The Modwall", href: "/products/modwall" },
      { label: "The Modframe", href: "/products/modframe" },
    ],
  },
  {
    label: "The Solutions",
    href: "/solutions",
    children: [
      { label: "Event Solutions", href: "/solutions/events" },
      { label: "Exhibition Solutions", href: "/solutions/exhibitions" },
      { label: "Hospitality Solutions", href: "/solutions/hospitality" },
      { label: "Retail Solutions", href: "/solutions/retail" },
      { label: "Brand Activations", href: "/solutions/brand-activations" },
      { label: "Temporary Offices", href: "/solutions/temporary-offices" },
    ],
  },
  { label: "The Projects", href: "/projects" },
  {
    label: "Knowledge Hub",
    href: "/knowledge-hub",
    children: [
      { label: "Articles", href: "/knowledge-hub/articles" },
      { label: "Industry Insights", href: "/knowledge-hub/industry-insights" },
      { label: "Technical Guides", href: "/knowledge-hub/technical-guides" },
    ],
  },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav className={`site-nav${scrolled ? " scrolled" : ""}`}>
        {/* Logo */}
        <Link href="/" className="nav-logo">
          <img src="/logo.png" alt="Modsol" style={{ height: "40px", width: "auto", display: "block" }} />
        </Link>

        {/* Desktop links */}
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.label} className={item.children ? "nav-item" : ""}>
              {item.children ? (
                <>
                  <span className="nav-item-label">
                    <Link href={item.href} style={{ color: "inherit", textDecoration: "none", fontFamily: "inherit", fontSize: "inherit", letterSpacing: "inherit", textTransform: "inherit" }}>
                      {item.label}
                    </Link>
                    <span className="chevron">▾</span>
                  </span>
                  <div className="nav-dropdown">
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link href={item.href}>{item.label}</Link>
              )}
            </li>
          ))}
          <li>
            <Link href="/contact" className="nav-cta">Get In Touch</Link>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className={`hamburger${mobileOpen ? " open" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile nav */}
      <div className={`mobile-nav${mobileOpen ? " open" : ""}`}>
        <Link href="/" className="mobile-nav-link">Home</Link>
        {navItems.map((item) => (
          <div key={item.label}>
            {item.children ? (
              <>
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                  className="mobile-nav-link"
                  style={{ background: "none", border: "none", width: "100%", textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                >
                  <span>{item.label}</span>
                  <span style={{ color: "var(--yellow)", fontSize: "14px", transform: mobileExpanded === item.label ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>▾</span>
                </button>
                {mobileExpanded === item.label && (
                  <div className="mobile-nav-sub">
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href}>{child.label}</Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link href={item.href} className="mobile-nav-link">{item.label}</Link>
            )}
          </div>
        ))}
        <Link href="/contact" className="mobile-nav-link" style={{ color: "var(--yellow)" }}>
          Get In Touch →
        </Link>
      </div>
    </>
  );
}
