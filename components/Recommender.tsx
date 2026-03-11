"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { quizQuestions, getRecommendations } from "@/data/recommender";
import { portraits } from "@/data/portraits";
import SectionLabel from "./ui/SectionLabel";

export default function Recommender() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<string[] | null>(null);

  const handleSelect = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (step < quizQuestions.length - 1) {
      setStep(step + 1);
    } else {
      // Calculate results using perspective (q2) and issue (q3)
      const slugs = getRecommendations(newAnswers[1], newAnswers[2]);
      setResult(slugs);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
    setResult(null);
  };

  const recommendedPortraits = result
    ? result
        .map((slug) => portraits.find((p) => p.slug === slug))
        .filter(Boolean)
    : [];

  return (
    <section id="methodology" className="bg-charcoal py-16 md:py-24">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        {/* Left column */}
        <div className="flex flex-col justify-center">
          <SectionLabel light>Not sure where to begin?</SectionLabel>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-white md:text-4xl">
            Find your starting{" "}
            <span className="text-muted italic">portraits.</span>
          </h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-muted/80">
            Answer three quick questions and we&apos;ll recommend the portraits
            most relevant to you. No sign-up required.
          </p>
        </div>

        {/* Right column — quiz card */}
        <div className="rounded-sm border border-white/10 bg-white/5 p-6 md:p-8">
          <AnimatePresence mode="wait">
            {result ? (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-copper">
                  Your recommended portraits
                </p>
                <div className="mt-6 space-y-4">
                  {recommendedPortraits.map((p) =>
                    p ? (
                      <div
                        key={p.slug}
                        className="flex items-start gap-4 rounded-sm border border-white/10 bg-white/5 p-4"
                      >
                        <span className="font-serif text-2xl font-bold text-copper/60">
                          {String(p.id).padStart(2, "0")}
                        </span>
                        <div>
                          <h4 className="font-serif text-lg font-bold text-white">
                            {p.name}
                          </h4>
                          <p className="text-xs text-muted">
                            {p.location}, {p.state} &middot; {p.policyLabel}
                          </p>
                          <p className="mt-1 font-serif text-sm text-muted/70 italic">
                            &ldquo;{p.quote}&rdquo;
                          </p>
                        </div>
                      </div>
                    ) : null
                  )}
                </div>
                <button
                  onClick={reset}
                  className="mt-6 font-sans text-sm font-medium text-copper transition-colors hover:text-copper/80"
                >
                  &larr; Start again
                </button>
              </motion.div>
            ) : (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-copper">
                  {quizQuestions[step].question}
                </p>
                <div className="mt-6 space-y-3">
                  {quizQuestions[step].options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleSelect(option.value)}
                      className="flex w-full items-center gap-4 rounded-sm border border-white/10 px-4 py-3 text-left transition-colors hover:border-copper/50 hover:bg-white/5"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-muted/40 font-sans text-xs font-medium text-muted">
                        {option.letter}
                      </span>
                      <span className="font-sans text-sm text-white/90">
                        {option.label}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <p className="mt-6 font-sans text-xs text-muted/50">
            Takes about 60 seconds. No sign-up. Open the full recommender
            &rarr;
          </p>
        </div>
      </div>
    </section>
  );
}
