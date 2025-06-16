// data/questions.ts
export interface Question {
  question: string;
  answer: string;
}

export const QUESTIONS: Question[] = [
  {
    question: "Çfarë kurse profesionale ofron Akademia Afrodite dhe si mund të regjistrohem?",
    answer:
    "Akademia Afrodite ofron një gamë të gjerë kursesh profesionale si: parukeri, make up artist, estetike, kujdestare fëmijësh, asistente dentare, kujdestare për të moshuarit dhe menaxhere biznesi. Për të marrë më shumë informacion, mjafton të klikoni në seksionin “Kurse” në faqen tonë të internetit, ku do të gjeni të listuara të gjitha kurset e disponueshme – si ato bazë, ashtu edhe ato të avancuara për çdo fushë specifike." +
    "Për të regjistruar, vizitoni faqen tonë të regjistrimit, zgjidhni kursin dhe plotësoni formularin online." +
    "Gjithashtu, nëse jeni të interesuar, mund të kontaktoni numrin e telefonit të shënuar në faqe dhe të merrni informacion të detajuar për çdo kurs."
  },
   {
    question: "A njihen diplomat jashtë territorit të Shqipërisë?",
    answer:
      "Po, të gjitha kurset e zhvilluara në Afrodite Academy janë të vlefshme ndërkombëtarisht, pasi respektojnë standardet dhe kriteret e vendeve europiane dhe jashtë Europës. " +
      "Çdo kurs është i strukturuar në orë specifike studimi dhe në përfundim, studenti pajiset me një certifikatë profesionale të njohur ndërkombëtarisht, me numër serie unik dhe të verifikueshëm."
  },
  {
    question: "A ka mundësi për praktikë gjatë kohës së kursit?",
    answer:
      "Po, akademia jonë ka krijuar gjatë viteve një sërë bashkëpunimesh me institucione arsimore, sallone dhe qendra estetike të specializuara. " +
      "Studentët tanë kanë mundësinë të praktikojnë mbi modele reale dhe të fitojnë përvojën e tyre të parë në tregun e punës, nën mbikëqyrjen e profesionistëve të kualifikuar. " +
      "Së fundmi, kemi vendosur një bashkëpunim të ngushtë me një sallon bukurie, ku vetëm stafi dhe studentët tanë kryejnë shërbime profesionale nën një mbikëqyrje të rreptë."
  },
   {
    question: "Në cilat gjuhë zhvillohen mësimet?",
    answer:
      "Mësimet zhvillohen kryesisht në gjuhën shqipe. Megjithatë, në stafin tonë kemi mësues të diplomuar në gjuhë të huaja, të cilët mund të ofrojnë leksione në gjuhë të ndryshme si: italisht, frëngjisht, anglisht, greqisht dhe të tjera. " +
      "Nëse flisni një gjuhë të huaj dhe dëshironi të ndiqni një nga kurset tona, mjafton të na kontaktoni dhe do të krijojmë një program të personalizuar që i përshtatet nevojave tuaja."
  },
  {
    question: "A janë kurset në grup apo individuale?",
    answer:
      "Zakonisht, kurset zhvillohen në grup, sidomos ato vjetore për parukeri dhe estetikë, që çojnë në pajisjen me diplomë profesionale. " +
      "Megjithatë, studentët kanë mundësi të kërkojnë një trajnim individual, me program të personalizuar sipas kohës dhe qëllimeve të tyre. " +
      "Çmimi i kurseve individuale përcaktohet në mënyrë të veçantë, në bazë të kërkesave dhe opsioneve të zgjedhura."
  },
  // … shtoni këtu pyetje të tjera sipas nevojës
];
