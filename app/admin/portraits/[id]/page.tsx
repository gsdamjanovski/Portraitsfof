"use client";

import { useEffect, useState, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import type { Portrait } from "@/lib/types";

export default function EditPortrait() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [portraits, setPortraits] = useState<Portrait[]>([]);
  const [portrait, setPortrait] = useState<Portrait | null>(null);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/admin/portraits")
      .then((r) => r.json())
      .then((data: Portrait[]) => {
        setPortraits(data);
        const found = data.find((p) => String(p.id) === id);
        if (found) setPortrait({ ...found });
      });
  }, [id]);

  const updateField = useCallback(
    (field: keyof Portrait, value: string | number) => {
      setPortrait((prev) => (prev ? { ...prev, [field]: value } : prev));
    },
    []
  );

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });
      const text = await res.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch {
        setMessage(`Upload failed (${res.status}): ${text.slice(0, 200)}`);
        return;
      }
      if (!res.ok) {
        setMessage(`Upload failed: ${data.error || res.statusText}`);
        return;
      }
      updateField("image", data.url);
      setMessage("Image uploaded");
      setTimeout(() => setMessage(""), 2000);
    } catch (err) {
      setMessage(`Upload failed: ${err instanceof Error ? err.message : "Network error"}`);
    } finally {
      setUploading(false);
    }
  };

  const handleSave = async () => {
    if (!portrait) return;
    setSaving(true);
    setMessage("");

    const updated = portraits.map((p) =>
      String(p.id) === id ? portrait : p
    );

    try {
      await fetch("/api/admin/portraits", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated),
      });
      setMessage("Saved successfully");
      setTimeout(() => setMessage(""), 3000);
    } catch {
      setMessage("Save failed");
    } finally {
      setSaving(false);
    }
  };

  if (!portrait) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-copper border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      <button
        onClick={() => router.push("/admin/portraits")}
        className="mb-4 font-sans text-sm text-muted hover:text-charcoal"
      >
        &larr; Back to portraits
      </button>

      <h1 className="mb-6 font-serif text-2xl text-charcoal">
        Edit: {portrait.name}
      </h1>

      {/* Image upload */}
      <div className="mb-6 rounded-md border border-muted/20 bg-white p-5">
        <label className="mb-2 block font-sans text-xs font-semibold uppercase tracking-wider text-muted">
          Portrait photo
        </label>
        <div className="flex items-start gap-4">
          <div
            className="h-28 w-28 shrink-0 overflow-hidden rounded-sm"
            style={{ backgroundColor: portrait.cardColour }}
          >
            {portrait.image && (
              <Image
                src={portrait.image}
                alt={portrait.name}
                width={112}
                height={112}
                className="h-full w-full object-cover"
              />
            )}
          </div>
          <div>
            <label className="inline-flex cursor-pointer items-center gap-2 rounded-sm bg-copper px-3 py-2 font-sans text-sm font-medium text-white transition-opacity hover:opacity-90">
              {uploading ? "Uploading..." : "Upload photo"}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                disabled={uploading}
              />
            </label>
            {portrait.image && (
              <p className="mt-2 max-w-xs truncate font-sans text-xs text-muted">
                {portrait.image}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Form fields */}
      <div className="space-y-4 rounded-md border border-muted/20 bg-white p-5">
        <Field
          label="Name"
          value={portrait.name}
          onChange={(v) => updateField("name", v)}
        />
        <Field
          label="Age"
          value={String(portrait.age)}
          onChange={(v) => updateField("age", v)}
        />
        <div className="grid grid-cols-2 gap-4">
          <Field
            label="Location"
            value={portrait.location}
            onChange={(v) => updateField("location", v)}
          />
          <Field
            label="State"
            value={portrait.state}
            onChange={(v) => updateField("state", v)}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Field
            label="Policy Area (slug)"
            value={portrait.policyArea}
            onChange={(v) => updateField("policyArea", v)}
          />
          <Field
            label="Policy Label"
            value={portrait.policyLabel}
            onChange={(v) => updateField("policyLabel", v)}
          />
        </div>
        <Field
          label="Card Colour"
          value={portrait.cardColour}
          onChange={(v) => updateField("cardColour", v)}
        />
        <TextArea
          label="Quote"
          value={portrait.quote}
          onChange={(v) => updateField("quote", v)}
          rows={3}
        />
        <TextArea
          label="Summary"
          value={portrait.summary}
          onChange={(v) => updateField("summary", v)}
          rows={4}
        />
      </div>

      {/* Save */}
      <div className="mt-5 flex items-center gap-3">
        <button
          onClick={handleSave}
          disabled={saving}
          className="rounded-sm bg-copper px-5 py-2.5 font-sans text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {saving ? "Saving..." : "Save changes"}
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

function Field({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="block">
      <span className="mb-1 block font-sans text-xs font-semibold uppercase tracking-wider text-muted">
        {label}
      </span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-sm border border-muted/30 bg-cream/40 px-3 py-2 font-sans text-sm text-charcoal outline-none transition-colors focus:border-copper"
      />
    </label>
  );
}

function TextArea({
  label,
  value,
  onChange,
  rows = 3,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  rows?: number;
}) {
  return (
    <label className="block">
      <span className="mb-1 block font-sans text-xs font-semibold uppercase tracking-wider text-muted">
        {label}
      </span>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        className="w-full rounded-sm border border-muted/30 bg-cream/40 px-3 py-2 font-sans text-sm text-charcoal outline-none transition-colors focus:border-copper"
      />
    </label>
  );
}
