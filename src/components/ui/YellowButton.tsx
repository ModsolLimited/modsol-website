import Link from "next/link";

interface YellowButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function YellowButton({ href, children, className = "" }: YellowButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-block bg-[#C6FF02] text-black px-8 py-4 uppercase tracking-widest text-sm font-semibold transition-all duration-200 hover:bg-white ${className}`}
      style={{ fontFamily: "'Space Mono', monospace", fontSize: "12px", letterSpacing: "0.12em" }}
    >
      {children}
    </Link>
  );
}
