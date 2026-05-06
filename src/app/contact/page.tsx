import type { Metadata } from "next";
import ContactClient from "@/components/sections/ContactClient";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return <ContactClient />;
}
