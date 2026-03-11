"use client";

import { portraits } from "@/data/portraits";

const uniquePolicies = Array.from(
  new Map(portraits.map((p) => [p.policyLabel, p.id])).keys()
);

export default function PolicyTags({
  onTagClick,
}: {
  onTagClick?: (policyLabel: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {uniquePolicies.map((label) => (
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
