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
      <h1 className="font-serif text-3xl text-charcoal">Dashboard</h1>
      <p className="mt-2 font-sans text-sm text-muted">
        Manage the Portraits of Our Future collection.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        <Link
          href="/admin/portraits"
          className="rounded-sm border border-muted/20 bg-white p-6 transition-shadow hover:shadow-md"
        >
          <p className="font-serif text-3xl text-copper">
            {stats?.portraits ?? "..."}
          </p>
          <p className="mt-1 font-sans text-sm text-muted">Portraits</p>
        </Link>
        <Link
          href="/admin/quotes"
          className="rounded-sm border border-muted/20 bg-white p-6 transition-shadow hover:shadow-md"
        >
          <p className="font-serif text-3xl text-copper">
            {stats?.quotes ?? "..."}
          </p>
          <p className="mt-1 font-sans text-sm text-muted">Quotes</p>
        </Link>
        <Link
          href="/admin/site-copy"
          className="rounded-sm border border-muted/20 bg-white p-6 transition-shadow hover:shadow-md"
        >
          <p className="font-serif text-3xl text-copper">4</p>
          <p className="mt-1 font-sans text-sm text-muted">Site sections</p>
        </Link>
      </div>
    </div>
  );
}
