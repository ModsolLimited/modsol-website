import type { Metadata } from "next";

export const metadata: Metadata = { title: "The Vision — Modsol Limited" };

export default function VisionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
