import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/layout/PageHero";
import TeamGrid from "@/components/sections/TeamGrid";

export const metadata: Metadata = { title: "The Team — Modsol Limited" };

export default function TeamPage() {
  return (
    <>
      {/* Custom hero with watermark logo */}
      <section className="page-hero">
        {/* Watermark logo */}
        <div
          className="hero-logo-watermark"
          style={{
            position: "absolute",
            top: "50%",
            right: "clamp(40px, 4vw, 120px)",
            transform: "translateY(-50%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          <Image
            src="/logo.png"
            alt=""
            width={360}
            height={360}
            className="team-hero-logo"
            style={{
              width: "clamp(200px, 20vw, 360px)",
              height: "auto",
              opacity: 0.06,
              maskImage: "linear-gradient(to left, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)",
            }}
          />
        </div>

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <p className="section-label">The Company</p>
          <h1
            className="section-title"
            style={{ marginBottom: "24px", maxWidth: "800px" }}
          >
            THE TEAM
          </h1>
          <p className="section-body" style={{ marginTop: "16px" }}>
            Meet the people behind Modsol — the founders and specialists who design, engineer, and deliver every project.
          </p>
        </div>
      </section>

      <section style={{ background: "#000", padding: "32px 0 80px" }}>
        <div className="container">
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--yellow)",
              marginBottom: "32px",
            }}
          >
            The People Behind the Platform
          </p>

          <TeamGrid />
        </div>
      </section>

      <section
        style={{
          background: "var(--dark)",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          padding: "80px 0",
        }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-label" style={{ justifyContent: "center" }}>
            Join Us
          </p>
          <h2
            className="section-title reveal"
            style={{ marginBottom: "32px" }}
          >
            Work With
            <br />
            <span style={{ color: "var(--yellow)" }}>The Best.</span>
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: "var(--muted)",
              maxWidth: "560px",
              margin: "0 auto 40px",
              lineHeight: "1.9",
            }}
          >
            We are always looking for exceptional people. If you believe
            modular architecture deserves the same rigour as permanent
            construction, we want to hear from you.
          </p>
          <div
            style={{ display: "flex", gap: "16px", justifyContent: "center" }}
          >
            <Link href="/contact" className="btn-primary">
              Get In Touch
            </Link>
            <Link href="/company" className="btn-secondary">
              The Company
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
