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
  noCustomCrop?: boolean; // ← NEW! Indicates if the image should not be cropped
  description: string;
  longDescription: string;
  instructors?: Instructor[];
  curriculum?: CurriculumModule[];
  benefits?: string[];
  materials?: string[];
  testimonials?: Testimonial[];
  faqs?: FAQ[];
  featured: boolean;
  students: number;
  videoSrc?: string;
  enrolled?: number;
  link?: string;
  keywords?: string[];
  whatYouLearn?: string;
  // ← NEW!
  media?: {
    type: "image" | "video";
    src: string;
    alt?: string;
    noCustomCrop?: boolean;
  }[];
}

// —————————————————————————————————————————————————————————————
// Here is the “full” data for every course. 
// You can (and should) add more courses following this same shape.
// —————————————————————————————————————————————————————————————
export const courses: Course[] = [
{
id: 1,
title: "Kurs Kujdestar për Fëmijë",
category: "kujdestar-per-te-moshuar-dhe-femije",
duration: "560 orë",
durationCategory: "560 orë",
level: "Fillestar",
price: "",
startDate: "",
schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
image: "/courses/babysitter.webp",
videoSrc: "/videos/babysitter-video.webm",
description: "Program praktik për përkujdesje të sigurt, higjienike dhe zhvilluese për fëmijë të moshave të ndryshme.",
longDescription: "Trajton etikën dhe përgjegjësinë profesionale, zhvillimin psikologjik/emocional sipas moshave, higjienën dhe ushqyerjen e shëndetshme, si dhe aktivitete edukuese e zhvilluese (lojë, lexim, rutinë ditore).",
instructors: [
{
name: "Mimoza Shala",
role: "Pedagoge Kujdesi Fëmijësh",
image: "/placeholder.svg?height=200&width=200&text=Instructor",
bio: "Specialiste me eksperiencë në edukimin dhe përkujdesjen e fëmijëve në institucione arsimore dhe shtëpiake."
}
],
curriculum: [
{
title: "Etika & Përgjegjësia Profesionale",
lessons: [
"Roli dhe përgjegjësitë e kujdestarit ndaj fëmijës",
"Rregullat e etikës dhe komunikimit me prindërit",
"Menaxhimi i situatave të urgjencës"
]
},
{
title: "Zhvillimi Psikologjik & Emocional i Fëmijës",
lessons: [
"Faza të zhvillimit (0–6 vjeç, 6–12 vjeç)",
"Ndikimi i lojës dhe komunikimit në edukim",
"Identifikimi i shenjave të stresit dhe ankthit"
]
},
{
title: "Higjiena & Ushqyerja e Shëndetshme",
lessons: [
"Kujdesi për pastërtinë personale të fëmijës",
"Ushqimet e përshtatshme për moshat e ndryshme",
"Menaxhimi i alergjive dhe intolerancave ushqimore"
]
},
{
title: "Aktivitete Edukuese & Zhvilluese",
lessons: [
"Loja si mjet për zhvillimin e inteligjencës emocionale",
"Krijimi i një rutine të përditshme të balancuar",
"Mbështetja në mësim, lexim dhe zhvillim motorik"
]
}
],
whatYouLearn: "Kursanti aftësohet të kujdeset për fëmijë të moshave të ndryshme, duke siguruar mirëqenie fizike, emocionale dhe edukative, me profesionalizëm dhe ndjeshmëri prindërore.",
benefits: [
"Njohuri mbi zhvillimin sipas moshës",
"Protokolle higjiene & ushqyerje",
"Metoda lojërash dhe rutina ditore"
],
materials: [
"Manual për përkujdesje fëmijësh",
"Udhëzues praktik për higjienë dhe siguri",
"Fletore aktivitetesh zhvilluese"
],
testimonials: [],
faqs: [],
featured: false,
students: 12
},
{
id: 2,
title: "Kurs Kujdestar për të Moshuar",
category: "kujdestar-per-te-moshuar-dhe-femije",
duration: "1000 orë",
durationCategory: "1000 orë",
level: "Mesatar",
price: "",
startDate: "",
schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
image: "/courses/kujdestar-per-mosha-te-tret.webp",
videoSrc: "/videos/caregiver-video.webm",
description: "Trajnim i plotë për kujdesin ditor, shëndetësor dhe social ndaj të moshuarve me dinjitet dhe siguri.",
longDescription: "Përfshin etikën dhe komunikimin e kujdesshëm, ndryshimet fizike/mentale të plakjes, kujdesin personal dhe parandalimin e komplikacioneve, ushqyerjen e përshtatur dhe aktivitete lehtë fizike e sociale.",
instructors: [
{
name: "Alketa Dervishi",
role: "Infermiere & Trajnere",
image: "/placeholder.svg?height=200&width=200&text=Instructor",
bio: "Specialiste në përkujdesje geriatrike me mbi 15 vite eksperiencë në institucione shëndetësore dhe rezidenca."
}
],
curriculum: [
{
title: "Etika & Ndjeshmëria në Kujdesin ndaj të Moshuarve",
lessons: [
"Roli i kujdestarit dhe përgjegjësitë e tij ditore",
"Komunikimi i kujdesshëm dhe respekti ndaj moshës së tretë",
"Ruajtja e dinjitetit dhe privatësisë së personit të moshuar"
]
},
{
title: "Anatomia & Fiziologjia e Procesit të Plakjes",
lessons: [
"Ndryshimet fizike, mendore dhe emocionale me moshën",
"Kujdesi ndaj sëmundjeve kronike të zakonshme",
"Parandalimi i komplikacioneve përmes vëzhgimit të përditshëm"
]
},
{
title: "Kujdesi Personal & Higjiena e Përditshme",
lessons: [
"Ndihma në veshje, ushqim dhe lëvizje",
"Menaxhimi i higjienës personale dhe ndërrimit të rrobave",
"Parandalimi i plagëve nga qëndrimi i gjatë në shtrat"
]
},
{
title: "Ushqyerja & Aktivitetet për të Moshuarit",
lessons: [
"Ushqimet e përshtatshme për moshën dhe gjendjen shëndetësore",
"Inkurajimi i aktivitetit të lehtë fizik dhe socializimit",
"Mbështetja emocionale dhe dëgjimi aktiv"
]
}
],
whatYouLearn: "Kursanti aftësohet të ofrojë kujdes të plotë ndaj të moshuarve, duke siguruar ndihmë fizike, mbështetje emocionale dhe mirëqenie ditore në mënyrë të respektueshme dhe të sigurt.",
benefits: [
"Protokolle praktike geriatrike",
"Komunikim & empati profesionale",
"Plan ushqimor dhe aktivitet i përshtatur"
],
materials: [
"Manual kujdestarie geriatrike",
"Lista kontrolli për parandalimin e plagëve",
"Udhëzues nutricional sipas moshës"
],
testimonials: [],
faqs: [],
featured: false,
students: 10
},
{
id: 5,
title: "Kurs Kujdestar për të Moshuar dhe Fëmijë",
category: "kujdestar-per-te-moshuar-dhe-femije",
duration: "1500 orë",
durationCategory: "1500 orë",
level: "Mesatar",
price: "",
startDate: "",
schedule: "E Hënë - E Shtunë (09:00 - 16:00)",
image: "/courses/kujdestare-mosha-te-tret-dhe-femije.webp",
videoSrc: "/videos/caregiver-video.webm",
description: "Formim i integruar për kujdes paralel ndaj fëmijëve dhe të moshuarve në shtëpi ose institucion.",
longDescription: "Përfshin etikën dhe ndërveprimin ndërbreznor, psikologjinë e fëmijëve dhe të moshuarve, planifikimin e ditës me higjienë e ushqyerje të përshtatur, dhe aktivitete stimuluese për të dyja grupmoshat.",
instructors: [
{
name: "Arta Marku",
role: "Instruktore Kujdestarie",
image: "/placeholder.svg?height=200&width=200&text=Instructor",
bio: "Me 12 vite përvojë në kujdestari familjare dhe institucionale për fëmijë e të moshuar."
}
],
curriculum: [
{
title: "Etika & Ndërveprimi Ndërbreznor",
lessons: [
"Roli i kujdestarit në familjet me breza të ndryshëm",
"Komunikimi me fëmijë dhe të moshuar në të njëjtën kohë",
"Balancimi i detyrimeve dhe menaxhimi i stresit"
]
},
{
title: "Psikologjia e Fëmijës & e të Moshuarit",
lessons: [
"Ngjashmëritë dhe ndryshimet në nevojat emocionale",
"Identifikimi i shenjave të lodhjes mendore ose izolimit",
"Ndërtimi i një ambienti të qetë dhe të sigurt"
]
},
{
title: "Higjiena, Ushqyerja & Kujdesi i Përbashkët",
lessons: [
"Planifikimi i ditës për kujdes paralel",
"Përgatitja e ushqimeve të përshtatshme për moshat e ndryshme",
"Rregullat e higjienës dhe pastrimit të ambientit familjar"
]
},
{
title: "Aktivitete dhe Stimulim Emocional",
lessons: [
"Lojëra dhe ushtrime për fëmijët dhe të moshuarit",
"Muzikoterapia, leximi, piktura dhe aktivitetet e kujtesës",
"Krijimi i një rutine që nxit qetësinë dhe harmoninë"
]
}
],
whatYouLearn: "Kursanti aftësohet të ofrojë kujdes të integruar për fëmijë dhe të moshuar, duke ruajtur ekuilibrin midis kujdesit fizik dhe emocional për të dyja grupmoshat, në kushte shtëpie ose institucioni social.",
benefits: [
"Protokolle të bashkërenduara kujdesi",
"Komunikim ndërbreznor",
"Planifikim rutine & aktivitete"
],
materials: [
"Manual i integruar kujdestarie",
"Udhëzues ushqimor për moshat",
"Paketa aktivitetesh edukative"
],
testimonials: [],
faqs: [],
featured: false,
students: 8
},
{
  id: 4,
  title: "Kurs Operator Turistik",
  category: "operatoret-turistike",
  duration: "360 orë",
  durationCategory: "360 orë",
  level: "Mesatar",
  price: "",
  startDate: "",
 schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
  image: "/courses/operatore-turistik.webp",
  videoSrc: "/videos/tourist-operator.webm",
  description:
    "Merrni njohuritë dhe aftësitë operacionale për të menaxhuar agjenci udhëtimesh dhe oferta turistike.",
  longDescription:
    "Gjatë 360 orëve të këtij kursi, do të eksploroni strukturën dhe funksionimin operativ të agjencive të udhëtimit, teknikat e prenotimit dhe blerjeve, mënyrën e konceptimit të produkteve turistike, si dhe analizën e kostove dhe promovimin e shërbimeve turistike. Përgatituni për një karrierë dinamike në industrinë e turizmit.",
  instructors: [
    {
      name: "Armand Topalli",
      role: "Udhërrëfyes & Trajner Turizmi",
      image: "/placeholder.svg?height=200&width=200&text=Instructor",
      bio: "Me 15 vite eksperiencë në operacione turistike dhe udhërrëfime profesionale në vende me rëndësi historike e natyrore."
    }
  ],
  curriculum: [
    {
      title: "Moduli 1: Hyrje në Operimin Turistik",
      lessons: [
        "Roli i operatorit turistik",
        "Etika dhe standardet e shërbimit"
      ]
    },
    {
      title: "Moduli 2: Struktura dhe Logjistika",
      lessons: [
        "Organizimi i agjencisë dhe rrjetet e partnerëve",
        "Menaxhimi i inventarit dhe rezervimeve"
      ]
    },
    {
      title: "Moduli 3: Konceptimi i Produktit Turistik",
      lessons: [
        "Hartimi i paketave dhe itinerareve",
        "Analiza e kostove dhe çmimeve"
      ]
    },
    {
      title: "Moduli 4: Marketing & Promovimi",
      lessons: [
        "Strategjitë digjitale dhe tradicionale",
        "Renditja e ofertave në treg"
      ]
    },
    {
      title: "Moduli 5: Praktikë Profesionale",
      lessons: [
        "Stazhe në agjenci turistike",
        "Simulime prenotimi dhe menaxhimi krizash"
      ]
    }
  ],
  benefits: [
    "Aftësi praktike në menaxhim udhëtimesh",
    "Certifikim për operator turistik profesionist",
    "Mundësi pune në agjenci lokale dhe ndërkombëtare"
  ],
  materials: [
    "Manual operativ turistik",
    "Udhëzues software prenotimi",
    "Studime rastesh reale"
  ],
  testimonials: [],
  faqs: [],
  featured: false,
  students: 6,
//   media: [F
//   { type: "image", src: "/courses/tour-guide.webp", alt: "Pamje nga guida turistike" },
//   { type: "image", src: "/courses/operatore-turistik.webp", alt: "Pamje nga kursi operator turistik" },

// ]

},


{
  id: 7,
  title: "Kurs Udhërrëfyes Turistik",
  category: "operatoret-turistike",
  duration: "600 orë",
  durationCategory: "600 orë",
  level: "Mesatar",
  price: "",
  startDate: "",
 schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
  image: "/courses/udherrefim-turistik.webp", noCustomCrop: true,
  videoSrc: "/videos/tour-guide.webm",
  description:
    "Merrni kompetencat teknike dhe ndërpersonale për të udhëhequr grupet turistike me profesionalizëm.",
  longDescription:
    "Ky kurs 600-orësh përgatit udhërrëfyesit me njohuritë e nevojshme për shpjegimin e trashëgimisë kulturore, pasurive natyrore, menaxhimin e sigurisë dhe praktikat e qëndrueshme në guidë turistike.",
  instructors: [
    {
      name: "Leonora Basha",
      role: "Guide Senior",
      image: "/placeholder.svg?height=200&width=200&text=Instructor",
      bio: "Me 10 vite eksperiencë në guidë turistike dhe trajnim për vizitorë ndërkombëtarë."
    }
  ],
  curriculum: [
    {
      title: "Moduli 1: Hyrje në Udhërrëfimin Turistik",
      lessons: ["Roli dhe përgjegjësitë e guidës"]
    },
    {
      title: "Moduli 2: Komunikimi dhe Shërbimi ndaj Vizitorëve",
      lessons: ["Teknika prezantimi", "Menaxhimi i grupit"]
    },
    {
      title: "Moduli 3: Trashëgimia Kulturore dhe Historike",
      lessons: ["Analiza e monumenteve", "Tradita dhe etnografia"]
    },
    {
      title: "Moduli 4: Pasuritë Natyrore",
      lessons: ["Interpretimi i peizazheve", "Menaxhimi i rreziqeve natyrore"]
    },
    {
      title: "Moduli 5: Turizmi i Qëndrueshëm",
      lessons: ["Praktikat miqësore me mjedisin"]
    }
  ],
  benefits: [
    "Certifikim për guide turistike",
    "Praktikë në destinacione kryesore",
    "Akses në rrjetin e operatorëve turistikë"
  ],
  materials: [
    "Manual guide turistike",
    "Kalendar itinerarësh",
    "Udhëzues praktike"
  ],
  testimonials: [],
  faqs: [],
  featured: false,
  students: 20,
//   media: [
//   { type: "image", src: "/courses/tour-guide.webp", alt: "Pamje nga guida turistike" },
//   { type: "image", src: "/courses/operatore-turistik.webp", alt: "Pamje nga kursi operator turistik" },

// ]

},
{
id: 8,
title: "Kurs Shërbim Pastrimi në Njësi Banimi dhe Institucione",
category: "sherbim-pastrimi-ne-njesi-banimi-dhe-institucione",
duration: "150 orë",
durationCategory: "150 orë",
level: "Bazik",
price: "",
startDate: "",
schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
image: "/courses/sherbim-pastrimi.webp",
videoSrc: "",
description: "Formim bazë 150-orësh për pastrim profesional në banesa, zyra dhe institucione: higjiena, sigurIA me kimikate, pajisje profesionale dhe organizim pune.",
longDescription: "Program praktik që mbulon etikën dhe sjelljen profesionale, standardet e higjienës, përdorimin e mjeteve mbrojtëse personale, parandalimin e aksidenteve me produkte kimike, teknikat e pastrimit (sipërfaqe, dysheme, dritare, mobilje), dezinfektimin e banjës/kuzhinës, përdorimin e makinave industriale dhe vakumit profesional, si dhe planifikimin ditor të detyrave, përzgjedhjen e produkteve dhe kontrollin e cilësisë.",
instructors: [
{
name: "Gent Caka",
role: "Specialist Pastrimi",
image: "/placeholder.svg?height=200&width=200&text=Instructor",
bio: "7 vite përvojë në pastrim profesional të zyrave, spitaleve dhe hoteleve."
}
],
curriculum: [
{
title: "Moduli 1: Etikë & Komunikim",
lessons: ["Roli i punonjësit të pastrimit", "Komunikimi me klientin/stafin", "Konfidencialiteti & përgjegjësia"]
},
{
title: "Moduli 2: Higjiena & Siguria",
lessons: ["Standardet e higjienës", "PPE: doreza, maska, uniformë", "Siguria me produkte kimike"]
},
{
title: "Moduli 3: Teknikat e Pastrimit",
lessons: ["Sipërfaqe & dysheme", "Dritare & mobilje", "Banjë & kuzhinë (larje/dezinfektim)"]
},
{
title: "Moduli 4: Pajisje & Organizim",
lessons: ["Makina industriale & vakum", "Produktet & përzierjet e sigurta", "Planifikim ditor & kontroll cilësie"]
}
],
benefits: ["Certifikim bazik pastrimi", "Procedura standarde pune (SOP)", "Aftësi të kërkuara nga kompanitë e pastrimit"],
materials: ["Manual pastrimi", "Fletë-udhëzues kimikatesh", "Checklist ditore/periodike"],
testimonials: [],
faqs: [],
featured: false,
students: 12,
media: [
{ type: "image", src: "/courses/sherbim-pastrimi.webp", alt: "Trajnim praktik për pastrim profesional" }
]
},
{
id: 11,
title: "Kurs Recepsion",
category: "recepsion",
duration: "200 orë",
durationCategory: "200 orë",
level: "Fillestar",
price: "",
startDate: "",
schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
image: "/courses/receptionist.webp",
videoSrc: "/videos/reception-video.webm",
description: "Front Office & Customer Service: komunikim profesional, check-in/out, PMS, pagesa dhe menaxhim ankESASH për recepsionistë të rinj.",
longDescription: "Kurs 200-orësh që formon recepsionistë për ambiente hoteliere, qendra estetike dhe biznese. Mbulon etikën dhe prezantimin profesional, komunikimin verbal/joverbal dhe menaxhimin e ankesave, procedurat e check-in/check-out, përdorimin e sistemeve kompjuterike (PMS), regjistrimin dhe ruajtjen e të dhënave, pranimin e pagesave (cash, kartë, digjitale), lëshimin e dokumenteve dhe sigurinë financiare, si dhe koordinimin ndërsektorial me pastrimin, mirëmbajtjen dhe menaxhimin.",
instructors: [
{
name: "Ana Dervishi",
role: "Instruktore Recepsioni",
image: "/placeholder.svg?height=200&width=200&text=Instructor",
bio: "8 vite eksperiencë në recepsion hotele dhe kompani ndërkombëtare."
}
],
curriculum: [
{
title: "Moduli 1: Etikë & Prezantim",
lessons: ["Imazhi profesional", "Komunikim verbal/joverbal", "Roli në imazhin e institucionit"]
},
{
title: "Moduli 2: Shërbim Klienti",
lessons: ["Tonet & gjuha e sjellshme", "Menaxhimi i ankesave", "Përmirësimi i përvojës së klientit"]
},
{
title: "Moduli 3: Administrim & PMS",
lessons: ["Check-in / Check-out", "Regjistrim & arkivim të dhënash", "Përdorimi i PMS/software menaxhimi"]
},
{
title: "Moduli 4: Pagesa & Siguri",
lessons: ["Cash, kartë & digjitale", "Faturim & dokumente", "Siguria e transaksioneve"]
},
{
title: "Moduli 5: Protokoll & Ekip",
lessons: ["Koordinim me housekeeping/maintenance", "Telefon, email & komunikim i brendshëm", "Zgjidhje e kërkesave urgjente"]
}
],
benefits: ["Certifikim recepsionisti", "Praktikë me PMS simulues", "Aftësi për menaxhim turni & raportim"],
materials: ["Manual front office", "Modele faturash/raportesh", "Udhëzues shërbimi ndaj klientit"],
testimonials: [],
faqs: [],
featured: false,
students: 12,
media: [
{ type: "image", src: "/courses/receptionist.webp", alt: "Trajnim në front office dhe pritje klientësh" }
]
},
{
id: 15,
title: "Kursi Parukeri – Berber (300 orë)",
category: "berber",
duration: "300 orë",
durationCategory: "300 orë",
level: "Fillestar",
price: "",
startDate: "",
schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
videoSrc: "/videos/Kurs-berber.webm",
image: "/courses/berber-300.webp",
description: "Bazat e berberisë: etikë, higjienë dhe prerje klasike për meshkuj me makinë dhe gërshërë.",
longDescription: "Hyrje në profesion dhe etikë; higjiena & siguria në sallon; anatomia e kokës dhe struktura e flokëve mashkullorë; teknikat bazë të prerjes (gradim 0°/45°, makinë elektrike), krehje dhe stilime të thjeshta.",
instructors: [
{
name: "Ardian Leka",
role: "Instruktor Barberie",
image: "/placeholder.svg?height=200&width=200&text=Instructor",
bio: "7 vite eksperiencë në trajnim bazik të barberëve dhe stilim flokësh."
}
],
curriculum: [
{
title: "Hyrje në Berberi & Etika Profesionale",
lessons: [
"Historia dhe roli i profesionit të berberit",
"Kujdesi ndaj klientit dhe sjellja profesionale",
"Përdorimi dhe mirëmbajtja e veglave të punës"
]
},
{
title: "Higjiena & Siguria në Sallon",
lessons: [
"Sterilizimi i veglave prerëse dhe brisqeve",
"Higjiena personale dhe menaxhimi i ambientit",
"Parandalimi i infeksioneve dhe prerjeve aksidentale"
]
},
{
title: "Anatomia e Kokës & Struktura e Flokëve",
lessons: [
"Lëkura, flokët dhe tipologjitë e zakonshme të meshkujve",
"Pikat orientuese të kokës për prerje të saktë",
"Dendësia, poroziteti dhe elasticiteti i flokëve"
]
},
{
title: "Prerjet Bazë për Meshkuj",
lessons: [
"Teknikat e drejtimit, sheshtë, gradim 0° dhe 45°",
"Krehja dhe prerja me makinë elektrike",
"Prerje klasike, fade dhe stilime të thjeshta"
]
}
],
whatYouLearn: "Kursanti fiton njohuritë bazë për t’u aftësuar në prerje klasike dhe moderne për meshkuj, duke respektuar higjienën, rregullat e sigurisë dhe kujdesin profesional ndaj klientit.",
benefits: ["Certifikim bazë berberie", "Praktikë në sallon"],
materials: ["Set bazik barberie", "Brisqe njëpërdorimëshe"],
testimonials: [],
faqs: [],
featured: false,
students: 8,
media: [
{ type: "image", src: "/courses/berber-300.webp", alt: "Pamje nga kursi Berber 300 orë" },
{ type: "image", src: "/courses/berber-600.webp", alt: "Pamje nga kursi Berber 600 orë" },
{ type: "image", src: "/courses/berber-900.webp", alt: "Pamje nga kursi Berber 900 orë" },
{ type: "image", src: "/courses/berber-1800.webp", alt: "Pamje nga kursi Berber 1800 orë" }
]
},
{
id: 14,
title: "Kursi Berber (600 orë)",
category: "berber",
duration: "600 orë",
durationCategory: "600 orë",
level: "Fillestar – Mesatar",
price: "",
startDate: "",
schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
image: "/courses/berber-600.webp",
noCustomCrop: true,
videoSrc: "/videos/Kurs-berber.webm",
description: "Prerje profesionale, fade, kujdes i skalpit, dhe formësim mjekrash me teknika moderne.",
longDescription: "Trikologji dhe kujdes i skalpit mashkullor; prerje profesionale me makinë (fade, taper, buzz, crop); rregullim mjekrash & mustaqesh me brisk; stilizim dhe produkte styling për meshkuj.",
instructors: [
{
name: "Dionis Basha",
role: "Trajner Barberie",
image: "/placeholder.svg?height=200&width=200&text=Instructor",
bio: "5 vite eksperiencë në trajnim bazik dhe të mesëm të barberëve."
}
],
curriculum: [
{
title: "Trikologjia & Kujdesi i Skalpit Mashkullor",
lessons: [
"Struktura e flokut dhe proceset biologjike",
"Zbokthi, alopecia dhe irritimet",
"Produktet profesionale për kujdesin e kokës"
]
},
{
title: "Prerjet Profesionale & Makina Elektrike",
lessons: [
"Fade, taper, buzz cut dhe crop",
"Linjat dhe detajet e qafës, anëve dhe ballit",
"Gërshërë dhe brisk me precizion"
]
},
{
title: "Rregullimi i Mjekrës & Mustaqeve",
lessons: [
"Formësimi dhe linjat natyrale",
"Brisku tradicional dhe peshqiri i ngrohtë",
"Produktet për mjekër dhe pas rruajtjes"
]
},
{
title: "Stilizimi & Krehja për Meshkuj",
lessons: [
"Modele klasike dhe moderne",
"Pomade, wax, clay",
"Formëzim me tharëse dhe furçë"
]
}
],
whatYouLearn: "Kursanti aftësohet në prerje dhe stilime profesionale për meshkuj, duke përdorur teknika të avancuara fade dhe kujdes estetik për mjekrën, me standardet e higjienës dhe estetikës moderne.",
benefits: ["Certifikim berberi i ndërmjetëm", "Praktikë e supervizuar"],
materials: ["Set mjetesh barberie", "Produkte styling"],
testimonials: [],
faqs: [],
featured: false,
students: 10,
media: [
{ type: "image", src: "/courses/berber-300.webp", alt: "Berber 300 orë" },
{ type: "image", src: "/courses/berber-600.webp", alt: "Berber 600 orë" },
{ type: "image", src: "/courses/berber-900.webp", alt: "Berber 900 orë" },
{ type: "image", src: "/courses/berber-1800.webp", alt: "Berber 1800 orë" }
]
},
{
id: 13,
title: "Kursi Berber (900 orë)",
category: "berber",
duration: "900 orë",
durationCategory: "900 orë",
level: "Mesatar",
price: "",
startDate: "",
schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
image: "/courses/berber-900.webp",
noCustomCrop: true,
videoSrc: "/videos/Kurs-berber.webm",
description: "Teknika të avancuara prerjeje & dizajni, kujdes estetik i lëkurës mashkullore dhe menaxhim salloni.",
longDescription: "Tekstura dhe gradime 0°/45°/90° me makina multi-level; dizajn artistik (hair tattoo, lines, ngjyra); pastrim fytyre dhe masazhe pas rruajtjes; pritje profesionale, rezervime dhe marketing personal.",
instructors: [
{
name: "Luan Kola",
role: "Instruktor Barberie",
image: "/placeholder.svg?height=200&width=200&text=Instructor",
bio: "12 vite eksperiencë në trajnimet e barberëve me fokus në dizajn modern."
}
],
curriculum: [
{
title: "Teknika Avancuara të Prerjes & Teksturimit",
lessons: [
"Kombinimi i këndeve 0°, 45°, 90°",
"Përdorimi i makinave me shumë nivele",
"Balancimi i formës sipas tipareve"
]
},
{
title: "Dizajn & Art në Berberi",
lessons: [
"Hair tattoo dhe lines me brisk",
"Forma artistike dhe grafika moderne",
"Përdorimi i ngjyrave në flokë mashkullor"
]
},
{
title: "Kujdesi Estetik i Lëkurës Mashkullore",
lessons: [
"Pastrimi i fytyrës pas rruajtjes",
"Produktet qetësuese dhe anti-inflamatore",
"Aromaterapia dhe relaksimi"
]
},
{
title: "Menaxhimi i Sallonit & Komunikimi",
lessons: [
"Pritja dhe konsulenca estetike",
"Rezervimet dhe menaxhimi i kohës",
"Marketingu personal"
]
}
],
whatYouLearn: "Kursanti zotëron aftësi të avancuara për prerje, dizajn dhe kujdes estetik mashkullor, i gatshëm për të punuar në sallone profesionale ose për të hapur një berberi moderne të vetën.",
benefits: ["Certifikim i avancuar", "Portofol dizajni"],
materials: ["Set dizajni me brisk", "Ngjyra profesionale"],
testimonials: [],
faqs: [],
featured: false,
students: 15,
media: [
{ type: "image", src: "/courses/berber-300.webp", alt: "Berber 300 orë" },
{ type: "image", src: "/courses/berber-600.webp", alt: "Berber 600 orë" },
{ type: "image", src: "/courses/berber-900.webp", alt: "Berber 900 orë" },
{ type: "image", src: "/courses/berber-1800.webp", alt: "Berber 1800 orë" }
]
},
{
id: 12,
title: "Kursi Berber (1800 orë)",
category: "berber",
duration: "1800 orë",
durationCategory: "1800 orë",
level: "Avancuar",
price: "",
startDate: "",
schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
image: "/courses/berber-1800.webp",
noCustomCrop: false,
videoSrc: "/videos/Kurs-berber.webm",
description: "Formim i plotë profesional: trikologji, prerje & stile moderne, mjekra, menaxhim berberie dhe konkurs artistik.",
longDescription: "Analiza e flokëve dhe trajtime rigjeneruese; kombinime moderne (fade, undercut, pompadour, slick back) dhe blending profesional; rruajtje klasike, masazh fytyre dhe maska; organizim & drejtim teknik i sallonit; stilime kreative dhe përgatitje për gara.",
instructors: [
{
name: "Marko Prendushi",
role: "Master Barber",
image: "/placeholder.svg?height=200&width=200&text=Instructor",
bio: "20 vite eksperiencë në barbering klasik dhe modern."
}
],
curriculum: [
{
title: "Trikologjia & Kujdesi Profesional i Flokëve",
lessons: [
"Analiza e flokëve dhe skalpit",
"Produktet për tipe të ndryshme flokësh",
"Trajtimet me locione, vajra dhe serume"
]
},
{
title: "Prerje Avancuara & Stile Modern",
lessons: [
"Fade, undercut, pompadour, slick back",
"Teknikat e blending dhe rrallimit",
"Përshtatja me formën e kokës dhe fytyrës"
]
},
{
title: "Modelim Mjekrash & Trajtimet e Lëkurës",
lessons: [
"Avull dhe peshqir i ngrohtë",
"Rruajtje klasike me brisk",
"Masazh fytyre dhe maska pas rruajtjes"
]
},
{
title: "Menaxhim & Drejtim Teknik i Berberisë",
lessons: [
"Organizimi i sallonit dhe zonat e punës",
"Marketingu dhe imazhi profesional",
"Rregulloret ligjore dhe standardet sanitare"
]
},
{
title: "Stilime Artistike & Konkurs Profesional",
lessons: [
"Përgatitja për gara dhe evente",
"Dizajn kreativ dhe fade artistik",
"Portofol profesional dhe demonstrime"
]
}
],
whatYouLearn: "Kursanti përgatitet si Berber i Kualifikuar dhe Drejtues Teknik, i aftë të ofrojë prerje artistike, kujdes estetik për lëkurën mashkullore, dhe të menaxhojë me sukses një sallon apo brand berberie në nivel profesional.",
benefits: ["Diplomë Master Barber", "Praktikë gjithëpërfshirëse", "Akses në teknologji moderne"],
materials: ["Set mjetesh barberie", "Udhëzues menaxhimi & marketingu"],
testimonials: [],
faqs: [],
featured: false,
students: 20,
media: [
{ type: "image", src: "/courses/berber-300.webp", alt: "Berber 300 orë" },
{ type: "image", src: "/courses/berber-600.webp", alt: "Berber 600 orë" },
{ type: "image", src: "/courses/berber-900.webp", alt: "Berber 900 orë" },
{ type: "image", src: "/courses/berber-1800.webp", alt: "Berber 1800 orë" }
]
},
  // Estetikë — 300 orë (UPDATED)
  {
    id: 20,
    title: "Kurs Estetike (300 ore)",
    category: "estetike",
    duration: "300 orë",
    durationCategory: "300 orë",
    level: "Fillestar",
    price: "",
    startDate: "",
    schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
    image: "/courses/estetike-300.webp",
    noCustomCrop: true,
    videoSrc: "/videos/estetike-video.webm",
    description:
      "Kurs fillestar 300-orësh me bazat profesionale të estetikës dhe trajtimeve të fytyrës.",
    longDescription:
      "Etikë dhe higjienë personale, anatomia e lëkurës, tipologjitë dhe anomali, trajtime bazë të fytyrës (pastrim, eksfolim, maska, masazh relaksues), si dhe përdorimi i produkteve/pajisjeve bazë.",
    instructors: [
      {
        name: "Marina Çela",
        role: "Instruktore Estetike",
        image: "/placeholder.svg?height=200&width=200&text=Instructor",
        bio: "Me 3 vite eksperiencë në trajtime faciale dhe manicure."
      }
    ],
    curriculum: [
      {
        title: "Etika Profesionale & Higjiena Personale",
        lessons: [
          "Sjellja profesionale dhe prezantimi në sallon",
          "Rregullat e higjienës dhe sterilizimit të veglave",
          "Organizimi dhe pastërtia e mjedisit të punës"
        ]
      },
      {
        title: "Anatomia & Fiziologjia e Lëkurës",
        lessons: [
          "Shtresat e lëkurës dhe funksionet kryesore",
          "Tipologjitë e lëkurës (e thatë, e yndyrshme, e kombinuar)",
          "Identifikimi i anomalisë së lëkurës"
        ]
      },
      {
        title: "Trajtimet Bazë të Fytyrës",
        lessons: [
          "Pastrimi, eksfolimi dhe maskat kozmetike",
          "Masazhi relaksues i fytyrës",
          "Kujdesi pas trajtimit"
        ]
      },
      {
        title: "Produktet Kozmetike & Pajisjet Bazë",
        lessons: [
          "Përdorimi i produkteve për çdo tip lëkure",
          "Rregullat e ruajtjes dhe aplikimit",
          "Prezantimi i pajisjeve të thjeshta (vapozon, lupë, etj.)"
        ]
      }
    ],
    whatYouLearn:
      "Kursanti zotëron bazat profesionale të estetikës, duke ditur të kryejë trajtime bazë të fytyrës, të ruajë standardet e higjienës dhe të përdorë produktet kozmetike me kujdes e profesionalizëm.",
    benefits: ["Certifikim bazik estetike", "Stazhe laboratorike", "Portofol fillestar"],
    materials: ["Produkte peeling bazik", "Set manikyr", "Manual masazh"],
    testimonials: [],
    faqs: [],
    featured: false,
    students: 8,
    media: [
      { type: "image", src: "/courses/estetike-300.webp", alt: "Estetikë 300 orë" },
      { type: "image", src: "/courses/estetike-600.webp", alt: "Estetikë 600 orë" },
      { type: "image", src: "/courses/estetike-900.webp", alt: "Estetikë 900 orë" },
      { type: "image", src: "/courses/estetike-1500.webp", alt: "Estetikë 1500 orë" },
      { type: "image", src: "/courses/estetike-2100.webp", alt: "Estetikë 2100 orë" }
    ]
  },

  // Estetikë — 600 orë (UPDATED)
  {
    id: 19,
    title: "Kurs Estetike (600 ore)",
    category: "estetike",
    duration: "600 orë",
    durationCategory: "600 orë",
    level: "Fillestar – Mesatar",
    price: "",
    startDate: "",
    schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
    image: "/courses/estetike-600.webp",
    videoSrc: "/videos/estetike-video.webm",
    description:
      "Kurs 600-orësh me fokus në higjienë profesionale, analizë lëkure, trajtime faciale dhe masazh estetik.",
    longDescription:
      "Protokolle sterilizimi/dezinfektimi, përgatitja e kabinës dhe klientit, menaxhimi i mbetjeve; diagnostikim lëkure, testet e ndjeshmërisë dhe këshillim produktesh; pastrim i thellë, scrub, maska profesionale dhe pajisje bazë; masazh estetik relaksues dhe kujdes pas trajtimit.",
    instructors: [
      {
        name: "Blerina Dervishi",
        role: "Instruktore Estetike",
        image: "/placeholder.svg?height=200&width=200&text=Instructor",
        bio: "Me 5 vite eksperiencë në trajtime spa dhe makeup profesional."
      }
    ],
    curriculum: [
      {
        title: "Higjiena & Kujdesi Profesional",
        lessons: [
          "Protokollet e sterilizimit dhe dezinfektimit",
          "Përgatitja e kabinës së punës dhe klientit",
          "Menaxhimi i mbetjeve dhe siguria në punë"
        ]
      },
      {
        title: "Analiza e Lëkurës & Konsultimi me Klientin",
        lessons: [
          "Diagnostikimi i tipit të lëkurës",
          "Testet e ndjeshmërisë dhe alergjisë",
          "Këshillimi profesional për produkte"
        ]
      },
      {
        title: "Trajtimet Estetike të Fytyrës",
        lessons: [
          "Pastrimi i thellë dhe scrub profesional",
          "Aplikimi i maskave (balte, kolagjen, hidratim)",
          "Përdorimi bazë i pajisjeve estetike (vapozon, galvani, etj.)"
        ]
      },
      {
        title: "Masazhi Estetik & Relaksues",
        lessons: [
          "Teknikat themelore të masazhit manual",
          "Qarkullimi, drenazhi dhe relaksimi",
          "Kujdesi pas trajtimit"
        ]
      }
    ],
    whatYouLearn:
      "Kursanti fiton njohuri dhe aftësi të ndërmjetme për pastrimin e fytyrës, masazhin estetik dhe përdorimin bazë të pajisjeve, duke u aftësuar të punojë në qendra bukurie apo spa.",
    benefits: ["Diplomë fillestare estetike", "Stazhe laboratorike", "Portofol bazik"],
    materials: ["Set për peeling dhe maska", "Manual masazh", "Produkte spa"],
    testimonials: [],
    faqs: [],
    featured: false,
    students: 10,
    media: [
      { type: "image", src: "/courses/estetike-300.webp", alt: "Estetikë 300 orë" },
      { type: "image", src: "/courses/estetike-600.webp", alt: "Estetikë 600 orë" },
      { type: "image", src: "/courses/estetike-900.webp", alt: "Estetikë 900 orë" },
      { type: "image", src: "/courses/estetike-1500.webp", alt: "Estetikë 1500 orë" },
      { type: "image", src: "/courses/estetike-2100.webp", alt: "Estetikë 2100 orë" }
    ]
  },

  // Estetikë — 900 orë (UPDATED)
  {
    id: 18,
    title: "Kurs Estetike (900 ore)",
    category: "estetike",
    duration: "900 orë",
    durationCategory: "900 orë",
    level: "Mesatar",
    price: "",
    startDate: "",
    schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
    image: "/courses/estetike-900.webp",
    noCustomCrop: true,
    videoSrc: "/videos/estetike-video.webm",
    description:
      "Program 900-orësh në produkte aktive, pajisje profesionale, depilim/qerpikë bazë dhe masazhe relaksuese.",
    longDescription:
      "Thellim në përbërës aktivë (Ac. hialuronik, kolagjen, vitamina), emulsionet/serumet/ampulat, produktet anti-age; përdorim i pajisjeve (vapozon, dermapen, RF, LED, galvani) dhe siguri; depilim me dyllë/sheqer, formësim vetullash/qerpikësh dhe kujdes post-depilim; masazh fytyre/qafe/dekolte me aromaterapi dhe drenazh limfatik.",
    instructors: [
      {
        name: "Olta Hoxha",
        role: "Instruktore Estetike",
        image: "/placeholder.svg?height=200&width=200&text=Instructor",
        bio: "Me 6 vite përvojë në trajtime faciale dhe masazhe relaksuese."
      }
    ],
    curriculum: [
      {
        title: "Traktatet Kozmetike & Produktet Aktive",
        lessons: [
          "Përbërësit aktivë (acid hialuronik, kolagjen, vitamina)",
          "Emulsionet, serumet dhe ampulat profesionale",
          "Produktet anti-age dhe hidratuese"
        ]
      },
      {
        title: "Përdorimi i Pajisjeve Profesionale",
        lessons: [
          "Vapozon, dermapen, RF, LED dhe galvani",
          "Aplikimi i trajtimeve elektrike estetike",
          "Siguria gjatë përdorimit të pajisjeve"
        ]
      },
      {
        title: "Depilimi & Qerpikët Bazë",
        lessons: [
          "Metodat e depilimit me dyllë dhe sheqer",
          "Formësimi i vetullave dhe qerpikëve",
          "Kujdesi i lëkurës pas depilimit"
        ]
      },
      {
        title: "Masazhet Estetike & Relaksuese",
        lessons: [
          "Masazh i fytyrës, qafës dhe dekoltesë",
          "Aromaterapi dhe drenazh limfatik",
          "Përdorimi i vajrave esencialë"
        ]
      }
    ],
    whatYouLearn:
      "Kursanti zotëron aftësi të plota për trajtime estetike të fytyrës, depilim profesional dhe masazhe relaksuese, duke përdorur produkte dhe pajisje sipas standardeve të industrisë së bukurisë.",
    benefits: ["Diplomë mesatare estetike", "Praktikë laboratorike", "Portofol trajtimesh"],
    materials: ["Produkte kozmetike bazë", "Udhëzues masazh fytyre", "Set manikyr"],
    testimonials: [],
    faqs: [],
    featured: false,
    students: 12,
    media: [
      { type: "image", src: "/courses/estetike-300.webp", alt: "Estetikë 300 orë" },
      { type: "image", src: "/courses/estetike-600.webp", alt: "Estetikë 600 orë" },
      { type: "image", src: "/courses/estetike-900.webp", alt: "Estetikë 900 orë" },
      { type: "image", src: "/courses/estetike-1500.webp", alt: "Estetikë 1500 orë" },
      { type: "image", src: "/courses/estetike-2100.webp", alt: "Estetikë 2100 orë" }
    ]
  },

  // Estetikë — 1800 orë (UPDATED)
  {
    id: 17,
    title: "Kurs Estetike (1800 ore)",
    category: "estetike",
    duration: "1800 orë",
    durationCategory: "1800 orë",
    level: "Mesatar – Avancuar",
    price: "",
    startDate: "",
    schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
    image: "/courses/estetike-1500.webp",
    videoSrc: "/videos/estetike-video.webm",
    description:
      "Kurs 1800-orësh për trajtime të avancuara me aparatura, anatomi trupi dhe protokolle anti-cellulit.",
    longDescription:
      "Trajtime me RF, LED, Oxygen Jet dhe microcurrent; kombinime pajisjesh, menaxhim i efekteve anësore dhe kujdes post-trajtim; anatomia e trupit (lëkura, muskujt, sistemi limfatik), qarkullimi i gjakut dhe drenazhi; presoterapi, termokopertë, kavitacion, RF trupi, maska/kremra rigjenerues dhe konsulencë mirëqenie; etikë, komunikim, menaxhim kohe dhe marketing personal.",
    instructors: [
      {
        name: "Miriam Prifti",
        role: "Instruktore Estetike",
        image: "/placeholder.svg?height=200&width=200&text=Instructor",
        bio: "Me 9 vite eksperiencë në trajtime faciale dhe makeup në klinika premium."
      }
    ],
    curriculum: [
      {
        title: "Traktime Estetike Avancuara",
        lessons: [
          "Trajtimet me RF, LED, Oxygen Jet, Microcurrent",
          "Kombinimi i pajisjeve dhe protokolleve profesionale",
          "Menaxhimi i efekteve anësore dhe kujdesi post-trajtim"
        ]
      },
      {
        title: "Anatomia & Fiziologjia e Trupit",
        lessons: [
          "Lëkura, muskujt dhe sistemi limfatik",
          "Qarkullimi i gjakut dhe drenazhi limfatik",
          "Analiza e trupit për trajtime estetike"
        ]
      },
      {
        title: "Traktime Trupi & Anti-Cellulit",
        lessons: [
          "Presoterapi, termokopertë, kavitacion, RF trupi",
          "Aplikimi i maskave dhe kremrave rigjenerues",
          "Konsultimi profesional për mirëqenie fizike"
        ]
      },
      {
        title: "Etikë & Komunikim Profesional",
        lessons: [
          "Pritja e klientit dhe këshillimi individual",
          "Menaxhimi i kohës dhe orareve në qendër estetike",
          "Marketingu personal dhe ndërtimi i reputacionit"
        ]
      }
    ],
    whatYouLearn:
      "Kursanti zotëron njohuri të plota për trajtimet e fytyrës dhe trupit me pajisje moderne estetike, duke qenë i aftë të punojë në qendra wellness, spa apo klinika estetike.",
    benefits: ["Diplomë estetike mesatare", "Stazhe në SPA & klinika", "Portofol trajtimesh"],
    materials: ["Set trajtimesh facial", "Udhëzues makeup permanent", "Lista kontrolli spa"],
    testimonials: [],
    faqs: [],
    featured: false,
    students: 18,
    media: [
      { type: "image", src: "/courses/estetike-300.webp", alt: "Estetikë 300 orë" },
      { type: "image", src: "/courses/estetike-600.webp", alt: "Estetikë 600 orë" },
      { type: "image", src: "/courses/estetike-900.webp", alt: "Estetikë 900 orë" },
      { type: "image", src: "/courses/estetike-1500.webp", alt: "Estetikë 1500 orë" },
      { type: "image", src: "/courses/estetike-2100.webp", alt: "Estetikë 2100 orë" }
    ]
  },

  // Estetikë — 2100 orë (UPDATED)
  {
    id: 16,
    title: "Kurs Estetike (2100 ore)",
    category: "estetike",
    duration: "2100 orë",
    durationCategory: "2100 orë",
    level: "Avancuar",
    price: "",
    startDate: "",
    schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
    image: "/courses/estetike-2100.webp",
    videoSrc: "/videos/estetike-video.webm",
    description:
      "Program i plotë 2100-orësh: aparatura high-tech, kujdes dermatologjik, drejtim teknik dhe portofol profesional.",
    longDescription:
      "RF Lifting, Ultrasonic, Cavitation, HIFU dhe kombinime terapeutike; standarde sigurie/higjiene në trajtime elektronike; kujdes dermatologjik & paramedikal (akne, rosacea, hiperpigmentime), protokolle post-dermapen/peeling; menaxhim dhe drejtim teknik, ligje/licenca, këshillim dhe drejtim stafi; projekt profesional dhe prezantime para komisionit me vlerësim teorik/praktik.",
    instructors: [
      {
        name: "Elena Marka",
        role: "Master Estetiste",
        image: "/placeholder.svg?height=200&width=200&text=Instructor",
        bio: "Me 12 vite eksperiencë në SPA dhe trajtime anti-age."
      }
    ],
    curriculum: [
      {
        title: "Traktime Estetike & Aparatura High-Tech",
        lessons: [
          "RF Lifting, Ultrasonic, Cavitation, HIFU",
          "Kombinime terapeutike për rejuvenim",
          "Standardet e sigurisë dhe higjienës në trajtime elektronike"
        ]
      },
      {
        title: "Kujdesi Dermatologjik & Paramedikal",
        lessons: [
          "Aknet, rosacea, hiperpigmentimet",
          "Protokollet estetike për çdo tip lëkure",
          "Trajtimet post-dermapen, post-peeling"
        ]
      },
      {
        title: "Menaxhim & Drejtim Teknik Estetik",
        lessons: [
          "Organizimi i një qendre estetike",
          "Ligjet dhe licencat për drejtim teknik",
          "Këshillimi profesional dhe drejtimi i stafit"
        ]
      },
      {
        title: "Projekt Profesional & Portofol",
        lessons: [
          "Ndërtimi i dosjes profesionale me trajtime",
          "Prezantime praktike para komisionit",
          "Vlerësim teorik dhe praktik"
        ]
      }
    ],
    whatYouLearn:
      "Kursanti përgatitet për rolin e Estetistes së Kualifikuar dhe Drejtueses Teknike, e aftë të kryejë trajtime të avancuara, të përdorë pajisje profesionale dhe të menaxhojë një qendër estetike në nivel kombëtar ose ndërkombëtar.",
    benefits: ["Certifikim ndërkombëtar estetike", "Akses në teknologji spa/klinikë", "Portofol profesional"],
    materials: ["Produkte premium", "Manuale teknike spa", "Udhëzues pajisjesh high-tech"],
    testimonials: [],
    faqs: [],
    featured: true,
    students: 24,
    media: [
      { type: "image", src: "/courses/estetike-300.webp", alt: "Estetikë 300 orë" },
      { type: "image", src: "/courses/estetike-600.webp", alt: "Estetikë 600 orë" },
      { type: "image", src: "/courses/estetike-900.webp", alt: "Estetikë 900 orë" },
      { type: "image", src: "/courses/estetike-1500.webp", alt: "Estetikë 1500 orë" },
      { type: "image", src: "/courses/estetike-2100.webp", alt: "Estetikë 2100 orë" }
    ]
  },
{
id: 21,
title: "Kurs Zgjatimi i Qerpikëve (150 ore)",
category: "zgjatimi-i-qerpikeve",
duration: "150 orë",
durationCategory: "150 orë",
level: "Mesatar – Avancuar",
price: "",
startDate: "",
schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
image: "/courses/qerpik-volume-avancuar.webp",
noCustomCrop: true,
videoSrc: "/videos/lashes-video-2.webm",
description: "Formim i avancuar në teknikat e zgjatimit të qerpikëve, nga 1:1 deri te Mega Volume.",
longDescription: "Në këtë kurs 150-orësh do të mësoni etapat e aplikimit të zgjatimeve klasik 1:1, teknikat 2D, 3D dhe Mega Volume, higjienën dhe dezinfektimin profesional, aspektet ligjore e biznesore (licencim, marketing, orarë), konsultimin me klientin dhe personalizimin e dizajnit, anatominë e syrit dhe ciklin e rritjes së qerpikëve, si dhe praktikat laboratorike me modele reale.",
instructors: [
{
name: "Elena Karaj",
role: "Instruktoreshë Lash Artist",
image: "/placeholder.svg?height=200&width=200&text=Instructor",
bio: "Me 7 vite eksperiencë në teknikat 1:1, volume dhe Mega Volume."
}
],
curriculum: [
{
title: "Moduli 1: Introduksion & Higjiena",
lessons: ["Roli i lash artistit", "Higjiena dhe dezinfektimi"]
},
{
title: "Moduli 2: Ligjore & Biznes",
lessons: ["Licencimi studioje", "Marketingu dhe tarifat"]
},
{
title: "Moduli 3: Anatomia & Produkte",
lessons: ["Struktura e syrit", "Llojet e qerpikëve dhe ngjitësve"]
},
{
title: "Moduli 4: Teknikat Bazë",
lessons: ["Aplikim klasik 1:1", "Teknikat 2D & 3D"]
},
{
title: "Moduli 5: Volume & Mega Volume",
lessons: ["Ndërtimi i faneve manual", "Mega Volume"]
},
{
title: "Moduli 6: Stilimi & Pas-trajtimi",
lessons: ["Formimi podle syrit", "Kujdesi pas aplikimit"]
},
{
title: "Moduli 7: Praktikë & Portfolio",
lessons: ["Ushtrime me modele reale", "Ndërtimi i portofolit"]
}
],
benefits: ["Certifikim lash artist", "Praktikë live me modele", "Portofol profesional"],
materials: ["Qerpikë mink/silk", "Ngjitës premium", "Set pincash dhe patch-e"],
testimonials: [],
faqs: [],
featured: false,
students: 20,
media: [
{ type: "image", src: "/courses/qerpik-klasik-kurs-baze.webp", alt: "Pamje nga kursi bazë për qerpikë klasik" },
{ type: "image", src: "/courses/qerpik-volume-avancuar.webp", alt: "Pamje nga kursi i avancuar për qerpikë volume" }
]
},
{
id: 22,
title: "Kurs Zgjatimi i Qerpikëve (50 ore)",
category: "zgjatimi-i-qerpikeve",
duration: "50 orë",
durationCategory: "50 orë",
level: "Fillestar – Mesatar",
price: "",
startDate: "",
schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
image: "/courses/qerpik-klasik-kurs-baze.webp",
noCustomCrop: true,
videoSrc: "/videos/lashes-video.webm",
description: "Kurs i shkurtër 50-orësh për të zotëruar bazat e zgjatimit të qerpikëve 1:1 dhe teknika fillestare.",
longDescription: "Përfitoni njohuritë bazë të lash artistit, higjienën dhe sterilizimin, aspektet ligjore, konsultimin me klientin, analizën anatomike të syrit, teknikat 1:1 e 2D, procedurat hap-pas-hapi dhe praktikën laboratorike me modele reale, duke ndërtuar portofolin tuaj fillestar.",
instructors: [
{
name: "Ana Leka",
role: "Instruktoreshë Lash",
image: "/placeholder.svg?height=200&width=200&text=Instructor",
bio: "Specialiste e teknikave 1:1 dhe 2D me 4 vite eksperiencë."
}
],
curriculum: [
{
title: "Moduli 1: Profesioni & Etika",
lessons: ["Higjiena personale", "Sterilizimi i veglave"]
},
{
title: "Moduli 2: Teknikat 1:1 & 2D",
lessons: ["Aplikimi klasik 1:1", "Teknika 2D"]
},
{
title: "Moduli 3: Ligjore & Biznes",
lessons: ["Licencimi", "Menaxhimi tarifash"]
},
{
title: "Moduli 4: Praktikë Live",
lessons: ["Ushtrime me modele reale", "Fotografi për rrjetet sociale"]
}
],
benefits: ["Certifikim fillestar", "Portofol bazik", "Orientim për karrierë"],
materials: ["Set qerpikësh fillestar", "Ngjitës bazik"],
testimonials: [],
faqs: [],
featured: false,
students: 15,
media: [
{ type: "image", src: "/courses/qerpik-klasik-kurs-baze.webp", alt: "Pamje nga kursi bazë për qerpikë klasik" },
{ type: "image", src: "/courses/qerpik-volume-avancuar.webp", alt: "Pamje nga kursi i avancuar për qerpikë volume" }
]
},

// Parukeri Courses
  {
    id: 27,
    title: "Kursi Parukeri (300 ore)",
    category: "parukeri",
    duration: "300 orë",
    durationCategory: "300 orë",
    level: "Fillestar",
    price: "",
    startDate: "",
    schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
    image: "/courses/parukeri-300.webp",
    videoSrc: "/videos/parukeri-video.webm",
    description:
      "Kurs hyrës 300-orësh në parukeri, për të mësuar bazat e prerjes dhe stilimit.",
    longDescription:
      "Përmban etapat themelore të etikes profesionale, prerjet bazë për meshkuj dhe femra, bazat e bojës dhe maintenance të veglave, si dhe ushtrime praktike laboratorike.",
    instructors: [
      {
        name: "Elda Gjoka",
        role: "Instruktore Fillestare",
        image: "/placeholder.svg?height=200&width=200&text=Instructor",
        bio: "5 vite në trajnime fillestare parukerie."
      }
    ],
    curriculum: [
      {
        title: "Hyrje në Parukeri",
        lessons: [
          "Roli i parukierit dhe etika profesionale",
          "Ambientimi me sallonin dhe pajisjet bazë",
          "Mirëpritja dhe komunikimi me klientin"
        ]
      },
      {
        title: "Higjiena & Siguria",
        lessons: [
          "Sterilizimi i veglave dhe higjiena personale",
          "Përdorimi i produkteve në mënyrë të sigurt",
          "Mbajtja e ambientit profesional dhe e pastër"
        ]
      },
      {
        title: "Struktura e Flokut",
        lessons: [
          "Anatomia dhe tipologjitë e flokëve",
          "Poroziteti, elasticiteti dhe densiteti",
          "Kujdesi sipas tipit të flokut"
        ]
      },
      {
        title: "Larja & Tharja",
        lessons: [
          "Teknikat bazë të larjes dhe tharjes profesionale",
          "Përdorimi i produkteve kozmetike bazë",
          "Krehja dhe masazhi i kokës"
        ]
      }
    ],
    whatYouLearn:
      "Kursanti aftësohet të kryejë shërbimet bazë të sallonit si larja, tharja, krehja dhe mirëmbajtja e flokëve, duke respektuar standardet e higjienës dhe komunikimit profesional me klientin.",
    benefits: ["Certifikim hyrës", "Portofol startues"],
    materials: ["Set gërshërë fillestare", "Ngjyra bazë"],
    testimonials: [],
    faqs: [],
    featured: false,
    students: 10,
    media: [
      { type: "image", src: "/courses/parukeri-300.webp", alt: "Pamje nga kursi Parukeri 300 orë" },
      { type: "image", src: "/courses/parukeri-600.webp", alt: "Pamje nga kursi Parukeri 600 orë" },
      { type: "image", src: "/courses/parukeri-900.webp", alt: "Pamje nga kursi Parukeri 900 orë" },
      { type: "image", src: "/courses/parukeri-2100.webp", alt: "Pamje nga kursi Parukeri 2100 orë" }
    ]
  },

  // Parukeri — 600 orë
  {
    id: 26,
    title: "Kursi Parukeri (600 ore)",
    category: "parukeri",
    duration: "600 orë",
    durationCategory: "600 orë",
    level: "Mesatar",
    price: "",
    startDate: "",
    schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
    image: "/courses/parukeri-600.webp",
    videoSrc: "/videos/parukeri-video.webm",
    description:
      "Kurs 600-orësh për të fituar aftësi të mesme në prerje, stilim dhe ngjyrosje.",
    longDescription:
      "Mbledh etapat kryesore të prerjes bazë, makeup për flokët, permanent të thjeshtë dhe ngjyrosje, si dhe praktikë laboratorike në sallon të pajisur.",
    instructors: [
      {
        name: "Arta Mema",
        role: "Instruktore Parukeri",
        image: "/placeholder.svg?height=200&width=200&text=Instructor",
        bio: "8 vite eksperiencë në praktikë të sallonit."
      }
    ],
    curriculum: [
      {
        title: "Trikologjia & Kujdesi i Flokut",
        lessons: [
          "Struktura e flokut dhe fazat e rritjes",
          "Alopecia, zbokthi dhe problemet e skalpit",
          "Përdorimi i produkteve profesionale sipas tipit të flokut"
        ]
      },
      {
        title: "Ngjyrosja e Flokëve (Kolorimetria)",
        lessons: [
          "Teoria e ngjyrave dhe sistemi i numrave",
          "Llojet e bojërave (permanente, semi, ton mbi ton)",
          "Testet e alergjisë dhe aplikimi praktik"
        ]
      },
      {
        title: "Prerjet Bazë",
        lessons: [
          "Seksionimi i flokëve dhe këndet e prerjes",
          "Teknikat 0° dhe 45°",
          "Zgjedhja e prerjes sipas formës së fytyrës"
        ]
      },
      {
        title: "Stilizimi & Pajisjet Elektrike",
        lessons: [
          "Përdorimi i tharëses, pjastrës dhe mashës",
          "Produktet stilizuese dhe efektet e tyre",
          "Krehje dhe stilime bazë për çdo lloj floku"
        ]
      }
    ],
    whatYouLearn:
      "Kursanti zotëron aftësi të ndërmjetme në prerje, ngjyrosje dhe stilim, duke punuar me siguri dhe profesionalizëm në shërbimet bazë të sallonit dhe duke ndihmuar në trajtime më të avancuara nën mbikëqyrje.",
    benefits: ["Certifikim bazik", "Stazhe praktike"],
    materials: ["Set gërshërë bazik", "Ngjyra fillestare"],
    testimonials: [],
    faqs: [],
    featured: false,
    students: 12,
    media: [
      { type: "image", src: "/courses/parukeri-300.webp", alt: "Pamje nga kursi Parukeri 300 orë" },
      { type: "image", src: "/courses/parukeri-600.webp", alt: "Pamje nga kursi Parukeri 600 orë" },
      { type: "image", src: "/courses/parukeri-900.webp", alt: "Pamje nga kursi Parukeri 900 orë" },
      { type: "image", src: "/courses/parukeri-2100.webp", alt: "Pamje nga kursi Parukeri 2100 orë" }
    ]
  },

  // Parukeri — 900 orë (UPDATED)
  {
    id: 25,
    title: "Kursi Parukeri (900 ore)",
    category: "parukeri",
    duration: "900 orë",
    durationCategory: "900 orë",
    level: "Mesatar – Avancuar",
    price: "",
    startDate: "",
    schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
    image: "/courses/parukeri-900.webp",
    videoSrc: "/videos/parukeri-video.webm",
    description:
      "Program 900-orësh me fokus në trikokimi, ngjyrosje profesionale, prerje/stilime të avancuara dhe extensions.",
    longDescription:
      "Thellim në proceset kimike të ngjyrosjes dhe dekolorimit, neutralizim/tonizim, siguri në trajtimet kimike; graduime dhe teksturime të avancuara; lloje dhe mirëmbajtje extensions; etikë, komunikim dhe prezantim profesional.",
    instructors: [
      {
        name: "Blerina Meta",
        role: "Instruktore Parukeri",
        image: "/placeholder.svg?height=200&width=200&text=Instructor",
        bio: "10 vite eksperiencë në prerje dhe stilim parukerie."
      }
    ],
    curriculum: [
      {
        title: "Trikokimia & Ngjyrosja Profesionale",
        lessons: [
          "Proceset kimike të bojërave dhe dekolorimit",
          "Neutralizimi dhe tonizimi i ngjyrës",
          "Siguria në trajtimet kimike"
        ]
      },
      {
        title: "Prerje & Stilime Avancuara",
        lessons: [
          "Graduimet 0°, 45°, 90°, 180°",
          "Teknikat e shtresimit, rrallimit dhe teksturimit",
          "Përshtatja e prerjeve me tiparet e klientit"
        ]
      },
      {
        title: "Zgjatje dhe Dendësim Flokësh (Extensions)",
        lessons: [
          "Llojet e extensions (keratinë, microring, tape-in)",
          "Procedurat e vendosjes dhe mirëmbajtjes",
          "Kujdesi pas aplikimit"
        ]
      },
      {
        title: "Etikë dhe Komunikim Profesional",
        lessons: [
          "Konsultimi me klientin",
          "Prezantimi dhe imazhi profesional",
          "Promovimi personal dhe rrjetet sociale"
        ]
      }
    ],
    whatYouLearn:
      "Kursanti zotëron njohuri të avancuara në prerje, ngjyrosje dhe shtesa flokësh, si dhe aftësi për t’u kujdesur për klientin me profesionalizëm, gati për të punuar i pavarur në sallon.",
    benefits: ["Portofol profesional", "Certifikim vendor"],
    materials: ["Ngjyra & brushë stili", "Gërshërë & krehera"],
    testimonials: [],
    faqs: [],
    featured: false,
    students: 18,
    media: [
      { type: "image", src: "/courses/parukeri-300.webp", alt: "Parukeri 300" },
      { type: "image", src: "/courses/parukeri-600.webp", alt: "Parukeri 600" },
      { type: "image", src: "/courses/parukeri-900.webp", alt: "Parukeri 900" },
      { type: "image", src: "/courses/parukeri-2100.webp", alt: "Parukeri 2100" }
    ]
  },

  // Parukeri — 1500 orë (UPDATED)
  {
    id: 79,
    title: "Kursi Parukeri (1500 ore)",
    category: "parukeri",
    duration: "1500 orë",
    durationCategory: "1500 orë",
    level: "Fillestar – Avancuar",
    price: "",
    startDate: "",
    schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
    image: "/courses/parukeri-2100.webp",
    videoSrc: "/videos/parukeri-video.webm",
    description:
      "Trajnim i thelluar 1500-orësh: prerje/stilim të avancuara, kolorime kreative dhe menaxhim salloni.",
    longDescription:
      "Teknika të avancuara të prerjes (layering, bob, shag, pixie), përdorimi i makinerive/brisqeve dhe menaxhim kohe; kolorime të kombinuara me balayage/ombré, oksidant & përqendrime, trajtime rigjeneruese; trikologji e avancuar dhe protokolle pH; marketing, rezervime dhe shitje produktesh.",
    instructors: [
      {
        name: "Arjan Bregu",
        role: "Instruktor Kryesor Parukeri",
        image: "/placeholder.svg?height=200&width=200&text=Instructor",
        bio: "Më +12 vite eksperiencë në parukeri dhe trajnime profesionale."
      }
    ],
    curriculum: [
      {
        title: "Teknika Avancuara të Prerjes & Stilimit",
        lessons: [
          "Layering, bob, shag, pixie dhe prerje kreative",
          "Përdorimi i makinerive dhe brisqeve",
          "Menaxhimi i kohës në prerje profesionale"
        ]
      },
      {
        title: "Kolorimet Avancuara & Dekolorimi",
        lessons: [
          "Ngjyrime të kombinuara, balayage, ombré",
          "Llogaritja e oksidantit dhe përqendrimeve",
          "Trajtimet rigjeneruese pas ngjyrosjes"
        ]
      },
      {
        title: "Trikologjia e Avancuar",
        lessons: [
          "Diagnostikimi i flokëve dhe skalpit",
          "Produktet me pH të ndryshëm dhe efektet e tyre",
          "Kujdesi profesional për flokë të lyer apo të dëmtuar"
        ]
      },
      {
        title: "Marketing & Menaxhimi i Salloneve",
        lessons: [
          "Organizimi i punës dhe komunikimi me klientin",
          "Përdorimi i rrjeteve sociale për promovim",
          "Menaxhimi i rezervimeve dhe shitja e produkteve"
        ]
      }
    ],
    whatYouLearn:
      "Kursanti është i aftë të kryejë me mjeshtëri teknikat e prerjes, ngjyrosjes dhe stilimit, të menaxhojë klientë dhe të ndërtojë imazh profesional në treg.",
    benefits: ["Certifikim ndërkombëtar", "Portofol profesional", "Stazhe në sallone partnerë"],
    materials: ["Set gërshërë profesionalë", "Ngjyra premium & dekolorantë", "Pajisje për permanent & extension"],
    testimonials: [],
    faqs: [],
    featured: false,
    students: 25,
    media: [
      { type: "image", src: "/courses/parukeri-300.webp", alt: "Parukeri 300" },
      { type: "image", src: "/courses/parukeri-600.webp", alt: "Parukeri 600" },
      { type: "image", src: "/courses/parukeri-900.webp", alt: "Parukeri 900" },
      { type: "image", src: "/courses/parukeri-2100.webp", alt: "Parukeri 2100" }
    ]
  },

  // Parukeri — 2100 orë (UPDATED)
  {
    id: 24,
    title: "Kursi Parukeri (2100 ore)",
    category: "parukeri",
    duration: "2100 orë",
    durationCategory: "2100 orë",
    level: "Fillestar – Avancuar",
    price: "",
    startDate: "",
    schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
    image: "/courses/parukeri-2100.webp",
    videoSrc: "/videos/parukeri-video.webm",
    description:
      "Program i plotë 2100-orësh: prerje profesionale & avangardë, ngjyrosje/dekolorim kompleks, evente & menaxhim teknik.",
    longDescription:
      "Kombinime gradimesh dhe forma kreative me Pivot Point dhe analiza morfologjike; ngjyrosje/dekolorim shumëfazësh, rikthim ngjyre dhe trajtime rigjeneruese/keratinike; stilime artistike për evente dhe portofol; rregullore ligjore, drejtim teknik, role ekipi dhe këshillim.",
    instructors: [
      {
        name: "Arjan Bregu",
        role: "Instruktor Kryesor Parukeri",
        image: "/placeholder.svg?height=200&width=200&text=Instructor",
        bio: "Më +12 vite eksperiencë në parukeri dhe trajnime profesionale."
      }
    ],
    curriculum: [
      {
        title: "Prerje Profesionale & Avangardë",
        lessons: [
          "Kombinime gradimesh dhe forma kreative",
          "Dizajne gjeometrike dhe prerje të personalizuara",
          "Teknikat Pivot Point dhe analiza morfologjike"
        ]
      },
      {
        title: "Ngjyrosje, Dekolorim & Rikuperim Floku",
        lessons: [
          "Proceset kimike komplekse dhe neutralizimi",
          "Dekolorim shumëfazësh dhe rikthim ngjyre",
          "Trajtimet rigjeneruese dhe keratinike"
        ]
      },
      {
        title: "Teknika të Avancuara Stilimi & Evente",
        lessons: [
          "Krehje artistike për dasma dhe sfilata",
          "Punë me bigudina, mashë, dhe aksesorë",
          "Krijime individuale dhe portofol profesional"
        ]
      },
      {
        title: "Menaxhim & Drejtim Teknik Sallon",
        lessons: [
          "Rregulloret ligjore për hapjen e sallonit",
          "Drejtimi teknik dhe ndarja e roleve në ekip",
          "Këshillimi i stafit dhe klientëve"
        ]
      }
    ],
    whatYouLearn:
      "Përgatitje për rolin e Parukierit të Kualifikuar Profesional dhe Drejtuesit Teknik: shërbime të avancuara, menaxhim salloni dhe zhvillim i karrierës ndërkombëtare.",
    benefits: ["Certifikim ndërkombëtar", "Portofol profesional", "Stazhe në sallone partnerë"],
    materials: ["Set gërshërë profesionalë", "Ngjyra premium & trajtime keratinike", "Aksesorë stilimi & bigudina"],
    testimonials: [],
    faqs: [],
    featured: false,
    students: 25,
    media: [
      { type: "image", src: "/courses/parukeri-300.webp", alt: "Parukeri 300" },
      { type: "image", src: "/courses/parukeri-600.webp", alt: "Parukeri 600" },
      { type: "image", src: "/courses/parukeri-900.webp", alt: "Parukeri 900" },
      { type: "image", src: "/courses/parukeri-2100.webp", alt: "Parukeri 2100" }
    ]
  },

{
    id: 82,
    title: "Kursi i Bashkuar: Parukeri – Estetikë (2100 ore)",
    category: "parukeri-estetike",
    duration: "2100 orë",
    durationCategory: "2100 orë",
    level: "Fillestar – Avancuar",
    price: "",
    startDate: "",
    schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
    image: "/courses/parukeri-estetike-2100.webp",
    videoSrc: "/videos/parukeri-estetike-video.webm",
    description:
      "Program i plotë 2100-orësh që bashkon Parukerinë dhe Estetikën: nga higjiena dhe anatomia te prerja, ngjyrosja, trajtimet faciale/trupi dhe menaxhimi profesional.",
    longDescription:
      "Kurs hibrid për formim të plotë në bukuri: standarde higjieno-sanitare dhe etikë; anatomia e flokut dhe lëkurës; prerje/stilim me gradime 0°–90° dhe updo eventesh; kolorimet e avancuara me dekolorim/tonizim; trajtime faciale dhe trupi me pajisje (RF, LED, Vapozon, Dermapen); depilim profesional dhe protokolle anticelulit; menaxhim/drejtim teknik, licenca dhe marketing personal.",
    instructors: [
      {
        name: "Arjan Bregu",
        role: "Drejtues Teknik Parukeri",
        image: "/placeholder.svg?height=200&width=200&text=Instructor",
        bio: "12+ vite përvojë në prerje/stilim dhe trajnime profesionale."
      },
      {
        name: "Elena Marka",
        role: "Master Estetiste",
        image: "/placeholder.svg?height=200&width=200&text=Instructor",
        bio: "Eksperte në aparatura high-tech dhe protokolle dermatologjike."
      }
    ],
    curriculum: [
      {
        title: "Higjiena, Etika & Organizimi Profesional",
        lessons: [
          "Standardet e pastërtisë dhe sterilizimit në sallon",
          "Sjellja profesionale dhe komunikimi me klientin",
          "Organizimi i ambientit dhe menaxhimi i kohës"
        ]
      },
      {
        title: "Struktura e Flokut & Lëkurës",
        lessons: [
          "Anatomia dhe fiziologjia e flokut dhe lëkurës",
          "Tipologjitë dhe analizat profesionale",
          "Produktet kozmetike për kujdesin e flokëve dhe fytyrës"
        ]
      },
      {
        title: "Prerje, Larje & Stilim Profesional",
        lessons: [
          "Teknikat 0°, 45°, 90° dhe shtresime",
          "Krehje artistike, brushing, updo dhe evente",
          "Përdorimi i tharëses, pjastrës dhe pajisjeve termike"
        ]
      },
      {
        title: "Ngjyrosje & Kolorimet Avancuara",
        lessons: [
          "Kolorimetria, sistemet e ngjyrave dhe refleksionet",
          "Dekolorimi, balayage, tonizimi dhe neutralizimi",
          "Kujdesi pas ngjyrosjes dhe rikuperimi i flokut"
        ]
      },
      {
        title: "Trajtimet Estetike të Fytyrës & Trupit",
        lessons: [
          "Pastrimi i thellë i fytyrës, maska dhe peeling profesional",
          "Masazhi relaksues, drenazh limfatik dhe aromaterapi",
          "Përdorimi i pajisjeve estetike (RF, LED, Vapozon, Dermapen)"
        ]
      },
      {
        title: "Depilim & Trajtimet e Trupit",
        lessons: [
          "Metodat e depilimit (dyllë, sheqer, roll-on)",
          "Presoterapia, termokoperta dhe trajtimet anticelulit",
          "Konsultimi profesional për kujdesin e trupit"
        ]
      },
      {
        title: "Menaxhim & Promovim Profesional",
        lessons: [
          "Drejtimi teknik i sallonit/estetikës",
          "Ligjet dhe licencat e nevojshme për hapje biznesi",
          "Marketingu personal dhe imazhi profesional"
        ]
      }
    ],
    whatYouLearn:
      "Përgatitje si profesionist i plotë në Parukeri dhe Estetikë me kompetenca teknike, praktike dhe menaxheriale për sallon apo qendër bukurie të pavarur.",
    benefits: [
      "Formim i integruar Parukeri + Estetikë",
      "Certifikim i avancuar",
      "Portofol i plotë me projekte & evente",
      "Stazhe në sallone dhe qendra estetike"
    ],
    materials: [
      "Set gërshërë & krehera profesionalë",
      "Produkte kolorimi & trajtime rigjeneruese",
      "Kit facial/body & aksesorë depilimi"
    ],
    testimonials: [],
    faqs: [],
    featured: true,
    students: 0,
    media: [
      { type: "image", src: "/courses/parukeri-estetike-2100.webp", alt: "Parukeri & Estetikë 2100 orë" },
      { type: "image", src: "/courses/parukeri-2100.webp", alt: "Parukeri 2100" },
      { type: "image", src: "/courses/estetike-2100.webp", alt: "Estetikë 2100" }
    ]
  },
// Tattoo & Hixhama Courses
{
id: 28,
title: "Kursi Tattoo Art (2100 ore)",
category: "tattoo-art",
duration: "2100 orë",
durationCategory: "2100 orë",
level: "Mesatar – Avancuar",
price: "",
startDate: "",
schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
image: "/courses/tatuator.webp",
noCustomCrop: true,
videoSrc: "/videos/tattoo-video.webm",
description: "Program i plotë 2100-orësh në artin e tatuazhit: etikë, higjienë & sterilizim, dizajn, teknikë aplikimi (line, shade, color) dhe menaxhim studioje.",
longDescription: "Kurs profesional që mbulon historinë dhe etikën e tatuazhit; anatominë e lëkurës dhe fiziologjinë e pigmentimit; protokollet e sigurisë biologjike dhe sterilizimit (autoklavë, dezinfektim, PPE); makineritë coil/rotary, gjilpërat dhe furnizimet; stilimet kryesore (old school, neo-traditional, realism, watercolor, tribal); dizajnin manual dhe digjital, stencil dhe kompozimin në trup; teknikën e linjës, hijezimit dhe ngjyrimit me kontroll të presionit/shpejtësisë; aftercare dhe ndjekjen e shërimit; korrigjime dhe bazat e heqjes me laser; si dhe aspektet ligjore, branding, marketing dhe ndërtimin e portofolit profesional.",
instructors: [
{
name: "Luan Dervishi",
role: "Master Tattoo Artist",
image: "/placeholder.svg?height=200&width=200&text=Instructor",
bio: "20+ vite eksperiencë në stile të ndryshme të tatuazhit dhe trajnim ndërkombëtar."
}
],
curriculum: [
{ title: "Moduli 1: Historia & Etika Profesionale", lessons: ["Origjina & evolucioni kulturor", "Përgjegjësia etike/ligjore", "Komunikimi me klientin"] },
{ title: "Moduli 2: Higjiena, Sterilizimi & Biosiguria", lessons: ["Dezinfektim ambienti/pajisjesh", "Materiale sterile & PPE", "Protokollet standarde për çdo klient"] },
{ title: "Moduli 3: Anatomia e Lëkurës & Fiziologjia e Pigmentit", lessons: ["Epidermë/dermë & shërimi", "Thellësia e aplikimit", "Parandalimi i dëmtimit të lëkurës"] },
{ title: "Moduli 4: Pajisje & Gjilpëra", lessons: ["Coil vs rotary", "Kartridgë & konfigurime gjilpërash", "Parametrat: voltazh, shpejtësi, presion"] },
{ title: "Moduli 5: Teknikat e Aplikimit", lessons: ["Linja (lining)", "Hijezim (shading)", "Mbushje & layering i ngjyrave"] },
{ title: "Moduli 6: Dizajn & Ilustrim", lessons: ["Skicim dorazi & digjital", "Stencil & pozicionim në trup", "Kompozim & rrjedhë anatomike"] },
{ title: "Moduli 7: Ngjyra & Kolorimetri", lessons: ["Përzierje pigmentesh", "Gradient/3D/realism", "Ruajtja e ngjyrës gjatë shërimit"] },
{ title: "Moduli 8: Aftercare & Korrektim", lessons: ["Udhëzime pas-procedurës", "Produkte hidratuese/antibakteriale", "Korrektime & baza e heqjes me laser"] },
{ title: "Moduli 9: Ligjshmëria & Studio Management", lessons: ["Rregullore & licenca", "Menaxhimi i mbetjeve biologjike", "Dokumentacion klienti & miratim i informuar"] },
{ title: "Moduli 10: Marketing & Portofol", lessons: ["Branding personal", "Rrjete sociale & prezantim punësh", "Ndërtimi i portofolit tregtar"] },
{ title: "Moduli 11: Praktika e Udhëzuar", lessons: ["Ushtrime në lëkurë sintetike", "Seanca të mbikëqyrura live", "Vlerësim final teorik/praktik"] }
],
benefits: [
"Certifikim profesional si Tattoo Artist",
"Portofol i plotë me punë reale & simulime",
"Njohuri të avancuara për biosigurinë dhe menaxhimin e studios"
],
materials: [
"Makineri tatuazhi (coil/rotary)",
"Set gjilpërash & kartridgësh",
"Pigmente profesionale & furnizime sterile"
],
testimonials: [],
faqs: [],
featured: false,
students: 12,
media: [
{ type: "image", src: "/courses/tatuator.webp", alt: "Pamje nga kursi Tattoo" }
]
},
{
id: 31,
title: "Terapia Hixhama (150 ore)",
category: "terapia-hixhama",
duration: "150 orë",
durationCategory: "150 orë",
level: "Fillestar",
price: "",
startDate: "",
schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
image: "/courses/hixhama-1.webp",
videoSrc: "/videos/hixhama-video.webm",
description: "Kurs 150-orësh për Hixhamë bazë (Cupping Therapy): parimet, higjiena dhe aplikimet praktike të kupave të thata dhe të lagështa.",
longDescription: "Hyrje në Hixhamë dhe parimet themelore; anatomia & fiziologjia bazë; praktikë në Hixhamë të thatë dhe të lagësht; rregullat e sterilizimit; kujdesi pas seancës dhe këshillimi i klientit.",
instructors: [
{
name: "Nora Vata",
role: "Terapeute Junior",
image: "/placeholder.svg?height=200&width=200&text=Instructor",
bio: "3 vite në terapi Hixhama."
}
],
curriculum: [
{
title: "Hyrje në Hixhama & Parimet Themelore",
lessons: [
"Historia dhe origjina e Cupping Therapy",
"Llojet e Hixhamës: e thatë, e lagësht, e zjarrtë",
"Përfitimet për trupin dhe mendjen"
]
},
{
title: "Anatomia & Fiziologjia e Trupit të Njeriut",
lessons: [
"Qarkullimi i gjakut dhe sistemi limfatik",
"Organe vitale & pikat e Hixhamës",
"Parimet e vetë-shërimit përmes qarkullimit"
]
},
{
title: "Praktika Bazë e Hixhamës së Thatë & Lagësht",
lessons: [
"Identifikimi i pikave në shpinë dhe qafë",
"Vendosja e kupave & kontrolli i presionit",
"Higjiena dhe sterilizimi i instrumenteve"
]
},
{
title: "Kujdesi Pas Seancës & Këshillimi i Klientit",
lessons: [
"Produkte qetësuese & dezinfektimi i lëkurës",
"Udhëzime pas-terapisë (ushqimi, pushimi, hidratimi)",
"Kundërindikacionet kryesore"
]
}
],
whatYouLearn: "Kursanti aftësohet të kryejë Hixhamë bazë (Cupping Therapy) për përmirësimin e qarkullimit, detoksifikimin e trupit dhe uljen e stresit, duke respektuar higjienën, etikën profesionale dhe protokollet mjekësore.",
benefits: ["Certifikim bazik Hixhama", "Ushtrime praktike të supervizuara"],
materials: ["Set bazik kupash", "Dezinfektues & materiale sterile"],
testimonials: [],
faqs: [],
featured: false,
students: 8,
media: [
{ type: "image", src: "/courses/hixhama-1.webp", alt: "Pamje nga kursi Hixhama 1" },
{ type: "image", src: "/courses/hixhama-2.webp", alt: "Pamje nga kursi Hixhama 2" },
{ type: "image", src: "/courses/hixhama-3.webp", alt: "Pamje nga kursi Hixhama 3" }
]
},
{
id: 30,
title: "Terapia Hixhama (300 ore)",
category: "terapia-hixhama",
duration: "300 orë",
durationCategory: "300 orë",
level: "Fillestar – Mesatar",
price: "",
startDate: "",
schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
image: "/courses/hixhama-2.webp",
videoSrc: "/videos/hixhama-video.webm",
description: "Kurs 300-orësh me teknika të ndërmjetme: Hixhama e lagësht, e kombinuar dhe moving cupping me standarde të plota higjieno-sanitare.",
longDescription: "Anatomia e sistemeve trupore; teknika të avancuara të Hixhamës (lagësht, kombinuar, moving cupping); sterilizim & protokolle sigurie; efektet, kundërindikacionet dhe përsëritja e seancave; etika dhe këshillimi profesional me dokumentim klinik.",
instructors: [
{
name: "Elira Hoxha",
role: "Terapeute",
image: "/placeholder.svg?height=200&width=200&text=Instructor",
bio: "7 vite përvojë në terapi Hixhama."
}
],
curriculum: [
{
title: "Anatomia & Sistemet e Trupit",
lessons: [
"Sistemi qarkullues, limfatik dhe muskulor",
"Pikat reflektive & lidhja me organet",
"Bllokimet energjitike dhe ndikimi në shëndet"
]
},
{
title: "Teknikat e Hixhamës së Avancuar",
lessons: [
"Hixhama e lagësht (me prerje të lehtë)",
"Hixhama e kombinuar (masazh + kupa statike)",
"Moving cupping"
]
},
{
title: "Sterilizimi, Higjiena & Parandalimi i Infeksioneve",
lessons: [
"Dezinfektimi dhe mjetet sterile",
"Menaxhimi i instrumenteve me përdorim të kufizuar",
"Protokollet e sigurisë për klientin dhe terapistin"
]
},
{
title: "Efektet e Hixhamës & Kundërindikacionet",
lessons: [
"Ndikimi në tension, dhimbje kronike dhe stres",
"Rastet kur duhet shmangur (anemi, shtatzëni, diabet akut)",
"Rregullat për përsëritjen e seancave"
]
},
{
title: "Etika & Këshillimi Profesional",
lessons: [
"Komunikimi dhe menaxhimi i mirëbesimit",
"Dokumentimi i seancave & analiza e rezultateve",
"Formularë mjekësorë dhe leje të nënshkruara"
]
}
],
whatYouLearn: "Kursanti zotëron njohuri të ndërmjetme në Hixhamë të avancuar, duke aplikuar me saktësi terapinë e lagësht dhe të kombinuar për lehtësimin e dhimbjeve, rigjenerimin e trupit dhe stimulimin e qarkullimit të gjakut.",
benefits: ["Certifikim i ndërmjetëm Hixhama", "Protokolle të standardizuara klinike"],
materials: ["Kupat statike & për lëvizje", "Set steril & garza"],
testimonials: [],
faqs: [],
featured: false,
students: 14,
media: [
{ type: "image", src: "/courses/hixhama-1.webp", alt: "Pamje nga kursi Hixhama 1" },
{ type: "image", src: "/courses/hixhama-2.webp", alt: "Pamje nga kursi Hixhama 2" },
{ type: "image", src: "/courses/hixhama-3.webp", alt: "Pamje nga kursi Hixhama 3" }
]
},
{
id: 29,
title: "Terapia Hixhama (600 ore)",
category: "terapia-hixhama",
duration: "600 orë",
durationCategory: "600 orë",
level: "Mesatar – Avancuar",
price: "",
startDate: "",
schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
image: "/courses/hixhama-3.webp",
videoSrc: "/videos/hixhama-video.webm",
description: "Formim i plotë profesional 600-orësh: harta të avancuara të pikave, aplikime klinike dhe menaxhim praktikash Hixhama.",
longDescription: "Mjekësi holistike dhe energjitë e trupit; harta të avancuara të pikave për sisteme të ndryshme; aplikime të specializuara për migrenë, reumatizëm, pagjumësi, dhimbje mesi; kombinim me akupresurë, masazh & aromaterapi; protokolle ndërkombëtare sigurie dhe menaxhim klinik & dokumentim.",
instructors: [
{
name: "Emina Kola",
role: "Terapeute Hixhama",
image: "/placeholder.svg?height=200&width=200&text=Instructor",
bio: "15 vite në aplikime tradicionale dhe moderne Hixhama."
}
],
curriculum: [
{
title: "Mjekësia Holistike & Energjitë e Trupit",
lessons: [
"Trup–mendje–sistem energjitik",
"Konceptet lindore dhe arabe",
"Ekuilibri biologjik dhe emocional"
]
},
{
title: "Anatomia & Pikat Terapeutike të Hixhamës",
lessons: [
"Pikat për sistemin nervor, tretës, qarkullues, imunitar",
"Skemat e avancuara (harta e Hixhamës)",
"Ndikimi i presionit në funksionet e organeve"
]
},
{
title: "Hixhama e Avancuar Praktike",
lessons: [
"Migrena, reumatizëm, pagjumësi, dhimbje mesi",
"Kombinimi me akupresurë, masazh, aromaterapi",
"Kontrolli i hemorragjisë minimale & post-care"
]
},
{
title: "Higjiena, Siguria & Etika Profesionale",
lessons: [
"Protokollet ndërkombëtare të sigurisë",
"Higjiena mjedisore dhe personale",
"Rregulloret ligjore për praktikim"
]
},
{
title: "Menaxhimi & Aplikimi Klinik",
lessons: [
"Ambient terapeutik profesional",
"Dokumentimi i rasteve & historiku i pacientit",
"Këshillimi, mbikëqyrja dhe përsëritja e trajtimeve"
]
}
],
whatYouLearn: "Kursanti përgatitet si Terapist Profesionist i Hixhamës, me njohuri të thella mbi anatomisë, fiziologjisë dhe energjisë trupore, i aftë të aplikojë terapinë në mënyrë të sigurt për qëllime kurative, rigjeneruese dhe mirëqenieje fizike e mendore.",
benefits: ["Certifikim profesional Hixhama", "Supervizim klinik & portofol rastesh"],
materials: ["Set profesional kupash", "Manuale protokollesh & dokumentim klinik"],
testimonials: [],
faqs: [],
featured: false,
students: 20,
media: [
{ type: "image", src: "/courses/hixhama-1.webp", alt: "Pamje nga kursi Hixhama 1" },
{ type: "image", src: "/courses/hixhama-2.webp", alt: "Pamje nga kursi Hixhama 2" },
{ type: "image", src: "/courses/hixhama-3.webp", alt: "Pamje nga kursi Hixhama 3" }
]
},
// Makeup Courses
{
id: 81,
title: "Kursi Make-Up (150 ore)",
category: "makeup",
duration: "150 orë",
durationCategory: "150 orë",
level: "Fillestar",
price: "",
startDate: "",
schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
image: "/courses/makeup-150.webp",
videoSrc: "/videos/makeup-video.webm",
description: "Kurs bazë 150-orësh për etikën, higjienën dhe teknikat themelore të make-up-it ditor.",
longDescription: "Etika & higjiena (stacioni i punës, sterilizimi); anatomia & tipologjia e fytyrës dhe lëkurës; teknikat bazë (bazë, pudër, kontur, vetulla, rimel, hijezim/ndriçim); make-up ditor natyral dhe mirëmbajtja gjatë ditës.",
instructors: [],
curriculum: [
{
title: "Etika & Higjiena Profesionale",
lessons: [
"Sterilizimi i veglave dhe pastërtia e krehërave e penelave",
"Organizimi i stacionit të punës dhe përgatitja e klientit",
"Sjellja dhe prezantimi profesional i make-up artistit"
]
},
{
title: "Anatomia & Tipologjia e Fytyrës",
lessons: [
"Format e fytyrës dhe analizimi i tyre",
"Llojet e lëkurës dhe përzgjedhja e produkteve",
"Identifikimi i ngjyrave bazë të tonit të lëkurës"
]
},
{
title: "Teknikat Bazë të Make-Up-it",
lessons: [
"Aplikimi i bazës, pudrës dhe konturit",
"Rregullimi i vetullave dhe aplikimi i rimelit",
"Hijezimi dhe ndriçimi i fytyrës"
]
},
{
title: "Make-Up Ditor & Natyral",
lessons: [
"Grimi i përditshëm për çdo tip lëkure",
"Balancimi i ngjyrave për pamje harmonike",
"Këshillat për mirëmbajtjen e grimit gjatë ditës"
]
}
],
whatYouLearn: "Kursanti fiton njohuri bazë për grimin e përditshëm dhe profesional, duke ndërtuar një bazë solide për zhvillimin e aftësive artistike dhe teknike në make-up.",
benefits: ["Certifikim bazik", "Protokolle higjiene & set-up profesional"],
materials: ["Set bazë penelash", "Sfungjerë & dezinfektues"],
testimonials: [],
faqs: [],
featured: false,
students: 0,
media: [
{ type: "image", src: "/courses/makeup-150.webp", alt: "Kursi Make-Up 150 orë" }
]
},
{
id: 80,
title: "Kursi Make-Up (300 ore)",
category: "makeup",
duration: "300 orë",
durationCategory: "300 orë",
level: "Fillestar – Mesatar",
price: "",
startDate: "",
schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
image: "/courses/makeup-300.webp",
videoSrc: "/videos/makeup-video.webm",
description: "Kurs 300-orësh për make-up profesional, grim fotografik dhe komunikim me klientin.",
longDescription: "Higjiena & produktet profesionale; analiza e alergjive; make-up ditor/profesional sipas rastit; grim artistik & fotografi; ndriçim në kamera dhe bashkëpunim me stilist/fotograf; etikë dhe konsultim me klientin.",
instructors: [],
curriculum: [
{
title: "Higjiena & Produktet Kozmetike Profesionale",
lessons: [
"Strukturat dhe përbërësit e produkteve kozmetike",
"Ruajtja, sterilizimi dhe përdorimi i saktë i tyre",
"Analiza e alergjive dhe ndjeshmërisë së lëkurës"
]
},
{
title: "Make-Up Ditor & Profesional",
lessons: [
"Balancimi i bazës, konturit dhe highlighter-it",
"Teknikat e përmirësimit të tipareve (corrective makeup)",
"Aplikimi i make-up-it sipas rastit (zyrë, darkë, event)"
]
},
{
title: "Grim Artistik & Fotografi",
lessons: [
"Ndriçimi dhe efektet vizuale në kamera",
"Grimi për set fotografik dhe spote publicitare",
"Koordinimi me stilistin dhe fotografin"
]
},
{
title: "Etika & Komunikimi me Klientin",
lessons: [
"Konsultimi paraprak dhe kuptimi i kërkesës së klientit",
"Prezantimi profesional dhe krijimi i besimit",
"Ndërtimi i imazhit si make-up artist"
]
}
],
whatYouLearn: "Kursanti aftësohet të realizojë make-up profesional për evente, foto e punë të përditshme, duke ditur të përshtasë stilin sipas fytyrës dhe kontekstit artistik.",
benefits: ["Certifikim profesional", "Portofol fillestar fotografik"],
materials: ["Set furçash", "Paleta bazë & higjienizues"],
testimonials: [],
faqs: [],
featured: false,
students: 0,
media: [
{ type: "image", src: "/courses/makeup-300.webp", alt: "Kursi Make-Up 300 orë" }
]
},
{
id: 33,
title: "Make-up (600 ore)",
category: "makeup",
duration: "600 orë",
durationCategory: "600 orë",
level: "Mesatar",
price: "",
startDate: "",
schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
image: "/courses/makeup-600.webp",
videoSrc: "/videos/makeup-video.webm",
description: "Kurs 600-orësh me teknika të avancuara (smokey, cut crease), evente & TV/HD.",
longDescription: "Analiza morfologjike e fytyrës; balancimi i simetrisë dhe ngjyrave; smokey eyes, cut crease, glam, wet look; qerpikë artificialë & eyeliner profesional; make-up për dasma/sfilata; teknika HD për fotografi/TV dhe video.",
instructors: [
{
name: "Alida Hysi",
role: "Make-up Trainer",
image: "/placeholder.svg?height=200&width=200&text=Instructor",
bio: "10 vite përvojë në make-up komercial dhe editorial."
}
],
curriculum: [
{
title: "Anatomia e Fytyrës & Analiza Morfologjike",
lessons: [
"Strukturat e kockave, muskujve dhe proporcioneve estetike",
"Përdorimi i ngjyrës për të theksuar ose fshehur tipare",
"Balancimi i simetrisë së fytyrës"
]
},
{
title: "Teknika të Avancuara Make-Up",
lessons: [
"Grimi smokey eyes, cut crease, glam, wet look",
"Aplikimi i qerpikëve artificialë dhe eyeliner-it profesional",
"Përdorimi i produkteve kremozë dhe pudrorë në harmoni"
]
},
{
title: "Make-Up për Evente & Sfilata",
lessons: [
"Grimi për dasma, festa dhe skenë",
"Përshtatja e ngjyrave sipas ndriçimit të ambientit",
"Krijimi i efekteve artistike për evente mode"
]
},
{
title: "Make-Up Fotografik & Televiziv",
lessons: [
"Teknikat HD për kamera dhe ndriçim profesional",
"Përzgjedhja e toneve për lëkurat me dritë dhe hijë",
"Grimi për video, TV dhe editorial beauty"
]
}
],
whatYouLearn: "Kursanti zotëron aftësi profesionale për realizimin e grimit fotografik, skenik dhe estetik, duke ndërtuar portofolin personal dhe një imazh të fortë si make-up artist.",
benefits: ["Portofol profesional", "Praktikë në set/atelier"],
materials: ["Qerpikë & ngjitës profesional", "Paleta profesionale sy/buzë"],
testimonials: [],
faqs: [],
featured: false,
students: 0,
media: [
{ type: "image", src: "/courses/makeup-600.webp", alt: "Kursi Make-Up 600 orë" }
]
},
{
id: 32,
title: "Kursi Make-up (1500 ore)",
category: "makeup",
duration: "1500 orë",
durationCategory: "1500 orë",
level: "Fillestar – Avancuar",
price: "",
startDate: "",
schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
image: "/courses/makeup-1200.webp",
videoSrc: "/videos/makeup-video.webm",
description: "Program i plotë 1500-orësh: kolorimetri, SFX, nuse, marketing & drejtim profesional.",
longDescription: "Higjiena & etika; kolorimetri, undertone-t dhe zgjedhja e toneve; SFX (aging, latex, airbrush) & body painting; nuse & qëndrueshmëri afatgjatë; marketing, portofol, branding dhe menaxhim klientësh; organizim pune për freelance dhe bashkëpunime TV/foto.",
instructors: [
{
name: "Mariglen Qato",
role: "Make-up Artist & Trainer",
image: "/placeholder.svg?height=200&width=200&text=Instructor",
bio: "15 vite eksperiencë në make-up profesional për film, teatër dhe evente."
}
],
curriculum: [
{
title: "Higjiena, Organizimi & Etika Profesionale",
lessons: [
"Protokollet e sterilizimit dhe sigurisë gjatë punës",
"Menaxhimi i orareve dhe ambientit të punës",
"Komunikimi profesional dhe ndërtimi i reputacionit"
]
},
{
title: "Teoria e Ngjyrave & Kolorimetria në Make-Up",
lessons: [
"Kombinimet harmonike dhe kontrastet kromatike",
"Analiza e undertone-ve të lëkurës (ngrohtë, ftohtë, neutral)",
"Zgjedhja e toneve të bazës, blush-it dhe hijëzimit"
]
},
{
title: "Teknika të Avancuara Artistike & Special Effects",
lessons: [
"Body painting, grimi teatror dhe efekti “aging”",
"Aplikime me latex, ngjitës profesional dhe airbrush",
"Transformime artistike për karaktere, kinema dhe evente"
]
},
{
title: "Make-Up për Dasma & Nuse Profesionale",
lessons: [
"Konsultimi dhe prova paraprake me klienten",
"Teknikat për qëndrueshmëri afatgjatë",
"Make-up me dritë natyrale dhe ndriçim artificial"
]
},
{
title: "Marketing & Drejtim Profesional",
lessons: [
"Ndërtimi i portofolit artistik dhe branding personal",
"Menaxhimi i klientëve dhe prezenca online",
"Organizimi i punës për freelance dhe bashkëpunime TV/foto"
]
}
],
whatYouLearn: "Kursanti formohet si Make-Up Artist i kualifikuar profesionalisht, i aftë të punojë në evente, sfilata, foto-shooting, kinema apo të drejtojë punën në sallone bukurie me standarde të larta profesionale.",
benefits: ["Certifikim i avancuar", "Portofol i plotë & branding"],
materials: ["Airbrush & SFX starter kit", "Set penelash premium"],
testimonials: [],
faqs: [],
featured: false,
students: 0,
media: [
{ type: "image", src: "/courses/makeup-1200.webp", alt: "Kursi Make-Up 1500 orë" }
]
},


// Nail Art & Manikyr–Pedikyr Courses
{
id: 78,
title: "Manikyr–Pedikyr & Nail Art (50 ore)",
category: "manikyr-pedikyr-nail-art",
duration: "50 orë",
durationCategory: "50 orë",
level: "Fillestar – Mesatar",
price: "",
startDate: "",
schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
image: "/courses/nails-500.webp",
videoSrc: "/videos/nails-video.webm",
description: "Kurs 50-orësh për bazat e manikyrit profesional: higjiena, struktura e thoit dhe teknika e manikyrit bazë.",
longDescription: "Higjiena dhe etika profesionale; struktura e thoit dhe tipologjitë; teknika bazë e manikyrit me heqje kutikulash, formësim dhe lustrim; aplikim baze/llaku/top coat; masazh i duarve.",
instructors: [
{
name: "Elira Shkodra",
role: "Teknike & Trainer",
image: "/placeholder.svg?height=200&width=200&text=Instructor",
bio: "8 vite në industrinë e thonjve dhe Nail Art."
}
],
curriculum: [
{
title: "Higjiena & Etika Profesionale",
lessons: [
"Rregullat e pastërtisë dhe sterilizimit të veglave",
"Organizimi i tavolinës së punës dhe kujdesi personal",
"Sjellja profesionale dhe komunikimi me klientin"
]
},
{
title: "Struktura e Thoit & Tipologjitë",
lessons: [
"Anatomia bazë e thoit dhe rritja natyrale",
"Problemet e zakonshme: thyerje, shtresa, ndarje",
"Produktet mbrojtëse dhe ushqyese"
]
},
{
title: "Teknika e Manikyrit Bazë",
lessons: [
"Heqja e kutikulës dhe formësimi i thoit",
"Lustrimi dhe aplikimi i bazës/llakut/top coat",
"Masazhi i duarve me kremra ushqyes"
]
}
],
whatYouLearn: "Kursanti zotëron njohuritë bazë për të kryer manikyr profesional dhe higjienik, duke respektuar standardet e pastërtisë dhe kujdesit estetik të duarve.",
benefits: ["Certifikim hyrës", "Protokolle higjiene & set-up tavoline"],
materials: ["Set bazë manikyri", "Dezinfektues & doreza"],
testimonials: [],
faqs: [],
featured: false,
students: 0,
media: [
{ type: "image", src: "/courses/nails-500.webp", alt: "Pamje nga trajnimi i manikyrit" }
]
},
{
id: 36,
title: "Manikyr–Pedikyr & Nail Art (150 ore)",
category: "manikyr-pedikyr-nail-art",
duration: "150 orë",
durationCategory: "150 orë",
level: "Fillestar",
price: "",
startDate: "",
schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
image: "/courses/pedikyr-1.webp",
videoSrc: "/videos/nails-video.webm",
description: "Kurs 150-orësh me manikyr & pedikyr klasik, bazat e Nail Art dhe standarde të avancuara higjiene.",
longDescription: "Anatomia e thoit dhe kujdesi profesional; manikyr me ujë/pa ujë; pedikyr estetik dhe heqja e lëkurës së fortë; masazh relaksues i duarve dhe këmbëve; bazat e Nail Art me dekore të thjeshta; përdorim i sigurt i pajisjeve elektrike dhe protokolle dezinfektimi.",
instructors: [
{
name: "Mira Haxhia",
role: "Teknike & Trainer",
image: "/placeholder.svg?height=200&width=200&text=Instructor",
bio: "5 vite eksperiencë në manikyre dhe dizajn thonjsh."
}
],
curriculum: [
{
title: "Anatomia e Thoit & Kujdesi Profesional",
lessons: [
"Ndërtimi dhe funksioni i pllakës së thoit",
"Sëmundjet/anomali që duhen shmangur",
"Produktet ushqyese dhe mbrojtëse"
]
},
{
title: "Teknikat e Manikyrit & Pedikyrit Klasik",
lessons: [
"Manikyr me ujë dhe pa ujë",
"Pedikyr estetik & heqja e lëkurës së fortë",
"Masazhi relaksues i duarve dhe këmbëve"
]
},
{
title: "Bazat e Nail Art",
lessons: [
"Dekorime bazë: glitter, stampime, strass",
"Kombinimi i ngjyrave & dizajne të thjeshta",
"Rregullat e tharjes dhe mirëmbajtjes"
]
},
{
title: "Etika & Higjiena e Ambientit",
lessons: [
"Përdorimi i pajisjeve elektrike në mënyrë të sigurt",
"Dezinfektimi i mjeteve pas çdo klienti",
"Këshilla për ruajtjen e duarve dhe thonjve"
]
}
],
whatYouLearn: "Kursanti fiton aftësi të plota për manikyr dhe pedikyr profesional me elementë dekorativë bazë, duke përdorur teknika të sigurta, higjienike dhe estetike.",
benefits: ["Certifikim bazik", "Aftësi praktike të menjëhershme"],
materials: ["Kit manikyri & pedikyri", "Set dekorimesh bazë"],
testimonials: [],
faqs: [],
featured: false,
students: 0,
media: [
{ type: "image", src: "/courses/pedikyr-1.webp", alt: "Pedikyr estetik në praktikë" }
]
},
{
id: 35,
title: "Manikyr–Pedikyr & Nail Art (400 ore)",
category: "manikyr-pedikyr-nail-art",
duration: "400 orë",
durationCategory: "400 orë",
level: "Fillestar – Mesatar",
price: "",
startDate: "",
schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
image: "/courses/nails-500.webp",
videoSrc: "/videos/nails-video.webm",
description: "Kurs 400-orësh me manikyr/pedikyr profesional, teknika 3D dhe ndërtim me gel/akrilik.",
longDescription: "Anatomia e avancuar e thoit dhe patologjitë; manikyr estetik, francez dhe SPA; pedikyr kurativ dhe përkujdesje e lëkurës së këmbëve; maska/kripëra/kremra; Nail Art i avancuar (3D, gradient, cat eye); ndërtim me gel, akrilik dhe forma; balancimi i trashësisë & formës; menaxhim klienti, prezantim shërbimesh dhe marketing personal.",
instructors: [
{
name: "Elira Shkodra",
role: "Teknike & Trainer",
image: "/placeholder.svg?height=200&width=200&text=Instructor",
bio: "8 vite në industrinë e thonjve dhe Nail Art."
}
],
curriculum: [
{
title: "Anatomia e Avancuar & Patologjitë",
lessons: [
"Strukturat keratinike & funksionet biologjike",
"Parandalimi i infeksioneve",
"Trajtimi estetik i thonjve të dëmtuar"
]
},
{
title: "Manikyr & Pedikyr Profesional",
lessons: [
"Manikyr estetik, francez dhe SPA",
"Pedikyr kurativ & përkujdesje e këmbëve",
"Maska, kripëra dhe kremra rigjenerues"
]
},
{
title: "Teknika të Avancuara Nail Art",
lessons: [
"Dekorime 3D dhe gradient",
"Efekt “cat eye”",
"Përdorimi i xhelit, akrilikut dhe ndërtimit me forma"
]
},
{
title: "Menaxhimi i Klientit & Estetika e Punës",
lessons: [
"Këshillimi për mirëmbajtje në shtëpi",
"Komunikimi profesional",
"Marketing personal dhe rrjete sociale"
]
}
],
whatYouLearn: "Kursanti zotëron aftësi të avancuara në kujdesin estetik të duarve dhe këmbëve, ndërtimin e thonjve me xhel apo akrilik dhe realizimin e modeleve kreative të Nail Art.",
benefits: ["Certifikim profesional", "Portofol teknikësh të avancuara"],
materials: ["Komplete gel & akrilik", "Forma & dekorime 3D"],
testimonials: [],
faqs: [],
featured: false,
students: 0,
media: [
{ type: "image", src: "/courses/nails-500.webp", alt: "Teknika Nail Art 3D" }
]
},
{
id: 34,
title: "Manikyr–Pedikyr & Nail Art (1500 ore)",
category: "manikyr-pedikyr-nail-art",
duration: "1500 orë",
durationCategory: "1500 orë",
level: "Mesatar – Avancuar",
price: "",
startDate: "",
schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
image: "/courses/nails-2000.webp",
videoSrc: "/videos/nails-video-1.webm",
description: "Programe të plota 1500-orëshe për Nail Artist & Teknik Profesional me standarde ndërkombëtare.",
longDescription: "Etika e avancuar, organizim dhe licencim; anatomia/fiziologjia & patologjitë e thoit; diagnostikim estetik; manikyr estetik/SPA/parafinë/xhel; pedikyr kurativ (kallo, plasaritje); refleksologji e këmbëve; ndërtim thonjsh me gel/akrilik/fibra; dizajn artistik (baby boomer, marble, ombré, french reverse, 3D); menaxhim & drejtim teknik salloni, marketing dhe rezervime.",
instructors: [
{
name: "Ana Qato",
role: "Teknike Thonjesh & Trainer",
image: "/placeholder.svg?height=200&width=200&text=Instructor",
bio: "10 vite eksperiencë në manikyre, pedikyre dhe Nail Art për klientë VIP."
}
],
curriculum: [
{
title: "Etika & Higjiena Profesionale e Avancuar",
lessons: [
"Organizimi i sallonit dhe menaxhimi i ambienteve",
"Standardet sanitare dhe licencimi",
"Rregulloret për shëndetin e klientëve"
]
},
{
title: "Anatomia, Fiziologjia & Patologjitë",
lessons: [
"Strukturat biologjike & rigjenerimi",
"Diagnoza estetike e thonjve të dëmtuar",
"Kujdesi profesional për thonjtë problematikë"
]
},
{
title: "Teknikat e Avancuara të Manikyrit & Pedikyrit",
lessons: [
"Manikyr estetik, SPA, parafinë & me xhel",
"Pedikyr kurativ: kallo, plasaritje, gërvishtje",
"Masazhi refleksologjik i këmbëve"
]
},
{
title: "Ndërtimi i Thonjve & Nail Art Artistik",
lessons: [
"Gel, akrilik dhe fibra",
"Baby boomer, marble, ombré, french reverse",
"Kristale, pikturime me furça dhe art 3D"
]
},
{
title: "Menaxhim & Drejtim Teknik Sallon",
lessons: [
"Menaxhimi i klientëve dhe rezervimeve",
"Promovimi në rrjete sociale",
"Rregulloret ligjore për hapjen e sallonit"
]
}
],
whatYouLearn: "Kursanti përgatitet si Nail Artist dhe Teknik Profesionist i Duarve dhe Këmbëve, i aftë të kryejë shërbime estetike dhe kurative me standarde ndërkombëtare dhe të menaxhojë një sallon Nail Art në mënyrë të pavarur.",
benefits: ["Certifikim ndërkombëtar", "Portofol profesional & praktikë e zgjeruar"],
materials: ["Komplete profesionale gel/akrilik/fibra", "Freza & llampa UV/LED"],
testimonials: [],
faqs: [],
featured: false,
students: 0,
media: [
{ type: "image", src: "/courses/nails-2000.webp", alt: "Nail Art i avancuar dhe ndërtim profesional" }
]
},
// Massage Courses
{
id: 37,
title: "Kursi Masazhet (2500 ore)",
category: "masazhet",
duration: "2500 orë",
durationCategory: "2500 orë",
level: "Mesatar – Avancuar",
price: "",
startDate: "",
schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
image: "/courses/kurs-masazh.webp",
videoSrc: "/videos/masazh-video.webm",
description: "Kurs i plotë 2500-orësh që mbulon masazh klasik, relaksues, terapeutik, oriental dhe estetike, me praktikë profesionale të zgjeruar.",
longDescription: "Program gjithëpërfshirës me etikë & psikologji të masazhit, anatomi & fiziologji të avancuar, teknika klasike/sportive/terapeutike, aromaterapi dhe masazhe orientale, masazhe trupore & estetike, refleksologji dhe menaxhim profesional.",
instructors: [
{
name: "Besnik Toma",
role: "Mësues Masazhesh",
image: "/placeholder.svg?height=200&width=200&text=Instructor",
bio: "15 vite përvojë në teknikat klasike, terapeutike dhe orientale të masazhit."
}
],
curriculum: [
{
title: "Etika & Psikologjia e Masazhit",
lessons: [
"Ndërtimi i marrëdhënies së besimit me klientin",
"Ruajtja e ekuilibrit emocional dhe profesional",
"Etika dhe përgjegjësia e terapistit të masazhit"
]
},
{
title: "Anatomia & Fiziologjia e Avancuar",
lessons: [
"Strukturat muskulare, skeletore dhe nervore",
"Sistemi limfatik, qarkullues dhe endokrin",
"Lidhja midis stresit, sistemit nervor dhe tensionit trupor"
]
},
{
title: "Teknika të Masazhit Klasik & Avancuar",
lessons: [
"Teknikat klasike, sportive dhe terapeutike",
"Kombinimi i masazhit relaksues me masazhin mjekësor",
"Përdorimi i mjeteve ndihmëse: gurë të ngrohtë, kupa vakum, bambu"
]
},
{
title: "Aromaterapi & Masazhe Orientale",
lessons: [
"Parimet e energjisë “Chi” dhe qendrave chakrale",
"Masazhi Thai, Shiatsu dhe Lomi-Lomi",
"Balancimi energjik dhe relaksimi i thellë"
]
},
{
title: "Masazhet Trupore & Estetike",
lessons: [
"Masazh anticelulit, tonifikues dhe drenazh limfatik",
"Kombinimi me pajisje si termokoperta dhe presoterapi",
"Përdorimi i vajrave bio dhe produkteve natyrale"
]
},
{
title: "Refleksologjia & Terapitë Holistike",
lessons: [
"Hartat refleksive të këmbëve dhe duarve",
"Ndikimi i presionit në organet e trupit",
"Teknikat për balancimin e energjisë trupore"
]
},
{
title: "Menaxhimi & Praktika Profesionale",
lessons: [
"Organizimi i një kabine masazhi dhe oraret e punës",
"Rregulloret sanitare dhe licencimi profesional",
"Marketingu personal dhe zhvillimi i karrierës"
]
}
],
whatYouLearn: "Kursanti formohet si terapist profesionist masazhi, i aftë të ofrojë masazhe relaksuese, terapeutike, orientale dhe estetike në qendra wellness, spa apo klinika, si dhe të zhvillojë praktikën e tij profesionale në mënyrë të pavarur.",
benefits: [
"Diplomë ndërkombëtare",
"Trajnim shumëdimensional",
"Aftësi për SPA dhe klinika"
],
materials: [
"Set masazhi profesional",
"Aromaterapi & aksesore SPA"
],
testimonials: [],
faqs: [],
featured: false,
students: 0,
media: [
{ type: "image", src: "/courses/masazh-klasik.webp", alt: "Pamje nga kursi Masazh Klasik" },
{ type: "image", src: "/courses/masazh-anticelulit.webp", alt: "Pamje nga trajnimet anticelulit" },
{ type: "image", src: "/courses/kurs-masazh.webp", alt: "Pamje nga kursi masazhi" }
]
},
{
id: 38,
title: "Masazh Klasik, Relaksues, Aromaterapi & Oriental (150 ore)",
category: "masazhet",
duration: "150 orë",
durationCategory: "150 orë",
level: "Fillestar – Mesatar",
price: "",
startDate: "",
schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
image: "/courses/masazh-klasik.webp",
videoSrc: "/videos/masazh-video.webm",
description: "Kurs 150-orësh për masazh klasik, relaksues, aromaterapi dhe teknika orientale.",
longDescription: "Etika & higjiena profesionale; anatomia & fiziologjia e trupit; teknikat bazë të masazhit klasik dhe relaksues; aromaterapia dhe parimet orientale.",
instructors: [
{
name: "Elion Kurti",
role: "Masazhist & Trainer",
image: "/placeholder.svg?height=200&width=200&text=Instructor",
bio: "Ekspert në masazhe relaksuese dhe orientale me 12 vjet përvojë."
}
],
curriculum: [
{
title: "Etika & Higjiena Profesionale",
lessons: [
"Rregullat e pastërtisë dhe prezantimit personal",
"Përgatitja e mjedisit dhe komunikimi me klientin",
"Ruajtja e qetësisë dhe relaksit gjatë seancës"
]
},
{
title: "Anatomia & Fiziologjia e Trupit",
lessons: [
"Muskujt, kockat dhe sistemi qarkullues",
"Zonat kryesore të trupit për masazh",
"Efektet fiziologjike të prekjes terapeutike"
]
},
{
title: "Masazhi Klasik & Relaksues",
lessons: [
"Teknikat bazë: effleurage, petrissage, tapotement",
"Rendi i lëvizjeve dhe drejtimi i masazhit",
"Masazh për qafën, shpinën, këmbët dhe krahët"
]
},
{
title: "Aromaterapia & Masazhi Oriental",
lessons: [
"Përdorimi i vajrave esencialë sipas nevojës së klientit",
"Masazh me vajra ngrohës dhe presion të butë",
"Parimet e energjisë trupore dhe qendrave të qarkullimit"
]
}
],
whatYouLearn: "Kursanti aftësohet të realizojë seanca relaksuese dhe rigjeneruese për trupin dhe mendjen, duke përdorur vajra aromatikë dhe teknika tradicionale lindore për mirëqenie të përgjithshme fizike dhe emocionale.",
benefits: [
"Certifikim bazik",
"Aftësi praktike në relaksim dhe aromaterapi"
],
materials: [
"Set aromaterapie",
"Vajra esencialë"
],
testimonials: [],
faqs: [],
featured: false,
students: 0,
media: [
{ type: "image", src: "/courses/masazh-klasik.webp", alt: "Pamje nga kursi Masazh Klasik" },
{ type: "image", src: "/courses/masazh-anticelulit.webp", alt: "Pamje nga trajnimet anticelulit" },
{ type: "image", src: "/courses/kurs-masazh.webp", alt: "Pamje nga kursi masazhi" }
]
},
{
id: 39,
title: "Masazh Terapeutik, Kurativ, Anticelulit & Refleksologji Plantare (150 ore)",
category: "masazhet",
duration: "150 orë",
durationCategory: "150 orë",
level: "Mesatar",
price: "",
startDate: "",
schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
image: "/courses/masazh-anticelulit.webp",
videoSrc: "/videos/masazh-video.webm",
description: "Kurs 150-orësh për masazh terapeutik, kurativ, anticelulit dhe refleksologji plantare.",
longDescription: "Higjiena & etika terapeutike; anatomia e sistemit muskulor & limfatik; masazh terapeutik & kurativ; masazh anticelulit dhe refleksologji plantare.",
instructors: [
{
name: "Irma Meta",
role: "Terapeute Masazhesh",
image: "/placeholder.svg?height=200&width=200&text=Instructor",
bio: "Specialiste në masazhe terapeutike dhe estetike me 8 vjet praktikë klinike."
}
],
curriculum: [
{
title: "Higjiena & Etika Terapeutike",
lessons: [
"Dezinfektimi i mjedisit dhe pajisjeve të punës",
"Etika profesionale në trajtimet me prekje fizike",
"Komunikimi me klientët dhe menaxhimi i komfortit"
]
},
{
title: "Anatomia e Sistemit Muskulor & Limfatik",
lessons: [
"Muskujt kryesorë që përfshihen në masazh terapeutik",
"Qarkullimi i gjakut dhe limfës",
"Pikat reflektive dhe energjitike të trupit"
]
},
{
title: "Masazhi Terapeutik & Kurativ",
lessons: [
"Teknikat e thella për çlirimin e tensioneve muskulore",
"Masazh për qafën, shpinën, krahët dhe zonat me dhimbje",
"Zgjatja pas masazhit dhe kujdesi i duhur pas seancës"
]
},
{
title: "Masazhi Anticelulit & Refleksologjia Plantare",
lessons: [
"Teknikat për reduktimin e celulitit dhe stimulimin e qarkullimit",
"Përdorimi i kremrave dhe vajrave termikë",
"Refleksologjia e këmbëve dhe pikat që lidhen me organet e trupit"
]
}
],
whatYouLearn: "Kursanti zotëron aftësi profesionale për të kryer masazhe terapeutike dhe kurative, për të përmirësuar qarkullimin e gjakut, për të trajtuar dhimbjet muskulore dhe për të reduktuar celulitin në mënyrë natyrale.",
benefits: [
"Trajnim specializues",
"Aftësi praktike terapeutike"
],
materials: [
"Set terapeutik masazhi",
"Aksesore SPA"
],
testimonials: [],
faqs: [],
featured: false,
students: 0,
media: [
{ type: "image", src: "/courses/masazh-klasik.webp", alt: "Pamje nga kursi Masazh Klasik" },
{ type: "image", src: "/courses/masazh-anticelulit.webp", alt: "Pamje nga trajnimet anticelulit" },
{ type: "image", src: "/courses/kurs-masazh.webp", alt: "Pamje nga kursi masazhi" }
]
},
// Facial & Permanent Makeup Courses

{
id: 40,
title: "Kursi Trajtimet e Fytyrës (600 ore)",
category: "trajtimet-e-fytyres",
duration: "600 orë",
durationCategory: "600 orë",
level: "Mesatar – Avancuar",
price: "",
startDate: "",
schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
image: "/courses/estetike-600.webp",
videoSrc: "/videos/estetike-video.webm",
description:
"Kurs 600-orësh për trajtimet profesioniste të fytyrës nga diagnostikimi te teknikat e avancuara.",
longDescription:
"Etikë & higjienë, anatomia e lëkurës, diagnostikim/ konsultim, produkte & përbërës aktivë, procedura bazë & të avancuara, pajisje moderne, kujdes për lëkurë problematike, anti-aging & lifting, zona të veçanta, programe sezonale, praktikë intensive.",
instructors: [
{
name: "Dr. Elira Berisha",
role: "Specialiste Estetike & Trainer",
image: "/placeholder.svg?height=200&width=200&text=Instructor",
bio: "12 vite përvojë në trajtimet estetike dhe teknikat moderne të fytyrës."
}
],
curriculum: [
{
title: "Higjiena & Etika Profesionale",
lessons: [
"Sterilizimi i veglave dhe higjiena e ambientit",
"Përgatitja e klientit dhe konsultimi paraprak",
"Rregullat e sigurisë gjatë trajtimit"
]
},
{
title: "Anatomia e Lëkurës & Tipologjitë",
lessons: [
"Shtresat e epidermës dhe funksionet biologjike",
"Tipet e lëkurës dhe identifikimi i anomalisë",
"Faktorët që ndikojnë në shëndetin e lëkurës"
]
},
{
title: "Trajtimet Bazë & Avancuara të Fytyrës",
lessons: [
"Pastrimi i thellë, peeling profesional dhe maskat rigjeneruese",
"Aplikimi i serumit dhe ampulave sipas tipit të lëkurës",
"Përdorimi i pajisjeve (vapozon, galvani, RF, LED)"
]
},
{
title: "Masazhi i Fytyrës & Kujdesi Pas Trajtimit",
lessons: [
"Teknikat e masazhit relaksues dhe stimulues",
"Qarkullimi i gjakut dhe drenazhi limfatik",
"Rekomandimet profesionale pas trajtimit"
]
}
],
whatYouLearn:
"Kursanti zotëron njohuri të plota për pastrimin e fytyrës, përdorimin e pajisjeve estetike dhe aplikimin e produkteve profesionale për çdo tip lëkure, duke qenë i aftë të punojë në qendra bukurie, spa apo dermatologjike.",
benefits: [
"Certifikim profesional",
"Akses në teknologji të avancuara",
"Portofol me trajtime reale"
],
materials: [
"Set produkte bazë & maska profesionale",
"Pajisje estetike (roller, vapozon)"
],
testimonials: [],
faqs: [],
featured: false,
students: 0,
media: [
{ type: "image", src: "/courses/estetike-300.webp", alt: "Estetikë 300 orë" },
{ type: "image", src: "/courses/estetike-600.webp", alt: "Estetikë 600 orë" },
{ type: "image", src: "/courses/estetike-900.webp", alt: "Estetikë 900 orë" },
{ type: "image", src: "/courses/estetike-1500.webp", alt: "Estetikë 1500 orë" },
{ type: "image", src: "/courses/estetike-2100.webp", alt: "Estetikë 2100 orë" }
]
},
{
id: 41,
title: "Kursi Make-Up Permanent (1200 ore)",
category: "makeup-permanent-pmu",
duration: "1200 orë",
durationCategory: "1200 orë",
level: "Mesatar – Avancuar",
price: "",
startDate: "",
schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
image: "/courses/makeup-permanent.webp",
videoSrc: "/videos/permanent-video.webm",
description: "Kurs 1200-orësh në make-up permanent me fokus në higjienë, kolorimetri dhe teknika të avancuara për vetulla, buzë, sy, scalp dhe aureola paramedikale.",
longDescription: "Higjiena, sterilizimi dhe etika profesionale sipas standardeve ndërkombëtare; organizimi i ambientit estetik/mjekësor dhe komunikimi profesional. Anatomia e lëkurës, pikat anatomo-fiziologjike të fytyrës dhe kolorimetria e pigmentimit (undertone, miksime për qëndrueshmëri). Teknikat e avancuara për vetulla (microblading, powder, ombré), buzë (velvet, 3D, full lips), sy (lash enhancement, eyeliner klasik, winged) dhe mikropigmentim paramedikal (scalp & aureola). Protokollet e kujdesit pas procedurës, retouch dhe rifreskim 6–12 muaj. Menaxhim profesional & ligjshmëri: rregullore, dokumentacion dhe marketing/branding me portofol profesional.",
instructors: [
{
name: "Valbona Rexhepi",
role: "Artist PMU & Trainer",
image: "/placeholder.svg?height=200&width=200&text=Instructor",
bio: "13 vite eksperiencë në permanent makeup dhe mikropigmentim estetik."
}
],
curriculum: [
{
title: "Higjiena, Sterilizimi & Etika Profesionale",
lessons: [
"Standardet ndërkombëtare për punë sterile",
"Organizimi i ambientit estetik dhe mjekësor",
"Komunikimi profesional dhe ndërtimi i besimit me klientin"
]
},
{
title: "Anatomia e Lëkurës & Ngjyrat Profesionale",
lessons: [
"Pikat anatomo-fiziologjike të fytyrës",
"Kolorimetria e pigmentimit dhe undertone-t",
"Kombinimi i pigmenteve për qëndrueshmëri afatgjatë"
]
},
{
title: "Teknika të Avancuara Pigmentimi",
lessons: [
"Vetulla (microblading, powder, ombré)",
"Buzë (velvet, 3D, full lips)",
"Sy (lash enhancement, eyeliner klasik, winged)",
"Scalp & aureola paramedikale"
]
},
{
title: "Kujdesi Pas Procedurës & Retouch Profesional",
lessons: [
"Produktet qetësuese dhe trajtimi post-pigmentim",
"Udhëzimet për rikuperim dhe përditësim ngjyrash",
"Rregullat për rifreskimin pas 6–12 muajsh"
]
},
{
title: "Menaxhim Profesional & Ligjshmëri",
lessons: [
"Rregulloret ligjore për praktikimin e make-up permanent",
"Dokumentacioni i klientit dhe miratimi i ndërgjegjshëm",
"Marketingu, brendingu dhe krijimi i portofolit profesional"
]
}
],
benefits: [
"Certifikim i avancuar PMU",
"Portofol profesional me procedura të plota",
"Aftësi për aplikime kozmetike dhe paramedikale"
],
materials: [
"Makineri PMU me kartridgë sterile",
"Set pigmentesh profesionale",
"Materiale mbrojtëse dhe dezinfektuese"
],
testimonials: [],
faqs: [],
featured: false,
students: 0,
media: [
{
type: "image",
src: "/courses/makeup-permanent.webp",
alt: "Pamje nga kursi Make-Up Permanent"
}
]
},
{
id: 42,
title: "Makeup Permanent i Vetullave (150 ore)",
category: "makeup-permanent-pmu",
duration: "150 orë",
durationCategory: "150 orë",
level: "Fillestar – Mesatar",
price: "",
startDate: "",
schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
image: "/courses/pmu-vetullat.webp",
videoSrc: "/videos/permanent-video.webm",
description: "Kurs 150-orësh në teknikën e microblading, powder/ombre dhe kombinime profesionale për vetulla.",
longDescription: "Higjienë & siguri (sterilizim pajisjesh, materiale sterile, protokollet për pigmentet/gjilpërat); anatomia e lëkurës & reagimi ndaj pigmentit; thellësia korrekte e mikropigmentimit; teknikat Microblading, Powder/Ombre dhe kombinime; kujdesi pas procedurës, shërimi, mbrojtja nga dielli dhe retouch.",
instructors: [
{
name: "Eriona Kola",
role: "Specialiste PMU Vetulla",
image: "/placeholder.svg?height=200&width=200&text=Instructor",
bio: "8 vite si artist PMU vetullash dhe trajner."
}
],
curriculum: [
{
title: "Higjiena & Siguria në Procedurë",
lessons: [
"Sterilizimi i pajisjeve dhe mbrojtja e klientit",
"Përdorimi i dorezave dhe materialeve sterile",
"Rregullat e sigurisë për pigmentet dhe gjilpërat"
]
},
{
title: "Anatomia e Lëkurës & Pigmentimi",
lessons: [
"Strukturat e epidermës dhe dermës",
"Si reagon lëkura ndaj pigmentit",
"Zgjedhja e thellësisë së saktë të mikropigmentimit"
]
},
{
title: "Teknikat e Vetullave",
lessons: [
"Microblading (me brisk)",
"Powder brows & Ombre brows",
"Kombinimi i teknikave për rezultate natyrale"
]
},
{
title: "Kujdesi Pas Procedurës",
lessons: [
"Dezinfektimi, hidratimi dhe produktet qetësuese",
"Faza e shërimit dhe mbrojtja nga dielli",
"Rregullat për retouch dhe ruajtje ngjyre"
]
}
],
benefits: ["Diplomë specializimi", "Portofol i optimizuar vetullash"],
materials: ["Set microblading", "Pigmentë profesionalë"],
testimonials: [],
faqs: [],
featured: false,
students: 0,
media: [
{
type: "image",
src: "/courses/pmu-vetullat.webp",
alt: "Pamje nga trajnimet për vetulla PMU"
}
]
},
{
id: 44,
title: "Makeup Permanent i Buzëve (150 ore)",
category: "makeup-permanent-pmu",
duration: "150 orë",
durationCategory: "150 orë",
level: "Fillestar – Mesatar",
price: "",
startDate: "",
schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
image: "/courses/pmu-buza.webp",
videoSrc: "/videos/permanent-video.webm",
description: "Kurs 150-orësh për lip liner, shading, full/velvet lips, ngjyra & pigmente dhe kujdes post-procedurë.",
longDescription: "Higjiena & mbrojtja profesionale (sterilizim i pajisjeve, konsultim dhe test alergjie, protokollet e sigurisë); teknikat e pigmentimit të buzëve (kontur, shading, full/velvet lips, simetri); zgjedhja dhe miksimi i pigmenteve sipas undertone-ve dhe parandalimi i ndryshimeve pas shërimit; kujdesi post, shmangiet dhe retouch pas 4 javësh.",
instructors: [
{
name: "Ardita Leka",
role: "Artist PMU Buzësh",
image: "/placeholder.svg?height=200&width=200&text=Instructor",
bio: "6 vite specializim në permanent lip blush dhe konturim buzësh."
}
],
curriculum: [
{
title: "Higjiena & Mbrojtja Profesionale",
lessons: [
"Sterilizimi i pajisjeve për pigmentim buzësh",
"Përgatitja e klientit dhe testet e alergjisë",
"Rregullat e sigurisë gjatë punës"
]
},
{
title: "Teknikat e Pigmentimit të Buzëve",
lessons: [
"Kontur i buzëve (Lip Liner)",
"Shading, full lips & velvet lips",
"Balancimi i ngjyrës dhe simetrisë së buzëve"
]
},
{
title: "Ngjyrat & Pigmentet Profesionale",
lessons: [
"Zgjedhja e toneve sipas undertone-ve natyrale",
"Miksimi i pigmenteve për efekte rozë, nude apo të forta",
"Parandalimi i ndryshimit të ngjyrës pas shërimit"
]
},
{
title: "Kujdesi Pas Procedurës",
lessons: [
"Produktet hidratuese dhe qetësuese",
"Shmangia e ushqimeve dhe make-up-it për disa ditë",
"Udhëzimet për rikuperim dhe retouch pas 4 javësh"
]
}
],
benefits: ["Certifikim buzësh", "Aftësi konturimi profesional"],
materials: ["Pigmentë lip blush", "Makineri PMU"],
testimonials: [],
faqs: [],
featured: false,
students: 0,
media: [
{
type: "image",
src: "/courses/pmu-buza.webp",
alt: "Pamje nga trajnimet për buzë PMU"
}
]
},
{
id: 43,
title: "Makeup Permanent i Syve (150 ore)",
category: "makeup-permanent-pmu",
duration: "150 orë",
durationCategory: "150 orë",
level: "Fillestar – Mesatar",
price: "",
startDate: "",
schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
image: "/courses/pmu-eyeliner.webp",
videoSrc: "/videos/permanent-video.webm",
noCustomCrop: true,
description: "Kurs 150-orësh për lash enhancement, classic & winged eyeliner dhe soft shading me protokolle sigurie.",
longDescription: "Higjiena & mbrojtja e zonës së syrit (sterilizim, përdorimi i anestezisë lokale dhe syzeve mbrojtëse); teknikë lash enhancement, classic/winged eyeliner dhe shading natyral; zgjedhja e formës sipas syrit, ngjyrat, simetria/thellësia e vijës; kujdes pas procedurës, higjiena dhe retouch.",
instructors: [
{
name: "Jonida Krasniqi",
role: "Artist PMU Sy",
image: "/placeholder.svg?height=200&width=200&text=Instructor",
bio: "7 vite përvojë në permanent eyeliner dhe trajnim."
}
],
curriculum: [
{
title: "Higjiena & Mbrojtja e Zonës së Syrit",
lessons: [
"Sterilizimi i pajisjeve dhe përdorimi i anestezisë lokale",
"Përdorimi i syzeve mbrojtëse për klientin",
"Siguria e syrit gjatë procedurës"
]
},
{
title: "Teknikat e Pigmentimit të Syve",
lessons: [
"Lash Enhancement (vizatim në vijën e qerpikëve)",
"Classic Eyeliner & Winged Eyeliner",
"Teknikat soft shading për efekt natyral"
]
},
{
title: "Ngjyrat & Forma e Saktë",
lessons: [
"Zgjedhja e formës sipas tipit të syrit",
"Kombinimi i ngjyrave për efekte të ndryshme vizuale",
"Ruajtja e simetrisë dhe thellësisë së vijës"
]
},
{
title: "Kujdesi Pas Procedurës",
lessons: [
"Pastrimi dhe produktet antibakteriale",
"Kujdesi gjatë periudhës së shërimit",
"Rregullat për aplikimin e retouch-it"
]
}
],
benefits: ["Certifikim eyeliner", "Aftësi dizajni vështrimi"],
materials: ["Makineri & pigmentë PMU"],
testimonials: [],
faqs: [],
featured: false,
students: 0,
media: [
{
type: "image",
src: "/courses/pmu-eyeliner.webp",
alt: "Pamje nga trajnimet për eyeliner PMU"
}
]
},
{
id: 83,
title: "Kursi Makeup Permanent i Aureolave & Zonave të Rëna të Flokëve (150 ore)",
category: "makeup-permanent-pmu",
duration: "150 orë",
durationCategory: "150 orë",
level: "Avancuar",
price: "",
startDate: "",
schedule: "",
image: "/courses/makeup-permanent-aureola.webp",
videoSrc: "",
description: "Specializim 150-orësh në micropigmentim paramedikal: aureola 3D, kamuflim plagësh dhe scalp micropigmentation.",
longDescription: "Higjiena & siguria mjekësore (sterilizim i pajisjeve dhe ambientit, protokollet për lëkurë të ndjeshme, komunikim me pacientë pas ndërhyrjes); teknikat paramedikale (rekonstruksion aureole, kamuflim plagësh, pigmentim i zonave me rënie flokësh); ngjyrat & mikropigmentet mjekësore (zgjedhja e toneve, efekt 3D, shërimi); etika & këshillimi profesional dhe udhëzimet pas terapisë.",
instructors: [],
curriculum: [
{
title: "Higjiena & Siguria Mjekësore",
lessons: [
"Sterilizimi i pajisjeve dhe ambientit mjekësor",
"Protokollet e sigurisë për lëkurën e ndjeshme",
"Komunikimi me pacientë pas ndërhyrjeve kirurgjikale"
]
},
{
title: "Teknikat e Pigmentimit Paramedikal",
lessons: [
"Rekonstruksioni i aureolës pas mastektomisë",
"Kamuflimi i shenjave dhe plagëve të lehta",
"Pigmentimi në zonat e rënies së flokëve (scalp micropigmentation)"
]
},
{
title: "Ngjyrat & Mikropigmentet Mjekësore",
lessons: [
"Zgjedhja e toneve sipas lëkurës dhe melaninit",
"Kombinimi i ngjyrave për efekt natyral tredimensional",
"Menaxhimi i procesit të shërimit"
]
},
{
title: "Etika & Këshillimi i Klientit",
lessons: [
"Komunikimi me pacientë pas trajtimeve mjekësore",
"Konsultimi emocional dhe profesional",
"Udhëzimet pas terapisë dhe kujdesi post-trajtim"
]
}
],
benefits: [],
materials: [],
testimonials: [],
faqs: [],
featured: false,
students: 0,
media: []
},
{
id: 45,
title: "Kursi Sarta Alta Moda (2100 ore)",
category: "fashion-design",
duration: "2100 orë",
durationCategory: "2100 orë",
level: "Avancuar",
price: "",
startDate: "",
schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
image: "/courses/fashon-design-2.webp",
noCustomCrop: true,
videoSrc: "/videos/fashion-video.webm",
description:
"Program 2100-orësh haute couture për mjeshtëri të plotë sartoriale: nga matjet e personalizuara, moulage & qepja fine, te koleksionet dhe menaxhimi i atelierit.",
longDescription:
"Kurs profesional i modës së lartë që formon një sarta/couturier të plotë. Mbulon etikën dhe kulturën e haute couture, historinë e shtëpive të famshme, protokollet me klientë VIP; modelimin dhe qepjen e avancuar (matje të personalizuara, bazë, moulage/drape, qepje me dorë dhe makinë, finitura luksoze); zhvillimin e koleksioneve me materiale premium (mëndafsh, dantellë, brokadë) dhe punime artizanale (qëndisje, aplikime, rruaza, perlë); organizimin e një atelier-i couture, bashkëpunimin me dizajnerë/modelistë/qepës; si dhe projektin final: realizim i një koleksioni haute couture me prezantim publik dhe vlerësim nga komision profesional.",
instructors: [
{
name: "Elena Petrova",
role: "Master Sarta & Trainer",
image: "/placeholder.svg?height=200&width=200&text=Instructor",
bio: "15 vite përvojë në haute couture dhe qepje artizanale në shtëpi mode europiane."
}
],
curriculum: [
{
title: "Moduli 1: Etika & Kultura e Haute Couture",
lessons: [
"Historia e sartorisë & shtëpitë ikonike",
"Etika, komunikimi & protokolli VIP"
]
},
{
title: "Moduli 2: Modelim & Qepje Avancuara",
lessons: [
"Matje të personalizuara & bazë konstruktive",
"Moulage/Drape në manekin & fitting",
"Qepje haute couture: dorë, makinë & finitura"
]
},
{
title: "Moduli 3: Materiale & Punime Artizanale",
lessons: [
"Mëndafsh, dantellë, brokadë: sjellje & trajtim",
"Qëndisje, aplikime, rruaza & perlë"
]
},
{
title: "Moduli 4: Krijimi i Koleksioneve Haute Couture",
lessons: [
"Kërkim, skicim & zhvillim modeli",
"Plan koleksioni, prototip & prova"
]
},
{
title: "Moduli 5: Atelier & Prezantim Profesional",
lessons: [
"Menaxhim atelier-i & rollet e ekipit",
"Organizim ekspozitash & eventesh"
]
},
{
title: "Moduli 6: Projekt Final & Portofol",
lessons: [
"Realizim koleksioni të plotë me dorë",
"Dokumentim fotografik & vlerësim nga komisioni"
]
}
],
benefits: [
"Aftësi artizanale haute couture",
"Portofol profesional i koleksionit",
"Përgatitje për drejtim atelier-i"
],
materials: [
"Set bazë moulage (manekin, muslinë)",
"Vegla qepjeje couture & materiale luksoze studimore"
],
testimonials: [],
faqs: [],
featured: false,
students: 0,
media: [
{ type: "image", src: "/courses/fashon-design.webp", alt: "Proces moulage & drape në manekin" },
{ type: "image", src: "/courses/fashon-design-2.webp", alt: "Detaje qepjeje haute couture" },
{ type: "image", src: "/courses/fashon-design-3.webp", alt: "Prezantim koleksioni couture" }
]
},
{
id: 46,
title: "Fashion Design (1200 ore)",
category: "fashion-design",
duration: "1200 orë",
durationCategory: "1200 orë",
level: "Mesatar – Avancuar",
price: "",
startDate: "",
schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
image: "/courses/fashon-design.webp", noCustomCrop: true,
videoSrc: "/videos/fashion-video.webm",
description:
"Kurs 1200-orësh në fashion design: nga historia e modës te projektimi digjital dhe marketingu i markës.",
longDescription:
"Mbulon historinë e modës, ilustrimin dhe sketching, studimin e materialeve, pattern making dhe draping, teknikat e qepjes dhe montimit, projektimin digjital në Illustrator/Inkscape, analiza trendesh, branding & marketing, menaxhimin e prodhimit dhe finalizon me mini-koleksion e vlerësim profesional.",
instructors: [
{
name: "Lindita Hoxha",
role: "Fashion Designer & Trainer",
image: "/placeholder.svg?height=200&width=200&text=Instructor",
bio: "12 vite eksperiencë në industrinë e modës dhe projektim koleksionesh."
}
],
curriculum: [
{ title: "Moduli 1: Historia & Evolucioni", lessons: ["Moda antike–e sotme", "Ndikimet kulturore"] },
{ title: "Moduli 2: Ilustrim & Sketching", lessons: ["Figura & proporcione", "Tekstura & ngjyra"] },
{ title: "Moduli 3: Materialet & Tekstilet", lessons: ["Fibra natyrale/sintetike", "Zgjedhja e pëlhurave"] },
{ title: "Moduli 4: Pattern Making", lessons: ["Shabllon bazë", "Modifikime unike"] },
{ title: "Moduli 5: Draping", lessons: ["Teknika bazë", "Silueta A-line & godet"] },
{ title: "Moduli 6: Qepje & Montim", lessons: ["Underlining & overlock", "Dekorime"] },
{ title: "Moduli 7: Projektim Digjital", lessons: ["Adobe Illustrator/Inkscape", "Moodboard & render"] },
{ title: "Moduli 8: Trend Forecasting", lessons: ["Street style & catwalk", "Sinteza e trendit"] },
{ title: "Moduli 9: Branding & Marketing", lessons: ["Logo & identitet", "Strategji social media"] },
{ title: "Moduli 10: Prodhim & Logjistikë", lessons: ["Kalkulim kostoje", "Zgjedhja furnitorë"] },
{ title: "Moduli 11: Praktika & Vlerësim", lessons: ["Mini-koleksion", "Kritikë profesionale"] }
],
benefits: ["Portofol koleksioni", "Diplomë bazike"],
materials: ["Set sketching", "Software licencë"],
testimonials: [],
faqs: [],
featured: false,
students: 0,
media: [
{ type: "image", src: "/courses/fashon-design.webp", alt: "Pamje nga kursi Fashion Design" },
{ type: "image", src: "/courses/fashon-design-2.webp", alt: "Pamje shtesë nga kursi Fashion Design" },
{ type: "image", src: "/courses/fashon-design-3.webp", alt: "Më shumë pamje nga Fashion Design" },

]


},
{
id: 47,
title: "Fashion Design (900 ore)",
category: "fashion-design",
duration: "900 orë",
durationCategory: "900 orë",
level: "Mesatar",
price: "",
startDate: "",
schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
image: "/courses/fashon-design-2.webp", noCustomCrop: true,
videoSrc: "/videos/fashion-video.webm",
description:
"Kurs 900-orësh në fashion design me fokus në sketching, pattern making dhe qepje manuale.",
longDescription:
"Përfshin historinë e modës, teknikat e ilustrimit, studimin e materialeve, bazat e pattern making dhe draping, qepjen dhe montimin, projektim digjital të koleksioneve dhe përgatitje për mini-koleksion praktik.",
instructors: [
{
name: "Arbenita Leka",
role: "Fashion Instructor",
image: "/placeholder.svg?height=200&width=200&text=Instructor",
bio: "8 vite pune në projektim veshjesh dhe metoda draping."
}
],
curriculum: [
{ title: "Moduli 1: Historia & Sketching", lessons: ["Evolucioni i modës", "Figura & laps"] },
{ title: "Moduli 2: Tekstile & Materiale", lessons: ["Karakteristikat e fibrave", "Zgjedhja pëlhurash"] },
{ title: "Moduli 3: Pattern Making", lessons: ["Bazat e shabllonit", "Modifikime"] },
{ title: "Moduli 4: Draping", lessons: ["A-line & bias cut", "Godet & volume"] },
{ title: "Moduli 5: Qepje & Finalizim", lessons: ["Underlining", "Overlock & dekor"] },
{ title: "Moduli 6: Projektim Digjital", lessons: ["Inkscape/Illustrator", "Moodboard"] },
{ title: "Moduli 7: Praktika & Portfolio", lessons: ["Mini-koleksion", "Vlerësim final"] }
],
benefits: ["Certifikim mesatar", "Aftësi të thelluara"],
materials: ["Kit bazik pattern", "Vegla qepjeje"],
testimonials: [],
faqs: [],
featured: false,
students: 0,
media: [
{ type: "image", src: "/courses/fashon-design.webp", alt: "Pamje nga kursi Fashion Design" },
{ type: "image", src: "/courses/fashon-design-2.webp", alt: "Pamje shtesë nga kursi Fashion Design" },
{ type: "image", src: "/courses/fashon-design-3.webp", alt: "Më shumë pamje nga Fashion Design" },

]


},
{
id: 48,
title: "Fashion Design (600 ore)",
category: "fashion-design",
duration: "600 orë",
durationCategory: "600 orë",
level: "Fillestar – Mesatar",
price: "",
startDate: "",
schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
image: "/courses/fashon-design-3.webp",
videoSrc: "/videos/fashion-video.webm",
description:
"Kurs 600-orësh hyrës në fashion design, nga sketching te projektimi digjital.",
longDescription:
"Mbulon historinë e modës, bazat e sketching dhe pattern making, draping, qepjen manuale, projektimin digjital dhe një modul praktik me vlerësim final.",
instructors: [
{
name: "Elisa Meta",
role: "Fashion Coach",
image: "/placeholder.svg?height=200&width=200&text=Instructor",
bio: "5 vite eksperiencë në fashoin design dhe edukim kreativ."
}
],
curriculum: [
{ title: "Moduli 1: Hyrje & Sketching", lessons: ["Historia e modës", "Figura & proporcione"] },
{ title: "Moduli 2: Pattern & Draping", lessons: ["Shabllon bazë", "Teknika draping"] },
{ title: "Moduli 3: Qepje & Montim", lessons: ["Underlining", "Finalizime"] },
{ title: "Moduli 4: Projektim Digjital", lessons: ["Illustrator/Inkscape"] },
{ title: "Moduli 5: Praktika & Vlerësim", lessons: ["Mini-koleksion", "Portofol"] }
],
benefits: ["Diplomë hyrëse", "Certifikim bazik"],
materials: ["Set sketching", "Vegla qepjeje"],
testimonials: [],
faqs: [],
featured: false,
students: 0,
media: [
{ type: "image", src: "/courses/fashon-design.webp", alt: "Pamje nga kursi Fashion Design" },
{ type: "image", src: "/courses/fashon-design-2.webp", alt: "Pamje shtesë nga kursi Fashion Design" },
{ type: "image", src: "/courses/fashon-design-3.webp", alt: "Më shumë pamje nga Fashion Design" },
]
},
{
id: 49,
title: "Modelist Industriale (600 ore)",
category: "fashion-design",
duration: "600 orë",
durationCategory: "600 orë",
level: "Mesatar",
price: "",
startDate: "",
schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
image: "/courses/fashion-industriale.webp",
videoSrc: "/videos/fashion-industrial-video.webm",
description: "Kurs 600-orësh në teknologjinë e prerjes dhe gradimin industrial të modeleve.",
longDescription: "Përqendrohet te teknikat e lay-planning për prerje efikase, gradimi dixhital i shablloneve në CAD, konstruimi i veshjeve standarde dhe kontrolli i cilësisë industriale, me praktikë profesionale dhe vlerësim final.",
instructors: [
{
name: "Ardian Kola",
role: "Teknik Modelizmi & Trainer",
image: "/placeholder.svg?height=200&width=200&text=Instructor",
bio: "10 vite eksperiencë në linjat e prodhimit veshjesh."
}
],
curriculum: [
{ title: "Moduli 1: Lay-Planning", lessons: ["Optimizimi i materialit", "Teknikat e prerjes"] },
{ title: "Moduli 2: Gradim CAD", lessons: ["Softuer CAD", "Përshtatja e masave"] },
{ title: "Moduli 3: Konstruktion Industrial", lessons: ["Modeli standard", "Silueta femërore"] },
{ title: "Moduli 4: Kontroll Cilësie", lessons: ["Inspektimi i qepjes", "Standardet"] },
{ title: "Moduli 5: Praktika & Vlerësim", lessons: ["Projekti final", "Certifikim"] }
],
benefits: ["Aftësi industriale", "Certifikim specifik"],
materials: ["Softuer CAD licencë", "Set prerjeje industriale"],
testimonials: [],
faqs: [],
featured: false,
students: 0,
media: [
{ type: "image", src: "/courses/fashion-industriale.webp", alt: "Pamje nga kursi Fashion Industriale" }
]
},
{
id: 50,
title: "Veshje Artizanale (600 ore)",
category: "fashion-design",
duration: "600 orë",
durationCategory: "600 orë",
level: "Mesatar",
price: "",
startDate: "",
schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
image: "/courses/fashion-tradicionale.webp",
description: "Kurs 600-orësh për veshje artizanale: nga traditat folklorike te koleksionet moderne me frymëzim kulturor.",
longDescription: "Mbulon historinë dhe origjinën e veshjeve tradicionale, simbolikat kulturore dhe teknikën e qepjes artizanale; punimin me dorë të motiveve etnike; përzgjedhjen e materialeve natyrale dhe dizajnimin e modeleve me frymëzim folklorik; si dhe realizimin e një mini-koleksioni artizanal me prezantim profesional dhe dokumentim fotografik.",
instructors: [
{
name: "Elda Riza",
role: "Artizane & Trainer",
image: "/placeholder.svg?height=200&width=200&text=Instructor",
bio: "8 vite përvojë në rimëkëmbjen dhe krijimin e veshjeve tradicionale shqiptare."
}
],
curriculum: [
{
title: "Moduli 1: Trashëgimia Kulturore",
lessons: [
"Historia dhe origjina e veshjeve tradicionale",
"Simbolet kulturore dhe qëndisjet etnike"
]
},
{
title: "Moduli 2: Technikë Artizanale",
lessons: [
"Qepja tradicionale me vegla artizanale",
"Punimi i motiveve me qëndisje dhe aplikime"
]
},
{
title: "Moduli 3: Materiale & Dizajn",
lessons: [
"Analiza e tekstileve natyrale dhe ngjyrave tradicionale",
"Skicimi dhe dizajnimi me frymëzim folklorik"
]
},
{
title: "Moduli 4: Mini-Koleksioni & Prezantimi",
lessons: [
"Realizimi i një mini-koleksioni të personalizuar",
"Dokumentimi fotografik dhe prezantimi profesional"
]
}
],
benefits: [
"Certifikim profesional në artizanatën e veshjeve",
"Portofol artizanal për aplikim në ekspozita"
],
materials: [
"Tekstile natyrale (lana, pambuk, mëndafsh)",
"Set veglash artizanale për qëndisje"
],
testimonials: [],
faqs: [],
featured: false,
students: 0,
media: [
{ type: "image", src: "/courses/fashion-tradicionale.webp", alt: "Pamje nga kursi Fashion Tradicionale" }
]
},
 {
id: 51,
title: "Pajisje për Stimulimin e Kolagjenit (Dermapen) – 150 ore",
category: "pajisjet-e-estetikes",
duration: "150 orë",
durationCategory: "150 orë",
level: "Mesatar",
price: "",
startDate: "",
schedule: "E Hënë - E Premte (10:00 - 14:00)",
image: "/pajisje/dermapen.webp",
noCustomCrop: true,
description: "Kurs 150-orësh për përdorimin profesional të Dermapen për stimulim kolagjeni dhe rinovim lëkurë.",
longDescription: "Mbulon anatominë dhe fiziologjinë e lëkurës, parimet biologjike të rigjenerimit me mikronjëra, parametrat dhe protokollet e trajtimit, higjienën dhe sterilizimin e instrumenteve, si dhe menaxhimin e efekteve anësore dhe aspektet ligjore.",
instructors: [
{
name: "Dr. Eda Basha",
role: "Trainer Estetikë",
image: "/placeholder.svg?height=200&width=200&text=Instructor",
bio: "Specialiste me 8 vite eksperiencë në trajtime me mikronjëra dhe stimulim kolagjeni."
}
],
curriculum: [
{
title: "Moduli 1: Anatomia & Fiziologjia e Lëkurës",
lessons: [
"Strukturat e shtresave epidermë/dermë/hipodermë",
"Roli i fibroblasteve dhe kolagjenit"
]
},
{
title: "Moduli 2: Parimet e Rigjenerimit me Dermapen",
lessons: [
"Mekanizmi biologjik i stimulimit kolagjenik",
"Faktorët që përmirësojnë sintezën e kolagjenit"
]
},
{
title: "Moduli 3: Parametrat & Protokollet e Seancës",
lessons: [
"Zgjedhja e gjatësi së gjilpërës, thellësi, frekuencë",
"Rregullimi i parametrave sipas zonës (fytyrë, dekolte)"
]
},
{
title: "Moduli 4: Higjiena & Sterilizimi",
lessons: [
"Protokollet e pastrimit para/pas trajtimit",
"Metodat e verifikuara të sterilizimit"
]
},
{
title: "Moduli 5: Trajtimet Estetike",
lessons: [
"Trajtimi i rrudhave sipërfaqësore dhe të thella",
"Përmirësimi i akneve dhe gjurmëve post-akne"
]
},
{
title: "Moduli 6: Siguria & Menaxhimi i Rreziqeve",
lessons: [
"Kundërindikacionet absolute dhe relative",
"Parandalimi i hiperpigmentimit dhe ënjtjes"
]
},
{
title: "Moduli 7: Etika & Ligjet",
lessons: [
"Rregulloret mbi të dhënat personale",
"Të drejtat e operatorit dhe klientit"
]
},
{
title: "Moduli 8: Praktika & Laborator",
lessons: [
"Simulime trajtimesh nën mbikëqyrje",
"Vlerësim për certifikim"
]
}
],
benefits: [
"Certifikim profesional Dermapen",
"Akses në pajisje moderne",
"Njohuri të plota praktike"
],
materials: [
"Kit gjilpërash Sterile 0.5 mm–1.5 mm",
"Serumë rinovues"
],
testimonials: [],
faqs: [],
featured: false,
students: 0,
media: [
{
type: "image",
src: "/placeholder.svg?height=600&width=800&text=Dermapen+150h",
alt: "Dermapen 150h"
}
]
},
{
id: 52,
title: "Presoterapia – 150 ore",
category: "pajisjet-e-estetikes",
duration: "150 orë",
durationCategory: "150 orë",
level: "Fillestar – Mesatar",
price: "",
startDate: "",
schedule: "E Martë - E Enjte (11:00 - 15:00)",
image: "/pajisje/presoterapi.webp",
noCustomCrop: true,
description: "Kurs 150-orësh për përdorimin e teknologjisë së presoterapisë në drenazh limfatik dhe trajtime SPA.",
longDescription: "Përfshin anatominë e sistemit limfatik, funksionimin e aparatit të presoterapisë, protokollet e trajtimit sipas zonave, higjienën e pajisjeve, si dhe menaxhimin e klientit dhe vlerësimet paraprake.",
instructors: [
{
name: "Arta Dervishi",
role: "Trainer Spa & Presoterapi",
image: "/placeholder.svg?height=200&width=200&text=Instructor",
bio: "Eksperte Spa me 7 vite përvojë në teknikat e drenazhit limfatik."
}
],
curriculum: [
{
title: "Moduli 1: Anatomia e Sistemit Limfatik",
lessons: [
"Struktura e nyjeve limfatike",
"Roli i limfës në shëndetin e indeve"
]
},
{
title: "Moduli 2: Funksionimi i Aparatit",
lessons: [
"Parametrat e presionit, frekuencës, kohëzgjatjes",
"Modalitetet e kompresionit"
]
},
{
title: "Moduli 3: Indikacionet & Kundërindikacionet",
lessons: [
"Edema primare vs sekondare",
"Masa paraprake dhe rreziqe"
]
},
{
title: "Moduli 4: Konsultimi & Vlerësimi",
lessons: [
"Mbledhja e anamnezës",
"Matjet antropometrike"
]
},
{
title: "Moduli 5: Protokollet e Trajtimit",
lessons: [
"Zona të poshtme (këmbë, kyç)",
"Zona abdominale dhe bel"
]
},
{
title: "Moduli 6: Higjiena & Mirëmbajtja",
lessons: [
"Sterilizimi i pjesëve boshtore",
"Kalibrimi dhe ndërrimi i filtrave"
]
},
{
title: "Moduli 7: Kujdesi Pas Trajtimit",
lessons: [
"Ushtrime lehtësuese",
"Monitorimi i rezultateve"
]
},
{
title: "Moduli 8: Praktika & Vlerësimi Final",
lessons: [
"Simulime në pajisje reale",
"Provim teorik dhe praktik"
]
}
],
benefits: [
"Certifikim Presoterapi",
"Aftësi në drenazh limfatik",
"Protocolle standarde SPA"
],
materials: [
"Aparat presoterapie",
"Aksesorë kompresioni"
],
testimonials: [],
faqs: [],
featured: false,
students: 0,
media: [
{
type: "image",
src: "/placeholder.svg?height=600&width=800&text=Presoterapia+150h",
alt: "Presoterapia 150h"
}
]
},
{
id: 53,
title: "Termokoperta – 150 ore",
category: "pajisjet-e-estetikes",
duration: "150 orë",
durationCategory: "150 orë",
level: "Fillestar – Mesatar",
price: "",
startDate: "",
schedule: "E Mërkurë & E Premte (12:00 - 16:00)",
image: "/pajisje/termokoperte.webp",
noCustomCrop: true,
description: "Kurs 150-orësh për teknologjinë Termokoperta: relaksim muskulor, detoksifikim dhe modelim konturesh.",
longDescription: "Mbulon anatominë e lëkurës dhe trupit, funksionimin e termikës, protokollet e aplikimit, kombinimet me SPA dhe masazhe, si dhe mirëmbajtjen e pajisjes dhe sigurinë.",
instructors: [
{
name: "Elena Meta",
role: "Trainer Estetikë",
image: "/placeholder.svg?height=200&width=200&text=Instructor",
bio: "Specialiste SPA me fokus në terapi termike dhe modelim corporal."
}
],
curriculum: [
{
title: "Moduli 1: Anatomia & Fiziologjia",
lessons: [
"Strukturat e lëkurës dhe yndyrnat",
"Qarkullimi limfatik dhe tretës"
]
},
{
title: "Moduli 2: Teknologjia Termokoperta",
lessons: [
"Parimet e funksionimit",
"Llojet e pajisjeve termike"
]
},
{
title: "Moduli 3: Protokollet e Aplikimit",
lessons: [
"Temperatura & kohëzgjatja",
"Pozicionimi i klientit"
]
},
{
title: "Moduli 4: Kombinimet SPA",
lessons: [
"Masazh drenazh limfatik",
"Trajtime anticelulit"
]
},
{
title: "Moduli 5: Kujdesi & Siguria",
lessons: [
"Parandalimi i rreziqeve",
"Etika dhe dëshmia ligjore"
]
},
{
title: "Moduli 6: Mirëmbajtja e Pajisjes",
lessons: [
"Pastrimi pas çdo përdorimi",
"Kontrolle teknike periodike"
]
},
{
title: "Moduli 7: Praktika & Vlerësimi Final",
lessons: [
"Demonstrime reale",
"Provim teorik dhe praktik"
]
}
],
benefits: [
"Certifikim Termokoperta",
"Akses në trajtime SPA",
"Manuale protokollesh"
],
materials: [
"Termokoperta profesionale",
"Kripëra dhe algë për trajtime"
],
testimonials: [],
faqs: [],
featured: false,
students: 0,
media: [
{
type: "image",
src: "/placeholder.svg?height=600&width=800&text=Termokoperta+150h",
alt: "Termokoperta 150h"
}
]
},
{
id: 23,
title: "Kurs Hydrofacial 15-in-1 (150 ore)",
category: "pajisjet-e-estetikes",
duration: "150 orë",
durationCategory: "150 orë",
level: "Avancuar",
price: "",
startDate: "",
schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
image: "/pajisje/hidrofacial.webp",
videoSrc: "/videos/hydrofacial.webm",
noCustomCrop: true,
description: "Trajnim profesional në përdorimin e sistemit Hydrofacial 15-in-1 për trajtime të avancuara të lëkurës.",
longDescription: "Ky kurs 150-orësh mbulon historinë dhe parimet e teknologjisë Hydrofacial, anatominë e lëkurës, standardet e higjienës, parametrat e trajtimit, protokollet e pastrimit të thellë, ekstraksionin me vakum, hidratimin intensiv, LED terapi, RF, ultratinguj e elektroporacion, menaxhimin e kontraindikacioneve dhe mirëmbajtjen e pajisjes.",
instructors: [
{
name: "Diana Kola",
role: "Instruktoreshë Hydrofacial",
image: "/placeholder.svg?height=200&width=200&text=Instructor",
bio: "Eksperte me 8 vite në trajtime Hydrofacial dhe teknologji anti-age."
}
],
curriculum: [
{
title: "Moduli 1: Parimet & Higjiena",
lessons: [
"Historia Hydrofacial",
"Sterilizimi & dezinfektimi"
]
},
{
title: "Moduli 2: Anatomia & Parametrat",
lessons: [
"Strukturat e lëkurës",
"Rregullimet bazë të pH-së"
]
},
{
title: "Moduli 3: Protokollet e Pastrimit",
lessons: [
"Deep cleansing",
"Mikrodermabrazion me acid"
]
},
{
title: "Moduli 4: Ekstraksion & Vakum",
lessons: [
"Teknikat manuale",
"Përdorimi i vakumit"
]
},
{
title: "Moduli 5: Hidratim & Serume",
lessons: [
"Elektroporacion",
"Infuzioni serumi"
]
},
{
title: "Moduli 6: LED & RF",
lessons: [
"LED terapia",
"Radiofrekuenca"
]
},
{
title: "Moduli 7: Ultratinguj & Elektroporacion",
lessons: [
"Parametrat ultratinguj",
"Siguria termike"
]
},
{
title: "Moduli 8: Praktikë & Mirëmbajtje",
lessons: [
"Simulime trajtimesh",
"Kalibrimi i pajisjes"
]
}
],
benefits: [
"Certifikim për Hydrofacial",
"Trajnim në teknologjitë më të fundit",
"Stazh praktik në klinikë"
],
materials: [
"Set pajisjesh Hydrofacial",
"Serume profesionalë",
"Manuale trajnimi"
],
testimonials: [],
faqs: [],
featured: false,
students: 18,
media: [
{
type: "image",
src: "/placeholder.svg?height=600&width=800&text=Hydrofacial+150",
alt: "Trajtim Hydrofacial"
}
]
},
{
id: 84,
title: "Kurs Epilimi me Lazer (150 orë)",
category: "pajisjet-e-estetikes",
duration: "150 orë",
durationCategory: "150 orë",
level: "Avancuar",
price: "",
startDate: "",
schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
image: "/pajisje/epilim-me-lazer.webp",
noCustomCrop: true,
description: "Trajnim profesional në epilimin me lazer duke mbuluar llojet e lazerëve, parametrat e trajtimit dhe sigurinë klinike.",
longDescription: "Ky kurs i avancuar prej 150 orësh ofron njohuri të thelluara mbi fizikën e lazerit, anatomisë së lëkurës dhe flokut, karakteristikat e pajisjeve të ndryshme si Diode, Alexandrite dhe Nd:YAG, si dhe praktika mbi konfigurimin, kalibrimin dhe protokollet e trajtimit. Kursi përfshin gjithashtu aspekte etike dhe ligjore, menaxhimin e rreziqeve, konsultimin me klientët, dhe përfundon me certifikim pas testimeve teorike dhe praktike.",
instructors: [
{
name: "Diana Kola",
role: "Instruktore për Epilim me Lazer",
image: "/placeholder.svg?height=200&width=200&text=Instructor",
bio: "Eksperte me përvojë 10+ vite në trajtime me lazer estetik dhe dermatologjik."
}
],
curriculum: [
{
title: "Moduli 1: Hyrje në Epilimin me Lazer",
lessons: [
"Parimet e dritës lazer",
"Fizika e lazerit dhe transformimi i energjisë"
]
},
{
title: "Moduli 2: Anatomia e Lëkurës dhe Flokut",
lessons: [
"Strukturat e epidermës, dermës dhe hipodermës",
"Tipet e flokut dhe folikulave"
]
},
{
title: "Moduli 3: Llojet e Lazerëve",
lessons: [
"Diode vs Alexandrite",
"Nd:YAG dhe IPL: avantazhe dhe kufizime"
]
},
{
title: "Moduli 4: Siguria dhe Higjiena",
lessons: [
"Mbrojtja e syve dhe mjedisit",
"Sterilizimi dhe pastrimi i pajisjeve"
]
},
{
title: "Moduli 5: Pajisjet dhe Kalibrimi",
lessons: [
"Komponentët e lazerit (pumpues, rezonator)",
"Procedurat e mirëmbajtjes dhe kalibrimit"
]
},
{
title: "Moduli 6: Konsultimi dhe Vlerësimi",
lessons: [
"Testi i patch-it",
"Vlerësimi i fototipit dhe historikut mjekësor"
]
},
{
title: "Moduli 7: Protokollet e Trajtimit",
lessons: [
"Parametrat për fototipet I–III",
"Trajtimi për lëkura të errëta"
]
},
{
title: "Moduli 8: Indikacionet & Kundërindikacionet",
lessons: [
"Raste për epilim me lazer",
"Kufizime absolute dhe relative"
]
},
{
title: "Moduli 9: Kujdesi Para dhe Pas Trajtimit",
lessons: [
"Shmangia e diellit dhe produkteve fotosensibile",
"Menaxhimi i efekteve të përkohshme"
]
},
{
title: "Moduli 10: Praktika Klinike & Vlerësimi",
lessons: [
"Simulime mbi modele",
"Seanca reale me klientë"
]
},
{
title: "Moduli 11: Aspektet Ligjore & Etika",
lessons: [
"Rregulloret dhe standardet",
"Marrëdhënia me klientin"
]
}
],
benefits: [
"Certifikim profesional në epilim me lazer",
"Trajnim me pajisje të avancuara Diode, Alexandrite & Nd:YAG",
"Praktikë klinike dhe supervizim individual"
],
materials: [
"Manual trajnimi",
"Mbrojtëse për sy dhe sete sterile",
"Pajisje trajtimi me lazer"
],
testimonials: [],
faqs: [],
featured: false,
students: 0,
media: [
{
type: "image",
src: "/placeholder.svg?height=600&width=800&text=Epilim+me+Lazer",
alt: "Epilim me Lazer"
}
]
},
  {
    id: 77,
    title: "Kurs i Menaxhimit të Hotelit",
    category: "UET Italia",
    duration: "",
    durationCategory: "",
    level: "",
    price: "",
    startDate: "",
    schedule: "",
    image: "/uet-courses/uet-hotel-managment.webp",
    description:
      "Ky kurs specializues është i përshtatur për diplomuarit që kërkojnë përgatitje të duhur për aspektet operative të industrisë së hotelerisë.",
    longDescription:
      "Rekomandohet për ata që nuk kanë përvojë të konsiderueshme në sektor dhe dëshirojnë të zotërojnë aspektet teorike dhe praktike të kursit për t'u futur me sukses në industrinë e hotelerisë dhe mikpritjes. Karakteristikat operative të departamenteve hotelierike, duke përfshirë front office, administratën, ushqim & pije, organizimin e konferencave dhe marketingun, analizohen në detaje për të ofruar një pasqyrë gjithëpërfshirëse të sistemit hotelier.",
    testimonials: [],
    faqs: [],
    featured: false,
    students: 0,
    link: "https://uetitalia.it/product/hotelmanagement/",
  },
  {
    id: 54,
    title: "Kurs për Menaxher Junior të Front Office",
    category: "UET Italia",
    duration: "",
    durationCategory: "",
    level: "",
    price: "",
    startDate: "",
    schedule: "",
    image: "/uet-courses/uet-front-office.webp",
    description:
      "Trajnoni profesionistin që kujdeset për kontaktin e parë me mysafirët, si në telefon ashtu edhe gjatë mbërritjes në hotel, duke zbatuar procedurat e rezervimit, check-in dhe check-out.",
    longDescription:
      "Ky profesionist ndihmon mysafirët gjatë qëndrimit të tyre, regjistron konsumin e tyre dhe siguron që cilësia e shërbimit hotelier të përmbushë vazhdimisht standardet e vendosura. Metodologjia bazohet në know-how: përmes shembujve konkretë, simulimeve dhe ushtrimeve ofrohen mjetet praktike për vendosje të suksesshme në punë. Materialet mësimore përbëhen nga përpunime të përgatitura posaçërisht.",
    testimonials: [],
    faqs: [],
    featured: false,
    students: 0,
    link: "https://uetitalia.it/product/front-office-junior-manager/",
  },
  {
    id: 55,
    title: "Kurs për Menaxher të Ushqimit & Pijeve",
    category: "UET Italia",
    duration: "",
    durationCategory: "",
    level: "",
    price: "",
    startDate: "",
    schedule: "",
    image: "/uet-courses/uet-food.webp",
    description:
      "Kursi synon trajnimin e profesionistit përgjegjës për menaxhimin e furnizimit me ushqim, monitorimin e cilësisë së prodhimit dhe shpërndarjes, vendosjen e buxheteve dhe kontrollin e kostove, si dhe aspektet organizative të planifikimit dhe ekzekutimit të banketeve, kokteleve mirëseardhëse, bufeve ose refreshimeve.",
    longDescription:
      "Ofron mjetet teorike dhe aftësitë praktike për ndjekje të suksesshme të kësaj karriere. Ushqimi & Pijet është sektori që trajton të gjitha shërbimet e kateringut, si ato të restoranteve të hoteleve, ashtu edhe ngjarjet rastësore.",
    testimonials: [],
    faqs: [],
    featured: false,
    students: 0,
    link: "https://uetitalia.it/product/fbm/",
  },
  {
    id: 56,
    title: "Maitre Global & Menaxher Shërbimesh Ristorative",
    category: "UET Italia",
    duration: "",
    durationCategory: "",
    level: "",
    price: "",
    startDate: "",
    schedule: "",
    image: "/uet-courses/uet-non-hotel-managment.webp",
    description:
      "AMIRA ACADEMY lindi nga nevoja për të zhvilluar burime njerëzore me kualifikim të lartë për sektorët e mikpritjes dhe restaurimit, pas kërkesave të shumta kombëtare dhe ndërkombëtare.",
    longDescription:
      "Nevoja për kurse trajnimi dhe rifreskimi në teknikat e mikpritjes, mikpritje ndërkombëtare dhe zhvillim profesional për Maitre d', tani Menaxher i Vërtetë i Shijes, dikton programet trajnuese në përputhje me nevojat në ndryshim të një sektori motor të industrisë së mikpritjes. Të bëhesh Maitre d' kërkon aftësi kulinarie, kulturë menaxhimi mikpritjeje dhe njohuri të zonës lokale, duke e bërë Maitre d' Ambasador të Shijes për mysafirët më kërkues.",
    testimonials: [],
    faqs: [],
    featured: false,
    students: 0,
    link: "https://uetitalia.it/product/corsomaitre/",
  },
  {
    id: 57,
    title: "Kurs për Pastrues në Hotel",
    category: "UET Italia",
    duration: "",
    durationCategory: "",
    level: "",
    price: "",
    startDate: "",
    schedule: "",
    image: "/uet-courses/uet-housekeeper.webp",
    description:
      "Kursi i Trajnimit të Avancuar për Pastrues në Hotel synohet për ata që dëshirojnë të thellojnë njohuritë dhe aftësitë specifike në këtë departament, duke fituar vetëdijen profesionale të nevojshme.",
    longDescription: "",
    testimonials: [],
    faqs: [],
    featured: false,
    students: 0,
    link: "https://uetitalia.it/product/housekeeper/",
  },
  {
    id: 58,
    title: "Kurs Profesional për Barmene",
    category: "UET Italia",
    duration: "",
    durationCategory: "",
    level: "",
    price: "",
    startDate: "",
    schedule: "",
    image: "/uet-courses/uet-bartender.webp",
    description:
      "UET – European University School for Tourism, në bashkëpunim me ABS Sicilia Professional Bartending Association, prezanton Kursin Profesional për Barmene.",
    longDescription:
      "Ky kurs do t'ju mundësojë të fitoni Certifikatën Profesionale të Bartenderit, pas provimit përfundimtar që verifikon përmbajtjet e mësuara. Program 48-orësh nga ABS Professional dhe praktika 3–6 mujore në ambiente prestigjioze në Itali dhe jashtë saj.",
    testimonials: [],
    faqs: [],
    featured: false,
    students: 0,
    link: "https://uetitalia.it/product/corsobartender/",
  },
  {
    id: 59,
    title:
      "Kurs për Marketing & Menaxhim të Bizneseve Jo-Hotelier",
    category: "UET Italia",
    duration: "",
    durationCategory: "",
    level: "",
    price: "",
    startDate: "",
    schedule: "",
    image: "/uet-courses/uet-extra-hotel.webp",
    description:
      "Bëhuni ekspert në Marketing & Menaxhim për Bizneset Jo-Hotelier me kursin tonë online: fitoni aftësi strategjike në menaxhimin dhe promovimin e B&B-ve, agroturizmit dhe shtëpive mikpritëse.",
    longDescription:
      "Regjistrohuni tani dhe filloni të rritni biznesin tuaj të mikpritjes nga komoditeti i shtëpisë!",
    testimonials: [],
    faqs: [],
    featured: false,
    students: 0,
    link: "https://uetitalia.it/product/extraalberghiero/",
  },
  {
    id: 60,
    title: "Kurs Menaxhimi i Wellness & Spa",
    category: "UET Italia",
    duration: "",
    durationCategory: "",
    level: "",
    price: "",
    startDate: "",
    schedule: "",
    image: "/uet-courses/uet-spa-managment.webp",
    description:
      "Kursi Menaxhimi i Wellness & Spa u krijua për të trajnuar menaxherët që dinë si të menaxhojnë dhe promovojnë qendrat e mirëqenies, fermat e bukurisë, spa-t, qendrat termale dhe strukturat e tjera në tregun e mirëqenies.",
    longDescription:
      "Shëndeti përmes ujit dhe gëzimet e vogla. Kursi ofrohet online.",
    testimonials: [],
    faqs: [],
    featured: false,
    students: 0,
    link:
      "https://uetitalia.it/product/welleness-and-spa-management-online/",
  },
  {
    id: 61,
    title:
      "Kurs për Projektues Udhëtimesh Eksperienciale",
    category: "UET Italia",
    duration: "",
    durationCategory: "",
    level: "",
    price: "",
    startDate: "",
    schedule: "",
    image: "/uet-courses/uet-experimental-travel.webp",
    description:
      "Kursi ofron trajnim specifik për sektorin e agjencive turistike dhe operatorëve turistikë, me fokus te produktet eksperienciale.",
    longDescription:
      "Të gjitha aspektet operative të projektuesit të udhëtimeve ilustrohen dhe analizohen, duke mundësuar fitimin e aftësive të aplikueshme menjëherë në tregun e punës. Studentët mësojnë të krijojnë itinerare të personalizuara për klientë individualë ose grupe me fokus te eksperiencat unike.",
    testimonials: [],
    faqs: [],
    featured: false,
    students: 0,
    link: "https://uetitalia.it/product/travelexp/",
  },
  {
    id: 62,
    title:
      "Kurs Përgatitor për Provimin e Udhërrëfyesit Turistik",
    category: "operatoret-turistike",
    duration: "",
    durationCategory: "",
    level: "",
    price: "",
    startDate: "",
    schedule: "",
    image: "/uet-courses/uet-guide.webp",
    description:
      "Kursi ynë Përgatitor për Provimin e Udhërrëfyesit Turistik është dizajnuar për t'ju ofruar aftësitë dhe njohuritë për të kaluar provimin dhe për të nisur një karrierë sfiduese në turizëm.",
    longDescription:
      "Programi 100-orësh përgatit studentët për provimin e licencimit të udhërrëfyesit turistik në nivel lokal, kombëtar dhe ndërkombëtar. Ai zhvillon aftësitë e nevojshme për testet me shkrim dhe gojëzore sipas Thirrjes për Aplikime.",
    testimonials: [],
    faqs: [],
    featured: false,
    students: 0,
    link: "https://uetitalia.it/product/guidaturistica/",
  },
  {
    id: 63,
    title: "Kurs për Udhërrëfyes Turistik",
    category: "UET Italia",
    duration: "",
    durationCategory: "",
    level: "",
    price: "",
    startDate: "",
    schedule: "",
    image: "/uet-courses/uet-tourist-guide.webp",
    description:
      "Kurs trajnimi i specializuar për përgatitjen e provimit të kualifikimit si Udhërrëfyes Turistik.",
    longDescription: "",
    testimonials: [],
    faqs: [],
    featured: false,
    students: 0,
    link: "https://uetitalia.it/product/accompagnatoreturistico/",
  },
  {
    id: 64,
    title: "Kurs për Planifikues Dasmash & Eventesh Lokale",
    category: "UET Italia",
    duration: "",
    durationCategory: "",
    level: "",
    price: "",
    startDate: "",
    schedule: "",
    image: "/uet-courses/uet-weding.webp",
    description:
      "Kursi ofron trajnim specifik në industrinë e dasmave dhe planifikimin e ngjarjeve lokale në përgjithësi.",
    longDescription:
      "Të gjitha aspektet operative të planifikuesit profesional ilustrohen dhe analizohen: nga analiza e kërkesës, buxhetimi, planifikimi deri te menaxhimi në vend të ngjarjes.",
    testimonials: [],
    faqs: [],
    featured: false,
    students: 0,
    link: "https://uetitalia.it/product/weddingplanner/",
  },
  {
    id: 65,
    title: "Kurs për Menaxher Ngjarjesh Made in Italy",
    category: "UET Italia",
    duration: "",
    durationCategory: "",
    level: "",
    price: "",
    startDate: "",
    schedule: "",
    image: "/uet-courses/uet-made-in-italy.webp",
    description:
      "Kursi Made in Italy Events Manager është për ata që dëshirojnë të specializohen në konceptimin, planifikimin dhe menaxhimin e ngjarjeve që përfaqësojnë ekselencën italiane në botë.",
    longDescription:
      "Nga planifikimi i dasmave dhe ceremoni, deri te ngjarjet kulturore, korporative dhe promovuese, kursi ofron mjetet për krijimin e përvojave autentike të rrënjosura në traditat lokale. Pjesëmarrësit fitojnë aftësitë teknike dhe menaxheriale për të dizajnuar ngjarje unike, duke nxjerrë në pah stilin Made in Italy.",
    testimonials: [],
    faqs: [],
    featured: false,
    students: 0,
    link: "https://uetitalia.it/product/accompagnatoreturistico/",
  },
  {
    id: 66,
    title: "Kurs Amadeus",
    category: "UET Italia",
    duration: "",
    durationCategory: "",
    level: "",
    price: "",
    startDate: "",
    schedule: "",
    image: "/uet-courses/uet-amadeus.webp",
    description:
      "Mësoni të përdorni softuerin e rezervimeve Amadeus me kursin tonë online: fitoni aftësi praktike, menaxhoni rezervimet me efikasitet dhe përgatituni për një karrierë në industrinë e udhëtimeve.",
    longDescription:
      "Regjistrohuni tani dhe zotëroni Amadeus nga komoditeti i shtëpisë!",
    testimonials: [],
    faqs: [],
    featured: false,
    students: 0,
    link: "https://uetitalia.it/product/software-amadeus/",
  },
  {
    id: 67,
    title: "Kurs Opera Cloud",
    category: "UET Italia",
    duration: "",
    durationCategory: "",
    level: "",
    price: "",
    startDate: "",
    schedule: "",
    image: "/uet-courses/uet-opera-cloud.webp",
    description:
      "Kurs i avancuar për përdorimin e softuerit Oracle Fidelio Opera, një nga më të rëndësishmit dhe të përhapurit në menaxhimin e rezervimeve hotelierike.",
    longDescription: "",
    testimonials: [],
    faqs: [],
    featured: false,
    students: 0,
    link: "https://uetitalia.it/product/oraclefidelioopera/",
  },
  {
    id: 68,
    title:
      "Master Ekzekutiv i Shkurtër në Inteligjencë Artificiale & Shkencë të të Dhënave për Turizëm",
    category: "UET Italia",
    duration: "",
    durationCategory: "",
    level: "",
    price: "",
    startDate: "",
    schedule: "",
    image: "/uet-courses/uet-short-master-ai.webp",
    description:
      "ESM synon t'u ofrojë pjesëmarrësve njohuritë e nevojshme për të përdorur teknologjitë e Inteligjencës Artificiale dhe Shkencës së të Dhënave në sektorin e turizmit.",
    longDescription:
      "Zgjat 100 orë dhe është plotësisht ON DEMAND. Ligjëratat fokusohen në aplikimet në mikpritje, marketing turistik, planifikim udhëtimesh dhe menaxhim burimesh, ndërsa studentët mësojnë të përdorin të dhënat për strategji efektive biznesi.",
    testimonials: [],
    faqs: [],
    featured: false,
    students: 0,
    link: "https://uetitalia.it/product/inteligenzaartificiale/",
  },
  // {
  //   id: 69,
  //   title: "Kurs Marketingu Web & Media Sociale për Turizëm",
  //   category: "UET Italia",
  //   duration: "",
  //   durationCategory: "",
  //   level: "",
  //   price: "",
  //   startDate: "",
  //   schedule: "",
  //   image: "/uet-courses/uet-web-marketing.webp",
  //   description:
  //     "Trajnim i specializuar për menaxhimin e marketingut web, komunikimit online, marketingut në mediat sociale dhe menaxhimit të komunitetit për sektorin e turizmit.",
  //   longDescription: "",
  //   testimonials: [],
  //   faqs: [],
  //   featured: false,
  //   students: 0,
  //   link: "https://uetitalia.it/product/webmarketingsocialmedia/",
  // },
  {
    id: 70,
    title: "Master Ekzekutiv në Marketing Dixhital për Turizëm",
    category: "UET Italia",
    duration: "",
    durationCategory: "",
    level: "",
    price: "",
    startDate: "",
    schedule: "",
    image: "/uet-courses/uet-executive-master-digital-marketing.webp",
    description:
      "Master Ekzekutiv në Marketing Dixhital për Turizëm ofron mundësi të jashtëzakonshme për të zotëruar mjetet kryesore të marketingut online dhe komunikimit: strategjitë web, mediat sociale dhe reputacionin e markës.",
    longDescription: "",
    testimonials: [],
    faqs: [],
    featured: false,
    students: 0,
    link: "https://uetitalia.it/product/masterdigitalmarketing/",
  },
  {
    id: 71,
    title: "Master në Menaxhimin e Hotelerisë",
    category: "UET Italia",
    duration: "",
    durationCategory: "",
    level: "",
    price: "",
    startDate: "",
    schedule: "",
    image: "/uet-courses/uet-master-hospitality.webp",
    description:
      "Master në Menaxhimin e Hotelerisë (Menaxhimi i Strukturave Turistike & Hotelerike) synon të sigurojë mjetet e nevojshme për menaxhim, planifikim & organizim të situatave komplekse menaxheriale.",
    longDescription:
      "Njohuria e teknikave të menaxhimit të çdo departamenti dhe vizioni të përgjithshëm lejon koordinimin & planifikimin e aktiviteteve të ndryshme, duke krijuar mundësi për sukses & rritje profesionale brenda strukturave kombëtare & ndërkombëtare.",
    testimonials: [],
    faqs: [],
    featured: false,
    students: 0,
    link: "https://uetitalia.it/product/hospitalitymanagement/",
  },
  {
    id: 72,
    title: "Master në Menaxhimin e Ushqimit & Verës",
    category: "UET Italia",
    duration: "",
    durationCategory: "",
    level: "",
    price: "",
    startDate: "",
    schedule: "",
    image: "/uet-courses/uet-master-food-wine.webp",
    description:
      "Master në Menaxhimin e Ushqimit & Verës (Drejtori i Kompanive të Shërbimit të Ushqimit & Verës) ofron mundësi për vendosje menaxheriale në industrinë e verës, ushqimit & eventeve në zinxhirët më prestigjiozë hotelierike.",
    longDescription:
      "Programi modular lejon zotërimin gradual të përmbajtjes trajnuese. Secili modul mbulon temat në detaje, me objektiva profesionale & vendosje të certifikuar në kompani.",
    testimonials: [],
    faqs: [],
    featured: false,
    students: 0,
    link: "https://uetitalia.it/product/foodwine/",
  },
  {
    id: 73,
    title:
      "Bachelor në Ndërmjetësim Gjuhësor & Menaxhimin e Turizmit",
    category: "UET Italia",
    duration: "",
    durationCategory: "",
    level: "",
    price: "",
    startDate: "",
    schedule: "",
    image: "/uet-courses/uet-master-linguistic.webp",
    description:
      "Program bachelor për diplomuarit e rinj që kërkojnë trajnim të specializuar në turizëm. Industria e turizmit është strategjike për BE-në, veçanërisht për Italinë që mban 40% të trashëgimisë kulturore botërore.",
    longDescription:
      "Italia është destinacion natyral turistik. Programi mund të ndiqet në prezencë ose online. Kurrikula, me lëndë teorike & specifike turizmi & gjuhësh, synon të formojë profesionistë të përgatitur për tregun e turizmit.",
    testimonials: [],
    faqs: [],
    featured: false,
    students: 0,
    link: "https://uetitalia.it/product/laureatriennale/",
  },
  {
    id: 74,
    title: "Master në Menaxhimin e Udhëtimeve",
    category: "UET Italia",
    duration: "",
    durationCategory: "",
    level: "",
    price: "",
    startDate: "",
    schedule: "",
    image: "/uet-courses/uet-master-travel-managment.webp",
    description:
      "Master në Menaxhimin e Udhëtimeve (Agjencitë Turistike & Tour Operator) përgatit studentët për provimet për Drejtues Teknik të një agjencie turistike.",
    longDescription:
      "Trajnon profesionistë me aftësi menaxheriale për planifikimin e ofertave turistike, menaxhimin e rezervimeve & organizimin e ngjarjeve të ndryshme. Mbulon të gjitha aspektet e zinxhirit turistik nga krijimi i paketës deri te negociatat e shitjeve.",
    testimonials: [],
    faqs: [],
    featured: false,
    students: 0,
    link: "https://uetitalia.it/product/travelmanagement/",
  },
  // {
  //   id: 75,
  //   title:
  //     "Master në Turizmin Eksperiencial për Menaxhimin e Projekteve",
  //   category: "UET Italia",
  //   duration: "",
  //   durationCategory: "",
  //   level: "",
  //   price: "",
  //   startDate: "",
  //   schedule: "",
  //   image: "/uet-courses/uet-master-experimental-toursim.webp",
  //   description:
  //     "Programi synon t'u ofrojë njohuri & aftësi për analizimin e organizimit & konkurrencës së destinacioneve turistike, duke përfshirë aspektet teknike të fushës.",
  //   longDescription:
  //     "Studentët mësojnë të analizojnë zonën lokale & konkurrencën, dhe të zhvillojnë projekte turizmi, duke vlerësuar fizibilitetin e destinacionit. Më pas krijojnë, organizojnë & promovojnë produkte profesionale për tregun online & offline.",
  //   testimonials: [],
  //   faqs: [],
  //   featured: false,
  //   students: 0,
  //   link: "https://uetitalia.it/product/turismoesperienziale/",
  // },
  {
    id: 76,
    title: "MBA – Master në Administrim Biznesi",
    category: "UET Italia",
    duration: "",
    durationCategory: "",
    level: "",
    price: "",
    startDate: "",
    schedule: "",
    image: "/uet-courses/uet-mba.webp",
    description:
      "MBA (Global Hospitality & Tourism) është për diplomuarit që duan të avan­cojnë studimet, të bëhen sipërmarrës në mikpritje, të ndryshojnë industri apo të marrin role më të larta në organizata globale.",
    longDescription:
      "MBA fokusohet në zgjidhjen e problemeve, analizën e të dhënave, vendimmarrje, planifikim strategjik & zhvillim lidershipi. Përfshin ligjërata, seminare & tutoriale mbi marketing, financë, investime, R&D, sjellje organizative, me internship & projekt capstone.",
    testimonials: [],
    faqs: [],
    featured: false,
    students: 0,
    link: "https://uetitalia.it/product/mba-master-of-business-administration/",
  }
];





