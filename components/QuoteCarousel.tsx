"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { quotes } from "@/data/quotes";
import DotPagination from "./ui/DotPagination";

export default function QuoteCarousel() {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(true);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % quotes.length);
  }, []);

  useEffect(() => {
    if (!playing) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [playing, next]);

  const q = quotes[current];

  return (
    <div className="flex h-full flex-col justify-between">
      <div className="relative min-h-[280px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            <blockquote className="font-serif text-2xl leading-snug text-charcoal italic md:text-3xl lg:text-[2rem] lg:leading-snug">
              &ldquo;{q.text}&rdquo;
            </blockquote>
            <div className="mt-6 flex items-center gap-2 font-sans text-sm text-muted">
              <span className="text-copper">&mdash;</span>
              <span>
                {q.name}, {q.age} &middot; {q.location}, {q.state} &middot;{" "}
                {q.policyArea}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center gap-4">
        <DotPagination
          total={quotes.length}
          active={current}
          onDotClick={(i) => setCurrent(i)}
        />
        <button
          onClick={() => setPlaying(!playing)}
          className="flex h-6 w-6 items-center justify-center text-muted transition-colors hover:text-charcoal"
          aria-label={playing ? "Pause quotes" : "Play quotes"}
        >
          {playing ? (
            <svg width="12" height="14" viewBox="0 0 12 14" fill="currentColor">
              <rect x="0" y="0" width="4" height="14" rx="1" />
              <rect x="8" y="0" width="4" height="14" rx="1" />
            </svg>
          ) : (
            <svg width="12" height="14" viewBox="0 0 12 14" fill="currentColor">
              <polygon points="0,0 12,7 0,14" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
