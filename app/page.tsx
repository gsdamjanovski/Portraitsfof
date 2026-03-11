import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuoteSection from "@/components/QuoteSection";
import PortraitsSection from "@/components/PortraitsSection";
import Recommender from "@/components/Recommender";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";
import {
  getPortraits,
  getQuotes,
  getQuizQuestions,
  getRecommenderMappings,
} from "@/lib/data";

export default async function Home() {
  const [portraits, quotes, quizQuestions, recommenderMappings] =
    await Promise.all([
      getPortraits(),
      getQuotes(),
      getQuizQuestions(),
      getRecommenderMappings(),
    ]);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <QuoteSection quotes={quotes} />
        <PortraitsSection portraits={portraits} />
        <Recommender
          portraits={portraits}
          quizQuestions={quizQuestions}
          mappings={recommenderMappings}
        />
        <TeamSection />
      </main>
      <Footer />
    </>
  );
}
