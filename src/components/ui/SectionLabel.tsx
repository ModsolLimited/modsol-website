interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="w-6 h-px bg-[#C6FF02]" />
      <span
        style={{ fontFamily: "'Space Mono', monospace", fontSize: "11px", letterSpacing: "0.15em" }}
        className="text-[#C6FF02] uppercase"
      >
        {children}
      </span>
    </div>
  );
}
