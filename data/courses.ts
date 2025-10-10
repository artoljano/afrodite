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
  // ← NEW!
  media?: {
    type: "image" | "video";
    src: string;
    alt?: string;
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
  image: "/courses/babysitter.jpg",
  videoSrc: "/videos/babysitter-video.mp4",
  description:
    "Mësoni aftësitë thelbësore për përkujdesjen ndaj fëmijëve dhe zhvillimin e tyre të sigurt e të shëndetshëm.",
  longDescription:
    "Ky kurs i dedikohet të gjithë atyre që dëshirojnë të punojnë si kujdestarë për fëmijë në çerdhe, kopshte apo në familje. Do të trajtohen tema si përkujdesja psiko-sociale e fëmijëve dhe adoleshentëve, higjiena, ushqyerja, fjetja, mbrojtja nga sëmundjet dhe zhvillimi i fëmijëve me nevoja të veçanta. Gjithashtu përfshihen lëndë ndihmëse si gjuha e huaj dhe informatika për përgatitjen sa më të plotë profesionale.",
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
      title: "Moduli 1: Hyrje në profesionin e kujdestarit për fëmijë",
      lessons: [
        "Përkufizimi dhe rëndësia e profesionit",
        "Etika dhe përgjegjësitë e punës"
      ]
    },
    {
      title: "Moduli 2: Përkujdesja psiko-sociale te fëmijët dhe adoleshentët",
      lessons: [
        "Zhvillimi emocional dhe social",
        "Ndihma në rastet e krizës"
      ]
    },
    {
      title: "Moduli 3: Higjiena, ushqyerja dhe gjumi",
      lessons: [
        "Rregullat e higjienës personale",
        "Ushqimi dhe gjumi i shëndetshëm"
      ]
    },
    {
      title: "Moduli 4: Edukimi dhe zhvillimi",
      lessons: [
        "Zhvillimi i fëmijëve me nevoja të veçanta",
        "Mbështetja pedagogjike dhe sociale"
      ]
    },
    {
      title: "Moduli 5: Lëndë ndihmëse",
      lessons: [
        "Gjuhë e huaj (Italisht/Anglisht)",
        "Informatikë"
      ]
    },
    {
      title: "Moduli 6: Praktikë profesionale",
      lessons: [
        "Punë praktike në institucione",
        "Laborator dhe vëzhgim"
      ]
    }
  ],
  benefits: [
    "Njohuri të thelluara mbi zhvillimin e fëmijëve",
    "Aftësi praktike për përkujdesje profesionale",
    "Certifikim i vlefshëm në tregun e punës"
  ],
  materials: [
    "Manual për përkujdesje fëmijësh",
    "Udhëzues praktik për higjienë dhe siguri",
    "Fletore ushtrimesh për zhvillim personal"
  ],
  testimonials: [],
  faqs: [],
  featured: false,
  students: 12,
// media: [
//   { type: "image", src: "/courses/tour-guide.jpg", alt: "Pamje nga guida turistike" },
//   { type: "image", src: "/courses/operatore-turistik.jpg", alt: "Pamje nga kursi operator turistik" },

// ]

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
  image: "/courses/kujdestar-per-mosha-te-tret.jpg",
  videoSrc: "/videos/caregiver-video.mp4",
  description:
    "Aftësi për përkujdesje personale, shëndetësore dhe sociale për të moshuarit në ambiente rezidenciale ose familjare.",
  longDescription:
    "Ky program 1000-orësh ofron përgatitje të plotë për kujdestarë të të moshuarve duke përfshirë kujdesin psiko-social, dhënien e medikamenteve të rekomanduara, ndihmën në jetën e përditshme dhe komunikimin me familjarët. Pjesë e kursit janë edhe modulet ndihmëse të gjuhës së huaj dhe informatikës, si dhe praktika profesionale në ambiente të specializuara.",
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
      title: "Moduli 1: Hyrje në profesionin e kujdestarit për të moshuar",
    
      lessons: [
        "Roli i kujdestarit",
        "Etika dhe siguria në punë"
      ]
    },
    {
      title: "Moduli 2: Kujdesi psiko-social dhe shëndetësor",
      lessons: [
        "Vlerësimi i gjendjes së pacientëve",
        "Dhënia e medikamenteve"
      ]
    },
    {
      title: "Moduli 3: Përkujdesje në shtëpi dhe komunitet",
      lessons: [
        "Organizimi i ditës dhe mbështetje sociale",
        "Komunikimi me familjen"
      ]
    },
    {
      title: "Moduli 4: Lëndë ndihmëse",
      lessons: [
        "Gjuhë e huaj (Italisht/Anglisht)",
        "Informatikë"
      ]
    },
    {
      title: "Moduli 5: Praktikë profesionale",
      lessons: [
        "Stazhe në qendra për të moshuar",
        "Përdorimi i pajisjeve ndihmëse"
      ]
    }
  ],
  benefits: [
    "Përgatitje për punësim në ambiente rezidenciale",
    "Certifikim për kujdestar geriatrik",
    "Njohuri të zgjeruara mbi shëndetin e të moshuarve"
  ],
  materials: [
    "Manual për kujdestari të moshuarish",
    "Mjete ndihmëse për praktika mjekësore",
    "Udhëzues për sigurinë e pacientëve"
  ],
  testimonials: [],
  faqs: [],
  featured: false,
  students: 10,
// media: [
//   { type: "image", src: "/courses/tour-guide.jpg", alt: "Pamje nga guida turistike" },
//   { type: "image", src: "/courses/operatore-turistik.jpg", alt: "Pamje nga kursi operator turistik" },
  
// ]

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
  image: "/courses/operatore-turistik.jpg",
  videoSrc: "/videos/tourist-operator.mp4",
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
//   { type: "image", src: "/courses/tour-guide.jpg", alt: "Pamje nga guida turistike" },
//   { type: "image", src: "/courses/operatore-turistik.jpg", alt: "Pamje nga kursi operator turistik" },

// ]

},
{
  id: 5,
  title: "Kurs Kujdestar për të Moshuar dhe Fëmijë",
  category: "kujdestar-per-te-moshuar-dhe-femije",
  duration: "1500 orë",
  durationCategory: "1500 orë",
  level: "Mesatar",
  price: "",
  startDate: "",schedule: "E Hënë - E Shtunë (09:00 - 16:00)",
    videoSrc: "/videos/caregiver-video.mp4",

  image: "/courses/kujdestare-mosha-te-tret-dhe-femije.jpg",
  description:
    "Merrni aftësitë për kujdesin psiko-social dhe fizik të të moshuarve dhe fëmijëve në banesë dhe institucion.",
  longDescription:
    "Ky kurs 1500-orësh kombinon trajnimet për kujdestarinë e të moshuarve dhe fëmijëve: nga përkujdesja psiko-sociale, administrimi i medikamenteve dhe teknikat e lëvizjes së të moshuarve, deri te higjena, ushqyerja dhe zhvillimi i fëmijëve. Përfshin edhe gjuhë të huaj (Italisht/Anglisht), informatikë dhe praktikë profesionale në laboratorë dhe institucione partnerë.",
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
      title: "Moduli 1: Hyrje në Kujdestarinë e të Moshuarve dhe Fëmijëve",
      lessons: [
        "Kujdestari për të moshuar",
        "Kujdestari për fëmijë"
      ]
    },
    {
      title: "Moduli 2: Përkujdesja Psiko-Sociale",
      lessons: [
        "Përkujdesje për fëmijët",
        "Përkujdesje për adoleshentët",
        "Vlerësimi dhe përkujdesja psiko-sociale për të moshuarit"
      ]
    },
    {
      title: "Moduli 3: Përkujdesja Fizike dhe Siguria",
      lessons: [
        "Përkujdesja personale dhe administrimi i medikamenteve",
        "Higjena, pozicionimi dhe lëvizja e të moshuarve",
        "Mbrojtja e të drejtave dhe procedurat e ankimimit"
      ]
    },
    {
      title: "Moduli 4: Kujdesi për Fëmijët",
      lessons: [
        "Veshja dhe higjiena e fëmijës",
        "Ushqyerja dhe gjumi i fëmijëve",
        "Zhvillimi dhe mbrojtja nga rreziqet e fëmijëve me nevoja të veçanta"
      ]
    },
    {
      title: "Moduli 5: Gjuhë e Huaj & Informatikë",
      lessons: [
        "Italisht/Anglisht (gramatikë)",
        "Hyrje në informatikë"
      ]
    },
    {
      title: "Moduli 6: Praktikë Profesionale & Laborator",
      lessons: [
        "Stazhe në institucione kujdesi",
        "Punë laboratorike"
      ]
    }
  ],
  benefits: [
    "Trajnim 360° për dy grupe vulnerabël",
    "Certifikim i pranuar nga institucionet sociale",
    "Praktikë në laboratorë dhe institucione"
  ],
  materials: [
    "Manual kujdestarie familjare",
    "Udhëzues laboratorik",
    "Fletushka për administrimin e medikamenteve"
  ],
  testimonials: [],
  faqs: [],
  featured: false,
  students: 8,
//   media: [
//   { type: "image", src: "/courses/tour-guide.jpg", alt: "Pamje nga guida turistike" },
//   { type: "image", src: "/courses/operatore-turistik.jpg", alt: "Pamje nga kursi operator turistik" },

  
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
  image: "/courses/udherrefim-turistik.jpg", noCustomCrop: true,
  videoSrc: "/videos/tour-guide.mp4",
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
//   { type: "image", src: "/courses/tour-guide.jpg", alt: "Pamje nga guida turistike" },
//   { type: "image", src: "/courses/operatore-turistik.jpg", alt: "Pamje nga kursi operator turistik" },

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
  image: "/courses/sherbim-pastrimi.jpg",
  videoSrc:"",
  description:
    "Mësoni teknikat e dezinfektimit, sterilizimit dhe pastrimit të brendshëm e të jashtëm të hapësirave.",
  longDescription:
    "Ky kurs 150-orësh trajnon punëtorët e pastrimit në protokollet e dezinfektimit, sterilizimit, pastrimin e apartamenteve dhe institucioneve, si dhe mirëmbajtjen e hapësirave të jashtme gjelbëruese.",
  instructors: [
    {
      name: "Gent Caka",
      role: "Specialist Pastrimi",
      image: "/placeholder.svg?height=200&width=200&text=Instructor",
      bio: "Me 7 vite përvojë në pastrimin profesional të zyrave, spitaleve dhe hoteleve."
    }
  ],
  curriculum: [
    {
      title: "Moduli 1: Hyrje në Profesionin e Pastrimit",
      lessons: ["Standardet e higjienës", "Llojet e kimikateve"]
    },
    {
      title: "Moduli 2: Dezinfektimi & Sterilizimi",
      lessons: ["Metodat e dezinfektimit", "Sterilizimi me avull"]
    },
    {
      title: "Moduli 3: Pastrimi i Brendshëm",
      lessons: ["Pastrimi i apartamenteve", "Menaxhimi i mbetjeve"]
    },
    {
      title: "Moduli 4: Pastrimi i Jashtëm",
      lessons: ["Pastrimi i hapësirave gjelbëruese", "Makineritë profesionale"]
    }
  ],
  benefits: [
    "Certifikim për punëtor pastrimi",
    "Stazhe në ambiente profesionale",
    "Njohuri për protokollet më të fundit"
  ],
  materials: [
    "Manual pastrimi",
    "Fletëudhëzues kimikatesh",
    "Lista e check-listave"
  ],
  testimonials: [],
  faqs: [],
  featured: false,
  students: 12,
//   media: [
//   {
//     type: "image",
//     src: "/courses/sherbim-pastrimi.jpg",
//     alt: "Pamje nga kursi për pastrim profesional"
//   }
// ]

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
  image: "/courses/receptionist.jpg",
  videoSrc: "/videos/reception-video.mp4",
  description:
    "Mësoni bazat e shërbimeve pritëse, veprimeve financiare dhe menaxhimit të turneve në recepsion.",
  longDescription:
    "Ky kurs 200-orësh prezanton profesionin e recepsionistit: shërbimet pritëse dhe përcjellëse, proceset financiare në recepsion, dhe menaxhimin e ndërrimit të turnit. Përfshin teori dhe praktikë në ambientet e hotelerisë dhe zyrave ndërkombëtare.",
  instructors: [
    {
      name: "Ana Dervishi",
      role: "Instruktore Recepsioni",
      image: "/placeholder.svg?height=200&width=200&text=Instructor",
      bio: "Me 8 vite eksperiencë në menaxhimin e recepsionit në hotele dhe kompani ndërkombëtare."
    }
  ],
  curriculum: [
    {
      title: "Moduli 1: Hyrje në Profesionin e Recepsionistit",
      lessons: [
        "Roli dhe përgjegjësitë e recepsionistit",
        "Standardet e komunikimit profesional"
      ]
    },
    {
      title: "Moduli 2: Veprimet Financiare",
      lessons: [
        "Proceset e faturimit dhe pagesave",
        "Menaxhimi i transaksioneve"
      ]
    },
    {
      title: "Moduli 3: Shërbime Pritjeje dhe Përcjelljeje",
      lessons: [
        "Mirëpritja e klientëve",
        "Koordinimi i rezervimeve dhe dhënia vizitorëve"
      ]
    },
    {
      title: "Moduli 4: Ndërrimi i Turnit",
      lessons: [
        "Procedurat e dorëzimit të detyrave",
        "Raportimi dhe dokumentimi"
      ]
    }
  ],
  benefits: [
    "Certifikim për recepsionist profesionist",
    "Praktikë në ambiente hoteliere",
    "Ushtrime praktike në sisteme hotelieri"
  ],
  materials: [
    "Manual recepsioni",
    "Modelë faturash dhe raporte",
    "Udhëzues shërbimi ndaj klientit"
  ],
  testimonials: [],
  faqs: [],
  featured: false,
  students: 12,
//   media: [
//   { type: "image", src: "/courses/receptionist.jpg", alt: "Pamje nga kursi për recepsionistë" },

