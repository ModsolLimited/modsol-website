import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollReveal from "@/components/layout/ScrollReveal";

const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-display", display: "swap" });
const dmSans = DM_Sans({ weight: ["300", "400", "500", "600"], subsets: ["latin"], variable: "--font-body", display: "swap" });
const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "Modsol Limited — Build. Bold. Modular Architecture Systems.",
    template: "%s | Modsol Limited",
  },
  description:
    "Modsol Limited — modular architecture engineered for events, exhibitions, retail, hospitality and commercial spaces. Three core systems: The Modblock, The Modwall and The Modframe, plus The Modlab bespoke division. Build Bold.",
  keywords: [
    "Modsol",
    "modular architecture",
    "Modblock",
    "Modwall",
    "Modframe",
    "Modlab",
    "modular building systems",
    "modular exhibition stands",
    "event structures",
    "brand activations",
    "modular hospitality",
    "flat-pack architecture",
  ],
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon-32x32.png',
    apple: '/favicon-32x32.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${dmSans.variable} ${spaceMono.variable}`}>
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
