import Link from "next/link";

const footerColumns = [
  {
    title: "COLLECTION",
    links: [
      { label: "The portraits", href: "#portraits" },
      { label: "Methodology", href: "#methodology" },
      { label: "Download", href: "#" },
    ],
  },
  {
    title: "PROJECT",
    links: [
      { label: "About", href: "#about" },
      { label: "The team", href: "#about" },
      { label: "The Lab", href: "#lab" },
    ],
  },
  {
    title: "ORGANISATION",
    links: [
      { label: "Foundations for Tomorrow", href: "#" },
      { label: "VicHealth", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer>
      {/* Accent bar */}
      <div className="h-1 bg-teal" />

      <div className="bg-charcoal py-12 md:py-16">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-6 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo + description */}
          <div className="lg:col-span-2">
            <Link href="/" className="font-serif text-lg">
              <span className="text-white">Portraits of </span>
              <span className="text-copper">Our Future</span>
            </Link>
            <p className="mt-4 max-w-sm font-sans text-sm leading-relaxed text-muted/70">
              An editorial collection exploring fifteen Australians and the
              policy areas shaping their futures. A Foundations for Tomorrow
              project supported by VicHealth.
            </p>
            <p className="mt-6 font-sans text-xs text-muted/50">
              &copy; 2025 Foundations for Tomorrow
            </p>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-muted/50">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-sans text-sm text-muted/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom supported-by */}
        <div className="mx-auto mt-12 max-w-[1200px] border-t border-white/5 px-6 pt-6">
          <p className="text-right font-sans text-xs text-muted/40">
            Supported by VicHealth
          </p>
        </div>
      </div>
    </footer>
  );
}
