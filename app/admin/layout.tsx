"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { label: "Dashboard", href: "/admin" },
  { label: "Portraits", href: "/admin/portraits" },
  { label: "Quotes", href: "/admin/quotes" },
  { label: "Site Copy", href: "/admin/site-copy" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/admin/auth", { method: "DELETE" });
    router.push("/admin/login");
  };

  return (
    <div className="flex min-h-screen bg-cream">
      {/* Sidebar */}
      <aside className="w-56 shrink-0 border-r border-muted/20 bg-white">
        <div className="px-5 py-6">
          <Link href="/" className="font-serif text-base">
            <span className="text-charcoal">Portraits of </span>
            <span className="text-copper">Our Future</span>
          </Link>
          <p className="mt-1 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-copper">
            Admin
          </p>
        </div>

        <nav className="mt-2 px-3">
          {navItems.map((item) => {
            const isActive =
              item.href === "/admin"
                ? pathname === "/admin"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`mb-1 block rounded-sm px-3 py-2 font-sans text-sm transition-colors ${
                  isActive
                    ? "bg-copper/10 font-medium text-copper"
                    : "text-charcoal/60 hover:bg-cream hover:text-charcoal"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto border-t border-muted/20 px-3 py-4">
          <button
            onClick={handleLogout}
            className="w-full rounded-sm px-3 py-2 text-left font-sans text-sm text-muted transition-colors hover:text-charcoal"
          >
            Sign out
          </button>
          <Link
            href="/"
            className="mt-1 block rounded-sm px-3 py-2 font-sans text-sm text-muted transition-colors hover:text-charcoal"
          >
            View site &rarr;
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto p-8">{children}</main>
    </div>
  );
}