// ]

},
{
  id: 12,
  title: "Kurs Berber (1800 ore)",
  category: "berber",
  duration: "1800 orë",
  durationCategory: "1800 orë",
  level: "Mesatar",
  price: "",
  startDate: "",
   schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
  image: "/courses/berber-1800.jpg", noCustomCrop: true,
  videoSrc: "/videos/Kurs-berber.mp4",
  description:
    "Themeloni aftësitë e berberit nga teknikave bazë të prerjeve deri te trajtimet estetike të skalpit.",
  longDescription:
    "Ky kurs intensiv 1800-orësh mbulon historinë e berberit, ligjet dhe rregullat e kozmetologjisë, standardet profesionale dhe komunikimin me klientin. Përfshin specializime në honing, elektrikë, anatomia e kokës, trajtime fytyre, prerje male/femër, stilim, ngjyrosje dhe permanenti.",
  instructors: [
    {
      name: "Marko Prendushi",
      role: "Master Barber",
      image: "/placeholder.svg?height=200&width=200&text=Instructor",
      bio: "Me 20 vite eksperiencë në barbering klasik dhe modern në qendrat kryesore të Evropës."
    }
  ],
  curriculum: [
    {
      title: "Moduli 1: Hyrje dhe Historia e Berberit",
   
      lessons: ["Origjina e profesionit", "Evolucioni i teknikave"]
    },
    {
      title: "Moduli 2: Ligjet & Standardet Profesionale",
      lessons: ["Rregulloret kozmetologjike", "Etika dhe imazhi profesional"]
    },
    {
      title: "Moduli 3: Honing & Elektriciteti",
      lessons: ["Mprehja e gërshërëve", "Siguria elektrike"]
    },
    {
      title: "Moduli 4: Anatomia & Kujdesi i Skalpit",
      lessons: ["Struktura e kokës dhe fytyrës", "Trajtimet estetike"]
    },
    {
      title: "Moduli 5: Prerjet & Stilimi",
      lessons: [
        "Teknikat bazë: 0°, 45°, 90°, 180°",
        "Prerje meshkuj dhe femra",
        "Permanenti për kaçurrela"
      ]
    },
    {
      title: "Moduli 6: Ngjyrosja & Kolorimetri",
      lessons: ["Ngjyrat e avancuara", "Trajtimet e specializuara"]
    },
    {
      title: "Moduli 7: Masazh & Trajtime Fytyre",
    
      lessons: ["Masazhet relaksuese", "Kujdesi për lëkurën"]
    },
    {
      title: "Moduli 8: Laborator & Praktikë",
      lessons: ["Stazhe në salonë profesionalë"]
    }
  ],
  benefits: [
    "Diplomë Master Barber",
    "Praktikë gjithëpërfshirëse",
    "Akses në teknologji moderne"
  ],
  materials: [
    "Set mjetesh barberie",
    "Udhëzues ngjyrosjeje",
    "Manual anatomie për berberë"
  ],
  testimonials: [],
  faqs: [],
  featured: false,
  students: 20,
 media: [
  { type: "image", src: "/courses/berber-300.jpg", alt: "Pamje nga kursi Berber 300 orë" },
  { type: "image", src: "/courses/berber-600.jpg", alt: "Pamje nga kursi Berber 600 orë" },
  { type: "image", src: "/courses/berber-900.jpg", alt: "Pamje nga kursi Berber 900 orë" },
  { type: "image", src: "/courses/berber-1800.jpg", alt: "Pamje nga kursi Berber 1800 orë" },

]

},
{
  id: 13,
  title: "Kurs Berber (900 ore)",
  category: "berber",
  duration: "900 orë",
  durationCategory: "900 orë",
  level: "Mesatar",
  price: "",
  startDate: "",
   schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
 image: "/courses/berber-900.jpg", noCustomCrop: true,
 videoSrc: "/videos/Kurs-berber.mp4",
  description:
    "Njihuni me bazat e barbering-ut: nga historia dhe higjiena deri te prerjet klasike dhe ngjyrosja.",
  longDescription:
    "Ky kurs 900-orësh mbulon hyrjen në profesion, standardet higjienike, komunikimin me klientin, honing, anatominë e skalpit, prerjet meshkuj/femra, ngjyrosjen e flokëve dhe praktikën laboratorike në ambiente profesionale.",
  instructors: [
    {
      name: "Luan Kola",
      role: "Instruktor Barberie",
      image: "/placeholder.svg?height=200&width=200&text=Instructor",
      bio: "Me 12 vite eksperiencë në trajnimet bazë dhe advanced të barberëve."
    }
  ],
  curriculum: [
    {
      title: "Moduli 1: Hyrje & Historia",
      lessons: ["Origjina e barberit", "Roli në shoqëri"]
    },
    {
      title: "Moduli 2: Higjiena & Siguria",
      lessons: ["Sterilizimi", "Kontrolli i infeksioneve"]
    },
    {
      title: "Moduli 3: Prerjet Bazë",
      lessons: ["Prerjet klasike meshkuj", "Teknika gradual"]
    },
    {
      title: "Moduli 4: Ngjyrosja",
      lessons: ["Parimet e kolorimit", "Ngjyrat profesionale"]
    },
    {
      title: "Moduli 5: Laborator & Praktikë",
      lessons: ["Stazhe në ambiente reale"]
    }
  ],
  benefits: [
    "Diplomë për barberin bazik",
    "Praktikë në salon partner",
    "Ushtrime të integruara"
  ],
  materials: [
    "Set bazë barberie",
    "Udhëzues kolorimi",
    "Lista kontrolli higjienës"
  ],
  testimonials: [],
  faqs: [],
  featured: false,
  students: 15,
  media: [
  { type: "image", src: "/courses/berber-300.jpg", alt: "Pamje nga kursi Berber 300 orë" },
  { type: "image", src: "/courses/berber-600.jpg", alt: "Pamje nga kursi Berber 600 orë" },
  { type: "image", src: "/courses/berber-900.jpg", alt: "Pamje nga kursi Berber 900 orë" },
  { type: "image", src: "/courses/berber-1800.jpg", alt: "Pamje nga kursi Berber 1800 orë" },


]

},
{
  id: 14,
  title: "Kurs Berber (600 ore)",
  category: "berber",
  duration: "600 orë",
  durationCategory: "600 orë",
  level: "Fillestar",
  price: "",
  startDate: "",
   schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
  image: "/courses/berber-600.jpg", noCustomCrop: true,
  videoSrc: "/videos/Kurs-berber.mp4",
  description:
    "Mësoni teknikat bazë të barbering-ut: higjiena, prerjet fillestare dhe kujdesi për flokët.",
  longDescription:
    "Ky kurs 600-orësh fokusohet në hyrjen në profesion, imazhin profesional, standardet higjienike, honing, anatominë e flokëve, dhe prerjet themelore meshkuj/femra, si dhe laboratorë praktikë.",
  instructors: [
    {
      name: "Dionis Basha",
      role: "Trajner Barberie",
      image: "/placeholder.svg?height=200&width=200&text=Instructor",
      bio: "Me 5 vite eksperiencë në trajnim bazik të barberëve në akademi."
    }
  ],
  curriculum: [
    {
      title: "Moduli 1: Profesioni & Imazhi",
      lessons: ["Standardet e profesioni", "Etika dhe imazhi"]
    },
    {
      title: "Moduli 2: Higjiena & Honing",
      lessons: ["Sterilizimi", "Mprehja e mjetesh"]
    },
    {
      title: "Moduli 3: Prerjet Themelore",
      lessons: ["Prerje bazë meshkuj", "Prerje themelore femra"]
    },
    {
      title: "Moduli 4: Praktikë & Laborator",
      lessons: ["Stazhe në sallonë të trajnuar"]
    }
  ],
  benefits: [
    "Certifikim bazik barberie",
    "Praktikë laboratorike",
    "Ushtrime fit for entry-level"
  ],
  materials: [
    "Set bazik gërshërë/brisk",
    "Udhëzues higjiene",
    "Lista kontrolli barberie"
  ],
  testimonials: [],
  faqs: [],
  featured: false,
  students: 10,
  media: [
    {
      type: "image",
      src: "/placeholder.svg?height=600&width=800&text=Barber+Basics",
      alt: "Bazat e barbering-ut"
    }
  ]
},
{
  id: 15,
  title: "Kurs Berber (300 ore)",
  category: "berber",
  duration: "300 orë",
  durationCategory: "300 orë",
  level: "Fillestar",
  price: "",
  startDate: "",
   schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
  videoSrc: "/videos/Kurs-berber.mp4",
  image: "/courses/berber-300.jpg",
  description:
    "Njihuni me bazat e profesionit të berberit: historia, higjiena, prerjet fillestare dhe trajtimet estetike të skalpit.",
  longDescription:
    "Ky kurs 300-orësh mbulon hyrjen në profesion, imazhin profesional, standardet higjienike, teknikat e honing-ut, bazat elektrike, anatomia e kokës dhe skalpit, prerje meshkuj/femra, stilim, dhe ushtrime laboratorike praktike.",
  instructors: [
    {
      name: "Ardian Leka",
      role: "Instruktor Barberie",
      image: "/placeholder.svg?height=200&width=200&text=Instructor",
      bio: "Me 7 vite eksperiencë në trajnim bazik të barberëve dhe stilim flokësh."
    }
  ],
  curriculum: [
    {
      title: "Moduli 1: Historia & Imazhi Profesional",
      lessons: ["Origjina e berberit", "Etika dhe imazhi"]
    },
    {
      title: "Moduli 2: Higjiena & Praktika",
      lessons: ["Sterilizimi", "Kontrolli i infeksioneve"]
    },
    {
      title: "Moduli 3: Honing & Elektriciteti",
      lessons: ["Mprehja e mjetesh", "Parimet elektrike"]
    },
    {
      title: "Moduli 4: Anatomia & Kujdesi Skalpi",
      lessons: ["Struktura e kokës/fytyrës", "Trajtimet estetike"]
    },
    {
      title: "Moduli 5: Prerjet Bazë & Stilimi",
      lessons: [
        "Prerjet klasike meshkuj",
        "Prerjet bazë femra",
        "Teknika 0°, 45°, 90°, 180°"
      ]
    },
    {
      title: "Moduli 6: Praktikë & Laborator",
      lessons: ["Ushtrime praktike me modele reale"]
    }
  ],
  benefits: [
    "Certifikim bazik në barberi",
    "Ushtrime laboratorike",
    "Diplomë e njohur"
  ],
  materials: [
    "Set bazik barberie",
    "Udhëzues higjiene",
    "Lista kontrolli"
  ],
  testimonials: [],
  faqs: [],
  featured: false,
  students: 8,
  media: [
  { type: "image", src: "/courses/berber-300.jpg", alt: "Pamje nga kursi Berber 300 orë" },
  { type: "image", src: "/courses/berber-600.jpg", alt: "Pamje nga kursi Berber 600 orë" },
  { type: "image", src: "/courses/berber-900.jpg", alt: "Pamje nga kursi Berber 900 orë" },
  { type: "image", src: "/courses/berber-1800.jpg", alt: "Pamje nga kursi Berber 1800 orë" },


]

},
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
  image: "/courses/estetike-2100.jpg",
  videoSrc: "/videos/estetike-video.mp4",
  description:
    "Program i plotë 2100-orësh në estetikë: nga etika profesionale dhe higjiena te teknikat e avancuara estetike dhe spa.",
  longDescription:
    "Ky kurs sjell njohuritë e nevojshme për të ofruar shërbime estetike profesionale: etikë dhe mirëpritje klienti, higjiena dhe sterilizimi, këshillimi psikologjik, njohja e kimikateve, komunikimi në italisht/anglisht, IT bazë, ligjet e produktit, marketingu, terminologjia e anatomisë, trajtimet faciale (peeling, kolagjen, maska), masazhet relaksuese, trajtimet kundër celulitit, makeup permanent (lash line, lip blush, microblading), depilim/epilim, manikyr & pedikyr, SPA duar/këmbe, dhe laboratorë praktikë.",
  instructors: [
    {
      name: "Elena Marka",
      role: "Master Estetiste",
      image: "/placeholder.svg?height=200&width=200&text=Instructor",
      bio: "Me 12 vite eksperiencë në SPA dhe trajtime anti-age në klinika ndërkombëtare."
    }
  ],
  curriculum: [
    {
      title: "Moduli 1: Etika & Higjiena",
      lessons: ["Mirëpritja e klientit", "Sterilizimi profesional"]
    },
    {
      title: "Moduli 2: Këshillim & Kimikate",
      lessons: ["Këshillim psikologjik", "Kompozimi kimik i produkteve"]
    },
    {
      title: "Moduli 3: Terminologji & Anatomia",
      lessons: ["Anatomia e fytyrës/trupit", "Termat aktivë kozmetikë"]
    },
    {
      title: "Moduli 4: Peeling & Maskat",
      lessons: ["Peeling kimik", "Maska kolagjeni & enzima"]
    },
    {
      title: "Moduli 5: Masazhe & Drenazh Limfatik",
    
      lessons: ["Masazh relaksues", "Limfodrenazh fytyrë & trup"]
    },
    {
      title: "Moduli 6: Makeup Permanent",
   
      lessons: ["Lash line enhancement", "Microblading & powder brows"]
    },
    {
      title: "Moduli 7: Depilim & Epilim",
      lessons: ["Metoda me dyll", "Teknika me lazer"]
    },
    {
      title: "Moduli 8: Manikyr & Pedikyr",
    
      lessons: ["Manikyr bazik & xhel", "SPA këmbe me parafine"]
    },
    {
      title: "Moduli 9: Praktikë & Laborator",
      lessons: ["Stazhe në SPA partner", "Ushtrime praktike"]
    }
  ],
  benefits: [
    "Certifikim ndërkombëtar estetike",
    "Akses në teknologji spa",
    "Portofol profesional"
  ],
  materials: [
    "Produkte premium kozmetike",
    "Manuale teknike spa",
    "Udhëzues makeup permanent"
  ],
  testimonials: [],
  faqs: [],
  featured: true,
  students: 24,
  media: [
  { type: "image", src: "/courses/estetike-300.jpg", alt: "Pamje nga kursi Estetikë 300 orë" },
  { type: "image", src: "/courses/estetike-600.jpg", alt: "Pamje nga kursi Estetikë 600 orë" },
  { type: "image", src: "/courses/estetike-900.jpg", alt: "Pamje nga kursi Estetikë 900 orë" },
  { type: "image", src: "/courses/estetike-1500.jpg", alt: "Pamje nga kursi Estetikë 1500 orë" },
  { type: "image", src: "/courses/estetike-2100.jpg", alt: "Pamje nga kursi Estetikë 2100 orë" },

]

},
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
   image: "/courses/estetike-1500.jpg",
   videoSrc: "/videos/estetike-video.mp4",
  description:
    "Kurs 1500-orësh në estetikë me fokus në trajtimet faciale, masazhet, makeup permanent dhe teknikat spa.",
  longDescription:
    "Përfshin etika profesionale, higjiena, komunikimi me klientët ndërkombëtarë, IT bazë, ligjet kozmetike, njohja e termave anatomikë, trajtimet e fytyrës (peeling, kolagjen), masazhe relaksuese, makeup permanent, depilim, manikyr & pedikyr, dhe stazhe laboratorike.",
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
      title: "Moduli 1: Profesioni & Siguria",
      lessons: ["Etika profesionale", "Sterilizimi"]
    },
    {
      title: "Moduli 2: Terminologjia & Ligjet",
      lessons: ["Termat kozmetikë", "Rregulloret e produkteve"]
    },
    {
      title: "Moduli 3: Peeling & Trajtime Facial",
      lessons: ["Peeling kimik", "Maska kolagjeni"]
    },
    {
      title: "Moduli 4: Masazhet Relaksuese",
      lessons: ["Masazh fytyre", "Limfodrenazh"]
    },
    {
      title: "Moduli 5: Makeup Permanent & Epilim",
      lessons: ["Microblading", "Teknika epilimi"]
    },
    {
      title: "Moduli 6: Manikyr & Pedikyr",
      lessons: ["Manikyr xhel", "SPA këmbe"]
    },
    {
      title: "Moduli 7: Praktikë & Laborator",
      lessons: ["Ushtrime praktike", "Stazhe klinike"]
    }
  ],
  benefits: [
    "Diplomë estetike mesatare",
    "Stazhe në SPA & klinika",
    "Portofol trajtimesh"
  ],
  materials: [
    "Set trajtimesh facial",
    "Udhëzues makeup permanent",
    "Lista kontrolli spa"
  ],
  testimonials: [],
  faqs: [],
  featured: false,
  students: 18,
  media: [
  { type: "image", src: "/courses/estetike-300.jpg", alt: "Pamje nga kursi Estetikë 300 orë" },
  { type: "image", src: "/courses/estetike-600.jpg", alt: "Pamje nga kursi Estetikë 600 orë" },
  { type: "image", src: "/courses/estetike-900.jpg", alt: "Pamje nga kursi Estetikë 900 orë" },
  { type: "image", src: "/courses/estetike-1500.jpg", alt: "Pamje nga kursi Estetikë 1500 orë" },
  { type: "image", src: "/courses/estetike-2100.jpg", alt: "Pamje nga kursi Estetikë 2100 orë" },
 
  
]

},
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
   image: "/courses/estetike-900.jpg", noCustomCrop: true,
   videoSrc: "/videos/estetike-video.mp4",
  description:
    "Program 900-orësh në estetikë, duke mbuluar etika, trajtime faciale, masazhe dhe teknika spa fillestare.",
  longDescription:
    "Ky kurs mbulon etikën profesionale, higjienën dhe sterilizimin, këshillimin psikologjik dhe aplikimin e kozmetikës, terminologjinë anatomike, teknikat bazë të peeling-ut dhe masazhit, makeup-in profesional (extension qerpikësh, permanent sysh/buzësh/vetullash), depilimin/epilimin, manikyr-pedikyrin dhe ushtrime laboratorike brenda institucionit.",
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
      title: "Moduli 1: Etika & Higjiena",
      lessons: ["Mirëpritja e klientit", "Sterilizimi profesional"]
    },
    {
      title: "Moduli 2: Peeling & Kolagjen",
      lessons: ["Peeling kimik bazik", "Maska kolagjeni"]
    },
    {
      title: "Moduli 3: Masazhe Relaksuese",
      lessons: ["Masazh fytyre", "Limfodrenazh trupor"]
    },
    {
      title: "Moduli 4: Makeup & Epilim",
      lessons: [
        "Extension qerpikësh",
        "Makeup permanent sysh/buzësh/vetullash"
      ]
    },
    {
      title: "Moduli 5: Manikyr & Pedikyr",
      lessons: ["Manikyr xhel bazik", "Pedikyr SPA me parafine"]
    },
    {
      title: "Moduli 6: Praktikë & Laborator",
      lessons: ["Ushtrime me modele reale", "Simulime spa"]
    }
  ],
  benefits: [
    "Diplomë mesatare estetike",
    "Praktikë laboratorike",
    "Portofol trajtimesh"
  ],
  materials: [
    "Produkte kozmetike bazë",
    "Udhëzues masazh fytyre",
    "Set manikyr"
  ],
  testimonials: [],
  faqs: [],
  featured: false,
  students: 12,
