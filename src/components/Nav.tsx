"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/company", label: "The Company" },
  { href: "/products", label: "The Products" },
  { href: "/solutions", label: "The Solutions" },
  { href: "/projects", label: "The Projects" },
  { href: "/knowledge", label: "Knowledge Hub" },
];

export default function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 1000,
          padding: "0 40px",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "rgba(0,0,0,0.92)",
          backdropFilter: "blur(20px)",
          borderBottom: scrolled
            ? "1px solid rgba(198,255,2,0.1)"
            : "1px solid rgba(255,255,255,0.06)",
          transition: "border-color 0.3s",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{
            width: "28px", height: "28px",
            background: "#C6FF02",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }}>
            <span style={{ fontFamily: "var(--font-display)", fontSize: "16px", color: "#000", lineHeight: 1 }}>M</span>
          </div>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "24px", letterSpacing: "0.12em", color: "#fff" }}>
            MODSOL
          </span>
        </Link>

        {/* Desktop links */}
        <ul style={{ display: "flex", alignItems: "center", gap: "36px", listStyle: "none", margin: 0 }}
          className="hidden md:flex">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: pathname === href ? "#fff" : "#888",
                  textDecoration: "none",
                  position: "relative",
                  transition: "color 0.2s",
                }}
                className="nav-link"
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              style={{
                background: "#C6FF02",
                color: "#000",
                padding: "10px 20px",
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                textDecoration: "none",
                fontWeight: 700,
                display: "inline-block",
                transition: "background 0.2s",
              }}
            >
              Get In Touch
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ display: "flex", flexDirection: "column", gap: "5px", cursor: "pointer", padding: "8px", background: "none", border: "none" }}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          <span style={{ display: "block", width: "24px", height: "1.5px", background: "#fff", transition: "all 0.3s", transform: mobileOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
          <span style={{ display: "block", width: "24px", height: "1.5px", background: "#fff", transition: "all 0.3s", opacity: mobileOpen ? 0 : 1 }} />
          <span style={{ display: "block", width: "24px", height: "1.5px", background: "#fff", transition: "all 0.3s", transform: mobileOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
        </button>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <div style={{
          position: "fixed",
          top: "72px", left: 0, right: 0, bottom: 0,
          background: "rgba(0,0,0,0.98)",
          backdropFilter: "blur(20px)",
          zIndex: 999,
          display: "flex",
          flexDirection: "column",
          padding: "48px 40px",
          gap: "32px",
        }}>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "40px",
                letterSpacing: "0.05em",
                color: pathname === href ? "#C6FF02" : "#fff",
                textDecoration: "none",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                paddingBottom: "20px",
              }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "40px",
              letterSpacing: "0.05em",
              color: "#C6FF02",
              textDecoration: "none",
            }}
          >
            Contact
          </Link>
        </div>
      )}
    </>
  );
}
