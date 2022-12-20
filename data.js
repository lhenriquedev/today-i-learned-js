const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

// LINK TO APP SAMPLE DATA: https://docs.google.com/spreadsheets/d/1eeldcA_OwP4DHYEvjG0kDe0cRys-cDPhc_E9P9G1e3I/edit#gid=0

// 👍 🤯 ⛔️

// Arrays
const fact = ["Lisbon is the capital of Portugal", 2015, true];

const [text, createdIn, isCorrect] = fact;
const newFact = [...fact, "society"];

// Objects
const factObj = {
  text: "Lisbon is the capital of Portugal",
  year: 2015,
  isCorrect: true,
  category: "society",
  createSummary: function () {
    return `The fact ${this.text} is from ${this.category}`;
  },
};

const { category, isCorrect: isCorrect2 } = factObj;

const allCategories = CATEGORIES.map((category) => category.name);

const factAge = initialFacts.map((age) => age.createdIn);
