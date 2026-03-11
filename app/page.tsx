import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuoteSection from "@/components/QuoteSection";
import PortraitsSection from "@/components/PortraitsSection";
import Recommender from "@/components/Recommender";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <QuoteSection />
        <PortraitsSection />
        <Recommender />
        <TeamSection />
      </main>
      <Footer />
    </>
  );
}
