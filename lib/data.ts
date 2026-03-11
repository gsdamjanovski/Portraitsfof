import { readBlobJson } from "./blob";
import { portraits as defaultPortraits } from "@/data/portraits";
import { quotes as defaultQuotes } from "@/data/quotes";
import {
  quizQuestions as defaultQuizQuestions,
  recommenderMappings as defaultMappings,
} from "@/data/recommender";
import type {
  Portrait,
  Quote,
  QuizQuestion,
  RecommenderMapping,
  SiteCopy,
} from "./types";

const defaultSiteCopy: SiteCopy = {
  hero: {
    collectionLabel: "A Foundations for Tomorrow Collection",
    headline1: "Fifteen Australians.",
    headline2: "Fifteen futures in the balance.",
    subtext:
      "Behind every long-term policy failure is a person who felt it first. This is their collection.",
    cta1: "Explore the portraits",
    cta2: "Read the full collection",
  },
  stats: [
    { number: "15", label: "Australians" },
    { number: "15", label: "Policy areas" },
    { number: "7", label: "States & territories" },
    { number: "9\u201376", label: "Ages represented" },
  ],
  inTheirWords: {
    paragraphs: [
      'Each portrait in this collection began as a conversation \u2014 sometimes over kitchen tables, sometimes over video calls, always grounded in the question: <strong class="text-charcoal">what does long-term policy failure actually feel like?</strong>',
      "The answers were rarely abstract. They were stories about waiting lists, about flooded homes, about classrooms without teachers and communities without infrastructure. They were about futures deferred.",
      "This project does not propose solutions. It proposes attention.",
    ],
  },
  team: {
    heading:
      "A project built by people who believe the future deserves better evidence.",
    teamCardHeading:
      "Researchers, writers, and photographers working across the country.",
    teamCardBody:
      "This collection was produced by a distributed team of journalists, researchers, and documentary photographers led by the Foundations for Tomorrow editorial unit. Each portrait involved weeks of embedded reporting and participatory storytelling.",
    teamMembers: [
      "Taylor Hawkins",
      "Fatima-Zahra Ma-el-ainin",
      "Samantha Lawrence",
    ],
    extraContributors: "+14 contributors",
    vicHealthHeading:
      "VicHealth: investing in evidence that centres lived experience.",
    vicHealthBody1:
      "VicHealth has been promoting health and wellbeing for all Victorians for over 30 years. Their support for this project reflects a commitment to understanding the human dimensions of policy \u2014 and to ensuring those dimensions inform the decisions that shape our future.",
    vicHealthBody2:
      "This partnership demonstrates what becomes possible when public health institutions invest not just in data, but in stories.",
  },
};

export async function getPortraits(): Promise<Portrait[]> {
  return readBlobJson("portraits.json", defaultPortraits as Portrait[]);
}

export async function getQuotes(): Promise<Quote[]> {
  return readBlobJson("quotes.json", defaultQuotes as Quote[]);
}

export async function getQuizQuestions(): Promise<QuizQuestion[]> {
  return readBlobJson(
    "quiz-questions.json",
    defaultQuizQuestions as QuizQuestion[]
  );
}

export async function getRecommenderMappings(): Promise<RecommenderMapping[]> {
  return readBlobJson(
    "recommender-mappings.json",
    defaultMappings as RecommenderMapping[]
  );
}

export async function getSiteCopy(): Promise<SiteCopy> {
  return readBlobJson("site-copy.json", defaultSiteCopy);
}

export function getRecommendations(
  mappings: RecommenderMapping[],
  perspective: string,
  issue: string
): string[] {
  const match = mappings.find(
    (m) => m.perspective === perspective && m.issue === issue
  );
  return match ? match.slugs : ["pema", "malmi", "zen"];
}
