// data/questions.ts
export interface Question {
  question: string;
  answer: string;
}

export const QUESTIONS: Question[] = [
  {
    question: "Sa zgjat një kurs profesional?",
    answer:
      "Kurset tona profesionale zgjasin nga 1 deri në 6 muaj, në varësi të programit dhe nivelit të zgjedhur."
  },
  {
    question: "A ofrohen kurse online?",
    answer:
      "Po, ne ofrojmë shkallë të ndryshme të mësimit online për ta përshtatur me nevojat tuaja."
  },
  {
    question: "Si mund të regjistrohem?",
    answer:
      "Për të regjistruar, vizitoni faqen tonë të regjistrimit, zgjidhni kursin dhe plotësoni formularin online."
  },
  // … shtoni këtu pyetje të tjera sipas nevojës
];
