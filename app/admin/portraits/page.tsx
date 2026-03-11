"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Portrait } from "@/lib/types";

export default function PortraitsAdmin() {
  const [portraits, setPortraits] = useState<Portrait[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/portraits")
      .then((r) => r.json())
      .then((data) => {
        setPortraits(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-copper border-t-transparent" />
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="font-serif text-2xl text-charcoal">Portraits</h1>
        <p className="text-sm text-muted">{portraits.length} portraits</p>
      </div>

      <div className="grid gap-3">
        {portraits.map((p) => (
          <Link
            key={p.id}
            href={`/admin/portraits/${p.id}`}
            className="flex items-center gap-4 rounded-md border border-muted/20 bg-white p-4 transition-colors hover:border-copper/30"
          >
            {/* Thumbnail */}
            <div
              className="h-14 w-14 shrink-0 overflow-hidden rounded-sm"
              style={{ backgroundColor: p.cardColour }}
            >
              {p.image && (
                <Image
                  src={p.image}
                  alt={p.name}
                  width={56}
                  height={56}
                  className="h-full w-full object-cover"
                />
              )}
            </div>

            {/* Info */}
            <div className="min-w-0 flex-1">
              <p className="font-sans text-sm font-medium text-charcoal">
                {p.name}
              </p>
              <p className="mt-0.5 truncate font-sans text-xs text-muted">
                {p.age} · {p.location}, {p.state} · {p.policyLabel}
              </p>
            </div>

            {/* Status indicator */}
            <div className="flex items-center gap-2">
              {p.image ? (
                <span className="rounded-full bg-teal/10 px-2 py-0.5 text-[0.65rem] font-medium text-teal">
                  Photo
                </span>
              ) : (
                <span className="rounded-full bg-copper/10 px-2 py-0.5 text-[0.65rem] font-medium text-copper">
                  No photo
                </span>
              )}
              <svg
                className="h-4 w-4 text-muted"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
