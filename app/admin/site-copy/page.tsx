"use client";

import { useEffect, useState } from "react";
import type { SiteCopy } from "@/lib/types";

export default function SiteCopyAdmin() {
  const [copy, setCopy] = useState<SiteCopy | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/admin/site-copy")
      .then((r) => r.json())
      .then((data) => {
        setCopy(data);
        setLoading(false);
      });
  }, []);

  const handleSave = async () => {
    if (!copy) return;
    setSaving(true);
    setMessage("");
    try {
      await fetch("/api/admin/site-copy", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(copy),
      });
      setMessage("Saved successfully");
      setTimeout(() => setMessage(""), 3000);
    } catch {
      setMessage("Save failed");
    } finally {
      setSaving(false);
    }
  };

  if (loading || !copy) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-copper border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="mb-6 font-serif text-2xl text-charcoal">Site Copy</h1>

      {/* Hero section */}
      <Section title="Hero">
        <Field
          label="Collection Label"
          value={copy.hero.collectionLabel}
          onChange={(v) =>
            setCopy({ ...copy, hero: { ...copy.hero, collectionLabel: v } })
          }
        />
        <Field
          label="Headline Line 1"
          value={copy.hero.headline1}
          onChange={(v) =>
            setCopy({ ...copy, hero: { ...copy.hero, headline1: v } })
          }
        />
        <Field
          label="Headline Line 2"
          value={copy.hero.headline2}
          onChange={(v) =>
            setCopy({ ...copy, hero: { ...copy.hero, headline2: v } })
          }
        />
        <TextArea
          label="Subtext"
          value={copy.hero.subtext}
          onChange={(v) =>
            setCopy({ ...copy, hero: { ...copy.hero, subtext: v } })
          }
        />
        <div className="grid grid-cols-2 gap-3">
          <Field
            label="CTA Button 1"
            value={copy.hero.cta1}
            onChange={(v) =>
              setCopy({ ...copy, hero: { ...copy.hero, cta1: v } })
            }
          />
          <Field
            label="CTA Button 2"
            value={copy.hero.cta2}
            onChange={(v) =>
              setCopy({ ...copy, hero: { ...copy.hero, cta2: v } })
            }
          />
        </div>
      </Section>

      {/* Stats */}
      <Section title="Stats Bar">
        {copy.stats.map((stat, i) => (
          <div key={i} className="grid grid-cols-2 gap-3">
            <Field
              label={`Stat ${i + 1} Number`}
              value={stat.number}
              onChange={(v) => {
                const stats = [...copy.stats];
                stats[i] = { ...stats[i], number: v };
                setCopy({ ...copy, stats });
              }}
            />
            <Field
              label={`Stat ${i + 1} Label`}
              value={stat.label}
              onChange={(v) => {
                const stats = [...copy.stats];
                stats[i] = { ...stats[i], label: v };
                setCopy({ ...copy, stats });
              }}
            />
          </div>
        ))}
      </Section>

      {/* In Their Words */}
      <Section title="In Their Words">
        {copy.inTheirWords.paragraphs.map((p, i) => (
          <TextArea
            key={i}
            label={`Paragraph ${i + 1} (HTML allowed)`}
            value={p}
            onChange={(v) => {
              const paragraphs = [...copy.inTheirWords.paragraphs];
              paragraphs[i] = v;
              setCopy({
                ...copy,
                inTheirWords: { ...copy.inTheirWords, paragraphs },
              });
            }}
            rows={3}
          />
        ))}
      </Section>

      {/* Team */}
      <Section title="Team Section">
        <TextArea
          label="Section Heading"
          value={copy.team.heading}
          onChange={(v) =>
            setCopy({ ...copy, team: { ...copy.team, heading: v } })
          }
        />
        <Field
          label="Team Card Heading"
          value={copy.team.teamCardHeading}
          onChange={(v) =>
            setCopy({ ...copy, team: { ...copy.team, teamCardHeading: v } })
          }
        />
        <TextArea
          label="Team Card Body"
          value={copy.team.teamCardBody}
          onChange={(v) =>
            setCopy({ ...copy, team: { ...copy.team, teamCardBody: v } })
          }
          rows={4}
        />
        {copy.team.teamMembers.map((name, i) => (
          <Field
            key={i}
            label={`Team Member ${i + 1}`}
            value={name}
            onChange={(v) => {
              const teamMembers = [...copy.team.teamMembers];
              teamMembers[i] = v;
              setCopy({ ...copy, team: { ...copy.team, teamMembers } });
            }}
          />
        ))}
        <Field
          label="Extra Contributors"
          value={copy.team.extraContributors}
          onChange={(v) =>
            setCopy({ ...copy, team: { ...copy.team, extraContributors: v } })
          }
        />
        <Field
          label="VicHealth Heading"
          value={copy.team.vicHealthHeading}
          onChange={(v) =>
            setCopy({ ...copy, team: { ...copy.team, vicHealthHeading: v } })
          }
        />
        <TextArea
          label="VicHealth Body 1"
          value={copy.team.vicHealthBody1}
          onChange={(v) =>
            setCopy({ ...copy, team: { ...copy.team, vicHealthBody1: v } })
          }
          rows={3}
        />
        <TextArea
          label="VicHealth Body 2"
          value={copy.team.vicHealthBody2}
          onChange={(v) =>
            setCopy({ ...copy, team: { ...copy.team, vicHealthBody2: v } })
          }
          rows={3}
        />
      </Section>

      {/* Save */}
      <div className="mt-5 flex items-center gap-3 pb-10">
        <button
          onClick={handleSave}
          disabled={saving}
          className="rounded-sm bg-copper px-5 py-2.5 font-sans text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {saving ? "Saving..." : "Save all changes"}
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

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6 rounded-md border border-muted/20 bg-white p-5">
      <h2 className="mb-4 font-serif text-lg text-charcoal">{title}</h2>
      <div className="space-y-3">{children}</div>
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
        className="w-full rounded-sm border border-muted/30 bg-cream/40 px-3 py-2 font-sans text-sm text-charcoal outline-none focus:border-copper"
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
        className="w-full rounded-sm border border-muted/30 bg-cream/40 px-3 py-2 font-sans text-sm text-charcoal outline-none focus:border-copper"
      />
    </label>
  );
}
