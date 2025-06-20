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
  featured: boolean;
  students: number;
  videoSrc?: string;

  // ← NEW!
  media: {
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
    id: 3,
    title: "Kurs Profesional për Estetikë",
    category: "esthetics",
    duration: "150 orë",
    durationCategory: "150 orë",
    level: "Mesatar deri në të Avancuar",
     price: "",
    startDate: "",
    schedule: "E Hënë - E Shtune (8:30 - 13:30, 14:30 - 19:00)",
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
    title: "Moduli 1: HYRJE NË TRAJTIMIT E TRUPIT (10 orë)",
    lessons: [
      "Anatomia bazë e trupit",
      "Tipologjitë e trupit",
      "Llojet e lëkurës trupore",
      "Higjena dhe sterilizimi"
    ]
  },
  {
    title: "Moduli 2: MJETET E PUNËS DHE PRODUKTET (15 orë)",
    lessons: [
      "Përshkrimi i pajisjeve bazë: krevat, avullues, brushë pastruese, vakum, etj.",
      "Produktet kozmetike: peeling trupor, algat, balta, vajrat esenciale"
    ]
  },
  {
    title: "Moduli 3: TEKNIKAT BAZË TË TRAJTIMEVE (30 orë)",
    lessons: [
      "Pastrimi bazë i trupit",
      "Scrub trupor",
      "Algaterapia",
      "Fango terapia"
    ]
  },
  {
    title: "Moduli 4: MASAZHET RELAKSUESE (25 orë)",
    lessons: [
      "Teknikat bazë të masazhit",
      "Masazhi me vaj",
      "Masazhi me gurë të ngrohtë"
    ]
  },
  {
    title: "Moduli 5: TRAJTIME SPECIFIKE (20 orë)",
    lessons: [
      "Trajtimi për celulit",
      "Trajtimi për strija",
      "Trajtimi për tonifikim"
    ]
  },
  {
    title: "Moduli 6: PRAKTIKA DHE DEMONSTRIME (30 orë)",
    lessons: [
      "Demonstrime në modele reale",
      "Vlerësimi i rezultateve"
    ]
  },
  {
    title: "Moduli 7: KËSHILLA PËR KLIENTËT (10 orë)",
    lessons: [
      "Kujdesi para dhe pas trajtimit",
      "Konsultimi profesional"
    ]
  }
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
    media: [
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+1", alt: "Advanced barber course image 1" },
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+2", alt: "Advanced barber course image 2" },
      { type: "video", src: "/placeholder-video.mp4", alt: "Advanced barber overview video" },
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+3", alt: "Advanced barber course image 3" },
    ],
  },
   {
    id: 4,
    title: "Kurs Bazik: Berber, Trajtimi i Mjekrës & Rimodelim i Fytyrës",
    category: "barber",
    duration: "150 orë",
    durationCategory: "150-orë",
    level: "Fillestar deri në Mesëm",
    price: "60,000 Lekë",
    startDate: "1 Shtator 2025",
    schedule: "E Hënë, E Mërkurë, E Premte (17:00 - 20:00)",
    image: "/placeholder.svg?height=600&width=800&text=Barber+Basic+Course",
    description: "Njihuni me bazat e berberisë, rregullimin e mjekrës dhe rimodelimin e fytyrës në një kurs 150-orësh.",
    longDescription: "Ky kurs 150-orësh ofron njohuri praktike dhe teorike për prerjet klasike mashkullore, trajtimin e mjekrës dhe rimodelimin e formës së fytyrës. Pjesëmarrësit do të trajnohen mbi historikun e zanatit, anatominë e kokës dhe fytyrës, higjenën profesionale dhe përdorimin e makinës dhe gërshërës.",
    instructors: [
      {
        name: "Erion Berberi",
        role: "Master Barber",
        image: "/placeholder.svg?height=200&width=200&text=Erion+Berberi",
        bio: "Me 10 vite eksperiencë në prerje klasike dhe moderne mashkullore."  
      }
    ],
    curriculum: [
      {
        title: "Qëllimi i Modulit",
        lessons: [
          "Njohuri bazike në prerje, mjekër dhe kujdes fytyre",
          "Standardet e higjenës dhe sterilizimit"
        ]
      },
      {
        title: "Temat Kryesore",
        lessons: [
          "Historia e berberisë",
          "Anatomia e kokës dhe fytyrës",
          "Prerje klasike mashkullore (buzz cut, taper, side part)",
          "Përdorimi i makinës & gërshërës",
          "Higjena dhe sterilizimi",
          "Trajtimi dhe stilizimi i mjekrës",
          "Rimodelimi i fytyrës mashkullore"
        ]
      },
      {
        title: "Tabela: Forma e fytyrës dhe rekomandimi i stilit",
        lessons: [
          "Rrumbullake → Taper + vijë anësore, mjekër e gjatë",
          "Ovale → Classic cut, mjekër e plotë",
          "Katrore → Pompadour, goatee ose stubble",
          "Trekëndore → Crop cut, Balbo ose Van Dyke"
        ]
      },
      {
        title: "Orari i orëve",
        lessons: [
          "Teori mbi historikun dhe higjienën – 20h",
          "Prerje klasike mashkullore – 50h",
          "Rregullim dhe trajtim i mjekrës – 30h",
          "Rimodelim fytyre bazë – 20h",
          "Praktikë me modelë – 20h",
          "Vlerësim final – 10h"
        ]
      }
    ],
    benefits: [
      "Certifikim profesionale në berberi",
      "Trajnim praktik në manekinë dhe klientë realë",
      "Udhëzime për hapjen e sallonit",
      "Diplomë e njohur në industrinë e bukurisë mashkullore"
    ],
    materials: [
      "Set makine prerëse dhe gërshërë profesionale",
      "Produkte për stilizim mjekrës (vajra, balsam)",
      "Doreza dhe dezinfektues për mjetet"
    ],
    testimonials: [
      {
        name: "Adrian Meta",
        role: "Student Berber",
        image: "/placeholder.svg?height=100&width=100&text=Adrian+Meta",
        text: "Ky kurs më dha besimin dhe aftësitë bazike për të filluar si berber profesionist."
      }
    ],
    faqs: [
      {
        question: "A nevojitet përvoja paraprake?",
        answer: "Jo, ky kurs fillon nga themeli dhe është i përshtatshëm për fillestarë."
      },
      {
        question: "Sa kohë zgjat stazhi praktik?",
        answer: "20 orë praktikë në sallonet partnere."
      }
    ],
    featured: false,
    students: 0,
    media: [
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+1", alt: "Advanced barber course image 1" },
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+2", alt: "Advanced barber course image 2" },
      { type: "video", src: "/videos/Berber-media.mp4", alt: "Advanced barber overview video" },
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+3", alt: "Advanced barber course image 3" },
    ],
    videoSrc: "/videos/Kurs-berber.mp4",
  },
  {
    id: 5,
    title: "Kurs i Avancuar: Berber, Trajtimi i Mjekrës & Rimodelim i Fytyrës",
    category: "barber",
    duration: "360 orë",
    durationCategory: "360-orë",
    level: "Mesëm deri në Avancuar",
    price: "120,000 Lekë",
    startDate: "1 Shtator 2025",
    schedule: "E Martë, E Enjte, E Shtunë (10:00 - 14:00)",
    image: "/placeholder.svg?height=600&width=800&text=Barber+Advanced+Course",
    description: "Një program i plotë 360-orësh për teknikë të avancuar në prerje, mjekër dhe trajtime fytyre.",
    longDescription: "Ky kurs i avancuar mbulon historikun e berberisë, anatominë e kokës dhe fytyrës, prerjet klasike dhe moderne, trajtimin profesional të mjekrës dhe rimodelimin e fytyrës. Përfshin teknika të thelluara, përdorimin e briskut të nxehtë, masazhe limfatike dhe trajtime estetike pas prerjes.",
    instructors: [
      {
        name: "Valon Hoxha",
        role: "Master Barber & Skincare Specialist",
        image: "/placeholder.svg?height=200&width=200&text=Valon+Hoxha",
        bio: "Ekspert me 12 vite përvojë në prerje, trajtime fytyre dhe mjekër."
      }
    ],
    curriculum: [
      {
        title: "Historiku dhe Zhvillimi i Profesionit",
        lessons: [
          "Berberi në Egjiptin e lashtë dhe Greqinë antike",
          "Transformimi në profesion të estetikës mashkullore"
        ]
      },
      {
        title: "Anatomia e kokës dhe formave të fytyrës",
        lessons: [
          "Analiza e strukturës së kockave",
          "Përshtatja e stilit me formën e fytyrës"
        ]
      },
      {
        title: "Prerjet klasike dhe moderne",
        lessons: [
          "Skin fade, razor part, pompadour, slick back",
          "Freestyle art grafik me makinë prerëse"
        ]
      },
      {
        title: "Rregullimi dhe trajtimi i mjekrës",
        lessons: [
          "Stylimi sipas formës së fytyrës",
          "Përdorimi i briskut të nxehtë dhe produkteve profesionale",
          "Masazh relaksues fytyre"
        ]
      },
      {
        title: "Rimodelimi i fytyrës",
        lessons: [
          "Masazhe limfatike dhe lifting",
          "Scrub + maska hidratuese",
          "Përdorimi i avullit dhe peshqirë të ngrohtë"
        ]
      },
      {
        title: "Tabela: Produkte për mjekër dhe fytyrë",
        lessons: [
          "Vaj mjekre → ushqen dhe zbut",
          "Balm pas rruajtjes → qetëson lëkurën",
          "Scrub eksfoliues → pastrim i thellë",
          "Serum hidratues → tonifikim dhe shkëlqim"
        ]
      },
      {
        title: "Praktika dhe komunikimi profesional",
        lessons: [
          "Konsultimi paraprak me klientin",
          "Etiketa dhe komunikimi në sallon"
        ]
      },
      {
        title: "Orari i orëve",
        lessons: [
          "Histori dhe teori – 30h",
          "Anatomia dhe analiza – 30h",
          "Prerje klasike & moderne – 100h",
          "Dizajn freestyle – 40h",
          "Trajtim mjekre – 60h",
          "Rimodelim fytyre – 40h",
          "Praktikë me klientë – 40h",
          "Vlerësim final – 20h"
        ]
      }
    ],
    benefits: [
      "Aftësi të avancuara në prerje dhe trajtime fytyre",
      "Certifikim i pranueshëm në Europë",
      "Mundësi të praktikës në sallonet partnerë",
      "Diplomë e specializuar në estetika mashkullore"
    ],
    materials: [
      "Set i plotë prerjeje dhe stilizimi",
      "Brisk dhe produkte premium për mjekër",
      "Pajisje për trajtime fytyre"
    ],
    testimonials: [
      {
        name: "Gentian Hysa",
        role: "Berber i Certifikuar",
        image: "/placeholder.svg?height=100&width=100&text=Gentian+Hysa",
        text: "Kursi i avancuar më ndihmoi të perfeksionoj teknikën dhe të rris karrierën time në industrinë e bukurisë mashkullore."
      }
    ],
    faqs: [
      {
        question: "A kërkohet kursi bazik?",
        answer: "Rekomandohet por nuk është i detyrueshëm për këtë nivel."
      },
      {
        question: "A ofrohet stazhi praktik?",
        answer: "Po, 40 orë praktikë në sallone partnerë."
      }
    ],
    featured: false,
    students: 0,
    media: [
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+1", alt: "Advanced barber course image 1" },
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+2", alt: "Advanced barber course image 2" },
      { type: "video", src: "/videos/Berber-media.mp4", alt: "Advanced barber overview video" },
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+3", alt: "Advanced barber course image 3" },
    ],
  },
  {
    id: 6,
    title: "Kurs Profesional për Parukeri",
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
      title: "Moduli: Larja e Flokëve – 150 orë",
      lessons: [
        "Historiku i Larjes së Flokëve",
        "Qëllimi i Larjes së Flokëve",
        "Analiza e Tipit të Flokëve dhe Skalpit",
        "Produktet që Përdoren për Larjen e Flokëve",
        "Mjetet e Nevojshme",
        "Procedura e Larjes së Flokëve – Hap Pas Hapi",
        "Kujdesi gjatë Larjes",
        "Gabime të Shpeshta për T’u Evituar"
      ]
    },
    {
      title: "Moduli: Krehja e Flokëve – 150 orë",
      lessons: [
        "Historiku i Krehjes së Flokëve",
        "Njohuritë bazë për flokun dhe strukturën e tij",
        "Mjetet për krehje",
        "Produktet ndihmëse për krehje",
        "Teknikat e krehjes",
        "Higjiena dhe përgatitja e klientit",
        "Praktika në manekinë dhe klientë realë"
      ]
    },
    {
      title: "Moduli: Prerja e Flokëve – 150 orë",
      lessons: [
        "Hyrje në prerjen e flokëve",
        "Klasifikimi i prerjeve",
        "Teknikat e prerjes",
        "Mjetet për prerje",
        "Analiza e flokëve para prerjes",
        "Higjiena dhe siguria",
        "Komunikimi me klientin",
        "Praktika në manekinë dhe klientë realë"
      ]
    },
    {
      title: "Moduli: Lyerja e Flokëve – 150 orë",
      lessons: [
        "Qëllimi i modulit",
        "Historia dhe struktura e flokut",
        "Llojet e bojërave dhe kodifikimi i tyre",
        "Tabela e kodifikimit sipas efektit",
        "Teknikat bazë të lyerjes",
        "Higjiena dhe mbrojtja"
      ]
    },
    {
      title: "Moduli: Dekolorimet, Balayage & Shatush – 150 orë",
      lessons: [
        "Hyrje në teknikat e dekolorimit",
        "Anatomia e flokut dhe ndikimi i pigmentit",
        "Mjetet dhe produktet për dekolorim",
        "Teknikat bazë (balayage & shatush)",
        "Rreziku dhe masat mbrojtëse",
        "Tabela krahasuese e teknikave"
      ]
    },
    {
      title: "Moduli: Permanent Kacurel – 150 orë",
      lessons: [
        "Përkufizimi i permanentit kacurel",
        "Mjetet dhe produktet",
        "Hapat e procedurës",
        "Kujdesi pas trajtimit"
      ]
    },
    {
      title: "Moduli: Shtrirja me Keratinë – 150 orë",
      lessons: [
        "Hyrje dhe historiku i trajtimeve me keratinë",
        "Llojet e keratinës dhe përdorimi i tyre",
        "Mjetet dhe pajisjet e nevojshme",
        "Procedura bazë e aplikimit",
        "Siguria dhe higjiena",
        "Këshilla pas trajtimit",
        "Praktika praktike"
      ]
    },
    {
      title: "Moduli: Mjetet e Nxehta (Masha, Piastra, Bibilis) – 150 orë",
      lessons: [
        "Historiku i përdorimit të mjeteve të nxehta",
        "Llojet kryesore të mjeteve (mashë, piastrë, bibilis)",
        "Materialet e pllakave/mashave",
        "Temperatura sipas tipit të flokëve",
        "Përdorimi i produkteve mbrojtëse",
        "Hapat për përdorim të sigurt"
      ]
    },
    {
      title: "Moduli: Extension Flokësh – 150 orë",
      lessons: [
        "Historiku i extension-it",
        "Metodat kryesore të shtimit të flokëve",
        "Kujdesi ndaj extension",
        "Materialet dhe mjetet e përdorura",
        "Praktikë në manekinë dhe klientë"
      ]
    },
    {
      title: "Moduli: Gërsheta Afrikane – 150 orë",
      lessons: [
        "Historiku i gërshetave afrikane",
        "Llojet më të zakonshme të gërshetave",
        "Produktet dhe mjetet e nevojshme",
        "Teknikat bazë hap pas hapi",
        "Kujdesi pas gërshetimit"
      ]
    },
    {
      title: "Moduli: Problemet e Skalpit – 150 orë",
      lessons: [
        "Rëndësia e shëndetit të skalpit",
        "Problemet më të shpeshta (zbokth, irritime)",
        "Analiza e skalpit në sallon",
        "Trajtimet bazë sipas kategori",
        "Gabimet që duhen shmangur"
      ]
    },
    {
      title: "Moduli: Trajtimet për Rënien e Flokëve – 150 orë",
      lessons: [
        "Çfarë është rënia e flokëve?",
        "Shkaqet kryesore të rënies",
        "Llojet e rënies (alopecia, effluvium)",
        "Trajtimet bazë në sallon"
      ]
    },
    {
      title: "Moduli: Make Up Bazë për Parukierë – 150 orë",
      lessons: [
        "Qëllimi i modulit: Të mësohen bazat e grimit profesional për aplikim në sallon, dasma, evente",
        "Higjena dhe përgatitja: Dezinfektimi i veglave, pastrimi i fytyrës, baza e pastër",
        "Lëkura dhe tipet: E yndyrshme, e thatë, mikse, me akne",
        "Produktet bazë: Primer, fondatinë, korrektor, pudër, rimel, blush",
        "Tonalitetet e ngjyrave: Ngjyrat e ngrohta, të ftohta, neutrale",
        "Veglat e punës: Furça, sfungjer, lapsa, aplikatorë",
        "Make up ditor: Pamje e lehtë, e natyrshme për klientë salloni",
        "Make up për mbrëmje: Ton më i ngrohtë, pak më dramatik",
        "Teknikat bazike të konturimit: Dritë-hije për rregullim forme fytyre",
        "Tipet e fytyrës dhe teknikat bazike: Ovale, Rrethore, Katrore",
        "Materialet bazë: Fondatina, primer, korrektor, paletë sysh, rimel, lip liner/labial",
        "Përmbledhje orësh: Teori (30h), Praktikë ditor (60h), Praktikë mbrëmje (30h), Konturim (15h), Vlerësim (15h)"
      ]
    }
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
    media: [
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+1", alt: "Advanced barber course image 1" },
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+2", alt: "Advanced barber course image 2" },
      { type: "video", src: "/placeholder-video.mp4", alt: "Advanced barber overview video" },
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+3", alt: "Advanced barber course image 3" },
    ],
  },
  {
    id: 7,
    title: "Make Up Artist - 150 orë",
    category: "makeup",
    duration: "150 orë",
    durationCategory: "150-orë",
    level: "Fillestar deri në Mesëm",
    price: "50,000 Lekë",
    startDate: "1 Gusht 2025",
    schedule: "E Hënë, E Mërkurë, E Premte (17:00 - 19:00)",
    image: "/placeholder.svg?height=600&width=800&text=Makeup+150h",
    description: "Kurs 150-orësh që mbulon historikun, higjenën, teknikat bazë dhe praktikë intensive në make up.",
    longDescription: "Ky kurs 150-orësh për Make Up Artist ju pajis me njohuritë teorike dhe aftësitë praktike për aplikim profesional të make up-it në sallon, evente dhe sesione fotografike. Përfshin historikun e grimit, higjenën dhe dezinfektimin, analizën e lëkurës dhe morfologjinë e fytyrës, produktet bazë dhe funksionet e tyre, teknikat bazë të aplikimit, si dhe praktikë në modele dhe manekina.",
    instructors: [
      {
        name: "Arta Kelmendi",
        role: "Makeup Artist & Trainer",
        image: "/placeholder.svg?height=200&width=200&text=Arta+Kelmendi",
        bio: "Me mbi 8 vite përvojë në industrinë e make up-it dhe trajnime ndërkombëtare."
      }
    ],
    curriculum: [
      {
        title: "Moduli: Historiku i grimit",
        lessons: [
          "Grimi në kulturat e lashta (Egjipt, Greqi, Romë)",
          "Evolucioni i make up-it nga shekulli XIX deri më sot",
          "Roli i make up artistit në industri (modë, TV, evente)"
        ]
      },
      {
        title: "Moduli: Higjiena dhe dezinfektimi",
        lessons: [
          "Pastrimi i mjeteve të grimit",
          "Higjiena personale dhe e klientit",
          "Rregullat e sigurisë në ambientin e punës"
        ]
      },
      {
        title: "Moduli: Njohuri mbi lëkurën dhe fytyrën",
        lessons: [
          "Tipologjitë e lëkurës",
          "Identifikimi i formës së fytyrës dhe elementeve kryesore"
        ]
      },
      {
        title: "Moduli: Produktet bazë të grimit",
        lessons: [
          "Primer – fiksim, mbushje poresh",
          "Fondatinë – unifikim tonit",
          "Korrektor – mbulim njollash",
          "Puder – matifikim",
          "Blush/Bronzer – theksim konturesh",
          "Highlighter – ndriçim zonash të larta",
          "Maskara – theksim qerpikësh",
          "Ruza/Buzëkuq – ngjyrosje buzësh"
        ]
      },
      {
        title: "Moduli: Mjetet e grimit dhe sterilizimi",
        lessons: [
          "Furçat – llojet dhe funksionet",
          "Sfunga, beauty blender",
          "Pinceta, paleta, furça vetullash"
        ]
      },
      {
        title: "Moduli: Teknikat bazë të aplikimit",
        lessons: [
          "Aplikimi i bazës, konturimi dhe ndriçimi",
          "Aplikimi i hijeve sipas formës së syrit",
          "Theksimi i buzëve dhe vetullave"
        ]
      },
      {
        title: "Moduli: Llojet e grimit sipas eventeve",
        lessons: [
          "Grim ditor/natural",
          "Grim mbrëmjeje",
          "Grim skene",
          "Grim për foto"
        ]
      },
      {
        title: "Moduli: Praktikë në modele dhe manekina",
        lessons: [
          "Punë individuale dhe në grup",
          "Simulime në kushte reale"
        ]
      }
    ],
    benefits: [
      "Aftësi të plota për make up profesional",
      "Certifikim 150-orësh",
      "Praktikë intensive në modele reale",
      "Portofol me punime personale"
    ],
    materials: [
      "Set bazik make up (foundation, concealer, pudër)",
      "Furça dhe sfungjer profesional",
      "Paletë hije sysh dhe blush/bronzer"
    ],
    testimonials: [
      {
        name: "Elisa Hoxha",
        role: "Makeup Artist",
        image: "/placeholder.svg?height=100&width=100&text=Elisa+Hoxha",
        text: "Ky kurs më përgatiti për aplikime të ndryshme make up dhe më dha besim për punë profesionale."
      }
    ],
    faqs: [
      {
        question: "A kërkohet përvojë paraprake?",
        answer: "Jo, kursi fillon nga bazat dhe është i përshtatshëm për fillestarët."
      },
      {
        question: "A ofrohet material praktik?",
        answer: "Po, të gjitha materialet bazë janë përfshirë në tarifën e kursit."
      }
    ],
    featured: false,
    students: 0,
    media: [
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+1", alt: "Advanced barber course image 1" },
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+2", alt: "Advanced barber course image 2" },
      { type: "video", src: "/placeholder-video.mp4", alt: "Advanced barber overview video" },
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+3", alt: "Advanced barber course image 3" },
    ],
  },
  {
    id: 8,
    title: "Make Up Artist - 360 orë",
    category: "makeup",
    duration: "360 orë",
    durationCategory: "360-orë",
    level: "Mesëm deri në Avancuar",
    price: "100,000 Lekë",
    startDate: "1 Gusht 2025",
    schedule: "E Martë, E Enjte, E Shtunë (10:00 - 14:00)",
    image: "/placeholder.svg?height=600&width=800&text=Makeup+360h",
    description: "Program 360-orësh i avancuar për teknikë të lartë make up, nga higjiena agrave deri tek special effects.",
    longDescription: "Ky kurs 360-orësh mbulon historikun e make up-it, higjenën profesionale, analizën e lëkurës, njohjen e produkteve kozmetike, teknikat bazë dhe të avancuara, si dhe praktikë intensive dhe zhvillim artistik në modele reale.",
    instructors: [
      {
        name: "Arta Kelmendi",
        role: "Makeup Artist & Trainer",
        image: "/placeholder.svg?height=200&width=200&text=Arta+Kelmendi",
        bio: "Me mbi 8 vite përvojë në industrinë e make up-it dhe trajnime ndërkombëtare."
      }
    ],
    curriculum: [
      {
        title: "Moduli: Historiku dhe ndikimi kulturor",
        lessons: [
          "Evolucioni i grimit në dekada",
          "Grimi si art dhe komunikim",
          "Roli i make up artistit profesional"
        ]
      },
      {
        title: "Moduli: Higjiena dhe siguria profesionale",
        lessons: [
          "Protokollet e sterilizimit",
          "Menaxhimi i produkteve të hapura",
          "Higjiena me klientë të ndjeshëm"
        ]
      },
      {
        title: "Moduli: Lëkura dhe morfologjia e fytyrës",
        lessons: [
          "Strukturat bazë",
          "Identifikimi i undertonit të lëkurës",
          "Lidhja me zgjedhjen e produkteve"
        ]
      },
      {
        title: "Moduli: Njohja e produkteve kozmetike",
        lessons: [
          "Primer, fondatinë, korrektor, puder",
          "Blush, bronzer, highlighter, hije sysh",
          "Eyeliner, buzëkuq, fiksues make up"
        ]
      },
      {
        title: "Moduli: Mjetet dhe aksesorët profesionalë",
        lessons: [
          "Llojet e furçave dhe funksionet",
          "Sterilizimi me produkte specifike",
          "Organizimi i valixhes së grimit"
        ]
      },
      {
        title: "Moduli: Teknikat e avancuara",
        lessons: [
          "Konturim 2D dhe 3D",
          "Cut crease, halo eye, smokey eye",
          "Grim sipas formës së syrit dhe fytyrës"
        ]
      },
      {
        title: "Moduli: Llojet e grimit sipas kontekstit",
        lessons: [
          "Ditor, biznes, skenik, editorial",
          "Grimi për sfilata dhe nuse",
          "Grimi fotografik (HD)"
        ]
      },
      {
        title: "Moduli: Rregulla dhe etika profesionale",
        lessons: [
          "Komunikimi me klientin",
          "Konsulta para grimit",
          "Ndërtimi i portofolit"
        ]
      },
      {
        title: "Moduli: Praktikë intensive dhe zhvillim artistik",
        lessons: [
          "Zbatim teknikash në modele reale",
          "Zhvillim stili vetjak",
          "Vlerësim individual"
        ]
      }
    ],
    benefits: [
      "Aftësi të avancuara make up dhe special effects",
      "Certifikim 360-orësh",
      "Praktikë intensive dhe portofol profesional",
      "Mundësi punësimi në TV, modë dhe evente"
    ],
    materials: [
      "Set i plotë make up premium",
      "Furça profesionale dhe sfungjer",
      "Paleta hije sysh dhe konturimi"
    ],
    testimonials: [
      {
        name: "Besa Malaj",
        role: "Pronare Salloni",
        image: "/placeholder.svg?height=100&width=100&text=Besa+Malaj",
        text: "Ky program 360-orësh është shumë i plotë; mësova teknika të avancuara që aplikoj në punën time çdo ditë."
      }
    ],
    faqs: [
      {
        question: "A duhet kursi bazik për t’u regjistruar?",
        answer: "Jo, por kemi modul fillestar për të ndihmuar ata pa përvojë."
      },
      {
        question: "Çfarë certifikimi marr?",
        answer: "Certifikatë ndërkombëtare 360-orëshe e njohur nga partnerët e industrisë."
      }
    ],
    featured: false,
    students: 0,
    media: [
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+1", alt: "Advanced barber course image 1" },
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+2", alt: "Advanced barber course image 2" },
      { type: "video", src: "/placeholder-video.mp4", alt: "Advanced barber overview video" },
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+3", alt: "Advanced barber course image 3" },
    ],
  },
{
    id: 9,
    title: "Moduli: Vetullat – 150 orë",
    category: "brows",
    duration: "150 orë",
    durationCategory: "150-orë",
    level: "Fillestar – Mesëm",
    price: "70,000 Lekë",
    startDate: "1 Shtator 2025",
    schedule: "E Martë, E Enjte (16:00 - 19:00)",
    image: "/courses/pmu-vetullat.jpg",
    description: "Kurs bazik 150-orësh për PMU, microblading dhe nanoblading në vetulla.",
    longDescription: "Ky modul 150-orësh për vetulla përfshin historikun e teknikave PMU, higjenën, analizën anatomike, përdorimin e mjeteve, pigmentet, procedurat teknike të microblading dhe nanoblading, dhe këshilla për para dhe pas trajtimit.",
    instructors: [
      {
        name: "Elira Meta",
        role: "Specialiste PMU",
        image: "/placeholder.svg?height=200&width=200&text=Elira+Meta",
        bio: "Eksperte në microblading dhe nanoblading me 5 vite përvojë."
      }
    ],
    curriculum: [
      {
        title: "Historiku i PMU, Microblading & Nanoblading",
        lessons: [
          "Origjina e tatuazhit kozmetik",
          "Evolucioni i microblading",
          "Prezencimi i nanoblading"
        ]
      },
      {
        title: "Higjena & Siguria",
        lessons: [
          "Sterilizimi i mjeteve",
          "Rregulloret higjienike për PMU",
          "Menaxhimi i rreziqeve"
        ]
      },
      {
        title: "Anatomia & Morfologjia e Vetullës",
        lessons: [
          "Struktura e vetullës",
          "Matja e simetrisë",
          "Formëzim sipas fytyrës"
        ]
      },
      {
        title: "Mjetet & Aparaturat",
        lessons: [
          "Laps kirurgjik: vizatim paraprak",
          "Kompas i artë: matje simetrie",
          "Makineri PMU: aplikim pigmenti",
          "Microblade pen: krijim qime",
          "Nanoblade pen: precizion i lartë"
        ]
      },
      {
        title: "Pigmentet & Produktet",
        lessons: [
          "Pigment organik: ngjyrë natyrale",
          "Pigment inorganik: rezistencë",
          "Anestezik lokal: lehtësim dhimbje",
          "Solucion fiksues: fiksim pigmenti",
          "Aftercare cream: kujdes pas trajtimit"
        ]
      },
      {
        title: "Procedura Microblading",
        lessons: [
          "Vizatimi paraprak",
          "Aplikimi i anestezikut",
          "Teknikat e implantimit",
          "Kontrolli & korrigjimi"
        ]
      },
      {
        title: "Procedura Nanoblading",
        lessons: [
          "Avantazhet mbi microblading",
          "Teknikat e mikropresionit",
          "Vizatimi qime natyrale"
        ]
      },
      {
        title: "Këshilla për Klientët",
        lessons: [
          "Përgatitja para trajtimit",
          "Udhëzime post-trajtimi",
          "Periudha e shërimit"
        ]
      }
    ],
    benefits: [
      "Trajnim praktik me modele reale",
      "Certifikim PMU 150-orësh",
      "Njohuri për pigmentet dhe pas-kujdesin"
    ],
    materials: [
      "Set microblading & nanoblading",
      "Pigmente premium organike & inorganike",
      "Mjetet e matjes dhe anestezikët"
    ],
    testimonials: [
      {
        name: "Blerina Deda",
        role: "Artist PMU",
        image: "/placeholder.svg?height=100&width=100&text=Blerina+Deda",
        text: "Kursi më hapi mundësi të reja në karrierën time në PMU."
      }
    ],
    faqs: [
      {
        question: "A kërkohet kurs parakusht?",
        answer: "Jo, ky kurs fillestar mbulon të gjitha bazat."
      },
      {
        question: "Sa kohe zgjat rigjenerimi?",
        answer: "Rreth 4-6 javë për ndonjë retushim."
      }
    ],
    featured: false,
    students: 0,
    media: [
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+1", alt: "Advanced barber course image 1" },
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+2", alt: "Advanced barber course image 2" },
      { type: "video", src: "/placeholder-video.mp4", alt: "Advanced barber overview video" },
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+3", alt: "Advanced barber course image 3" },
    ],
  },
  {
    id: 10,
    title: "Moduli: Vetullat – 360 orë",
    category: "brows",
    duration: "360 orë",
    durationCategory: "360-orë",
    level: "Mesëm deri në Avancuar",
    price: "140,000 Lekë",
    startDate: "1 Shtator 2025",
    schedule: "E Martë, E Enjte, E Shtunë (10:00 - 14:00)",
    image: "/courses/pmu-vetullat.jpg",
    description: "Kurs i avancuar 360-orësh për PMU, microblading, nanoblading dhe teknika estetike të vetullave.",
    longDescription: "Ky program 360-orësh mbulon historikun, anatominë e lëkurës dhe vetullës, higjenën profesionale, mjetet dhe pigmentet e avancuara, teknikat artistike, nanoblading profesional, vlerësimin estetik, korrigjimet, praktikën intensive dhe vlerësimin përfundimtar.",
    instructors: [
      {
        name: "Elira Meta",
        role: "Master PMU Artist",
        image: "/placeholder.svg?height=200&width=200&text=Elira+Meta",
        bio: "Me 7 vite përvojë në trajtime estetike të avancuara të vetullave."
      }
    ],
    curriculum: [
      {
        title: "Historiku dhe evolucion i PMU",
        lessons: [
          "Traditat e tatuazhit estetik",
          "PMU në dekadat e fundit",
          "Microblading & nanoblading në treg"
        ]
      },
      {
        title: "Anatomia e lëkurës dhe vetullës",
        lessons: [
          "Shtresat e lëkurës",
          "Mekanizmat e shërimit",
          "Vlerësimi i lëkurës"
        ]
      },
      {
        title: "Higjena & Siguria Profesionale",
        lessons: [
          "Protokollet e dezinfektimit",
          "Siguria e klientit & operatorit",
          "Ndërlikimet dhe mbrojtjet"
        ]
      },
      {
        title: "Mjetet, pajisjet & produktet",
        lessons: [
          "Pen manual & elektrik",
          "Gjilpëra 1R, 3R, 5F",
          "Pigment cups & shablona",
          "Anestezikë & aftercare"
        ]
      },
      {
        title: "Teknikat Artistike",
        lessons: [
          "Hair Stroke, Shading, Combo",
          "Microshading vs Microblading",
          "Efekt 3D"
        ]
      },
      {
        title: "Nanoblading Profesional",
        lessons: [
          "Nano-gjilpërë & precizion",
          "Aplikimi me makineri"
        ]
      },
      {
        title: "Vlerësimi Estetik & Matja",
        lessons: [
          "Raporti i artë",
          "Personalizim sipas fytyrës",
          "Softuer ndihmës"
        ]
      },
      {
        title: "Raste të veçanta & korrigjime",
        lessons: [
          "Neutralizimi ngjyrash",
          "Camouflage & heqje pigmenti"
        ]
      },
      {
        title: "Praktikë Intensive",
        lessons: [
          "Modele reale",
          "Ditari i punës"
        ]
      },
      {
        title: "Vlerësimi Përfundimtar",
        lessons: [
          "Test teorik & ese",
          "Test praktik & rezultat estetik"
        ]
      }
    ],
    benefits: [
      "Certifikim 360-orësh PMU & nanoblading",
      "Praktikë intensive dhe korrigjime profesionale",
      "Akses në pajisje & pigmentet më të fundit"
    ],
    materials: [
      "Pens manual & elektrik PMU",
      "Pigmente premium Biotek & Perma Blend",
      "Gjilpëra nano & mikro"
    ],
    testimonials: [
      {
        name: "Gerta Hoxha",
        role: "Master PMU Artist",
        image: "/placeholder.svg?height=100&width=100&text=Gerta+Hoxha",
        text: "Ky kurs i avancuar më transformoi aftësitë dhe karrierën në PMU."
      }
    ],
    faqs: [
      {
        question: "A kërkohet kurs 150-orësh?",
        answer: "Rekomandohet për të siguruar bazën e duhur."
      },
      {
        question: "A ka stazh praktik?",
        answer: "Po, praktika intensive me  modele reale."
      }
    ],
    featured: false,
    students: 0,
    media: [
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+1", alt: "Advanced barber course image 1" },
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+2", alt: "Advanced barber course image 2" },
      { type: "video", src: "/placeholder-video.mp4", alt: "Advanced barber overview video" },
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+3", alt: "Advanced barber course image 3" },
    ],
  },
  {
    id: 11,
    title: "Pigmentimi i Buzëve (PMU) – 150 orë",
    category: "pmu",
    duration: "150 orë",
    durationCategory: "150-orë",
    level: "Fillestar deri në Mesëm",
    price: "80,000 Lekë",
    startDate: "1 Tetor 2025",
    schedule: "E Hënë, E Mërkurë (17:00 - 20:00)",
    image: "/courses/pmu-buza.jpg",
    description: "Kurs bazik 150-orësh për pigmentimin profesional të buzëve me PMU.",
    longDescription: "Ky modul 150-orësh ju mëson historikun dhe teknikat bazë të pigmentimit të buzëve me PMU, duke përfshirë anatominë e buzëve, përdorimin e mjeteve, pigmentet, procedurat hap pas hapi dhe kujdesin post-trajtim.",
    instructors: [
      {
        name: "Anisa Dervishi",
        role: "PMU Artist",
        image: "/placeholder.svg?height=200&width=200&text=Anisa+Dervishi",
        bio: "Me 6 vite përvojë në trajtime PMU buzësh dhe trajtime estetike."
      }
    ],
    curriculum: [
      {
        title: "Hyrje në Pigmentimin e Buzëve",
        lessons: [
          "Çfarë është PMU i buzëve?",
          "Diferencat me make up-in tradicional",
          "Qëllimi: riformësim, simetri, intensitet"
        ]
      },
      {
        title: "Anatomia & Fiziologjia e Buzëve",
        lessons: [
          "Struktura e lëkurës së buzëve",
          "Roli i melanociteve në pigmentim"
        ]
      },
      {
        title: "Mjetet & Aparatura",
        lessons: [
          "Makineria PMU: futja e pigmentit",
          "Kartusha iJetat: njëpërdorimshme",
          "Laps matës: shënime simetrie"
        ]
      },
      {
        title: "Pigmentet",
        lessons: [
          "Organik: Pink, Coral (natyralizim)",
          "Inorganik: Terracota (korrigjim)"
        ]
      },
      {
        title: "Procedura Hap Pas Hapi",
        lessons: [
          "Dezinfektimi i zonës",
          "Vizatimi paraprak (mapping)",
          "Zgjedhja & aplikimi i pigmentit",
          "Aftercare post-trajtim"
        ]
      },
      {
        title: "Pas Trajtimi",
        lessons: [
          "Çfarë të shmangë klientja",
          "Produktet e rekomanduara"
        ]
      },
      {
        title: "Kontraindikacionet",
        lessons: [
          "Diabet, shtatzëni, sëmundje autoimune"
        ]
      }
    ],
    benefits: [
      "Trajnim profesional 150-orësh PMU buzësh",
      "Njohuri të plotë duke nga anatomia deri te aftercare",
      "Certifikim të njohur në industrinë e PMU"
    ],
    materials: [
      "Makineri PMU dhe kartusha njëpërdorimshme",
      "Pigmente premium organike & inorganike",
      "Laps matës dhe produkte dezinfektimi"
    ],
    testimonials: [
      {
        name: "Arta Hoxha",
        role: "PMU Artist",
        image: "/placeholder.svg?height=100&width=100&text=Arta+Hoxha",
        text: "Kursi 150-orësh më dha bazat e nevojshme për të filluar karrierën në PMU buzësh."
      }
    ],
    faqs: [
      {
        question: "A kërkohet përvoja paraprake?",
        answer: "Jo, kursi fillon nga bazat dhe ofron trajnim hap pas hapi."
      },
      {
        question: "Sa zgjat periudha e shërimit?",
        answer: "Rreth 4-6 javë për rigjenerim dhe retushime."
      }
    ],
    featured: false,
    students: 0,
    media: [
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+1", alt: "Advanced barber course image 1" },
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+2", alt: "Advanced barber course image 2" },
      { type: "video", src: "/placeholder-video.mp4", alt: "Advanced barber overview video" },
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+3", alt: "Advanced barber course image 3" },
    ],
  },
  {
    id: 12,
    title: "Pigmentimi i Buzëve (PMU) – 360 orë",
    category: "pmu",
    duration: "360 orë",
    durationCategory: "360-orë",
    level: "Mesëm deri në Avancuar",
    price: "160,000 Lekë",
    startDate: "1 Tetor 2025",
    schedule: "E Martë, E Enjte, E Shtunë (10:00 - 14:00)",
    image: "/courses/pmu-buza.jpg",
    description: "Program i avancuar 360-orësh për teknika të avancuara të PMU buzëve, korrigjime dhe trajtime pas-zgjidhje.",
    longDescription: "Ky kurs i avancuar mbulon historikun e PMU buzëve, anatominë e thelluar, mjetet e avancuara, teknikat klasifikimit (Lip Blush, Contouring, Full Lips) dhe praktikë intensive me modele dhe latex.",
    instructors: [
      {
        name: "Anisa Dervishi",
        role: "Master PMU Artist",
        image: "/placeholder.svg?height=200&width=200&text=Anisa+Dervishi",
        bio: "Eksperte me 6 vite përvojë në PMU buzësh dhe procedura të avancuara."
      }
    ],
    curriculum: [
      {
        title: "Historiku i Pigmentimit të Buzëve",
        lessons: [
          "Origjina e PMU",
          "Zhvillimi teknologjik"
        ]
      },
      {
        title: "Anatomia e Thelluar e Buzëve",
        lessons: [
          "Shtresat e lëkurës",
          "Rrjeti vaskular & fototipi Fitzpatrick"
        ]
      },
      {
        title: "Mjetet e Avancuara",
        lessons: [
          "Makineri digitale & pen manual",
          "Gjilpëra Nano/Sloped",
          "Anestezikë lokalë"
        ]
      },
      {
        title: "Klasifikimi i Teknikave",
        lessons: [
          "Lip Blush, Contouring, Full Lips, Color Correction"
        ]
      },
      {
        title: "Rregullat e Dizajnit",
        lessons: [
          "Forma buzësh sipas fytyrës",
          "Mapping dhe pika qendrore"
        ]
      },
      {
        title: "Pas Trajtimi & Monitorimi",
        lessons: [
          "Periudha 1-14 ditë & kujdesi për secilën ditë"
        ]
      },
      {
        title: "Pigmentet & Fototipi",
        lessons: [
          "Zgjedhja e pigmentit sipas Fitzpatrick"
        ]
      },
      {
        title: "Raste Specifike & Korrigjime",
        lessons: [
          "Hipopigmentim, neutralizim, asimetri"
        ]
      },
      {
        title: "Trajnimi Praktik",
        lessons: [
          "Modele reale & latex"
        ]
      },
      {
        title: "Vlerësimi Përfundimtar",
        lessons: [
          "Test teorik & praktik"
        ]
      }
    ],
    benefits: [
      "Certifikim 360-orësh PMU buzësh",
      "Trajtim i avancuar dhe korrigjime profesionale",
      "Praktikë intensive dhe mentoring"
    ],
    materials: [
      "Makineri digitale PMU",
      "Gjilpëra Nano/Sloped & pigment premium",
      "Aftercare dhe anestezikë lokalë"
    ],
    testimonials: [
      {
        name: "Arta Haxhiu",
        role: "PMU Artist",
        image: "/placeholder.svg?height=100&width=100&text=Arta+Haxhiu",
        text: "Kursi 360-orësh transformoi aftësitë e mia dhe më lejoi të ofroj shërbime premium."
      }
    ],
    faqs: [
      {
        question: "A duhet të kem modul 150-orësh?",
        answer: "Rekomandohet për njohuritë bazë."
      },
      {
        question: "A kemi retushime?",
        answer: "Ofron retushim pas 4-6 javë."
      }
    ],
    featured: false,
    students: 0,
    media: [
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+1", alt: "Advanced barber course image 1" },
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+2", alt: "Advanced barber course image 2" },
      { type: "video", src: "/placeholder-video.mp4", alt: "Advanced barber overview video" },
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+3", alt: "Advanced barber course image 3" },
    ],
  },
  {
    id: 13,
    title: "PMU Eyeliner (Peneli) – 150 orë",
    category: "pmu",
    duration: "150 orë",
    durationCategory: "150-orë",
    level: "Fillestar – Mesëm",
    price: "75,000 Lekë",
    startDate: "1 Nëntor 2025",
    schedule: "E Hënë, E Mërkurë (17:00 - 20:00)",
    image: "/courses/pmu-eyeliner.jpg",
    description: "Modul bazik 150-orësh për aplikimin klasik të penelit permanent në sy.",
    longDescription: "Ky modul 150-orësh për PMU Eyeliner mbulon historikun, anatomia e syrit, instrumentet bazë, teknikat klasike të aplikimit, dhe kujdesin pas procedurës.",
    instructors: [
      {
        name: "Lorena Gjoni",
        role: "PMU Eyeliner Specialist",
        image: "/placeholder.svg?height=200&width=200&text=Lorena+Gjoni",
        bio: "Me 5 vite përvojë në eyeliner permanent dhe trajnime profesionale."
      }
    ],
    curriculum: [
      {
        title: "Hyrje në Penelin Permanent (PMU Eyeliner)",
        lessons: [
          "Qëllimi: përmirësim forme sysh",
          "Llojet: Classic, Dusty, Lash Enhancement",
          "Indikacionet & kontraindikacionet"
        ]
      },
      {
        title: "Anatomia & Morfologjia e Syrit",
        lessons: [
          "Kapaku sipërm & poshtëm",
          "Lëkura rreth syrit & elasticiteti"
        ]
      },
      {
        title: "Instrumentet & Pajisjet",
        lessons: [
          "Makineri dermografike",
          "Igle 1P, 3P",
          "Pigmentë të testuar oftalmologjikisht"
        ]
      },
      {
        title: "Tektikat e Aplikimit – Penel Klasik",
        lessons: [
          "Vija klasike me një ose dy kalime",
          "Thellimi në vijën e qerpikëve"
        ]
      },
      {
        title: "Kujdesi Pas Procedurës",
        lessons: [
          "Dita 1–3: pa makeup, krem rigjenerues",
          "Dita 4–7: reduktim enjtjes",
          "Pas 30 ditësh: kontroll & ritrajtim"
        ]
      }
    ],
    benefits: [
      "Trajnim bazik 150-orësh PMU eyeliner",
      "Aftësi për aplikim klasik dhe sigurim rezultati"
    ],
    materials: [
      "Makineri dermografike",
      "Set iglësh 1P,3P",
      "Pigmente sysh pa metal"
    ],
    testimonials: [
      {
        name: "Elda Rama",
        role: "Artist PMU",
        image: "/placeholder.svg?height=100&width=100&text=Elda+Rama",
        text: "Ky kurs më ndihmoi të masteroj teknikat bazike të eyeliner-it permanent."
      }
    ],
    faqs: [
      {
        question: "A kërkohet përvoje paraprake?",
        answer: "Jo, ky modul fillestar mbulon të gjitha bazat."
      }
    ],
    featured: false,
    students: 0,
    media: [
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+1", alt: "Advanced barber course image 1" },
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+2", alt: "Advanced barber course image 2" },
      { type: "video", src: "/placeholder-video.mp4", alt: "Advanced barber overview video" },
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+3", alt: "Advanced barber course image 3" },
    ],
  },
  {
    id: 14,
    title: "PMU Eyeliner (Peneli) – 360 orë",
    category: "pmu",
    duration: "360 orë",
    durationCategory: "360-orë",
    level: "Mesëm deri në Avancuar",
    price: "150,000 Lekë",
    startDate: "1 Nëntor 2025",
    schedule: "E Martë, E Enjte, E Shtunë (10:00 - 14:00)",
    image: "/courses/pmu-eyeliner.jpg",
    description: "Program i avancuar 360-orësh për teknikat e plota të PMU eyeliner-it.",
    longDescription: "Kurs i plotë 360-orësh që mbulon historikun, klasifikimin e teknikave, përshtatjen sipas formës së syrit, produkte të rekomanduara, gabimet e zakonshme dhe praktikat e pas-trajtimit.",
    instructors: [
      {
        name: "Lorena Gjoni",
        role: "Master PMU Eyeliner Artist",
        image: "/placeholder.svg?height=200&width=200&text=Lorena+Gjoni",
        bio: "Eksperte me 7 vite eksperiencë në teknikat më të avancuara PMU eyeliner."
      }
    ],
    curriculum: [
      {
        title: "Historiku & Zhvillimi i Teknikave",
        lessons: [
          "Para 2000: penel klasik",
          "2000–2015: dusty eyeliner",
          "2016–sot: smoky & gradient"
        ]
      },
      {
        title: "Klasifikimi i Teknikave",
        lessons: [
          "Classic, Lash Enhancement, Dusty",
          "Winged & Smoky Eyeliner"
        ]
      },
      {
        title: "Përshtatja për Format e Syve",
        lessons: [
          "Sy të vegjël: Lash Enhancement",
          "Sy të mëdhenj: Winged, Dusty"
        ]
      },
      {
        title: "Produkte të Rekomanduara",
        lessons: [
          "Pigmentë të zinj, kafe, grafit",
          "Krem anestetik pH neutral"
        ]
      },
      {
        title: "Gabimet & Zgjidhjet",
        lessons: [
          "Linjë e trashë → skicë paraprake",
          "Asimetri → ndarje në faza"
        ]
      },
      {
        title: "Higjiena & Siguria",
        lessons: [
          "Sterilizim & përdorim dorezash",
          "Zona sterile & njëpërdorimësh"
        ]
      },
      {
        title: "Pas Trajtimit (Post-care)",
        lessons: [
          "1–3: krem rigjenerues",
          "4–7: pa makeup",
          "30–45: ritrajtim"
        ]
      }
    ],
    benefits: [
      "Aftësi të avancuara në PMU eyeliner",
      "Certifikim 360-orësh",
      "Praktikë intensive dhe korrigjime"
    ],
    materials: [
      "Makineri digitale & manuale",
      "Igle 1P,3P,5F",
      "Pigmente të testuara oftalmologjikisht"
    ],
    testimonials: [
      {
        name: "Erjola Ndreca",
        role: "Artist PMU",
        image: "/placeholder.svg?height=100&width=100&text=Erjola+Ndreca",
        text: "Ky program 360-orësh më dha teknikë dhe saktësi të pakrahasueshme."
      }
    ],
    faqs: [
      {
        question: "A duhet kurs 150-orësh?",
        answer: "Rekomandohet për bazat, por mund t’filloni direkt në 360h nëse keni përvojë."
      }
    ],
    featured: false,
    students: 0,
    media: [
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+1", alt: "Advanced barber course image 1" },
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+2", alt: "Advanced barber course image 2" },
      { type: "video", src: "/placeholder-video.mp4", alt: "Advanced barber overview video" },
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+3", alt: "Advanced barber course image 3" },
    ],
  },
  {
    id: 15,
    title: "Scalp Micropigmentation – 150 orë",
    category: "smp",
    duration: "150 orë",
    durationCategory: "150-orë",
    level: "Fillestar",
    price: "85,000 Lekë",
    startDate: "1 Nëntor 2025",
    schedule: "E Hënë, E Mërkurë (17:00 - 20:00)",
    image: "/placeholder.svg?height=600&width=800&text=SMP+150h",
    description: "Kurs bazik 150-orësh për mikropigmentimin e skalpit (SMP) për zone të rralla flokësh.",
    longDescription: "Ky modul fillestar 150-orësh mbulon teorinë e SMP-së, llojet e alopecisë, mjetet bazë dhe teknikat primitive të aplikimit për imitimin e folikulave të flokëve.",
    instructors: [
      {
        name: "Altin Xhafa",
        role: "SMP Specialist",
        image: "/placeholder.svg?height=200&width=200&text=Altin+Xhafa",
        bio: "Me 6 vite eksperiencë në mikropigmentim skalpi."
      }
    ],
    curriculum: [
      {
        title: "Hyrje në SMP",
        lessons: [
          "Qëllimi: kamuflim zonash pa flokë",
          "Target: alopeci androgenetike, areata"
        ]
      },
      {
        title: "Llojet e Alopecisë",
        lessons: [
          "Androgjenike, Areata, pas transplantit"
        ]
      },
      {
        title: "Mjetet & Pigmentet",
        lessons: [
          "Makineri PMU mikromotor",
          "Igle 3RL,5RL,1RL",
          "Pigmente gri & grafit"
        ]
      },
      {
        title: "Teknika Bazike Aplikimi",
        lessons: [
          "Përdorimi rrjetash për simetri",
          "Goditje vertikale me densitet kontrolluar"
        ]
      },
      {
        title: "Kujdesi Pas Trajtimit",
        lessons: [
          "1–3: pa ujë, locion rigjenerues",
          "30–45: seancë kontrolli"
        ]
      }
    ],
    benefits: [
      "Njohuri bazike SMP për mimikrim folikulash",
      "Certifikim 150-orësh SMP"
    ],
    materials: [
      "Makineri SMP & pigmente gri",
      "Igle 1RL,3RL,5RL"
    ],
    testimonials: [
      {
        name: "Drin Leka",
        role: "SMP Artist",
        image: "/placeholder.svg?height=100&width=100&text=Drin+Leka",
        text: "Kurs bazik SMP më ndihmoi të kuptoj bazat dhe teknikat primitive."
      }
    ],
    faqs: [
      {
        question: "A mund të filloj pa eksperiencë?",
        answer: "Po, kursi mbulon të gjitha bazat e nevojshme."
      }
    ],
    featured: false,
    students: 0,
    media: [
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+1", alt: "Advanced barber course image 1" },
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+2", alt: "Advanced barber course image 2" },
      { type: "video", src: "/placeholder-video.mp4", alt: "Advanced barber overview video" },
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+3", alt: "Advanced barber course image 3" },
    ],
  },
  {
    id: 16,
    title: "Scalp Micropigmentation – 360 orë",
    category: "smp",
    duration: "360 orë",
    durationCategory: "360-orë",
    level: "Mesëm deri në Avancuar",
    price: "170,000 Lekë",
    startDate: "1 Nëntor 2025",
    schedule: "E Martë, E Enjte, E Shtunë (10:00 - 14:00)",
    image: "/placeholder.svg?height=600&width=800&text=SMP+360h",
    description: "Program i avancuar 360-orësh SMP me teknika të avancuara dhe trajtime 3D.",
    longDescription: "Ky kurs përfshin anatominë e skalpit, teknikat e avancuara SMP, zgjedhjen e pigmentit sipas fototipit, iglat dhe thellësinë e aplikimit, gabimet e zakonshme dhe praktika intensive.",
    instructors: [
      {
        name: "Altin Xhafa",
        role: "Master SMP Artist",
        image: "/placeholder.svg?height=200&width=200&text=Altin+Xhafa",
        bio: "Ekspert me eksperiencë 8-vjeçare në SMP dhe teknika 3D."
      }
    ],
    curriculum: [
      {
        title: "Anatomia e Skalpit & Cikli i Flokëve",
        lessons: [
          "Follikulat e flokëve",
          "Vaskularizimi dhe shërimi"
        ]
      },
      {
        title: "Teknika të Avancuara SMP",
        lessons: [
          "Densitet i lartë, gradient, 3D",
          "Hairline Reconstruction"
        ]
      },
      {
        title: "Zgjedhja e Pigmentit & Fototipi",
        lessons: [
          "Fitzpatrick I–VI & ngjyrat e përshtatshme"
        ]
      },
      {
        title: "Igle & Thellësia",
        lessons: [
          "1RL – 0.5mm (hairline)",
          "3RL – 0.8mm (majë)"
        ]
      },
      {
        title: "Gabimet & Zgjidhjet",
        lessons: [
          "Pikëzime të mëdha → igla më e hollë",
          "Pa simetri → vizatim paraprak"
        ]
      },
      {
        title: "Post Trajtimi & Mirëmbajtja",
        lessons: [
          "1–7: pa ujë, pa diell",
          "Pas 30 ditësh: ritrajtim"
        ]
      },
      {
        title: "Praktikë në Modele Reale",
        lessons: [
          "Aplikim frontale & densitet kontrolluar"
        ]
      },
      {
        title: "Vlerësimi Përfundimtar",
        lessons: [
          "Test teori & praktik"
        ]
      }
    ],
    benefits: [
      "Certifikim 360-orësh SMP",
      "Teknika 3D & hairline reconstruction",
      "Praktikë intensive dhe mentoring"
    ],
    materials: [
      "Makineri SMP profesionale",
      "Pigmente për fototip I–VI"
    ],
    testimonials: [
      {
        name: "Enis Meta",
        role: "SMP Artist",
        image: "/placeholder.svg?height=100&width=100&text=Enis+Meta",
        text: "Kursi 360h më mundësoi të masteroj teknikat më të avancuara SMP."
      }
    ],
    faqs: [
      {
        question: "A kam nevojë për kurs 150h?",
        answer: "Rekomandohet për bazat, por mund të filloj direkt në 360h."
      }
    ],
    featured: false,
    students: 0,
    media: [
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+1", alt: "Advanced barber course image 1" },
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+2", alt: "Advanced barber course image 2" },
      { type: "video", src: "/placeholder-video.mp4", alt: "Advanced barber overview video" },
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+3", alt: "Advanced barber course image 3" },
    ],
  },
    {
    id: 17,
    title: "PMU Aureola e Gjirit – 150 orë",
    category: "pmu",
    duration: "150 orë",
    durationCategory: "150-orë",
    level: "Fillestar deri në Mesëm",
    price: "90,000 Lekë",
    startDate: "1 Tetor 2025",
    schedule: "E Martë, E Enjte (17:00 - 21:00)",
    image: "/placeholder.svg?height=600&width=800&text=PMU+Areola",
    description:
      "Ky kurs 150-orësh ofron njohuri teorike dhe praktike mbi mikropigmentimin rekonstruktiv të aureolës së gjirit pas mastektomisë.",
    longDescription:
      "Në këtë modul të specializuar, do të mësoni historikun e PMU, teknikën 2D për rikonstruksionin estetik dhe emocional të aureolës, standardet higjienike dhe menaxhimin psiko-emocional të klienteve.",
    instructors: [
      {
        name: "Dr. Elira Berisha",
        role: "Specialiste PMU Areola",
        image: "/placeholder.svg?height=200&width=200&text=Instructor",
        bio: "Me 8 vite përvojë në mikropigmentimin rekonstruktiv pas ndërhyrjeve kirurgjikale."
      }
    ],
    curriculum: [
      {
        title: "1. Hyrje në PMU për Aureolën e Gjirit",
        lessons: [
          "Qëllimi: rikonstruksion estetik dhe emocional pas mastektomisë",
          "Klientela: gra pas mastektomie, reduktim gjoksi, trauma",
          "Përfitimet: rikthim vetëbesimi dhe balancë psikologjike"
        ]
      },
      {
        title: "2. Njohuri bazë mbi strukturën e gjirit dhe aureolës",
        lessons: [
          "Zona me pigment përreth thithës (areola)",
          "Rikonstruksion i thithës së ri ose mungesë",
          "Menaxhimi i lëkurës së ndjeshme pas kirurgjisë"
        ]
      },
      {
        title: "3. Mjetet dhe produktet bazike",
        lessons: [
          "Makineri PMU me kontroll thellësie",
          "Igle 1RL, 3RS, 5RS për kontur dhe mbushje",
          "Pigmentë bioresorbues të certifikuar",
          "Kompas për simetri"
        ]
      },
      {
        title: "4. Hapat e procedurës bazike (2D)",
        lessons: [
          "Konsultim me klientin dhe miratim me shkrim",
          "Zgjedhja e ngjyrës sipas tonit të lëkurës",
          "Vizatim paraprak me laps",
          "Pigmentim kontur dhe mbushje uniforme",
          "Kontroll pas 30 ditësh për përforcim"
        ]
      },
      {
        title: "5. Pigmentimi sipas fototipit të lëkurës",
        lessons: [
          "I – shumë e bardhë: bezhë trëndafili e ftohtë",
          "II – e bardhë: bezhë kafe e hapur",
          "III – mesatare: rozë-kafe natyrale",
          "IV – e zeshkët: kafe e ngrohtë me nuanca të errëta",
          "V–VI: kafe e thellë me reflektime gri ose ulliri"
        ]
      },
      {
        title: "6. Kujdesi pas trajtimit (Post Care)",
        lessons: [
          "1–3 ditë: mos lahet zona, aplikim pomadë sterile",
          "4–7 ditë: shmangni rrobat sintetike dhe djersitjen",
          "7–30 ditë: kontroll për zbehje pigmenti – plotësim në seancë të dytë"
        ]
      }
    ],
    benefits: [
      "Rikthim i vetëbesimit dhe mirëqenie emocionale",
      "Aftësi teknike në mikropigmentim rekonstruktiv",
      "Certifikim për procedura pas mastektomie",
      "Mbështetje psiko-emocionale për klientet"
    ],
    materials: [
      "Makineri PMU me kontroll thellësie",
      "Set iglash 1RL, 3RS, 5RS",
      "Pigmentë bioresorbues",
      "Kompas dhe laps matës"
    ],
    testimonials: [
      {
        name: "Alda Hoxha",
        role: "Mbajtëse Kursesh PMU",
        image: "/placeholder.svg?height=100&width=100&text=Student",
        text: "Ky kurs më dha aftësitë e nevojshme për të ndihmuar pacientet pas mastektomisë të rimarrin besimin."
      }
    ],
    faqs: [
      {
        question:
          "A mund të bëhet trajtimi menjëherë pas mastektomisë?",
        answer:
          "Rekomandohet të prisni të paktën 6–12 muaj për rimëkëmbje të plotë të lëkurës para PMU."
      },
      {
        question: "Sa kohë reziston pigmenti?",
        answer:
          "Zakonisht 5–7 vjet, varësisht nga kujdesi pas trajtimit."
      }
    ],
    featured: false,
    students: 0,
    media: [
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+1", alt: "Advanced barber course image 1" },
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+2", alt: "Advanced barber course image 2" },
      { type: "video", src: "/placeholder-video.mp4", alt: "Advanced barber overview video" },
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+3", alt: "Advanced barber course image 3" },
    ],
  },
  {
    id: 18,
    title: "PMU Aureola e Gjirit – 360 orë",
    category: "pmu",
    duration: "360 orë",
    durationCategory: "360-orë",
    level: "Avancuar",
    price: "160,000 Lekë",
    startDate: "1 Tetor 2025",
    schedule: "E Hënë, E Mërkurë, E Premte (10:00 - 15:00)",
    image: "/placeholder.svg?height=600&width=800&text=Areola+3D+PMU",
    description:
      "Program 360-orësh për teknika 3D të avancuara në mikropigmentimin realist të aureolës pas mastektomisë.",
    longDescription:
      "Ky kurs profesional thellon aftësitë tuaja në krijimin e efektit 3D me shtresim gradient, menaxhimin e rasteve komplekse (plagë, implantë), dhe etikën profesionale në bashkëpunim me kirurgët plastikë.",
    instructors: [
      {
        name: "Dr. Elira Berisha",
        role: "Master PMU Areola",
        image: "/placeholder.svg?height=200&width=200&text=Instructor",
        bio: "Eksperte me 10 vite në mikropigmentim rekonstruktiv të areolës dhe bashkëpunime ndërkombëtare."
      },
      {
        name: "Ana Qose",
        role: "Psychology Consultant",
        image: "/placeholder.svg?height=200&width=200&text=Instructor",
        bio: "Specialiste në mbështetje psiko-emocionale të pacientëve post-kirurgjik."
      }
    ],
    curriculum: [
      {
        title: "1. Mikropigmentimi 3D – simulim thellësie",
        lessons: [
          "Iluzioni i relievit të aureolës",
          "Shtresim me tre tonale: kontur, mbushje, dritë",
          "Përdorimi i iglave 1RL, 3RS, 5RS"
        ]
      },
      {
        title: "2. Gradienti i ngjyrave për Aureolë 3D",
        lessons: [
          "Ton i errët: kontur",
          "Ton mesatar: mbushje bazike",
          "Ton i hapur: efekt dritë"
        ]
      },
      {
        title: "3. Protokolli për plagë dhe implante",
        lessons: [
          "Trajtimi i lëkurës së plagosur: presion minimal",
          "Shmangie tensioni në zona me implantë",
          "Koordinim me kirurg plastik"
        ]
      },
      {
        title: "4. Pigmentimi sipas undertone",
        lessons: [
          "Undertone Rozë: bezhë e ftohtë",
          "Undertone e Verdhe: trëndafil i ngrohtë",
          "Ulliri: neutralizim kafe"
        ]
      },
      {
        title: "5. Gabime dhe korrigjime",
        lessons: [
          "Asimetri: matje paraprake me kompas",
          "Depërtim i tepruar: kontroll presioni",
          "Ngjyrë e papërshtatshme: prova test paraprake"
        ]
      },
      {
        title: "6. Roli psiko-social i estetistit",
        lessons: [
          "Komunikimi emocional me pacientet",
          "Mbështetje për vetëbesim",
          "Etikë profesionale në trajtime rekonstruktive"
        ]
      },
      {
        title: "7. Praktika në lëkurë sintetike dhe modele reale",
        lessons: [
          "Simulime 2D/3D në latex",
          "Trajtim praktik me kirurgë plastikë",
          "Dokumentimi dhe ndërtimi portofoli"
        ]
      }
    ],
    benefits: [
      "Ekspertizë 3D në rimodelimin e aureolës",
      "Komunikim psiko-emocional me pacientet",
      "Certifikim Avancuar PMU Rekonstruktiv",
      "Bashkëpunim me kirurgë plastikë"
    ],
    materials: [
      "Pigmentë bioresorbues premium",
      "Set iglash 1RL, 3RS, 5RS",
      "LATEX për praktikë 3D",
      "Kompas, laps matës"
    ],
    testimonials: [
      {
        name: "Roza Dervishi",
        role: "Paciente e Rikthyer",
        image: "/placeholder.svg?height=100&width=100&text=Student",
        text: "Trajtimi 3D ndryshoi jetën time – ndihesha përsëri komplet pas rikonstruksionit."
      }
    ],
    faqs: [
      {
        question:
          "A mund të trajtohet aureola mbi implantë silikon?",
        answer:
          "Po, por kërkohet koordinim me mjekun plastik për kohën e duhur pas kirurgjisë."
      },
      {
        question: "Sa kohë zgjat efekti 3D?",
        answer:
          "Rreth 5–7 vjet, me mirëmbajtje periodike sipas udhëzimeve."
      }
    ],
    featured: false,
    students: 0,
    media: [
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+1", alt: "Advanced barber course image 1" },
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+2", alt: "Advanced barber course image 2" },
      { type: "video", src: "/placeholder-video.mp4", alt: "Advanced barber overview video" },
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+3", alt: "Advanced barber course image 3" },
    ],
  },
  {
    id: 19,
    title: "Eyelash Extension – 150 orë",
    category: "lashes",
    duration: "150 orë",
    durationCategory: "150-orë",
    level: "Fillestar deri në Mesëm",
    price: "35,000 Lekë",
    startDate: "1 Tetor 2025",
    schedule: "E Martë, E Enjte (17:00 - 20:00)",
    image: "/courses/qerpik-klasik-kurs-baze.jpg",
    description:
      "Ky kurs 150-orësh ofron bazat dhe teknikat klasike për aplikimin profesional të qerpikëve artificial.",
    longDescription:
      "Në këtë program do të mësoni llojet kryesore të qerpikëve, higjienën, sterilitetin, si dhe teknikat Classic 1:1, Hybrid dhe Mega Volume, dhe kujdesin pas aplikimit.",
    instructors: [
      {
        name: "Ana Lleshi",
        role: "Specialiste Lash Extensions",
        image: "/placeholder.svg?height=200&width=200&text=Instructor",
        bio: "Me 5 vite përvojë në lash extension dhe trajnime ndërkombëtare."
      }
    ],
    curriculum: [
      {
        title: "1. Hyrje në Lash Extension",
        lessons: [
          "Qëllimi: theksim i bukurisë së syve me qerpikë artificial",
          "Klientela: femra dhe meshkuj që kërkojnë efekt natyral ose dramatik"
        ]
      },
      {
        title: "2. Mjetet dhe produktet bazë",
        lessons: [
          "Pinseta klasike, volume dhe hajdare",
          "Qerpikë sintetikë (silk, mink, flat)",
          "Ngjitës profesional hypoallergjenik",
          "Pad nën sy dhe mikrobrush"
        ]
      },
      {
        title: "3. Teknikat bazë",
        lessons: ["Classic 1:1", "Hybrid (1:2,1:3)", "Mega Volume (4D–15D)"]
      },
      {
        title: "4. Hapat teknikë të procedurës",
        lessons: [
          "Konsultimi dhe analiza e formës së syrit",
          "Higjienizimi dhe vendosja e pad-it",
          "Aplikimi qerpik më qerpik",
          "Kontroll, fiksim dhe krehje finale"
        ]
      },
      {
        title: "5. Forma e syrit & modeli i qerpikut",
        lessons: [
          "Sy të rrumbullakët → Cat Eye, Kim Effect",
          "Sy të vegjël → Doll Effect, Anime",
          "Sy të zbritur → Wispy, Open Eye",
          "Sy me palë lëkure → Wet Look, Kim"
        ]
      },
      {
        title: "6. Këshilla për klientin pas trajtimit",
        lessons: [
          "Mos i lagni për 24h",
          "Mos fërkoni sytë",
          "Përdorni furçë speciale për krehje",
          "Rifreskim pas 2–3 javësh"
        ]
      }
    ],
    benefits: [
      "Njohuri bazë për lash extension",
      "Certifikim në tre teknikat kryesore",
      "Mundësi punësimi në sallone bukurie",
      "Portofol me stile të ndryshme lash"
    ],
    materials: [
      "Pinseta klasike, volume, hajdare",
      "Qerpikë sintetikë: silk, mink, flat",
      "Ngjitës hypoallergjenik",
      "Pad nën sy, mikrobrush"
    ],
    testimonials: [
      {
        name: "Elisa Hysi",
        role: "Lash Artist",
        image: "/placeholder.svg?height=100&width=100&text=Student",
        text: "Ky kurs më dha besimin dhe teknikën për të filluar si lash artist."
      }
    ],
    faqs: [
      {
        question: "Sa zgjat lash extension?",
        answer:
          "Classic: 2–3 javë; Hybrid: 3–4 javë; Volume: 4–5 javë."
      },
      {
        question: "A dëmton qerpikët natyralë?",
        answer:
          "Jo, nëse aplikohen në mënyrë profesionale dhe me ngjitës adekuat."
      }
    ],
    featured: false,
    students: 0,
    media: [
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+1", alt: "Advanced barber course image 1" },
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+2", alt: "Advanced barber course image 2" },
      { type: "video", src: "/placeholder-video.mp4", alt: "Advanced barber overview video" },
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+3", alt: "Advanced barber course image 3" },
    ],
  },
  {
    id: 20,
    title: "Eyelash Extension – 360 orë",
    category: "lashes",
    duration: "360 orë",
    durationCategory: "360-orë",
    level: "Avancuar",
    price: "70,000 Lekë",
    startDate: "1 Tetor 2025",
    schedule: "E Hënë, E Mërkurë, E Premte (09:00 - 13:00)",
    image: "/courses/qerpik-volume-avancuar.jpg",
    description:
      "Program 360-orësh për teknika të avancuara, profilizim sipas formës së syrit dhe personalizim efektesh lash.",
    longDescription:
      "Në këtë kurs të avancuar do të mësoni teknikat më të reja (Wet Look, Kim Effect, Wispy, Anime, Cat Eye), analizën morfologjike për zgjedhjen optimale të curl, gjatësi e dendësi, si dhe protokollet e higjienës e komunikimit me klientë specifikë.",
    instructors: [
      {
        name: "Ana Lleshi",
        role: "Master Lash Artist",
        image: "/placeholder.svg?height=200&width=200&text=Instructor",
        bio: "Eksperte me 7 vite përvojë në lash extension dhe trajnime në Kore."
      }
    ],
    curriculum: [
      {
        title: "1. Teknikat e Avancuara",
        lessons: [
          "Wet Look",
          "Kim Effect",
          "Wispy Effect",
          "Anime Effect",
          "Cat Eye",
          "Doll Effect",
          "Eyeliner Effect"
        ]
      },
      {
        title: "2. Profilizimi sipas morfologjisë së syrit",
        lessons: [
          "Sy të vegjël → L/M curl, 8–11mm, 2D–4D",
          "Sy të dendur → D curl, 10–14mm, 4D–6D",
          "Sy të zbritur → L curl, 9–12mm, 3D–5D",
          "Sy oriental → M curl, 8–13mm, 5D–10D"
        ]
      },
      {
        title: "3. Higjiena dhe steriliteti",
        lessons: [
          "Dezinfektimi i pinsetave",
          "Pastrimi i qerpikëve me lash shampoo",
          "Përdorimi i maskës dhe dorezave",
          "Ngjitës hypoallergjenik"
        ]
      },
      {
        title: "4. Pranimi i klientëve me raste specifike",
        lessons: [
          "Sy qaramel → kontroll lagështie gjatë aplikimit",
          "Lëkurë e yndyrshme → ngjitës me kohë punimi të shkurtër",
          "Qerpikë natyral të rrallë → teknika pikëzimi"
        ]
      },
      {
        title: "5. Formimi profesional & praktikë",
        lessons: [
          "Ushtrime në manekinë dhe latex",
          "Analiza para/pas me foto",
          "Ndërtimi i portofolit personal"
        ]
      },
      {
        title: "6. Tabelë e krahasimit të teknikave",
        lessons: [
          "Classic → Natural, 8–11mm, 1D, 2–3 javë",
          "Hybrid → Natural+vol, 9–13mm, 2D–3D, 3–4 javë",
          "Volume → Volum, 9–15mm, 4D–6D, 4 javë",
          "MegaVol → Supervolum, 10–16mm, 6D–15D, 4–5 javë"
        ]
      }
    ],
    benefits: [
      "Aftësi të avancuara në lash extension",
      "Certifikim si Master Lash Artist",
      "Portofol me stile të ndryshme lash",
      "Mundësi punësimi në studio premium"
    ],
    materials: [
      "Pinseta profesionale",
      "Qerpikë sintetike me lloje të ndryshme",
      "Lash shampoo dhe primer",
      "Ngjitës premium hypoallergjenik"
    ],
    testimonials: [
      {
        name: "Rea Doci",
        role: "Master Lash Artist",
        image: "/placeholder.svg?height=100&width=100&text=Student",
        text: "Ky kurs më ndihmoi të perfeksionoj teknikën dhe të rris karrierën time si lash artist."
      }
    ],
    faqs: [
      {
        question: "Sa zgjat lash extension Avancuar?",
        answer:
          "Varësisht nga teknika: 3–4 javë për Hybrid, 4–5 javë për Volume dhe MegaVol."
      },
      {
        question: "A kërkohet kursi bazik për këtë nivel?",
        answer:
          "Rekomandohet por nuk është i detyrueshëm për trajnim të avancuar."
      }
    ],
    featured: false,
    students: 0,
    media: [
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+1", alt: "Advanced barber course image 1" },
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+2", alt: "Advanced barber course image 2" },
      { type: "video", src: "/placeholder-video.mp4", alt: "Advanced barber overview video" },
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+3", alt: "Advanced barber course image 3" },
    ],
  },
{
    id: 21,
    title: "Shtimi & Lyerja e Vetullave – 150 orë",
    category: "brows",
    duration: "150 orë",
    durationCategory: "150-orë",
    level: "Fillestar deri në Mesëm",
    price: "40,000 Lekë",
    startDate: "1 Nëntor 2025",
    schedule: "E Hënë, E Mërkurë (17:00 - 20:00)",
    image: "/placeholder.svg?height=600&width=800&text=Brow+Lamination",
    description:
      "Trajnim 150-orësh në laminim, neutralizim dhe lyerje anatomike të vetullave, me fokus në teknikat klasike dhe kujdesin pas procedurës.",
    longDescription:
      "Ky kurs ju pajis me njohuritë dhe aftësitë bazë për të kryer laminimin dhe lyerjen profesionale të vetullave. Përmes sesioneve teorike dhe praktike, do të mësoni historikun, anatominë, produktet, mjetet, procedurën e plotë dhe këshillat pas trajtimit.",
    instructors: [
      {
        name: "Elira Dervishi",
        role: "Brow Artist & Trainer",
        image: "/placeholder.svg?height=200&width=200&text=Instructor",
        bio: "Me 6 vite përvojë në laminim dhe henna brows."
      }
    ],
    curriculum: [
      {
        title: "1. Historiku i Laminimit të Vetullave",
        lessons: [
          "Evolucioni i stilimit të vetullave",
          "Nevoja për vetulla të plota dhe të strukturuara"
        ]
      },
      {
        title: "2. Anatomia e Vetullës",
        lessons: [
          "Qimet e vetullës",
          "Cikli i rritjes së vetullës (Anagen – Catagen – Telogen)"
        ]
      },
      {
        title: "3. Produktet & Përbërësit Kryesorë",
        lessons: [
          "Solucioni i shtrimit: hap lidhjet disulfide (5–8′)",
          "Neutralizuesi: rifillon lidhjet (5–7′)",
          "Bojë/lëng për vetulla: jep ngjyrë (5–10′)",
          "Serumi ushqyes: hidratim & mbrojtje (nuk lahet)"
        ]
      },
      {
        title: "4. Mjetet e Nevojshme",
        lessons: [
          "Furça aplikimi",
          "Spatulë plastike",
          "Aplikatorë sterilë",
          "Penel matës",
          "Furçë për krehje"
        ]
      },
      {
        title: "5. Procedura – Hap Pas Hapi",
        lessons: [
          "Pastrimi i zonës",
          "Aplikimi i sol. të shtrimit",
          "Modelimi i formës",
          "Neutralizimi",
          "Lyerja e vetullave",
          "Aplikimi i serumit"
        ]
      },
      {
        title: "6. Këshilla Pas Trajtimit",
        lessons: [
          "Mos e lagni zonën për 24–48h",
          "Mos përdorni make-up direkt pas procedurës"
        ]
      }
    ],
    benefits: [
      "Certifikim në laminim & lyerje vetullash",
      "Trajnim praktik me produkte profesionale",
      "Aftësi për kujdes post-procedurë"
    ],
    materials: [
      "Solucion shtrim/neutralizues",
      "Pigmentë vetullash",
      "Set iglash & aplikatorë",
      "Serum ushqyes"
    ],
    testimonials: [
      {
        name: "Mira Kola",
        role: "Student Brow",
        image: "/placeholder.svg?height=100&width=100&text=Student",
        text: "Mësoja të gjitha hapat saktë – tani ofroj laminim të qëndrueshëm."
      }
    ],
    faqs: [
      {
        question: "Sa kohë zgjat efektin e laminimit?",
        answer: "Rreth 6–8 javë, në varësi të lëkurës dhe kujdesit."
      },
      {
        question: "A mund të përdor henna pas laminimit?",
        answer:
          "Po, por rekomandohet të prisni të paktën 48 orë pas laminimit."
      }
    ],
    featured: false,
    students: 0,
    media: [
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+1", alt: "Advanced barber course image 1" },
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+2", alt: "Advanced barber course image 2" },
      { type: "video", src: "/placeholder-video.mp4", alt: "Advanced barber overview video" },
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+3", alt: "Advanced barber course image 3" },
    ],
  },
  {
    id: 22,
    title: "Laminim + Henna + Brow Mapping – 360 orë",
    category: "brows",
    duration: "360 orë",
    durationCategory: "360-orë",
    level: "Avancuar",
    price: "120,000 Lekë",
    startDate: "1 Nëntor 2025",
    schedule: "E Hënë, E Mërkurë, E Premte (10:00 - 15:00)",
    image: "/placeholder.svg?height=600&width=800&text=Brow+Advanced",
    description:
      "Program i plotë 360-orësh që përfshin laminimin, henna-brows dhe brow mapping me standardet më të larta profesionale.",
    longDescription:
      "Ky kurs avancuar ju mëson historikun e laminimit dhe Henna Brows, analizon thellë anatominë dhe fiziologjinë e vetullës, dhe vjen me teknikat kryesore: brow mapping sipas Golden Ratio, shtresim gradient, dhe kombinime të personalizuara për çdo klient.",
    instructors: [
      {
        name: "Elira Dervishi",
        role: "Master Brow Artist",
        image: "/placeholder.svg?height=200&width=200&text=Instructor",
        bio: "Eksperte në Henna Brows dhe mapping me 8 vite praktikë."
      }
    ],
    curriculum: [
      {
        title: "1. Historiku & Trendet",
        lessons: [
          "Nga trajtimet klasike te laminimi modern",
          "Evolucioni i Henna Brows"
        ]
      },
      {
        title: "2. Anatomia & Fiziologjia",
        lessons: [
          "Cikli jetësor i vetullës",
          "Dallimet sipas llojit të lëkurës & trashësisë së qimeve"
        ]
      },
      {
        title: "3. Teknologjia & Produktet",
        lessons: [
          "Sol. #1 (Thioglicolate): hap strukturën",
          "Sol. #2 (H₂O₂): riformon strukturën",
          "Pigmente sintetike & Henna natyrale",
          "Scrub bazë pastruese"
        ]
      },
      {
        title: "4. Mjetet e Nevojshme",
        lessons: [
          "Penel matës për mapping",
          "Furçë krehjeje",
          "Aplikator silikoni",
          "Stencil/formëzues",
          "Mini pasqyrë"
        ]
      },
      {
        title: "5. Teknikat Kryesore",
        lessons: [
          "Brow Mapping sipas Golden Ratio",
          "Teknikat “Feathered” & “Structured”",
          "Kombinimi Henna + Laminim"
        ]
      },
      {
        title: "6. Procedura Profesionale",
        lessons: [
          "Konsultë & analiza forme",
          "Mapping & laminim",
          "Lyerje (bojë ose henna)",
          "Finishing & stilimi"
        ]
      },
      {
        title: "7. Këshilla & Gabime",
        lessons: [
          "Aplikimi i gjatë → djegie qimesh",
          "Asimetri → ndjekje hapi-hapi"
        ]
      }
    ],
    benefits: [
      "Specializim në Henna Brows & Mapping",
      "Portofol me projekte reale",
      "Certifikim Profesional Avancuar"
    ],
    materials: [
      "Pigmentë Henna & sintetike",
      "Solucione shtrim/neutralizues",
      "Stencil & penel matës",
      "Scrub & serum"
    ],
    testimonials: [
      {
        name: "Arta Leka",
        role: "Advanced Brow Artist",
        image: "/placeholder.svg?height=100&width=100&text=Student",
        text:
          "Mësova teknikat e mapping që më ndihmuan të krijoj forme të përshtatura për çdo fytyrë."
      }
    ],
    faqs: [
      {
        question: "A mëson vetëm laminim apo edhe henna?",
        answer:
          "Ky kurs mbulon të dyja: laminim të plotë dhe ngjyrosje me henna, plus mapping."
      },
      {
        question: "Sa kohë reziston henna në vetulla?",
        answer:
          "Rreth 4–6 javë, varësisht nga tipari i lëkurës dhe kujdesi."
      }
    ],
    featured: false,
    students: 0,
    media: [
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+1", alt: "Advanced barber course image 1" },
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+2", alt: "Advanced barber course image 2" },
      { type: "video", src: "/placeholder-video.mp4", alt: "Advanced barber overview video" },
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+3", alt: "Advanced barber course image 3" },
    ],
  },
  {
    id: 23,
    title: "Kthimi & Lyerja e Qerpikëve – 360 orë",
    category: "lashes",
    duration: "360 orë",
    durationCategory: "360-orë",
    level: "Avancuar",
    price: "100,000 Lekë",
    startDate: "15 Nëntor 2025",
    schedule: "E Martë, E Enjte, E Shtunë (10:00 - 14:00)",
    image: "/placeholder.svg?height=600&width=800&text=Lash+Lift",
    description:
      "Program i thelluar 360-orësh në teknikat e lash lift, lash tint dhe lash botox, për rezultate profesionale dhe të qëndrueshme.",
    longDescription:
      "Në këtë kurs të avancuar mësoni anatominë e qerpikut, produktet kryesore (lifting solution, neutralizues, pigmente, botox), pajisjet speciale dhe protokollet e trajtimit për lash lift, tint dhe botox. Fokus në kujdesin pas procedurës dhe personalizimin sipas formës së syrit.",
    instructors: [
      {
        name: "Gentiana Meta",
        role: "Master Lash Artist",
        image: "/placeholder.svg?height=200&width=200&text=Instructor",
        bio: "7 vite përvojë në lash lift & botox, me certifikime ndërkombëtare."
      }
    ],
    curriculum: [
      {
        title: "1. Anatomia e Qerpikut",
        lessons: ["Cikli i rritjes", "Dallimi nga qimet e tjera të fytyrës"]
      },
      {
        title: "2. Produkte & Përbërësit",
        lessons: [
          "Sol. lifting (Ammonium Thioglycolate)",
          "Neutralizues (Sodium Bromate)",
          "Bojë për qerpikë (pigmente të errët)",
          "Botox për qerpikë (keratinë, vitamin E)"
        ]
      },
      {
        title: "3. Pajisjet & Mjetet",
        lessons: [
          "Pads silikoni (S, M, L)",
          "Penjë pambuku",
          "Furça qerpikësh",
          "Solucione & boja"
        ]
      },
      {
        title: "4. Teknikat e Avancuara",
        lessons: [
          "Lash Botox",
          "Kombinim me ngjyrim intensiv",
          "Teknikë natyrale & “Doll Eye”"
        ]
      },
      {
        title: "5. Procedura – Hap Pas Hapi",
        lessons: [
          "Analiza e formës së syrit",
          "Zgjedhja e pad-it",
          "Fiksimi i qerpikëve",
          "Aplikimi i solucioneve",
          "Lyerja & botox",
          "Këshilla pas trajtimit"
        ]
      }
    ],
    benefits: [
      "Ekspertizë në lash lift, tint & botox",
      "Procedura e plotë nga A-Z",
      "Certifikim Avancuar Lash Artist"
    ],
    materials: [
      "Lifting solution & neutralizues",
      "Pigmente lash tint",
      "Lash botox formula",
      "Pads silikoni & furça"
    ],
    testimonials: [
      {
        name: "Elisa Koçi",
        role: "Senior Lash Artist",
        image: "/placeholder.svg?height=100&width=100&text=Student",
        text:
          "Teknikat e botox-it më ndihmuan të ofroj sesiune unike për klientët e mi."
      }
    ],
    faqs: [
      {
        question: "Sa zgjat lash botox?",
        answer: "Rreth 4–6 javë, në varësi të tipit të qerpikut."
      },
      {
        question: "A mund të kombinohet tint me botox?",
        answer:
          "Po, kombinimi ofron efekt të theksuar dhe nutrim të qerpikut."
      }
    ],
    featured: false,
    students: 0,
    media: [
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+1", alt: "Advanced barber course image 1" },
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+2", alt: "Advanced barber course image 2" },
      { type: "video", src: "/placeholder-video.mp4", alt: "Advanced barber overview video" },
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+3", alt: "Advanced barber course image 3" },
    ],
  },
  {
    id: 24,
    title: "Teknik i Thonjve – 150 orë",
    category: "nails",
    duration: "150 orë",
    durationCategory: "150-orë",
    level: "Fillestar",
    price: "35,000 Lekë",
    startDate: "1 Dhjetor 2025",
    schedule: "E Martë, E Enjte (17:00 - 20:00)",
    image: "/placeholder.svg?height=600&width=800&text=Nails+Basic",
    description:
      "Kurs bazik 150-orësh në higjienë, manikyr, semipermanent, nail art dhe pedikyr estetik.",
    longDescription:
      "Përmes këtij programi fillestar, do të mësoni bazat e higjienës profesionale, anatomisë së thoit, teknikat e manikyrit bazik, xhel/semi-përm, art bazë të thonjve dhe pedikyr estetik.",
    instructors: [
      {
        name: "Mirela Berisha",
        role: "Manikyriste & Trainer",
        image: "/placeholder.svg?height=200&width=200&text=Instructor",
        bio: "Specialiste me 7 vite përvojë në manikyr & pedikyr."
      }
    ],
    curriculum: [
      {
        title: "1. Higjena & Siguria Sanitare",
        lessons: [
          "Rregullat bazë të higjienës",
          "Pajisjet e dezinfektimit",
          "Mbrojtja e klientit & punonjësit"
        ]
      },
      {
        title: "2. Struktura Natyrale e Thoit",
        lessons: ["Anatomia e thoit", "Llojet e thonjve natyralë"]
      },
      {
        title: "3. Manikyr Bazë & Estetikë",
        lessons: [
          "Lyerja klasike",
          "Forma: oval, katrore, ballerina, etj.",
          "Kujdesi i kutikulave"
        ]
      },
      {
        title: "4. Xhel & Semipermanent",
        lessons: [
          "Produktet e përdorura",
          "Aplikimi & heqja",
          "Këshilla për mirëmbajtje"
        ]
      },
      {
        title: "5. Nail Art Bazik",
        lessons: [
          "Vizatime të thjeshta",
          "Aplikime me gurë & ngjitës"
        ]
      },
      {
        title: "6. Pedikyr Estetik",
        lessons: [
          "Bazat e trajtimit të këmbëve",
          "Pastrim, hidratim & lyerje"
        ]
      },
      {
        title: "7. Kujdesi Klienti & Protokollet",
        lessons: ["Protokollet e punës", "Komunikimi me klientin"]
      }
    ],
    benefits: [
      "Certifikim bazik në manikyr & pedikyr",
      "Trajnim praktik në modele reale",
      "Portofol me dizajne bazë"
    ],
    materials: [
      "Set manikyr profesional",
      "Xhel & semipermanent",
      "Art brushes & gurë"
    ],
    testimonials: [
      {
        name: "Diana Hoxha",
        role: "Student Manikyr",
        image: "/placeholder.svg?height=100&width=100&text=Student",
        text:
          "Kursi bazik më dha besimin për të filluar punë në sallon."
      }
    ],
    faqs: [
      {
        question: "A përfshihen produktet në tarifë?",
        answer:
          "Po, të gjitha produktet bazë janë të përfshira në çmim."
      },
      {
        question: "Sa kohë zgjat semipermanent-i?",
        answer: "Rreth 2–3 javë, varësisht nga kujdesi."
      }
    ],
    featured: false,
    students: 0,
    media: [
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+1", alt: "Advanced barber course image 1" },
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+2", alt: "Advanced barber course image 2" },
      { type: "video", src: "/placeholder-video.mp4", alt: "Advanced barber overview video" },
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+3", alt: "Advanced barber course image 3" },
    ],
  },
  {
    id: 25,
    title: "Teknik i Thonjve – 360 orë",
    category: "nails",
    duration: "360 orë",
    durationCategory: "360-orë",
    level: "Avancuar",
    price: "80,000 Lekë",
    startDate: "1 Dhjetor 2025",
    schedule: "E Hënë, E Mërkurë, E Premte (10:00 - 14:00)",
    image: "/placeholder.svg?height=600&width=800&text=Nails+Advanced",
    description:
      "Program 360-orësh për manikyr, xhel, akril, nail art avancuar dhe pedikyr profesional & spa.",
    longDescription:
      "Në këtë kurs avancuar do të eksploroni anatominë dhe patologjitë e thonjve, teknikat profesionale të manikyrit dhe semipermanentit, ndërtimin me xhel/akril dhe struktura të ndryshme, plus art 3D, pedikyr spa dhe rimodelim thonjsh problematikë.",
    instructors: [
      {
        name: "Mirela Berisha",
        role: "Senior Nail Technician",
        image: "/placeholder.svg?height=200&width=200&text=Instructor",
        bio: "Expert në teknikat më të avancuara të thonjve."
      }
    ],
    curriculum: [
      {
        title: "1. Higjena & Patologji",
        lessons: [
          "Sterilizimi i mjeteve",
          "Diagnostikimi i sëmundjeve të thonjve"
        ]
      },
      {
        title: "2. Manikyr Profesional & Terapik",
        lessons: [
          "Përdorimi i vajrave ushqyes",
          "Masazh duarsh"
        ]
      },
      {
        title: "3. Semipermanent, Xhel & Akril",
        lessons: [
          "Forma: ballerina, square, almond, stiletto",
          "Arkitektura e thoit (Apex, C-curve)"
        ]
      },
      {
        title: "4. Ndërtim me Tipsa & Forma",
        lessons: [
          "Kombinime strukturore",
          "Forcimi i thonjve të dobët"
        ]
      },
      {
        title: "5. Nail Art Avancuar",
        lessons: [
          "Vizatime 3D, cat eye, marble, ombre",
          "Efekt lëkurë & kristale"
        ]
      },
      {
        title: "6. Pedikyr Profesional & Spa",
        lessons: [
          "Trajtimi i kallove & kallove të tepruara",
          "Hydratim profesional"
        ]
      },
      {
        title: "7. Rimodelim & Korrigjim",
        lessons: [
          "Trajtimi i thonjve problematikë",
          "Korrigjim strukturor"
        ]
      },
      {
        title: "8. Kujdesi Klienti & Konsulta",
        lessons: [
          "Dosja individuale",
          "Konsulta profesionale"
        ]
      }
    ],
    benefits: [
      "Certifikim i avancuar në estetiken e thonjve",
      "Portofol me teknika të larta",
      "Mundësi punësimi në spa & klinika premium"
    ],
    materials: [
      "Kit i plotë xhel & akril",
      "Materiale 3D & stencils",
      "Produkte spa pedikyr"
    ],
    testimonials: [
      {
        name: "Ardit Meta",
        role: "Advanced Nail Artist",
        image: "/placeholder.svg?height=100&width=100&text=Student",
        text:
          "Trajnimet e avancuara më hapën dyert e punës në spa të luksit."
      }
    ],
    faqs: [
      {
        question: "A kërkohet kursi bazik për të vijuar?",
        answer:
          "Rekomandohet, por jo i detyrueshëm."
      },
      {
        question: "A përfshihen stazhe praktike?",
        answer:
          "Po, 100+ orë praktikë në modele reale dhe spa partnerë."
      }
    ],
    featured: false,
    students: 0,
    media: [
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+1", alt: "Advanced barber course image 1" },
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+2", alt: "Advanced barber course image 2" },
      { type: "video", src: "/placeholder-video.mp4", alt: "Advanced barber overview video" },
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+3", alt: "Advanced barber course image 3" },
    ],
  },
  {
    id: 26,
    title: "Trajtimet e Fytyrës – 150 orë",
    category: "facials",
    duration: "150 orë",
    durationCategory: "150-orë",
    level: "Fillestar deri në Mesëm",
    price: "50,000 Lekë",
    startDate: "1 Mars 2026",
    schedule: "E Hënë, E Mërkurë, E Premte (17:00 - 20:00)",
    image: "/placeholder.svg?height=600&width=800&text=Facials+150h",
    description:
      "Kurs 150-orësh bazik në trajtime estetike të fytyrës, nga diagnostikimi i lëkurës te ndërhyrjet bazë pastrimi dhe ushqimi.",
    longDescription:
      "Ky modul 150-orësh ju ofron njohuritë teorike dhe aftësitë praktike për të kryer trajtime bazë faciale: pastrim, peeling, maska, trajtime sipas tipit të lëkurës dhe kujdesin pas procedurës. Përfshihen analiza e lëkurës, përdorimi i aparaturave bazë dhe sesione intensive praktike me manekin dhe klientë realë.",
    instructors: [
      {
        name: "Eriona Kola",
        role: "Estetiste & Trainer",
        image: "/placeholder.svg?height=200&width=200&text=Instructor",
        bio: "Me 10 vite përvojë në trajtime faciale dhe licencë ndërkombëtare për teknikat estetike."
      }
    ],
    curriculum: [
      {
        title: "Moduli 1: Hyrje në Estetikën e Fytyrës",
        lessons: [
          "Çfarë është estetika e fytyrës?",
          "Historia e trajtimeve estetike",
          "Rëndësia e kujdesit estetik për lëkurën"
        ]
      },
      {
        title: "Moduli 2: Anatomia dhe Fiziologjia e Lëkurës",
        lessons: ["Shtresat e lëkurës", "Tipologjitë e lëkurës", "Funksionet kryesore të lëkurës"]
      },
      {
        title: "Moduli 3: Mjetet dhe Higjiena",
        lessons: [
          "Mjetet manuale dhe elektrike",
          "Pajisjet për trajtime estetike",
          "Dezinfektimi dhe sterilizimi"
        ]
      },
      {
        title: "Moduli 4: Analiza e Lëkurës",
        lessons: [
          "Diagnoza e tipit të lëkurës",
          "Vëzhgimi vizual dhe palpimi",
          "Pyetësori estetik"
        ]
      },
      {
        title: "Moduli 5: Trajtimet Bazë",
        lessons: [
          "Trajtimi për lëkurë të yndyrshme",
          "Trajtimi për lëkurë të thatë",
          "Trajtimi për lëkurë të ndjeshme",
          "Trajtim për lëkurë të kombinuar"
        ]
      },
      {
        title: "Moduli 6: Produktet e Përdorura",
        lessons: [
          "Pastruesit (cleansers)",
          "Tonikët",
          "Scrub dhe peeling",
          "Maska fytyre (hydrating, purifying, calming)",
          "Serume dhe kremra"
        ]
      },
      {
        title: "Moduli 7: Këshillat Pas Trajtimeve",
        lessons: ["Kujdesi pas trajtimit", "Rekomandime për produkte në shtëpi"]
      },
      {
        title: "Moduli 8: Trajnim Praktik",
        lessons: ["Simulim trajtimesh me manekin", "Praktikë me klientë realë"]
      },
      {
        title: "Tabela e Orëve – 150 orë",
        lessons: [
          "Hyrje dhe Higjiena – 10h teorike, 5h praktike, totali 15h",
          "Anatomia e lëkurës – 10h teorike, 5h praktike, totali 15h",
          "Tipologjia e lëkurës – 5h teorike, 5h praktike, totali 10h",
          "Produktet bazë – 10h teorike, 10h praktike, totali 20h",
          "Trajtimet sipas tipit lëkure – 10h teorike, 20h praktike, totali 30h",
          "Maskat dhe serumet – 5h teorike, 15h praktike, totali 20h",
          "Trajnim praktik – 5h teorike, 35h praktike, totali 40h"
        ]
      }
    ],
    benefits: [
      "Certifikim profesional në trajtime faciale bazë",
      "Trajnim praktik intensiv me produktet më të mira",
      "Njohuri për kujdes të personalizuar të lëkurës"
    ],
    materials: [
      "Pastrues & tonikë profesionalë",
      "Scrub dhe maska fytyre",
      "Serume dhe kremra klinikë",
      "Aparaturë manuale dhe elektrike bazë"
    ],
    testimonials: [
      {
        name: "Roza Dervishi",
        role: "Estetiste Freskuese",
        image: "/placeholder.svg?height=100&width=100&text=Student",
        text: "Trajnimet praktike dhe materialet profesionale më ndihmuan të nis karrierën në estetika."
      }
    ],
    faqs: [
      {
        question: "A mund t’i aplikoj këto trajtime në shtëpi?",
        answer:
          "Kursi fokusohet në nivel profesional në sallon – për përdorim shtëpiak rekomandohen produktet e rekomanduara."
      },
      {
        question: "Sa klientë mund të trajtoj pas kursit?",
        answer:
          "Pas kursit jeni të trajnuar për të kryer 3–5 trajtime në ditë në nivel profesionist."
      }
    ],
    featured: false,
    students: 0,
    media: [
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+1", alt: "Advanced barber course image 1" },
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+2", alt: "Advanced barber course image 2" },
      { type: "video", src: "/placeholder-video.mp4", alt: "Advanced barber overview video" },
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+3", alt: "Advanced barber course image 3" },
    ],
  },
  {
    id: 27,
    title: "Trajtimet e Fytyrës – 360 orë",
    category: "facials",
    duration: "360 orë",
    durationCategory: "360-orë",
    level: "Mesëm deri në Avancuar",
    price: "100,000 Lekë",
    startDate: "1 Mars 2026",
    schedule: "E Martë, E Enjte, E Shtunë (10:00 - 13:00)",
    image: "/placeholder.svg?height=600&width=800&text=Facials+360h",
    description:
      "Program i thelluar 360-orësh në estetikat faciale, nga analiza dermatologjike te trajtimet më të avancuara anti-age dhe anti-akne.",
    longDescription:
      "Ky kurs i avancuar përfshin analizë të detajuar dermatologjike, përdorimin e aparaturave të avancuara (vapozon, vakum, ultratinguj, mikrodermoabrazion, peeling kimik), dhe protokollet më të sofistikuara për anti-aging, kolagjen, trajtime pigmentimi, si dhe një plan personal për klientë.",
    instructors: [
      {
        name: "Eriona Kola",
        role: "Estetiste & Trainer",
        image: "/placeholder.svg?height=200&width=200&text=Instructor",
        bio: "10 vite përvojë në trajtime faciale të avancuara dhe licencë ndërkombëtare."
      },
      {
        name: "Dritan Berisha",
        role: "Masazher & Instruktor",
        image: "/placeholder.svg?height=200&width=200&text=Instructor",
        bio: "Ekspert në teknikat e stimulimit të qarkullimit dhe limfatik."
      }
    ],
    curriculum: [
      {
        title: "Moduli 1: Hyrje e Zgjeruar në Estetikën e Fytyrës",
        lessons: [
          "Evolucioni i trajtimeve estetike",
          "Etika profesionale & komunikimi me klientin"
        ]
      },
      {
        title: "Moduli 2: Anatomia e Avancuar e Lëkurës",
        lessons: ["Kapilarët & rrjeti limfatik", "Ushqyerja dhe lëkura"]
      },
      {
        title: "Moduli 3: Analiza Dermatologjike",
        lessons: [
          "Llojet e akneve",
          "Dehidratimi, irritimi, hiperpigmentimi",
          "Rrudhat & plakja"
        ]
      },
      {
        title: "Moduli 4: Mjetet e Avancuara",
        lessons: [
          "Vapozon",
          "Aparatura vakum & ultratinguj",
          "Mikrodermoabrazion & peeling kimik"
        ]
      },
      {
        title: "Moduli 5: Trajtimet e Avancuara",
        lessons: [
          "Anti-age treatment",
          "Kolagjen & acid hialuronik",
          "Trajtimet për njolla & pigmentime",
          "Trajtimi i akneve & pas-akneve"
        ]
      },
      {
        title: "Moduli 6: Tabelë Krahasuese Tipet e Lëkurës",
        lessons: [
          "E Yndyrshme – Akne, pore të zgjeruara – Sebum control & detox",
          "E Thatë – Rrudha, irritim – Hydrating & nourishing",
          "E Ndjeshme – Kuperoza – Calming & soothing",
          "E Kombinuar – T-zone yndyrë – Balancing treatment"
        ]
      },
      {
        title: "Moduli 7: Protokollet e Trajtimeve",
        lessons: [
          "Trajtimi i aknes",
          "Trajtimi kundër rrudhave",
          "Trajtimi i pigmentimeve"
        ]
      },
      {
        title: "Moduli 8: Këshilla & Plan Personal",
        lessons: [
          "Skema produktesh shtëpiake",
          "Frekuenca e trajtimeve sipas llojit të lëkurës"
        ]
      },
      {
        title: "Moduli 9: Trajnim Praktik Intensiv",
        lessons: [
          "Praktikë me klientë realë",
          "Demonstrime me aparatura",
          "Analizë progresi lëkure"
        ]
      },
      {
        title: "Moduli 10: Tabela e Orëve – 360 orë",
        lessons: [
          "Hyrje & Etika – 10h teorike, 5h praktike, totali 15h",
          "Anatomia Avancuar – 15h teorike, 5h praktike, totali 20h",
          "Tipologjia & analiza – 10h teorike, 10h praktike, totali 20h",
          "Produktet & mjetet – 15h teorike, 10h praktike, totali 25h",
          "Trajtimet bazike – 10h teorike, 20h praktike, totali 30h",
          "Trajtimet avancuara – 15h teorike, 40h praktike, totali 55h",
          "Protokollet – 10h teorike, 20h praktike, totali 30h",
          "Krahasimet & analiza – 10h teorike, 5h praktike, totali 15h",
          "Këshillimi estetik – 10h teorike, 5h praktike, totali 15h",
          "Praktika intensive – 5h teorike, 130h praktike, totali 135h"
        ]
      }
    ],
    benefits: [
      "Certifikim profesional në trajtime faciale avancuara",
      "Access në teknologji estetike të fundit",
      "Portofol i pasur me protokolle klinike"
    ],
    materials: [
      "Kit riparues për fytyrë: pastrues, tonik, serum",
      "Aparaturë vapozon, vakum, ultratinguj",
      "Peeling kimik & mikrodermoabrazion",
      "Maska dhe kremra spërkatëse"
    ],
    testimonials: [
      {
        name: "Jonida Krasniqi",
        role: "Estetiste Klinike",
        image: "/placeholder.svg?height=100&width=100&text=Student",
        text:
          "Programi 360-orësh më dha ekspertizën e duhur për të punuar në spa dhe klinika estetike."
      }
    ],
    faqs: [
      {
        question: "A duhet të kam kursin 150h para këtij niveli?",
        answer:
          "Rekomandohet, por studenti i dedikuar mund të fillojë direkt në nivelin 360h."
      },
      {
        question: "A përfshihen stazhe praktike në klinika?",
        answer:
          "Po, 130 orë praktike me klientë realë dhe mbikëqyrje profesionale."
      }
    ],
    featured: false,
    students: 0,
    media: [
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+1", alt: "Advanced barber course image 1" },
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+2", alt: "Advanced barber course image 2" },
      { type: "video", src: "/placeholder-video.mp4", alt: "Advanced barber overview video" },
      { type: "image", src: "/placeholder.svg?height=600&width=800&text=Barber+Adv+3", alt: "Advanced barber course image 3" },
    ],
  },
  {
    id: 28,
    title: "Termokoperta Profesionale",
    category: "pajisje",
    duration: "Intensiv",
    durationCategory: "intensiv",
    level: "Fillestar – Avancuar",
    price: "Na kontaktoni",
    startDate: "Sipas grupit",
    schedule: "Intensive (me orar fleksibël)",
    image: "/pajisje/termokoperte.jpg",
    description:
      "Kurs intensiv në teknologjinë e termoterapisë me termokopertë, sipas standarteve moderne.",
    longDescription:
      "Nga parimet bazë të funksionimit deri te protokollet e dezinfektimit, menaxhimi i pacientëve dhe praktika klinike e mbikëqyrur—ky kurs ju pajis me të gjitha aftësitë për të operuar me termokopertë në mënyrë profesionale.",
    instructors: [],
    curriculum: [
      { title: "Hyrje & Parimet e Funksionimit", lessons: ["Hyrje në Termokopertë dhe Parimet e Funksionimit"] },
      { title: "Historia e Termoterapisë", lessons: ["Historia dhe zhvillimi i teknologjisë së termoterapisë"] },
      { title: "Anatomia & Reagimi ndaj Nxehtësisë", lessons: ["Anatomia e Lëkurës dhe Ndikimi i Temperaturës në Indet Tisuese", "Roli i kolagjenit dhe elastinës në reagimin ndaj ngrohjes"] },
      { title: "Siguria & Higjiena", lessons: ["Siguria, Higjiena dhe Parandalimi i Rreziqeve", "Protokolet e dezinfektimit për sipërfaqet dhe aksesorët"] },
      { title: "Pajisja & Parametrat", lessons: ["Komponentët Kryesorë dhe Konfigurimi i Pajisjes Termokopertë", "Ndërfaqja kontrolluese dhe interpretimi i treguesve të temperaturës", "Parametrat e Trajtimit – Intensiteti, Kohëzgjatja dhe Cikli Termik", "Rregullimi i temperaturës bazuar në tipin e lëkurës"] },
      { title: "Indikacionet & Kundërindikacionet", lessons: ["Indikacionet dhe Kundërindikacionet e Trajtimit me Termokopertë", "Menaxhimi i pacientëve me sëmundje vaskulare"] },
      { title: "Protokollet e Trajtimit", lessons: ["Protokollet e Trajtimit për Zona të Ndryshme të Trupit", "Trajtimi i qafës dhe shpatullave — teknika dhe kohëzgjatje"] },
      { title: "Kujdesi Para- & Pas-Trajtimit", lessons: ["Udhëzimet për hidrimin dhe kremrat paratrajtim"] },
      { title: "Mirëmbajtja & Kalibrimi", lessons: ["Mirëmbajtja, Pastrimi dhe Kalibrimi Periodik i Pajisjes", "Zëvendësimi i filtrave termikë dhe verifikimi i sensorëve"] },
      { title: "Praktika Klinike", lessons: ["Simulime trajtimesh me pacientë vullnetarë dhe feedback profesional"] },
    ],
    benefits: [
      "Trajnim intensiv 100% praktik",
      "Certifikim profesional",
      "Aftësi menaxhimi termoterapie",
    ],
    materials: ["Termokopertë & aksesorë", "Manual i protokolleve"],
    testimonials: [],
    faqs: [],
    featured: false,
    students: 0,
    media: [],
  },

  {
    id: 29,
    title: "Presoterapi & Drenazh Limfatik",
    category: "pajisje",
    duration: "Intensiv",
    durationCategory: "intensiv",
    level: "Fillestar – Avancuar",
    price: "Na kontaktoni",
    startDate: "Sipas grupit",
    schedule: "Intensive (me orar fleksibël)",
    image: "/pajisje/presoterapi.jpg",
    description:
      "Trajnim i plotë mbi Presoterapinë, mekanizmat limfatikë dhe protokollet operative.",
    longDescription:
      "Nga anatomia e sistemit limfatik deri te teknikat e protokolluara të presoterapisë, ky kurs përgatit specialistë në stimulimin e qarkullimit limfatik me pajisjet më të avancuara.",
    instructors: [],
    curriculum: [
      { title: "Hyrje & Historiku", lessons: ["Hyrje në Presoterapi dhe Historiku"] },
      { title: "Anatomia & Fiziologjia Limfatike", lessons: ["Anatomia dhe Fiziologjia e Sistemit Limfatik"] },
      { title: "Parimet e Funksionimit", lessons: ["Parimet biologjike pas aplikimit të presionit ciklik"] },
      { title: "Pajisjet & Parametrat", lessons: ["Pajisjet e Presoterapisë dhe Komponentët Kryesorë"] },
      { title: "Indikacionet & Kundërindikacionet", lessons: ["Indikacionet dhe Kundërindikacionet"] },
      { title: "Protokollet Operative", lessons: ["Protokollet e Trajtimit dhe Teknikat Operative"] },
      { title: "Konsultimi & Vlerësimi", lessons: ["Konsultimi dhe Vlerësimi i Klientit"] },
      { title: "Higjiena & Siguria", lessons: ["Standardet e Higjienës, Siguria dhe Protokollet e Dezinfektimit"] },
      { title: "Mirëmbajtja & Kalibrimi", lessons: ["Mirëmbajtja, Kalibrimi dhe Kontrollet Teknikë Periodike"] },
      { title: "Vlerësimi për Certifikim", lessons: ["Vlerësimi Teorik dhe Praktik për Certifikim"] },
      { title: "Etika & Komunikimi", lessons: ["Etika Profesionale dhe Komunikimi me Klientin"] },
    ],
    benefits: ["Aftësi presoterapie standarde", "Certifikim i specializuar"],
    materials: ["Aparat Presoterapie", "Manual protokollesh"],
    testimonials: [],
    faqs: [],
    featured: false,
    students: 0,
    media: [],
  },

  {
    id: 30,
    title: "Hydrofacial 15-në-1",
    category: "pajisje",
    duration: "Intensiv",
    durationCategory: "intensiv",
    level: "Fillestar – Avancuar",
    price: "Na kontaktoni",
    startDate: "Sipas grupit",
    schedule: "Intensive (me orar fleksibël)",
    image: "/pajisje/hidrofacial.jpg",
    description:
      "Kurs i plotë mbi teknologjinë Hydrofacial dhe protokollet e saj unike.",
    longDescription:
      "Nga prezantimi i pajisjes 15-në-1 deri te modulët LED, ultrasonik dhe hidrodermoabrasion, kursi mbulon çdo aspekt të trajtimit Hydrofacial.",
    instructors: [],
    curriculum: [
      { title: "Prezantimi & Historiku", lessons: ["Prezantimi i pajisjes Hydrofacial 15 në 1", "Historia dhe evolucioni i teknologjisë Hydrofacial"] },
      { title: "Anatomia & Fiziologjia Lëkurës", lessons: ["Anatomia dhe fiziologjia e lëkurës", "Shtresat e lëkurës: epidermë, dermë, hipodermë", "Roli i fibroblasteve dhe gjëndrave të yndyrës në rigjenerim"] },
      { title: "Teknologjitë & Modulët", lessons: ["Sistemet e vakumit dhe hidrodermoabrasioni", "Modulët LED dhe ultrasonik"] },
      { title: "Parametrat & Përshtatja", lessons: ["Parametrat e trajtimit dhe konfigurimi i frekuencës", "Përshtatja e intensitetit dhe kohëzgjatjes"] },
      { title: "Protokollet e Trajtimit", lessons: ["Protokollet për zona të ndryshme fytyre & trupi", "Integrimi i serumeve, peelinëve dhe substancave aktive"] },
      { title: "Kundërindikacionet & Masat Paraprake", lessons: ["Kundërindikacionet absolute dhe relative", "Masat paraprake për lëkurë të ndjeshme"] },
      { title: "Kujdesi Para- & Pas-Trajtimit", lessons: ["Udhëzimet paraprake për klientin", "Rutinë pas-seance: maska qetësuese dhe kremra mbrojtës"] },
      { title: "Mirëmbajtja & Kalibrimi", lessons: ["Mirëmbajtja, pastrimi dhe kalibrimi i pajisjes", "Protokollet e dezinfektimit"] },
      { title: "Praktika Klinike", lessons: ["Praktika klinike, studime rastesh dhe vlerësimi", "Simulime trajtimesh nën mbikëqyrje instruktorësh"] },
    ],
    benefits: ["Trajtim 15-në-1 me rezultate të dukshme", "Certifikatë Hydrofacial"],
    materials: ["Set Hydrofacial", "Serume dhe peelinë"],
    testimonials: [],
    faqs: [],
    featured: false,
    students: 0,
    media: [],
  },

  {
    id: 31,
    title: "Dermapen & Microneedling",
    category: "pajisje",
    duration: "Intensiv",
    durationCategory: "intensiv",
    level: "Fillestar – Avancuar",
    price: "Na kontaktoni",
    startDate: "Sipas grupit",
    schedule: "Intensive (me orar fleksibël)",
    image: "/pajisje/dermapen.jpg",
    description:
      "Trajnim i detajuar mbi teknikat e microneedling me Dermapen.",
    longDescription:
      "Mbulon prej anatomisë së lëkurës dhe parametrave të trajtimit, te protokollet dhe etika profesionale në përdorimin e Dermapen.",
    instructors: [],
    curriculum: [
      { title: "Hyrje në Microneedling", lessons: ["Hyrje në Microneedling dhe Dermapen"] },
      { title: "Anatomia & Fiziologjia Lëkurës", lessons: ["Anatomia dhe Fiziologjia e Lëkurës"] },
      { title: "Parimet e Stimullimit të Kolagjenit", lessons: ["Parimet e Stimullimit të Kolagjenit"] },
      { title: "Pajisja & Parametrat", lessons: ["Komponentët dhe Funksionimi i Aparatit Dermapen", "Parametrat e Trajtimit dhe Teknikat e Agullimit"] },
      { title: "Indikacionet & Kundërindikacionet", lessons: ["Indikacionet dhe Kundërindikacionet"] },
      { title: "Protokollet e Trajtimit", lessons: ["Protokollet e Trajtimit sipas Zonave të Ndryshme"] },
      { title: "Kujdesi Para- & Pas-Trajtimit", lessons: ["Kujdesi Para- dhe Pas-Trajtimit"] },
      { title: "Siguria & Etika", lessons: ["Siguria, Higjiena dhe Sterilizimi i Pajisjeve", "Etika Profesionale dhe Komunikimi me Klientin"] },
      { title: "Praktika Klinike", lessons: ["Praktika Klinike dhe Simulime mbi Modele Artificialë"] },
    ],
    benefits: ["Teknikë e avancuar microneedling", "Certifikim Dermapen"],
    materials: ["Dermapen & kartridgë", "Serum rigjenerues"],
    testimonials: [],
    faqs: [],
    featured: false,
    students: 0,
    media: [],
  },

  {
    id: 32,
    title: "Depilim me Lazer & Fizika e Lazerit",
    category: "pajisje",
    duration: "Intensiv",
    durationCategory: "intensiv",
    level: "Fillestar – Avancuar",
    price: "Na kontaktoni",
    startDate: "Sipas grupit",
    schedule: "Intensive (me orar fleksibël)",
    image: "/pajisje/lazer.jpg",
    description:
      "Kurs i plotë mbi teorinë dhe praktikën e depilimit me lazer.",
    longDescription:
      "Prej fizikes së lazerit dhe parametrave të dritës, te siguria, protokollet e trajtimit dhe etika profesionale—ky kurs përgatit specialistë depilimi.",
    instructors: [],
    curriculum: [
      { title: "Fizika e Lazerit", lessons: ["Parimet e konvertimit të energjisë në dritë koherente", "Parametrat: gjatësi vale & pulse"] },
      { title: "Anatomia Lëkurë & Flok", lessons: ["Struktura e epidermës, dermës dhe hipodermës", "Tipet e flokut dhe karakteristikat e folikulave"] },
      { title: "Llojet e Lazerëve", lessons: ["Diode vs Alexandrite", "Nd:YAG dhe IPL"] },
      { title: "Siguria & Sterilizimi", lessons: ["Protokollet për mbrojtje sysh dhe mjedisit", "Dezinfektimi & sterilizimi i pajisjeve"] },
      { title: "Parametrat e Trajtimit", lessons: ["Rregullimi i energjisë për fototipet I–III", "Modifikime për fototipet IV–VI"] },
      { title: "Indikacionet & Kundërindikacionet", lessons: ["Indikacionet kryesore", "Kundërindikacionet absolute & relative"] },
      { title: "Kujdesi Para- & Pas-Trajtimit", lessons: ["Udhëzime për ekspozim në diell", "Trajtimi i skuqjes & ënjtjes"] },
      { title: "Praktika Klinike", lessons: ["Demonstrime mbi modele artificialë", "Seanca trajtimi me klientë vullnetarë"] },
      { title: "Etika & Ligjshmëria", lessons: ["Rregulloret kombëtare", "Etika e konsultimit dhe marrëdhënies me klientin"] },
      { title: "Certifikim Përfundimtar", lessons: ["Provimi teorik & demonstrimi praktik"] },
    ],
    benefits: ["Aftësi depilimi me lazer të sigurt", "Certifikim profesional lazer"],
    materials: ["Laser depilimi", "Pajisje mbrojtëse"],
    testimonials: [],
    faqs: [],
    featured: false,
    students: 0,
    media: [],
  },
];
