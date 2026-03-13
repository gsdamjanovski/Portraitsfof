"use client";

import { useEffect, useState, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { upload } from "@vercel/blob/client";
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

    try {
      const blob = await upload(`portraits/${file.name}`, file, {
        access: "public",
        handleUploadUrl: "/api/admin/upload",
      });
      updateField("image", blob.url);
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
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-[var(--color-admin-red)] border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      <button
        onClick={() => router.push("/admin/portraits")}
        className="mb-4 text-sm text-[var(--color-admin-muted)] hover:text-[var(--color-admin-text)]"
      >
        ← Back to portraits
      </button>

      <h1 className="mb-6 text-2xl font-bold text-[var(--color-admin-text)]">
        Edit: {portrait.name}
      </h1>

      {/* Image upload */}
      <div className="admin-card mb-6">
        <label className="mb-3 block text-xs font-semibold uppercase tracking-wider text-[var(--color-admin-muted)]">
          Portrait photo
        </label>
        <div className="flex items-start gap-4">
          <div
            className="h-28 w-28 shrink-0 overflow-hidden"
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
            <label className="admin-btn-primary inline-flex cursor-pointer items-center gap-2">
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
              <p className="mt-2 max-w-xs truncate text-xs text-[var(--color-admin-muted)]">
                {portrait.image}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Form fields */}
      <div className="admin-card space-y-4">
        <AdminField label="Name" value={portrait.name} onChange={(v) => updateField("name", v)} />
        <AdminField label="Age" value={String(portrait.age)} onChange={(v) => updateField("age", v)} />
        <div className="grid grid-cols-2 gap-4">
          <AdminField label="Location" value={portrait.location} onChange={(v) => updateField("location", v)} />
          <AdminField label="State" value={portrait.state} onChange={(v) => updateField("state", v)} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <AdminField label="Policy Area (slug)" value={portrait.policyArea} onChange={(v) => updateField("policyArea", v)} />
          <AdminField label="Policy Label" value={portrait.policyLabel} onChange={(v) => updateField("policyLabel", v)} />
        </div>
        <AdminField label="Card Colour" value={portrait.cardColour} onChange={(v) => updateField("cardColour", v)} />
        <AdminTextArea label="Quote" value={portrait.quote} onChange={(v) => updateField("quote", v)} rows={3} />
        <AdminTextArea label="Summary" value={portrait.summary} onChange={(v) => updateField("summary", v)} rows={4} />
      </div>

      {/* Save */}
      <div className="mt-5 flex items-center gap-3">
        <button onClick={handleSave} disabled={saving} className="admin-btn-primary">
          {saving ? "Saving..." : "Save changes"}
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

function AdminField({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[var(--color-admin-muted)]">
        {label}
      </span>
      <input type="text" value={value} onChange={(e) => onChange(e.target.value)} className="w-full" />
    </label>
  );
}

function AdminTextArea({ label, value, onChange, rows = 3 }: { label: string; value: string; onChange: (v: string) => void; rows?: number }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[var(--color-admin-muted)]">
        {label}
      </span>
      <textarea value={value} onChange={(e) => onChange(e.target.value)} rows={rows} className="w-full" />
    </label>
  );
}
