export interface Portrait {
  id: number;
  slug: string;
  name: string;
  age: number | string;
  location: string;
  state: string;
  policyArea: string;
  policyLabel: string;
  quote: string;
  summary: string;
  cardColour: string;
  image?: string;
}

export interface Quote {
  text: string;
  name: string;
  age: number | string;
  location: string;
  state: string;
  policyArea: string;
}

export interface QuizQuestion {
  id: number;
  label: string;
  question: string;
  options: { letter: string; value: string; label: string }[];
}

export interface RecommenderMapping {
  perspective: string;
  issue: string;
  slugs: string[];
}

export interface SiteCopy {
  hero: {
    collectionLabel: string;
    headline1: string;
    headline2: string;
    subtext: string;
    cta1: string;
    cta2: string;
  };
  stats: { number: string; label: string }[];
  inTheirWords: {
    paragraphs: string[];
  };
  team: {
    heading: string;
    teamCardHeading: string;
    teamCardBody: string;
    teamMembers: string[];
    extraContributors: string;
    vicHealthHeading: string;
    vicHealthBody1: string;
    vicHealthBody2: string;
  };
}
