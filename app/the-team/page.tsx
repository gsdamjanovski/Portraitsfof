import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";

export const metadata = {
  title: "The Team — Portraits of Our Future",
  description: "The people who made these stories possible.",
};

const leadership = [
  { name: "Taylor Hawkins", role: "Executive Producer & Lead Writer" },
  { name: "Fatima-Zahra Ma-el-ainin", role: "Research Director" },
  { name: "Samantha Lawrence", role: "Photography Director" },
];

const photographers = [
  { name: "Samantha Lawrence", role: "Lead Photographer" },
  { name: "Daniel Voros", role: "Documentary Photographer" },
  { name: "Ellie Chen", role: "Documentary Photographer" },
];

const researchers = [
  { name: "Fatima-Zahra Ma-el-ainin", role: "Lead Researcher" },
  { name: "Dr. James Whitfield", role: "Policy Analyst" },
  { name: "Priya Nambiar", role: "Research Associate" },
  { name: "Tom Westbrook", role: "Data & Systems Analyst" },
];

const experts = [
  "Prof. Sarah Dowse", "Dr. Michael Koh", "Assoc. Prof. Clare Wright",
  "Dr. Rebecca Huntley", "Prof. Ian Lowe", "Dr. Sana Qadir",
  "Prof. Fiona Stanley", "Dr. Tim Flannery", "Prof. Lisa Jackson Pulver",
  "Dr. Hugh Saddler", "Prof. Larissa Behrendt", "Dr. Anna Googh",
  "Prof. John Quiggin", "Dr. Miriam Lyons", "Prof. Ross Garnaut",
  "Dr. Kate Raworth", "Prof. Genevieve Bell",
];

const participants = [
  "Pema", "Stafford", "Malmi", "Zen", "Sue",
  "Elke", "Kofi", "Bev", "Jasmine", "Alana & Zee",
  "Marcus", "Hana", "Darren", "Lucy", "Raj",
];

export default function TheTeamPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <HeroSection height="h-[500px]">
        <div className="max-w-xl">
          <p className="eyebrow !text-muted mb-4">The team</p>
          <h1 className="heading-display !text-white">
            The people who made these stories possible.
          </h1>
        </div>
      </HeroSection>

      {/* Project Leadership */}
      <section className="section-gray section-gap">
        <div className="mx-auto max-w-[1440px] px-12 lg:px-[120px]">
          <p className="eyebrow mb-4">Project leadership</p>
          <h2 className="heading-h2">Editorial and research leads.</h2>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {leadership.map((person) => (
              <div key={person.name} className="bg-white p-8">
                <div className="mb-4 h-48 w-full bg-[#EEEEEE]" />
                <h3 className="heading-h3">{person.name}</h3>
                <p className="mt-1 text-sm text-muted">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photography */}
      <section className="section-white section-gap">
        <div className="mx-auto max-w-[1440px] px-12 lg:px-[120px]">
          <p className="eyebrow mb-4">Photography</p>
          <h2 className="heading-h2">Documentary photographers.</h2>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {photographers.map((person) => (
              <div key={person.name} className="border border-divider p-8">
                <div className="mb-4 h-48 w-full bg-[#F5F5F5]" />
                <h3 className="heading-h3">{person.name}</h3>
                <p className="mt-1 text-sm text-muted">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Team */}
      <section className="section-gray section-gap">
        <div className="mx-auto max-w-[1440px] px-12 lg:px-[120px]">
          <p className="eyebrow mb-4">Research</p>
          <h2 className="heading-h2">Research and analysis team.</h2>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-4">
            {researchers.map((person) => (
              <div key={person.name} className="bg-white p-6">
                <div className="mb-4 h-40 w-full bg-[#EEEEEE]" />
                <h3 className="text-sm font-bold text-black">{person.name}</h3>
                <p className="mt-1 text-xs text-muted">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Contributors */}
      <section className="section-white section-gap">
        <div className="mx-auto max-w-[1440px] px-12 lg:px-[120px]">
          <p className="eyebrow mb-4">Expert contributors</p>
          <h2 className="heading-h2">Academic reviewers and advisors.</h2>
          <p className="mt-4 max-w-2xl text-body">
            Each portrait was reviewed by subject-matter experts across
            policy, public health, economics, environmental science, and social
            research.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {experts.map((name) => (
              <div key={name} className="border border-divider bg-gray-light p-4">
                <p className="text-sm font-medium text-black">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Participants */}
      <section className="section-dark section-gap">
        <div className="mx-auto max-w-[1440px] px-12 lg:px-[120px]">
          <p className="eyebrow !text-white/50 mb-4">The participants</p>
          <h2 className="heading-h2 !text-white">
            Fifteen Australians who gave their time and their trust.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/60">
            Without these fifteen people, this collection would not exist. Their
            willingness to share their lives — with honesty, nuance, and
            generosity — is the foundation of everything here.
          </p>
          <div className="mt-12 grid grid-cols-3 gap-4 sm:grid-cols-5">
            {participants.map((name) => (
              <div key={name} className="border border-white/10 p-4 text-center">
                <p className="text-sm font-medium text-white">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About the Organisation */}
      <section className="section-gray section-gap">
        <div className="mx-auto max-w-[1440px] px-12 lg:px-[120px]">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">The organisation</p>
            <h2 className="heading-h2">Foundations for Tomorrow.</h2>
            <div className="mt-8 space-y-4 text-body leading-relaxed">
              <p>
                Foundations for Tomorrow is a research and editorial organisation
                focused on long-term policy challenges. Its work sits at the
                intersection of journalism, public policy, and futures thinking.
              </p>
              <p>
                The Lab — the editorial unit behind this collection — produces
                evidence-based storytelling that centres lived experience and
                challenges institutional short-termism.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VicHealth */}
      <section className="section-white section-gap">
        <div className="mx-auto max-w-[1440px] px-12 lg:px-[120px]">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Principal supporter</p>
            <h2 className="heading-h2">VicHealth.</h2>
            <div className="mt-8 space-y-4 text-body leading-relaxed">
              <p>
                VicHealth has been promoting health and wellbeing for all
                Victorians for over 30 years. Their support for this project
                reflects a commitment to understanding the human dimensions of
                policy.
              </p>
            </div>
            <Link
              href="https://www.vichealth.vic.gov.au"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block text-sm font-medium text-black hover:opacity-70 transition-opacity"
            >
              Visit VicHealth →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
