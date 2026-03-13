"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const slides = [
  "/images/hero-1.jpg",
  "/images/hero-2.jpg",
  "/images/hero-3.jpg",
  "/images/hero-4.jpg",
  "/images/hero-5.jpg",
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-[700px] w-full overflow-hidden bg-black">
      {/* Background slides */}
      {slides.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col items-center justify-center px-12 text-center">
        <p className="eyebrow !text-muted tracking-[2px] mb-6">
          A Foundations for Tomorrow collection
        </p>
        <h1 className="heading-display !text-white max-w-[800px]">
          Fifteen Australians.
          <br />
          Fifteen futures in the balance.
        </h1>
        <p className="mt-8 max-w-[700px] text-lg leading-relaxed text-muted">
          Behind every long-term policy failure is a person who felt it first. This is their collection.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex items-center gap-4">
          <Link
            href="/the-portraits"
            className="bg-white px-7 py-3 text-sm font-medium text-black transition-colors hover:bg-gray-light"
          >
            Explore the portraits →
          </Link>
          <Link
            href="#portraits"
            className="border border-[#666] px-7 py-3 text-sm text-subtle transition-colors hover:border-white/60 hover:text-white"
          >
            ↓ Read the full collection
          </Link>
        </div>

        {/* Carousel dots */}
        <div className="mt-12 flex items-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                i === current ? "bg-white" : "bg-white/25"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-[#333]">
        <div className="mx-auto flex max-w-[1440px] items-center justify-center gap-12 py-6">
          {[
            "15 Australians",
            "15 Policy areas",
            "8 States & territories",
            "Ages 9–76",
          ].map((stat, i, arr) => (
            <span key={stat} className="flex items-center gap-12">
              <span className="font-[var(--font-heading)] text-base font-bold text-subtle">
                {stat}
              </span>
              {i < arr.length - 1 && (
                <span className="text-base text-[#444]">·</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
