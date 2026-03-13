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
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setMobileOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          height: "72px",
          background: scrolled ? "rgba(0,0,0,0.95)" : "#000000",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
        ref={dropdownRef}
      >
        <div className="max-w-[1440px] mx-auto h-full px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div
              className="w-9 h-9 bg-[#C6FF02] flex items-center justify-center"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "20px", color: "#000" }}
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

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <button
                    className={`flex items-center gap-1 uppercase transition-colors duration-200 ${
                      isActive(item.href)
                        ? "text-[#C6FF02]"
                        : "text-white/70 hover:text-white"
                    }`}
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "11px",
                      letterSpacing: "0.1em",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  >
                    {item.label}
                    <span
                      className={`transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`}
                      style={{ fontSize: "10px", color: "#C6FF02" }}
                    >
                      ▾
                    </span>

                    {/* Dropdown */}
                    {openDropdown === item.label && (
                      <div
                        className="absolute top-full left-0 mt-3 min-w-[220px] z-50"
                        style={{
                          background: "#0A0A0A",
                          borderLeft: "2px solid #C6FF02",
                          borderBottom: "1px solid rgba(255,255,255,0.08)",
                          borderRight: "1px solid rgba(255,255,255,0.08)",
                        }}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-5 py-3 text-white/70 hover:text-[#C6FF02] hover:bg-white/5 transition-colors duration-150"
                            style={{
                              fontFamily: "'Space Mono', monospace",
                              fontSize: "11px",
                              letterSpacing: "0.08em",
                            }}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`uppercase transition-colors duration-200 ${
                      isActive(item.href)
                        ? "text-[#C6FF02]"
                        : "text-white/70 hover:text-white"
                    }`}
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "11px",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden lg:inline-block bg-[#C6FF02] text-black px-5 py-2 uppercase font-semibold hover:bg-white transition-colors duration-200"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "11px",
                letterSpacing: "0.12em",
              }}
            >
              Get In Touch
            </Link>

            {/* Hamburger */}
            <button
              className="lg:hidden flex flex-col gap-1.5 p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-px bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2.5" : ""}`}
              />
              <span
                className={`block w-6 h-px bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-6 h-px bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col overflow-y-auto"
          style={{ background: "#000000", paddingTop: "72px" }}
        >
          <div className="flex flex-col px-6 py-8 gap-2">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button
                      className="flex items-center justify-between w-full py-4 text-white/80 border-b border-white/10"
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "13px",
                        letterSpacing: "0.1em",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        borderBottom: "1px solid rgba(255,255,255,0.1)",
                      }}
                      onClick={() =>
                        setMobileOpenDropdown(
                          mobileOpenDropdown === item.label ? null : item.label
                        )
                      }
                    >
                      <span className="uppercase">{item.label}</span>
                      <span
                        className={`text-[#C6FF02] transition-transform duration-200 ${mobileOpenDropdown === item.label ? "rotate-180" : ""}`}
                      >
                        ▾
                      </span>
                    </button>
                    {mobileOpenDropdown === item.label && (
                      <div
                        className="pl-4 border-l-2 border-[#C6FF02] ml-2 my-2"
                        style={{ borderLeft: "2px solid #C6FF02" }}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block py-3 text-white/60 hover:text-[#C6FF02] transition-colors"
                            style={{
                              fontFamily: "'Space Mono', monospace",
                              fontSize: "12px",
                              letterSpacing: "0.08em",
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
                    className="block py-4 uppercase text-white/80 hover:text-[#C6FF02] transition-colors"
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "13px",
                      letterSpacing: "0.1em",
                      borderBottom: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-6">
              <Link
                href="/contact"
                className="block text-center bg-[#C6FF02] text-black py-4 uppercase font-semibold"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "13px",
                  letterSpacing: "0.12em",
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
