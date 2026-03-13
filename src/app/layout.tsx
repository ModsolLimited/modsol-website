import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollReveal from "@/components/layout/ScrollReveal";

export const metadata: Metadata = {
  title: {
    default: "Modsol Limited — Build. Bold. Modular Systems for Temporary Architecture.",
    template: "%s | Modsol Limited",
  },
  description:
    "Modsol designs and manufactures modular systems for temporary architecture, events, exhibitions, branded environments and commercial spaces. Build Bold.",
  keywords: [
    "modular architecture systems",
    "modular event structures",
    "modular exhibition systems",
    "temporary modular buildings",
    "modular wall systems",
    "modular branding structures",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        <ScrollReveal />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
