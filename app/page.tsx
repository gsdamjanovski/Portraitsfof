import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroCarousel from "@/components/home/HeroCarousel";
import QuoteRotator from "@/components/home/QuoteRotator";
import PortraitCard from "@/components/portraits/PortraitCard";
import { getPortraits, getQuotes, getSiteCopy } from "@/lib/data";

const policyTags = [
  "Arts & culture",
  "Agriculture & succession",
  "AI & education",
  "Disaster management",
  "Aged care",
  "Marine conservation",
  "Circular economy",
  "Vocational education",
  "Indigenous knowledge",
  "Energy transition",
  "Cyber security",
  "Local democracy",
  "Digital wellbeing",
  "Pacific migration",
  "Justice",
];

export default async function Home() {
  const [portraits, quotes, siteCopy] = await Promise.all([
    getPortraits(),
    getQuotes(),
    getSiteCopy(),
  ]);

  const row1 = portraits.slice(0, 5);
  const row2 = portraits.slice(5, 10);

  return (
    <main>
      <Navbar />

      {/* ── Hero ── */}
      <HeroCarousel />

      {/* ── Quotes Section ── */}
      <section className="section-white">
        <div className="mx-auto flex max-w-[1440px] flex-col lg:flex-row">
          {/* Left: rotating quote */}
          <div className="flex-1">
            <QuoteRotator quotes={quotes} />
          </div>

          {/* Vertical divider */}
          <div className="hidden w-px bg-[#F0F0F0] lg:block" />

          {/* Right: context text */}
          <div className="flex w-full flex-col justify-center gap-8 p-12 lg:w-[420px] lg:p-16">
            <h3 className="heading-h2">In their words</h3>
            <div className="space-y-4 text-sm leading-[1.7] text-body">
              <p>
                These are not abstract policy challenges. Housing. Aged care. The
                justice system. The energy transition. The digital lives of
                children. They are the conditions shaping real Australian lives
                right now and for decades to come.
              </p>
              <p>
                Each portrait in this collection pairs a real life with a
                deep-dive analysis of the policy area shaping it. Together, they
                make the case for governance that takes seriously the interests
                of both current and future generations.
              </p>
            </div>
            <Link
              href="/the-project"
              className="text-sm font-medium text-black hover:opacity-70 transition-opacity"
            >
              About the project →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Portraits Carousel ── */}
      <section id="portraits" className="section-white section-gap">
        <div className="mx-auto max-w-[1440px] px-12 lg:px-20">
          {/* Header */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow mb-3">The portraits</p>
              <h2 className="font-[var(--font-heading)] text-4xl font-bold tracking-tight text-black">
                Fifteen Australians. Fifteen policy areas.
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/the-portraits"
                className="flex h-12 items-center border border-black px-5 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white"
              >
                All portraits →
              </Link>
            </div>
          </div>

          {/* Cards row 1 */}
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {row1.map((p) => (
              <PortraitCard key={p.id} portrait={p} />
            ))}
          </div>

          {/* Cards row 2 */}
          <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {row2.map((p) => (
              <PortraitCard key={p.id} portrait={p} />
            ))}
          </div>

          {/* Policy tags */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 pt-6">
            {policyTags.map((tag, i) => (
              <span key={tag} className="flex items-center gap-2">
                <span className="text-[11px] text-subtle">{tag}</span>
                {i < policyTags.length - 1 && (
                  <span className="text-[11px] text-border">·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Where To Start / Recommender ── */}
      <section className="section-dark">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-20 px-12 py-24 lg:flex-row lg:px-20">
          {/* Left text */}
          <div className="flex flex-1 flex-col justify-center gap-6">
            <p className="eyebrow !text-muted">Not sure where to begin?</p>
            <h2 className="font-[var(--font-heading)] text-4xl font-bold text-white tracking-tight lg:text-[44px]">
              Find your starting portraits.
            </h2>
            <p className="text-base leading-relaxed text-muted">
              Fifteen portraits cover a lot of ground. Answer three quick
              questions — where you live, whose perspective you want to
              understand, and what issue feels most urgent right now — and
              we&apos;ll suggest three portraits matched to your answers.
            </p>
          </div>

          {/* Right embed placeholder */}
          <div className="flex flex-1 flex-col items-center justify-center gap-6 bg-[#111] p-10">
            <h3 className="font-[var(--font-heading)] text-2xl font-bold text-white">
              Portrait Recommender
            </h3>
            <p className="max-w-[300px] text-center text-sm text-body">
              Answer 3 quick questions to find your starting portraits
            </p>
            <Link
              href="/the-portraits"
              className="bg-white px-8 py-4 text-sm font-medium text-black transition-colors hover:bg-gray-light"
            >
              Begin →
            </Link>
            <div className="flex gap-2">
              <span className="h-2 w-2 rounded-full bg-white" />
              <span className="h-2 w-2 rounded-full bg-[#333]" />
              <span className="h-2 w-2 rounded-full bg-[#333]" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Team Teaser ── */}
      <section className="section-gray section-gap">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-8 px-12 text-center lg:px-20">
          <p className="eyebrow">The people behind this work</p>
          <h2 className="max-w-[800px] font-[var(--font-heading)] text-4xl font-bold tracking-tight text-black">
            Researchers, writers, photographers, and fifteen Australians who gave
            their time.
          </h2>
          <Link
            href="/the-team"
            className="mt-4 border border-black px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white"
          >
            Meet the Team →
          </Link>
        </div>
      </section>

      {/* ── VicHealth ── */}
      <section className="section-white section-gap">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-6 px-12 text-center lg:px-[120px]">
          <p className="eyebrow">Principal supporter</p>
          <h2 className="max-w-[700px] font-[var(--font-heading)] text-4xl font-bold tracking-tight text-black">
            Made possible through the support of VicHealth.
          </h2>
          <p className="max-w-[700px] text-base leading-relaxed text-body">
            VicHealth&apos;s commitment to wellbeing, equity, and systems change
            provided the foundation for this collection — enabling the deep
            engagement with fifteen Australians that makes this work possible.
          </p>
          <Link
            href="https://www.vichealth.vic.gov.au"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 bg-black px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-black/80"
          >
            Visit VicHealth →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
