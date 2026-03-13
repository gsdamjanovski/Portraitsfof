import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import CTABar from "@/components/sections/CTABar";

export const metadata = {
  title: "The Project — Portraits of Our Future",
  description: "Why this collection exists. An editorial project by Foundations for Tomorrow.",
};

export default function TheProjectPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <HeroSection height="h-[500px]">
        <div className="max-w-xl">
          <p className="eyebrow !text-muted mb-4">The project</p>
          <h1 className="heading-display !text-white">
            Why this collection exists.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            A long-read editorial project exploring fifteen Australians at the
            intersection of lived experience and long-term policy.
          </p>
        </div>
      </HeroSection>

      {/* Sub nav */}
      <div className="section-white border-b border-divider">
        <div className="mx-auto flex max-w-[1440px] items-center justify-center gap-8 px-[120px] py-4">
          {["The Starting Point", "The Case", "The Collection", "Why Stories", "The Lab"].map((item) => (
            <span key={item} className="text-sm text-muted hover:text-black transition-colors cursor-pointer">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* The Starting Point */}
      <section className="section-white section-gap">
        <div className="mx-auto max-w-[1440px] px-12 lg:px-[120px]">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">The starting point</p>
            <h2 className="heading-h2">
              Australia&apos;s public policy system is not designed for the long term.
            </h2>
            <div className="mt-8 space-y-4 text-body leading-relaxed">
              <p>
                Three-year election cycles, siloed departments, and a media
                landscape optimised for urgency have created a system that
                struggles to see beyond the next headline. The result is a growing
                gap between the challenges Australians face and the institutional
                capacity to respond.
              </p>
              <p>
                This project was born from a simple question: what happens when
                you put fifteen real lives at the centre of fifteen policy areas
                that have been treated as abstract for too long?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Case We're Making */}
      <section className="section-gray section-gap">
        <div className="mx-auto max-w-[1440px] px-12 lg:px-[120px]">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">The case we&apos;re making</p>
            <h2 className="heading-h2">
              Policy should be accountable to the people it affects — including
              those who haven&apos;t been born yet.
            </h2>
            <div className="mt-8 space-y-4 text-body leading-relaxed">
              <p>
                The fifteen people in this collection are not spokespeople.
                They&apos;re not advocates or lobbyists. They are ordinary
                Australians whose lives intersect with policy areas that will
                define the next thirty years.
              </p>
              <p>
                By pairing their stories with rigorous policy analysis, this
                collection makes the case that governance should be judged not
                just by what it delivers today, but by the futures it protects
                or forecloses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Collection */}
      <section className="section-white section-gap">
        <div className="mx-auto max-w-[1440px] px-12 lg:px-[120px]">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">The collection</p>
            <h2 className="heading-h2">
              Fifteen portraits. Fifteen deep-dive analyses.
            </h2>
            <div className="mt-8 space-y-4 text-body leading-relaxed">
              <p>
                Each portrait is a self-contained piece of longform editorial
                that weaves together the lived experience of one Australian with a
                systems-level analysis of the policy area shaping their life.
              </p>
              <p>
                Together, they form a collection that can be read sequentially,
                sampled by policy area, or explored through our portrait
                recommender.
              </p>
            </div>
            <Link
              href="/the-portraits"
              className="mt-8 inline-block text-sm font-medium text-black hover:opacity-70 transition-opacity"
            >
              Explore the portraits →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Stories Matter */}
      <section className="section-gray section-gap">
        <div className="mx-auto max-w-[1440px] px-12 lg:px-[120px]">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Why stories</p>
            <h2 className="heading-h2">
              Data tells you what&apos;s happening. Stories tell you what it means.
            </h2>
            <div className="mt-8 space-y-4 text-body leading-relaxed">
              <p>
                Narrative is not a substitute for evidence — it is a form of it.
                Stories contextualise data, reveal complexity, and create the
                conditions for empathy across difference.
              </p>
              <p>
                Each portrait in this collection has been developed using the
                Futures-Grounded Storytelling Approach (FGSA) — a narrative
                methodology created specifically for this project that pairs
                participatory storytelling with systems-level analysis.
              </p>
            </div>
            <Link
              href="/the-method"
              className="mt-8 inline-block text-sm font-medium text-black hover:opacity-70 transition-opacity"
            >
              Read about the method →
            </Link>
          </div>
        </div>
      </section>

      {/* The Lab */}
      <section className="section-dark section-gap">
        <div className="mx-auto max-w-[1440px] px-12 lg:px-[120px]">
          <div className="max-w-3xl">
            <p className="eyebrow !text-muted mb-4">The Lab</p>
            <h2 className="heading-h2 !text-white">
              A living research programme.
            </h2>
            <div className="mt-8 space-y-4 text-sm leading-relaxed text-white/60">
              <p>
                The Foundations for Tomorrow Lab is the research and editorial
                unit behind this collection. It operates as a distributed team
                of journalists, researchers, and documentary photographers
                working across Australia.
              </p>
              <p>
                The Lab&apos;s work sits at the intersection of public policy,
                futures thinking, and narrative practice — producing evidence
                that centres lived experience and challenges institutional
                short-termism.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Organisations */}
      <section className="section-gray section-gap">
        <div className="mx-auto max-w-[1440px] px-12 lg:px-[120px]">
          <p className="eyebrow mb-4">Partner organisations</p>
          <h2 className="heading-h2">
            Built in partnership with organisations committed to the long term.
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { name: "Foundations for Tomorrow", role: "Lead editorial and research partner" },
              { name: "VicHealth", role: "Principal supporter and public health partner" },
              { name: "Various universities", role: "Academic review and expert advisory" },
            ].map((org) => (
              <div key={org.name} className="border border-divider bg-white p-8">
                <h3 className="heading-h3">{org.name}</h3>
                <p className="mt-2 text-sm text-body">{org.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABar
        heading="Start exploring the portraits."
        description="Fifteen Australians. Fifteen policy areas. Fifteen futures in the balance."
        primaryLabel="View the collection"
        primaryHref="/the-portraits"
        secondaryLabel="Read about the method"
        secondaryHref="/the-method"
      />

      <Footer />
    </main>
  );
}
