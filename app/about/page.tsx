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
  MapPin,
} from "lucide-react";
import { AnimatedButton } from "@/components/animated-button";
import VideoBackground from "@/components/video-background";
import AlumniCarousel from "@/components/alumni-carousel";
import EnhancedTimeline from "@/components/enhanced-timeline";
import PartnerLogosCarousel from "@/components/partner-logos-carousel";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { team, TeamMember } from "@/data/team";
import { awards } from "@/data/awards";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import VideoModal from "@/components/video-modal";
import { useVideoThumbnail } from "@/components/useVideoThumbnail";
import TestimonialSlider from "@/components/testimonial-slider";
import WhatsAppButton from "@/components/whatsapp-button";

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
  const autoplay = useMemo(
    () =>
      Autoplay({
        delay: 1500, // fast initial speed: 1.5s
        stopOnInteraction: true, // pause on drag/swipe
        stopOnMouseEnter: false, // we’ll control pause on hover ourselves
      }),
    []
  );

  // 2️⃣ Initialize Embla with loop + autoplay
  const [emblaRef] = useEmblaCarousel({ loop: true, skipSnaps: false }, [
    autoplay,
  ]);

  const sliderRef = useRef<HTMLDivElement>(null);
  const paused = useRef(false);
  const speed = useRef(1.5); // px per frame (fast initial)

  //safe src
  const safeSrc = (value?: string | null, fallback = "/placeholder.svg") =>
    value && value.trim() ? value : fallback;

  // State holds current video modal info, or null
  const [modalVideo, setModalVideo] = useState<{
    videoSrc: string;
    titlets: string;
  } | null>(null);

  const slides: Array<{
    type: "image" | "video";
    src: string;
    thumbnail?: string;
    alt?: string;
    title: string;
    caption: string;
  }> = [
    {
      type: "image",
      src: "/facilities/ambient-1.jpeg",
      alt: "Klasë Mësimore",
      title: "Klasa Mësimore",
      caption: "Klasa moderne të pajisura me teknologjinë më të fundit",
    },
    {
      type: "video",
      src: "/facilities/ambient-1.mp4",
      // thumbnail: "/facilities/ambient-1.mp4",
      title: "Tur Virtual Video",
      caption: "Pamje nga ambientet tona në video",
    },
    {
      type: "image",
      src: "/facilities/ambient-2.jpeg",
      alt: "Laborator Estetike",
      title: "Laborator Estetike",
      caption: "Laborator i pajisur me aparatura moderne estetike",
    },
    {
      type: "image",
      src: "/facilities/ambient-3.jpeg",
      alt: "Klasë Mësimore",
      title: "Klasa Mësimore",
      caption: "Klasa moderne të pajisura me teknologjinë më të fundit",
    },
    {
      type: "image",
      src: "/facilities/ambient-4.jpeg",
      alt: "Klasë Mësimore",
      title: "Klasa Mësimore",
      caption: "Klasa moderne të pajisura me teknologjinë më të fundit",
    },
  ];

  const thumbs = slides.map((s) =>
    s.type === "video" ? useVideoThumbnail(s.src, 1) : null
  );

  // duplicate for seamless loop
  const loopSlides = [...slides, ...slides];

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    let rafId: number;

    const step = () => {
      // only auto-scroll when not paused and no modal open
      if (!paused.current && !modalVideo) {
        el.scrollLeft += speed.current;
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) {
          el.scrollLeft -= half;
        }
      }
      rafId = requestAnimationFrame(step);
    };

    step();
    return () => cancelAnimationFrame(rafId);
  }, [modalVideo]);

  return (
    <div className="flex flex-col w-full ">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-afrodite-creme">
        {/* Background pattern */}

        <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
          <Image
            src="/wave-pattern.svg"
            alt=""
            width={256}
            height={256}
            className="object-contain"
          />
        </div>

        <div className="container mx-auto px-4 relative z-20 ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-afrodite-purple/10 backdrop-blur-sm rounded-full text-afrodite-purple text-sm mb-6">
              <Sparkles className="h-4 w-4 mr-2 text-afrodite-purple" />
              <span>Njihuni me historinë tonë</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-afrodite-purple mb-6">
              Akademia Kryesore në Arsimin Profesional me Standarte Europiane
            </h1>
            <div className="h-1 w-24 bg-afrodite-purple mx-auto mb-8" />
            <p className="text-lg text-afrodite-lightPurple mb-8">
              Programet tona ofrojnë diploma dhe certifikata të njohura
              ndërkombëtarisht, të vlefshme për punë në Itali, BE, SHBA, Kanada
              dhe Australi, apo hapjen e bizneseve në Itali dhe në Bashkimin
              Europian
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/courses">
                <AnimatedButton
                  size="lg"
                  variant="default"
                  className="rounded-xl px-8 bg-afrodite-lightPurple text-afrodite-creme hover:brightness-95"
                >
                  Shiko programet
                </AnimatedButton>
              </Link>

              <Link href="/apply">
                <AnimatedButton
                  size="lg"
                  variant="default"
                  className="rounded-xl px-8 border-2 border-afrodite-purple text-afrodite-purple hover:bg-afrodite-purple hover:text-afrodite-creme"
                >
                  Apliko tani
                </AnimatedButton>
              </Link>

              <Link href="/contact">
                <AnimatedButton
                  size="lg"
                  variant="default"
                  className="rounded-xl px-8 border-2 border-afrodite-purple text-afrodite-purple hover:bg-afrodite-purple hover:text-afrodite-creme"
                >
                  Vizitë në kampus
                </AnimatedButton>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator fixed at bottom of this section */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-8 h-12 border-2 border-afrodite-purple/30 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-1.5 bg-afrodite-lightPurple rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </div>
        </motion.div>
      </section>

      {/* Main Intro Section */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-afrodite-purple/10 backdrop-blur-sm rounded-full text-afrodite-purple text-sm mb-4 border border-afrodite-purple/20">
              <span>Kush jemi ne</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-afrodite-purple text-center">
              Afrodite Academy - Akademia që e kthen pasionin në profesion
            </h2>
            <div className="h-1 w-24 bg-afrodite-purple mx-auto mt-6"></div>
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
              {/* Image on top */}
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/afrodite-about-history.jpg" // 👉 replace with your image
                  alt="Afrodite Academy"
                  width={800}
                  height={600}
                  className="object-cover w-full h-64 md:h-72 lg:h-80 rounded-xl relative"
                  style={{ objectPosition: "center 20%" }}
                />
              </div>

              {/* Quote box */}
              <div className="bg-afrodite-lightPurple p-6 rounded-lg border-l-4 border-afrodite-purple">
                <p className="text-afrodite-creme italic">
                  "Akademia Afrodite përgatit profesionistë të rinj në fusha të
                  ndryshme, duke ofruar metoda mësimore të avancuara, të
                  mbështetura në një traditë të konsoliduar dhe një vizion të
                  qartë për të ardhmen."
                </p>
              </div>

              {/* Text paragraphs */}
              <p className="text-afrodite-purple">
                <strong>Afrodite Academy</strong> është një institucion lider në
                arsim, i licencuar dhe aktiv prej më shumë se një dekade.
              </p>
              <p className="text-afrodite-purple">
                Partneritetet ndërkombëtare, praktika me pajisje moderne dhe
                mentorimi nga ekspertë të fushës u japin kursantëve tanë aftësi
                që i bëjnë të suksesshëm kudo në botë.
              </p>
            </motion.div>

            {/* Right Column - Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-afrodite-creme p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-afrodite-purple mb-4 flex items-center">
                  <Globe className="h-5 w-5 text-afrodite-purple mr-2" />
                  Misioni ynë
                </h3>
                <p className="text-afrodite-purple">
                  Misioni ynë është të ofrojmë arsim profesional praktik dhe të
                  përditësuar, ku teoria integrohet me praktikën në çdo modul.
                  Përmes programeve të strukturuara, punës në studio dhe
                  projekteve reale, ne i pajisim kursantët me aftësi konkrete
                  për tregun e punës dhe me portfolio profesionale. Ne
                  angazhojmë instruktorë me eksperiencë të gjerë, përdorim
                  pajisje bashkëkohore dhe i lidhim studentët me rrjete punësimi
                  dhe partnerë të industrisë, duke siguruar që hapi i tyre i
                  radhës të jetë i qëndrueshëm dhe i suksesshëm.
                </p>
              </div>

              <div className="bg-afrodite-creme p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-afrodite-purple mb-4 flex items-center">
                  <BookOpen className="h-5 w-5 text-afrodite-purple mr-2" />
                  Vizioni ynë
                </h3>
                <p className="text-afrodite-purple">
                  Vizioni ynë është të ngremë standardin e edukimit profesional
                  në Shqipëri dhe rajon, duke promovuar etikë, cilësi dhe
                  inovacion të vazhdueshëm. Ne formojmë profesionistë që mësojnë
                  gjatë gjithë jetës dhe që kontribuojnë në zhvillimin dhe
                  përparimin e industrisë.
                </p>
              </div>

              <div className="bg-afrodite-creme p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-afrodite-purple mb-4 flex items-center">
                  <Award className="h-5 w-5 text-afrodite-purple mr-2" />
                  Njohja institucionale & organizimi
                </h3>
                <p className="text-afrodite-purple">
                  Procesin e cilësisë e garantojnë Bordi i Sigurimit të Cilësisë
                  dhe Këshilli Akademik, me rishikim periodik të kurrikulave.
                  Kursantët marrin gjithashtu këshillim akademik dhe karriere,
                  që i udhëheq nga regjistrimi deri në punësim.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Afrodite Text Section */}
      <section className="py-16 md:py-24 bg-afrodite-creme relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
        {/* <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div> */}

        <div ref={historyRef} className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-afrodite-purple/10 backdrop-blur-sm rounded-full text-afrodite-purple text-sm mb-4 border border-afrodite-purple/20">
              <span>Mesazh nga Themeluesja</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-afrodite-purple text-center mb-4">
              Nga Ëndrra në{" "}
              <span className="text-afrodite-purple">Realitet</span>
            </h2>
            <div className="h-1 w-24 bg-afrodite-purple mx-auto mb-6"></div>
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
                    src="/images/aferdita-1.jpeg"
                    alt="Aferdita Ferracaku - Founder"
                    width={800}
                    height={600}
                    className="object-cover w-full max-h-[800px] rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-afrodite-purple">
                    <h3 className="text-xl font-bold">Aferdita Ferracaku</h3>
                    <p className="text-sm">Themeluese & Drejtore</p>
                  </div>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={historyInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-afrodite-purple p-6 rounded-lg shadow-lg border-l-4 border-afrodite-creme"
              >
                <p className="text-afrodite-creme font-medium italic">
                  "Pasioni për bukurinë dhe arsimin profesional më frymëzoi të
                  krijoj Akademinë Afrodite."
                </p>
                <p className="text-afrodite-creme text-sm mt-2">
                  - Aferdita Ferracaku, Themeluese
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column - Founder Message */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={historyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-xl bg-afrodite-creme backdrop-blur-sm border border-afrodite-purple shadow-md p-6 md:p-8">
                {/* Decorative quote mark */}
                <div className="absolute -top-4 -left-4 bg-afrodite-purple text-afrodite-creme w-10 h-10 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-lg leading-none">“</span>
                </div>

                <h3 className="text-2xl font-bold font-poppins text-afrodite-purple mb-4">
                  Një mesazh nga themeluesja jonë
                </h3>

                <div className="space-y-4 text-afrodite-purple/90 leading-relaxed">
                  <p>
                    Kur themelova Afrodite Academy më shumë se një dekadë më
                    parë, ëndrra ime ishte të krijoja një hapësirë ku pasioni
                    për bukurinë dhe shërbimet profesionale të kthehej në
                    karrierë të qëndrueshme. Besoj fort se edukimi cilësor hap
                    dyer, jo vetëm në Shqipëri por kudo në botë.
                  </p>
                  <p>
                    Si një profesioniste e formuar në një shkollë prestigjioze
                    italiane dhe me mbi 20 vite eksperiencë në industrinë e
                    wellness dhe estetikës, e di nga afër se çfarë kërkon tregu
                    dhe si mund të përgatiten profesionistë që të shkëlqejnë.
                  </p>
                  <p>
                    Sot jam krenare që mijëra kursantë tanë punojnë si
                    profesionistë të suksesshëm në BE, SHBA, Kanada dhe
                    Australi. Çdo histori suksesi e tyre është dëshmia më e
                    bukur e punës sonë.
                  </p>
                  <p>
                    Në Afrodite Academy, çdo kursant nuk mëson vetëm një zanat –
                    ai fiton vetëbesim, përvojë reale dhe një rrjet ndërkombëtar
                    mundësish. Ky ka qenë dhe mbetet misioni im: të ndërtojmë
                    profesionistë që shkëlqejnë kudo.
                  </p>
                </div>

                {/* Signature block */}
                <div className="mt-6 pt-6 border-t border-afrodite-purple/15">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <p className="text-afrodite-purple font-semibold">
                        Aferdita Ferracaku
                      </p>
                      <p className="text-afrodite-lightPurple text-sm">
                        Themeluese & Drejtore e Afrodite Academy
                      </p>
                    </div>

                    {/* Optional digital signature image; remove if you don’t have it yet */}
                    {/* <Image
                      src="/images/firma-aferdita.png"
                      alt="Firmë digjitale"
                      width={160}
                      height={60}
                      className="opacity-80"
                    /> */}
                    {/* <span className="text-afrodite-lightPurple text-xs italic">
                      Firmë digjitale
                    </span> */}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <Link href="/courses">
                    <AnimatedButton
                      size="lg"
                      variant="default"
                      className="rounded-xl px-8 bg-afrodite-lightPurple text-afrodite-creme hover:brightness-95"
                    >
                      Shiko programet
                    </AnimatedButton>
                  </Link>

                  <Link href="/apply">
                    <AnimatedButton
                      size="lg"
                      variant="default"
                      className="rounded-xl px-8 border-2 border-afrodite-purple text-afrodite-purple hover:bg-afrodite-purple hover:text-afrodite-creme"
                    >
                      Apliko tani
                    </AnimatedButton>
                  </Link>

                  <Link href="/contact">
                    <AnimatedButton
                      size="lg"
                      variant="default"
                      className="rounded-xl px-8 border-2 border-afrodite-purple text-afrodite-purple hover:bg-afrodite-purple hover:text-afrodite-creme"
                    >
                      Vizitë në kampus
                    </AnimatedButton>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Horizontal Timeline
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={historyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-white p-8 rounded-xl shadow-sm"
          >
            <h3 className="text-2xl font-bold text-afrodite-purple mb-8 text-center">
              Momentet Kyçe
            </h3>
            <EnhancedTimeline events={timelineEvents} />
          </motion.div> */}
        </div>
      </section>

      {/* History Section with Horizontal Timeline */}
      <section className="py-16 md:py-24 bg-afrodite-creme relative overflow-hidden">
        {/* <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div> */}

        <div ref={historyRef} className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-afrodite-purple/10 backdrop-blur-sm rounded-full text-afrodite-purple text-sm mb-4 border border-afrodite-purple/20">
              <span>Historia jonë</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-afrodite-purple text-center mb-4">
              Udhëtimi Ynë{" "}
              <span className="text-afrodite-purple">Ndër Vite</span>
            </h2>
            <div className="h-1 w-24 bg-afrodite-purple mx-auto mb-6"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={historyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative"
            >
              <div className="rounded-xl overflow-hidden shadow-xl">
                <div className="relative">
                  <Image
                    src="/images/afrodite-shkolla.jpg"
                    alt="Aferdita Ferracaku - Founder"
                    width={800}
                    height={800}
                    className="object-cover w-full max-h-[900px] rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={historyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="space-y-6"
            >
              <div className="relative pl-8 border-l-2 border-purple-200">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-afrodite-purple"></div>
                <h3 className="text-xl font-bold text-afrodite-purple mb-3">
                  Eksperiencë
                </h3>
                <p className="text-afrodite-purple">
                  Me mbi 20 vite karrierë në Itali në industrinë e bukurisë,
                  estetikës dhe menaxhimit akademik, Aferdita Ferracaku fitoi
                  ekspertizë që u bë bazë për krijimin e një institucioni unik
                  në Shqipëri.
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-purple-200">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-afrodite-purple"></div>
                <h3 className="text-xl font-bold text-afrodite-purple mb-3">
                  Zhvillim
                </h3>
                <p className="text-afrodite-purple">
                  Pas rikthimit në Shqipëri, ajo themeloi Afrodite Academy, duke
                  sjellë standardet europiane të arsimit profesional dhe duke i
                  përshtatur me nevojat e tregut vendas.
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-purple-200">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-afrodite-purple"></div>
                <h3 className="text-xl font-bold text-afrodite-purple mb-3">
                  Sot
                </h3>
                <p className="text-afrodite-purple">
                  Akademia është rritur në një institucion lider, ku mijëra
                  kursantë kanë ndërtuar karriera të suksesshme brenda dhe
                  jashtë vendit, duke dëshmuar cilësinë dhe ndikimin e saj
                  ndërkombëtar.
                </p>
              </div>

              <div className="mt-8">
                <Link href="/courses">
                  <AnimatedButton
                    size="lg"
                    variant="default"
                    className="rounded-xl px-8 bg-afrodite-lightPurple text-afrodite-creme"
                  >
                    Shiko kurset
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </AnimatedButton>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Horizontal Timeline
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={historyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-white p-8 rounded-xl shadow-sm"
          >
            <h3 className="text-2xl font-bold text-afrodite-purple mb-8 text-center">
              Momentet Kyçe
            </h3>
            <EnhancedTimeline events={timelineEvents} />
          </motion.div> */}
        </div>
      </section>

      {/* Team Section */}
      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-afrodite-white">
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

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-afrodite-creme relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>

        <div ref={valuesRef} className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-afrodite-purple/10 backdrop-blur-sm rounded-full text-afrodite-purple text-sm mb-4 border border-afrodite-purple/20">
              <span>Vlerat tona</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-afrodite-purple mb-4">
              Çfarë <span className="text-afrodite-purple">Përfaqësojmë</span>
            </h2>
            <div className="h-1 w-24 bg-afrodite-purple mx-auto mb-6"></div>
            <p className="text-lg text-afrodite-purple">
              Afrodite Academy ndërton identitetin dhe cilësinë e saj mbi një
              sistem të fortë vlerash, që orientojnë të gjithë aktivitetin tonë
              arsimor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-afrodite-creme p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="bg-afrodite-purple p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-afrodite-lightPurple/50 transition-colors duration-300">
                <Star className="h-8 w-8 text-afrodite-creme group-hover:text-afrodite-purple transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold font-poppins text-afrodite-purple mb-4 group-hover:text-afrodite-purple transition-colors duration-300">
                Cilësi
              </h3>
              <p className="text-afrodite-purple">
                Kurrikulat tona rinovohen rregullisht për të siguruar që
                studentët të jenë gjithmonë një hap përpara, duke përfituar nga
                programet më bashkëkohore dhe standardet më të larta të arsimit
                profesional.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-afrodite-creme p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="bg-afrodite-purple p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-afrodite-lightPurple/50 transition-colors duration-300">
                <Users className="h-8 w-8 text-afrodite-creme group-hover:text-afrodite-purple transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold font-poppins text-afrodite-purple mb-4 group-hover:text-afrodite-purple transition-colors duration-300">
                Komunitet
              </h3>
              <p className="text-afrodite-purple">
                Ne krijojmë një mjedis mbështetës ku studentët jo vetëm mësojnë,
                por edhe marrin pjesë në evente, panaire dhe konkurse, duke
                ndërtuar lidhje të forta që zgjasin përtej kohës së kursit dhe
                që i lidhin me industrinë globale.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-afrodite-creme p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="bg-afrodite-purple p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-afrodite-lightPurple/50 transition-colors duration-300">
                <Clock className="h-8 w-8 text-afrodite-creme group-hover:text-afrodite-purple transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold font-poppins text-afrodite-purple mb-4 group-hover:text-afrodite-purple transition-colors duration-300">
                Inovacion
              </h3>
              <p className="text-afrodite-purple">
                Ne sjellim vazhdimisht risi përmes programeve tona dhe
                bashkëpunimeve të jashtme, duke i dhënë studentëve mundësinë të
                krijojnë rrjete profesionale, të punojnë me partnerë
                ndërkombëtarë dhe të përballen me sfida të reja në kampionate e
                veprimtari profesionale.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-afrodite-creme p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="bg-afrodite-purple p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-afrodite-lightPurple/50 transition-colors duration-300">
                <BookOpen className="h-8 w-8 text-afrodite-creme group-hover:text-afrodite-purple transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold font-poppins text-afrodite-purple mb-4 group-hover:text-afrodite-purple transition-colors duration-300">
                Ekspertizë
              </h3>
              <p className="text-afrodite-purple">
                Instruktorët tanë janë profesionistë me eksperiencë
                ndërkombëtare, të cilët jo vetëm japin njohuri brenda klasës,
                por edhe udhëheqin studentët në gara, demonstrime dhe evente
                profesionale që pasurojnë përvojën e tyre.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section - Redesigned */}
      {/* <section className="py-16 md:py-24 bg-afrodite-white">
        <div className="container mx-auto px-4">
          {/* Header 
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-afrodite-purple/10 backdrop-blur-sm rounded-full text-afrodite-purple text-sm mb-4 border border-afrodite-purple/20">
              <span>Ekipi ynë</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-afrodite-purple mb-4">
              Ekipi Ynë{" "}
              <span className="text-afrodite-purple">Profesional</span>
            </h2>
            <div className="h-1 w-24 bg-afrodite-purple mx-auto mb-6"></div>
            <p className="text-lg text-afrodite-purple">
              Njihuni me ekipin tonë të përkushtuar të profesionistëve që janë
              të pasionuar për të ndarë njohuritë dhe ekspertizën e tyre.
            </p>
          </div>

          {/* Grid of team cards 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group flex flex-col h-full"
              >
                {/* Photo 
                <div className="relative overflow-hidden rounded-t-xl h-[400px] md:h-80">
                  <Image
                    src={
                      member.photo && member.photo.trim() !== ""
                        ? member.photo
                        : "/placeholder.svg"
                    }
                    alt={member.name}
                    fill
                    className="object-cover object-center transition-transform duration-500 md:group-hover:scale-105"
                  />
                </div>

                {/* Card body 
                <div className="bg-afrodite-creme p-6 rounded-b-xl shadow-sm border border-t-0 border-gray-100 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold font-poppins text-afrodite-purple mb-1 line-clamp-3 min-h-[4.5rem]">
                    {member.name}
                  </h3>

                  <p className="text-afrodite-lightPurple mb-1 font-medium line-clamp-2 min-h-[3rem]">
                    {member.role}
                  </p>

                  <div className="flex justify-between items-center text-sm text-afrodite-lightPurple mb-4">
                    <span>{member.experience}</span>
                    <div className="flex items-center text-afrodite-lightPurple">
                      <MapPin className="h-4 w-4 mr-1 text-afrodite-lightPurple" />
                      <span>{member.location}</span>
                    </div>
                  </div>

                  {/* Bio clamped to 2 lines
                  <p
                    className="
              text-afrodite-purple text-sm mb-4
              line-clamp-2
            "
                  >
                    {member.bio}
                  </p>

                  <div className="mt-auto">
                    <button
                      onClick={() => setModalId(member.id)}
                      className="text-afrodite-lightPurple hover:text-purple-800 text-sm font-medium"
                    >
                      Shiko më shumë
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Join our team CTA 
          <div className="text-center mt-12">
            <Link href="/contact">
              <AnimatedButton
                size="lg"
                variant="default"
                className="bg-afrodite-lightPurple text-afrodite-creme"
              >
                Bëhu pjesë e ekipit tonë
                <ChevronRight className="ml-2 h-4 w-4" />
              </AnimatedButton>
            </Link>
          </div>
        </div>

        {/* Modals 
        {team.map((member) =>
          modalId === member.id ? (
            <div
              key={member.id}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6"
            >
              <div className="relative bg-white rounded-xl shadow-xl w-full max-w-md mx-auto overflow-hidden">
                {/* Close */}

      {/* —————— IMAGE (fixed taller height) —————— 
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
                  className="absolute top-4 right-4 text-afrodite-purple hover:text-purple-500 z-10"
                >
                  ✕
                </button>
                {/* —————— BODY —————— 
                <div className="p-6">
                  <h3 className="text-2xl font-bold font-poppins text-afrodite-purple mb-1">
                    {member.name}
                  </h3>
                  <p className="text-afrodite-purple mb-1 font-medium">
                    {member.role}
                  </p>
                  <div className="flex justify-between items-center text-sm text-afrodite-purple mb-4">
                    <span>{member.experience}</span>
                    <div className="flex items-center text-afrodite-purple">
                      <MapPin className="h-4 w-4 mr-1 text-afrodite-purple" />
                      <span>{member.location}</span>
                    </div>
                  </div>
                  <p className="text-afrodite-purple mb-4">{member.bio}</p>
                  {/* <div className="flex items-center text-sm text-afrodite-purple">
                    <Mail className="h-4 w-4 mr-1 text-afrodite-purple" />
                    <span>{member.email}</span>
                  </div>
                </div>
              </div>
            </div>
          ) : null
        )}
      </section> */}

      {/* Partners Section */}
      <section className="py-16 md:py-24 bg-afrodite-white">
        <div ref={partnersRef} className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-afrodite-purple/10 backdrop-blur-sm rounded-full text-afrodite-purple text-sm mb-4 border border-afrodite-purple/20">
              <span>Partnerët tanë</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-afrodite-purple mb-4">
              Partnerët <span className="text-afrodite-purple">Tanë</span>
            </h2>
            <div className="h-1 w-24 bg-afrodite-purple mx-auto mb-6"></div>
            <p className="text-lg text-afrodite-purple">
              Rrjeti ynë i bashkëpunimeve me kompani dhe organizata prestigjioze
              krijon mundësi reale për zhvillimin profesional të studentëve.
            </p>
          </div>

          <div className="bg-afrodite-white p-8 rounded-xl shadow-sm mb-12">
            <PartnerLogosCarousel />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-afrodite-creme p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-afrodite-purple mb-4">
                Partneritete Akademike
              </h3>
              <p className="text-afrodite-purple mb-4">
                Bashkëpunojmë me akademi prestigjioze në Itali dhe Evropë për të
                ofruar programe shkëmbimi dhe trajnime të specializuara.
              </p>
              <Link
                href="/about"
                className="text-afrodite-purple hover:text-purple-700 font-medium inline-flex items-center"
              >
                Mëso më shumë
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-afrodite-creme p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-afrodite-purple mb-4">
                Partneritete Industriale
              </h3>
              <p className="text-afrodite-purple mb-4">
                Kemi ndërtuar marrëdhënie të forta me biznese dhe organizata të
                ndryshme për të siguruar mundësi praktike dhe punësimi për
                studentët tanë.
              </p>
              <Link
                href="/about"
                className="text-afrodite-purple hover:text-purple-700 font-medium inline-flex items-center"
              >
                Mëso më shumë
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-afrodite-creme p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-afrodite-purple mb-4">
                Partneritete Ndërkombëtare
              </h3>
              <p className="text-afrodite-purple mb-4">
                Programet tona janë të mbështetura nga organizata ndërkombëtare,
                duke garantuar njohje të gjerë dhe cilësi të lartë.
              </p>
              <Link
                href="/about"
                className="text-afrodite-purple hover:text-purple-700 font-medium inline-flex items-center"
              >
                Mëso më shumë
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Certifications Section - Completely Redesigned */}
      <section className="py-16 md:py-24 bg-afrodite-creme relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>

        {/* <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
          <Image
            src="/wave-pattern.svg"
            alt="Decorative pattern"
            width={256}
            height={256}
            className="object-contain"
          />
        </div> */}

        {/* <div ref={certificationsRef} className="container mx-auto px-4 relative z-10"> */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-afrodite-purple/10 backdrop-blur-sm rounded-full text-afrodite-purple text-sm mb-4 border border-afrodite-purple/20">
            <span>Çmimet dhe certifikimet</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-afrodite-purple mb-4">
            Çmimet dhe{" "}
            <span className="text-afrodite-purple">Certifikimet Tona</span>
          </h2>
          <div className="h-1 w-24 bg-afrodite-purple mx-auto mb-6"></div>
        </div>

        {/* central line */}

        <div className="container mx-auto px-4 relative z-10">
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-afrodite-purple hidden md:block" />
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
                  className={`md:w-1/2 p-6 text-afrodite-purple ${
                    idx % 2 === 0
                      ? "md:pr-16 text-center md:text-right"
                      : "md:pl-16 text-center md:text-left"
                  }`}
                >
                  <div
                    className={`inline-flex items-center px-3 py-1 rounded-full text-afrodite-creme text-sm mb-3 ${
                      award.color === "purple"
                        ? "bg-afrodite-lightPurple"
                        : "bg-afrodite-lightPurple"
                    }`}
                  >
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{award.year}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{award.title}</h3>
                  <p className="text-afrodite-lightPurple font-medium mb-2">
                    {award.organization}
                  </p>
                  <p className="text-afrodite-lightPurple">
                    {award.description}
                  </p>
                </div>

                {/* image/icon side */}
                <div className="md:w-1/2 flex justify-center p-6">
                  <div
                    className={`w-32 h-32 rounded-full flex items-center justify-center ${
                      award.color === "purple"
                        ? "bg-afrodite-lightPurple"
                        : "bg-afrodite-lightPurple"
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
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-4 border-afrodite-lightPurple rounded-full hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <>
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-afrodite-purple/10 backdrop-blur-sm rounded-full text-afrodite-purple text-sm mb-4 border border-afrodite-purple/20">
                <span>Ambientet tona</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-poppins text-afrodite-purple mb-4">
                Ambientet <span className="text-afrodite-purple">Tona</span>
              </h2>
              <div className="h-1 w-24 bg-afrodite-purple mx-auto mb-6" />
              <p className="text-lg text-afrodite-purple">
                Akademia jonë ofron ambiente moderne dhe të pajisura me
                teknologjinë më të fundit për një përvojë mësimore optimale.
              </p>
            </div>

            {/* Continuous carousel */}
            <div
              className="overflow-x-auto whitespace-nowrap scrollbar-hide mb-12"
              ref={sliderRef}
              onMouseEnter={() => {
                speed.current = 0.5;
                paused.current = false;
              }}
              onMouseLeave={() => {
                speed.current = 1.5;
                paused.current = false;
              }}
              onTouchStart={() => {
                paused.current = true;
              }}
              onTouchMove={() => {
                paused.current = true;
              }}
              onTouchEnd={() => {
                paused.current = false;
              }}
            >
              {loopSlides.map((slide, idx) => {
                // grab the thumbnail for this slide (loopSlides = slides.concat(slides))
                const thumb = thumbs[idx % slides.length];

                return (
                  <div
                    key={idx}
                    className="inline-block shrink-0 rounded-xl overflow-hidden shadow-md relative mx-3 w-[80vw] sm:w-96 md:w-[28rem] lg:w-[32rem]"
                  >
                    {slide.type === "image" ? (
                      <Image
                        src={safeSrc(slide.src)}
                        alt={slide.alt || slide.title}
                        width={600}
                        height={400}
                        className="object-cover w-full h-64 md:h-80 lg:h-96"
                      />
                    ) : (
                      <>
                        {/* use hook thumbnail if available; otherwise fallback image */}
                        {(() => {
                          const rawThumb =
                            thumbs[idx % slides.length] ??
                            slide.thumbnail ??
                            "";
                          const thumbSrc = safeSrc(rawThumb); // never ""
                          return (
                            <Image
                              src={thumbSrc}
                              alt={slide.title}
                              width={600}
                              height={400}
                              className="object-cover w-full h-64 md:h-80 lg:h-96"
                            />
                          );
                        })()}

                        <button
                          className="absolute inset-0 flex items-center justify-center bg-black/50"
                          onClick={() =>
                            setModalVideo({
                              videoSrc: slide.src,
                              titlets: slide.title,
                            })
                          }
                        >
                          <svg
                            className="h-12 w-12 text-afrodite-creme"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </button>
                      </>
                    )}

                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <h3 className="text-xl font-bold text-afrodite-creme">
                        {slide.title}
                      </h3>
                      <p className="text-sm text-afrodite-creme mt-1">
                        {slide.caption}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Virtual Tour Button */}
            {/* <div className="text-center">
              <AnimatedButton className="bg-black hover:bg-black text-afrodite-purple">
                Bëj një tur virtual
                <ChevronRight className="ml-2 h-4 w-4" />
              </AnimatedButton>
            </div> */}
          </div>
        </section>

        {/* Video Modal */}
        {modalVideo && (
          <VideoModal
            isOpen={true}
            title={modalVideo.titlets}
            videoSrc={modalVideo.videoSrc}
            onClose={() => setModalVideo(null)}
          />
        )}

        {/* hide scrollbar */}
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </>

      {/* CTA Section */}
      <section className="bg-afrodite-creme py-16 md:py-24 relative overflow-hidden">
        {/* <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=600&text=Pattern')] bg-cover bg-center opacity-5"></div> */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>{" "}
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
            <div className="inline-flex items-center px-4 py-2 bg-afrodite-purple/10 backdrop-blur-sm rounded-full text-afrodite-purple text-sm mb-4">
              <Sparkles className="h-4 w-4 mr-2 text-afrodite-purple" />
              <span>Bëhu pjesë e suksesit</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-afrodite-purple mb-6">
              Bëhu Pjesë e{" "}
              <span className="text-afrodite-purple">Akademisë Sonë</span>
            </h2>
            <p className="text-lg text-afrodite-lightPurple mb-8">
              Synimi ynë është që çdo student të realizojë potencialin e tij dhe
              të kthehet te Afrodite Academy për zhvillim të vazhdueshëm
              profesional.
            </p>
            <Link href="/register">
              <AnimatedButton
                size="lg"
                variant="default"
                className="rounded-xl px-8 bg-afrodite-lightPurple text-afrodite-creme"
              >
                Regjistrohu Tani
              </AnimatedButton>
            </Link>
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
