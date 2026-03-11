"use client";

interface DotPaginationProps {
  total: number;
  active: number;
  onDotClick?: (index: number) => void;
}

export default function DotPagination({
  total,
  active,
  onDotClick,
}: DotPaginationProps) {
  return (
    <div className="flex items-center gap-2" role="tablist" aria-label="Slide navigation">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          role="tab"
          aria-selected={i === active}
          aria-label={`Go to slide ${i + 1}`}
          onClick={() => onDotClick?.(i)}
          className={`h-2 w-2 rounded-full transition-colors ${
            i === active ? "bg-copper" : "bg-muted/40"
          }`}
        />
      ))}
    </div>
  );
}
