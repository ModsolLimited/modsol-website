"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
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
      { label: "Brand Activation Solutions", href: "/solutions/brand-activations" },
      { label: "Temporary Office Solutions", href: "/solutions/temporary-offices" },
    ],
  },
  { label: "The Projects", href: "/projects" },
  {
    label: "The Knowledge Hub",
    href: "/knowledge-hub",
    children: [
      { label: "Articles", href: "/knowledge-hub/articles" },
      { label: "Industry Insights", href: "/knowledge-hub/industry-insights" },
      { label: "Technical Guides", href: "/knowledge-hub/technical-guides" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setMobileOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const monoStyle = { fontFamily: "'Space Mono', monospace" };

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          height: "72px",
          background: scrolled ? "rgba(0,0,0,0.96)" : "#000000",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          transition: "background 0.3s ease",
        }}
      >
        <div
          className="h-full flex items-center justify-between"
          style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 3rem" }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div
              className="flex items-center justify-center shrink-0"
              style={{
                width: "36px",
                height: "36px",
                background: "#C6FF02",
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "20px",
                color: "#000",
                lineHeight: 1,
              }}
            >
              M
            </div>
            <span
              className="text-white uppercase"
              style={{ ...monoStyle, fontSize: "13px", letterSpacing: "0.18em" }}
            >
              MODSOL
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => item.children && setOpenDropdown(null)}
              >
                {item.children ? (
                  <>
                    {/* Parent label — not a button, just a div for hover area */}
                    <div
                      className="flex items-center gap-1 select-none"
                      style={{ cursor: "default" }}
                    >
                      <Link
                        href={item.href}
                        className="uppercase transition-colors duration-150"
                        style={{
                          ...monoStyle,
                          fontSize: "11px",
                          letterSpacing: "0.1em",
                          color: isActive(item.href) ? "#C6FF02" : "rgba(255,255,255,0.65)",
                        }}
                      >
                        {item.label}
                      </Link>
                      <span style={{ color: "#C6FF02", fontSize: "10px", lineHeight: 1 }}>▾</span>
                    </div>

                    {/* Dropdown panel */}
                    {openDropdown === item.label && (
                      <div
                        className="absolute top-full left-0 z-50"
                        style={{
                          marginTop: "12px",
                          minWidth: "230px",
                          background: "#080808",
                          borderLeft: "2px solid #C6FF02",
                          borderBottom: "1px solid rgba(255,255,255,0.08)",
                          borderRight: "1px solid rgba(255,255,255,0.08)",
                        }}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block transition-colors duration-150"
                            style={{
                              ...monoStyle,
                              fontSize: "11px",
                              letterSpacing: "0.07em",
                              padding: "12px 20px",
                              color: "rgba(255,255,255,0.6)",
                              borderBottom: "1px solid rgba(255,255,255,0.05)",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "#C6FF02")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="uppercase transition-colors duration-150"
                    style={{
                      ...monoStyle,
                      fontSize: "11px",
                      letterSpacing: "0.1em",
                      color: isActive(item.href) ? "#C6FF02" : "rgba(255,255,255,0.65)",
                    }}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden lg:inline-block uppercase transition-colors duration-150"
              style={{
                ...monoStyle,
                fontSize: "11px",
                letterSpacing: "0.12em",
                background: "#C6FF02",
                color: "#000",
                padding: "10px 20px",
                fontWeight: 700,
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.background = "#fff")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.background = "#C6FF02")}
            >
              Get In Touch
            </Link>

            {/* Hamburger */}
            <button
              className="lg:hidden flex flex-col justify-center gap-1.5 p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              style={{ background: "none", border: "none" }}
            >
              <span
                style={{
                  display: "block",
                  width: "24px",
                  height: "1px",
                  background: "#fff",
                  transition: "transform 0.3s, opacity 0.3s",
                  transform: mobileOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "24px",
                  height: "1px",
                  background: "#fff",
                  transition: "opacity 0.3s",
                  opacity: mobileOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "24px",
                  height: "1px",
                  background: "#fff",
                  transition: "transform 0.3s, opacity 0.3s",
                  transform: mobileOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 overflow-y-auto"
          style={{ background: "#000000", paddingTop: "72px" }}
        >
          <div style={{ padding: "2rem 2rem 4rem" }}>
            {navItems.map((item) => (
              <div key={item.label} style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                {item.children ? (
                  <>
                    <button
                      onClick={() => setMobileOpenDropdown(mobileOpenDropdown === item.label ? null : item.label)}
                      className="w-full flex items-center justify-between"
                      style={{
                        background: "none",
                        border: "none",
                        padding: "1.25rem 0",
                        color: "rgba(255,255,255,0.8)",
                        ...monoStyle,
                        fontSize: "13px",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        textAlign: "left",
                      }}
                    >
                      <span>{item.label}</span>
                      <span style={{ color: "#C6FF02", transform: mobileOpenDropdown === item.label ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>▾</span>
                    </button>
                    {mobileOpenDropdown === item.label && (
                      <div style={{ borderLeft: "2px solid #C6FF02", paddingLeft: "1rem", marginBottom: "0.75rem" }}>
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block"
                            style={{
                              ...monoStyle,
                              fontSize: "12px",
                              letterSpacing: "0.07em",
                              color: "rgba(255,255,255,0.55)",
                              padding: "0.6rem 0",
                            }}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block"
                    style={{
                      ...monoStyle,
                      fontSize: "13px",
                      letterSpacing: "0.1em",
                      color: "rgba(255,255,255,0.8)",
                      padding: "1.25rem 0",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div style={{ marginTop: "2rem" }}>
              <Link
                href="/contact"
                className="block text-center"
                style={{
                  ...monoStyle,
                  fontSize: "13px",
                  letterSpacing: "0.12em",
                  background: "#C6FF02",
                  color: "#000",
                  padding: "1rem",
                  textTransform: "uppercase",
                  fontWeight: 700,
                }}
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
