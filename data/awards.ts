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
    year: "—", // you can fill real years if you have them
    title: "Titulli Mjeshtër për Estetikë & Parukeri",
    organization: "Dhoma Kombëtare e Zejtarise",
    description:
      "Titulli Mjeshtër për zotërimin e njohurive dhe aftësive të nevojshme për ushtrimin e pavarur të profesionit.",
    color: "purple",
    imageSrc: "/awards/dhoma-zytarise.png",
  },
  {
    id: "royal-mua-judge",
    year: "—",
    title: "Make-up Judge",
    organization: "Royal MUA Competition",
    description: "Anëtar i jurisë në garën Royal MUA Competition.",
    color: "purple",
    imageSrc: "/awards/fiam-awards.png",
  },
  {
    id: "edel-mirenjohjeje",
    year: "—",
    title: "Çertifikatë Mirënjohjeje",
    organization: "Qendra Sociale Edel",
    description: "",
    color: "amber",
    imageSrc: "/awards/qendra-edel.png",
  },
  {
    id: "stilist-italian",
    year: "—",
    title: "Çertifikatë Mirënjohjeje",
    organization: "Stilist Italian",
    description: "",
    color: "amber",
    imageSrc: "/awards/stilisti-italian.png",
  },
  {
    id: "omc-life-2022",
    year: "2022",
    title: "OMC Life Achievement Award",
    organization: "Global OMC",
    description: "Parukeri dhe Berber – Çmimi Global 2022",
    color: "purple",
    imageSrc: "/awards/omc-logo.png",
  },
  {
    id: "grate-vleresojne",
    year: "—",
    title: "Certifikatë Nderi",
    organization: "Lëvizja “Gratë frymëzojnë vlerë”",
    description: "",
    color: "purple",
    imageSrc: "/awards/levizja-grate.png",
  },
  {
    id: "infinit-akademia",
    year: "—",
    title: "Çertifikatë Mirënjohjeje",
    organization: "Infinit Academy, Kosove",
    description: "",
    color: "purple",
    imageSrc: "/awards/infinit-kosove.png",
  },
  {
    id: "vmf-federata",
    year: "—",
    title: "Çertifikatë Mirënjohjeje",
    organization: "VMF – Federata Botërore e Masazhit",
    description: "",
    color: "purple",
    imageSrc: "/awards/vmf-logo.png",
  },
  {
    id: "shen-tereza",
    year: "—",
    title: "Titulli “Shën Tereza”",
    organization: "Shqiptarja e gjithë botës",
    description: "",
    color: "purple",
    imageSrc: "/awards/nene-tereza.png",
  },
  {
    id: "ambassador-pea",
    year: "—",
    title: "Ambasador i PEA",
    organization: "Universal Peace Federation",
    description: "",
    color: "purple",
    imageSrc: "/awards/pea-logo.png",
  },
]
