import Link from "next/link";

const footerLinks = {
  about: [
    { href: "/the-project", label: "The Project" },
    { href: "/the-method", label: "The Method" },
    { href: "/the-team", label: "The Team" },
  ],
  collection: [
    { href: "/the-portraits", label: "All Portraits" },
  ],
  connect: [
    { href: "#", label: "Contact" },
    { href: "#", label: "Newsletter" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-[1440px] px-12 lg:px-[120px]">
        {/* Main footer */}
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-4">
          {/* Brand */}
          <div>
            <p className="font-[var(--font-heading)] text-base font-bold tracking-tight">
              Portraits of Our Future
            </p>
            <p className="mt-4 text-sm text-subtle leading-relaxed">
              An editorial collection by Foundations for Tomorrow, in partnership with VicHealth.
            </p>
          </div>

          {/* About */}
          <div>
            <p className="eyebrow text-subtle mb-4">About</p>
            {footerLinks.about.map((l) => (
              <Link key={l.href} href={l.href} className="block py-1 text-sm text-white/70 hover:text-white transition-colors">
                {l.label}
              </Link>
            ))}
          </div>

          {/* Collection */}
          <div>
            <p className="eyebrow text-subtle mb-4">Collection</p>
            {footerLinks.collection.map((l) => (
              <Link key={l.href} href={l.href} className="block py-1 text-sm text-white/70 hover:text-white transition-colors">
                {l.label}
              </Link>
            ))}
          </div>

          {/* Connect */}
          <div>
            <p className="eyebrow text-subtle mb-4">Connect</p>
            {footerLinks.connect.map((l) => (
              <Link key={l.href} href={l.href} className="block py-1 text-sm text-white/70 hover:text-white transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Legal bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-xs text-white/40 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Foundations for Tomorrow. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white/60 transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
