import Link from "next/link";

interface OutlineButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function OutlineButton({ href, children, className = "" }: OutlineButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-block border border-white text-white px-8 py-4 uppercase tracking-widest text-sm font-semibold transition-all duration-200 hover:border-[#C6FF02] hover:text-[#C6FF02] ${className}`}
      style={{ fontFamily: "'Space Mono', monospace", fontSize: "12px", letterSpacing: "0.12em" }}
    >
      {children}
    </Link>
  );
}
