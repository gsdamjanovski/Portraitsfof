"use client";

import { useEffect, useState } from "react";
import type { Quote } from "@/lib/types";

const emptyQuote: Quote = {
  text: "",
  name: "",
  age: "",
  location: "",
  state: "",
  policyArea: "",
};

export default function QuotesAdmin() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/admin/quotes")
      .then((r) => r.json())
      .then((data) => {
        setQuotes(data);
        setLoading(false);
      });
  }, []);

  const updateQuote = (index: number, field: keyof Quote, value: string) => {
    setQuotes((prev) =>
      prev.map((q, i) => (i === index ? { ...q, [field]: value } : q))
    );
  };

  const addQuote = () => {
    setQuotes((prev) => [...prev, { ...emptyQuote }]);
  };

  const removeQuote = (index: number) => {
    setQuotes((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSave = async () => {
    setSaving(true);
    setMessage("");
    try {
      await fetch("/api/admin/quotes", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(quotes),
      });
      setMessage("Saved successfully");
      setTimeout(() => setMessage(""), 3000);
    } catch {
      setMessage("Save failed");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-[var(--color-admin-red)] border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[var(--color-admin-text)]">Quotes</h1>
          <p className="mt-1 text-sm text-[var(--color-admin-muted)]">
            {quotes.length} quotes for the homepage rotator
          </p>
        </div>
        <button onClick={addQuote} className="admin-btn-primary">
          + Add quote
        </button>
      </div>

      <div className="space-y-4">
        {quotes.map((q, i) => (
          <div key={i} className="admin-card">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-admin-muted)]">
                Quote {i + 1}
              </span>
              <button
                onClick={() => removeQuote(i)}
                className="text-xs text-[var(--color-admin-red)] hover:opacity-70"
              >
                Remove
              </button>
            </div>

            <label className="mb-3 block">
              <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[var(--color-admin-muted)]">
                Quote text
              </span>
              <textarea
                value={q.text}
                onChange={(e) => updateQuote(i, "text", e.target.value)}
                rows={3}
                className="w-full"
              />
            </label>

            <div className="grid grid-cols-2 gap-3">
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[var(--color-admin-muted)]">
                  Name
                </span>
                <input
                  type="text"
                  value={q.name}
                  onChange={(e) => updateQuote(i, "name", e.target.value)}
                  className="w-full"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[var(--color-admin-muted)]">
                  Age
                </span>
                <input
                  type="text"
                  value={String(q.age)}
                  onChange={(e) => updateQuote(i, "age", e.target.value)}
                  className="w-full"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[var(--color-admin-muted)]">
                  Location
                </span>
                <input
                  type="text"
                  value={q.location}
                  onChange={(e) => updateQuote(i, "location", e.target.value)}
                  className="w-full"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[var(--color-admin-muted)]">
                  State
                </span>
                <input
                  type="text"
                  value={q.state}
                  onChange={(e) => updateQuote(i, "state", e.target.value)}
                  className="w-full"
                />
              </label>
            </div>

            <label className="mt-3 block">
              <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[var(--color-admin-muted)]">
                Policy Area
              </span>
              <input
                type="text"
                value={q.policyArea}
                onChange={(e) => updateQuote(i, "policyArea", e.target.value)}
                className="w-full"
              />
            </label>
          </div>
        ))}
      </div>

      {/* Save */}
      <div className="mt-5 flex items-center gap-3">
        <button onClick={handleSave} disabled={saving} className="admin-btn-primary">
          {saving ? "Saving..." : "Save all quotes"}
        </button>
        {message && (
          <p className={`text-sm ${message.includes("fail") ? "text-[var(--color-admin-red)]" : "text-emerald-600"}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
