export interface QuizQuestion {
  id: number;
  label: string;
  question: string;
  options: { letter: string; value: string; label: string }[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    label: "WHERE ARE YOU BASED?",
    question: "QUESTION 1 OF 3 \u2014 WHERE ARE YOU BASED?",
    options: [
      { letter: "A", value: "NSW", label: "New South Wales" },
      { letter: "B", value: "VIC", label: "Victoria" },
      { letter: "C", value: "QLD", label: "Queensland" },
      { letter: "D", value: "WA", label: "Western Australia" },
      { letter: "E", value: "SA", label: "South Australia" },
      { letter: "F", value: "TAS", label: "Tasmania" },
      { letter: "G", value: "NT/ACT", label: "Northern Territory / ACT" },
    ],
  },
  {
    id: 2,
    label: "WHOSE PERSPECTIVE?",
    question: "QUESTION 2 OF 3 \u2014 WHOSE PERSPECTIVE DO YOU WANT TO UNDERSTAND?",
    options: [
      { letter: "A", value: "young", label: "A young person (under 25)" },
      { letter: "B", value: "elder", label: "An Elder or senior Australian" },
      { letter: "C", value: "regional", label: "Someone in regional Australia" },
      { letter: "D", value: "migrant", label: "A migrant or diaspora voice" },
    ],
  },
  {
    id: 3,
    label: "URGENT ISSUE",
    question: "QUESTION 3 OF 3 \u2014 WHAT ISSUE FEELS MOST URGENT RIGHT NOW?",
    options: [
      { letter: "A", value: "environment", label: "Climate & environment" },
      { letter: "B", value: "technology", label: "Technology & digital life" },
      { letter: "C", value: "equity", label: "Equity & inclusion" },
      { letter: "D", value: "systems", label: "Systems & infrastructure" },
    ],
  },
];

export interface RecommenderMapping {
  perspective: string;
  issue: string;
  slugs: string[];
}

export const recommenderMappings: RecommenderMapping[] = [
  { perspective: "young", issue: "environment", slugs: ["elke", "tomas", "hana"] },
  { perspective: "young", issue: "technology", slugs: ["malmi", "noor", "hana"] },
  { perspective: "young", issue: "equity", slugs: ["alana-zee", "sienna", "noor"] },
  { perspective: "young", issue: "systems", slugs: ["sienna", "hana", "tomas"] },
  { perspective: "elder", issue: "environment", slugs: ["stafford", "aunty-june", "elke"] },
  { perspective: "elder", issue: "technology", slugs: ["rae", "bev", "jian"] },
  { perspective: "elder", issue: "equity", slugs: ["aunty-june", "bev", "kofi"] },
  { perspective: "elder", issue: "systems", slugs: ["jian", "bev", "stafford"] },
  { perspective: "regional", issue: "environment", slugs: ["zen", "stafford", "elke"] },
  { perspective: "regional", issue: "technology", slugs: ["malmi", "rae", "noor"] },
  { perspective: "regional", issue: "equity", slugs: ["aunty-june", "alana-zee", "sienna"] },
  { perspective: "regional", issue: "systems", slugs: ["jian", "stafford", "zen"] },
  { perspective: "migrant", issue: "environment", slugs: ["kofi", "elke", "tomas"] },
  { perspective: "migrant", issue: "technology", slugs: ["malmi", "kofi", "rae"] },
  { perspective: "migrant", issue: "equity", slugs: ["kofi", "pema", "alana-zee"] },
  { perspective: "migrant", issue: "systems", slugs: ["kofi", "jian", "tomas"] },
];

export function getRecommendations(perspective: string, issue: string): string[] {
  const match = recommenderMappings.find(
    (m) => m.perspective === perspective && m.issue === issue
  );
  return match ? match.slugs : ["pema", "malmi", "zen"];
}
