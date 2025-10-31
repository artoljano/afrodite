"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import {
  BookOpen,
  Users,
  Clock,
  Award,
  GraduationCap,
  Star,
  Globe,
  ChevronRight,
  Calendar,
  Sparkles,
  MapPin,
} from "lucide-react";

import { AnimatedButton } from "@/components/animated-button";
import VideoModal from "@/components/video-modal";
import { useVideoThumbnail } from "@/components/useVideoThumbnail";
import TestimonialSlider from "@/components/testimonial-slider";
import PartnerLogosCarousel from "@/components/partner-logos-carousel";
import WhatsAppButton from "@/components/whatsapp-button";
import JsonLd from "@/components/seo/JsonLd";

// ✅ dynamic import (avoid duplicate static import)
const AlumniCarousel = dynamic(() => import("@/components/alumni-carousel"), {
  ssr: false,
});

export default function AboutClient() {
  const [modalVideo, setModalVideo] = useState<{
    videoSrc: string;
    titlets: string;
  } | null>(null);

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [missionRef, missionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [founderRef, founderInView] = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px -35% 0px",
  });
  const [valuesRef, valuesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [partnersRef] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [historyRef, historyInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Embla (kept in case you add back a slider; harmless otherwise)
  const autoplay = useMemo(
    () =>
      Autoplay({
        delay: 1500,
        stopOnInteraction: true,
        stopOnMouseEnter: false,
      }),
    []
  );
  useEmblaCarousel({ loop: true, skipSnaps: false }, [autoplay]);

  const sliderRef = useRef<HTMLDivElement>(null);
  const paused = useRef(false);
  const speed = useRef(1.5);

  const safeSrc = (value?: string | null, fallback = "/placeholder.svg") =>
    value && value.trim() ? value : fallback;

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
      src: "/facilities/ambient-1.webp",
      alt: "Klasë Mësimore",
      title: "Klasa Mësimore",
      caption: "Klasa moderne të pajisura me teknologjinë më të fundit",
    },
    {
      type: "image",
      src: "/facilities/ambient-2.webp",
      alt: "Laborator Estetike",
      title: "Laborator Estetike",
      caption: "Laborator i pajisur me aparatura moderne estetike",
    },
    {
      type: "image",
      src: "/facilities/ambient-3.webp",
      alt: "Klasë Mësimore",
      title: "Klasa Mësimore",
      caption: "Klasa moderne të pajisura me teknologjinë më të fundit",
    },
    {
      type: "image",
      src: "/facilities/ambient-4.webp",
      alt: "Klasë Mësimore",
      title: "Klasa Mësimore",
      caption: "Klasa moderne të pajisura me teknologjinë më të fundit",
    },
  ];

  const thumbs = slides.map((s) =>
    s.type === "video" ? useVideoThumbnail(s.src, 1) : null
  );
  const loopSlides = [...slides, ...slides];

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    let rafId: number;

    const step = () => {
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
      {/* JSON-LD: WebPage + Organization + Breadcrumbs */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Rreth Afrodite Academy",
          url: "https://afroditeacademy.al/about",
          description:
            "Afrodite Academy — misioni, vlerat, partneritetet dhe ambientet moderne mësimore.",
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                item: { "@id": "https://afroditeacademy.al/", name: "Kreu" },
              },
              {
                "@type": "ListItem",
                position: 2,
                item: {
                  "@id": "https://afroditeacademy.al/about",
                  name: "Rreth Nesh",
                },
              },
            ],
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Afrodite Academy",
          url: "https://afroditeacademy.al",
          logo: "https://afroditeacademy.al/images/afrodite-logo.webp",
          sameAs: [
            "https://www.facebook.com/share/1CXyPNAHqP/?mibextid=wwXIfr",
            "https://www.instagram.com/afrodite.academy_shkoder?igsh=ZGUyZHJnc2ZteHJ0",
            "https://www.tiktok.com/@afrodite_academy?_t=ZM-90vhH2Wr7Gu&_r=1",
          ],
          contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: "+355692043535",
              contactType: "customer service",
              areaServed: "AL",
              availableLanguage: ["sq", "en", "it"],
            },
          ],
        }}
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-afrodite-creme">
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
            ref={heroRef}
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
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
              dhe Australi, apo hapjen e bizneseve në Itali dhe në BE.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/courses">
                <AnimatedButton
                  size="lg"
                  variant="default"
                  className="rounded-xl px-8 bg-afrodite-lightPurple text-afrodite-creme"
                >
                  Shiko programet
                </AnimatedButton>
              </Link>

              <Link href="/register">
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
            {/* Left Column - Image + text block */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="space-y-6"
            >
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/afrodite-about-history.webp"
                  alt="Afrodite Academy"
                  width={800}
                  height={600}
                  className="object-cover w-full h-64 md:h-72 lg:h-80 rounded-xl"
                  style={{ objectPosition: "center 20%" }}
                />
              </div>

              <div className="bg-afrodite-lightPurple p-6 rounded-lg border-l-4 border-afrodite-purple">
                <p className="text-afrodite-creme italic">
                  "Akademia Afrodite përgatit profesionistë të rinj në fusha të
                  ndryshme, duke ofruar metoda mësimore të avancuara, të
                  mbështetura në një traditë të konsoliduar dhe një vizion të
                  qartë për të ardhmen."
                </p>
              </div>

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

            {/* Right Column - Mission/Vision/Quality */}
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
                  projekteve reale, i pajisim kursantët me aftësi konkrete për
                  tregun e punës dhe portfolio profesionale.
                </p>
              </div>

              <div className="bg-afrodite-creme p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-afrodite-purple mb-4 flex items-center">
                  <BookOpen className="h-5 w-5 text-afrodite-purple mr-2" />
                  Vizioni ynë
                </h3>
                <p className="text-afrodite-purple">
                  Të ngremë standardin e edukimit profesional në Shqipëri dhe
                  rajon, duke promovuar etikë, cilësi dhe inovacion të
                  vazhdueshëm. Formojmë profesionistë që mësojnë gjatë gjithë
                  jetës dhe kontribuojnë në zhvillimin e industrisë.
                </p>
              </div>

              <div className="bg-afrodite-creme p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-afrodite-purple mb-4 flex items-center">
                  <Award className="h-5 w-5 text-afrodite-purple mr-2" />
                  Njohja institucionale & organizimi
                </h3>
                <p className="text-afrodite-purple">
                  Cilësia garantohet nga Bordi i Sigurimit të Cilësisë dhe
                  Këshilli Akademik me rishikime periodike të kurrikulave.
                  Kursantët marrin këshillim akademik dhe karriere nga
                  regjistrimi deri në punësim.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder message */}
      <section className="py-16 md:py-24 bg-afrodite-creme relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>

        <div ref={founderRef} className="container mx-auto px-4">
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
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={founderInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative"
            >
              <div className="rounded-lg overflow-hidden shadow-xl">
                <div className="relative">
                  <Image
                    src="/images/aferdita-1.webp"
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
                animate={founderInView ? { opacity: 1, scale: 1 } : {}}
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

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={founderInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-xl bg-afrodite-creme backdrop-blur-sm border border-afrodite-purple shadow-md p-6 md:p-8">
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
                    karrierë të qëndrueshme.
                  </p>
                  <p>
                    Si një profesioniste e formuar në një shkollë prestigjioze
                    italiane dhe me mbi 20 vite eksperiencë, e di nga afër se
                    çfarë kërkon tregu dhe si përgatiten profesionistë që
                    shkëlqejnë.
                  </p>
                  <p>
                    Sot jam krenare që mijëra kursantë tanë punojnë si
                    profesionistë të suksesshëm në BE, SHBA, Kanada dhe
                    Australi. Çdo histori suksesi e tyre është dëshmia më e
                    bukur e punës sonë.
                  </p>
                  <p>
                    Në Afrodite Academy, fitoni vetëbesim, përvojë reale dhe një
                    rrjet mundësish. Ky është misioni ynë: profesionistë që
                    shkëlqejnë kudo.
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <Link href="/courses">
                    <AnimatedButton
                      size="lg"
                      variant="default"
                      className="rounded-xl px-8 bg-afrodite-lightPurple text-afrodite-creme"
                    >
                      Shiko programet
                    </AnimatedButton>
                  </Link>

                  <Link href="/register">
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
        </div>
      </section>

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

      {/* Values */}
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
              Afrodite Academy ndërton identitetin mbi vlera që orientojnë
              gjithë aktivitetin tonë arsimor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <Star className="h-8 w-8 text-afrodite-creme group-hover:text-afrodite-purple transition-colors duration-300" />
                ),
                title: "Cilësi",
                text: "Kurrikula të përditësuara rregullisht, standarde të larta dhe programe bashkëkohore.",
              },
              {
                icon: (
                  <Users className="h-8 w-8 text-afrodite-creme group-hover:text-afrodite-purple transition-colors duration-300" />
                ),
                title: "Komunitet",
                text: "Evente, panaire, konkurse; lidhje të forta me industrinë që zgjasin përtej kursit.",
              },
              {
                icon: (
                  <Clock className="h-8 w-8 text-afrodite-creme group-hover:text-afrodite-purple transition-colors duration-300" />
                ),
                title: "Inovacion",
                text: "Risi të vazhdueshme dhe bashkëpunime që hapin rrjete dhe sfida reale profesionale.",
              },
              {
                icon: (
                  <BookOpen className="h-8 w-8 text-afrodite-creme group-hover:text-afrodite-purple transition-colors duration-300" />
                ),
                title: "Ekspertizë",
                text: "Instruktorë me eksperiencë ndërkombëtare dhe udhëheqje në gara/demonstrime profesionale.",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
                className="bg-afrodite-creme p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="bg-afrodite-purple p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-afrodite-lightPurple/50 transition-colors duration-300">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold font-poppins text-afrodite-purple mb-4 group-hover:text-afrodite-purple transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-afrodite-purple">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
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
              Rrjeti ynë i bashkëpunimeve krijon mundësi reale për zhvillimin
              profesional të studentëve.
            </p>
          </div>

          <div className="bg-afrodite-white p-8 rounded-xl shadow-sm mb-12">
            <PartnerLogosCarousel />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Partneritete Akademike",
                text: "Bashkëpunime me akademi në Itali dhe Evropë për shkëmbime dhe trajnime.",
              },
              {
                title: "Partneritete Industriale",
                text: "Marrëdhënie të forta me biznese për praktika dhe punësim.",
              },
              {
                title: "Partneritete Ndërkombëtare",
                text: "Mbështetje nga organizata ndërkombëtare për cilësi dhe njohje të gjerë.",
              },
            ].map((box) => (
              <div
                key={box.title}
                className="bg-afrodite-creme p-6 rounded-xl shadow-sm"
              >
                <h3 className="text-xl font-bold text-afrodite-purple mb-4">
                  {box.title}
                </h3>
                <p className="text-afrodite-purple mb-4">{box.text}</p>
                <Link
                  href="/about"
                  className="text-afrodite-purple hover:text-purple-700 font-medium inline-flex items-center"
                >
                  Mëso më shumë
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities (marquee-style) */}
      <>
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-afrodite-purple/10 backdrop-blur-sm rounded-full text-afrodite-purple text-sm mb-4 border border-afrodite-purple/20">
                <span>Ambientet tona</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-poppins text-afrodite-purple mb-4">
                Ambientet <span className="text-afrodite-purple">Tona</span>
              </h2>
              <div className="h-1 w-24 bg-afrodite-purple mx-auto mb-6" />
              <p className="text-lg text-afrodite-purple">
                Ambiente moderne dhe të pajisura me teknologjinë më të fundit
                për një përvojë mësimore optimale.
              </p>
            </div>

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
                        {(() => {
                          const rawThumb = thumb ?? slide.thumbnail ?? "";
                          const thumbSrc = safeSrc(rawThumb);
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
          </div>
        </section>

        {modalVideo && (
          <VideoModal
            isOpen={true}
            title={modalVideo.titlets}
            videoSrc={modalVideo.videoSrc}
            onClose={() => setModalVideo(null)}
          />
        )}

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

      {/* CTA */}
      <section className="bg-afrodite-creme py-16 md:py-24 relative overflow-hidden">
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
            <div className="inline-flex items-center px-4 py-2 bg-afrodite-purple/10 backdrop-blur-sm rounded-full text-afrodite-purple text-sm mb-4">
              <Sparkles className="h-4 w-4 mr-2 text-afrodite-purple" />
              <span>Bëhu pjesë e suksesit</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-afrodite-purple mb-6">
              Bëhu Pjesë e{" "}
              <span className="text-afrodite-purple">Akademisë Sonë</span>
            </h2>
            <p className="text-lg text-afrodite-lightPurple mb-8">
              Synimi ynë është që çdo student të realizojë potencialin dhe të
              kthehet te Afrodite Academy për zhvillim të vazhdueshëm.
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

      <WhatsAppButton />
    </div>
  );
}
