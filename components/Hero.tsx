"use client";

import { motion } from "framer-motion";
import SectionLabel from "./ui/SectionLabel";
import Button from "./ui/Button";
import StatsBar from "./StatsBar";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-charcoal">
      {/* Subtle textured overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-copper/10" />

      <div className="relative mx-auto max-w-[1200px] px-6 pb-0 pt-20 md:pt-28 lg:pt-32">
        <div className="max-w-2xl">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <SectionLabel light>
              A Foundations for Tomorrow Collection
            </SectionLabel>
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6 font-serif text-4xl leading-tight text-white md:text-5xl lg:text-[3.5rem]"
          >
            Fifteen Australians.
          </motion.h1>

          <motion.h1
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-serif text-4xl leading-tight text-muted italic md:text-5xl lg:text-[3.5rem]"
          >
            Fifteen futures in the balance.
          </motion.h1>

          <motion.p
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6 max-w-lg font-sans text-base leading-relaxed text-muted/90 md:text-lg"
          >
            Behind every long-term policy failure is a person who felt it first.
            This is their collection.
          </motion.p>

          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button href="#portraits">Explore the portraits &rarr;</Button>
            <Button href="#collection" variant="secondary">
              &darr; Read the full collection
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <StatsBar />
      </motion.div>
    </section>
  );
}
