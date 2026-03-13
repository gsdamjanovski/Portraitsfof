import Link from "next/link";

interface CTABarProps {
  heading: string;
  description?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTABar({
  heading,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTABarProps) {
  return (
    <section className="bg-black">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-6 px-12 py-16 text-center lg:px-[120px]">
        <h2 className="heading-h2 !text-white">{heading}</h2>
        {description && (
          <p className="max-w-lg text-sm text-white/60">{description}</p>
        )}
        <div className="flex gap-4">
          <Link
            href={primaryHref}
            className="inline-flex items-center gap-2 bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-gray-light"
          >
            {primaryLabel}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className="inline-flex items-center gap-2 border border-white/30 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/60"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
