import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  title: {
    default: "Modsol Limited — Modular Architecture Systems",
    template: "%s | Modsol Limited",
  },
  description:
    "Modsol Limited designs and manufactures modular systems for temporary architecture, events, exhibitions, branded environments and commercial spaces. BUILD. BOLD.",
  keywords: [
    "modular architecture systems",
    "modular event structures",
    "modular exhibition systems",
    "temporary modular buildings",
    "modular wall systems",
    "modular branding structures",
  ],
  openGraph: {
    type: "website",
    siteName: "Modsol Limited",
    title: "Modsol Limited — Modular Architecture Systems",
    description:
      "Modular systems for temporary architecture, events, exhibitions, branded environments and commercial spaces.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ width: "100%", minHeight: "100vh" }}>
        <CustomCursor />
        <Navigation />
        <main style={{ width: "100%" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
