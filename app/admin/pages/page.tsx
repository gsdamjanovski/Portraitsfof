"use client";

import { useState } from "react";
import Link from "next/link";

interface PageSection {
  id: string;
  label: string;
  enabled: boolean;
}

interface SitePage {
  id: string;
  title: string;
  path: string;
  sections: PageSection[];
}

const sitePages: SitePage[] = [
  {
    id: "home",
    title: "Home",
    path: "/",
    sections: [
      { id: "hero-carousel", label: "Hero Carousel", enabled: true },
      { id: "rotating-quotes", label: "Rotating Quotes", enabled: true },
      { id: "portraits-carousel", label: "Portraits Carousel", enabled: true },
      { id: "where-to-start", label: "Where to Start", enabled: true },
      { id: "team-teaser", label: "Team Teaser", enabled: true },
      { id: "vichealth", label: "VicHealth", enabled: true },
      { id: "footer", label: "Footer", enabled: true },
    ],
  },
  {
    id: "the-project",
    title: "The Project",
    path: "/the-project",
    sections: [
      { id: "hero", label: "Hero", enabled: true },
      { id: "starting-point", label: "The Starting Point", enabled: true },
      { id: "the-case", label: "The Case", enabled: true },
      { id: "the-collection", label: "The Collection", enabled: true },
      { id: "why-stories", label: "Why Stories", enabled: true },
      { id: "the-lab", label: "The Lab", enabled: true },
      { id: "partners", label: "Partner Organisations", enabled: true },
    ],
  },
  {
    id: "the-method",
    title: "The Method",
    path: "/the-method",
    sections: [
      { id: "hero", label: "Hero", enabled: true },
      { id: "download-banner", label: "Download Banner", enabled: true },
      { id: "fgsa-intro", label: "FGSA Intro", enabled: true },
      { id: "stages", label: "Four Stages", enabled: true },
      { id: "downloads", label: "Downloads", enabled: true },
    ],
  },
  {
    id: "the-team",
    title: "The Team",
    path: "/the-team",
    sections: [
      { id: "hero", label: "Hero", enabled: true },
      { id: "leadership", label: "Project Leadership", enabled: true },
      { id: "photography", label: "Photography", enabled: true },
      { id: "research", label: "Research", enabled: true },
      { id: "contributors", label: "Expert Contributors", enabled: true },
      { id: "participants", label: "Participants", enabled: true },
    ],
  },
  {
    id: "the-portraits",
    title: "The Portraits",
    path: "/the-portraits",
    sections: [
      { id: "hero", label: "Hero", enabled: true },
      { id: "filter-bar", label: "Filter Bar", enabled: true },
      { id: "portraits-grid", label: "Portraits Grid", enabled: true },
    ],
  },
];

export default function PagesAdmin() {
  const [expandedPage, setExpandedPage] = useState<string | null>("home");
  const [pages, setPages] = useState(sitePages);

  const toggleExpand = (pageId: string) => {
    setExpandedPage((prev) => (prev === pageId ? null : pageId));
  };

  const toggleSection = (pageId: string, sectionId: string) => {
    setPages((prev) =>
      prev.map((page) =>
        page.id === pageId
          ? {
              ...page,
              sections: page.sections.map((s) =>
                s.id === sectionId ? { ...s, enabled: !s.enabled } : s
              ),
            }
          : page
      )
    );
  };

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-[40px] font-bold leading-tight text-[var(--color-admin-text)]">
            Pages &amp; Content
          </h1>
          <p className="mt-1 text-sm text-[var(--color-admin-muted)]">
            Manage page sections and content structure
          </p>
        </div>
        <Link
          href="/"
          target="_blank"
          className="admin-btn-secondary flex items-center gap-2"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
          Preview Site
        </Link>
      </div>

      {/* Page list */}
      <div className="space-y-2">
        {pages.map((page) => {
          const isExpanded = expandedPage === page.id;
          return (
            <div key={page.id} className="border border-[var(--color-admin-border)] bg-white">
              {/* Page header row */}
              <button
                onClick={() => toggleExpand(page.id)}
                className="flex w-full items-center gap-4 px-6 py-4 text-left transition-colors hover:bg-[var(--color-admin-bg)]"
              >
                {/* Expand chevron */}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`shrink-0 text-[var(--color-admin-muted)] transition-transform ${
                    isExpanded ? "rotate-90" : ""
                  }`}
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>

                {/* Page icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="shrink-0 text-[var(--color-admin-muted)]">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>

                <div className="flex-1">
                  <span className="text-sm font-semibold text-[var(--color-admin-text)]">
                    {page.title}
                  </span>
                  <span className="ml-3 text-xs text-[var(--color-admin-muted)]">
                    {page.path}
                  </span>
                </div>

                <span className="text-xs text-[var(--color-admin-muted)]">
                  {page.sections.length} sections
                </span>
              </button>

              {/* Expanded sections */}
              {isExpanded && (
                <div className="border-t border-[var(--color-admin-border)]">
                  {page.sections.map((section, idx) => (
                    <div
                      key={section.id}
                      className={`flex items-center gap-4 px-6 py-3 ${
                        idx < page.sections.length - 1
                          ? "border-b border-[var(--color-admin-border)]"
                          : ""
                      }`}
                    >
                      {/* Drag grip */}
                      <svg width="12" height="12" viewBox="0 0 12 12" className="shrink-0 cursor-grab text-[var(--color-admin-muted)]">
                        <circle cx="3" cy="2" r="1" fill="currentColor" />
                        <circle cx="9" cy="2" r="1" fill="currentColor" />
                        <circle cx="3" cy="6" r="1" fill="currentColor" />
                        <circle cx="9" cy="6" r="1" fill="currentColor" />
                        <circle cx="3" cy="10" r="1" fill="currentColor" />
                        <circle cx="9" cy="10" r="1" fill="currentColor" />
                      </svg>

                      {/* Section name */}
                      <span className="flex-1 pl-6 text-sm text-[var(--color-admin-text)]">
                        {section.label}
                      </span>

                      {/* Toggle */}
                      <button
                        onClick={() => toggleSection(page.id, section.id)}
                        className={`relative h-5 w-9 rounded-full transition-colors ${
                          section.enabled ? "bg-[var(--color-admin-red)]" : "bg-[#D9D9D9]"
                        }`}
                      >
                        <span
                          className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition-transform ${
                            section.enabled ? "left-[18px]" : "left-0.5"
                          }`}
                        />
                      </button>

                      {/* Edit button */}
                      <Link
                        href={`/admin/site-copy`}
                        className="text-xs font-medium text-[var(--color-admin-muted)] hover:text-[var(--color-admin-red)]"
                      >
                        Edit →
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
