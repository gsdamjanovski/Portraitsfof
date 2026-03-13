"use client";

import { useState } from "react";
import Link from "next/link";
import FilterBar from "./FilterBar";
import PortraitCard from "./PortraitCard";
import type { Portrait } from "@/lib/types";

interface PortraitsGridProps {
  portraits: Portrait[];
  policyAreas: string[];
}

export default function PortraitsGrid({ portraits, policyAreas }: PortraitsGridProps) {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? portraits : portraits.filter((p) => p.policyLabel === active);

  return (
    <>
      {/* Filter Bar */}
      <section className="section-white border-b border-divider">
        <div className="mx-auto max-w-[1440px] px-12 py-5 lg:px-[120px]">
          <FilterBar categories={policyAreas} active={active} onChange={setActive} />
        </div>
      </section>

      {/* Not sure where to start */}
      <section className="section-white">
        <div className="mx-auto flex max-w-[1440px] items-center justify-center gap-6 px-12 py-8 lg:px-[120px]">
          <p className="text-sm text-muted">Not sure where to start?</p>
          <Link
            href="/"
            className="text-sm font-medium text-black hover:opacity-70 transition-opacity"
          >
            Try the portrait recommender →
          </Link>
        </div>
      </section>

      {/* Portrait Grid */}
      <section className="section-gray">
        <div className="mx-auto max-w-[1440px] px-12 py-16 lg:px-[120px]">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {filtered.map((portrait) => (
              <div key={portrait.id} className="flex gap-8">
                {/* Left: card image */}
                <div className="w-[280px] flex-shrink-0">
                  <PortraitCard portrait={portrait} />
                </div>
                {/* Right: extended info */}
                <div className="flex flex-1 flex-col justify-center">
                  <p className="text-[13px] font-medium text-black">
                    {portrait.name}, {portrait.age}
                  </p>
                  <p className="mt-1 text-xs text-muted">
                    {portrait.location}, {portrait.state}
                  </p>
                  <p className="mt-4 font-[var(--font-heading)] text-base font-bold leading-snug text-black">
                    &ldquo;{portrait.quote}&rdquo;
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-body">
                    {portrait.summary}
                  </p>
                  <p className="mt-4 text-[11px] font-medium uppercase tracking-wider text-subtle">
                    {portrait.policyLabel}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
