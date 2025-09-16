"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import testimonials from "@/data/testimonials";
import {
  ChevronRight,
  Award,
  BookOpen,
  Users,
  Calendar,
  Clock,
  Briefcase,
  HeartHandshake,
  Download,
  ArrowRight,
  Star,
  CheckCircle2,
  Sparkles,
  Quote,
  Video,
  Play,
  GraduationCap,
} from "lucide-react";
import CourseCard from "@/components/course-card";
import TestimonialSlider from "@/components/testimonial-slider";
import { useInView } from "react-intersection-observer";
import CountUpAnimation from "@/components/count-up-animation";
import VideoBackground from "@/components/video-background";
import VideoModal from "@/components/video-modal";
import RequestInfoButton from "@/components/request-info-button";
import { AnimatedButton } from "@/components/animated-button";
import PartnerLogosCarousel from "@/components/partner-logos-carousel";
import Link from "next/link";
import { useRef, useState, useMemo } from "react";
import { FAQ_CATEGORIES } from "@/data/questions";
import { Course, courses } from "@/data/courses";
import WhatsAppButton from "@/components/whatsapp-button";

export default function Home() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [coursesRef, coursesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [whyUsRef, whyUsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(
    null
  );
  const [openQuestion, setOpenQuestion] = useState<
    Record<string, number | null>
  >({});
  const toggleCategory = (category: string) => {
    setOpenCategory((prev) => (prev === category ? null : category));
    //setOpenQuestionIndex(null); // Reset question toggle when changing category
  };

  const toggleQuestion = (category: string, index: number) => {
    setOpenQuestion((prev) => ({
      ...prev,
      [category]: prev[category] === index ? null : index,
    }));
  };

  // Pick the first 3 testimonials that actually have an avatar
  const avatarPicks = useMemo(() => {
    const shuffled = [...testimonials].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  }, []);

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const handleDownloadBrochure = () => {
    // In a real app, you might want to track this download event
    console.log("Brochure download initiated");

    // Create a link to the PDF and trigger the download
    const link = document.createElement("a");
    link.href = "/course-brochure.pdf";
    link.download = "Afrodite-Academy-Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  //Video Handler Section
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featured = courses.filter((c) => c.featured);
  const others = courses.filter((c) => !c.featured);
  const selection = [
    courses.find((c) => c.id === 16),
    courses.find((c) => c.id === 24),
    courses.find((c) => c.id === 5),
  ].filter(Boolean) as Course[]; // filters out undefined in case any ID is wrong

  return (
    <div className="flex flex-col w-full">
      <section className="relative bg-afrodite-creme">
        {/* Hero Section with Video Background */}
        <VideoBackground
          videoSrc="/videos/hero-section-home.mp4"
          overlayOpacity={0.8}
          className="min-h-[60vh] md:min-h-[70vh] py-0 md:py-30 bg-afrodite-creme relative flex items-center"
        >
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                ref={heroRef}
                initial={{ opacity: 0, x: -50 }}
                animate={heroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="flex flex-col space-y-6"
              >
                <div className="inline-flex items-center px-4 py-2 bg-afrodite-purple/10 backdrop-blur-sm rounded-full text-afrodite-purple text-sm mb-4 border border-afrodite-purple/20">
                  <Sparkles className="h-4 w-4 mr-2 text-afrodite-purple" />
                  <span>Kurse të certifikuara ndërkombëtarisht</span>
                </div>
                <div className="relative">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={heroInView ? { width: "100px" } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="h-1 bg-afrodite-purple mb-4"
                  />
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-afrodite-purple leading-tight">
                    Kurse Profesionale{" "}
                    <span className="text-afrodite-purple">Ndërkombëtare</span>
                  </h1>
                </div>
                <p className="text-lg text-afrodite-lightPurple max-w-lg">
                  Ne jemi të përkushtuar për të ofruar rezultatet më të mira për
                  studentët tanë. Me një ekip të përkushtuar dhe metoda
                  inovative, ne sigurojmë që çdo student të arrijë potencialin e
                  tij të plotë.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Link href="/courses">
                    <AnimatedButton
                      size="lg"
                      variant="default"
                      className="px-8 bg-afrodite-lightPurple text-afrodite-creme"
                    >
                      Kurse Fizike
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </AnimatedButton>
                  </Link>
                  <Link
                    href="https://wa.me/355692043535"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AnimatedButton
                      size="lg"
                      variant="default"
                      className="px-8 bg-afrodite-lightPurple text-afrodite-creme"
                    >
                      Kontakto Tani
                    </AnimatedButton>
                  </Link>
                </div>

                <div className="flex items-center space-x-4 mt-8">
                  <div className="flex -space-x-2">
                    {avatarPicks.map((t, i) => (
                      <div
                        key={`${t.name}-${i}`}
                        className="w-10 h-10 rounded-full border-2 border-afrodite-lightPurple overflow-hidden"
                        title={t.name}
                      >
                        {t.hasVideo && t.videoSrc ? (
                          <video
                            src={t.videoSrc}
                            muted
                            playsInline
                            preload="metadata"
                            className="w-full h-full object-cover bg-black"
                            onLoadedMetadata={(e) => {
                              // jump ~1 second in so we don't freeze on a black frame
                              (
                                e.currentTarget as HTMLVideoElement
                              ).currentTime = 1;
                            }}
                            onSeeked={(e) => {
                              (e.currentTarget as HTMLVideoElement).pause();
                            }}
                          />
                        ) : (
                          // fallback if one testimonial has an actual avatar
                          <img
                            src={t.avatar || "/placeholder.svg"}
                            alt={t.name}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="text-sm text-afrodite-lightPurple">
                    <span className="text-afrodite-purple font-semibold">
                      2500+
                    </span>{" "}
                    studentë të diplomuar
                  </div>
                </div>
              </motion.div>

              <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
                <Image
                  src="/wave-pattern.svg"
                  alt="Decorative pattern"
                  width={256}
                  height={256}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </VideoBackground>
      </section>
      {/* Quick Info Section - NEW */}
      <section className="py-8 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-afrodite-creme rounded-xl p-6 flex items-center shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="bg-afrodite-purple p-3 rounded-full mr-4">
                <Calendar className="h-6 w-6 text-afrodite-creme" />
              </div>
              <div>
                <h3 className="font-semibold text-afrodite-purple">
                  Orare Fleksibël
                </h3>
                <p className="text-sm text-gray-600">
                  Kurse paradite, pasdite dhe fundjavë.
                </p>
              </div>
            </div>
            <div className="bg-afrodite-creme rounded-xl p-6 flex items-center shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="bg-afrodite-purple p-3 rounded-full mr-4">
                <CheckCircle2 className="h-6 w-6 text-afrodite-creme" />
              </div>
              <div>
                <h3 className="font-semibold text-afrodite-purple">
                  Çertifikim Ndërkombëtar
                </h3>
                <p className="text-sm text-gray-600">
                  Diploma të njohura në të gjithë botën.
                </p>
              </div>
            </div>
            <div className="bg-afrodite-creme rounded-xl p-6 flex items-center shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="bg-afrodite-purple p-3 rounded-full mr-4">
                <Users className="h-6 w-6 text-afrodite-creme" />
              </div>
              <div>
                <h3 className="font-semibold text-afrodite-purple">
                  Mundësi Punësimi
                </h3>
                <p className="text-sm text-gray-600">
                  Partneritete me biznese në çdo industri.
                  {/* Ndërtojmë partneritete me biznese në industri për t'ju
                  ndihmuar të gjeni mundësi punësimi pas diplomimit. */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
          <Image
            src="/wave-pattern.svg"
            alt="Decorative pattern"
            width={256}
            height={256}
            className="object-contain"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-afrodite-purple/10 backdrop-blur-sm rounded-full text-afrodite-purple text-sm mb-4 border border-afrodite-purple/20">
              <span>Pse të zgjidhni Afrodite Academy?</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-afrodite-purple mb-4">
              Standarte të Larta{" "}
              <span className="text-afrodite-purple">në Mësimdhënie</span>
            </h2>
            <div className="h-1 w-24 bg-afrodite-purple mx-auto mb-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              {/* Video player with play button */}
              <div
                className="
        relative 
        rounded-2xl 
        overflow-hidden 
        shadow-xl 
        group
        cursor-pointer
        /* heights: 200px on xs, 300px on sm, 400px on md+, 60vh on xl+ */
        h-[400px] 
        sm:h-[90vh] 
        md:h-[90vh] 
        xl:h-[90vh]
        
        w-full
      "
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <video
                  src="/videos/IntroNew.mp4"
                  width={800}
                  height={600}
                  className="object-fit group-hover:scale-105 transition-transform duration-700 mb-[10vh] cursor-pointer"
                />

                <div className="absolute inset-0 flex items-center justify-center z-20 ">
                  {/* <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-16 h-16 flex items-center justify-center group-hover:scale-110"
                  >
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center"> */}
                  <Play
                    onClick={() => setIsModalOpen(true)}
                    className="h-12 w-12 text-purple-500"
                  />
                  {/* </div>
                  </button> */}
                </div>
                <div className="absolute bottom-4 left-4 right-4 z-20 bg-black/60 backdrop-blur-sm rounded-lg p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-afrodite-purple font-medium">
                    Shiko videon tonë prezantuese
                  </p>
                  <p className="text-gray-300 text-sm">
                    Mëso më shumë për kurset dhe ambientet tona
                  </p>
                </div>

                {/* Modal component */}
                <VideoModal
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                  videoSrc="/videos/IntroNew.mp4"
                  title="Video Prezantuese"
                />
              </div>

              {/* Quote moved below the image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-afrodite-creme p-6 rounded-xl shadow-lg border-l-4 border-afrodite-lightPurple mt-6 ml-6 relative"
              >
                <div className="absolute -top-3 -left-3 bg-afrodite-purple p-2 rounded-full">
                  <Quote className="h-5 w-5 text-afrodite-creme" />
                </div>
                <p className="text-gray-800 font-medium italic">
                  "Afrodite Academy ndryshoi karrierën time. Tani punoj si
                  makeup artist profesionist!"
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  - Elisa, Makeup Artist
                </p>
              </motion.div>
            </motion.div>

            <div ref={whyUsRef} className="space-y-6">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={whyUsInView ? "visible" : "hidden"}
                className="space-y-6"
              >
                <motion.div
                  variants={itemVariants}
                  className="bg-afrodite-creme rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-afrodite-purple p-4 rounded-full flex-shrink-0 group-hover:bg-afrodite-lightPurple/50 transition-colors duration-300">
                      <Award className="h-8 w-8 text-afrodite-creme group-hover:text-afrodite-purple transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-poppins text-afrodite-purple mb-2 group-hover:text-afrodite-purple transition-colors duration-300">
                        Çertifikime Ndërkombëtare
                      </h3>
                      <p className="text-afrodite-lightPurple">
                        Kurset tona ofrojnë certifikime të njohura
                        ndërkombëtarisht që ju ndihmojnë të avanconi karrierën
                        tuaj kudo në botë.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="bg-afrodite-creme rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-afrodite-purple p-4 rounded-full flex-shrink-0 group-hover:bg-afrodite-lightPurple/50 transition-colors duration-300">
                      <GraduationCap className="h-8 w-8 text-afrodite-creme group-hover:text-afrodite-purple transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-poppins text-afrodite-purple mb-2 group-hover:text-afrodite-purple transition-colors duration-300">
                        Programe profesionale 2-3 vjecare
                      </h3>
                      <p className="text-afrodite-lightPurple">
                        Diploma italiane që ofrojnë mundësinë për të hapur
                        sallonin tuaj në Itali dhe në çdo vënd të Bashkimit
                        Europian dhe të punoni ligjërisht në BE, USA, Kanada dhe
                        Australi.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="bg-afrodite-creme rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-afrodite-purple p-4 rounded-full flex-shrink-0 group-hover:bg-afrodite-lightPurple/50 transition-colors duration-300">
                      <Users className="h-8 w-8 text-afrodite-creme group-hover:text-afrodite-purple transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-poppins text-afrodite-purple mb-2 group-hover:text-afrodite-purple transition-colors duration-300">
                        Instruktorë Profesionistë
                      </h3>
                      <p className="text-afrodite-lightPurple">
                        Mësoni nga instruktorë me përvojë ndërkombëtare që janë
                        ekspertë në fushat e tyre dhe të përkushtuar ndaj
                        suksesit tuaj.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="bg-afrodite-creme rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-afrodite-purple p-4 rounded-full flex-shrink-0 group-hover:bg-afrodite-lightPurple/50 transition-colors duration-300">
                      <BookOpen className="h-8 w-8 text-afrodite-creme group-hover:text-afrodite-purple transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-poppins text-afrodite-purple mb-2 group-hover:text-afrodite-purple transition-colors duration-300">
                        Kurrikula Moderne
                      </h3>
                      <p className="text-afrodite-lightPurple">
                        Çdo program është ndërtuar mbi baza aktuale dhe
                        praktike, të përditësuara sipas tregut të punës.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="bg-afrodite-creme rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-afrodite-purple p-4 rounded-full flex-shrink-0 group-hover:bg-afrodite-lightPurple/50 transition-colors duration-300">
                      <HeartHandshake className="h-8 w-8 text-afrodite-creme group-hover:text-afrodite-purple transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-poppins text-afrodite-purple mb-2 group-hover:text-afrodite-purple transition-colors duration-300">
                        Komunitet Mbështetës
                      </h3>
                      <p className="text-afrodite-lightPurple">
                        Bëhuni pjesë e një komuniteti mbështetës profesionistësh
                        dhe studentësh që ndajnë pasionin për zhvillim personal
                        dhe profesional.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-afrodite-creme rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-full">
                  <Image
                    src="/images/orare-fleksibel.jpg"
                    alt="Flexible Learning"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <div className="bg-afrodite-purple p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-afrodite-creme" />
                  </div>
                  <h3 className="text-xl font-bold font-poppins text-afrodite-purple mb-3">
                    Orare Fleksibël
                  </h3>
                  <p className="text-afrodite-lightPurple">
                    Ju mundësojmë të ndiqni formimin tuaj pa ndërprerë
                    angazhimet personale apo profesionale.
                  </p>
                  <Link
                    href="/about"
                    className="inline-flex items-center text-afrodite-lightPurple mt-4 font-medium hover:text-afrodite-purple transition-colors"
                  >
                    Mëso më shumë
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-afrodite-creme rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="order-2 md:order-1 p-6 flex flex-col justify-center">
                  <div className="bg-afrodite-purple p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Briefcase className="h-6 w-6 text-afrodite-creme" />
                  </div>
                  <h3 className="text-xl font-bold font-poppins text-afrodite-purple mb-3">
                    Mundësi Punësimi
                  </h3>
                  <p className="text-afrodite-lightPurple">
                    Ndërtojmë partneritete me biznese në industri për t'ju
                    ndihmuar të gjeni mundësi punësimi pas diplomimit.
                  </p>
                  <Link
                    href="/about"
                    className="inline-flex items-center text-afrodite-lightPurple mt-4 font-medium hover:text-afrodite-purple transition-colors"
                  >
                    Mëso më shumë
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
                <div className="order-1 md:order-2 h-full">
                  <Image
                    src="/images/mundesi-pune.jpg"
                    alt="Career Opportunities"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </motion.div>
          </div> */}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-afrodite-creme py-16 md:py-24 relative overflow-hidden">
        {/* <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=600&text=Pattern')] bg-cover bg-center opacity-5"></div> */}

        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>

        <div ref={statsRef} className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-afrodite-purple/10 backdrop-blur-sm rounded-full text-afrodite-purple text-sm mb-4 border border-afrodite-purple/20">
              <span>Statistikat tona</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-afrodite-purple mb-4">
              Afrodite Academy{" "}
              <span className="text-afrodite-purple">në Numra</span>
            </h2>
            <div className="h-1 w-24 bg-afrodite-purple mx-auto mb-6"></div>
            <p className="text-lg text-afrodite-lightPurple max-w-2xl mx-auto">
              Rezultatet tona flasin vetë. Shikoni arritjet tona ndër vite dhe
              besoni në cilësinë e kurseve tona.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative bg-afrodite-creme backdrop-blur-sm rounded-xl overflow-hidden shadow-lg group border border-white/10"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-afrodite-purple transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="p-8 text-center">
                <div className="mb-4 mx-auto w-20 h-20 rounded-full bg-afrodite-purple flex items-center justify-center border border-afrodite-purple/30">
                  <Award className="h-10 w-10 text-afrodite-creme" />
                </div>
                <CountUpAnimation
                  end={2500}
                  suffix="+"
                  className="text-4xl font-bold font-poppins text-afrodite-purple mb-2"
                  inView={statsInView}
                />
                <p className="text-afrodite-lightPurple">
                  Studentë të Certifikuar
                </p>
                <div className="mt-4 h-2 bg-afrodite-lightPurple/50 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-afrodite-purple"
                  ></motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative bg-afrodite-creme backdrop-blur-sm rounded-xl overflow-hidden shadow-lg group border border-white/10"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-afrodite-purple transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="p-8 text-center">
                <div className="mb-4 mx-auto w-20 h-20 rounded-full bg-afrodite-purple flex items-center justify-center border border-afrodite-purple/30">
                  <BookOpen className="h-10 w-10 text-afrodite-creme" />
                </div>
                <CountUpAnimation
                  end={60}
                  suffix="+"
                  className="text-4xl font-bold font-poppins text-afrodite-purple mb-2"
                  inView={statsInView}
                />
                <p className="text-afrodite-lightPurple">Kurse Profesionale</p>
                <div className="mt-4 h-2 bg-afrodite-lightPurple/50 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "65%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-afrodite-purple"
                  ></motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative bg-afrodite-creme backdrop-blur-sm rounded-xl overflow-hidden shadow-lg group border border-white/10"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-afrodite-purple transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="p-8 text-center">
                <div className="mb-4 mx-auto w-20 h-20 rounded-full bg-afrodite-purple flex items-center justify-center border border-afrodite-purple/30">
                  <Users className="h-10 w-10 text-afrodite-creme" />
                </div>
                <CountUpAnimation
                  end={15}
                  suffix="+"
                  className="text-4xl font-bold font-poppins text-afrodite-purple mb-2"
                  inView={statsInView}
                />
                <p className="text-afrodite-lightPurple">
                  Instruktorë të Kualifikuar
                </p>
                <div className="mt-4 h-2 bg-afrodite-lightPurple/50 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "75%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-afrodite-purple"
                  ></motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative bg-afrodite-creme backdrop-blur-sm rounded-xl overflow-hidden shadow-lg group border border-white/10"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-afrodite-purple transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="p-8 text-center">
                <div className="mb-4 mx-auto w-20 h-20 rounded-full bg-afrodite-purple flex items-center justify-center border border-afrodite-purple/30">
                  <Calendar className="h-10 w-10 text-afrodite-creme" />
                </div>
                <CountUpAnimation
                  end={20}
                  suffix="+"
                  className="text-4xl font-bold font-poppins text-afrodite-purple mb-2"
                  inView={statsInView}
                />
                <p className="text-afrodite-lightPurple">Vite Eksperiencë</p>
                <div className="mt-4 h-2 bg-afrodite-lightPurple/50 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "55%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-afrodite-purple"
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Download Brochure Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center mt-12"
          >
            <AnimatedButton
              onClick={handleDownloadBrochure}
              size="lg"
              variant="default"
              className="px-8 bg-afrodite-lightPurple text-afrodite-creme"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Shkarko Broshurën e Kurseve
            </AnimatedButton>
          </motion.div>
        </div>
      </section>

      {/* Partner Logos Section */}
      <section className="bg-white py-12 overflow-hidden">
        <div className="container mx-auto px-4 mb-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-afrodite-purple/10 backdrop-blur-sm rounded-full text-afrodite-purple text-sm mb-4 border border-afrodite-purple/20">
              <span>Partnerët tanë</span>
            </div>
            <h3 className="text-2xl font-bold font-poppins text-afrodite-purple mb-2">
              Partnerët dhe Akreditimet Tona
            </h3>
            <div className="h-1 w-16 bg-afrodite-purple mx-auto"></div>
          </div>
        </div>
        <PartnerLogosCarousel />
      </section>

      {/* Courses Section */}
      <section className="py-16 md:py-24 bg-afrodite-creme relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
        <div ref={coursesRef} className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={coursesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-afrodite-purple/10 backdrop-blur-sm rounded-full text-afrodite-purple text-sm mb-4 border border-afrodite-purple/20">
              <span>Kurset tona</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-afrodite-purple mb-4">
              Kurset Tona{" "}
              <span className="text-afrodite-purple">Profesionale</span>
            </h2>
            <div className="h-1 w-24 bg-afrodite-purple mx-auto mb-6"></div>
            <p className="text-lg text-afrodite-lightPurple max-w-2xl mx-auto">
              Zgjidhni nga kurset tona të shumta profesionale për të avancuar
              karrierën tuaj dhe për të fituar aftësi të reja të kërkuara në
              tregun e punës.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {selection.map((c, i) => (
              <CourseCard
                key={c.id}
                course={c}
                delay={(i + 1) * 0.1}
                inView={coursesInView}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={coursesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Link href="/courses">
              <AnimatedButton
                size="lg"
                variant="default"
                className="px-8 bg-afrodite-lightPurple text-afrodite-creme"
              >
                Shiko të gjitha kurset
                <ChevronRight className="ml-2 h-4 w-4" />
              </AnimatedButton>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-afrodite-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-afrodite-purple/10 backdrop-blur-sm rounded-full text-afrodite-purple text-sm mb-4 border border-afrodite-purple/20">
              <span>Histori suksesi</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-afrodite-purple mb-4">
              Çfarë Thonë{" "}
              <span className="text-afrodite-purple">Studentët Tanë</span>
            </h2>
            <div className="h-1 w-24 bg-afrodite-purple mx-auto mb-6"></div>
          </div>

          <TestimonialSlider />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-afrodite-creme to-black relative overflow-hidden">
        {/* <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=600&text=Pattern')] bg-cover bg-center opacity-5"></div> */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
          <Image
            src="/wave-pattern.svg"
            alt="Decorative pattern"
            width={256}
            height={256}
            className="object-contain"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-afrodite-purple/10 backdrop-blur-sm rounded-full text-afrodite-purple text-sm mb-4 border border-afrodite-purple/20">
              <span>Bëhu pjesë e suksesit</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-afrodite-purple mb-6">
              Gati për të Filluar{" "}
              <span className="text-afrodite-purple">
                Karrierën Tuaj të Re?
              </span>
            </h2>
            <p className="text-lg text-afrodite-lightPurple mb-8">
              Regjistrohuni sot në kurset tona profesionale dhe bëhuni pjesë e
              komunitetit tonë të profesionistëve të suksesshëm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <AnimatedButton
                  size="lg"
                  variant="default"
                  className="px-8 bg-afrodite-lightPurple text-afrodite-creme"
                >
                  Regjistrohu Tani
                </AnimatedButton>
              </Link>
              <Link href="/contact">
                <AnimatedButton
                  size="lg"
                  variant="default"
                  className="rounded-xl px-8 bg-afrodite-lightPurple text-afrodite-creme"
                >
                  Na Kontaktoni
                </AnimatedButton>
              </Link>
            </div>

            {/* Added FAQ accordion */}
            <div className="mt-16 text-left bg-white/30 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-bold text-afrodite-purple mb-6 text-center">
                Pyetje të Shpeshta
              </h3>

              <div className="space-y-4">
                {FAQ_CATEGORIES.map((cat) => (
                  <div
                    key={cat.category}
                    className="border-b border-white/10 pb-4"
                  >
                    <button
                      onClick={() => toggleCategory(cat.category)}
                      className="flex justify-between items-center w-full text-left mb-2"
                    >
                      <span className="text-afrodite-purple font-semibold text-lg">
                        {cat.category}
                      </span>
                      <ChevronRight
                        className={`h-6 w-6 text-afrodite-purple transform transition-transform duration-200 ${
                          openCategory === cat.category ? "rotate-90" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        openCategory === cat.category
                          ? "max-h-[1000px] opacity-100 mt-4"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="space-y-4">
                        {cat.items.map((faq, idx) => (
                          <div
                            key={idx}
                            className="border-b border-white/10 pb-2"
                          >
                            <button
                              onClick={() => toggleQuestion(cat.category, idx)}
                              className="flex justify-between items-center w-full text-left"
                            >
                              <span className="text-afrodite-purple font-medium">
                                {faq.question}
                              </span>
                              <ChevronRight
                                className={`h-5 w-5 text-afrodite-purple transform transition-transform duration-200 ${
                                  openQuestion[cat.category] === idx
                                    ? "rotate-90"
                                    : ""
                                }`}
                              />
                            </button>

                            <div
                              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                openQuestion[cat.category] === idx
                                  ? "max-h-[500px] opacity-100 mt-2"
                                  : "max-h-0 opacity-0"
                              }`}
                            >
                              <p className="text-afrodite-lightPurple text-sm py-2">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-64 h-64 opacity-10">
          <Image
            src="/wave-pattern.svg"
            alt="Decorative pattern"
            width={256}
            height={256}
            className="object-contain"
          />
        </div>
      </section>

      {/* Request Info Button */}
      {/* <RequestInfoButton /> */}
      <WhatsAppButton />
    </div>
  );
}
