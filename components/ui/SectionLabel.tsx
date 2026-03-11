export default function SectionLabel({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <span
      className={`font-sans text-xs font-semibold uppercase tracking-[0.15em] ${
        light ? "text-copper/80" : "text-copper"
      }`}
    >
      {children}
    </span>
  );
}
