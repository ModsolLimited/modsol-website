"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    label: "The Company",
    href: "/company",
    children: [
      { label: "The Team", href: "/company/team" },
      { label: "The History", href: "/company/history" },
      { label: "The Vision", href: "/company/vision" },
    ],
  },
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
      { label: "Shows & Festivals", href: "/solutions/shows-festivals" },
      { label: "Exhibitions & Conferences", href: "/solutions/exhibitions-conference" },
      { label: "Hospitality & Restaurants", href: "/solutions/hospitality-restaurants" },
      { label: "Retail & Merchandise", href: "/solutions/retail-merchandise" },
      { label: "Brand Activations", href: "/solutions/brand-activations" },
      { label: "Experiential Marketing", href: "/solutions/experiential-marketing" },
      { label: "Automotive & Motorsport", href: "/solutions/automotive-motorsport" },
      { label: "Domestic & Commercial", href: "/solutions/domestic-commercial" },
    ],
  },
  {
    label: "The Projects",
    href: "/projects",
    children: [
      { label: "Case Studies", href: "/projects/case-studies" },
      { label: "Videos", href: "/projects/videos" },
      { label: "Gallery", href: "/projects/gallery" },
    ],
  },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimers = useRef<Record<string, ReturnType<typeof setTimeout>>>({});
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

  const handleMouseEnter = (label: string) => {
    if (closeTimers.current[label]) clearTimeout(closeTimers.current[label]);
    setOpenDropdown(label);
  };

  const handleMouseLeave = (label: string) => {
    closeTimers.current[label] = setTimeout(() => {
      setOpenDropdown(prev => prev === label ? null : prev);
    }, 200);
  };

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
            <li
              key={item.label}
              className={`nav-item${openDropdown === item.label ? " active" : ""}`}
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={() => handleMouseLeave(item.label)}
            >
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
          </div>
        ))}
        <Link href="/contact" className="mobile-nav-link" style={{ color: "var(--yellow)" }}>
          Get In Touch →
        </Link>
      </div>
    </>
  );
}