media: [
  { type: "image", src: "/courses/estetike-300.jpg", alt: "Pamje nga kursi Estetikë 300 orë" },
  { type: "image", src: "/courses/estetike-600.jpg", alt: "Pamje nga kursi Estetikë 600 orë" },
  { type: "image", src: "/courses/estetike-900.jpg", alt: "Pamje nga kursi Estetikë 900 orë" },
  { type: "image", src: "/courses/estetike-1500.jpg", alt: "Pamje nga kursi Estetikë 1500 orë" },
  { type: "image", src: "/courses/estetike-2100.jpg", alt: "Pamje nga kursi Estetikë 2100 orë" },

  
]

},
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
   image: "/courses/estetike-600.jpg",
   videoSrc: "/videos/estetike-video.mp4",
  description:
    "Kurs 600-orësh në estetikë, fokus në etika, komunikim, terminologji anatomike dhe trajtime bazë facial & spa.",
  longDescription:
    "Përcakton parimet e etikës profesionale, ligjet e produktit, shfrytëzimin e IT bazë, komunikimin tregtar, terminologjinë anatomike, trajtimet bazë facial (peeling, kolagjen), masazhet relaksuese, makeup extension & permanent, depilimin/epilimin dhe ushtrime laboratorike.",
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
      title: "Moduli 1: Profesioni & Ligjet",
      lessons: ["Etika estetike", "Rregulloret e produkteve"]
    },
    {
      title: "Moduli 2: Terminologjia & Komunikimi",
      lessons: ["Termat anatomikë", "Shitja dhe marketingu"]
    },
    {
      title: "Moduli 3: Trajtimet Facial",
      lessons: ["Peeling bazik", "Maska vitaminash"]
    },
    {
      title: "Moduli 4: Masazhe & Spa",
      lessons: ["Masazh relaksues", "SPA duar dhe këmbe"]
    },
    {
      title: "Moduli 5: Praktikë & Laborator",
      lessons: ["Simulime trajtimesh", "Ushtrime me modele"]
    }
  ],
  benefits: [
    "Diplomë fillestare estetike",
    "Stazhe laboratorike",
    "Portofol bazik"
  ],
  materials: [
    "Set për peeling dhe maska",
    "Manual masazh",
    "Produkte spa"
  ],
  testimonials: [],
  faqs: [],
  featured: false,
  students: 10,
media: [
  { type: "image", src: "/courses/estetike-300.jpg", alt: "Pamje nga kursi Estetikë 300 orë" },
  { type: "image", src: "/courses/estetike-600.jpg", alt: "Pamje nga kursi Estetikë 600 orë" },
  { type: "image", src: "/courses/estetike-900.jpg", alt: "Pamje nga kursi Estetikë 900 orë" },
  { type: "image", src: "/courses/estetike-1500.jpg", alt: "Pamje nga kursi Estetikë 1500 orë" },
  { type: "image", src: "/courses/estetike-2100.jpg", alt: "Pamje nga kursi Estetikë 2100 orë" },

  
]

},
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
   image: "/courses/estetike-300.jpg", noCustomCrop: true,
   videoSrc: "/videos/estetike-video.mp4",
  description:
    "Kurs 300-orësh në estetikë bazike: etika, trajtime facial, masazhe fillestare dhe spa.",
  longDescription:
    "Fokus në introduktimin në profesion, higjienën dhe sterilizimin, komunikimin me klientët, terminologjinë estetikë, peeling-un bazik, masazhet relaksuese, depilimin/epilimin, manikyr-pedikyr bazik dhe ushtrime laboratorike.",
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
      title: "Moduli 1: Etika & Siguria",
      lessons: ["Higjiena personale", "Sterilizimi veglash"]
    },
    {
      title: "Moduli 2: Peeling & Maskat",
      lessons: ["Peeling mechanik", "Maska bazik"]
    },
    {
      title: "Moduli 3: Masazhe Relaksuese",
      lessons: ["Masazh fytyre", "Masazh trupor"]
    },
    {
      title: "Moduli 4: Manikyr & Spa",
      lessons: ["Manikyr bazik", "SPA këmbe me parafine"]
    },
    {
      title: "Moduli 5: Praktikë & Laborator",
      lessons: ["Ushtrime me modele reale", "Simulime spa"]
    }
  ],
  benefits: [
    "Certifikim bazik estetike",
    "Stazhe laboratorike",
    "Portofol fillestar"
  ],
  materials: [
    "Produkte peeling bazik",
    "Set manikyr",
    "Manual masazh"
  ],
  testimonials: [],
  faqs: [],
  featured: false,
  students: 8,
  media: [
  { type: "image", src: "/courses/estetike-300.jpg", alt: "Pamje nga kursi Estetikë 300 orë" },
  { type: "image", src: "/courses/estetike-600.jpg", alt: "Pamje nga kursi Estetikë 600 orë" },
  { type: "image", src: "/courses/estetike-900.jpg", alt: "Pamje nga kursi Estetikë 900 orë" },
  { type: "image", src: "/courses/estetike-1500.jpg", alt: "Pamje nga kursi Estetikë 1500 orë" },
  { type: "image", src: "/courses/estetike-2100.jpg", alt: "Pamje nga kursi Estetikë 2100 orë" },

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
  image: "/courses/qerpik-volume-avancuar.jpg",  noCustomCrop: true,
  videoSrc: "/videos/lashes-video-2.mp4",
  description:
    "Formim i avancuar në teknikat e zgjatimit të qerpikëve, nga 1:1 deri te Mega Volume.",
  longDescription:
    "Në këtë kurs 150-orësh do të mësoni etapat e aplikimit të zgjatimeve klasik 1:1, teknikat 2D, 3D dhe Mega Volume, higjienën dhe dezinfektimin profesional, aspektet ligjore e biznesore (licencim, marketing, orarë), konsultimin me klientin dhe personalizimin e dizajnit, anatominë e syrit dhe ciklin e rritjes së qerpikëve, si dhe praktikat laboratorike me modele reale.",
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
  benefits: [
    "Certifikim lash artist",
    "Praktikë live me modele",
    "Portofol profesional"
  ],
  materials: [
    "Qerpikë mink/silk",
    "Ngjitës premium",
    "Set pincash dhe patch-e"
  ],
  testimonials: [],
  faqs: [],
  featured: false,
  students: 20,
media: [
  { type: "image", src: "/courses/qerpik-klasik-kurs-baze.jpg", alt: "Pamje nga kursi bazë për qerpikë klasik" },

  { type: "image", src: "/courses/qerpik-volume-avancuar.jpg", alt: "Pamje nga kursi i avancuar për qerpikë volume" },

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
  image: "/courses/qerpik-klasik-kurs-baze.jpg", noCustomCrop: true,
  videoSrc:"/videos/lashes-video.mp4",
  description:
    "Kurs i shkurtër 50-orësh për të zotëruar bazat e zgjatimit të qerpikëve 1:1 dhe teknika fillestare.",
  longDescription:
    "Përfitoni njohuritë bazë të lash artistit, higjienën dhe sterilizimin, aspektet ligjore, konsultimin me klientin, analizën anatomike të syrit, teknikat 1:1 e 2D, procedurat hap-pas-hapi dhe praktikën laboratorike me modele reale, duke ndërtuar portofolin tuaj fillestar.",
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
  { type: "image", src: "/courses/qerpik-klasik-kurs-baze.jpg", alt: "Pamje nga kursi bazë për qerpikë klasik" },
 
  { type: "image", src: "/courses/qerpik-volume-avancuar.jpg", alt: "Pamje nga kursi i avancuar për qerpikë volume" },
  ]

},

// Parukeri Courses
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
  image: "/courses/parukeri-2100.jpeg",
  videoSrc: "/videos/parukeri-video.mp4",
  description:
    "Trajnim i plotë 2100-orësh në parukeri, nga higjiena bazë deri te teknikat e avancuara të prerjes, stilimit dhe ngjyrosjes.",
  longDescription:
    "Kjo program intensiv mbulon etikat dhe higjienën profesionale, komunikimin dhe këshillimin psikologjik të klientit, njohjen e produkteve kozmetike, teknikën e makeup-it për flokët, teknikat bazë dhe të avancuara të prerjes për meshkuj e femra, metodologjitë e ngjyrosjes (kolorimetri), teknikat e hair extension dhe trendet më të fundit në stilim, si dhe praktikën laboratorike me pajisje profesionale.",
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
      title: "Moduli 1: Etika & Higjiena",
      lessons: ["Higjiena profesionale", "Sterilizimi i veglave"]
    },
    {
      title: "Moduli 2: Psikologjia & Komunikimi",
      lessons: ["Këshillimi klientit", "Mirëpritja në shqip, italisht, anglisht"]
    },
    {
      title: "Moduli 3: Produkte & Nutricion",
      lessons: ["Roli i vitaminave A, E, C, D", "Komponentët biologjikë"]
    },
    {
      title: "Moduli 4: Bazat e Hairstyling",
      lessons: ["Larje & krehje", "Tendencat moderne"]
    },
    {
      title: "Moduli 5: Permanent & Extension",
      lessons: ["Teknikat klasike, spirale, volum", "Hair extension & gërsheta"]
    },
    {
      title: "Moduli 6: Kolorimetri & Kimikatet",
      lessons: ["Ngjyrat primare, sekondare, tretësore", "Formulat e çeljes dhe neutralizimit"]
    },
    {
      title: "Moduli 7: Prerje Meshkuj & Femra",
      lessons: ["Teknikat bazë (drejt, shaggy, pixie)", "Graduime, layering, teksturim"]
    },
    {
      title: "Moduli 8: Praktikë & Laborator",
      lessons: ["Simulime me modele", "Stilime finale"]
    }
  ],
  benefits: [
    "Certifikim ndërkombëtar",
    "Portofol profesional",
    "Stazhe në sallone partnerë"
  ],
  materials: [
    "Set gërshërë profesionalë",
    "Ngjyra premium dhe dekolorantë",
    "Pajisje për permanent & extension"
  ],
  testimonials: [],
  faqs: [],
  featured: false,
  students: 25,
  media: [
  { type: "image", src: "/courses/parukeri-300.jpg", alt: "Pamje nga kursi Parukeri 300 orë" },
  { type: "image", src: "/courses/parukeri-600.jpg", alt: "Pamje nga kursi Parukeri 600 orë" },
  { type: "image", src: "/courses/parukeri-900.jpg", alt: "Pamje nga kursi Parukeri 900 orë" },
  { type: "image", src: "/courses/parukeri-2100.jpg", alt: "Pamje nga kursi Parukeri 2100 orë" },

]

},
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
  image: "/courses/parukeri-2100.jpeg",
  videoSrc: "/videos/parukeri-video.mp4",
  description:
    "Trajnim i plotë 1500-orësh në parukeri, nga higjiena bazë deri te teknikat e avancuara të prerjes, stilimit dhe ngjyrosjes.",
  longDescription:
    "Kjo program intensiv mbulon etikat dhe higjienën profesionale, komunikimin dhe këshillimin psikologjik të klientit, njohjen e produkteve kozmetike, teknikën e makeup-it për flokët, teknikat bazë dhe të avancuara të prerjes për meshkuj e femra, metodologjitë e ngjyrosjes (kolorimetri), teknikat e hair extension dhe trendet më të fundit në stilim, si dhe praktikën laboratorike me pajisje profesionale.",
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
      title: "Moduli 1: Etika & Higjiena",
      lessons: ["Higjiena profesionale", "Sterilizimi i veglave"]
    },
    {
      title: "Moduli 2: Psikologjia & Komunikimi",
      lessons: ["Këshillimi klientit", "Mirëpritja në shqip, italisht, anglisht"]
    },
    {
      title: "Moduli 3: Produkte & Nutricion",
      lessons: ["Roli i vitaminave A, E, C, D", "Komponentët biologjikë"]
    },
    {
      title: "Moduli 4: Bazat e Hairstyling",
      lessons: ["Larje & krehje", "Tendencat moderne"]
    },
    {
      title: "Moduli 5: Permanent & Extension",
      lessons: ["Teknikat klasike, spirale, volum", "Hair extension & gërsheta"]
    },
    {
      title: "Moduli 6: Kolorimetri & Kimikatet",
      lessons: ["Ngjyrat primare, sekondare, tretësore", "Formulat e çeljes dhe neutralizimit"]
    },
    {
      title: "Moduli 7: Prerje Meshkuj & Femra",
      lessons: ["Teknikat bazë (drejt, shaggy, pixie)", "Graduime, layering, teksturim"]
    },
    {
      title: "Moduli 8: Praktikë & Laborator",
      lessons: ["Simulime me modele", "Stilime finale"]
    }
  ],
  benefits: [
    "Certifikim ndërkombëtar",
    "Portofol profesional",
    "Stazhe në sallone partnerë"
  ],
  materials: [
    "Set gërshërë profesionalë",
    "Ngjyra premium dhe dekolorantë",
    "Pajisje për permanent & extension"
  ],
  testimonials: [],
  faqs: [],
  featured: false,
  students: 25,
media: [
  { type: "image", src: "/courses/parukeri-300.jpg", alt: "Pamje nga kursi Parukeri 300 orë" },
  { type: "image", src: "/courses/parukeri-600.jpg", alt: "Pamje nga kursi Parukeri 600 orë" },
  { type: "image", src: "/courses/parukeri-900.jpg", alt: "Pamje nga kursi Parukeri 900 orë" },
  { type: "image", src: "/courses/parukeri-2100.jpg", alt: "Pamje nga kursi Parukeri 2100 orë" },
  
]

},
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
  image: "/courses/parukeri-900.jpg",
    videoSrc: "/videos/parukeri-video.mp4",
  description:
    "Program 900-orësh për të avancuar në prerje, stilim dhe ngjyrosje parukerie.",
  longDescription:
    "Përqendrohet në teknikat bazë të prerjes, komunikimin me klientin, njohjen e produkteve dhe ato kimike, makeup profesional për flokët, permanent dhe trendet aktuale në stilim, si dhe praktikë intensive laboratorike.",
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
      title: "Moduli 1: Hygjiena & Etika",
      lessons: ["Sterilizimi", "Protokollet profesionale"]
    },
    {
      title: "Moduli 2: Prerjet Bazë",
      lessons: ["Prerjet drejtë", "Prerjet me teksturë"]
    },
    {
      title: "Moduli 3: Permanent & Makeup Flokësh",
      lessons: ["Teknikat e permanentit", "Makeup për flokët"]
    },
    {
      title: "Moduli 4: Ngjyrosje & Kolorimetri",
      lessons: ["Llojet e bojës", "Teknikat e aplikimit"]
    },
    {
      title: "Moduli 5: Praktikë Live",
      lessons: ["Stilime me klientë", "Fotografi portofoli"]
    }
  ],
  benefits: ["Portofol profesional", "Certifikim vendor"],
  materials: ["Ngjyra dhe brushë stili", "Gërshërë dhe krehera"],
  testimonials: [],
  faqs: [],
  featured: false,
  students: 18,
