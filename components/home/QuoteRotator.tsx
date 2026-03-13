"use client";

import { useState, useEffect, useCallback } from "react";
import type { Quote } from "@/lib/types";

export default function QuoteRotator({ quotes }: { quotes: Quote[] }) {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % quotes.length);
  }, [quotes.length]);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [next]);

  const q = quotes[index];

  return (
    <div className="flex flex-col justify-center gap-12 p-12 lg:p-20">
      <p className="eyebrow">
        {String(index + 1).padStart(2, "0")} / {String(quotes.length).padStart(2, "0")}
      </p>
      <blockquote className="font-[var(--font-heading)] text-2xl lg:text-[28px] font-bold leading-[1.5] text-black">
        &lsquo;{q.text}&rsquo;
      </blockquote>
      <div>
        <p className="font-[var(--font-heading)] text-lg font-bold text-black">
          — {q.name}, {q.age}
        </p>
        <p className="mt-1 text-[13px] text-muted">
          {q.location}, {q.state} · {q.policyArea}
        </p>
      </div>
      {/* Progress dots */}
      <div className="flex items-center gap-2.5">
        {quotes.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Quote ${i + 1}`}
            className={`h-[3px] transition-all ${
              i === index ? "w-6 bg-black" : "w-3 bg-divider"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
