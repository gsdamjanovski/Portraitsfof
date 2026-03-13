interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  heading,
  description,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className={`eyebrow mb-4 ${light ? "text-white/50" : ""}`}>{eyebrow}</p>
      )}
      <h2 className={`heading-h2 ${light ? "!text-white" : ""}`}>{heading}</h2>
      {description && (
        <p className={`mt-4 text-body ${light ? "!text-white/70" : ""}`}>{description}</p>
      )}
    </div>
  );
}