media: [
  { type: "image", src: "/courses/parukeri-300.jpg", alt: "Pamje nga kursi Parukeri 300 orë" },
  { type: "image", src: "/courses/parukeri-600.jpg", alt: "Pamje nga kursi Parukeri 600 orë" },
  { type: "image", src: "/courses/parukeri-900.jpg", alt: "Pamje nga kursi Parukeri 900 orë" },
  { type: "image", src: "/courses/parukeri-2100.jpg", alt: "Pamje nga kursi Parukeri 2100 orë" },

]

},
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
 image: "/courses/parukeri-600.jpeg",
   videoSrc: "/videos/parukeri-video.mp4",
  description:
    "Kurs 600-orësh për të fituar aftësi të mesme në prerje, stilim dhe ngjyrosje.",
  longDescription:
    "Mbledh etapat kryesore të prerjes bazë, makeup për flokët, permanent të thjeshtë dhe ngjyrosje, si dhe praktikë laboratorike në sallon të pajisur.",
  instructors: [
    {
      name: "Arta Mema",
      role: "Instruktore Parukeri",
      image: "/placeholder.svg?height=200&width=200&text=Instructor",
      bio: "8 vite eksperiencë në praktykë të sallonit."
    }
  ],
  curriculum: [
    {
      title: "Moduli 1: Bazat e Prerjes",
      lessons: ["Prerjet drejtë", "Prerjet në kënde"]
    },
    {
      title: "Moduli 2: Makeup & Ngjyrosje",
      lessons: ["Makeup flokësh", "Teknikat e bojës"]
    },
    {
      title: "Moduli 3: Praktikë & Laborator",
      lessons: ["Ushtrime modelimi", "Menaxhimi salloni"]
    }
  ],
  benefits: ["Certifikim bazik", "Stazhe praktike"],
  materials: ["Set gërshërë bazik", "Ngjyra fillestare"],
  testimonials: [],
  faqs: [],
  featured: false,
  students: 12,
  media: [
  { type: "image", src: "/courses/parukeri-300.jpg", alt: "Pamje nga kursi Parukeri 300 orë" },
  { type: "image", src: "/courses/parukeri-600.jpg", alt: "Pamje nga kursi Parukeri 600 orë" },
  { type: "image", src: "/courses/parukeri-900.jpg", alt: "Pamje nga kursi Parukeri 900 orë" },
  { type: "image", src: "/courses/parukeri-2100.jpg", alt: "Pamje nga kursi Parukeri 2100 orë" },

]

},
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
 image: "/courses/parukeri-300.jpg",
   videoSrc: "/videos/parukeri-video.mp4",
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
      title: "Moduli 1: Etika & Higjiena",
      lessons: ["Protokollet bazë", "Sterilizimi"]
    },
    {
      title: "Moduli 2: Prerjet Fillestare",
      lessons: ["Prerjet drejtë", "Prerjet në 45°"]
    },
    {
      title: "Moduli 3: Stilim & Ngjyrosje",
      lessons: ["Makeup flokësh", "Teknika bojës bazë"]
    },
    {
      title: "Moduli 4: Praktikë Laborator",
      lessons: ["Ushtrime me modele", "Mirëmbajtja e veglave"]
    }
  ],
  benefits: ["Certifikim hyrës", "Portofol startues"],
  materials: ["Set gërshërë fillestare", "Ngjyra bazë"],
  testimonials: [],
  faqs: [],
  featured: false,
  students: 10,
  media: [
  { type: "image", src: "/courses/parukeri-300.jpg", alt: "Pamje nga kursi Parukeri 300 orë" },
  { type: "image", src: "/courses/parukeri-600.jpg", alt: "Pamje nga kursi Parukeri 600 orë" },
  { type: "image", src: "/courses/parukeri-900.jpg", alt: "Pamje nga kursi Parukeri 900 orë" },
  { type: "image", src: "/courses/parukeri-2100.jpg", alt: "Pamje nga kursi Parukeri 2100 orë" },
  ]

},
{
  id: 82,
  title: "Parukeri Estetike (2100 ore)",
  category: "parukeri-estetike",
  duration: "2100 orë",
  durationCategory: "2100 orë",
  level: "Profesional",
  price: "",
  startDate: "",
  schedule: "",
  image: "/courses/parukeri-2100.jpg",
  videoSrc: "",
  description:
    "Program i avancuar që përfshin parukerinë, estetiken dhe trajnim profesional për certifikim ndërkombëtar.",
  longDescription:
    "Kursi Parukeri Estetike i projektuar për të ofruar aftësi gjithëpërfshirëse në fushën e bukurisë dhe wellness-it, përfshin trajnim praktik dhe teorik në kujdesin ndaj lëkurës, flokëve, trupit dhe teknologjive moderne estetike.",
  instructors: [],
  curriculum: [
    {
      title: "Bazat & Etika",
      lessons: [
        "Ligje dhe rregullore kozmetologjie",
        "Higjena, sterilizimi",
        "Administrimi i punës në salon"
      ]
    },
    {
      title: "Estetikë & Trajtimet e Fytyrës",
      lessons: [
        "Masazh dhe pastrim fytyre",
        "Make-up & make-up permanent",
        "Peeling dhe trajtime me maska"
      ]
    },
    {
      title: "Trupi & Makineritë",
      lessons: [
        "Masazhe manuale dhe makineri",
        "Depilim, qerpikë extension, harkim vetullash"
      ]
    },
    {
      title: "Manikyr-Pedikyr & Flokët",
      lessons: [
        "Shampim, larje, prerje, stilim",
        "Ngjyrosje dhe trajtim kimik",
        "Kolorimetria e flokëve"
      ]
    },
    {
      title: "Finale",
      lessons: [
        "Praktika & Vlerësimi teorik",
        "Simulime dhe portofoli"
      ]
    }
  ],
  benefits: [],
  materials: [],
  testimonials: [],
  faqs: [],
  featured: false,
  students: 0,
media: [
  { type: "image", src: "/courses/parukeri-300.jpg", alt: "Pamje nga kursi Parukeri 300 orë" },
  { type: "image", src: "/courses/parukeri-600.jpg", alt: "Pamje nga kursi Parukeri 600 orë" },
  { type: "image", src: "/courses/parukeri-900.jpg", alt: "Pamje nga kursi Parukeri 900 orë" },
  { type: "image", src: "/courses/parukeri-2100.jpg", alt: "Pamje nga kursi Parukeri 2100 orë" },

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
  image: "/courses/tatuator.jpg", noCustomCrop: true,
  videoSrc: "/videos/tattoo-video.mp4",
  description:
    "Program 2100-orësh në artin e tatuazhit, nga historia dhe etika deri te teknikat profesionale të aplikimit dhe pastrimit.",
  longDescription:
    "Mbulon anatominë dhe fiziologjinë e lëkurës, protokollet e sterilizimit, materialet dhe makineritë e tatuazhit, stilot kryesorë (old school, realism, tribal etj.), perspektivën artistike, dizajnin në letër dhe digjital, teknikat e stencil-it dhe gjilpërës, ndërveprimin me klientin, korigjimin dhe heqjen e pigmentit, aftercare, si dhe aspektet ligjore dhe etike për studio në Shqipëri dhe BE.",
  instructors: [
    {
      name: "Luan Dervishi",
      role: "Master Tattoo Artist",
      image: "/placeholder.svg?height=200&width=200&text=Instructor",
      bio: "20+ vite eksperiencë në stilot e ndryshme të tatuazhit dhe trajnimet ndërkombëtare."
    }
  ],
  curriculum: [
    {
      title: "Moduli 1: Historia & Etika",
      lessons: ["Evolucioni i tatuazhit", "Etika profesionale"]
    },
    {
      title: "Moduli 2: Anatomia e Lëkurës",
      lessons: ["Shtresat e lëkurës", "Rigjenerimi"]
    },
    {
      title: "Moduli 3: Sterilizimi & Siguria",
      lessons: ["Protokollet e autoklavës", "Menaxhimi i mbetjeve"]
    },
    {
      title: "Moduli 4: Materialet & Pajisjet",
      lessons: ["Llojet e makinerive", "Pigmentet"]
    },
    {
      title: "Moduli 5: Stilet Artistike",
      lessons: ["Old school, realism, tribal, watercolor"]
    },
    {
      title: "Moduli 6: Dizajni & Perspektiva",
      lessons: ["Anatomia artistike", "Stencil & portofol"]
    },
    {
      title: "Moduli 7: Aplikimi Praktik",
      lessons: ["Stencil-on-body", "Vijat, mbushja, hijëzimi"]
    },
    {
      title: "Moduli 8: Aftercare & Korrektimi",
      lessons: ["Aftercare protokollet", "Heqja me laser"]
    },
    {
      title: "Moduli 9: Ligji & Licencimi",
      lessons: ["Rregulloret lokale", "Marketingu"]
    },
    {
      title: "Moduli 10: Praktika Final",
      lessons: ["Simulime në lëkurë sintetike", "Portofoli personal"]
    }
  ],
  benefits: [
    "Certifikim profesional",
    "Portofol tregtar",
    "Mundësi për studio partnerë"
  ],
  materials: [
    "Makineri profesionale",
    "Pigmente premium",
    "Gardianë sterilizimi"
  ],
  testimonials: [],
  faqs: [],
  featured: false,
  students: 12,
  media: [
  { type: "image", src: "/courses/tatuator.jpg", alt: "Pamje nga kursi Tattoo" },

]
},
{
  id: 29,
  title: "Terapia Hixhama (600 ore)",
  category: "terapia-hixhama",
  duration: "600 orë",
  durationCategory: "600 orë",
  level: "Fillestar – Mesatar",
  price: "",
  startDate: "",
   schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
  image: "/courses/hixhama-3.jpg",
  videoSrc: "/videos/hixhama-video.mp4",
  description:
    "Trajnim 600-orësh në terapia Hixhama, nga historia dhe etika deri te teknikat specifike për trup dhe fytyrë.",
  longDescription:
    "Përfshin historinë e Hixhama-s, higjienën dhe sterilizimin, terapinë e këmbëve dhe pikat kryesore të trupit e fytyrës, masazhet e kombinuara, aspektet fetare dhe kundërindikacionet, si dhe kombinimin me terapi fizike dhe energjetike.",
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
      title: "Moduli 1: Hyrje & Higjienë",
      lessons: ["Historia e terapi Hixhama", "Sterilizimi"]
    },
    {
      title: "Moduli 2: Anatomia Limfatike",
      lessons: ["Nyjet limfatike", "Fiziologjia e drenazhit"]
    },
    {
      title: "Moduli 3: Teknikat e Terapisë",
      lessons: ["Seancat për këmbë", "Seancat për fytyrë"]
    },
    {
      title: "Moduli 4: Kundërindikacionet",
      lessons: ["Sëmundjet riskuese", "Masa paraprake"]
    },
    {
      title: "Moduli 5: Kombinime Terapeutike",
      lessons: ["Terapi fizike", "Terapi energjetike"]
    },
    {
      title: "Moduli 6: Praktikë & Vlerësim",
      lessons: ["Simulime të plota", "Vlerësimi final"]
    }
  ],
  benefits: [
    "Certifikim terapeutik",
    "Aftësi për qendra shëndetësore"
  ],
  materials: [
    "Set përliyese limfatike",
    "Produktet dezinfektuese"
  ],
  testimonials: [],
  faqs: [],
  featured: false,
  students: 20,
  media: [
  { type: "image", src: "/courses/hixhama-1.jpg", alt: "Pamje nga kursi Hixhama 1" },
  { type: "image", src: "/courses/hixhama-2.jpg", alt: "Pamje nga kursi Hixhama 2" },
  { type: "image", src: "/courses/hixhama-3.jpg", alt: "Pamje nga kursi Hixhama 3" },

]
},
{
  id: 30,
  title: "Terapia Hixhama (300 ore)",
  category: "terapia-hixhama",
  duration: "300 orë",
  durationCategory: "300 orë",
  level: "Fillestar",
  price: "",
  startDate: "",
   schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
  image: "/courses/hixhama-2.jpg",
  videoSrc: "/videos/hixhama-video.mp4",
  description:
    "Kurs hyrës 300-orësh në bazat e terapi Hixhama për këmbë dhe fytyrë.",
  longDescription:
    "Mbulon historinë, higjienën, seancat bazë për këmbët dhe kokën/fytyrën, kundërindikacionet dhe kombinimet terapeutike të lehta.",
  instructors: [
    {
      name: "Elira Hoxha",
      role: "Terapeute Fillestare",
      image: "/placeholder.svg?height=200&width=200&text=Instructor",
      bio: "7 vite përvojë në terapi Hixhama."
    }
  ],
  curriculum: [
    {
      title: "Moduli 1: Historia & Higjiena",
      lessons: ["Origjina e Hixhama", "Sterilizimi bazik"]
    },
    {
      title: "Moduli 2: Terapia për Këmbët",
      lessons: ["Pikat kryesore", "Teknikat bazë"]
    },
    {
      title: "Moduli 3: Terapia për Fytyrën",
      lessons: ["Pikat e kokës", "Protokollet"]
    },
    {
      title: "Moduli 4: Kundërindikacionet",
      lessons: ["Çfarë të shmanget", "Masat paraprake"]
    },
    {
      title: "Moduli 5: Praktikë",
      lessons: ["Simulime me modele", "Vlerësimi final"]
    }
  ],
  benefits: ["Diplomë fillestare", "Ushtrime praktike"],
  materials: ["Set bazik Hixhama"],
  testimonials: [],
  faqs: [],
  featured: false,
  students: 14,
media: [
  { type: "image", src: "/courses/hixhama-1.jpg", alt: "Pamje nga kursi Hixhama 1" },
  { type: "image", src: "/courses/hixhama-2.jpg", alt: "Pamje nga kursi Hixhama 2" },
  { type: "image", src: "/courses/hixhama-3.jpg", alt: "Pamje nga kursi Hixhama 3" },

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
  image: "/courses/hixhama-1.jpg",
  videoSrc: "/videos/hixhama-video.mp4",
  description:
    "Mini-kurs 150-orësh në terapia Hixhama për fillestarë.",
  longDescription:
    "Fokus në hyrje, higjienë, seancat bazë për këmbët dhe kokën, plus kombinime terapish të thjeshta.",
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
      title: "Moduli 1: Hyrje & Sterilizim",
      lessons: ["Origjina fetare", "Sterilizimi"]
    },
    {
      title: "Moduli 2: Seancat Bazë",
      lessons: ["Të këmbët", "Të kokës"]
    },
    {
      title: "Moduli 3: Praktikë",
      lessons: ["Simulime", "Vlerësimi"]
    }
  ],
  benefits: ["Certifikim bazik", "Ushtrime praktike"],
  materials: ["Pajisje bazë Hixhama"],
  testimonials: [],
  faqs: [],
  featured: false,
  students: 8,
  media: [
  { type: "image", src: "/courses/hixhama-1.jpg", alt: "Pamje nga kursi Hixhama 1" },
  { type: "image", src: "/courses/hixhama-2.jpg", alt: "Pamje nga kursi Hixhama 2" },
  { type: "image", src: "/courses/hixhama-3.jpg", alt: "Pamje nga kursi Hixhama 3" },

]
},
// Makeup Courses
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
  image: "/courses/makeup-1200.jpg",
  videoSrc: "/videos/makeup-video.mp4",
  description:
    "Program 1500-orësh që mbulon nga etika dhe historia e make-up-it, tek teknikat profesionale, grimi special e portofoli online.",
  longDescription:
    "Ky kurs i plotë përfshin: etikën dhe historinë e make-up-it; higjienën, sterilizimin dhe sigurinë në studio; anatominë dhe fiziologjinë e lëkurës; njohjen e produkteve kozmetike dhe veglave profesionale; teknikat bazë dhe të avancuara të aplikimit të bazës, konturimit, hijeve, eyeliner-it, maskarës, vetullave, qerpikëve dhe buzëve; grimin për ditë, mbrëmje, nuse dhe evente speciale; grimin editorial e fantazi; si dhe fotografimin dhe promovimin në rrjetet sociale. Në fund, realizohet një portofol i plotë dhe vlerësim praktik e teorik.",
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
      title: "Moduli 1: Hyrje & Etika Profesionale",
      lessons: [
        "Historia dhe evolucioni i make-up-it",
        "Profili i artistit të grimit",
        "Etika profesionale dhe imazhi"
      ]
    },
    {
      title: "Moduli 2: Higjiena, Siguria & Sterilizimi",
      lessons: [
        "Higjiena personale e profesionale",
        "Pastrimi dhe dezinfektimi i veglave",
        "Menaxhimi i mbetjeve kozmetike"
      ]
    },
    {
      title: "Moduli 3: Anatomia & Fiziologjia e Lëkurës",
      lessons: [
        "Strukturat e lëkurës",
        "Llojet e lëkurës dhe reagimet"
      ]
    },
    {
      title: "Moduli 4: Produkte & Aplikimi i Tyre",
      lessons: [
        "Llojet e produkteve të make-up-it",
        "Zgjedhja sipas tipit të lëkurës",
        "Leximi i përbërësve"
      ]
    },
    {
      title: "Moduli 5: Mjetet & Aplikimi Teknik",
      lessons: [
        "Furça, sfungjerë dhe aplikues",
        "Përdorimi dhe mirëmbajtja e veglave"
      ]
    },
    {
      title: "Moduli 6: Përgatitja e Lëkurës",
      lessons: [
        "Pastrimi dhe hidratimi para grimit",
        "Aplikimi i primer-it"
      ]
    },
    {
      title: "Moduli 7: Bazë & Korrigjim",
      lessons: [
        "Fondatina: likuide, kremoze, pudër",
        "Konturim & highlighting"
      ]
    },
    {
      title: "Moduli 8: Make-up i Syve",
      lessons: [
        "Aplikimi i hijeve, eyeliner-it, maskarës",
        "Teknikat blending dhe smokey"
      ]
    },
    {
      title: "Moduli 9: Vetulla & Qerpikë",
      lessons: [
        "Formësimi dhe mbushja e vetullave",
        "Aplikimi i qerpikëve artificialë"
      ]
    },
    {
      title: "Moduli 10: Make-up i Buzëve",
      lessons: [
        "Konturimi dhe zgjedhja e ngjyrave",
        "Gloss, mat & ombre"
      ]
    },
    {
      title: "Moduli 11: Teknikat Ditor & Mbrëmje",
      lessons: [
        "Grim minimal ditor",
        "Grim glam për evente"
      ]
    },
    {
      title: "Moduli 12: Grim për Nuse & Evente",
      lessons: [
        "Teknikat afatgjata",
        "Fotogjenik dhe koordinim me floktarin"
      ]
    },
    {
      title: "Moduli 13: Artistik & Fantazi",
      lessons: [
        "Grim për teatër, Halloween, TV",
        "Stili editorial"
      ]
    },
    {
      title: "Moduli 14: Fotografimi & Rrjetet Sociale",
      lessons: [
        "Teknikat e fotografimit të punës",
        "Promovimi në Instagram & TikTok"
      ]
    },
    {
      title: "Moduli 15: Praktika & Vlerësimi Final",
      lessons: [
        "Ushtrime me modele reale",
        "Portofol profesional"
      ]
    }
  ],
  benefits: [
    "Certifikim profesional",
    "Portofol online",
    "Akses në studio partnere"
  ],
  materials: [
    "Set furçash profesionale",
    "Palette make-up premium"
  ],
  testimonials: [],
  faqs: [],
  featured: false,
  students: 0,
  media: [
  { type: "image", src: "/courses/makeup-600.jpg", alt: "Pamje nga kursi Make-up 600 orë" },
  { type: "image", src: "/courses/makeup-1200.jpg", alt: "Pamje nga kursi Make-up 1200 orë" },

]

  
},
{
  id: 33,
  title: "Make-up (600 ore)",
  category: "makeup",
  duration: "600 orë",
  durationCategory: "600 orë",
  level: "Fillestar – Mesatar",
  price: "",
  startDate: "",
   schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
  image: "/courses/makeup-600.jpg", noCustomCrop:true,
  videoSrc: "/videos/makeup-video.mp4",
  description:
    "Kurs 600-orësh për bazat e make-up-it: nga higjiena e lëkurës tek teknikat kryesore të aplikimit.",
  longDescription:
    "Mbulon etikat profesionale, sterilizimin, anatominë e lëkurës, njohjen e produkteve dhe veglave, përgatitjen dhe aplikimin e bazës, korrigjimin, grimin e syve, vetullave, qerpikëve dhe buzëve, si dhe praktikën profesionale në laborator.",
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
      title: "Moduli 1: Hyrje & Etika",
      lessons: ["Historia e make-up-it", "Sjellja me klientin"]
    },
    {
      title: "Moduli 2: Higjiena & Siguria",
      lessons: ["Sterilizimi i veglave", "Menaxhimi i mbetjeve"]
    },
    {
      title: "Moduli 3: Anatomia e Lëkurës",
      lessons: ["Llojet e lëkurës", "Reagimet"]
    },
    {
      title: "Moduli 4: Produkte & Aplikimi",
      lessons: ["Zgjedhja e produkteve", "Leximi i përbërësve"]
    },
    {
      title: "Moduli 5: Veglat & Teknikat",
      lessons: ["Furça & sfungjerë", "Mirëmbajtja"]
    },
    {
      title: "Moduli 6: Përgatitja e Lëkurës",
      lessons: ["Primer & hidratim"]
    },
    {
      title: "Moduli 7: Bazë & Korrigjim",
      lessons: ["Fondatina & konturim"]
    },
    {
      title: "Moduli 8: Grimi i Syve",
      lessons: ["Hije, eyeliner & maskara"]
    },
    {
      title: "Moduli 9: Vetullat & Qerpikët",
      lessons: ["Mbushja e vetullave", "Qerpikët artificialë"]
    },
    {
      title: "Moduli 10: Buzët",
      lessons: ["Konturim", "Gloss & mat"]
    },
    {
      title: "Moduli 11: Praktikë & Laborator",
      lessons: ["Ushtrime me modele"]
    }
  ],
  benefits: [
    "Diplomë bazike",
    "Aftësi komerciale"
  ],
  materials: [
    "Kit bazik make-up"
  ],
  testimonials: [],
  faqs: [],
  featured: false,
  students: 0,
  media: [
  { type: "image", src: "/courses/makeup-600.jpg", alt: "Pamje nga kursi Make-up 600 orë" },
  { type: "image", src: "/courses/makeup-1200.jpg", alt: "Pamje nga kursi Make-up 1200 orë" },

]

},
{
  id: 80,
  title: "Kursi Make-up (300 ore)",
  category: "makeup",
  duration: "300 orë",
  durationCategory: "300 orë",
  level: "Fillestar",
  price: "",
  startDate: "",
  schedule: "",
  image: "/courses/makeup-300.jpg",
  videoSrc: "",
  description:
    "Kurs përfshirës që mbulon bazat e make-up-it nga higjiena dhe produktet deri te teknikat e syve, buzëve dhe korrigjimi.",
  longDescription:
    "Ky kurs i make-up-it prej 300 orësh fokusohet në ndërtimin e aftësive themelore të aplikimit të grimit profesional për përdorim personal dhe të klientëve.",
  instructors: [],
  curriculum: [
    {
      title: "Hyrje në Make-up dhe Etika Profesionale",
      lessons: [
        "Historia dhe evolucioni i make-up-it",
        "Etika profesionale dhe imazhi i vetes"
      ]
    },
    {
      title: "Higjiena, Siguria dhe Sterilizimi",
      lessons: [
        "Higjiena personale dhe profesionale",
        "Pastrimi, dezinfektimi dhe sterilizimi i veglave"
      ]
    },
    {
      title: "Anatomia dhe Fiziologjia e Lëkurës",
      lessons: [
        "Strukturat e lëkurës dhe funksionet e saj",
        "Llojet e lëkurës dhe identifikimi i tyre"
      ]
    },
    {
      title: "Produktet Kozmetike dhe Aplikimi",
      lessons: [
        "Llojet e produkteve",
        "Zgjedhja sipas lëkurës"
      ]
    },
    {
      title: "Mjetet e Punës",
      lessons: [
        "Furça, sfungjerë, aplikues",
        "Përdorimi korrekt"
      ]
    },
    {
      title: "Përgatitja e Lëkurës",
      lessons: [
        "Pastrimi dhe hidratimi",
        "Aplikimi i primer-it"
      ]
    },
    {
      title: "Aplikimi i Bazës dhe Korrigjimi",
      lessons: [
        "Fondatina: likuide, kremoze, pudër",
        "Korrigjimi i defekteve"
      ]
    },
    {
      title: "Make-up i Syve",
      lessons: [
        "Forma dhe korrigjim optic",
        "Hije, eyeliner, maskara"
      ]
    },
    {
      title: "Vetulla dhe Qerpikë",
      lessons: [
        "Formësimi dhe mbushja",
        "Zgjedhja sipas fytyrës"
      ]
    },
    {
      title: "Buzët",
      lessons: [
        "Formësimi dhe konturimi",
        "Ngjyrat dhe teksturat"
      ]
    },
    {
      title: "Praktikë dhe Laborator",
      lessons: []
    }
  ],
  benefits: [],
  materials: [],
  testimonials: [],
  faqs: [],
  featured: false,
  students: 0,
 media: [
  { type: "image", src: "/courses/makeup-600.jpg", alt: "Pamje nga kursi Make-up 600 orë" },
  { type: "image", src: "/courses/makeup-1200.jpg", alt: "Pamje nga kursi Make-up 1200 orë" },

]

},
{
  id: 81,
  title: "Kursi Make-up (150 ore)",
  category: "makeup",
  duration: "150 orë",
  durationCategory: "150 orë",
  level: "Fillestar",
  price: "",
  startDate: "",
  schedule: "",
  image: "/courses/makeup-150.webp",
  videoSrc: "",
  description:
    "Kurs bazë 150 orësh për grimin profesional që përfshin njohuri themelore për make-up, higjienë dhe teknika grimi.",
  longDescription:
    "Ky kurs është i përshtatshëm për ata që duan të marrin njohuri të shpejta por të plota mbi grimin profesional. Ai mbulon të gjitha hapat kryesorë të përgatitjes dhe aplikimit të make-up-it.",
  instructors: [],
  curriculum: [
    {
      title: "Hyrje në Make-up dhe Etika Profesionale",
      lessons: [
        "Historia dhe evolucioni i make-up-it",
        "Etika profesionale dhe imazhi i vetes"
      ]
    },
    {
      title: "Higjiena, Siguria dhe Sterilizimi",
      lessons: [
        "Higjiena personale dhe profesionale",
        "Pastrimi, dezinfektimi dhe sterilizimi"
      ]
    },
    {
      title: "Anatomia dhe Fiziologjia e Lëkurës",
      lessons: [
        "Strukturat dhe funksionet",
        "Llojet e lëkurës"
      ]
    },
    {
      title: "Produktet dhe Aplikimi i Tyre",
      lessons: [
        "Produktet sipas lëkurës",
        "Zgjedhja dhe përzierja"
      ]
    },
    {
      title: "Mjetet dhe Aplikimi Teknik",
      lessons: [
        "Furça, sfungjerë, aplikues",
        "Përdorimi korrekt"
      ]
    },
    {
      title: "Përgatitja e Lëkurës",
      lessons: [
        "Hidratimi dhe primer",
        "Kontrolli i yndyrës"
      ]
    },
    {
      title: "Aplikimi i Bazës",
      lessons: [
        "Fondatina dhe korrigjim"
      ]
    },
    {
      title: "Sy, Qerpikë, Buzë",
      lessons: [
        "Teknika për sytë",
        "Qerpikët dhe vetullat",
        "Buzët"
      ]
    },
    {
      title: "Praktikë Profesionale",
      lessons: []
    }
  ],
  benefits: [],
  materials: [],
  testimonials: [],
  faqs: [],
  featured: false,
  students: 0,
  media: [
  { type: "image", src: "/courses/makeup-600.jpg", alt: "Pamje nga kursi Make-up 600 orë" },
  { type: "image", src: "/courses/makeup-1200.jpg", alt: "Pamje nga kursi Make-up 1200 orë" },

]

},


