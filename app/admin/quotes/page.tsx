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
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-copper border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="font-serif text-2xl text-charcoal">Quotes</h1>
        <button
          onClick={addQuote}
          className="rounded-sm bg-copper px-3 py-1.5 font-sans text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          + Add quote
        </button>
      </div>

      <div className="space-y-4">
        {quotes.map((q, i) => (
          <div
            key={i}
            className="rounded-md border border-muted/20 bg-white p-5"
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="font-sans text-xs font-semibold uppercase tracking-wider text-muted">
                Quote {i + 1}
              </span>
              <button
                onClick={() => removeQuote(i)}
                className="font-sans text-xs text-red-400 hover:text-red-600"
              >
                Remove
              </button>
            </div>

            <label className="mb-3 block">
              <span className="mb-1 block font-sans text-xs font-semibold uppercase tracking-wider text-muted">
                Quote text
              </span>
              <textarea
                value={q.text}
                onChange={(e) => updateQuote(i, "text", e.target.value)}
                rows={3}
                className="w-full rounded-sm border border-muted/30 bg-cream/40 px-3 py-2 font-sans text-sm text-charcoal outline-none focus:border-copper"
              />
            </label>

            <div className="grid grid-cols-2 gap-3">
              <label className="block">
                <span className="mb-1 block font-sans text-xs font-semibold uppercase tracking-wider text-muted">
                  Name
                </span>
                <input
                  type="text"
                  value={q.name}
                  onChange={(e) => updateQuote(i, "name", e.target.value)}
                  className="w-full rounded-sm border border-muted/30 bg-cream/40 px-3 py-2 font-sans text-sm text-charcoal outline-none focus:border-copper"
                />
              </label>
              <label className="block">
                <span className="mb-1 block font-sans text-xs font-semibold uppercase tracking-wider text-muted">
                  Age
                </span>
                <input
                  type="text"
                  value={String(q.age)}
                  onChange={(e) => updateQuote(i, "age", e.target.value)}
                  className="w-full rounded-sm border border-muted/30 bg-cream/40 px-3 py-2 font-sans text-sm text-charcoal outline-none focus:border-copper"
                />
              </label>
              <label className="block">
                <span className="mb-1 block font-sans text-xs font-semibold uppercase tracking-wider text-muted">
                  Location
                </span>
                <input
                  type="text"
                  value={q.location}
                  onChange={(e) => updateQuote(i, "location", e.target.value)}
                  className="w-full rounded-sm border border-muted/30 bg-cream/40 px-3 py-2 font-sans text-sm text-charcoal outline-none focus:border-copper"
                />
              </label>
              <label className="block">
                <span className="mb-1 block font-sans text-xs font-semibold uppercase tracking-wider text-muted">
                  State
                </span>
                <input
                  type="text"
                  value={q.state}
                  onChange={(e) => updateQuote(i, "state", e.target.value)}
                  className="w-full rounded-sm border border-muted/30 bg-cream/40 px-3 py-2 font-sans text-sm text-charcoal outline-none focus:border-copper"
                />
              </label>
            </div>

            <label className="mt-3 block">
              <span className="mb-1 block font-sans text-xs font-semibold uppercase tracking-wider text-muted">
                Policy Area
              </span>
              <input
                type="text"
                value={q.policyArea}
                onChange={(e) => updateQuote(i, "policyArea", e.target.value)}
                className="w-full rounded-sm border border-muted/30 bg-cream/40 px-3 py-2 font-sans text-sm text-charcoal outline-none focus:border-copper"
              />
            </label>
          </div>
        ))}
      </div>

      {/* Save */}
      <div className="mt-5 flex items-center gap-3">
        <button
          onClick={handleSave}
          disabled={saving}
          className="rounded-sm bg-copper px-5 py-2.5 font-sans text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {saving ? "Saving..." : "Save all quotes"}
        </button>
        {message && (
          <p
            className={`font-sans text-sm ${message.includes("fail") ? "text-red-600" : "text-teal"}`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
