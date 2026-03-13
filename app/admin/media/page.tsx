"use client";

export default function MediaLibrary() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[var(--color-admin-text)]">
          Media Library
        </h1>
        <p className="mt-1 text-sm text-[var(--color-admin-muted)]">
          Manage uploaded images and files
        </p>
      </div>

      <div className="admin-card flex flex-col items-center justify-center py-20 text-center">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="mb-4 text-[var(--color-admin-border)]">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
        <p className="text-sm font-semibold text-[var(--color-admin-text)]">
          Coming soon
        </p>
        <p className="mt-1 text-xs text-[var(--color-admin-muted)]">
          Media library will be available in a future update.
          <br />
          For now, upload images via the portrait editor.
        </p>
      </div>
    </div>
  );
}
