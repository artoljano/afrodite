// data/courses.ts
export interface Instructor {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface CurriculumModule {
  title: string;
  lessons: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  image: string;
  text: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Course {
  id: number;
  title: string;
  category: string;
  duration: string;
  durationCategory: string;
  level: string;
  price: string;
  startDate: string;
  schedule: string;
  image: string;
  description: string;
  longDescription: string;
  instructors: Instructor[];
  curriculum: CurriculumModule[];
  benefits: string[];
  materials: string[];
  testimonials: Testimonial[];
  faqs: FAQ[];

  // New attributes:
  featured: boolean;
  students: number;
  videoSrc?: string; // Optional video source for course preview
}

// —————————————————————————————————————————————————————————————
// Here is the “full” data for every course. 
// You can (and should) add more courses following this same shape.
// —————————————————————————————————————————————————————————————
export const courses: Course[] = [
  {
    id: 1,
    title: "Kurs Profesional për Makeup Artist",
    category: "makeup",
    duration: "3 muaj",
    durationCategory: "3-mujor",
    level: "Fillestar deri në të Avancuar",
    price: "45,000 Lekë",
    startDate: "15 Qershor 2025",
    schedule: "E Hënë, E Mërkurë, E Premte (17:00 - 20:00)",
    image: "/placeholder.svg?height=600&width=800&text=Makeup+Course",
    description:
      "Kursi Profesional për Makeup Artist në Afrodite Academy është dizajnuar për t'ju dhënë njohuritë dhe aftësitë e nevojshme për të filluar një karrierë të suksesshme si makeup artist. Gjatë këtij kursi 3-mujor, ju do të mësoni teknikat e fundit të makeup nga profesionistët e industrisë, duke përfshirë makeup për evenimente të ndryshme, makeup artistik, dhe teknika profesionale.",
    longDescription:
      "Ky kurs është i përshtatshëm si për fillestarët ashtu edhe për ata që dëshirojnë të përmirësojnë aftësitë e tyre ekzistuese. Nën udhëheqjen e instruktorëve me përvojë ndërkombëtare, ju do të zhvilloni një kuptim të thellë të teorisë së ngjyrave, teknikave të aplikimit, dhe trendeve aktuale në industrinë e makeup. Kursi përfshin trajnime praktike intensive që ju lejojnë të praktikoni aftësitë tuaja në modele reale, duke ju përgatitur për situata reale të punës. Në përfundim të kursit, ju do të keni krijuar një portofol profesional dhe do të merrni një certifikatë të njohur ndërkombëtarisht që vërteton ekspertizën tuaj.",
    instructors: [
      {
        name: "Arta Kelmendi",
        role: "Makeup Artist & Instruktore",
        image: "/placeholder.svg?height=200&width=200&text=Instructor",
        bio: "Me mbi 8 vite përvojë në industrinë e bukurisë dhe trajnime ndërkombëtare.",
      },
    ],
    curriculum: [
      {
        title: "Moduli 1: Bazat e Makeup",
        lessons: [
          "Njohja me produktet dhe veglat e makeup",
          "Teoria e ngjyrave dhe analiza e tonit të lëkurës",
          "Teknikat bazë të aplikimit",
          "Makeup për fytyrë ovale, katrore, rrethore dhe zemër",
        ],
      },
      {
        title: "Moduli 2: Makeup për Sytë",
        lessons: [
          "Teknikat e hijezimit të syve",
          "Aplikimi i eyeliner dhe qerpikëve artificialë",
          "Makeup për sytë e vegjël, të mëdhenj dhe të rënë",
          "Teknikat e smokey eye",
        ],
      },
      {
        title: "Moduli 3: Makeup për Buzët dhe Faqet",
        lessons: [
          "Aplikimi i buzëkuqit dhe lip liner",
          "Teknikat e konturimit dhe highlighter",
          "Aplikimi i blush dhe bronzer",
          "Balancimi i makeup të syve dhe buzëve",
        ],
      },
      {
        title: "Moduli 4: Makeup për Evenimente",
        lessons: [
          "Makeup për dasma dhe evenimente formale",
          "Makeup për fotografi dhe video",
          "Makeup për evenimente ditore dhe mbrëmjeje",
          "Teknikat e fiksimit të makeup për qëndrueshmëri",
        ],
      },
      {
        title: "Moduli 5: Makeup Artistik dhe Special Effects",
        lessons: [
          "Bazat e makeup artistik",
          "Teknikat e special effects",
          "Makeup për karaktere dhe fantazi",
          "Krijimi i portofolit personal",
        ],
      },
    ],
    benefits: [
      "Certifikim ndërkombëtar të njohur në industri",
      "Trajnim praktik me produkte profesionale",
      "Krijimi i portofolit personal për karrierë",
      "Mundësi punësimi pas diplomimit",
      "Mbështetje për fillimin e biznesit tuaj",
      "Akses në evenimente dhe konkurse ndërkombëtare",
    ],
    materials: [
      "Set profesional brushash makeup",
      "Paletë profesionale ngjyrash",
      "Produkte bazë makeup (foundation, concealer, etj.)",
      "Materiale studimi dhe manuale",
      "Çantë profesionale makeup",
    ],
    testimonials: [
      {
        name: "Elisa Hoxha",
        role: "Makeup Artist",
        image: "/placeholder.svg?height=100&width=100&text=Student",
        text: "Kursi i Makeup Artist në Afrodite Academy ishte një eksperiencë transformuese për mua. Mësova teknika profesionale që më ndihmuan të filloj karrierën time si makeup artist.",
      },
      {
        name: "Besa Malaj",
        role: "Pronare Salloni",
        image: "/placeholder.svg?height=100&width=100&text=Student",
        text: "Falë kursit në Afrodite Academy, tani kam biznesin tim të suksesshëm. Instruktorët ishin shumë profesionalë dhe të përkushtuar për suksesin e studentëve.",
      },
    ],
    faqs: [
      {
        question: "A është i përshtatshëm ky kurs për fillestarët?",
        answer:
          "Po, kursi është i strukturuar për të akomoduar si fillestarët ashtu edhe ata me përvojë të mëparshme. Instruktorët tanë do ju udhëheqin hap pas hapi përmes çdo teknike.",
      },
      {
        question: "Çfarë certifikimi do të marr pas përfundimit të kursit?",
        answer:
          "Pas përfundimit të suksesshëm të kursit, ju do të merrni një certifikatë të njohur ndërkombëtar nga Afrodite Academy, e cila është e akredituar nga organizata prestigjioze në industrinë e bukurisë.",
      },
      {
        question: "A ofrohen materiale dhe produkte gjatë kursit?",
        answer:
          "Po, të gjitha materialet dhe produktet e nevojshme për trajnim janë të përfshira në çmimin e kursit. Ju do të merrni një set profesional brushash dhe produktesh që mund t'i mbani pas përfundimit të kursit.",
      },
      {
        question: "A ka mundësi punësimi pas përfundimit të kursit?",
        answer:
          "Afrodite Academy ka partneritete me shumë sallone bukurie dhe kompani në industri. Ne ofrojmë mbështetje për punësim dhe këshilla për karrierë për të gjithë studentët tanë të diplomuar.",
      },
    ],
    featured: true,
    students: 24,
    videoSrc: "/videos/fileTest.mp4", // Optional video source for course preview
  },
  {
    id: 2,
    title: "Kurs Profesional për Manikyr & Pedikyr",
    category: "nails",
    duration: "6 muaj",
    durationCategory: "6-mujor",
    level: "Fillestar deri në të Mesëm",
    price: "50,000 Lekë",
    startDate: "1 Korrik 2025",
    schedule: "E Martë, E Enjte (17:00 - 20:00)",
    image: "/placeholder.svg?height=600&width=800&text=Nails+Course",
    description:
      "Bëhuni specialist i kualifikuar në kujdesin e thonjve dhe trajtimeve estetike. Mësoni teknikat e manikyr, pedikyr, dhe aplikimin e thonjve artificialë.",
    longDescription:
      "Ky kurs gjashtëmujor për Manikyr & Pedikyr synon të formojë profesionistë të kualifikuar në kujdesin e thonjve dhe trajtimet estetike të duarve dhe këmbëve. Në modulën e parë, do të njiheni me bazat e higjienës profesionale dhe anatominë e thonjve, duke studiuar shkaktarët e problemeve të zakonshme si kërpudhat, thonjtë e brishtë dhe inflamacionet. Në modulën e manikyrit, do të mësoni teknika të avancuara për prerje, formësim, zhveshje të epidermës së tepërt, dhe aplikim të polishes. Pjesa praktike do të përfshijë trajtimet me gel-lak dhe akrilik, ku do të praktikoni formësimin e thonjve, aplikimin e shtresa ngjitëse dhe krijimin e dizajneve artistike. Në modulën e dytë, do të përqendroheni në pedikyrin profesional: masazhin e këmbëve, exfoliation, dhe masazh për trajtime relaksuese. Do të praktikoni teknika të sigurt të prerjes së thonjve të këmbëve dhe trajtimin e thonjve incarnuar, si dhe aplikimin e polish-it dhe teknikat e masazhit relaksues. Një pjesë kyçe e kursit është aplikimi i thonjve artificialë: do të mësoni teknikat e akrilit dhe kolazhit të thonjve, si dhe si të krijoni forma të ndryshme dhe dekorime me nail art. Gjithashtu, do të zhvilloni aftësitë e komunikimit me klientin dhe menaxhimit të terminëve në sallon. Në fund të kursit, do të fitoni njohuri të plotë për të hapur një sallon manikyr & pedikyr, ose për t’u punësuar në ambiente luksoze.",
    instructors: [
      {
        name: "Mirela Berisha",
        role: "Manikyriste & Pedikyriste",
        image: "/placeholder.svg?height=200&width=200&text=Instructor",
        bio: "Me mbi 7 vite përvojë në industrinë e kujdesit të thonjve dhe certifikime ndërkombëtare në nail art.",
      },
    ],
    curriculum: [
      {
        title: "Moduli 1: Higjiena dhe Anatomia e Thonjve",
        lessons: [
          "Rëndësia e higjienës profesionale",
          "Anatomia e thonjve dhe lëkurës përreth",
          "Diagnostikimi i problemeve të zakonshme (kërpudhat, inflamacionet)",
          "Parandalimi i infeksioneve në sallon",
        ],
      },
      {
        title: "Moduli 2: Teknikat e Manikyrit",
        lessons: [
          "Prerja dhe formësimi i thonjve",
          "Aplikimi i polish-it dhe teknikat e gel-lakut",
          "Trajtimi i lëkurës së tepërt dhe zhveshja e kutikulës",
          "Nail art bazike dhe dizajne të avancuara",
        ],
      },
      {
        title: "Moduli 3: Aplikimi i Thonjve Artificialë",
        lessons: [
          "Zgjedhja e materialeve: akrilik vs gel",
          "Përgatitja dhe aplikimi i bazës ngjitëse",
          "Shtrirja e akrilit dhe ndërtimi i formës",
          "Teknikat e dekorimit 3D dhe nail art profesional",
        ],
      },
      {
        title: "Moduli 4: Teknikat e Pedikyrit",
        lessons: [
          "Pastrimi i thellë i këmbëve dhe exfoliacioni",
          "Prerja dhe formësimi i thonjve të këmbëve",
          "Masazhi relaksues për këmbë dhe trajtimet e kujdesit të thonjve",
          "Aplikimi i polish-it dhe trajtimet terapeutike",
        ],
      },
      {
        title: "Moduli 5: Menaxhimi i Sallonit",
        lessons: [
          "Komunikimi efektiv me klientin",
          "Menaxhimi i terminëve dhe çmimet e shërbimeve",
          "Marketingu bazë për tërheqjen e klientëve",
          "Mbajtja e dokumentacionit dhe siguria financiare",
        ],
      },
    ],
    benefits: [
      "Certifikim profesional për manikyr & pedikyr",
      "Trajnim praktik me produkte dhe pajisje profesionale",
      "Zhvillimi i aftësive artistike në nail art",
      "Mundësi punësimi në sallone luksoze ose studio estetike",
      "Njohuri për menaxhimin e një salloni të suksesshëm",
      "Mbështetje për zhvillimin e portofolit dhe marketingun",
    ],
    materials: [
      "Set profesional brushash dhe pajisje për manikyr/pedikyr",
      "Produkte premium për exfoliation dhe trajtime të lëkurës",
      "Polishes të markave të njohura ndërkombëtare",
      "Materiale për nail art 3D (pigmente, kristale, stencils)",
      "Manuale dhe udhëzues bazë për estetistë",
    ],
    testimonials: [
      {
        name: "Diana Hoxha",
        role: "Specialiste Manikyr",
        image: "/placeholder.svg?height=100&width=100&text=Student",
        text: "Ky kurs më ofroi njohuri të thella dhe eksperiencë praktike. Tani drejtoj salonin tim dhe kam klientë të rregullt që vlerësojnë punën time profesionale.",
      },
      {
        name: "Elion Dema",
        role: "Pronari i Sallonit ‘Lule&Thonj’",
        image: "/placeholder.svg?height=100&width=100&text=Student",
        text: "Studentët e Afrodite Academy janë të përgatitur mirë dhe sjellin kreativitet në sallonin tonë. Kurset e tyre janë shumë profesionale.",
      },
    ],
    faqs: [
      {
        question: "A jam i/e detyruar të blej produktet e mia?",
        answer:
          "Jo, në fillim ju sigurojmë produktet bazë për trajnim. Për punën profesionale, rekomandojmë të investoni në produkte cilësore për rezultate afatgjata.",
      },
      {
        question: "Sa kohë zgjat stazhi praktik?",
        answer:
          "Stazhi praktik zgjat 20 orë dhe zhvillohet në sallonet e partnerëve tanë. Në këtë mënyrë, ju merrni eksperiencë reale drejt rrugës së punës profesionale.",
      },
      {
        question: "A marr certifikatë pas përfundimit të kursit?",
        answer:
          "Po, pas kalimit të provimeve praktike dhe teorike, do të merrni certifikatën e Afrodite Academy, e njohur nga partnerë të ndryshëm në industrinë e bukurisë.",
      },
      {
        question: "A mund të punoj në të huaj pas këtij kursi?",
        answer:
          "Po, certifikata jonë është e akredituar dhe ju lejon të aplikoni për punë edhe në shtetet e BE-së dhe në vendet e tjera që njohin standardet ndërkombëtare të estetistëve.",
      },
    ],
    featured: false,
    students: 18,
  },
  {
    id: 3,
    title: "Kurs Profesional për Estetikë",
    category: "esthetics",
    duration: "9 muaj",
    durationCategory: "9-mujor",
    level: "Mesatar deri në të Avancuar",
    price: "65,000 Lekë",
    startDate: "10 Qershor 2025",
    schedule: "E Hënë, E Mërkurë, E Premte (18:00 - 21:00)",
    image: "/placeholder.svg?height=600&width=800&text=Esthetics+Course",
    description:
      "Mësoni trajtimet më të avancuara të lëkurës dhe procedurat estetike. Kursi përfshin trajtime faciale, depilim, dhe teknika të tjera estetike.",
    longDescription:
      "Ky kurs nëntëmujor për Estetikë ju ofron njohuritë që ju nevojiten për të punuar si estetist profesional në sallonet më të mira dhe spa-t luksoze. Fillimisht, do të mësoni bazat e anatonomisë dhe fiziologjisë së lëkurës: llojet dhe karakteristikat e lëkurës, strukturën e kolagjenit dhe elastinës, si dhe çrregullimet e zakonshme si acne, pigmentim dhe rrudha. Në modulin e parë praktik, do të zhvilloni aftësi për trajtime faciale të pastrimit të thellë, peeling kimik dhe mikrodermoabrazion, duke përdorur aparatura moderne. Më pas, do të mësoni teknikat e masazhit të fytyrës për stimulimin e qarkullimit dhe përmirësimin e tonit të lëkurës. Një pjesë e rëndësishme janë trajtimet anti-aging duke përdorur radiofrekuencë dhe ultratinguj, të cilat i japin lëkurës rinovim dhe elasticitet. Pjesa e depilimit përfshin dyllin tradicional, shugaring dhe teknikat me lazer, duke nxjerrë në pah protokollet e sigurisë dhe kujdesit pas-procedurës. Në modulën e joproduktive, do të fokusoheni në aparaturat trupore: trajtime anticelulitike, masazh limfatik, dhe trajtime me balte ose algë për rigjenerimin e lëkurës së trupit. Gjithashtu, do të mësoni bazat e makeup-it profesional për fotosesionet estetikë, konturimin dhe stilimin e fytyrës. Emërtimet e projekteve online dhe krijimi i një plani biznesi për sallonet estetike janë pjesë e planit mësimor, që ju lejon të kuptoni marketingun, menaxhimin e klientit dhe blerjen e produkteve profesionale. Në fund të kursit, do të dini të operoni në mënyrë autonome, të zhvilloni menu trajtimesh që synojnë nevojat specifike të klientit, dhe të ndërtoni një imazh profesionist në industrinë e bukurisë.",
    instructors: [
      {
        name: "Eriona Kola",
        role: "Estetiste & Trainer",
        image: "/placeholder.svg?height=200&width=200&text=Instructor",
        bio: "Me 10 vite përvojë në estetika të avancuar dhe licencë ndërkombëtare për trajtime me lazer.",
      },
    ],
    curriculum: [
      {
        title: "Moduli 1: Anatomia dhe Fiziologjia e Lëkurës",
        lessons: [
          "Strukturat bazë të lëkurës",
          "Procesi i rinovimit qelizor",
          "Çrregullimet e zakonshme (acne, hyperpigmentation)",
          "Analiza e lëkurës dhe konsulta me klientin",
        ],
      },
      {
        title: "Moduli 2: Trajtimet Faciale",
        lessons: [
          "Pastrimi i thellë dhe exfoliation mekanik",
          "Peeling kimik dhe maska të specializuara",
          "Mikrodermoabrazion dhe trajtime anti-ageing",
          "Masazh profesional i fytyrës dhe teknikë rilaksuese",
        ],
      },
      {
        title: "Moduli 3: Depilim dhe Menaxhim i Lëkurës",
        lessons: [
          "Depilim me dyllë profesional",
          "Teknika shugaring dhe kujdes post-depilim",
          "Depilim me lazer: protokollet e sigurisë",
          "Trajtimet e shkurtimit dhe menaxhimit të qimeve të errëta",
        ],
      },
      {
        title: "Moduli 4: Aparatura Estetike Trupore",
        lessons: [
          "Trajtimet anticelulitike me ultratinguj",
          "Radiofrekuenca për ngushtimin e lëkurës",
          "Masazh limfatik manual dhe aparatike",
          "Trajtimet me balte, algë dhe produkte natyrale",
        ],
      },
      {
        title: "Moduli 5: Makeup Profesional dhe Menaxhim Estetik",
        lessons: [
          "Makeup për fotosesione dhe evente profesionale",
          "Teknikat e konturimit dhe highlighter",
          "Krijimi i menu-trajtimeve për sallonin tuaj",
          "Marketingu dhe menaxhimi i klientit në estetika",
        ],
      },
    ],
    benefits: [
      "Certifikim profesional për estetist të avancuar",
      "Punë praktike në klinika partnerë dhe spa luksoze",
      "Akses në teknologjitë më të fundit estetike",
      "Krijimi i një portofoli me trajtime reale",
      "Mundësi punësimi në klinika dhe sallone të luksit",
      "Mbështetje për hapjen e qendrave të pavarura estetike",
    ],
    materials: [
      "Produkte kozmetike premium për trajtime faciale",
      "Dyll dhe pajisje për depilim profesional",
      "Aparatura për radiofrekuencë dhe ultratinguj",
      "Balte natyrale dhe algë për maska trupore",
      "Manuale dhe literaturë mbi teknologjitë estetike",
    ],
    testimonials: [
      {
        name: "Ardita Leka",
        role: "Estetiste Profesionale",
        image: "/placeholder.svg?height=100&width=100&text=Student",
        text: "Pas këtij kursi, mora mundësinë të punoj në një spa luksoz; njohuritë që fitova më hapën dyert e industrisë.",
      },
      {
        name: "Jonida Krasniqi",
        role: "Pronare Salon 'Elegance'",
        image: "/placeholder.svg?height=100&width=100&text=Student",
        text: "Studentët e këtij programi janë shumë të përgatitur dhe saktë në teknikat estetike. Bashkëpunojmë rregullisht për stazhe praktike.",
      },
    ],
    faqs: [
      {
        question: "A duhet të kem përvojë paraprake në estetika?",
        answer:
          "Jo, kursi fillon nga bazat, por duhet të keni dëshirë të mësoni dhe të punoni intensivisht me praktika të ndryshme.",
      },
      {
        question: "A marr certifikatë ndërkombëtare pas përfundimit?",
        answer:
          "Po, certifikata është e njohur ndërkombëtarisht dhe ju lejon të aplikoni për punë brenda dhe jashtë vendit.",
      },
      {
        question: "Sa orë praktikë përfshin programi?",
        answer:
          "Programi përfshin të paktën 100 orë praktikë në klinika dhe spa të partnerëve tanë, për të siguruar aftësi të avancuara praktike.",
      },
      {
        question: "A përfshihen materialet e kursit në çmim?",
        answer:
          "Po, të gjitha materialet bazë dhe produktet për trajtime janë të përfshira në tarifën e kursit.",
      },
    ],
    featured: true,
    students: 16,
  },
  {
    id: 4,
    title: "Kurs Profesional për Qerpikë & Vetulla",
    category: "lashes",
    duration: "3 muaj",
    durationCategory: "3-mujor",
    level: "Fillestar deri në të Mesëm",
    price: "40,000 Lekë",
    startDate: "20 Qershor 2025",
    schedule: "E Mërkurë, E Premte (17:00 - 20:00)",
    image: "/placeholder.svg?height=600&width=800&text=Lashes+Course",
    description:
      "Specializohuni në aplikimin e qerpikëve artificialë dhe stilimin e vetullave. Mësoni teknikat e laminimit, extensioneve, dhe microblading.",
    longDescription:
      "Në këtë kurs tremujor për Qerpikë & Vetulla, do të fitoni ekspertizë të thelluar në trajtimet më të kërkuara estetike për sytë. Fillimisht, do të njiheni me anatominë e syrit dhe vetullave, mjetet profesionale dhe produktet më të fundit në treg. Në modulën e parë, do të mësoni teknikën e laminimit të vetullave: formësimin, ngritjen dhe ngjyrimin e vetullave në mënyrë natyrale, duke përdorur produktet më cilësore që forcojnë folikulat e flokëve. Pastaj, do të eksploroni microblading-un—një metodë semipermanente për të krijuar fije realiste të vetullave me pigment të sigurt. Në modulën tjetër, do të përqendroheni në extensionet e qerpikëve: do të mësoni llojet (classic, volume, hybrid), teknikat e aplikimit të qerpikëve individualë dhe qerpikëve flaç, si dhe mënyrën e krijimit të formave të përshtatura sipas fytyrës së klientit. Pjesa praktike do të zhvillohet në modele reale nën mbikëqyrjen e afërt të instruktorëve. Për më tepër, do të njihësh teknikat e heqjes së qerpikëve në mënyrë të sigurt dhe kujdesin pas-procedurës për ruajtjen e shëndetit të qerpikëve natyralë. Një modul i veçantë fokusohet në mikroblading-in 3D dhe teknikat për ngjyrosje dhe korrigjim, për rezultate më natyrale. Në fund, do të mësoni baza të marketingut dhe menaxhimit të terminëve në sallon, si dhe këshilla për promovimin e shërbimit tuaj në rrjetet sociale. Pas përfundimit, do të jeni të pajisur me aftësitë për të punuar si teknik lash & brow në klinika estetike dhe sallone luksoze.",
    instructors: [
      {
        name: "Elena Pjetri",
        role: "Teknike Lash & Brow",
        image: "/placeholder.svg?height=200&width=200&text=Instructor",
        bio: "Me 5 vite përvojë në lash extensions dhe microblading, partner i markave premium ndërkombëtare.",
      },
    ],
    curriculum: [
      {
        title: "Moduli 1: Anatomia dhe Produktet",
        lessons: [
          "Struktura e qerpikëve dhe folikulat e vetullave",
          "Llojet e fibrave të qerpikëve: natural, silk, mink",
          "Produktet kimike dhe pigmentet e sigurt",
          "Higjiena dhe protokollet e sigurisë",
        ],
      },
      {
        title: "Moduli 2: Laminimi dhe Push-Up për Vetulla",
        lessons: [
          "Përgatitja e vetullave dhe pastrimi i thellë",
          "Aplikimi i tretësirave për ngritje dhe ngjyrim",
          "Teknikat e formësimit sipas drejtimit të flokëve",
          "Trajtimi post-laminim dhe kujdesi pas procedurës",
        ],
      },
      {
        title: "Moduli 3: Microblading & Ombre Brow",
        lessons: [
          "Zgjedhja e pigmentit dhe matja e vetullave",
          "Teknika manuale e krijimit të fijeve natyrale",
          "Stili ombre për rezultatin më të butë",
          "Kujdesi 7-14 ditë pas procedurës dhe rifreskime",
        ],
      },
      {
        title: "Moduli 4: Extensione të Qerpikëve",
        lessons: [
          "Përgatitja e qerpikëve natyralë dhe aplikimi i xhelatinos",
          "Teknika classic lash: 1 në 1",
          "Teknika volume lash: 2D-5D",
          "Korrigjimi, ripërtëritja dhe kujdesi pas-procedurë",
        ],
      },
      {
        title: "Moduli 5: Menaxhimi i Sallonit & Marketing",
        lessons: [
          "Ndërtimi i portofolit profesional dhe fotografimi",
          "Marketingu në rrjetet sociale për lash & brow studio",
          "Menaxhimi i rezervimeve dhe kujdesi ndaj klientit",
          "Partneritetet me markat e produkteve kozmetike",
        ],
      },
    ],
    benefits: [
      "Çertifikim i specializuar për lash & brow techniques",
      "Trajnim praktik me modele reale nën mbikëqyrje instruktori",
      "Produkte premium të përfshira në modulët e laminimit dhe microblading",
      "Portofol me para pas/para procedurë për marketing personal",
      "Mundësi punësimi në klinika estetike dhe salonë luksoze",
      "Mbështetje për hapjen e qendrave të specializuara lash & brow",
    ],
    materials: [
      "Kombinime pigmenti për microblading dhe ombre brow",
      "Lëndë shtesë për laminim dhe ngritje të vetullave",
      "Fije qerpikësh silki, mink dhe volumi",
      "Ngjitës premium për lash extensions",
      "Instrumente sterile manuale për microblading",
    ],
    testimonials: [
      {
        name: "Noela Hoxha",
        role: "Teknike Lash Extensions",
        image: "/placeholder.svg?height=100&width=100&text=Student",
        text: "Ky kurs më hapi mundësinë të punoj në një salon luksoz dhe të arrij klientë VIP. Teknikat që mësova ishin jashtëzakonisht praktike.",
      },
      {
        name: "Alketa Krasniqi",
        role: "Pronare 'BeautyEyes'",
        image: "/placeholder.svg?height=100&width=100&text=Student",
        text: "Studentët nga Afrodite Academy janë të përgatitur mirë dhe sjellin cilësi në shërbimet lash & brow që ofrojmë në salonin tonë.",
      },
    ],
    faqs: [
      {
        question: "Sa kohë zgjasin rezultatet e microblading-ut?",
        answer:
          "Rezultati i microblading-ut mund të zgjasë 12–18 muaj, varësisht kujdesit pas procedurës dhe tipit të lëkurës.",
      },
      {
        question: "A punohet vetëm me fibër qerpikësh silki?",
        answer:
          "Gjatë kursit do të njiheni me fibrat e ndryshme (silki, mink, volumi). Do të praktikoni secilën teknikë për të kuptuar ngjyrën dhe shkëlqimin e dëshiruar.",
      },
      {
        question: "A përfshihen moderatë pas-trajnimi?",
        answer:
          "Po, do të keni 2 seanca ripërtëritje falas brenda gjashtë muajve pas përfundimit të kursit, për të përsosur teknikat.",
      },
      {
        question: "A mund të hap vetë biznesin pas këtij kursi?",
        answer:
          "Po, kursi përfshin modul menaxhimi biznesi dhe marketing, që ju ndihmon të nisni dhe promovoni hapat e parë të studios tuaj lash & brow.",
      },
    ],
    featured: false,
    students: 12,
  },
  {
    id: 5,
    title: "Kurs Profesional për Stilim Flokësh",
    category: "hair",
    duration: "6 muaj",
    durationCategory: "6-mujor",
    level: "Fillestar deri në të Avancuar",
    price: "55,000 Lekë",
    startDate: "5 Korrik 2025",
    schedule: "E Hënë, E Mërkurë, E Premte (18:00 - 21:00)",
    image: "/placeholder.svg?height=600&width=800&text=Hair+Course",
    description:
      "Mësoni teknikat e stilimit të flokëve për evenimente të ndryshme. Kursi përfshin prerje, ngjyrosje, dhe stilime të ndryshme.",
    longDescription:
      "Ky kurs gjashtëmujor për Stilim Flokësh kombinon teorinë e fundit me praktikë intensive për t’ju bërë një stilist profesionist. Gjatë dy muajve të parë, do të përqendroheni në bazat e prerjes: teknikat e prerjes së thatë dhe të lagur, formimin e bakëve dhe prerjet graduale. Në modulën e dytë, do të mësoni shkallët e ngjyrimit: balayage, ombré, teknikat e ngrohta dhe të ftohta për përshtatjen e nuancave. Më pas, do të kaloni në stilimin e flokëve për evente speciale—stilime klasike për dasma, stile avant-garde për shfaqje mode, dhe hairstyle modern për fotosesione. Do të praktikoni përdorimin e aparaturave (curling iron, flat iron) dhe teknikat e fiksimit për një rezultat që zgjat. Një modul i veçantë është masazhi i shkurtër i kokës dhe trajtimet e kujdesit të flokëve (kolagjen, masë dhe hidracion). Gjithashtu, do të fitoni njohuri mbi menaxhimin e një salloni: konsultimi me klientin, zgjedhja e produkteve profesional dhe krijimi i një portofoli për marketing. Në fazën përfundimtare, do të punoni në praktikë laboratorike dhe do të stazhoni në sallone partnerë, duke ndërtuar eksperiencë në situata reale. Pas përfundimit, do të jeni të aftë të punoni në sallone premium, të udhëhiqni ekipin tuaj dhe të krijoni stylet tuaja të veçanta.",
    instructors: [
      {
        name: "Ergys Lleshi",
        role: "Stilist Kryesor",
        image: "/placeholder.svg?height=200&width=200&text=Instructor",
        bio: "Me 12 vite përvojë në industrinë e modës dhe kurse të avancuara në Milano dhe Paris.",
      },
    ],
    curriculum: [
      {
        title: "Moduli 1: Bazat e Prerjes dhe Anatomia e Flokëve",
        lessons: [
          "Analiza e llojeve të flokëve dhe strukturës së tyre",
          "Teknikat e prerjes së thatë vs prerja e lagur",
          "Prerjet klasike: bob, lob, pixie",
          "Parandalimi i dëmtimeve gjatë prerjes",
        ],
      },
      {
        title: "Moduli 2: Teknikat e Ngjyrimit Profesionist",
        lessons: [
          "Balayage dhe ombré: teoria e ngjyrave",
          "Ngjyrat e ndritshme dhe teknikat e tonësimit",
          "Trajtimet korrigjuese të ngjyrës (tonim, neutralizim)",
          "Mënyrat për të ruajtur shëndetin e flokëve gjatë ngjyrimit",
        ],
      },
      {
        title: "Moduli 3: Stilime për Evenimente",
        lessons: [
          "Krepe dhe valë për dukje glamuroze",
          "Stilime elegante për dasma dhe evente formale",
          "Coiffures për shfaqje mode dhe fotosesione",
          "Teknikat e fiksimit dhe përdorimit të aksesorëve",
        ],
      },
      {
        title: "Moduli 4: Kujdesi Profesional i Flokëve",
        lessons: [
          "Trajtimet me maske kolagjeni dhe hidratuese",
          "Masazhi i shkurtër i kokës dhe stimulimi i qarkullimit të gjakut",
          "Përdorimi i aparaturave për përmirësimin e shkëlqimit",
          "Parandalimi dhe trajtimi i dëmtimeve nga ngrohja",
        ],
      },
      {
        title: "Moduli 5: Menaxhimi i Sallonit & Marketing",
        lessons: [
          "Konsultimi fillestar me klientin: identifikimi i nevojave",
          "Zgjedhja e produkteve dhe markave profesionale",
          "Strategjitë e marketingut në rrjetet sociale",
          "Ndërtimi i një portofoli digjital dhe bashkëpunimi me influencues",
        ],
      },
    ],
    benefits: [
      "Certifikim profesional në stilim flokësh",
      "Punë praktike në laboratorë me aparatura moderne",
      "Akses në produkte dhe ngjyra të markave premium",
      "Trajnime nga stilistë me përvojë ndërkombëtare",
      "Mundësi punësimi në studio luksoze dhe shërbime private",
      "Mbështetje për hapjen e një saloni personal dhe branding",
    ],
    materials: [
      "Gërshërë profesionale dhe vegla për prerje",
      "Ngjyrues cilësor dhe produkte për trajtime",
      "Ngrohës dhe diffuzorë të avancuar",
      "Pajisje për masazh i shkurtër dhe trajtime spërkatëse",
      "Manuale dhe tutorë video për referencë",
    ],
    testimonials: [
      {
        name: "Jonida Hysa",
        role: "Stiliste në ‘ChicCuts Salon’",
        image: "/placeholder.svg?height=100&width=100&text=Student",
        text: "Me këtë kurs, arrita të përmirësoj ndjeshëm aftësitë e mia. Tani klientët vijnë për ngjyrosje të personalizuar dhe prerje artistike.",
      },
      {
        name: "Redon Greca",
        role: "Pronari i ‘GlamHair Studio’",
        image: "/placeholder.svg?height=100&width=100&text=Student",
        text: "Studentët e Afrodite Academy janë të aftë, të përgatitur dhe të kujdesshëm me detajet. Ne i mirëpresim vazhdimisht për stazhe praktike në sallonin tonë.",
      },
    ],
    faqs: [
      {
        question: "A duhet të kem parakusht ndonjë eksperiencë paraprake?",
        answer:
          "Jo, kursi fillon nga baza, por ne rekomandojmë që të keni dëshirë të mësoni dhe kreativitet për t’u avancuar shpejt.",
      },
      {
        question: "A marr certifikatë ndërkombëtare?",
        answer:
          "Po, certifikata jonë pranohet ndërkombëtarisht, duke ju lejuar të punoni edhe jashtë vendit në sallonet më të mira.",
      },
      {
        question: "Cilat marka të produkteve përdoren gjatë kursit?",
        answer:
          "Ne punojmë me markat më të njohura si Schwarzkopf, Redken, dhe L’Oréal Professionnel për të siguruar cilësinë më të lartë.",
      },
      {
        question: "A ofrohen stazhe praktike pas përfundimit të kursit?",
        answer:
          "Po, ofrojmë mundësi stazhesh falas në sallonet dhe klinikat partnere, për t’ju ndihmuar të fitojnë përvojë të drejtpërdrejtë.",
      },
    ],
    featured: false,
    students: 20,
  },
  {
    id: 6,
    title: "Kurs Profesional për Masazh",
    category: "massage",
    duration: "9 muaj",
    durationCategory: "9-mujor",
    level: "Fillestar deri në të Mesëm",
    price: "60,000 Lekë",
    startDate: "15 Korrik 2025",
    schedule: "E Martë, E Enjte (18:00 - 21:00)",
    image: "/placeholder.svg?height=600&width=800&text=Massage+Course",
    description:
      "Mësoni teknikat e masazhit relaksues dhe terapeutik. Kursi përfshin masazh suedez, masazh me gurë të nxehtë, dhe teknika të tjera.",
    longDescription:
      "Kursi Profesional për Masazh në Afrodite Academy është një program nëntëmujor i dizajnuar për t’ju formuar si terapeut masazhi me ekspertizë të gjerë. Gjatë dy muajve të parë, do të fokusoheni në anatominë dhe fiziologjinë bazë, duke kuptuar strukturën e muskujve, skeletin dhe sistemin nervor. Pas kësaj, do të kaloni në masazhin suedez, ku do të mësoni lëvizjet themelore (effleurage, petrissage, tapotement) dhe mënyrën e përshtatjes së teknikës sipas nevojave të klientit. Një pjesë e rëndësishme është masazhi terapeutik, që përfshin teknikat e mobilizimit të muskujve, shtrirjen e indit të butë, dhe masazhet specifike për lehtësimin e dhimbjeve kronike. Më pas, do të trajtojmë masazhin me gurë të nxehtë, ku do të merrni njohuri për përgatitjen e gurëve, vendosjen e tyre në pikat e duhur dhe integrimin e tyre në seancën e masazhit për një përvojë relaksuese dhe rigjeneruese. Gjithashtu, do të njiheni me masazhin aromaterapeutik, duke përdorur vajra esencialë për të përmirësuar efektet e lëshimit të stresit dhe përmirësimin e qarkullimit. Në fazën finale, do të eksploroni masazhin Ayurvedik dhe masazhin e sportistëve, duke mësuar për protokollet e ndryshme dhe mënyrën e përshtatjes për klientë me nevoja specifike. Programi përfshin edhe etikën profesionale, kundërindikacionet për çdo teknikë, dhe menaxhimin e një qendre masazhi. Pas suksesit në provimet praktike dhe teorike, do të merrni një certifikatë profesionale e cila ju lejon të punoni në spa luksoze, qendra wellness apo të hapni klinikën tuaj private.",
    instructors: [
      {
        name: "Dritan Berisha",
        role: "Masazher & Instruktor",
        image: "/placeholder.svg?height=200&width=200&text=Instructor",
        bio: "Me mbi 10 vite përvojë në fushën e masazhit terapeutik dhe trajnime ndërkombëtare.",
      },
    ],
    curriculum: [
      {
        title: "Moduli 1: Anatomia dhe Fiziologjia e Masazhit",
        lessons: [
          "Struktura e muskujve dhe lidhjet skeletore",
          "Sistemi nervor dhe qarkullimi i gjakut",
          "Kundërindikacionet dhe etika profesionale",
          "Analiza e nevojave të klientit (konsultë fillore)",
        ],
      },
      {
        title: "Moduli 2: Masazhi Suedez",
        lessons: [
          "Effleurage (lëvizjet e buta në sipërfaqen e lëkurës)",
          "Petrissage (gjuajtja e mishit)",
          "Tapotement (lëvizje ritmike)",
          "Friction (fërkim lokal për problemet muskulore)",
        ],
      },
      {
        title: "Moduli 3: Masazh Terapeutik",
        lessons: [
          "Teknikat për lehtësimin e dhimbjeve kronike",
          "Mobilizimi i indit të butë dhe çlirim myofascial",
          "Trajtimi për pirgje muskulore dhe spazma",
          "Masazh i specializuar për probleme të shpinës dhe qafës",
        ],
      },
      {
        title: "Moduli 4: Masazh me Gurë të Nxehtë & Aromaterapi",
        lessons: [
          "Përgatitja dhe ngrohja e gurëve",
          "Integrimi i gurëve në seancën terapeutike",
          "Aromaterapia: zgjedhja e vajrave esencialë",
          "Masazh relaksues me vajra aromatike",
        ],
      },
      {
        title: "Moduli 5: Masazhi Sportiv dhe Ayurvedik",
        lessons: [
          "Masazh i avancuar për sportistë dhe para/stërvitje",
          "Teknikat e masazhit pas një gare ose stërvitjeje intensive",
          "Parimet bazë të masazhit Ayurvedik",
          "Përgatitja e vajrave dhe trajtimet tradicionale Ayurvedike",
        ],
      },
    ],
    benefits: [
      "Certifikim profesional në masazh terapeutik",
      "Trajnim praktik me protokollet më të avancuara",
      "Përdorim i vajrave esencialë dhe teknikave Ayurvedike",
      "Stazh pune në spa dhe qendra wellness me përvojë reale",
      "Akses në teknologji të fundit për trajtime masazhi",
      "Këshilla për hapjen e klinikës suaj të masazhit",
    ],
    materials: [
      "Tavolina masazhi me cilësi profesionale",
      "Gurë bazalt për masazh me temperaturë të lartë",
      "Vajrra esenciale të markave premium",
      "Textile dhe produktet për higjienën e klientit",
      "Manuale dhe video udhëzuese për çdo teknikë",
    ],
    testimonials: [
      {
        name: "Arben Krasniqi",
        role: "Masazher Klinik",
        image: "/placeholder.svg?height=100&width=100&text=Student",
        text: "Ky kurs më dha bazat e forta që më nevojiteshin për të filluar karrierën time si terapeut masazhi. Tani punoj në një spa të njohur dhe vazhdoj të zhvilloj aftësitë e mia.",
      },
      {
        name: "Lindita Shehu",
        role: "Ndihmëse Masazhi",
        image: "/placeholder.svg?height=100&width=100&text=Student",
        text: "Instruktorët ishin shumë të përkushtuar dhe të durueshëm. Mësova shumë për anatomisë dhe teknikat e masazhit, dhe tani ndihem e sigurt për të aplikuar për punë në këtë fushë.",
      },
    ],
    faqs: [
      {
        question: "A është i nevojshëm ndonjë parakusht për t’u regjistruar?",
        answer:
          "Jo, kursi është i hapur për të gjithë ata që kanë dëshirë të mësojnë. Udhëzimet fillestare mbulojnë anatominë bazë, prandaj ju përgatitim nga fillimi.",
      },
      {
        question: "Sa kohë zgjat stazhi praktik?",
        answer:
          "Stazhi praktik zgjat 30 orë dhe zhvillohet në qendra të ndryshme wellness me mbikëqyrjen e instruktorëve tanë.",
      },
      {
        question: "A kam nevojë për pajisje personale?",
        answer:
          "Jo, të gjitha pajisjet bazë (tavolina masazhi, vajra, peshqirë) ofrohen nga akademia. Më vonë, mund të investoni në pajisje personale sipas dëshirës.",
      },
      {
        question: "Çfarë certifikimi marr në fund?",
        answer:
          "Merrni një certifikatë profesionale që vlen në tregun lokal dhe është e njohur nga partnerët tanë të spa-ve dhe klinikave të terapisë.",
      },
    ],
    featured: false,
    students: 15,
  },
  {
    id: 7,
    title: "Kurs Profesional për Kozmetikë të Avancuar",
    category: "esthetics",
    duration: "2 vjet",
    durationCategory: "2-vjeçar",
    level: "Avancuar",
    price: "120,000 Lekë",
    startDate: "1 Shtator 2025",
    schedule: "E Hënë, E Mërkurë, E Premte (17:00 - 21:00)",
    image: "/placeholder.svg?height=600&width=800&text=Advanced+Cosmetics",
    description:
      "Program i plotë për kozmetikë të avancuar që përfshin të gjitha aspektet e bukurisë dhe estetikës. Kursi përfshin trajnime të specializuara dhe praktikë profesionale.",
    longDescription:
      "Ky program dyvjeçar për Kozmetikë të Avancuar në Afrodite Academy është një diplomë e kualifikuar që synon të formojë ekspertë të kompletuar në fushën e bukurisë dhe estetikës. Në vitin e parë, do të përqendrohemi në teorinë themelore: histologjinë dhe fiziologjinë e lëkurës, kiminë kozmetike, branchet e ndryshme trajtimesh faciale dhe teknikat bazë estetike. Ju do të zhvilloni aftësi në trajtimet e pastrimit të thellë, mikrodermoabrazion, peeling kimik dhe masazhet anti-aging. Njohuritë praktike përfshijnë përdorimin e aparaturave moderne për radiofrekuencë, ultratinguj dhe LED terapi, që ndihmojnë në rigjenerimin qelizor dhe përmirësimin e elasticitetit të lëkurës. Po ashtu, do të eksploroni trajtimet trupore, duke përfshirë kriolipolizën, masazhin limfatik dhe modelimin e trupit. Përveç teknikave, do të mësoni bazat e makeup-it profesional për foto, video dhe evente të mëdha, duke përfshirë konturimin dhe teknikën 3D. Një komponent kyç i kushtohet menaxhimit të një klinike estetike: marketingu, menaxhimi i klientit, dhe strategjitë për ndërtimin e një marke të suksesshme. Pjesa e stazhit praktik zhvillohet në klinika dhe spa partnerë, ku do të fitoni përvojë të drejtpërdrejtë nën mbikëqyrjen e mentorëve tanë. Në vitin e dytë, do të thelloheni në trajtimet më të avancuara: laserterapi, trajtime anti-ageing me kombinim teknologjish, dhe procedura të specializuara për problemet dermatologjike. Në fund, do të keni aftësinë për të operuar, drejtuar projekte kërkimore dhe për të hapur vetë qendrën tuaj estetike me standarde ndërkombëtare.",
    instructors: [
      {
        name: "Erina Greca",
        role: "Kozmetologe Kryesore",
        image: "/placeholder.svg?height=200&width=200&text=Instructor",
        bio: "Me 15 vite përvojë në trajtime estetike të avancuara dhe certifikime ndërkombëtare në dermatologji kozmetike.",
      },
    ],
    curriculum: [
      {
        title: "Moduli 1: Histologjia & Fiziologjia e Lëkurës",
        lessons: [
          "Struktura e epidermës dhe dermës",
          "Roli i kolagjenit dhe elastinës",
          "Procesi i rinovimit qelizor",
          "Çrregullimet dermatologjike: acne, psoriasis, rosacea",
        ],
      },
      {
        title: "Moduli 2: Teknologjitë Faciale Avancuese",
        lessons: [
          "Laserterapi për akne dhe pigmentim",
          "Radiofrekuenca dhe ultratinguj për ngushtim lëkure",
          "Mikrodermoabrazion me diamant dhe trajtime anti-ageing",
          "LED terapi për rinovim qelizor dhe inflamacion",
        ],
      },
      {
        title: "Moduli 3: Trajtimet Trupore & Modelim",
        lessons: [
          "Kriolipoliza dhe reduktimi i yndyrës lokale",
          "Masazh limfatik manual dhe aparatike",
          "Trajtimet anticelulitike me ultratinguj dhe radiofrekuencë",
          "Përdorimi i baltes dhe algës për ringjallje të lëkurës trupore",
        ],
      },
      {
        title: "Moduli 4: Makeup Profesional & Fotografi Estetike",
        lessons: [
          "Makeup për fotosesion dhe video rekordime",
          "Teknikat e konturimit dhe highlight-it profesional",
          "Stilime për evente të mëdha dhe runway",
          "Fotografi estetike: ndriçimi, angazhimi dhe paraqitja e lëkurës",
        ],
      },
      {
        title: "Moduli 5: Menaxhim i Qendrës Estetike",
        lessons: [
          "Marketingu digjital për klinika estetike",
          "Zgjedhja e produkteve dhe markave profesionale",
          "Krijimi i standardeve të shërbimit ndaj klientit",
          "Kërkime dhe inovacion në teknologjitë estetike",
        ],
      },
    ],
    benefits: [
      "Diplomë e kualifikuar dyvjeçare në Kozmetikë Avancuar",
      "Trajnime praktike në klinika partnerë me teknologji të avancuara",
      "Akses në seminare ndërkombëtare dhe konferenca estetike",
      "Portofol me trajtime reale për marketing personal",
      "Përgatitje për licenca profesionale në BE dhe SHBA",
      "Mbështetje për hapjen e klinikave dhe qendrave estetike",
    ],
    materials: [
      "Aparatura laser dhe radiofrekuencë me versione medikalë",
      "Set trajtimesh LED për fytyrë dhe trup",
      "Balte natyrale, algë dhe maska premium",
      "Produkte skincare të specializuara për probleme dermatologjike",
      "Manuale të detajuara dhe video trajnuese për çdo modul",
    ],
    testimonials: [
      {
        name: "Rea Doci",
        role: "Estetiste në ‘Dermaluxe Clinic’",
        image: "/placeholder.svg?height=100&width=100&text=Student",
        text: "Ky program më dha aftësitë e nevojshme për të punuar me teknologjitë më të fundit estetike. Tani drejtoj departamentin e trajtimeve me laser në klinikën time.",
      },
      {
        name: "Gerti Marku",
        role: "Pronare 'EliteSkin Lounge'",
        image: "/placeholder.svg?height=100&width=100&text=Student",
        text: "Stafi ynë vazhdimisht sjell studentët e Afrodite Academy për stazhe. Aftësitë e tyre teknike dhe profesionale janë të jashtëzakonshme.",
      },
    ],
    faqs: [
      {
        question: "Çfarë licencash ndërkombëtare fiton pas përfundimit?",
        answer:
          "Programi përgatit studentët për licencat në BE dhe SHBA, për trajtime me laser dhe teknologji të avancuara estetike.",
      },
      {
        question: "A është i detyrueshëm stazhi praktik?",
        answer:
          "Po, stazhi praktik prej 200 orësh në klinika dhe laboratorë partnerë është i detyrueshëm për përfundimin e kursit.",
      },
      {
        question: "Çfarë prova ekzaminohen në fund?",
        answer:
          "Ekzaminim teorik mbi anatominë dhe teknologjitë, plus provë praktike në trajtime faciale, trupore dhe makeup profesional.",
      },
      {
        question: "Sa shpesh ndryshohen programet sipas teknologjive të reja?",
        answer:
          "Programi ri-rishikohet çdo vit për t’përfshirë teknologjitë më të fundit dhe trendet globale në estetike. Rekomandohet të jeni të azhurnuar me seminarë ekstra.",
      },
    ],
    featured: true,
    students: 10,
  },
  {
    id: 8,
    title: "Kurs Profesional për Ndihmës në Masazheri",
    category: "massage",
    duration: "3 muaj",
    durationCategory: "3-mujor",
    level: "Fillestar",
    price: "40,000 Lekë",
    startDate: "1 Qershor 2025",
    schedule: "E Martë, E Enjte (17:00 - 20:00), E Shtunë (10:00 - 14:00)",
    image: "/placeholder.svg?height=600&width=800&text=Massage+Course",
    description:
      "Kursi Profesional për Ndihmës në Masazheri në Afrodite Academy është dizajnuar për t'ju dhënë njohuritë dhe aftësitë bazë për të filluar një karrierë në fushën e masazhit. Gjatë këtij kursi 3-mujor, ju do të mësoni bazat e masazhit dhe teknikat themelore për të ndihmuar masazherët profesionistë.",
    longDescription:
      "Ky kurs është i përshtatshëm për fillestarët që dëshirojnë të hyjnë në fushën e masazhit dhe mirëqenies. Nën udhëheqjen e instruktorëve me përvojë, ju do të zhvilloni një kuptim të anatomisë bazë, teknikave të masazhit, dhe protokolleve të trajtimit. Në modulën e parë, do të njiheni me sistemet kryesore të trupit (muskujt, skeleti, sistemi nervor) dhe kundërindikacionet që mund të lindin në masazh. Pasi të keni fituar bazat teorike, do të praktikoni teknikat bazë të masazhit: effleurage, petrissage dhe tapotement, si dhe lëvizjet e masazhit limfatik. Gjatë modulës së dytë, do të mësoni masazhin suedez, duke përfshirë teknikat e effleurage, petrissage dhe friction. Pjesa praktike bazohet në modele reale, ku do të zhvilloni aftësitë e duhura për të punuar me klientë të ndryshëm. Në modulën e tretë, do të trajtojmë masazhin me gurë të nxehtë: përgatitjen e gurëve, vendosjen e tyre në pikat e duhura dhe integrimin e tyre në një seancë masazhi. Më tej, do të njiheni me masazhin sportiv: përgatitjen para garave, masazhin rigjenerues pas stërvitjes intensive dhe teknikat për parandalimin e dëmtimeve. Së fundi, do të mësoni etikat profesionale, rëndësinë e komunikimit me klientin dhe menaxhimin e dokumentacionit. Kursi përfshin trajnime praktike në një qendër masazhi, duke ju lejuar të aplikoni menjëherë njohuritë në situata reale. Në përfundim të kursit, do të merrni një certifikatë që vërteton aftësitë tuaja bazë në masazh dhe ju kualifikon për të punuar si ndihmës masazheri në klinika, spa dhe qendra wellness.",
    instructors: [
      {
        name: "Dritan Berisha",
        role: "Masazher & Instruktor",
        image: "/placeholder.svg?height=200&width=200&text=Instructor",
        bio: "Me mbi 10 vite përvojë në fushën e masazhit terapeutik dhe trajnime ndërkombëtare.",
      },
    ],
    curriculum: [
      {
        title: "Moduli 1: Bazat e Anatomisë dhe Fiziologjisë",
        lessons: [
          "Sistemet kryesore të trupit",
          "Anatomia e muskujve dhe skeletit",
          "Fiziologjia e sistemit nervor",
          "Kontraindikacionet për masazh",
        ],
      },
      {
        title: "Moduli 2: Teknikat Bazë të Masazhit",
        lessons: [
          "Lëvizjet themelore të masazhit",
          "Presioni dhe ritmi i duhur",
          "Pozicionimi i klientit",
          "Ergonomia dhe pozicionimi i masazherit",
        ],
      },
      {
        title: "Moduli 3: Masazhi Suedez",
        lessons: [
          "Historia dhe parimet e masazhit suedez",
          "Teknikat e effleurage, petrissage, dhe friction",
          "Sekuenca e plotë e masazhit suedez",
          "Adaptimi i teknikave për nevoja specifike",
        ],
      },
      {
        title: "Moduli 4: Masazhi me Gurë të Nxehtë",
        lessons: [
          "Përgatitja dhe përdorimi i sigurt i gurëve",
          "Teknikat e masazhit me gurë të nxehtë",
          "Integrimi i gurëve në një seancë masazhi",
          "Kujdesi dhe mirëmbajtja e gurëve",
        ],
      },
      {
        title: "Moduli 5: Etika Profesionale dhe Praktika e Biznesit",
        lessons: [
          "Etika dhe profesionalizmi",
          "Komunikimi me klientët",
          "Mbajtja e të dhënave dhe dokumentacioni",
          "Bazat e menaxhimit të biznesit",
        ],
      },
    ],
    benefits: [
      "Certifikim profesional në masazh",
      "Trajnim praktik me pajisje profesionale",
      "Njohuri të anatomisë dhe fiziologjisë",
      "Mundësi punësimi si ndihmës masazheri",
      "Bazë e fortë për studime të mëtejshme në masazh",
      "Mbështetje për zhvillimin e karrierës",
    ],
    materials: [
      "Manual studimi për anatominë dhe fiziologjinë",
      "Vajra dhe locione bazë për masazh",
      "Çarçafë dhe peshqirë për praktikë",
      "Materiale studimi dhe diagramë",
      "Set gurësh për masazh me gurë të nxehtë",
    ],
    testimonials: [
      {
        name: "Arben Krasniqi",
        role: "Ndihmës Masazher",
        image: "/placeholder.svg?height=100&width=100&text=Student",
        text: "Kursi për Ndihmës në Masazheri në Afrodite Academy më dha bazat e forta që më nevojiteshin për të filluar karrierën time. Tani punoj në një spa të njohur dhe vazhdoj të zhvilloj aftësitë e mia.",
      },
      {
        name: "Lindita Shehu",
        role: "Studente",
        image: "/placeholder.svg?height=100&width=100&text=Student",
        text: "Instruktorët ishin shumë të përkushtuar dhe të durueshëm. Mësova shumë për anatomisë dhe teknikat e masazhit, dhe tani ndihem e sigurt për të aplikuar për punë në këtë fushë.",
      },
    ],
    faqs: [
      {
        question: "A është i përshtatshëm ky kurs për fillestarët pa përvojë të mëparshme?",
        answer:
          "Po, ky kurs është dizajnuar posaçërisht për fillestarët që nuk kanë përvojë të mëparshme në masazh. Të gjitha teknikat mësohen nga zero.",
      },
      {
        question: "Çfarë mundësish punësimi do të kem pas përfundimit të kursit?",
        answer:
          "Pas përfundimit të kursit, ju mund të punoni si ndihmës masazheri në spa, qendra wellness, hotele, dhe klinika fizioterapie. Shumë studentë tanë gjejnë punë brenda 1-3 muajve pas diplomimit.",
      },
      {
        question: "A mund të vazhdoj studimet e mëtejshme pas këtij kursi?",
        answer:
          "Absolutisht! Ky kurs ofron bazat e nevojshme për të vazhduar me kurse më të avancuara në masazh terapeutik, masazh sportiv, ose specializime të tjera në fushën e masazhit dhe terapisë fizike.",
      },
      {
        question: "A përfshihen materialet në çmimin e kursit?",
        answer:
          "Po, të gjitha materialet e nevojshme për trajnim janë të përfshira në çmimin e kursit, përfshirë manualet e studimit, vajrat bazë për masazh, dhe aksesin në pajisjet profesionale gjatë orëve të praktikës.",
      },
    ],
    featured: false,
    students: 14,
  },
];
