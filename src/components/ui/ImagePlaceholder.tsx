interface Props { label: string; aspectRatio?: string; height?: string; className?: string; }
export default function ImagePlaceholder({ label, aspectRatio, height, className = "" }: Props) {
  return (
    <div
      className={className}
      style={{
        aspectRatio,
        height,
        background: "var(--dark3)",
        backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(198,255,2,0.06) 39px,rgba(198,255,2,0.06) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(198,255,2,0.04) 39px,rgba(198,255,2,0.04) 40px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.25em", color: "rgba(198,255,2,0.3)", textTransform: "uppercase", textAlign: "center", padding: "0 20px" }}>
        {label}
      </span>
    </div>
  );
}
