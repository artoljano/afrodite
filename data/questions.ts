// data/questions.ts
export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  category: string;
  items: FAQItem[];
}

export const FAQ_CATEGORIES: FAQCategory[] = [
  {
    category: "Bukuri & Estetikë",
    items: [
      {
        question: "Çfarë përfshihet në programet e estetikës?",
        answer:
          "Programet tona mbulojnë kujdesin e lëkurës, trajtimet estetike, PMU (Permanent Make-Up), make-up profesional, qerpikë & vetulla, manikyr & pedikyr, si edhe përdorimin e pajisjeve estetike moderne.",
      },
      {
        question: "A ofron akademia certifikata të njohura ndërkombëtarisht në estetikë?",
        answer:
          "Po. Diplomat dhe certifikatat tona njihen në Itali, BE, SHBA, Kanada dhe Australi, duke ju mundësuar të punoni ose të hapni biznesin tuaj jashtë vendit.",
      },
      {
        question: "A ka praktikë reale gjatë kursit të estetikës?",
        answer:
          "Çdo kurs përshin praktikë në kushte reale me pajisje moderne dhe modele reale, nën udhëzimin e instruktorëve profesionistë.",
      },
    ],
  },
  {
    category: "Parukeri & Berberëri",
    items: [
      {
        question: "Çfarë mësohet në kurset e parukerisë dhe berberërisë?",
        answer:
          "Kursantët mësojnë teknikat bazë dhe të avancuara të prerjes së flokëve, stilimit, ngjyrimit, dekolorimit, trajtimeve kimike, si edhe kujdesin estetik për mjekrën dhe fytyrën.",
      },
      {
        question: "Sa zgjat një kurs parukerie ose berberërje?",
        answer:
          "Kohëzgjatja varet nga niveli i programit (bazë, i avancuar, i plotë). Zakonisht, programet tona zgjasin nga disa muaj deri në 2–3 vite akademike.",
      },
      {
        question: "A ofrohet praktikë gjatë kursit?",
        answer:
          "Po, çdo kursant punon me modele reale dhe përgatitet për tregun e punës me standarde ndërkombëtare.",
      },
    ],
  },
  {
    category: "Shërbime Sociale & Kujdestari",
    items: [
      {
        question: "Kush mund të regjistrohet në programet e kujdestarisë?",
        answer:
          "Programet tona janë të hapura për të gjithë ata që dëshirojnë të punojnë në shërbime sociale, kujdes për fëmijë, ose kujdes për të moshuar.",
      },
      {
        question: "Çfarë aftësish fiton një kursant në këtë fushë?",
        answer:
          "Kursantët mësojnë teknika kujdesi, komunikim me klientët, etikë profesionale dhe mënyra për të ofruar mbështetje praktike e emocionale.",
      },
      {
        question: "A ka mundësi punësimi pas përfundimit të programit?",
        answer:
          "Po. Kualifikimet tona njihen ndërkombëtarisht, duke ju dhënë mundësi punësimi në institucione, qendra sociale dhe familje private, si në Shqipëri ashtu edhe jashtë vendit.",
      },
    ],
  },
  {
    category: "Turizëm & Hoteleri",
    items: [
      {
        question: "Çfarë programesh ofroni në turizëm dhe hoteleri?",
        answer:
          "Ne ofrojmë kurse për guidë turistike, menaxhim mikpritjeje dhe shër bime hoteliere, të kombinuara me praktikë reale.",
      },
      {
        question: "A është i vlefshëm ky kualifikim jashtë Shqipërës?",
        answer:
          "Po. Certifikatat tona njihen ndërkombëtarisht dhe ofrojnë mundësi punësimi në sektorin e turizmit dhe hotelerisë në BE dhe më gjerë.",
      },
      {
        question: "A ka trajnime praktike gjatë programit?",
        answer:
          "Po, kursantët bëjnë praktika në hotele, restorante dhe agjenci turistike partnere.",
      },
    ],
  },
  {
    category: "Modë & Dizajn",
    items: [
      {
        question: "Çfarë mësohet në programet e modës dhe dizajnit?",
        answer:
          "Programet tona mbulojnë stilimin, zhvillimin e koleksioneve, dizajnin kreativ dhe trendet moderne në modë.",
      },
      {
        question: "A ka mundësi që kursantët të prezantojnë punimet e tyre?",
        answer:
          "Po. Organizojmë projekte dhe evente ku kursantët ekspozojnë punimet e tyre, duke krijuar portofolio profesionale.",
      },
      {
        question: "Cili është profili i punës pas përfundimit të kursit të modës dhe dizajnit?",
        answer:
          "Kursantët mund të punojnë si stilistë mode, dizajnerë, konsulentë të stilit ose të nisin markën e tyre personale.",
      },
    ],
  },
];
