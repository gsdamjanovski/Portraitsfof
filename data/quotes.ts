export interface Quote {
  text: string;
  name: string;
  age: number | string;
  location: string;
  state: string;
  policyArea: string;
}

export const quotes: Quote[] = [
  {
    text: "Sixty-five thousand years of knowledge. Acknowledged in selected weeks.",
    name: "Alana & Zee",
    age: "9 & 12",
    location: "Bulli",
    state: "NSW",
    policyArea: "Indigenous knowledge",
  },
  {
    text: "Digital fluency is not the same as digital wisdom. We keep rushing toward the tool before we\u2019ve thought about what we\u2019re building it on.",
    name: "Malmi",
    age: 29,
    location: "Melbourne",
    state: "VIC",
    policyArea: "AI & education",
  },
  {
    text: "The ocean doesn\u2019t negotiate. It just moves the line.",
    name: "Elke",
    age: 38,
    location: "Fremantle",
    state: "WA",
    policyArea: "Marine conservation",
  },
  {
    text: "My island is sinking. My visa is temporary. My future is someone else\u2019s policy decision.",
    name: "Kofi",
    age: 31,
    location: "Dandenong",
    state: "VIC",
    policyArea: "Pacific migration",
  },
  {
    text: "I spent my whole life caring for others. Now the system can\u2019t find anyone to care for me.",
    name: "Bev",
    age: 71,
    location: "Cairns",
    state: "QLD",
    policyArea: "Aged care",
  },
];
