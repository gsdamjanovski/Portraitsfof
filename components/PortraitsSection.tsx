"use client";

import { useRef, useState, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import type { Portrait } from "@/lib/types";
import PortraitCard from "./PortraitCard";
import PolicyTags from "./PolicyTags";
import SectionLabel from "./ui/SectionLabel";
import DotPagination from "./ui/DotPagination";

const CARDS_PER_PAGE = 4;

export default function PortraitsSection({
  portraits,
}: {
  portraits: Portrait[];
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const totalPages = useMemo(
    () => Math.ceil(portraits.length / CARDS_PER_PAGE),
    [portraits.length]
  );

  const scrollTo = useCallback(
    (pageIndex: number) => {
      if (!scrollRef.current) return;
      const cardWidth = 280 + 24;
      scrollRef.current.scrollTo({
        left: pageIndex * CARDS_PER_PAGE * cardWidth,
        behavior: "smooth",
      });
      setPage(pageIndex);
    },
    []
  );

  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const cardWidth = 280 + 24;
    const newPage = Math.round(
      scrollRef.current.scrollLeft / (CARDS_PER_PAGE * cardWidth)
    );
    setPage(Math.min(newPage, totalPages - 1));
  }, [totalPages]);

  const prev = () => scrollTo(Math.max(0, page - 1));
  const next = () => scrollTo(Math.min(totalPages - 1, page + 1));

  const handleTagClick = (policyLabel: string) => {
    const index = portraits.findIndex((p) => p.policyLabel === policyLabel);
    if (index >= 0 && scrollRef.current) {
      const cardWidth = 280 + 24;
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  };

  const policies = useMemo(
    () => Array.from(new Set(portraits.map((p) => p.policyLabel))),
    [portraits]
  );

  return (
    <section id="portraits" className="bg-white py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-[1200px] px-6"
      >
        {/* Header row */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionLabel>The Portraits</SectionLabel>
            <h2 className="mt-3 font-serif text-3xl text-charcoal md:text-4xl">
              Fifteen Australians.{" "}
              <span className="text-muted italic">Fifteen policy areas.</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous portraits"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-muted/30 text-charcoal transition-colors hover:border-copper hover:text-copper"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M10 3L5 8l5 5" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Next portraits"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-muted/30 text-charcoal transition-colors hover:border-copper hover:text-copper"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 3l5 5-5 5" />
              </svg>
            </button>
            <a
              href="#portraits"
              className="ml-2 hidden rounded-sm bg-charcoal px-5 py-2.5 font-sans text-xs font-medium text-white transition-colors hover:bg-charcoal/85 md:inline-block"
            >
              All portraits &rarr;
            </a>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="mt-10 flex gap-6 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {portraits.map((portrait) => (
            <PortraitCard key={portrait.id} portrait={portrait} />
          ))}
        </div>

        {/* Dot pagination */}
        <div className="mt-6 flex justify-center">
          <DotPagination total={totalPages} active={page} onDotClick={scrollTo} />
        </div>

        {/* Policy tags */}
        <div className="mt-10">
          <PolicyTags policies={policies} onTagClick={handleTagClick} />
        </div>
      </motion.div>
    </section>
  );
}
