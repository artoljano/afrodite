// /data/awards.ts

export interface Award {
  id: string
  year: string
  title: string
  organization: string
  description: string
  color: "purple" | "amber"
  imageSrc: string
}

export const awards: Award[] = [
  {
    id: "master-zjtarise",
    year: "2025",
    title: "Titulli Mjeshtër për Estetikë & Parukeri",
    organization: "Dhoma Kombëtare e Zejtarise",
    description:
      "Titulli Mjeshtër për zotërimin e njohurive dhe aftësive të nevojshme për ushtrimin e pavarur të profesionit.",
    color: "purple",
    imageSrc: "/awards/dhoma-zytarise.webp",
  },
  {
    id: "shen-tereza",
    year: "2025",
    title: "Titulli “Shën Tereza”",
    organization: "Shqiptarja e gjithë botës",
    description: "",
    color: "purple",
    imageSrc: "/awards/nene-tereza.webp",
  },
  {
    id: "edel-mirenjohjeje",
    year: "2024",
    title: "Çertifikatë Mirënjohjeje",
    organization: "Qendra Sociale Edel",
    description: "",
    color: "amber",
    imageSrc: "/awards/qendra-edel.webp",
  },
  {
    id: "infinit-akademia",
    year: "2024",
    title: "Çertifikatë Mirënjohjeje",
    organization: "Infinit Academy, Kosove",
    description: "",
    color: "purple",
    imageSrc: "/awards/infinit-kosove.webp",
  },
  {
    id: "ambassador-pea",
    year: "2023",
    title: "Ambasador i PEA",
    organization: "Universal Peace Federation",
    description: "",
    color: "purple",
    imageSrc: "/awards/pea-logo.webp",
  },
  {
    id: "stilist-italian",
    year: "2022",
    title: "Çertifikatë Mirënjohjeje",
    organization: "Stilist Italian",
    description: "",
    color: "amber",
    imageSrc: "/awards/stilisti-italian.webp",
  },
  {
    id: "omc-life-2022",
    year: "2022",
    title: "OMC Life Achievement Award",
    organization: "Global OMC",
    description: "Parukeri dhe Berber – Çmimi Global 2022",
    color: "purple",
    imageSrc: "/awards/omc-logo.webp",
  },
  {
    id: "vmf-federata",
    year: "2022",
    title: "Çertifikatë Mirënjohjeje",
    organization: "VMF – Federata Botërore e Masazhit",
    description: "",
    color: "purple",
    imageSrc: "/awards/vmf-logo.webp",
  },
  {
    id: "royal-mua-judge",
    year: "2021",
    title: "Make-up Judge",
    organization: "Royal MUA Competition",
    description: "Anëtar i jurisë në garën Royal MUA Competition.",
    color: "purple",
    imageSrc: "/awards/fiam-awards.webp",
  },
  {
    id: "grate-vleresojne",
    year: "2019",
    title: "Certifikatë Nderi",
    organization: "Lëvizja “Gratë frymëzojnë vlerë”",
    description: "",
    color: "purple",
    imageSrc: "/awards/levizja-grate.webp",
  },
];
