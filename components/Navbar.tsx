"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "PORTRAITS", href: "#portraits" },
  { label: "ABOUT", href: "#about" },
  { label: "METHODOLOGY", href: "#methodology" },
  { label: "THE LAB", href: "#lab" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-muted/20 bg-white">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="font-serif text-lg leading-tight">
          <span className="text-charcoal">Portraits of </span>
          <span className="text-copper">Our Future</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans text-[0.7rem] font-medium uppercase tracking-[0.12em] text-charcoal/70 transition-colors hover:text-copper"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#portraits"
            className="rounded-sm bg-copper px-5 py-2.5 font-sans text-[0.7rem] font-medium uppercase tracking-wider text-white transition-colors hover:bg-copper/85"
          >
            Read the collection
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span
            className={`block h-0.5 w-6 bg-charcoal transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-charcoal transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-charcoal transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden border-t border-muted/20 bg-white transition-all lg:hidden ${
          open ? "max-h-96" : "max-h-0 border-t-0"
        }`}
      >
        <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-6 py-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-sans text-sm font-medium uppercase tracking-[0.12em] text-charcoal/70 transition-colors hover:text-copper"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#portraits"
            onClick={() => setOpen(false)}
            className="mt-2 inline-block rounded-sm bg-copper px-5 py-2.5 text-center font-sans text-sm font-medium uppercase tracking-wider text-white transition-colors hover:bg-copper/85"
          >
            Read the collection
          </a>
        </div>
      </div>
    </nav>
  );
}
