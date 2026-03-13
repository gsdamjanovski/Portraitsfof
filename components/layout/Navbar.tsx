"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const aboutLinks = [
  { href: "/the-project", label: "The Project" },
  { href: "/the-method", label: "The Method" },
  { href: "/the-team", label: "The Team" },
];

const collectionLinks = [
  { href: "/the-portraits", label: "All Portraits" },
];

function Dropdown({
  links,
  open,
  onClose,
}: {
  links: { href: string; label: string }[];
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;
  return (
    <div className="absolute top-full left-0 bg-white py-5 px-5 shadow-none border border-divider min-w-[180px]">
      {links.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          onClick={onClose}
          className="block py-1.5 text-sm font-[var(--font-body)] text-black hover:text-muted transition-colors"
        >
          {l.label}
        </Link>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [collOpen, setCollOpen] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  const collRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (aboutRef.current && !aboutRef.current.contains(e.target as Node)) setAboutOpen(false);
      if (collRef.current && !collRef.current.contains(e.target as Node)) setCollOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const textColor = scrolled ? "text-black" : "text-white";
  const bgClass = scrolled ? "bg-white border-b border-divider" : "bg-transparent";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgClass}`}>
      <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between px-12">
        {/* Logo */}
        <Link href="/" className={`font-[var(--font-heading)] text-base font-bold ${textColor} tracking-tight`}>
          Portraits of Our Future
        </Link>

        {/* Center nav */}
        <div className="flex items-center gap-8">
          <Link href="/" className={`text-sm ${textColor} hover:opacity-70 transition-opacity`}>
            Home
          </Link>

          {/* About dropdown */}
          <div ref={aboutRef} className="relative">
            <button
              onClick={() => { setAboutOpen(!aboutOpen); setCollOpen(false); }}
              className={`flex items-center gap-1.5 text-sm ${textColor} hover:opacity-70 transition-opacity`}
            >
              About
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <Dropdown links={aboutLinks} open={aboutOpen} onClose={() => setAboutOpen(false)} />
          </div>

          {/* Collection dropdown */}
          <div ref={collRef} className="relative">
            <button
              onClick={() => { setCollOpen(!collOpen); setAboutOpen(false); }}
              className={`flex items-center gap-1.5 text-sm ${textColor} hover:opacity-70 transition-opacity`}
            >
              The Collection
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <Dropdown links={collectionLinks} open={collOpen} onClose={() => setCollOpen(false)} />
          </div>
        </div>

        {/* Search icon */}
        <button className={`${textColor} hover:opacity-70 transition-opacity`} aria-label="Search">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
