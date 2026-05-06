import type { Metadata } from "next";

export const metadata: Metadata = { title: "The Modlab" };

export default function ModlabLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
