interface Props {
  children: React.ReactNode;
}

export default function SectionLabel({ children }: Props) {
  return (
    <p style={{
      fontFamily: "var(--font-mono)",
      fontSize: "10px",
      letterSpacing: "0.3em",
      textTransform: "uppercase",
      color: "#C6FF02",
      marginBottom: "24px",
      display: "flex",
      alignItems: "center",
      gap: "16px",
    }}>
      <span style={{ display: "block", width: "32px", height: "1px", background: "#C6FF02", flexShrink: 0 }} />
      {children}
    </p>
  );
}
