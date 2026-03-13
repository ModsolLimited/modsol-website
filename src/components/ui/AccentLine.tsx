interface AccentLineProps {
  className?: string;
  vertical?: boolean;
}

export default function AccentLine({ className = "", vertical = false }: AccentLineProps) {
  if (vertical) {
    return <div className={`w-px bg-[#C6FF02] ${className}`} />;
  }
  return <div className={`h-px bg-[#C6FF02] ${className}`} />;
}