// Nail Art & Manikyr–Pedikyr Courses
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
  image: "/courses/nails-2000.jpg",
  videoSrc: "/videos/nails-video-1.mp4",
  description:
    "Kurs 1500-orësh që mbulon manikyre, pedikyre, Nail Art të avancuar dhe trajtime SPA për duar e këmbë.",
  longDescription:
    "Njohuri të plota për historinë, etikat dhe prezantimin profesional të teknikut të thonjve; anatominë e thonjve dhe higjienën; aspektet ligjore, marketingun dhe menaxhimin e sallonit; konsultimin e klientit; produktet, veglat dhe pajisjet (gel, akrilik, freza, llampa UV/LED); përgatitjen, trajtimin e kutikulave dhe formësimin; teknikat bazë të Nail Art (francez, ombre, mermer, stencil); zgjatjet artificiale (gel, akrilik, dip); trajtimet SPA me parafinë dhe masazhe estetikë; dhe përfundon me praktikë intensive dhe ndërtimin e portofolit profesional.",
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
      title: "Moduli 1: Hyrje & Etika Profesionale",
      lessons: [
        "Historia dhe evolucioni i Nail Art",
        "Etika dhe prezantimi profesional"
      ]
    },
    {
      title: "Moduli 2: Anatomia, Fiziologjia & Higjiena",
      lessons: [
        "Struktura e thonjve dhe indeve",
        "Sterilizimi dhe protokollet e sigurisë"
      ]
    },
    {
      title: "Moduli 3: Aspektet Ligjore & Biznesi",
      lessons: [
        "Licencimi dhe hapja e sallonit",
        "Marketingu, oraret dhe çmimet"
      ]
    },
    {
      title: "Moduli 4: Konsultimi me Klientin",
      lessons: [
        "Komunikimi dhe edukimi i klientit",
        "Mirëpritja në gjuhë të huaja"
      ]
    },
    {
      title: "Moduli 5: Produkte, Vegla & Pajisje",
      lessons: [
        "Gel, akrilik, pigmente, llakë",
        "Freza elektrike & llampa UV/LED"
      ]
    },
    {
      title: "Moduli 6: Përgatitja & Formësimi i Thonjve",
      lessons: [
        "Trajtimi i kutikulave",
        "Formësimi, matja dhe trajtimet paraprake"
      ]
    },
    {
      title: "Moduli 7: Teknikat Bazë të Nail Art",
      lessons: [
        "Manikyr francez & ombre",
        "Efekti mermer, stampim & pikturim dorazi"
      ]
    },
    {
      title: "Moduli 8: Zgjatjet Artificiale të Thonjve",
      lessons: [
        "Aplikim akrilik, gel & dip",
        "Forcimi dhe mirëmbajtja"
      ]
    },
    {
      title: "Moduli 9: Trajtimet SPA për Duar & Këmbë",
      lessons: [
        "Parafinë dhe masazh estetik",
        "Terapi relaksuese dhe përfitime"
      ]
    },
    {
      title: "Moduli 10: Praktika & Portfolio",
      lessons: [
        "Ushtrime me modele reale",
        "Fotografi dhe ndërtim portofoli"
      ]
    }
  ],
  benefits: [
    "Certifikim ndërkombëtar",
    "Portofol profesional",
    "Akses në sallon partner"
  ],
  materials: [
    "Komplet manikyre & pedikyre",
    "Freza elektrike & llamba UV/LED"
  ],
  testimonials: [],
  faqs: [],
  featured: false,
  students: 0,
 media: [
  { type: "image", src: "/courses/nails-500.jpg", alt: "Pamje nga kursi Nail Art – 500 orë" },
  { type: "image", src: "/courses/nails-2000.jpg", alt: "Pamje nga kursi Nail Art – 2000 orë" },
  
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
  image: "/courses/nails-500.png",
  videoSrc: "/videos/nails-video.mp4",
  description:
    "Kurs 400-orësh për bazat e manikyrit, pedikyrit dhe Nail Art teknikë bazë.",
  longDescription:
    "Mbulon historinë dhe etikat profesionale, anatomia dhe higjiena e thonjve, aspektet ligjore dhe biznesin e sallonit, konsultimin e klientit, njohjen e produkteve dhe veglave, përgatitjen e thonjve, teknikat bazë të Nail Art (francez, ombre), zgjatjet artificiale të thonjve dhe një laborator praktik me ndërtim portofoli.",
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
      title: "Moduli 1: Hyrje & Anatomia",
      lessons: ["Historia e Nail Art", "Struktura e thonjve"]
    },
    {
      title: "Moduli 2: Ligjore & Biznes",
      lessons: ["Licencimi", "Marketingu dhe menaxhimi"]
    },
    {
      title: "Moduli 3: Konsultim & Produkte",
      lessons: ["Komunikimi me klientin", "Gel, akrilik & llakë"]
    },
    {
      title: "Moduli 4: Përgatitja & Teknikat Bazë",
      lessons: ["Trajtimi i kutikulave", "Nail Art francez & ombre"]
    },
    {
      title: "Moduli 5: Zgjatjet & SPA",
      lessons: ["Aplikimi artificial", "Trajtimet me parafinë"]
    },
    {
      title: "Moduli 6: Praktika & Portfolio",
      lessons: ["Ushtrime në laborator", "Fotografi portofoli"]
    }
  ],
  benefits: ["Diplomë bazike", "Aftësi komerciale"],
  materials: ["Set bazik manikyre", "Freza & llamba UV"],
  testimonials: [],
  faqs: [],
  featured: false,
  students: 0,
  media: [
  { type: "image", src: "/courses/nails-500.jpg", alt: "Pamje nga kursi Nail Art – 500 orë" },
  { type: "image", src: "/courses/nails-2000.jpg", alt: "Pamje nga kursi Nail Art – 2000 orë" },
  
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
  image: "/courses/pedikyr-1.jpg", noCustomCrop: true,
  videoSrc: "/videos/nails-video.mp4",
  description:
    "Kurs hyrës 150-orësh për teknikën bazë të manikyrit, pedikyrit dhe Nail Art fillestare.",
  longDescription:
    "Përfshin etikat, anatomia e thonjve, aspektet ligjore, konsultimin me klientin, njohjen e produkteve bazë, përgatitjen e thonjve, teknikat bazë të Nail Art si francez dhe ombre, dhe një seancë praktike në laborator për ndërtimin e portofolit fillestar.",
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
      title: "Moduli 1: Hyrje & Etika",
      lessons: ["Historia e Nail Art", "Sjellja profesionale"]
    },
    {
      title: "Moduli 2: Anatomia & Higjiena",
      lessons: ["Struktura e thonjve", "Sterilizimi"]
    },
    {
      title: "Moduli 3: Ligjore & Konsultim",
      lessons: ["Licencimi", "Edukim klienti"]
    },
    {
      title: "Moduli 4: Përgatitja & Nail Art Bazë",
      lessons: ["Formësimi i thonjve", "Frances, ombre"]
    },
    {
      title: "Moduli 5: Praktika & Portfolio",
      lessons: ["Ushtrime në laborator", "Portofol fillestar"]
    }
  ],
  benefits: ["Diplomë hyrëse", "Certifikim bazik"],
  materials: ["Kit bazik thonjesh", "Veglë dizajni"],
  testimonials: [],
  faqs: [],
  featured: false,
  students: 0,
  media: [
  { type: "image", src: "/courses/nails-500.jpg", alt: "Pamje nga kursi Nail Art – 500 orë" },
  { type: "image", src: "/courses/nails-2000.jpg", alt: "Pamje nga kursi Nail Art – 2000 orë" },
 
]
},
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
  image: "/courses/nails-500.png",
  videoSrc: "/videos/nails-video.mp4",
  description:
    "Kurs 50-orësh për bazat e manikyrit, pedikyrit dhe Nail Art teknikë fillestare.",
  longDescription:
    "Mbulon historinë dhe etikat profesionale, anatomia dhe higjiena e thonjve, aspektet ligjore dhe biznesin e sallonit, konsultimin e klientit, njohjen e produkteve dhe veglave, përgatitjen e thonjve, teknikat bazë të Nail Art (francez, ombre), zgjatjet artificiale të thonjve dhe një laborator praktik me ndërtim portofoli.",
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
      title: "Moduli 1: Hyrje & Anatomia",
      lessons: ["Historia e Nail Art", "Struktura e thonjve"]
    },
    {
      title: "Moduli 2: Ligjore & Biznes",
      lessons: ["Licencimi", "Marketingu dhe menaxhimi"]
    },
    {
      title: "Moduli 3: Konsultim & Produkte",
      lessons: ["Komunikimi me klientin", "Gel, akrilik & llakë"]
    },
    {
      title: "Moduli 4: Përgatitja & Teknikat Bazë",
      lessons: ["Trajtimi i kutikulave", "Nail Art francez & ombre"]
    },
    {
      title: "Moduli 5: Zgjatjet & SPA",
      lessons: ["Aplikimi artificial", "Trajtimet me parafinë"]
    },
    {
      title: "Moduli 6: Praktika & Portfolio",
      lessons: ["Ushtrime në laborator", "Fotografi portofoli"]
    }
  ],
  benefits: ["Diplomë bazike", "Aftësi komerciale"],
  materials: ["Set bazik manikyre", "Freza & llamba UV"],
  testimonials: [],
  faqs: [],
  featured: false,
  students: 0,
