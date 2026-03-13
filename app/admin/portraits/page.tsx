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
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-[var(--color-admin-red)] border-t-transparent" />
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[var(--color-admin-text)]">Portraits</h1>
          <p className="mt-1 text-sm text-[var(--color-admin-muted)]">
            {portraits.length} portraits in collection
          </p>
        </div>
      </div>

      <div className="grid gap-3">
        {portraits.map((p) => (
          <Link
            key={p.id}
            href={`/admin/portraits/${p.id}`}
            className="flex items-center gap-4 border border-[var(--color-admin-border)] bg-white p-4 transition-colors hover:border-[var(--color-admin-red)]"
          >
            {/* Thumbnail */}
            <div
              className="h-14 w-14 shrink-0 overflow-hidden"
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
              <p className="text-sm font-semibold text-[var(--color-admin-text)]">
                {p.name}
              </p>
              <p className="mt-0.5 truncate text-xs text-[var(--color-admin-muted)]">
                {p.age} · {p.location}, {p.state} · {p.policyLabel}
              </p>
            </div>

            {/* Status */}
            <div className="flex items-center gap-2">
              {p.image ? (
                <span className="bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-700">
                  Photo
                </span>
              ) : (
                <span className="bg-red-50 px-2 py-0.5 text-[11px] font-medium text-[var(--color-admin-red)]">
                  No photo
                </span>
              )}
              <svg
                className="h-4 w-4 text-[var(--color-admin-muted)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
