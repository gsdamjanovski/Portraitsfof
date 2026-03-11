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

export const portraits: Portrait[] = [
  {
    id: 1,
    slug: "pema",
    name: "Pema",
    age: 34,
    location: "Brisbane",
    state: "QLD",
    policyArea: "arts-culture",
    policyLabel: "Arts & culture",
    quote:
      "When the funding disappears, so does the mirror a society holds up to itself.",
    summary:
      "Pema is a Brisbane-based multidisciplinary artist whose practice spans performance, installation, and community engagement. For over a decade, she has watched arts funding shrink while the demand for cultural programming grows. Her portrait explores what a nation loses when it stops investing in the people who help it imagine.",
    cardColour: "sage-100",
  },
  {
    id: 2,
    slug: "stafford",
    name: "Stafford",
    age: 61,
    location: "Marrawah",
    state: "TAS",
    policyArea: "agriculture-succession",
    policyLabel: "Agriculture & succession",
    quote:
      "The farm doesn\u2019t care about policy cycles. It just needs someone to show up tomorrow.",
    summary:
      "Stafford runs a fourth-generation dairy farm on Tasmania\u2019s remote northwest coast. With no succession plan and rising input costs, he represents thousands of ageing primary producers facing the question: who takes over when I stop?",
    cardColour: "lavender-100",
  },
  {
    id: 3,
    slug: "malmi",
    name: "Malmi",
    age: 29,
    location: "Melbourne",
    state: "VIC",
    policyArea: "ai-education",
    policyLabel: "AI & education",
    quote:
      "Digital fluency is not the same as digital wisdom. We keep rushing toward the tool before we\u2019ve thought about what we\u2019re building it on.",
    summary:
      "Malmi is a secondary school teacher in Melbourne\u2019s western suburbs navigating the collision between AI tools and traditional pedagogy. Her portrait examines what it means to educate young people for a future that even their teachers can\u2019t predict.",
    cardColour: "mint-100",
  },
  {
    id: 4,
    slug: "zen",
    name: "Zen",
    age: 42,
    location: "Lismore",
    state: "NSW",
    policyArea: "disaster-management",
    policyLabel: "Disaster management",
    quote:
      "They rebuilt the levee. They didn\u2019t rebuild the trust.",
    summary:
      "Zen is a Lismore resident who lived through the catastrophic 2022 floods and their drawn-out aftermath. His story is one of bureaucratic delay, community resilience, and the growing gap between disaster rhetoric and disaster reality.",
    cardColour: "blush-100",
  },
  {
    id: 5,
    slug: "aunty-june",
    name: "Aunty June",
    age: 76,
    location: "Redfern",
    state: "NSW",
    policyArea: "indigenous-knowledge",
    policyLabel: "Indigenous knowledge",
    quote:
      "We\u2019ve been managing this land for millennia. Now they want us to fill out a form to prove it.",
    summary:
      "Aunty June is a respected Elder and community leader in Redfern who has spent decades advocating for the recognition of Indigenous knowledge systems within government decision-making. Her portrait speaks to what is lost when ancient wisdom is filtered through modern bureaucracy.",
    cardColour: "sage-100",
  },
  {
    id: 6,
    slug: "noor",
    name: "Noor",
    age: 16,
    location: "Logan",
    state: "QLD",
    policyArea: "digital-wellbeing",
    policyLabel: "Digital wellbeing",
    quote:
      "My screen time report knows me better than my school counsellor does.",
    summary:
      "Noor is a Year 11 student in Logan navigating the intersection of social media, mental health, and identity. Her portrait explores how Australia\u2019s youngest generation experiences a digital environment that was never designed with their wellbeing in mind.",
    cardColour: "lavender-100",
  },
  {
    id: 7,
    slug: "elke",
    name: "Elke",
    age: 38,
    location: "Fremantle",
    state: "WA",
    policyArea: "marine-conservation",
    policyLabel: "Marine conservation",
    quote:
      "The ocean doesn\u2019t negotiate. It just moves the line.",
    summary:
      "Elke is a marine biologist and community organiser in Fremantle who works at the boundary between scientific research and coastal community advocacy. Her portrait explores how marine conservation policy struggles to keep pace with the ecosystems it claims to protect.",
    cardColour: "mint-100",
  },
  {
    id: 8,
    slug: "alana-zee",
    name: "Alana & Zee",
    age: "9 & 12",
    location: "Bulli",
    state: "NSW",
    policyArea: "indigenous-knowledge",
    policyLabel: "Indigenous knowledge",
    quote:
      "Sixty-five thousand years of knowledge. Acknowledged in selected weeks.",
    summary:
      "Alana and Zee are sisters growing up on Dharawal country in Bulli, learning language, song, and land management from their grandmother. Their portrait asks what reconciliation looks like when it\u2019s practised in backyards and school corridors, not just in parliament.",
    cardColour: "blush-100",
  },
  {
    id: 9,
    slug: "tomas",
    name: "Tom\u00e1s",
    age: 27,
    location: "Geelong",
    state: "VIC",
    policyArea: "circular-economy",
    policyLabel: "Circular economy",
    quote:
      "We designed the waste. We can design it out.",
    summary:
      "Tom\u00e1s runs a small circular-economy startup in Geelong that turns manufacturing offcuts into building materials. His portrait examines why Australia\u2019s waste policy remains linear in a world demanding circularity.",
    cardColour: "sage-100",
  },
  {
    id: 10,
    slug: "rae",
    name: "Rae",
    age: 45,
    location: "Darwin",
    state: "NT",
    policyArea: "cyber-security",
    policyLabel: "Cyber security",
    quote:
      "The next national security threat won\u2019t arrive on a boat. It\u2019ll arrive in an inbox.",
    summary:
      "Rae is a cybersecurity analyst in Darwin working across government and critical infrastructure. Her portrait reveals the human side of digital defence \u2014 the burnout, the under-resourcing, and the policy blind spots that leave Australia exposed.",
    cardColour: "lavender-100",
  },
  {
    id: 11,
    slug: "jian",
    name: "Jian",
    age: 53,
    location: "Hobart",
    state: "TAS",
    policyArea: "energy-transition",
    policyLabel: "Energy transition",
    quote:
      "Every delayed decision on energy is a debt our children will pay with interest.",
    summary:
      "Jian is an energy engineer in Hobart who has spent two decades working on grid modernisation projects. His portrait explores the tension between Australia\u2019s renewable ambitions and the reality of aging infrastructure, workforce shortages, and political hesitancy.",
    cardColour: "mint-100",
  },
  {
    id: 12,
    slug: "sienna",
    name: "Sienna",
    age: 19,
    location: "Adelaide",
    state: "SA",
    policyArea: "vocational-education",
    policyLabel: "Vocational education",
    quote:
      "They told me uni was the only path. Nobody mentioned the one that actually leads to a job.",
    summary:
      "Sienna is a second-year TAFE student in Adelaide training as an electrician. Her portrait challenges the cultural hierarchy that places university above vocational education and asks what Australia loses when it undervalues its trades pipeline.",
    cardColour: "blush-100",
  },
  {
    id: 13,
    slug: "bev",
    name: "Bev",
    age: 71,
    location: "Cairns",
    state: "QLD",
    policyArea: "aged-care",
    policyLabel: "Aged care",
    quote:
      "I spent my whole life caring for others. Now the system can\u2019t find anyone to care for me.",
    summary:
      "Bev is a retired nurse in Cairns who is now navigating the aged care system she once staffed. Her portrait traces the arc from carer to care-recipient and exposes the cracks in a system everyone agrees is broken but few are willing to properly fund.",
    cardColour: "sage-100",
  },
  {
    id: 14,
    slug: "kofi",
    name: "Kofi",
    age: 31,
    location: "Dandenong",
    state: "VIC",
    policyArea: "pacific-migration",
    policyLabel: "Pacific migration",
    quote:
      "My island is sinking. My visa is temporary. My future is someone else\u2019s policy decision.",
    summary:
      "Kofi is a Pacific Islander living in Dandenong on a seasonal worker visa, sending money home to a family facing climate displacement. His portrait examines Australia\u2019s relationship with its Pacific neighbours \u2014 and the human cost of treating migration as a tap to be turned on and off.",
    cardColour: "lavender-100",
  },
  {
    id: 15,
    slug: "hana",
    name: "Hana",
    age: 22,
    location: "Canberra",
    state: "ACT",
    policyArea: "local-democracy",
    policyLabel: "Local democracy",
    quote:
      "If the youngest voice in the room is always the last to be heard, the room is failing.",
    summary:
      "Hana is a community organiser in Canberra working to bring younger voices into local government processes. Her portrait explores what happens when democratic participation is designed around the schedules, language, and priorities of people who already hold power.",
    cardColour: "mint-100",
  },
];
