"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  BookOpen,
  Users,
  Clock,
  Award,
  GraduationCap,
  Star,
  Globe,
  Trophy,
  ChevronRight,
  Mail,
  Linkedin,
  Instagram,
  Facebook,
  Calendar,
  Sparkles,
} from "lucide-react";
import { AnimatedButton } from "@/components/animated-button";
import VideoBackground from "@/components/video-background";
import AlumniCarousel from "@/components/alumni-carousel";
import EnhancedTimeline from "@/components/enhanced-timeline";
import PartnerLogosCarousel from "@/components/partner-logos-carousel";
import Link from "next/link";
import { useState } from "react";
import dynamic from "next/dynamic";
import { team, TeamMember } from "@/data/team";
import { awards } from "@/data/awards";

// Timeline events data
const timelineEvents = [
  {
    year: "2013",
    title: "Themelimi i Akademisë",
    description:
      "Themelimi i Akademisë Afrodite në Tiranë me kurset e para të makeup dhe estetikës.",
    image: "/placeholder.svg?height=200&width=300&text=Founding+2013",
  },
  {
    year: "2015",
    title: "Zgjerimi i Kurseve",
    description:
      "Zgjerimi i kurseve me manikyr, pedikyr dhe trajtime estetike të avancuara.",
    image: "/placeholder.svg?height=200&width=300&text=Expansion+2015",
  },
  {
    year: "2018",
    title: "Partneritete Ndërkombëtare",
    description:
      "Fillimi i partneriteteve ndërkombëtare me akademi prestigjioze në Itali dhe Evropë.",
    image: "/placeholder.svg?height=200&width=300&text=Partnerships+2018",
  },
  {
    year: "2020",
    title: "Qendra e Re",
    description:
      "Hapja e qendrës së re moderne me pajisje të teknologjisë së fundit dhe 100 studentë të punësuar brenda 3 muajve.",
    image: "/placeholder.svg?height=200&width=300&text=New+Center+2020",
  },
  {
    year: "Sot",
    title: "Lider në Industri",
    description:
      "Akademia Afrodite vazhdon të jetë lider në fushën e arsimit profesional në Shqipëri me mbi 500 studentë të diplomuar.",
    image: "/placeholder.svg?height=200&width=300&text=Today",
  },
];

// Awards data
// const awards = [
//   {
//     id: 1,
//     title: "Çmimi i Ekselencës në Arsim",
//     organization: "Ministria e Arsimit",
//     year: "2022",
//     description:
//       "Për kontributin e jashtëzakonshëm në arsimin profesional në Shqipëri.",
//     image: "/placeholder.svg?height=200&width=200&text=Award+2022",
//     color: "purple",
//   },
//   {
//     id: 2,
//     title: "Akademia më e Mirë e Vitit",
//     organization: "Beauty Industry Association",
//     year: "2021",
//     description:
//       "Për standardet e larta të mësimdhënies dhe rezultatet e studentëve.",
//     image: "/placeholder.svg?height=200&width=200&text=Award+2021",
//     color: "gold",
//   },
//   {
//     id: 3,
//     title: "Çmimi i Inovacionit",
//     organization: "European Beauty Schools",
//     year: "2020",
//     description:
//       "Për metodat inovative të mësimdhënies dhe kurrikulën moderne.",
//     image: "/placeholder.svg?height=200&width=200&text=Award+2020",
//     color: "purple",
//   },
//   {
//     id: 4,
//     title: "Çmimi i Partneritetit",
//     organization: "International Beauty Council",
//     year: "2019",
//     description:
//       "Për krijimin e partneriteteve ndërkombëtare që përfitojnë studentët.",
//     image: "/placeholder.svg?height=200&width=200&text=Award+2019",
//     color: "gold",
//   },
// ];

