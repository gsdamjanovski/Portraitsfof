"use client";

import { motion } from "framer-motion";
import QuoteCarousel from "./QuoteCarousel";
import InTheirWords from "./InTheirWords";

export default function QuoteSection() {
  return (
    <section id="collection" className="overflow-hidden">
      <div className="grid lg:grid-cols-[55%_45%]">
        {/* Left — cream background with carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-cream px-6 py-16 md:px-12 md:py-24 lg:px-16"
        >
          <QuoteCarousel />
        </motion.div>

        {/* Right — white background with editorial text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-white px-6 py-16 md:px-12 md:py-24 lg:px-16"
        >
          <InTheirWords />
        </motion.div>
      </div>
    </section>
  );
}
