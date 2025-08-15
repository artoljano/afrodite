"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
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
import { useRef, useState } from "react";
import { QUESTIONS } from "@/data/questions";
import { courses } from "@/data/courses";

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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

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
  const selection = [...featured, ...others].slice(0, 3);

  return (
    <div className="flex flex-col w-full">
      <section className="relative py-20 md:py-32 bg-gradient-to-r from-black to-afrodite-purple">
        {/* Hero Section with Video Background */}
        {/* <VideoBackground
          videoSrc="/videos/IntroNew.mp4"
          overlayOpacity={0.85}
          className="min-h-[60vh] md:min-h-[70vh] py-20 md:py-32 bg-gradient-to-r from-black to-afrodite-darkPurple"
        > */}
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              ref={heroRef}
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex flex-col space-y-6"
            >
              <div className="inline-flex items-center px-4 py-2 bg-afrodite-darkPurple/30 backdrop-blur-sm rounded-full text-white text-sm mb-4 border border-afrodite-purple/20">
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
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-white leading-tight">
                  Kurse Profesionale{" "}
                  <span className="text-afrodite-purple">Ndërkombëtare</span>
                </h1>
              </div>
              <p className="text-lg text-gray-300 max-w-lg">
                Ne jemi të përkushtuar për të ofruar rezultatet më të mira për
                studentët tanë. Me një ekip të përkushtuar dhe metoda inovative,
                ne sigurojmë që çdo student të arrijë potencialin e tij të
                plotë.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <AnimatedButton
                  size="lg"
                  variant="default"
                  className="bg-afrodite-gold text-afrodite-darkPurple hover:text-afrodite-gold"
                >
                  KURSE FIZIKE
                  <ChevronRight className="ml-2 h-4 w-4" />
                </AnimatedButton>
                <AnimatedButton
                  size="lg"
                  variant="secondary"
                  className="bg-afrodite-darkPurple hover:text-afrodite-darkPurple"
                >
                  KONTAKTO TANI
                </AnimatedButton>
              </div>

              <div className="flex items-center space-x-4 mt-8">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                    >
                      <Image
                        src={`/placeholder.svg?height=40&width=40&text=Student+${i}`}
                        alt={`Student ${i}`}
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-sm text-gray-300">
                  <span className="text-white font-semibold">2500+</span>{" "}
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
        {/* </VideoBackground> */}
      </section>
      {/* Quick Info Section - NEW */}
      <section className="py-8 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 flex items-center shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <Calendar className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Orare Fleksibël</h3>
                <p className="text-sm text-gray-600">
                  Kurse paradite, pasdite dhe fundjavë
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 flex items-center shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <CheckCircle2 className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Certifikim Ndërkombëtar
                </h3>
                <p className="text-sm text-gray-600">
                  Diploma të njohura në të gjithë botën
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 flex items-center shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <Users className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Instruktorë Profesionistë
                </h3>
                <p className="text-sm text-gray-600">
                  Mësimdhënie nga ekspertë ndërkombëtare të industrisë
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
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-800 text-sm mb-4">
              <span>Pse të zgjidhni Afrodite Academy?</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 mb-4">
              Standarte të Larta{" "}
              <span className="text-purple-400">në Mësimdhënie</span>
            </h2>
            <div className="h-1 w-24 bg-purple-500 mx-auto mb-6"></div>
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
                  <p className="text-white font-medium">
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
                className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500 mt-6 ml-6 relative"
              >
                <div className="absolute -top-3 -left-3 bg-purple-100 p-2 rounded-full">
                  <Quote className="h-5 w-5 text-purple-400" />
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
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 p-4 rounded-full flex-shrink-0 group-hover:bg-purple-200 transition-colors duration-300">
                      <Award className="h-8 w-8 text-purple-400 group-hover:text-purple-700 transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-poppins text-gray-900 mb-2 group-hover:text-purple-400 transition-colors duration-300">
                        Certifikime Ndërkombëtare
                      </h3>
                      <p className="text-gray-700">
                        Kurset tona ofrojnë certifikime të njohura
                        ndërkombëtarisht që ju ndihmojnë të avanconi karrierën
                        tuaj kudo në botë.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 p-4 rounded-full flex-shrink-0 group-hover:bg-purple-200 transition-colors duration-300">
                      <Users className="h-8 w-8 text-purple-400 group-hover:text-purple-700 transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-poppins text-gray-900 mb-2 group-hover:text-purple-400 transition-colors duration-300">
                        Instruktorë Profesionistë
                      </h3>
                      <p className="text-gray-700">
                        Mësoni nga instruktorë me përvojë ndërkombëtare që janë
                        ekspertë në fushat e tyre dhe të përkushtuar ndaj
                        suksesit tuaj.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 p-4 rounded-full flex-shrink-0 group-hover:bg-purple-200 transition-colors duration-300">
                      <BookOpen className="h-8 w-8 text-purple-400 group-hover:text-purple-700 transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-poppins text-gray-900 mb-2 group-hover:text-purple-400 transition-colors duration-300">
                        Kurrikula Moderne
                      </h3>
                      <p className="text-gray-700">
                        Çdo program është ndërtuar mbi baza aktuale dhe
                        praktike, të përditësuara sipas tregut të punës.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 p-4 rounded-full flex-shrink-0 group-hover:bg-purple-200 transition-colors duration-300">
                      <HeartHandshake className="h-8 w-8 text-purple-400 group-hover:text-purple-700 transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-poppins text-gray-900 mb-2 group-hover:text-purple-400 transition-colors duration-300">
                        Komunitet Mbështetës
                      </h3>
                      <p className="text-gray-700">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
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
                  <div className="bg-purple-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold font-poppins text-gray-900 mb-3">
                    Orare Fleksibël
                  </h3>
                  <p className="text-gray-700">
                    Ju mundësojmë të ndiqni formimin tuaj pa ndërprerë
                    angazhimet personale apo profesionale.
                  </p>
                  <Link
                    href="/about"
                    className="inline-flex items-center text-purple-400 mt-4 font-medium hover:text-purple-700 transition-colors"
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
              className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="order-2 md:order-1 p-6 flex flex-col justify-center">
                  <div className="bg-purple-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Briefcase className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold font-poppins text-gray-900 mb-3">
                    Mundësi Punësimi
                  </h3>
                  <p className="text-gray-700">
                    Ndërtojmë partneritete me biznese në industri për t'ju
                    ndihmuar të gjeni mundësi punësimi pas diplomimit.
                  </p>
                  <Link
                    href="/about"
                    className="inline-flex items-center text-purple-400 mt-4 font-medium hover:text-purple-700 transition-colors"
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
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-black to-afrodite-darkPurple py-16 md:py-24 relative overflow-hidden">
        {/* <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=600&text=Pattern')] bg-cover bg-center opacity-5"></div> */}

        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>

        <div ref={statsRef} className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm mb-4">
              <span>Statistikat tona</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white mb-4">
              Afrodite Academy{" "}
              <span className="text-afrodite-purple">në Numra</span>
            </h2>
            <div className="h-1 w-24 bg-afrodite-purple mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
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
              className="relative bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg group border border-white/10"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-afrodite-purple transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="p-8 text-center">
                <div className="mb-4 mx-auto w-20 h-20 rounded-full bg-afrodite-darkPurple/50 flex items-center justify-center border border-afrodite-purple/30">
                  <Award className="h-10 w-10 text-afrodite-purple" />
                </div>
                <CountUpAnimation
                  end={2500}
                  suffix="+"
                  className="text-4xl font-bold font-poppins text-white mb-2"
                  inView={statsInView}
                />
                <p className="text-gray-300">Studentë të Certifikuar</p>
                <div className="mt-4 h-2 bg-afrodite-darkPurple/50 rounded-full overflow-hidden">
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
              className="relative bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg group border border-white/10"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-afrodite-purple transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="p-8 text-center">
                <div className="mb-4 mx-auto w-20 h-20 rounded-full bg-afrodite-darkPurple/50 flex items-center justify-center border border-afrodite-purple/30">
                  <BookOpen className="h-10 w-10 text-afrodite-purple" />
                </div>
                <CountUpAnimation
                  end={60}
                  suffix="+"
                  className="text-4xl font-bold font-poppins text-white mb-2"
                  inView={statsInView}
                />
                <p className="text-gray-300">Kurse Profesionale</p>
                <div className="mt-4 h-2 bg-afrodite-darkPurple/50 rounded-full overflow-hidden">
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
              className="relative bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg group border border-white/10"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-afrodite-purple transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="p-8 text-center">
                <div className="mb-4 mx-auto w-20 h-20 rounded-full bg-afrodite-darkPurple/50 flex items-center justify-center border border-afrodite-purple/30">
                  <Users className="h-10 w-10 text-afrodite-purple" />
                </div>
                <CountUpAnimation
                  end={15}
                  suffix="+"
                  className="text-4xl font-bold font-poppins text-white mb-2"
                  inView={statsInView}
                />
                <p className="text-gray-300">Instruktorë të Kualifikuar</p>
                <div className="mt-4 h-2 bg-afrodite-darkPurple/50 rounded-full overflow-hidden">
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
              className="relative bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg group border border-white/10"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-afrodite-purple transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="p-8 text-center">
                <div className="mb-4 mx-auto w-20 h-20 rounded-full bg-afrodite-darkPurple/50 flex items-center justify-center border border-afrodite-purple/30">
                  <Calendar className="h-10 w-10 text-afrodite-purple" />
                </div>
                <CountUpAnimation
                  end={20}
                  suffix="+"
                  className="text-4xl font-bold font-poppins text-white mb-2"
                  inView={statsInView}
                />
                <p className="text-gray-300">Vite Eksperiencë</p>
                <div className="mt-4 h-2 bg-afrodite-darkPurple/50 rounded-full overflow-hidden">
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
              variant="secondary"
              className="bg-afrodite-darkPurple text-afrodite-gold hover:text-afrodite-darkPurple"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              SHKARTO BROSHURËN E KURSEVE
            </AnimatedButton>
          </motion.div>
        </div>
      </section>

      {/* Partner Logos Section */}
      <section className="bg-white py-12 overflow-hidden">
        <div className="container mx-auto px-4 mb-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm mb-4">
              <span>Partnerët tanë</span>
            </div>
            <h3 className="text-2xl font-bold font-poppins text-white mb-2">
              Partnerët dhe Akreditimet Tona
            </h3>
            <div className="h-1 w-16 bg-purple-500 mx-auto"></div>
          </div>
        </div>
        <PartnerLogosCarousel />
      </section>

      {/* Courses Section */}
      <section className="py-16 md:py-24 bg-white">
        <div ref={coursesRef} className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={coursesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-800 text-sm mb-4">
              <span>Kurset tona</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 mb-4">
              Kurset Tona <span className="text-purple-400">Profesionale</span>
            </h2>
            <div className="h-1 w-24 bg-purple-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
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
                variant="secondary"
                className="bg-purple-400 hover:bg-purple-700"
              >
                SHIKO TË GJITHA KURSET
                <ChevronRight className="ml-2 h-4 w-4" />
              </AnimatedButton>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-800 text-sm mb-4">
              <span>Histori suksesi</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 mb-4">
              Çfarë Thonë{" "}
              <span className="text-purple-400">Studentët Tanë</span>
            </h2>
            <div className="h-1 w-24 bg-purple-500 mx-auto mb-6"></div>
          </div>

          <TestimonialSlider />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-black via-afrodite-purple to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=600&text=Pattern')] bg-cover bg-center opacity-5"></div>
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
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm mb-4">
              <span>Bëhu pjesë e suksesit</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white mb-6">
              Gati për të Filluar{" "}
              <span className="text-afrodite-gold">Karrierën Tuaj të Re?</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Regjistrohuni sot në kurset tona profesionale dhe bëhuni pjesë e
              komunitetit tonë të profesionistëve të suksesshëm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton
                size="lg"
                variant="default"
                className="bg-afrodite-gold text-afrodite-darkPurple hover:text-afrodite-gold"
              >
                REGJISTROHU TANI
              </AnimatedButton>
              <Link href="/contact">
                <AnimatedButton
                  size="lg"
                  variant="secondary"
                  className="bg-afrodite-darkPurple text-afrodite-gold hover:text-afrodite-darkPurple"
                >
                  NA KONTAKTONI
                </AnimatedButton>
              </Link>
            </div>

            {/* Added FAQ accordion */}
            <div className="mt-16 text-left bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-bold text-afrodite-gold mb-6 text-center">
                Pyetje të Shpeshta
              </h3>

              <div className="space-y-4">
                {QUESTIONS.map((faq, idx) => (
                  <div key={idx} className="border-b border-white/10 pb-4">
                    <button
                      onClick={() => toggle(idx)}
                      className="flex justify-between items-center w-full text-left"
                    >
                      <span className="text-white font-medium">
                        {faq.question}
                      </span>
                      <ChevronRight
                        className={`h-5 w-5 text-afrodite-purple transform transition-transform duration-200 ${
                          openIndex === idx ? "rotate-90" : ""
                        }`}
                      />
                    </button>

                    {/* AnimatePresence will handle mounting/unmounting animation */}
                    <AnimatePresence initial={false}>
                      {openIndex === idx && (
                        <motion.div
                          key="content"
                          initial="collapsed"
                          animate="open"
                          exit="collapsed"
                          variants={{
                            open: { height: "auto", opacity: 1, marginTop: 8 },
                            collapsed: { height: 0, opacity: 0, marginTop: 0 },
                          }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden text-gray-300 text-sm"
                        >
                          <div className="py-2">{faq.answer}</div>
                        </motion.div>
                      )}
                    </AnimatePresence>
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
      <RequestInfoButton />
    </div>
  );
}
