import SectionLabel from "./ui/SectionLabel";
import ScrollReveal from "./ui/ScrollReveal";

const teamMembers = [
  "Taylor Hawkins",
  "Fatima-Zahra Ma-el-ainin",
  "Samantha Lawrence",
];

export default function TeamSection() {
  return (
    <section id="about" className="bg-cream py-16 md:py-24">
      <ScrollReveal className="mx-auto max-w-[1200px] px-6">
        <SectionLabel>The People Behind This Work</SectionLabel>
        <h2 className="mt-4 max-w-3xl font-serif text-3xl leading-tight text-charcoal md:text-4xl">
          A project built by people who believe the future deserves better
          evidence.
        </h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Team card */}
          <div className="rounded-sm bg-white p-8 md:p-10">
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-copper">
              The Team
            </span>
            <h3 className="mt-3 font-serif text-2xl text-charcoal">
              Researchers, writers, and photographers working across the
              country.
            </h3>
            <p className="mt-4 font-sans text-sm leading-relaxed text-charcoal/70">
              This collection was produced by a distributed team of
              journalists, researchers, and documentary photographers led by
              the Foundations for Tomorrow editorial unit. Each portrait
              involved weeks of embedded reporting and participatory
              storytelling.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {teamMembers.map((name) => (
                <span
                  key={name}
                  className="rounded-full border border-muted/30 bg-cream/50 px-3 py-1 font-sans text-xs font-medium text-charcoal/70"
                >
                  {name}
                </span>
              ))}
              <span className="rounded-full border border-muted/30 bg-cream/50 px-3 py-1 font-sans text-xs font-medium text-muted">
                +14 contributors
              </span>
            </div>
            <a
              href="#about"
              className="mt-6 inline-flex items-center gap-1 font-sans text-sm font-medium text-copper transition-colors hover:text-copper/80"
            >
              Meet the full team &rarr;
            </a>
          </div>

          {/* VicHealth card */}
          <div className="rounded-sm bg-teal p-8 text-white md:p-10">
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-white/70">
              Principal Supporter
            </span>
            <h3 className="mt-3 font-serif text-2xl">
              VicHealth: investing in evidence that centres lived experience.
            </h3>
            <p className="mt-4 font-sans text-sm leading-relaxed text-white/80">
              VicHealth has been promoting health and wellbeing for all
              Victorians for over 30 years. Their support for this project
              reflects a commitment to understanding the human dimensions of
              policy &mdash; and to ensuring those dimensions inform the
              decisions that shape our future.
            </p>
            <p className="mt-3 font-sans text-sm leading-relaxed text-white/70">
              This partnership demonstrates what becomes possible when public
              health institutions invest not just in data, but in stories.
            </p>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-1 font-sans text-sm font-medium text-white underline underline-offset-4 transition-colors hover:text-white/80"
            >
              Visit VicHealth &rarr;
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
