import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import PortraitCard from "@/components/portraits/PortraitCard";
import PortraitsGrid from "@/components/portraits/PortraitsGrid";
import { getPortraits } from "@/lib/data";

export const metadata = {
  title: "The Portraits — Portraits of Our Future",
  description: "Fifteen Australians. Fifteen futures in the balance.",
};

export default async function ThePortraitsPage() {
  const portraits = await getPortraits();

  const policyAreas = [...new Set(portraits.map((p) => p.policyLabel))];

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <HeroSection height="h-[500px]">
        <div className="flex w-full flex-col items-center text-center">
          <p className="eyebrow !text-muted mb-4">The collection</p>
          <h1 className="heading-display !text-white max-w-[800px]">
            Fifteen Australians.
            <br />
            Fifteen futures in the balance.
          </h1>
          <div className="mt-8 flex items-center gap-8">
            {["15 Portraits", "15 Policy areas", "8 States & territories", "Ages 9–76"].map(
              (stat, i, arr) => (
                <span key={stat} className="flex items-center gap-8">
                  <span className="text-sm font-medium text-white/60">{stat}</span>
                  {i < arr.length - 1 && <span className="text-white/20">·</span>}
                </span>
              )
            )}
          </div>
        </div>
      </HeroSection>

      {/* Client-side filter + grid */}
      <PortraitsGrid portraits={portraits} policyAreas={policyAreas} />

      <Footer />
    </main>
  );
}
