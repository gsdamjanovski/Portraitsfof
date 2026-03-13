import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";

export const metadata = {
  title: "The Method — Portraits of Our Future",
  description: "A methodology that begins with people and follows them through to futures.",
};

const stages = [
  {
    number: "01",
    title: "Narrative Analysis",
    subtitle: "Beginning with the person",
    description:
      "Each portrait begins with weeks of embedded reporting — conversations over kitchen tables, video calls across time zones, and documented walks through the landscapes that shape each person's life. The goal is not extraction but co-creation: a story that the subject recognises as their own.",
    bg: "section-gray",
    dark: false,
  },
  {
    number: "02",
    title: "Systems Framing",
    subtitle: "Mapping the forces at play",
    description:
      "Once a life story is documented, the research team maps the policy systems intersecting with it. This involves identifying the institutional, economic, and regulatory structures that shape the subject's experience — and the feedback loops that connect them.",
    bg: "section-white",
    dark: false,
  },
  {
    number: "03",
    title: "Policy Evaluation",
    subtitle: "Assessing what exists",
    description:
      "Each portrait includes a rigorous assessment of the current policy landscape relevant to the subject's life. This draws on peer-reviewed literature, government reports, and expert consultation to evaluate what's working, what's failing, and what's missing.",
    bg: "section-gray",
    dark: false,
  },
  {
    number: "04",
    title: "Futures Exploration",
    subtitle: "Imagining what could be",
    description:
      "The final stage explores possible futures — both for the individual and for the policy system. This is not prediction but structured imagination: using scenario methods to explore what different policy choices might mean for real lives over the next thirty years.",
    bg: "section-dark",
    dark: true,
  },
];

export default function TheMethodPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <HeroSection height="h-[500px]">
        <div className="max-w-2xl">
          <p className="eyebrow !text-muted mb-4">The method</p>
          <h1 className="heading-display !text-white leading-tight">
            A methodology that begins with people and follows them through.
          </h1>
        </div>
      </HeroSection>

      {/* Download Banner */}
      <section className="section-white border-b border-divider">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-12 py-14 lg:px-[120px]">
          <div>
            <h3 className="heading-h3">Download the full methodology</h3>
            <p className="mt-2 text-sm text-body">
              The complete FGSA framework is available as a free PDF.
            </p>
          </div>
          <Link
            href="#downloads"
            className="bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-black/80"
          >
            Download PDF →
          </Link>
        </div>
      </section>

      {/* FGSA Intro */}
      <section className="section-gray section-gap">
        <div className="mx-auto max-w-[1440px] px-12 lg:px-[120px]">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Futures-Grounded Storytelling Approach</p>
            <h2 className="heading-h2">
              A narrative methodology created for this project.
            </h2>
            <div className="mt-8 space-y-4 text-body leading-relaxed">
              <p>
                The Futures-Grounded Storytelling Approach (FGSA) was developed
                by the Foundations for Tomorrow Lab to meet a specific challenge:
                how do you produce editorial work that is both deeply human and
                analytically rigorous?
              </p>
              <p>
                The answer is a four-stage process that begins with the person,
                maps the systems shaping their life, evaluates the policy
                landscape, and explores possible futures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-white section-gap">
        <div className="mx-auto max-w-[1440px] px-12 lg:px-[120px]">
          <p className="eyebrow mb-4">How it works</p>
          <h2 className="heading-h2">Four stages, one story.</h2>
          <p className="mt-4 max-w-2xl text-body">
            Each portrait moves through four stages of analysis, from lived
            experience to futures thinking.
          </p>
        </div>
      </section>

      {/* Stages */}
      {stages.map((stage) => (
        <section key={stage.number} className={`${stage.bg} section-gap`}>
          <div className="mx-auto max-w-[1440px] px-12 lg:px-[120px]">
            <div className="flex flex-col gap-6 lg:flex-row lg:gap-20">
              <div className="flex-shrink-0">
                <span
                  className={`font-[var(--font-heading)] text-6xl font-bold ${
                    stage.dark ? "text-white/20" : "text-black/10"
                  }`}
                >
                  {stage.number}
                </span>
              </div>
              <div className="max-w-2xl">
                <p className={`eyebrow mb-2 ${stage.dark ? "!text-white/50" : ""}`}>
                  Stage {stage.number}
                </p>
                <h2 className={`heading-h2 ${stage.dark ? "!text-white" : ""}`}>
                  {stage.title}
                </h2>
                <p className={`mt-2 text-sm ${stage.dark ? "text-white/50" : "text-muted"}`}>
                  {stage.subtitle}
                </p>
                <p className={`mt-6 leading-relaxed ${stage.dark ? "text-white/60" : "text-body"}`}>
                  {stage.description}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Downloads */}
      <section id="downloads" className="section-gray section-gap">
        <div className="mx-auto max-w-[1440px] px-12 lg:px-[120px]">
          <p className="eyebrow mb-4">Downloads</p>
          <h2 className="heading-h2">Resources and methodology documents.</h2>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { title: "FGSA Framework (Full)", size: "2.4 MB" },
              { title: "Methodology Summary", size: "840 KB" },
              { title: "Research Ethics Protocol", size: "1.1 MB" },
            ].map((doc) => (
              <div key={doc.title} className="flex items-start gap-4 border border-divider bg-white p-6">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-black text-white">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                </div>
                <div>
                  <h3 className="heading-h3">{doc.title}</h3>
                  <p className="mt-1 text-xs text-muted">PDF · {doc.size}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