export default function AboutPage() {
  const [modalId, setModalId] = useState<string | null>(null);

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [missionRef, missionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [historyRef, historyInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [valuesRef, valuesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [partnersRef, partnersInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [certificationsRef, certificationsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const AlumniCarousel = dynamic(() => import("@/components/alumni-carousel"), {
    ssr: false,
  });

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-r from-black to-purple-900 overflow-hidden">
        {/* Background pattern */}
        <div
          className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=600&text=Pattern')] bg-cover bg-center opacity-5"
          aria-hidden="true"
        />
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
          <Image
            src="/wave-pattern.svg"
            alt=""
            width={256}
            height={256}
            className="object-contain"
          />
        </div>

        <VideoBackground
          showControls
          className="relative z-10 pointer-events-none"
        >
          {/* empty, we only need its background + controls */}
        </VideoBackground>

        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm mb-6">
              <Sparkles className="h-4 w-4 mr-2 text-purple-400" />
              <span>Njihuni me historinë tonë</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-white mb-6">
              Rreth <span className="text-purple-400">Afrodite Academy</span>
            </h1>
            <div className="h-1 w-24 bg-purple-500 mx-auto mb-8" />
            <p className="text-lg text-gray-300 mb-8">
              Akademia kryesore për kurse profesionale në Shqipëri, me një
              histori të pasur dhe një vizion për të ardhmen.
            </p>
          </motion.div>
        </div>

        {/* Scroll indicator fixed at bottom of this section */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-1.5 bg-white rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </div>
        </motion.div>
      </section>

      {/* Main Intro Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-800 text-sm mb-4">
              <span>Kush jemi ne</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 text-center">
              Akademia Kryesore për{" "}
              <span className="text-purple-600">Kurset Profesionale</span> në
              Shqipëri
            </h2>
            <div className="h-1 w-24 bg-purple-500 mx-auto mt-6"></div>
          </div>

          <div
            ref={missionRef}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left Column - Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="space-y-6"
            >
              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                <p className="text-gray-700 italic">
                  "Akademia Afrodite, akademia më e madhe në Shqipëri e krijuar
                  nga profesionistja Aferdita Ferracaku, sjell metoda mësimore
                  të avancuara dhe bashkëkohore në fusha të ndryshme
                  profesionale."
                </p>
              </div>
              <p className="text-gray-700">
                Akademia Afrodite sot është 11 vjeç dhe ka një ekip të
                përkushtuar që punon ngushtë me studentët për të arritur
                objektivat e vendosura. Emri Akademia Afrodite njihet për
                cilësinë dhe përkushtimin ndaj arsimit profesional.
              </p>
              <p className="text-gray-700">
                E frymëzuar nga pasioni për përmirësimin profesional, Aferdita
                vendosi të krijojë akademinë "Afrodite." E diplomuar në Itali
                dhe me 22 vjet përvojë profesionale në një akademi prestigjioze
                Italiane, ajo vendosi të kontribuojë në vendin e saj të lindjes
                pas një eksperience të pasur ndërkombëtare.
              </p>
            </motion.div>

            {/* Right Column - Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Globe className="h-5 w-5 text-purple-600 mr-2" />
                  Shkëmbime Ndërkombëtare
                </h3>
                <p className="text-gray-700">
                  Gjatë trajnimeve, ne organizojmë shkëmbime eksperience me
                  shkolla partnere në Itali, ku studentët marrin njohuri për të
                  hapur dhe menaxhuar institute të ndryshme profesionale me
                  cilësinë më të lartë.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <BookOpen className="h-5 w-5 text-purple-600 mr-2" />
                  Njohuri të Reja
                </h3>
                <p className="text-gray-700">
                  Në Afrodite Academy (A.I.W.A), ne përkushtohemi t’ju ofrojmë
                  dije të përditësuara në çdo stad të karrierës suaj
                  profesionale. Përmes moduleve tona praktike, teknikat më të
                  avancuara, produktet inovative dhe strategjitë më të fundit të
                  industrisë ju pajisin për të përmbushur kërkesat e tregut dhe
                  për të qëndruar përpara në zhvillimet globale të bukurisë dhe
                  mirëqenies.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Award className="h-5 w-5 text-purple-600 mr-2" />
                  Qëllimi Ynë
                </h3>
                <p className="text-gray-700">
                  Në Afrodite Academy synojmë që çdo kursant të realizojë
                  potencialin e tij dhe të fitojë aftësitë e nevojshme për t’u
                  bërë profesionist i vlerësuar në industrinë e bukurisë. Përmes
                  programeve tona të specializuara—kurse intensive, masterklasa
                  me ekspertë italianë, seminare praktike dhe aktivitete të
                  përvitshme—ne përgatitim çdo student për trajnime të avancuara
                  dhe për mundësi të vazhdueshme zhvillimi profesional.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History Section with Horizontal Timeline */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div ref={historyRef} className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-800 text-sm mb-4">
              <span>Historia jonë</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 text-center mb-4">
              Udhëtimi Ynë <span className="text-purple-600">Ndër Vite</span>
            </h2>
            <div className="h-1 w-24 bg-purple-500 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={historyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative"
            >
              <div className="rounded-lg overflow-hidden shadow-xl">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=600&width=800&text=Founder+Photo"
                    alt="Aferdita Ferracaku - Founder"
                    width={800}
                    height={600}
                    className="object-cover w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold">Aferdita Ferracaku</h3>
                    <p className="text-sm">Themeluese & Drejtore</p>
                  </div>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={historyInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500"
              >
                <p className="text-gray-800 font-medium italic">
                  "Pasioni për bukurinë dhe arsimin profesional më frymëzoi të
                  krijoj Akademinë Afrodite."
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  - Aferdita Ferracaku, Themeluese
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column - Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={historyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="space-y-6"
            >
              <div className="relative pl-8 border-l-2 border-purple-200">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-purple-500"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Eksperiencë
                </h3>
                <p className="text-gray-700">
                  Me një karrierë prej mbi 20 vitesh eksperiencë në Itali, në
                  sektorin e bukurisë, estetikës dhe menaxhimit akademik,
                  Aferdita Ferracaku ka ndërtuar një profil të fortë si
                  drejtuese teknike dhe trajnere profesionale në qendra
                  prestigjioze europiane.
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-purple-200">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-purple-500"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Zhvillim
                </h3>
                <p className="text-gray-700">
                  E rikthyer në Shqipëri, themeloi Afrodite Italian Wellness
                  Academy, një institucion model për trajnimin dhe certifikimin
                  profesional në estetike, parukeri, make-up, masazh dhe kujdes
                  shëndetësor, duke sjellë standardet europiane në formimin
                  shqiptar.
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-purple-200">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-purple-500"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sot</h3>
                <p className="text-gray-700">
                  Në rolin e saj si administratore dhe pedagoge, ajo drejton
                  akademinë me vizion modern, duke krijuar mundësi reale për
                  punësim dhe zhvillim për brezin e ri të profesionistëve në
                  Shqipëri dhe jashtë saj.
                </p>
              </div>

              <div className="mt-8">
                <Link href="/courses">
                  <AnimatedButton className="bg-black hover:bg-black text-white">
                    Shiko kurset tona
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </AnimatedButton>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Horizontal Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={historyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-white p-8 rounded-xl shadow-sm"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Momentet Kyçe
            </h3>
            <EnhancedTimeline events={timelineEvents} />
          </motion.div>

          {/* Alumni Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={historyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-16"
          >
            <AlumniCarousel />
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-white">
        <div ref={valuesRef} className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-800 text-sm mb-4">
              <span>Vlerat tona</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 mb-4">
              Çfarë na <span className="text-purple-600">Udhëheq</span>
            </h2>
            <div className="h-1 w-24 bg-purple-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700">
              Në Afrodite Academy, ne udhëhiqemi nga një set vlerash që formojnë
              çdo aspekt të punës sonë dhe na ndihmojnë të ofrojmë përvojën më
              të mirë për studentët tanë.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="bg-purple-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                <Star className="h-8 w-8 text-purple-600 group-hover:text-purple-700 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold font-poppins text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                Cilësi
              </h3>
              <p className="text-gray-700">
                Ne jemi të përkushtuar ndaj cilësisë në çdo aspekt të punës
                sonë, nga kurrikula deri te pajisjet dhe materialet që përdorim.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="bg-purple-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                <Users className="h-8 w-8 text-purple-600 group-hover:text-purple-700 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold font-poppins text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                Komunitet
              </h3>
              <p className="text-gray-700">
                Ne krijojmë një mjedis mbështetës ku studentët mund të mësojnë,
                të rriten dhe të ndërtojnë lidhje që zgjasin përtej kohës së
                kursit.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="bg-purple-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                <Clock className="h-8 w-8 text-purple-600 group-hover:text-purple-700 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold font-poppins text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                Inovacion
              </h3>
              <p className="text-gray-700">
                Ne jemi gjithmonë në kërkim të teknikave dhe trendeve të reja
                për t'u siguruar që studentët tanë janë në pararojë të
                industrisë.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="bg-purple-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                <BookOpen className="h-8 w-8 text-purple-600 group-hover:text-purple-700 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold font-poppins text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                Ekspertizë
              </h3>
              <p className="text-gray-700">
                Instruktorët tanë janë profesionistë me përvojë ndërkombëtare që
                ofrojnë njohuritë dhe aftësitë më të fundit në industrinë e
                bukurisë.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section - Redesigned */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-800 text-sm mb-4">
              <span>Ekipi ynë</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 mb-4">
              Ekipi Ynë <span className="text-purple-600">Profesional</span>
            </h2>
            <div className="h-1 w-24 bg-purple-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700">
              Njihuni me ekipin tonë të përkushtuar të profesionistëve që janë
              të pasionuar për të ndarë njohuritë dhe ekspertizën e tyre.
            </p>
          </div>

          {/* Grid of team cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group"
              >
                {/* Photo (with placeholder fallback) */}
                <div className="relative overflow-hidden rounded-t-xl h-[400px] md:h-80">
                  <Image
                    src={member.photo || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="
              object-cover object-center
              transition-transform duration-500
              md:group-hover:scale-105
            "
                  />
                </div>

                {/* Card body */}
                <div className="bg-white p-6 rounded-b-xl shadow-sm border border-t-0 border-gray-100">
                  {/* Title clamped to 3 lines */}
                  <h3
                    className="
              text-xl font-bold font-poppins text-gray-900 mb-1
              line-clamp-3
            "
                  >
                    {member.name}
                  </h3>

                  <p
                    className="
      text-purple-600 mb-1 font-medium line-clamp-3 h-[4.5rem] overflow-hidden"
                  >
                    {member.role}
                  </p>
                  <p className="text-gray-500 text-sm mb-4">
                    {member.experience}
                  </p>

                  {/* Bio clamped to 2 lines */}
                  <p
                    className="
              text-gray-700 text-sm mb-4
              line-clamp-2
            "
                  >
                    {member.bio}
                  </p>

                  <button
                    onClick={() => setModalId(member.id)}
                    className="mt-2 text-purple-600 hover:text-purple-800 text-sm font-medium"
                  >
                    Shiko më shumë
                  </button>

                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-1 text-purple-600" />
                      <span>{member.email}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Join our team CTA */}
          <div className="text-center mt-12">
            <Link href="/contact">
              <AnimatedButton className="bg-black hover:bg-black text-white">
                Bëhu pjesë e ekipit tonë
                <ChevronRight className="ml-2 h-4 w-4" />
              </AnimatedButton>
            </Link>
          </div>
        </div>

        {/* Modals */}
        {team.map((member) =>
          modalId === member.id ? (
            <div
              key={member.id}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6"
            >
              <div className="relative bg-white rounded-xl shadow-xl w-full max-w-md mx-auto overflow-hidden">
                {/* Close */}

                {/* —————— IMAGE (fixed taller height) —————— */}
                <div className="w-full relative h-[50vh] overflow-hidden">
                  <Image
                    src={member.photo || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <button
                  onClick={() => setModalId(null)}
                  className="absolute top-4 right-4 text-black-400 hover:text-purple-500 z-10"
                >
                  ✕
                </button>
                {/* —————— BODY —————— */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold font-poppins text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-purple-600 mb-1 font-medium">
                    {member.role}
                  </p>
                  <p className="text-gray-500 text-sm mb-4">
                    {member.experience}
                  </p>
                  <p className="text-gray-700 mb-4">{member.bio}</p>
                  <div className="flex items-center text-sm text-gray-600">
                    <Mail className="h-4 w-4 mr-1 text-purple-600" />
                    <span>{member.email}</span>
                  </div>
                </div>
              </div>
            </div>
          ) : null
        )}
      </section>

      {/* Partners Section */}
      <section className="py-16 md:py-24 bg-white">
        <div ref={partnersRef} className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-800 text-sm mb-4">
              <span>Partnerët tanë</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 mb-4">
              Partnerët <span className="text-purple-600">Tanë</span>
            </h2>
            <div className="h-1 w-24 bg-purple-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700">
              Bashkëpunojmë me institucione dhe kompani prestigjioze për të
              ofruar mundësi të shkëlqyera për studentët tanë.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl shadow-sm mb-12">
            <PartnerLogosCarousel />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Partneritete Akademike
              </h3>
              <p className="text-gray-700 mb-4">
                Bashkëpunojmë me akademi prestigjioze në Itali dhe Evropë për të
                ofruar programe shkëmbimi dhe trajnime të specializuara.
              </p>
              <Link
                href="/about"
                className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center"
              >
                Mëso më shumë
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Partneritete Industriale
              </h3>
              <p className="text-gray-700 mb-4">
                Kemi krijuar lidhje të forta me biznese në industrinë e bukurisë
                për të siguruar mundësi praktike dhe punësimi për studentët
                tanë.
              </p>
              <Link
                href="/about"
                className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center"
              >
                Mëso më shumë
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Partneritete Ndërkombëtare
              </h3>
              <p className="text-gray-700 mb-4">
                Jemi anëtarë të organizatave ndërkombëtare që na mundësojnë të
                ofrojmë certifikime të njohura globalisht.
              </p>
              <Link
                href="/about"
                className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center"
              >
                Mëso më shumë
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Certifications Section - Completely Redesigned */}
      <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
        {/* header, container etc. */}

        {/* central line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-purple-200 hidden md:block" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="space-y-16">
            {awards.map((award, idx) => (
              <div
                key={award.id}
                className={`flex flex-col items-center md:items-stretch md:flex-row ${
                  idx % 2 === 0 ? "" : "md:flex-row-reverse"
                } relative`}
              >
                {/* text side */}
                <div
                  className={`md:w-1/2 p-6 ${
                    idx % 2 === 0
                      ? "md:pr-16 text-center md:text-right"
                      : "md:pl-16 text-center md:text-left"
                  }`}
                >
                  <div
                    className={`inline-flex items-center px-3 py-1 rounded-full text-white text-sm mb-3 ${
                      award.color === "purple"
                        ? "bg-purple-600"
                        : "bg-amber-500"
                    }`}
                  >
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{award.year}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{award.title}</h3>
                  <p className="text-purple-600 font-medium mb-2">
                    {award.organization}
                  </p>
                  <p className="text-gray-700">{award.description}</p>
                </div>

                {/* image/icon side */}
                <div className="md:w-1/2 flex justify-center p-6">
                  <div
                    className={`w-32 h-32 rounded-full flex items-center justify-center ${
                      award.color === "purple"
                        ? "bg-purple-100"
                        : "bg-amber-100"
                    }`}
                  >
                    <Image
                      src={award.imageSrc}
                      alt={award.title}
                      width={120}
                      height={120}
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* center “dot” marker */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-4 border-purple-500 rounded-full hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-800 text-sm mb-4">
              <span>Ambientet tona</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 mb-4">
              Ambientet <span className="text-purple-600">Tona</span>
            </h2>
            <div className="h-1 w-24 bg-purple-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700">
              Akademia jonë ofron ambiente moderne dhe të pajisura me
              teknologjinë më të fundit për një përvojë mësimore optimale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl overflow-hidden shadow-md group relative"
            >
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Classroom"
                  alt="Klasë Mësimore"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold">Klasa Mësimore</h3>
                    <p className="text-sm text-gray-300 mt-2">
                      Klasa moderne të pajisura me teknologjinë më të fundit
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-purple-700 text-sm font-medium">
                Klasa Mësimore
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-xl overflow-hidden shadow-md group relative"
            >
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Makeup+Studio"
                  alt="Studio Makeup"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold">Studio Makeup</h3>
                    <p className="text-sm text-gray-300 mt-2">
                      Studio profesionale për praktikën e makeup
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-purple-700 text-sm font-medium">
                Studio Makeup
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-xl overflow-hidden shadow-md group relative"
            >
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Esthetics+Lab"
                  alt="Laborator Estetike"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold">Laborator Estetike</h3>
                    <p className="text-sm text-gray-300 mt-2">
                      Laborator i pajisur me aparatura moderne estetike
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-purple-700 text-sm font-medium">
                Laborator Estetike
              </div>
            </motion.div>
          </div>

          {/* Virtual Tour Button */}
          <div className="text-center mt-12">
            <AnimatedButton className="bg-black hover:bg-black text-white">
              Bëj një tur virtual
              <ChevronRight className="ml-2 h-4 w-4" />
            </AnimatedButton>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-black via-purple-900 to-black relative overflow-hidden">
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
              <Sparkles className="h-4 w-4 mr-2 text-purple-400" />
              <span>Bëhu pjesë e suksesit</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white mb-6">
              Bëhu Pjesë e{" "}
              <span className="text-purple-400">Akademisë Sonë</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Qëllimi ynë është që çdo student të arrijë suksesin e dëshiruar
              dhe të rrithëhet në Akademinë Italiane të Mirëqenies Afrodite për
              trajnime të vazhdueshme profesionale.
            </p>
            <AnimatedButton
              size="lg"
              variant="secondary"
              className="bg-purple-600 hover:bg-black text-white border border-purple-500/30"
            >
              REGJISTROHU TANI
            </AnimatedButton>
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
    </div>
  );
}
