// /data/team.ts

export interface TeamMember {
  id: string
  name: string
  role: string
  experience: string
  bio: string
  photo: string       // ← new field
}

export const team: TeamMember[] = [
  {
    id: "aferdita",
    name: "Aferdita Ferracaku",
    role: "Drejtuese e institutit, koordinatore e aktiviteteve, kurseve dhe certifikatave",
    experience: "30 vite përvojë në Itali dhe Shqipëri",
    bio:
      "Me 30 vite përvojë si në Itali ashtu edhe në Shqipëri, ajo nderon vendin tonë me një formim të suksesshëm dhe rezultate të prekshme.",
    photo: "/team/aferdita.jpg",
  },
  {
    id: "luiza",
    name: "Luiza Nebiaj",
    role: "Parukiere dhe estetiste profesioniste, instruktore",
    experience: "14 vite përvojë",
    bio:
      "Pronare e sallonit LUIZA HAIR AND MAKEUP në Tiranë, e certifikuar Mjeshtre për parukeri dhe estetikë. Instruktore për kurset e Parukerisë dhe Makeup në akademinë tonë.",
    photo: "/team/luiza.jpg",
  },
  {
    id: "remina",
    name: "Remina Muci",
    role: "Tatuatore profesioniste, përgjegjëse administrate",
    experience: "—",
    bio:
      "Tatuatore e specializuar në tatuazhe estetike dhe PMU. Ka punuar në disa studio tatuazhesh dhe më pas iu përkushtua mësimdhënies në akademinë tonë, si përgjegjëse e administratës.",
    photo: "/team/remina.jpg",
  },
  {
    id: "dorina",
    name: "Dorina Mecaj",
    role: "Estetiste e diplomuar, menaxhuese sallonesh",
    experience: "—",
    bio:
      "Estetiste e diplomuar me një shkollë dyvjeçare, e specializuar në trajtimet e fytyrës dhe masazhe. Përgjegjëse për menaxhimin e salloneve të bukurisë të lidhura me shkollën.",
    photo: "/team/dorina.jpg",
  },
  {
    id: "sara",
    name: "Sara Mariconti",
    role: "Estetiste & menaxhere marketingu",
    experience: "—",
    bio:
      "Estetiste e diplomuar në Itali, e specializuar në Nails Care. Ofron kurse estetike dhe Nail Art, dhe menaxhon marketingun e akademisë dhe salloneve tona.",
    photo: "/team/sara.jpg",
  },
  {
    id: "ermela",
    name: "Ermela Tagliente Halilaj",
    role: "E specializuar në marketing dhe menaxhim online",
    experience: "—",
    bio:
      "Zhvillon projektet e lidhura me akademinë dhe rrjetet e komunikimit me entitetet brenda dhe jashtë vendit me të cilat bashkëpunon akademia.",
    photo: "/team/ermela.jpeg",
  },
  {
    id: "elsa",
    name: "Elsa Prekaj",
    role: "Instruktore për kurset e kujdesit për të moshuarit",
    experience: "—",
    bio:
      "Instruktore me fokus në trajnimet dhe kurset për kujdesin profesional të të moshuarve.",
    photo: "/team/elsa.jpg",
  },
  {
    id: "florinda-gjeloshi",
    name: "Florinda Gjeloshi",
    role: "Estetiste & parukiere profesioniste, menaxherja e Shkodrës",
    experience: "—",
    bio:
      "Dora e djathtë e Aferditës në degën e Shkodrës, e certifikuar Mjeshtre. Menaxhon organizimin e studentëve dhe aktivitetet shkollore.",
    photo: "/team/florinda.png",
  },
  {
    id: "vincenzo",
    name: "Vincenzo De Santis",
    role: "Profesional në kujdes për burrat dhe fëmijët",
    experience: "20+ vjet përvojë",
    bio:
      "Lider në sektorin e formimit, përdor teknika universale dhe bashkëkohore në trajnimin e studentëve.",
    photo: "/team/vincenzo.png",
  },
  {
    id: "fjoralba",
    name: "Fjoralba Rexhvelaj",
    role: "Teknike për thonj dhe extension qerpikësh",
    experience: "—",
    bio:
      "Instruktore në kurset intensive të nail & lash extension në degën e Shkodrës.",
    photo: "/team/fjoralba.jpg",
  },
  {
    id: "michele-marciano",
    name: "Michele Marciano",
    role: "—",
    experience: "—",
    bio: "—",
    photo: "/team/michele-marciano.jpg",
  },
  {
    id: "sindrit",
    name: "Sindrit Ferracaku",
    role: "Përgjegjës për menaxhimin ekonomik dhe marrëdhëniet me partnerët",
    experience: "—",
    bio:
      "Menaxhon fushën ekonomike të akademisë dhe komunikimin me shoqatat ku jemi anëtarë.",
    photo: "/team/sindrit.jpg",
  },
  {
    id: "erjona",
    name: "Erjona Harizi",
    role: "Parukiere profesioniste & menaxhuese shërbimesh klienti",
    experience: "—",
    bio:
      "Menaxhon shërbimet ndaj klientëve në sallonet tona të bukurisë që bashkëpunojnë me shkollën.",
    photo: "/team/erjona.jpg",
  },
  {
    id: "erisa",
    name: "Erisa Bregu",
    role: "Make up artist & instruktore",
    experience: "—",
    bio:
      "Make up artist e re, e apasionuar pas bukurisë. Ofron kurse të specializuara makeup në akademi.",
    photo: "/team/erisa.jpg",
  },
  {
    id: "sonila",
    name: "Sonila Dermyshi",
    role: "Epilim lazer & make up artist, bashkëpronare",
    experience: "—",
    bio:
      "Bashkëpronare e salloneve të bukurisë ku zhvillohen praktikat, e specializuar në epilim lazer dhe makeup.",
    photo: "/team/soni.jpg",
  },
  {
    id: "aljenda",
    name: "Aljenda Brahimi",
    role: "Teknike e specializuar në Nails & lash extension",
    experience: "—",
    bio:
      "Menaxhon një nga sallonet tona dhe asiston drejtoreshën e akademisë në vendlindje.",
    photo: "/team/aljenda.jpg",
  },
  {
    id: "jutbina",
    name: "Jutbina Sefolli",
    role: "Parukiere & make up artist",
    experience: "8 vite si parukiere, 2 vite makeup",
    bio:
      "Kujdeset për shërbimet ndaj klientëve në sallonin e fshatit të lindjes së drejtoreshës sonë.",
    photo: "/team/jutbina.jpg",
  },
  {
    id: "albana",
    name: "Albana Kraja",
    role: "Gazetare & menaxhere marketingu",
    experience: "—",
    bio:
      "Dora e djathtë në komunikim dhe krijimin e kontakteve për degën e Shkodrës.",
    photo: "/team/albana.jpg",
  },
]
