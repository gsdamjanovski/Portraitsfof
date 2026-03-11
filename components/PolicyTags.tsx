"use client";

export default function PolicyTags({
  policies,
  onTagClick,
}: {
  policies: string[];
  onTagClick?: (policyLabel: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {policies.map((label) => (
        <button
          key={label}
          onClick={() => onTagClick?.(label)}
          className="rounded-full border border-muted/30 px-4 py-1.5 font-sans text-xs font-medium text-charcoal/70 transition-colors hover:border-copper hover:text-copper"
        >
          {label}
        </button>
      ))}
    </div>
  );
}
