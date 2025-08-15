export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
  hasVideo: boolean;
  videoSrc: string;
  rating: number;
  location: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 2,
    name: "Azem Sheshi",
    role: "Student",
    content: "Trajnimi praktik dhe instruktorët mbështetës në Afrodite Academy më ndihmuan të realizoj qëllimet e mia.",
    avatar: "/images/student-testimonial.png",
    hasVideo: true,
    videoSrc: "/videos/testimonials/azem-sheshi.mp4",
    rating: 5,
    location: "",
  },
  {
    id: 3,
    name: "Emanuel Xhaferri",
    role: "Student",
    content: "Jam thellësisht mirënjohëse për formimin dhe orientimin që mora në Afrodite Academy. Ato bënë ndryshimin.",
    avatar: "/images/student-testimonial.png",
    hasVideo: true,
    videoSrc: "/videos/testimonials/emanuel-xhaferri.mp4",
    rating: 5,
    location: "",
  },
  {
    id: 4,
    name: "Klevis Saraci",
    role: "Student",
    content: "Mësimi cilësor dhe ndjenja e bashkësisë në akademi më dhanë motivimin dhe mbështetjen që më duhej.",
    avatar: "/images/student-testimonial.png",
    hasVideo: true,
    videoSrc: "/videos/testimonials/klevis-saraci.mp4",
    rating: 5,
    location: "",
  },
  {
    id: 5,
    name: "Mariglen Metalia",
    role: "Student",
    content: "Ishte një investim i çmuar në të ardhmen time profesionale dhe zhvillimin personal.",
    avatar: "/images/student-testimonial.png",
    hasVideo: true,
    videoSrc: "/videos/testimonials/mariglen-metalia.mp4",
    rating: 5,
    location: "",
  },
  {
    id: 6,
    name: "Olgert Myzyri",
    role: "Student",
    content: "Udhëzimi ekspert dhe facilitetet moderne në Afrodite Academy tejkaluan pritshmëritë e mia.",
    avatar: "/images/student-testimonial.png",
    hasVideo: true,
    videoSrc: "/videos/testimonials/olgert-myzyri.mp4",
    rating: 5,
    location: "",
  },
  {
    id: 1,
    name: "Arsel Doga",
    role: "Student",
    content: "Përvoja ime në Afrodite Academy ishte e jashtëzakonshme dhe e pasuroi ndjeshëm rrugëtimin tim profesional.",
    avatar: "/images/student-testimonial.png",
    hasVideo: true,
    videoSrc: "/videos/testimonials/arsel-doga.mp4",
    rating: 5,
    location: "",
  },
];

export default testimonials;