media: [
  { type: "image", src: "/courses/nails-500.jpg", alt: "Pamje nga kursi Nail Art – 500 orë" },
  { type: "image", src: "/courses/nails-2000.jpg", alt: "Pamje nga kursi Nail Art – 2000 orë" },

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
  image: "/courses/kurs-masazh.jpg",
  videoSrc: "/videos/masazh-video.mp4",
  description:
    "Kurs i plotë 2500-orësh që mbulon të gjitha llojet kryesore të masazhit, nga relaksues dhe klasik, te terapeutik, anticeluliti, refleksologjia e plantare, aromaterapia dhe teknikat orientale.",
  longDescription:
    "Në këtë kurs intensiv 2500-orësh, do të mësoni etikat dhe higjienën profesionale në masazh; anatominë dhe fiziologjinë e sistemit muskulor, qarkullimit dhe nervor; teknikat bazë si masazhi suedez; masazhet relaksuese dhe aromaterapike; masazhet terapeutike dhe rehabilituese; balneoterapi, hidroterapi dhe krioterapi; masazhet anticelulit dhe drenazh limfatik; aromaterapi me vajra esencialë; teknikat orientale (Shiatsu, Thai, reflexology); masazhet speciale për kokë, qafë dhe fytyrë; masazhi për gratë shtatzëna; refleksologjia plantare; përdorimin e aksesoreve si hot stone, bambu dhe cupping; dhe krijimin e protokolleve individuale për klientin, përfshirë praktika intensive dhe vlerësim final.",
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
      title: "Moduli 1: Etika & Higjiena",
      lessons: [
        "Etika në marrëdhëniet me klientin",
        "Dezinfektimi i veglave dhe ambjentit"
      ]
    },
    {
      title: "Moduli 2: Anatomia & Fiziologjia",
      lessons: [
        "Strukturat muskulore, skeletore dhe nervore",
        "Qarkullimi i gjakut dhe limfës"
      ]
    },
    {
      title: "Moduli 3: Teknikat Bazë & Relaksuese",
      lessons: [
        "Masazhi klasik (suedez)",
        "Masazhi relaksues & aromaterapi"
      ]
    },
    {
      title: "Moduli 4: Terapeutik & Rehabilitues",
      lessons: [
        "Trajtimi i dhimbjeve muskulore",
        "Rehabilitimi pas lëndimeve"
      ]
    },
    {
      title: "Moduli 5: Balneoterapi & Hidroterapi",
      lessons: [
        "Termoterapia & krioterapia",
        "Inhaloterapia eterike"
      ]
    },
    {
      title: "Moduli 6: Anticelulit & Drenazh Limfatik",
      lessons: [
        "Trajtimi i celulitit",
        "Drenazhi manual limfatik"
      ]
    },
    {
      title: "Moduli 7: Aromaterapi & Vajra Esencialë",
      lessons: [
        "Përgatitja e kompozimeve vajrore",
        "Përdorimi terapeutik"
      ]
    },
    {
      title: "Moduli 8: Teknikat Orientale",
      lessons: [
        "Shiatsu & Thai",
        "Refleksologjia plantare"
      ]
    },
    {
      title: "Moduli 9: Specialitete & Aksesore",
      lessons: [
        "Masazhi kokë-qafë-fytyrë",
        "Hot Stone, cupping, bambu"
      ]
    },
    {
      title: "Moduli 10: Planifikim & Praktikë",
      lessons: [
        "Krijimi protokolli individual",
        "Praktikë me klientë realë"
      ]
    }
  ],
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
  { type: "image", src: "/courses/masazh-klasik.jpg", alt: "Pamje nga kursi Masazh Klasik" },
  { type: "image", src: "/courses/masazh-anticelulit.jpg", alt: "Pamje nga trajnimet anticelulit" },
  { type: "image", src: "/courses/kurs-masazh.jpg", alt: "Pamje nga kursi masazhi" },

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
  image: "/courses/masazh-klasik.jpg",
  videoSrc: "/videos/masazh-video.mp4",
  description:
    "Kurs 150-orësh që mbulon masazhin klasik suedez, relaksues, aromaterapi dhe teknikat bazë orientale (Shiatsu, Thai, reflexology).",
  longDescription:
    "Përfshin etikat dhe higjienën në masazh; anatomia dhe fiziologjia për masazh; teknikat bazë të masazhit klasik dhe relaksues; aromaterapi me vajra esencialë; dhe hyrjen në masazhet orientale si Shiatsu, Thai dhe refleksologjia plantare, duke përfshirë praktikat laboratorike.",
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
      title: "Moduli 1: Etika & Higjiena",
      lessons: ["Etika profesionale", "Sterilizimi bazik"]
    },
    {
      title: "Moduli 2: Anatomia për Masazh",
      lessons: ["Strukturat muskulore", "Ndikimi në trup"]
    },
    {
      title: "Moduli 3: Masazh Klasik & Relaksues",
      lessons: ["Suedez", "Aromaterapi"]
    },
    {
      title: "Moduli 4: Teknikat Orientale",
      lessons: ["Shiatsu & Thai", "Refleksologjia plantare"]
    },
    {
      title: "Moduli 5: Praktikë & Vlerësim",
      lessons: ["Laborator", "Certifikim"]
    }
  ],
  benefits: ["Certifikim bazik", "Aromaterapi integruese"],
  materials: ["Set aromaterapie", "Vajra esencialë"],
  testimonials: [],
  faqs: [],
  featured: false,
  students: 0,
  media: [
  { type: "image", src: "/courses/masazh-klasik.jpg", alt: "Pamje nga kursi Masazh Klasik" },
  { type: "image", src: "/courses/masazh-anticelulit.jpg", alt: "Pamje nga trajnimet anticelulit" },
  { type: "image", src: "/courses/kurs-masazh.jpg", alt: "Pamje nga kursi masazhi" },

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
  image: "/courses/masazh-anticelulit.jpg",
  videoSrc: "/videos/masazh-video.mp4",
  description:
    "Kurs 150-orësh fokusuar në masazhet terapeutike, kurative, anticelulit dhe refleksologjinë plantare.",
  longDescription:
    "Mbulon etikat dhe higjienën në masazh; anatominë dhe fiziologjinë relevante; masazhet terapeutike për dhimbje dhe lëndime; balneoterapi dhe krioterapi; masazhet anticelulit dhe drenazh limfatik; dhe refleksologjinë plantare me harta dhe teknika manuale, përfshirë laboratorin praktik.",
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
      title: "Moduli 1: Etika & Anatomia",
      lessons: ["Higjiena profesionale", "Strukturat muskulore"]
    },
    {
      title: "Moduli 2: Masazh Terapeutik & Kurativ",
      lessons: ["Rehabilitimi pas lëndimeve", "Hidroterapi & balneoterapi"]
    },
    {
      title: "Moduli 3: Anticelulit & Drenazh",
      lessons: ["Tonifikimi i lëkurës", "Drenazhi limfatik"]
    },
    {
      title: "Moduli 4: Refleksologji Plantare",
      lessons: ["Harta refleksogjene", "Teknikat manuale"]
    },
    {
      title: "Moduli 5: Praktikë & Certifikim",
      lessons: ["Laborator praktik", "Provimi teorik dhe praktik"]
    }
  ],
  benefits: ["Trajnim specializues", "Diplomë klinike"],
  materials: ["Set terapeutik masazhi", "Aksesore SPA"],
  testimonials: [],
  faqs: [],
  featured: false,
  students: 0,
  media: [
  { type: "image", src: "/courses/masazh-klasik.jpg", alt: "Pamje nga kursi Masazh Klasik" },
  { type: "image", src: "/courses/masazh-anticelulit.jpg", alt: "Pamje nga trajnimet anticelulit" },
  { type: "image", src: "/courses/kurs-masazh.jpg", alt: "Pamje nga kursi masazhi" },

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
  image: "/courses/estetike-600.jpg",
  videoSrc: "/videos/estetike-video.mp4",
  description:
    "Kurs 600-orësh për trajtimet profesioniste estetike të fytyrës, nga diagnostikimi te teknikat bazë dhe të avancuara.",
  longDescription:
    "Përfshin etikat dhe higjienën në trajtimet e fytyrës; anatominë dhe fiziologjinë e lëkurës; diagnostikimin dhe konsultimin me klientin; përdorimin e produkteve kozmetike dhe përbërësve aktivë; procedurat bazë (pastrim, masazh, maska); trajtime të avancuara (peeling, mikrodermabrazion, serume, maska) dhe pajisjet moderne (vapozon, roller, UV); kujdesin për lëkurë problematike; anti-aging dhe lifting; trajtimet për zona specifike; programe sezonale; si dhe praktikë intensive dhe vlerësim final.",
  instructors: [
    {
      name: "Dr. Elira Berisha",
      role: "Specialiste Estetike & Trainer",
      image: "/placeholder.svg?height=200&width=200&text=Instructor",
      bio: "12 vite përvojë në trajtimet estetike dhe teknikat moderne të fytyrës."
    }
  ],
  curriculum: [
    { title: "Moduli 1: Etika & Higjiena", lessons: ["Etika profesionale", "Sterilizimi i mjeteve"] },
    { title: "Moduli 2: Anatomia & Fiziologjia", lessons: ["Strukturat e lëkurës", "Shtresat dhe gjëndrat"] },
    { title: "Moduli 3: Diagnostikim & Konsultim", lessons: ["Analiza e lëkurës", "Kartela e klientit"] },
    { title: "Moduli 4: Produkte & Përbërës Aktivë", lessons: ["Klasifikimi i produkteve", "Alergjitë"] },
    { title: "Moduli 5: Trajtimi Bazë", lessons: ["Pastrimi dhe tonifikimi", "Masazhi dhe maskat"] },
    { title: "Moduli 6: Trajtimet Avancuara", lessons: ["Peeling kimik & mekanik", "Microdermabrasion & serume"] },
    { title: "Moduli 7: Pajisje Estetike",
    lessons: ["Vapozon & roller", "Lampa UV & rigjenerimi"] },
    { title: "Moduli 8: Lëkurë Problem", lessons: ["Akne & komedone", "Kuperozë & ndjeshmëri"] },
    { title: "Moduli 9: Anti-Aging & Lifting", lessons: ["Trajtimet rigjeneruese", "Drenazh limfatik fytyre"] },
    { title: "Moduli 10: Zona Speciale", lessons: ["Trajtimi i syve", "Buzët & dekolteja"] },
    { title: "Moduli 11: Trajtimet Sezonale", lessons: ["Dimër & tharja", "Verë & pas diellit"] },
    { title: "Moduli 12: Praktikë & Certifikim", lessons: ["Ushtrime me klientë", "Provimi teorik/praktik"] }
  ],
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
  { type: "image", src: "/courses/estetike-300.jpg", alt: "Pamje nga kursi Estetikë 300 orë" },
  { type: "image", src: "/courses/estetike-600.jpg", alt: "Pamje nga kursi Estetikë 600 orë" },
  { type: "image", src: "/courses/estetike-900.jpg", alt: "Pamje nga kursi Estetikë 900 orë" },
  { type: "image", src: "/courses/estetike-1500.jpg", alt: "Pamje nga kursi Estetikë 1500 orë" },
  { type: "image", src: "/courses/estetike-2100.jpg", alt: "Pamje nga kursi Estetikë 2100 orë" },

]

},
{
  id: 41,
  title: "Kursi Makeup Permanent (1200 ore)",
  category: "makeup-permanent-pmu",
  duration: "1200 orë",
  durationCategory: "1200 orë",
  level: "Mesatar – Avancuar",
  price: "",
  startDate: "",
   schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
  image: "/courses/makeup-permanent.jpg",
  videoSrc: "/videos/permanent-video.mp4",
  description:
    "Kurs i plotë 1200-orësh në teknikat e makeup-it permanent për fytyrë, vetulla, sy dhe buzë, duke përfshirë edhe areolat dhe skalpin.",
  longDescription:
    "Mbulohet histori dhe parimet e PMU; anatomia dhe fiziologjia e lëkurës; etikat dhe higjiena; teoria e ngjyrave dhe pigmentëve; mjetet dhe pajisjet; konsultimi dhe projektimi i formave; teknikat e microblading, nano-brows, eyeliner klasik, full lip dhe rekonstruksion areola; mikropigmentimi skalpi dhe trajtime 3D; korrigjimet, heqja me laser; aspektet ligjore, etike dhe marketingu; dhe praktikë intensive me vlerësim final.",
  instructors: [
    {
      name: "Valbona Rexhepi",
      role: "Artist PMU & Trainer",
      image: "/placeholder.svg?height=200&width=200&text=Instructor",
      bio: "13 vite eksperiencë në permanent makeup dhe mikropigmentim estetik."
    }
  ],
  curriculum: [
    { title: "Moduli 1: Intro & Historia PMU",
     lessons: ["Evolucioni i PMU", "Parimet bazë"] },
    { title: "Moduli 2: Anatomia & Lëkura", lessons: ["Shtresat e lëkurës", "Kolagjeni & elastina"] },
    { title: "Moduli 3: Etika & Higjiena", lessons: ["Sterilizimi", "Parandalimi infeksionesh"] },
    { title: "Moduli 4: Teoria e Ngjyrave", lessons: ["Pigmentët dhe nuancat", "Përzierja"] },
    { title: "Moduli 5: Mjetet & Pajisjet",
     lessons: ["Makineritë & kartidgët", "Aksesoret"] },
    { title: "Moduli 6: Konsultim & Projektim", lessons: ["Skicimi i formave", "Analiza fytyre"] },
    { title: "Moduli 7: Teknikat e Vetullave", lessons: ["Microblading", "Nano-brows"] },
    { title: "Moduli 8: Teknikat e Syrit", lessons: ["Eyeliner klasik", "Eyeliner me hije"] },
    { title: "Moduli 9: Teknikat e Buzëve", lessons: ["Lip blush", "Full lip efekt"] },
    { title: "Moduli 10: Areola & Scalp", lessons: ["Micropigmentim areola", "Scalp 3D"] },
    { title: "Moduli 11: Korrektim & Heqje", lessons: ["Heqja me laser", "Neutralizim ngjyrash"] },
    { title: "Moduli 12: Ligjore & Marketing", lessons: ["Certifikime", "Portofol & promovim"] },
    { title: "Moduli 13: Praktikë & Certifikim", lessons: ["Seanca praktike", "Provimi final"] }
  ],
  benefits: [
    "Diplomë PMU e plotë",
    "Portofol me procedura të ndryshme",
    "Aftësi për klinika dhe studio"
  ],
  materials: [
    "Makineri PMU & pigmentë profesionalë",
    "Aksesore sterile"
  ],
  testimonials: [],
  faqs: [],
  featured: false,
  students: 0,
  media: [
  { type: "image", src: "/courses/makeup-permanent.jpg", alt: "Pamje nga kursi Make-up Permanent" },

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
  image: "/courses/pmu-vetullat.jpg",
   videoSrc: "/videos/permanent-video.mp4",
  description:
    "Kurs 150-orësh në teknikën e microblading dhe nano-brows, nga teoria e pigmentëve te praktika laboratorike.",
  longDescription:
    "Përfshin historinë dhe parimet e PMU për vetulla; anatominë e lëkurës; etikat dhe higjienën; teoria e ngjyrave; mjetet dhe kartridgët; konsultimin dhe hartimin e formës së vetullave; teknikën microblading dhe nano-brows; korrigjimet dhe heqjen e pigmentëve; aspektet ligjore dhe marketingun; dhe praktikë intensive me certifikim.",
  instructors: [
    {
      name: "Eriona Kola",
      role: "Specialiste PMU Vetulla",
      image: "/placeholder.svg?height=200&width=200&text=Instructor",
      bio: "8 vite si artist PMU vetullash dhe trajner."
    }
  ],
  curriculum: [
    { title: "Moduli 1: Intro & Anatomia", lessons: ["Historia PMU", "Shtresat e lëkurës"] },
    { title: "Moduli 2: Etika & Higjiena", lessons: ["Sterilizimi", "Siguria"] },
    { title: "Moduli 3: Teoria e Pigmentëve", lessons: ["Ngjyrat & nuancat"] },
    { title: "Moduli 4: Mjetet PMU",
     lessons: ["Makineritë & kartridgët"] },
    { title: "Moduli 5: Konsultim & Projektim", lessons: ["Skica vetullash"] },
    { title: "Moduli 6: Microblading & Nano", lessons: ["Teknika manuale & digjitale"] },
    { title: "Moduli 7: Korrektim & Heqje", lessons: ["Heqja me laser", "Neutralizim ngjyrash"] },
    { title: "Moduli 8: Ligjore & Marketing", lessons: ["Certifikime", "Portofol"] },
    { title: "Moduli 9: Praktikë & Certifikim", lessons: ["Seanca praktike", "Vlerësim final"] }
  ],
  benefits: ["Diplomë specializimi", "Portofol i optimizuar vetullash"],
  materials: ["Set microblading", "Pigmentë profesionalë"],
  testimonials: [],
  faqs: [],
  featured: false,
  students: 0,
  media: [
  { type: "image", src: "/courses/pmu-vetullat.jpg", alt: "Pamje nga trajnimet për vetulla PMU" },


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
  image: "/courses/pmu-eyeliner.jpg",
 videoSrc: "/videos/permanent-video.mp4",
   noCustomCrop: true,
  description:
    "Kurs 150-orësh në teknikat e eyeliner-it permanent, nga teoria e pigmentëve te aplikimi praktik.",
  longDescription:
    "Përfshin hyrjen në PMU për sy; anatominë e lëkurës; etikat dhe higjienën; teoria e ngjyrave; mjetet dhe kartridgët; konsultimin dhe dizajnin e vështrimit; teknikën e eyeliner klasik dhe me hije; korrigjimet dhe heqjen e pigmentëve; aspektet ligjore dhe marketingun; dhe vlerësimin praktik për certifikim.",
  instructors: [
    {
      name: "Jonida Krasniqi",
      role: "Artist PMU Sy",
      image: "/placeholder.svg?height=200&width=200&text=Instructor",
      bio: "7 vite përvojë në permanent eyeliner dhe trajnim."
    }
  ],
  curriculum: [
    { title: "Moduli 1: Intro & Anatomia", lessons: ["Evolucioni PMU", "Shtresat e lëkurës"] },
    { title: "Moduli 2: Etika & Higjiena", lessons: ["Sterilizimi", "Siguria"] },
    { title: "Moduli 3: Teoria e Ngjyrave", lessons: ["Pigmentët & nuancat"] },
    { title: "Moduli 4: Pajisjet PMU",
     lessons: ["Makineritë & kartridgët"] },
    { title: "Moduli 5: Konsultim & Project", lessons: ["Skica syz"] },
    { title: "Moduli 6: Teknikat Eyeliner", lessons: ["Eyeliner klasik", "Eyeliner me hije"] },
    { title: "Moduli 7: Korrektim & Heqje", lessons: ["Heqja me laser"] },
    { title: "Moduli 8: Ligjore & Marketing", lessons: ["Certifikime", "Portofol"] },
    { title: "Moduli 9: Praktikë & Certifikim", lessons: ["Seanca praktike", "Provimi final"] }
  ],
  benefits: ["Certifikim eyeliner", "Aftësi dizajni vështrimi"],
  materials: ["Makineri & pigmentë PMU"],
  testimonials: [],
  faqs: [],
  featured: false,
  students: 0,
  media: [
  { type: "image", src: "/courses/pmu-eyeliner.jpg", alt: "Pamje nga trajnimet për eyeliner PMU" },


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
  image: "/courses/pmu-buza.jpg",
   videoSrc: "/videos/permanent-video.mp4",
  description:
    "Kurs 150-orësh në teknikën e lip blush, nga pigmentët te dizajni dhe aplikimi praktik i buzëve permanente.",
  longDescription:
    "Mbulon hyrjen në PMU buzësh; anatominë e lëkurës; etikat dhe higjienën; teori ngjyrash dhe përzierje pigmentesh; mjetet dhe kartridgët; konsultimin dhe hartimin e formës së buzëve; teknikën e lip blush dhe full lip; korrigjimet dhe heqjen me laser; aspektet ligjore dhe marketingun; si dhe praktikat laboratorike dhe provimin për certifikim.",
  instructors: [
    {
      name: "Ardita Leka",
      role: "Artist PMU Buzësh",
      image: "/placeholder.svg?height=200&width=200&text=Instructor",
      bio: "6 vite specializim në permanent lip blush dhe konturim buzësh."
    }
  ],
  curriculum: [
    { title: "Moduli 1: Intro & Anatomia", lessons: ["Evolucioni PMU", "Shtresat e lëkurës"] },
    { title: "Moduli 2: Etika & Higjiena", lessons: ["Sterilizimi", "Siguria"] },
    { title: "Moduli 3: Teoria e Pigmentëve", lessons: ["Ngjyrat & përzierja"] },
    { title: "Moduli 4: Pajisjet PMU", lessons: ["Makineritë & kartridgët"] },
    { title: "Moduli 5: Konsultim & Dizajn", lessons: ["Formësimi i buzëve"] },
    { title: "Moduli 6: Lip Blush & Full Lip", lessons: ["Teknika bazë & e avancuar"] },
    { title: "Moduli 7: Korrektim & Heqje", lessons: ["Heqja me laser"] },
    { title: "Moduli 8: Ligjore & Marketing", lessons: ["Certifikime", "Portofol"] },
    { title: "Moduli 9: Praktikë & Certifikim", lessons: ["Seanca praktike", "Vlerësim final"] }
  ],
  benefits: ["Certifikim buzësh", "Aftësi konturimi profesional"],
  materials: ["Pigmentë lip blush", "Makineri PMU"],
  testimonials: [],
  faqs: [],
  featured: false,
  students: 0,
  media: [
   { type: "image", src: "/courses/pmu-buza.jpg", alt: "Pamje nga trajnimet për buzë PMU" },


]
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
  image: "/courses/fashon-design-2.jpg", noCustomCrop: true,
  videoSrc: "/videos/fashion-video.mp4",
  description:
    "Kurs 2100-orësh në teknikat e artizanatit të modës së lartë: nga historia e modës te drapeimi, moulage dhe krijimi koleksionesh haute couture.",
  longDescription:
    "Përfshin historinë e modës dhe evoluimin kulturor; zhvillimin e stilit personal dhe garderobës kapsule; organizimin profesional të atelies; njohuritë fillestare mbi pëlhurat; matjen dhe kartamodellimin bazë; teknikat e qepjes mekanike dhe manuale; realizimin e prototipeve dhe prova e parë; drapeimin dhe moulage në manekin; skicimin dhe zhvillimin e koleksionit; standardet e haute couture; punimin e pëlhurave të avancuara dhe finiturave luksoze; krijimin e fustaneve të mbrëmjes dhe nuses me detaje artizanale; qendisjen Luneville dhe aplikime 3D; provat ndërmjetëse dhe finale; dhe prezantimin publik të koleksionit për portofol profesional.",
  instructors: [
    {
      name: "Elena Petrova",
      role: "Master Sarta & Trainer",
      image: "/placeholder.svg?height=200&width=200&text=Instructor",
      bio: "15 vite përvojë në haute couture dhe qepje artizanale në stilin e modës së lartë."
    }
  ],
  curriculum: [
    { title: "Moduli 1: Historia & Bazat", lessons: ["Historia e modës (antikiteti–shek. XXI)", "Evolucioni dhe ndikimet kulturore"] },
    { title: "Moduli 2: Stili Personal", lessons: ["Estetika dhe identiteti", "Garderoba kapsule"] },
    { title: "Moduli 3: Organizimi Atelie", lessons: ["Etika & higjiena në atelie", "Menaxhimi i veglave"] },
    { title: "Moduli 4: Pëlhurat Fillestare", lessons: ["Natyrale vs sintetike", "Leximi i etiketave"] },
    { title: "Moduli 5: Matja & Kartamodellimi", lessons: ["Teknikat e matjes", "Tabela e masave"] },
    { title: "Moduli 6: Kartamodellim Bazë", lessons: ["Modeli fustan/bluzë/pantallona", "Transformime të thjeshta"] },
    { title: "Moduli 7: Qepje Mekanike & Manuale", lessons: ["Përdorimi i makinës së qepjes", "Cepat, kthesat, palosjet"] },
    { title: "Moduli 8: Prototipi & Provat", lessons: ["Muslinë prova", "Korrigjime bazë"] },
    { title: "Moduli 9: Moulage & Drape", lessons: ["Drapeim në manekin", "Krijimi volumeve"] },
    { title: "Moduli 10: Dizajn Koleksioni", lessons: ["Skicim dorazi/digjital", "Tema & inspirimi"] },
    { title: "Moduli 11: Haute Couture", lessons: ["Standarde ndërkombëtare", "Shtëpitë kryesore"] },
    { title: "Moduli 12: Pëlhura Avancuara", lessons: ["Mëndafshi, organza, guipure", "Përpunim manual"] },
    { title: "Moduli 13: Finitura Luksoze", lessons: ["Invisible hem & pick stitch", "Detajet e brendshme"] },
    { title: "Moduli 14: Fustanet e Mbrëmjes & Nuses", lessons: ["Strukturë & tyl", "Adaptimi trupor"] },
    { title: "Moduli 15: Qendisje & Aplikime", lessons: ["Luneville grepi", "Perla & fjongo 3D"] },
    { title: "Moduli 16: Prova Finale", lessons: ["Prova e parë, e dytë, finale", "Komunikimi me klientin"] },
    { title: "Moduli 17: Prezantimi Koleksioni", lessons: ["Fotografi editorial", "Ekspozita & panaire"] },
    { title: "Moduli 18: Praktikë & Portfolio", lessons: ["Ushtrime praktike", "Ndërtimi portofoli"] }
  ],
  benefits: [
    "Aftësi haute couture artizanale",
    "Portofol koleksioni personal",
    "Certifikim ndërkombëtar"
  ],
  materials: [
    "Set pëlhurash bazë",
    "Vegla qepjeje profesionale"
  ],
  testimonials: [],
  faqs: [],
  featured: false,
  students: 0,
  media: [
  { type: "image", src: "/courses/fashon-design.jpg", alt: "Pamje nga kursi Fashion Design" },
  { type: "image", src: "/courses/fashon-design-2.jpg", alt: "Pamje shtesë nga kursi Fashion Design" },
  { type: "image", src: "/courses/fashon-design-3.jpg", alt: "Më shumë pamje nga Fashion Design" },

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
  image: "/courses/fashon-design.jpg", noCustomCrop: true,
  videoSrc: "/videos/fashion-video.mp4",
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
  { type: "image", src: "/courses/fashon-design.jpg", alt: "Pamje nga kursi Fashion Design" },
  { type: "image", src: "/courses/fashon-design-2.jpg", alt: "Pamje shtesë nga kursi Fashion Design" },
  { type: "image", src: "/courses/fashon-design-3.jpg", alt: "Më shumë pamje nga Fashion Design" },

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
  image: "/courses/fashon-design-2.jpg", noCustomCrop: true,
  videoSrc: "/videos/fashion-video.mp4",
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
  { type: "image", src: "/courses/fashon-design.jpg", alt: "Pamje nga kursi Fashion Design" },
  { type: "image", src: "/courses/fashon-design-2.jpg", alt: "Pamje shtesë nga kursi Fashion Design" },
  { type: "image", src: "/courses/fashon-design-3.jpg", alt: "Më shumë pamje nga Fashion Design" },

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
  image: "/courses/fashon-design-3.jpg",
  videoSrc: "/videos/fashion-video.mp4",
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
  { type: "image", src: "/courses/fashon-design.jpg", alt: "Pamje nga kursi Fashion Design" },
  { type: "image", src: "/courses/fashon-design-2.jpg", alt: "Pamje shtesë nga kursi Fashion Design" },
  { type: "image", src: "/courses/fashon-design-3.jpg", alt: "Më shumë pamje nga Fashion Design" },

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
  image: "/courses/fashion-industriale.jpg",
  videoSrc: "/videos/fashion-industrial-video.mp4",
  description:
    "Kurs 600-orësh në teknologjinë e prerjes dhe gradimin industrial të modeleve.",
  longDescription:
    "Përqendrohet te teknikat e lay-planning për prerje efikase, gradimi dixhital i shablloneve në CAD, konstruimi i veshjeve standarde dhe kontrolli i cilësisë industriale, me praktikë profesionale dhe vlerësim final.",
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
  { type: "image", src: "/courses/fashion-industriale.jpg", alt: "Pamje nga kursi Fashion Industriale" },

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
  image: "/courses/fashion-tradicionale.jpg",
  description:
    "Kurs 600-orësh për veshje artizanale: nga traditat folklorike te koleksionet moderne me frymëzim kulturor.",
  longDescription:
    "Mbulon historinë dhe origjinën e veshjeve tradicionale, simbolikat kulturore dhe teknikën e qepjes artizanale; punimin me dorë të motiveve etnike; përzgjedhjen e materialeve natyrale dhe dizajnimin e modeleve me frymëzim folklorik; si dhe realizimin e një mini-koleksioni artizanal me prezantim profesional dhe dokumentim fotografik.",
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
  { type: "image", src: "/courses/fashion-tradicionale.jpg", alt: "Pamje nga kursi Fashion Tradicionale" }
]

},
  {
    "id": 51,
    "title": "Pajisje për Stimulimin e Kolagjenit (Dermapen) – 150 ore",
    category: "pajisjet-e-estetikes",
    "duration": "150 orë",
    "durationCategory": "150 orë",
    "level": "Mesatar",
    "price": "",
    "startDate": "",
    "schedule": "E Hënë - E Premte (10:00 - 14:00)",
    image: "/pajisje/dermapen.jpg", noCustomCrop: true,
    "description": "Kurs 150-orësh për përdorimin profesional të Dermapen për stimulim kolagjeni dhe rinovim lëkurë.",
    "longDescription": "Mbulon anatominë dhe fiziologjinë e lëkurës, parimet biologjike të rigjenerimit me mikronjëra, parametrat dhe protokollet e trajtimit, higjienën dhe sterilizimin e instrumenteve, si dhe menaxhimin e efekteve anësore dhe aspektet ligjore.",
    "instructors": [
      {
        "name": "Dr. Eda Basha",
        "role": "Trainer Estetikë",
        "image": "/placeholder.svg?height=200&width=200&text=Instructor",
        "bio": "Specialiste me 8 vite eksperiencë në trajtime me mikronjëra dhe stimulim kolagjeni."
      }
    ],
    "curriculum": [
      {
        "title": "Moduli 1: Anatomia & Fiziologjia e Lëkurës",
        "lessons": [
          "Strukturat e shtresave epidermë/dermë/hipodermë",
          "Roli i fibroblasteve dhe kolagjenit"
        ]
      },
      {
        "title": "Moduli 2: Parimet e Rigjenerimit me Dermapen",
        "lessons": [
          "Mekanizmi biologjik i stimulimit kolagjenik",
          "Faktorët që përmirësojnë sintezën e kolagjenit"
        ]
      },
      {
        "title": "Moduli 3: Parametrat & Protokollet e Seancës",
        "lessons": [
          "Zgjedhja e gjatësi së gjilpërës, thellësi, frekuencë",
          "Rregullimi i parametrave sipas zonës (fytyrë, dekolte)"
        ]
      },
      {
        "title": "Moduli 4: Higjiena & Sterilizimi",
        "lessons": [
          "Protokollet e pastrimit para/pas trajtimit",
          "Metodat e verifikuara të sterilizimit"
        ]
      },
      {
        "title": "Moduli 5: Trajtimet Estetike",
        "lessons": [
          "Trajtimi i rrudhave sipërfaqësore dhe të thella",
          "Përmirësimi i akneve dhe gjurmëve post-akne"
        ]
      },
      {
        "title": "Moduli 6: Siguria & Menaxhimi i Rreziqeve",
        "lessons": [
          "Kundërindikacionet absolute dhe relative",
          "Parandalimi i hiperpigmentimit dhe ënjtjes"
        ]
      },
      {
        "title": "Moduli 7: Etika & Ligjet",
        "lessons": [
          "Rregulloret mbi të dhënat personale",
          "Të drejtat e operatorit dhe klientit"
        ]
      },
      {
        "title": "Moduli 8: Praktika & Laborator",
        "lessons": [
          "Simulime trajtimesh nën mbikëqyrje",
          "Vlerësim për certifikim"
        ]
      }
    ],
    "benefits": [
      "Certifikim profesional Dermapen",
      "Akses në pajisje moderne",
      "Njohuri të plota praktike"
    ],
    "materials": [
      "Kit gjilpërash Sterile 0.5 mm–1.5 mm",
      "Serumë rinovues"
    ],
    "testimonials": [],
    "faqs": [],
    "featured": false,
    "students": 0,
    "media": [
      {
        "type": "image",
        "src": "/placeholder.svg?height=600&width=800&text=Dermapen+150h",
        "alt": "Dermapen 150h"
      }
    ]
  },
  {
    "id": 52,
    "title": "Presoterapia – 150 ore",
    category: "pajisjet-e-estetikes",
    "duration": "150 orë",
    "durationCategory": "150 orë",
    "level": "Fillestar – Mesatar",
    "price": "",
    "startDate": "",
    "schedule": "E Martë - E Enjte (11:00 - 15:00)",
    image: "/pajisje/presoterapi.jpg", noCustomCrop: true,
    "description": "Kurs 150-orësh për përdorimin e teknologjisë së presoterapisë në drenazh limfatik dhe trajtime SPA.",
    "longDescription": "Përfshin anatominë e sistemit limfatik, funksionimin e aparatit të presoterapisë, protokollet e trajtimit sipas zonave, higjienën e pajisjeve, si dhe menaxhimin e klientit dhe vlerësimet paraprake.",
    "instructors": [
      {
        "name": "Arta Dervishi",
        "role": "Trainer Spa & Presoterapi",
        "image": "/placeholder.svg?height=200&width=200&text=Instructor",
        "bio": "Eksperte Spa me 7 vite përvojë në teknikat e drenazhit limfatik."
      }
    ],
    "curriculum": [
      {
        "title": "Moduli 1: Anatomia e Sistemit Limfatik",
        "lessons": [
          "Struktura e nyjeve limfatike",
          "Roli i limfës në shëndetin e indeve"
        ]
      },
      {
        "title": "Moduli 2: Funksionimi i Aparatit",
        "lessons": [
          "Parametrat e presionit, frekuencës, kohëzgjatjes",
          "Modalitetet e kompresionit"
        ]
      },
      {
        "title": "Moduli 3: Indikacionet & Kundërindikacionet",
        "lessons": [
          "Edema primare vs sekondare",
          "Masa paraprake dhe rreziqe"
        ]
      },
      {
        "title": "Moduli 4: Konsultimi & Vlerësimi",
        "lessons": [
          "Mbledhja e anamnezës",
          "Matjet antropometrike"
        ]
      },
      {
        "title": "Moduli 5: Protokollet e Trajtimit",
        "lessons": [
          "Zona të poshtme (këmbë, kyç)",
          "Zona abdominale dhe bel"
        ]
      },
      {
        "title": "Moduli 6: Higjiena & Mirëmbajtja",
        "lessons": [
          "Sterilizimi i pjesëve boshtore",
          "Kalibrimi dhe ndërrimi i filtrave"
        ]
      },
      {
        "title": "Moduli 7: Kujdesi Pas Trajtimit",
        "lessons": [
          "Ushtrime lehtësuese",
          "Monitorimi i rezultateve"
        ]
      },
      {
        "title": "Moduli 8: Praktika & Vlerësimi Final",
        "lessons": [
          "Simulime në pajisje reale",
          "Provim teorik dhe praktik"
        ]
      }
    ],
    "benefits": [
      "Certifikim Presoterapi",
      "Aftësi në drenazh limfatik",
      "Protocolle standarde SPA"
    ],
    "materials": [
      "Aparat presoterapie",
      "Aksesorë kompresioni"
    ],
    "testimonials": [],
    "faqs": [],
    "featured": false,
    "students": 0,
    "media": [
      {
        "type": "image",
        "src": "/placeholder.svg?height=600&width=800&text=Presoterapia+150h",
        "alt": "Presoterapia 150h"
      }
    ]
  },
  {
    "id": 53,
    "title": "Termokoperta – 150 ore",
    category: "pajisjet-e-estetikes",
    "duration": "150 orë",
    "durationCategory": "150 orë",
    "level": "Fillestar – Mesatar",
    "price": "",
    "startDate": "",
    "schedule": "E Mërkurë & E Premte (12:00 - 16:00)",
        image: "/pajisje/termokoperte.jpg", noCustomCrop: true,

    "description": "Kurs 150-orësh për teknologjinë Termokoperta: relaksim muskulor, detoksifikim dhe modelim konturesh.",
    "longDescription": "Mbulon anatominë e lëkurës dhe trupit, funksionimin e termikës, protokollet e aplikimit, kombinimet me SPA dhe masazhe, si dhe mirëmbajtjen e pajisjes dhe sigurinë.",
    "instructors": [
      {
        "name": "Elena Meta",
        "role": "Trainer Estetikë",
        "image": "/placeholder.svg?height=200&width=200&text=Instructor",
        "bio": "Specialiste SPA me fokus në terapi termike dhe modelim corporal."
      }
    ],
    "curriculum": [
      {
        "title": "Moduli 1: Anatomia & Fiziologjia",
        "lessons": [
          "Strukturat e lëkurës dhe yndyrnat",
          "Qarkullimi limfatik dhe tretës"
        ]
      },
      {
        "title": "Moduli 2: Teknologjia Termokoperta",
        "lessons": [
          "Parimet e funksionimit",
          "Llojet e pajisjeve termike"
        ]
      },
      {
        "title": "Moduli 3: Protokollet e Aplikimit",
        "lessons": [
          "Temperatura & kohëzgjatja",
          "Pozicionimi i klientit"
        ]
      },
      {
        "title": "Moduli 4: Kombinimet SPA",
        "lessons": [
          "Masazh drenazh limfatik",
          "Trajtime anticelulit"
        ]
      },
      {
        "title": "Moduli 5: Kujdesi & Siguria",
        "lessons": [
          "Parandalimi i rreziqeve",
          "Etika dhe dëshmia ligjore"
        ]
      },
      {
        "title": "Moduli 6: Mirëmbajtja e Pajisjes",
        "lessons": [
          "Pastrimi pas çdo përdorimi",
          "Kontrolle teknike periodike"
        ]
      },
      {
        "title": "Moduli 7: Praktika & Vlerësimi Final",
        "lessons": [
          "Demonstrime reale",
          "Provim teorik dhe praktik"
        ]
      }
    ],
    "benefits": [
      "Certifikim Termokoperta",
      "Akses në trajtime SPA",
      "Manuale protokollesh"
    ],
    "materials": [
      "Termokoperta profesionale",
      "Kripëra dhe algë për trajtime"
    ],
    "testimonials": [],
    "faqs": [],
    "featured": false,
    "students": 0,
    "media": [
      {
        "type": "image",
        "src": "/placeholder.svg?height=600&width=800&text=Termokoperta+150h",
        "alt": "Termokoperta 150h"
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
  image: "/pajisje/hidrofacial.jpg", noCustomCrop: true,
 
  description:
    "Trajnim profesional në përdorimin e sistemit Hydrofacial 15-in-1 për trajtime të avancuara të lëkurës.",
  longDescription:
    "Ky kurs 150-orësh mbulon historinë dhe parimet e teknologjisë Hydrofacial, anatominë e lëkurës, standardet e higjienës, parametrat e trajtimit, protokollet e pastrimit të thellë, ekstraksionin me vakum, hidratimin intensiv, LED terapi, RF, ultratinguj e elektroporacion, menaxhimin e kontraindikacioneve dhe mirëmbajtjen e pajisjes.",
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
      lessons: ["Historia Hydrofacial", "Sterilizimi & dezinfektimi"]
    },
    {
      title: "Moduli 2: Anatomia & Parametrat",
      lessons: ["Strukturat e lëkurës", "Rregullimet bazë të pH-së"]
    },
    {
      title: "Moduli 3: Protokollet e Pastrimit",
    
      lessons: ["Deep cleansing", "Mikrodermabrazion me acid"]
    },
    {
      title: "Moduli 4: Ekstraksion & Vakum",
      lessons: ["Teknikat manuale", "Përdorimi i vakumit"]
    },
    {
      title: "Moduli 5: Hidratim & Serume",
      lessons: ["Elektroporacion", "Infuzioni serumi"]
    },
    {
      title: "Moduli 6: LED & RF",
      lessons: ["LED terapia", "Radiofrekuenca"]
    },
    {
      title: "Moduli 7: Ultratinguj & Elektroporacion",
      lessons: ["Parametrat ultratinguj", "Siguria termike"]
    },
    {
      title: "Moduli 8: Praktikë & Mirëmbajtje",
      lessons: ["Simulime trajtimesh", "Kalibrimi i pajisjes"]
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
    { type: "image", src: "/placeholder.svg?height=600&width=800&text=Hydrofacial+150", alt: "Trajtim Hydrofacial" }
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
  image: "/pajisje/epilim-me-lazer.jpg",
  noCustomCrop: true,
  description:
    "Trajnim profesional në epilimin me lazer duke mbuluar llojet e lazerëve, parametrat e trajtimit dhe sigurinë klinike.",
  longDescription:
    "Ky kurs i avancuar prej 150 orësh ofron njohuri të thelluara mbi fizikën e lazerit, anatomisë së lëkurës dhe flokut, karakteristikat e pajisjeve të ndryshme si Diode, Alexandrite dhe Nd:YAG, si dhe praktika mbi konfigurimin, kalibrimin dhe protokollet e trajtimit. Kursi përfshin gjithashtu aspekte etike dhe ligjore, menaxhimin e rreziqeve, konsultimin me klientët, dhe përfundon me certifikim pas testimeve teorike dhe praktike.",
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
  id: 83,
  title: "Kursi Makeup Permanent i Aureolave & Zonave të Rëna të Flokëve (150 ore)",
  category: "makeup-permanent-pmu",
  duration: "150 orë",
  durationCategory: "150 orë",
  level: "Avancuar",
  price: "",
  startDate: "",
  schedule: "",
  image: "/courses/makeup-permanent-aureola.jpg",
  videoSrc: "",
  description:
    "Specializim në micropigmentim për rikonstruksion të aureolës së gjirit dhe trajtim të zonave të rëna të flokëve.",
  longDescription:
    "Kurs i avancuar për artistë të PMU që duan të përfitojnë aftësi në mikropigmentimin realist të zonave të ndjeshme si aureolat pas mastektomisë dhe alopecia.",
  instructors: [],
  curriculum: [
    {
      title: "Hyrje & Anatomia",
      lessons: [
        "Hyrje në PMU",
        "Strukturat e lëkurës",
        "Roli i kolagjenit"
      ]
    },
    {
      title: "Etika & Higjiena",
      lessons: [
        "Sterilizimi dhe mbrojtja",
        "Parandalimi i infeksioneve",
        "Mbetjet mjekësore"
      ]
    },
    {
      title: "Teoria e Ngjyrave & Pajisjet",
      lessons: [
        "Pigmentet dhe përzierjet",
        "Makineritë dhe kartridgët"
      ]
    },
    {
      title: "Aplikimi Realist",
      lessons: [
        "Projektimi i formës",
        "Aureola post-mastektomie",
        "Trajtimi i alopecisë me 3D teknikë"
      ]
    },
    {
      title: "Rregullime & Marketing",
      lessons: [
        "Korrigjime dhe heqje pigmentesh",
        "Komplikacione dhe kujdes",
        "Marketing dhe ndërtimi i portofolit"
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
    id: 77,
    title: "Kurs i Menaxhimit të Hotelit",
    category: "UET Italia",
    duration: "",
    durationCategory: "",
    level: "",
    price: "",
    startDate: "",
    schedule: "",
    image: "/uet-courses/uet-hotel-managment.png",
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
    image: "/uet-courses/uet-front-office.jpg",
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
    image: "/uet-courses/uet-food.jpg",
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
    image: "/uet-courses/uet-non-hotel-managment.jpg",
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
    image: "/uet-courses/uet-housekeeper.jpg",
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
    image: "/uet-courses/uet-bartender.jpg",
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
    image: "/uet-courses/uet-extra-hotel.jpg",
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
    image: "/uet-courses/uet-spa-managment.jpg",
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
    image: "/uet-courses/uet-experimental-travel.jpg",
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
    image: "/uet-courses/uet-guide.png",
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
    image: "/uet-courses/uet-tourist-guide.jpg",
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
    image: "/uet-courses/uet-weding.png",
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
    image: "/uet-courses/uet-made-in-italy.png",
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
    image: "/uet-courses/uet-amadeus.jpg",
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
    image: "/uet-courses/uet-opera-cloud.jpg",
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
    image: "/uet-courses/uet-short-master-ai.png",
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
  {
    id: 69,
    title: "Kurs Marketingu Web & Media Sociale për Turizëm",
    category: "UET Italia",
    duration: "",
    durationCategory: "",
    level: "",
    price: "",
    startDate: "",
    schedule: "",
    image: "/uet-courses/uet-web-marketing.jpeg",
    description:
      "Trajnim i specializuar për menaxhimin e marketingut web, komunikimit online, marketingut në mediat sociale dhe menaxhimit të komunitetit për sektorin e turizmit.",
    longDescription: "",
    testimonials: [],
    faqs: [],
    featured: false,
    students: 0,
    link: "https://uetitalia.it/product/webmarketingsocialmedia/",
  },
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
    image: "/uet-courses/uet-executive-master-digital-marketing.png",
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
    image: "/uet-courses/uet-master-hospitality.png",
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
    image: "/uet-courses/uet-master-food-wine.png",
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
    image: "/uet-courses/uet-master-linguistic.png",
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
    image: "/uet-courses/uet-master-travel-managment.png",
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
  {
    id: 75,
    title:
      "Master në Turizmin Eksperiencial për Menaxhimin e Projekteve",
    category: "UET Italia",
    duration: "",
    durationCategory: "",
    level: "",
    price: "",
    startDate: "",
    schedule: "",
    image: "/uet-courses/uet-master-experimental-toursim.png",
    description:
      "Programi synon t'u ofrojë njohuri & aftësi për analizimin e organizimit & konkurrencës së destinacioneve turistike, duke përfshirë aspektet teknike të fushës.",
    longDescription:
      "Studentët mësojnë të analizojnë zonën lokale & konkurrencën, dhe të zhvillojnë projekte turizmi, duke vlerësuar fizibilitetin e destinacionit. Më pas krijojnë, organizojnë & promovojnë produkte profesionale për tregun online & offline.",
    testimonials: [],
    faqs: [],
    featured: false,
    students: 0,
    link: "https://uetitalia.it/product/turismoesperienziale/",
  },
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
    image: "/uet-courses/uet-mba.jpg",
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





