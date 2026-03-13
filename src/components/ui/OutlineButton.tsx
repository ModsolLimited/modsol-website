import Link from "next/link";
export default function OutlineButton({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link href={href} className="btn-secondary">{children}</Link>;
}
