import type { Portrait } from "@/data/portraits";

const colourMap: Record<string, string> = {
  "sage-100": "bg-sage-100",
  "lavender-100": "bg-lavender-100",
  "mint-100": "bg-mint-100",
  "blush-100": "bg-blush-100",
};

export default function PortraitCard({ portrait }: { portrait: Portrait }) {
  const bgClass = colourMap[portrait.cardColour] || "bg-sage-100";

  return (
    <div className="group flex-shrink-0 w-[280px] cursor-pointer">
      {/* Photo placeholder */}
      <div
        className={`${bgClass} relative flex h-[340px] items-center justify-center overflow-hidden rounded-sm`}
      >
        <span className="absolute top-4 left-4 font-serif text-6xl font-bold text-charcoal/10">
          {String(portrait.id).padStart(2, "0")}
        </span>
        <span className="font-sans text-xs font-medium uppercase tracking-wider text-charcoal/30">
          Photo placeholder
        </span>
        {/* Hover arrow */}
        <div className="absolute right-4 bottom-4 flex h-8 w-8 items-center justify-center rounded-full bg-charcoal/10 opacity-0 transition-opacity group-hover:opacity-100">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-charcoal/60"
          >
            <path d="M1 13L13 1M13 1H3M13 1v10" />
          </svg>
        </div>
      </div>

      {/* Card info */}
      <div className="mt-4">
        <span className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-copper">
          {portrait.policyLabel}
        </span>
        <h3 className="mt-1 font-serif text-xl font-bold text-charcoal">
          {portrait.name}
        </h3>
        <p className="mt-0.5 font-sans text-xs text-muted">
          {portrait.location}, {portrait.state}
        </p>
        <p className="mt-2 font-serif text-sm leading-relaxed text-charcoal/70 italic">
          &ldquo;{portrait.quote}&rdquo;
        </p>
      </div>
    </div>
  );
}
