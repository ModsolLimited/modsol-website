interface ImagePlaceholderProps {
  label: string;
  aspectRatio?: string;
  className?: string;
  height?: string;
}

export default function ImagePlaceholder({
  label,
  aspectRatio,
  className = "",
  height,
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative w-full flex items-center justify-center overflow-hidden ${className}`}
      style={{
        aspectRatio: aspectRatio,
        height: height,
        backgroundColor: "#111111",
        backgroundImage: `
          linear-gradient(rgba(198, 255, 2, 0.07) 1px, transparent 1px),
          linear-gradient(90deg, rgba(198, 255, 2, 0.07) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    >
      {/* Corner marks */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-[#C6FF02] opacity-60" />
      <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[#C6FF02] opacity-60" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-[#C6FF02] opacity-60" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-[#C6FF02] opacity-60" />

      <div className="text-center px-8">
        <div
          className="text-[#C6FF02] uppercase mb-2"
          style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", letterSpacing: "0.15em" }}
        >
          ▣ IMAGE PLACEHOLDER
        </div>
        <div
          className="text-white/60 uppercase"
          style={{ fontFamily: "'Space Mono', monospace", fontSize: "11px", letterSpacing: "0.1em" }}
        >
          {label}
        </div>
      </div>
    </div>
  );
}
