"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Stats {
  portraits: number;
  quotes: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    async function load() {
      const [pRes, qRes] = await Promise.all([
        fetch("/api/admin/portraits"),
        fetch("/api/admin/quotes"),
      ]);
      const portraits = pRes.ok ? await pRes.json() : [];
      const quotes = qRes.ok ? await qRes.json() : [];
      setStats({
        portraits: portraits.length,
        quotes: quotes.length,
      });
    }
    load();
  }, []);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[var(--color-admin-text)]">
          Dashboard
        </h1>
        <p className="mt-1 text-sm text-[var(--color-admin-muted)]">
          Manage the Portraits of Our Future collection.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        <Link href="/admin/portraits" className="admin-card transition-shadow hover:shadow-sm">
          <p className="text-4xl font-bold text-[var(--color-admin-red)]">
            {stats?.portraits ?? "—"}
          </p>
          <p className="mt-2 text-sm text-[var(--color-admin-muted)]">Portraits</p>
        </Link>
        <Link href="/admin/quotes" className="admin-card transition-shadow hover:shadow-sm">
          <p className="text-4xl font-bold text-[var(--color-admin-red)]">
            {stats?.quotes ?? "—"}
          </p>
          <p className="mt-2 text-sm text-[var(--color-admin-muted)]">Quotes</p>
        </Link>
        <Link href="/admin/pages" className="admin-card transition-shadow hover:shadow-sm">
          <p className="text-4xl font-bold text-[var(--color-admin-red)]">5</p>
          <p className="mt-2 text-sm text-[var(--color-admin-muted)]">Pages</p>
        </Link>
      </div>

      {/* Quick actions */}
      <div className="mt-8">
        <h2 className="mb-4 text-lg font-semibold text-[var(--color-admin-text)]">
          Quick actions
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Link
            href="/admin/portraits"
            className="flex items-center gap-3 border border-[var(--color-admin-border)] bg-white p-4 text-sm text-[var(--color-admin-text)] transition-colors hover:border-[var(--color-admin-red)]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            Edit portraits
          </Link>
          <Link
            href="/admin/quotes"
            className="flex items-center gap-3 border border-[var(--color-admin-border)] bg-white p-4 text-sm text-[var(--color-admin-text)] transition-colors hover:border-[var(--color-admin-red)]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21z" />
            </svg>
            Manage quotes
          </Link>
          <Link
            href="/admin/pages"
            className="flex items-center gap-3 border border-[var(--color-admin-border)] bg-white p-4 text-sm text-[var(--color-admin-text)] transition-colors hover:border-[var(--color-admin-red)]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            Pages &amp; content
          </Link>
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-3 border border-[var(--color-admin-border)] bg-white p-4 text-sm text-[var(--color-admin-text)] transition-colors hover:border-[var(--color-admin-red)]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Preview site
          </Link>
        </div>
      </div>
    </div>
  );
}
