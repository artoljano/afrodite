"use client";

import { motion } from "framer-motion";
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

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section with Video Background */}
      <VideoBackground
        overlayOpacity={0.85}
        className="min-h-screen flex items-center py-32 md:py-0 bg-gradient-to-r from-black to-purple-900"
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
              <div className="inline-flex items-center px-4 py-2 bg-purple-900/30 backdrop-blur-sm rounded-full text-white text-sm mb-4 border border-purple-500/20">
                <Sparkles className="h-4 w-4 mr-2 text-purple-400" />
                <span>Kurse të certifikuara ndërkombëtarisht</span>
              </div>
              <div className="relative">
                <motion.div
                  initial={{ width: 0 }}
                  animate={heroInView ? { width: "100px" } : {}}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="h-1 bg-purple-500 mb-4"
                />
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-white leading-tight">
                  Kurse Profesionale{" "}
                  <span className="text-purple-400">Ndërkombëtare</span>
                </h1>
              </div>
              <p className="text-lg text-gray-300 max-w-lg">
                Zbuloní mundësitë për të avancuar karrierën tuaj me kurset tona
                profesionale të njohura ndërkombëtarisht. Ne ofrojmë mësim
                online dhe në zyrat tona fizike.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <AnimatedButton
                  size="lg"
                  variant="default"
                  className="bg-black hover:bg-black text-white border border-purple-500/30"
                >
                  KURSE FIZIKE
                  <ChevronRight className="ml-2 h-4 w-4" />
                </AnimatedButton>
                <AnimatedButton
                  size="lg"
                  variant="outline"
                  className="border-white hover:bg-purple-500/20 text-white"
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
                  <span className="text-white font-semibold">500+</span>{" "}
                  studentë të diplomuar
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden border-8 border-white/10 shadow-2xl max-w-md mx-auto backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                <Image
                  src="/placeholder.svg?height=600&width=600&text=Hero+Image"
                  alt="Afrodite Academy Professional"
                  width={600}
                  height={600}
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 z-20 bg-black/60 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-medium">
                        Kursi i ardhshëm fillon më:
                      </p>
                      <p className="text-purple-400 font-bold">
                        15 Qershor 2023
                      </p>
                    </div>
                    <AnimatedButton
                      size="sm"
                      variant="secondary"
                      className="bg-purple-600 hover:bg-purple-700"
                    >
                      Regjistrohu
                    </AnimatedButton>
                  </div>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={heroInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="absolute -z-10 -bottom-10 -right-10 w-64 h-64"
              >
                <Image
                  src="/wave-pattern.svg"
                  alt="Decorative pattern"
                  width={256}
                  height={256}
                  className="object-contain"
                />
              </motion.div>

              {/* Floating badge */}
              <div className="absolute -top-5 -right-5 md:top-5 md:right-0 bg-black text-white px-4 py-2 rounded-full shadow-lg z-20 flex items-center border border-purple-500/30">
                <Star className="h-5 w-5 text-yellow-500 mr-2" />
                <span className="font-medium">Certifikim OMC</span>
              </div>
            </motion.div>
          </div>
        </div>
      </VideoBackground>

      {/* Quick Info Section - NEW */}
      <section className="py-8 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 flex items-center shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <Calendar className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Orare Fleksibël</h3>
                <p className="text-sm text-gray-600">
                  Kurse në mëngjes, pasdite dhe fundjavë
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 flex items-center shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <CheckCircle2 className="h-6 w-6 text-purple-600" />
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
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Instruktorë Profesionistë
                </h3>
                <p className="text-sm text-gray-600">
                  Mësimdhënie nga ekspertë të industrisë
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
              Eksperiencë Mësimore{" "}
              <span className="text-purple-600">e Pashoqe</span>
            </h2>
            <div className="h-1 w-24 bg-purple-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Ne ofrojmë një përvojë të plotë mësimore që kombinon teorinë me
              praktikën, duke ju përgatitur për një karrierë të suksesshme.
            </p>
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
              <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <video
                  src="/videos/fileTest.mp4"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-16 h-16 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  >
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                  </button>
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
                  videoSrc="/videos/fileTest.mp4"
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
                  <Quote className="h-5 w-5 text-purple-600" />
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
                      <Award className="h-8 w-8 text-purple-600 group-hover:text-purple-700 transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-poppins text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
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
                      <Users className="h-8 w-8 text-purple-600 group-hover:text-purple-700 transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-poppins text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
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
                      <BookOpen className="h-8 w-8 text-purple-600 group-hover:text-purple-700 transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-poppins text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                        Kurrikula Moderne
                      </h3>
                      <p className="text-gray-700">
                        Kurset tona përditësohen vazhdimisht për të përfshirë
                        teknikat dhe trendet më të fundit në industrinë e
                        bukurisë.
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
                      <HeartHandshake className="h-8 w-8 text-purple-600 group-hover:text-purple-700 transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-poppins text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                        Komunitet Mbështetës
                      </h3>
                      <p className="text-gray-700">
                        Bëhuni pjesë e një komuniteti mbështetës profesionistësh
                        dhe studentësh që ndajnë pasionin për bukurinë dhe
                        estetikën.
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
                    src="/placeholder.svg?height=600&width=600&text=Flexible+Learning"
                    alt="Flexible Learning"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <div className="bg-purple-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold font-poppins text-gray-900 mb-3">
                    Orare Fleksibël
                  </h3>
                  <p className="text-gray-700">
                    Ofrojmë orare fleksibël për t'ju mundësuar të studioni
                    ndërsa punoni ose keni angazhime të tjera.
                  </p>
                  <Link
                    href="/about"
                    className="inline-flex items-center text-purple-600 mt-4 font-medium hover:text-purple-700 transition-colors"
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
                    <Briefcase className="h-6 w-6 text-purple-600" />
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
                    className="inline-flex items-center text-purple-600 mt-4 font-medium hover:text-purple-700 transition-colors"
                  >
                    Mëso më shumë
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
                <div className="order-1 md:order-2 h-full">
                  <Image
                    src="/placeholder.svg?height=600&width=600&text=Career+Opportunities"
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
      <section className="bg-gradient-to-r from-black to-purple-900 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=600&text=Pattern')] bg-cover bg-center opacity-5"></div>

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
              Afrodite Academy në <span className="text-purple-400">Numra</span>
            </h2>
            <div className="h-1 w-24 bg-purple-500 mx-auto mb-6"></div>
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
              <div className="absolute top-0 left-0 w-full h-1 bg-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="p-8 text-center">
                <div className="mb-4 mx-auto w-20 h-20 rounded-full bg-purple-900/50 flex items-center justify-center border border-purple-500/30">
                  <Award className="h-10 w-10 text-purple-400" />
                </div>
                <CountUpAnimation
                  end={500}
                  suffix="+"
                  className="text-4xl font-bold font-poppins text-white mb-2"
                  inView={statsInView}
                />
                <p className="text-gray-300">Studentë të Certifikuar</p>
                <div className="mt-4 h-2 bg-purple-900/50 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-purple-500"
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
              <div className="absolute top-0 left-0 w-full h-1 bg-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="p-8 text-center">
                <div className="mb-4 mx-auto w-20 h-20 rounded-full bg-purple-900/50 flex items-center justify-center border border-purple-500/30">
                  <BookOpen className="h-10 w-10 text-purple-400" />
                </div>
                <CountUpAnimation
                  end={20}
                  suffix="+"
                  className="text-4xl font-bold font-poppins text-white mb-2"
                  inView={statsInView}
                />
                <p className="text-gray-300">Kurse Profesionale</p>
                <div className="mt-4 h-2 bg-purple-900/50 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "65%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-purple-500"
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
              <div className="absolute top-0 left-0 w-full h-1 bg-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="p-8 text-center">
                <div className="mb-4 mx-auto w-20 h-20 rounded-full bg-purple-900/50 flex items-center justify-center border border-purple-500/30">
                  <Users className="h-10 w-10 text-purple-400" />
                </div>
                <CountUpAnimation
                  end={15}
                  suffix="+"
                  className="text-4xl font-bold font-poppins text-white mb-2"
                  inView={statsInView}
                />
                <p className="text-gray-300">Instruktorë të Kualifikuar</p>
                <div className="mt-4 h-2 bg-purple-900/50 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "75%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-purple-500"
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
              <div className="absolute top-0 left-0 w-full h-1 bg-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="p-8 text-center">
                <div className="mb-4 mx-auto w-20 h-20 rounded-full bg-purple-900/50 flex items-center justify-center border border-purple-500/30">
                  <Calendar className="h-10 w-10 text-purple-400" />
                </div>
                <CountUpAnimation
                  end={5}
                  suffix="+"
                  className="text-4xl font-bold font-poppins text-white mb-2"
                  inView={statsInView}
                />
                <p className="text-gray-300">Vite Eksperiencë</p>
                <div className="mt-4 h-2 bg-purple-900/50 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "55%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-purple-500"
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
              variant="outline"
              className="bg-purple-600 text-white hover:bg-purple-700 border border-purple-500/30 group"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              SHKARTO BROSHURËN E KURSEVE
            </AnimatedButton>
          </motion.div>
        </div>
      </section>

      {/* Partner Logos Section */}
      <section className="bg-black py-12 overflow-hidden">
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
              Kurset Tona <span className="text-purple-600">Profesionale</span>
            </h2>
            <div className="h-1 w-24 bg-purple-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Zgjidhni nga kurset tona të shumta profesionale për të avancuar
              karrierën tuaj dhe për të fituar aftësi të reja të kërkuara në
              tregun e punës.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CourseCard
              title="Kurs Profesional për Makeup Artist"
              description="Mësoni teknikat e fundit të makeup nga profesionistët e industrisë."
              image="/placeholder.svg?height=300&width=400&text=Makeup+Course"
              delay={0.1}
              inView={coursesInView}
              learningPoints={[
                "Teknika profesionale të makeup për evenimente",
                "Makeup artistik dhe special effects",
                "Përdorimi i produkteve profesionale",
                "Krijimi i portofolit personal",
              ]}
            />
            <CourseCard
              title="Kurs Profesional për Manikyr & Pedikyr"
              description="Bëhuni specialist i kualifikuar në kujdesin e thonjve dhe trajtimeve estetike."
              image="/placeholder.svg?height=300&width=400&text=Nails+Course"
              delay={0.2}
              inView={coursesInView}
              learningPoints={[
                "Teknika të avancuara të manikyr dhe pedikyr",
                "Aplikimi i thonjve artificialë",
                "Dizajne dhe dekorime artistike",
                "Kujdesi dhe trajtimi i problemeve të thonjve",
              ]}
            />
            <CourseCard
              title="Kurs Profesional për Estetikë"
              description="Mësoni trajtimet më të avancuara të lëkurës dhe procedurat estetike."
              image="/placeholder.svg?height=300&width=400&text=Esthetics+Course"
              delay={0.3}
              inView={coursesInView}
              learningPoints={[
                "Trajtime profesionale të fytyrës",
                "Teknika të depilimit dhe epilimit",
                "Trajtime anti-aging dhe hidratimi",
                "Përdorimi i aparaturave moderne estetike",
              ]}
            />
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
                className="bg-black hover:bg-black text-white border border-purple-500/30"
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
              <span className="text-purple-600">Studentët Tanë</span>
            </h2>
            <div className="h-1 w-24 bg-purple-500 mx-auto mb-6"></div>
          </div>

          <TestimonialSlider />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-black via-purple-900 to-black relative overflow-hidden">
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
              <span className="text-purple-400">Karrierën Tuaj të Re?</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Regjistrohuni sot në kurset tona profesionale dhe bëhuni pjesë e
              komunitetit tonë të profesionistëve të suksesshëm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton
                size="lg"
                variant="default"
                className="bg-black hover:bg-black text-white border border-purple-500/30"
              >
                REGJISTROHU TANI
              </AnimatedButton>
              <Link href="/contact">
                <AnimatedButton
                  size="lg"
                  variant="outline"
                  className="bg-purple-600 text-white hover:bg-purple-700 border border-purple-500/30"
                >
                  NA KONTAKTONI
                </AnimatedButton>
              </Link>
            </div>

            {/* Added FAQ accordion */}
            <div className="mt-16 text-left bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                Pyetje të Shpeshta
              </h3>
              <div className="space-y-4">
                <div className="border-b border-white/10 pb-4">
                  <button className="flex justify-between items-center w-full text-left">
                    <span className="text-white font-medium">
                      Sa zgjat një kurs profesional?
                    </span>
                    <ChevronRight className="h-5 w-5 text-purple-400 transform rotate-90" />
                  </button>
                  <div className="mt-2 text-gray-300 text-sm">
                    Kurset tona profesionale zgjasin nga 1 deri në 6 muaj, në
                    varësi të programit dhe nivelit të zgjedhur.
                  </div>
                </div>
                <div className="border-b border-white/10 pb-4">
                  <button className="flex justify-between items-center w-full text-left">
                    <span className="text-white font-medium">
                      A ofrohen kurse online?
                    </span>
                    <ChevronRight className="h-5 w-5 text-purple-400" />
                  </button>
                </div>
                <div className="border-b border-white/10 pb-4">
                  <button className="flex justify-between items-center w-full text-left">
                    <span className="text-white font-medium">
                      Si mund të regjistrohem?
                    </span>
                    <ChevronRight className="h-5 w-5 text-purple-400" />
                  </button>
                </div>
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
