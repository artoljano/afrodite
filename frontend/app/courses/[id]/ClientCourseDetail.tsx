"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import {
  Clock,
  Calendar,
  Award,
  CheckCircle,
  GraduationCap,
  Play,
  ChevronRight,
  ShoppingBag,
  Droplet,
  HeartHandshake,
  Globe,
  Heart,
  Users,
  User,
  Sparkles,
  Feather,
  PenTool,
  Scissors,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import VideoBackground from "@/components/video-background";
import VideoModal from "@/components/video-modal";
import { AnimatedButton } from "@/components/animated-button";
import JsonLd from "@/components/seo/JsonLd";

import type { Course } from "@/data/courses";
import { courses } from "@/data/courses";
import {
  courseToJsonLd,
  courseBreadcrumbsJsonLd,
} from "@/lib/seo/course-jsonld";
import WhatsAppButton from "@/components/whatsapp-button";

/* ───────────────── Animation Variants ───────────────── */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

/* ───────────────── Image Lightbox (inline component) ───────────────── */
function ImageLightbox({
  sources,
  startIndex = 0,
  onClose,
}: {
  sources: { src: string; alt?: string }[];
  startIndex?: number;
  onClose: () => void;
}) {
  const [idx, setIdx] = useState(startIndex);

  // keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIdx((i) => (i + 1) % sources.length);
      if (e.key === "ArrowLeft")
        setIdx((i) => (i - 1 + sources.length) % sources.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [sources.length, onClose]);

  const curr = sources[idx];

  return (
    <div
      className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative max-w-6xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/80 hover:text-white text-sm"
          aria-label="Mbyll"
        >
          Mbyll
        </button>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={curr.src}
          alt={curr.alt ?? ""}
          className="max-h-[80vh] w-auto mx-auto rounded-xl shadow-2xl"
        />

        {sources.length > 1 && (
          <>
            <button
              className="absolute top-1/2 -left-4 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full w-10 h-10 grid place-items-center"
              onClick={() =>
                setIdx((i) => (i - 1 + sources.length) % sources.length)
              }
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              className="absolute top-1/2 -right-4 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full w-10 h-10 grid place-items-center"
              onClick={() => setIdx((i) => (i + 1) % sources.length)}
              aria-label="Next"
            >
              ›
            </button>
          </>
        )}

        {sources.length > 1 && (
          <div className="mt-3 text-center text-white/80 text-sm">
            <span className="opacity-90">
              {idx + 1} / {sources.length}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

/* ───────────────── Main Component ───────────────── */
interface Props {
  course: Course;
}

export default function ClientCourseDetail({ course }: Props) {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  const [videoModal, setVideoModal] = useState<{
    src: string;
    alt?: string;
  } | null>(null);

  // image lightbox state
  const [lightbox, setLightbox] = useState<{
    sources: { src: string; alt?: string }[];
    startIndex: number;
  } | null>(null);

  const coursesRef = useRef<HTMLDivElement>(null);

  const categories = [
    {
      id: "estetike",
      name: "Estetikë",
      icon: <Sparkles className="h-4 w-4" />,
    },
    { id: "parukeri", name: "Parukeri", icon: <Users className="h-4 w-4" /> },
    {
      id: "parukeri-estetike",
      name: "Parukeri–Estetikë",
      icon: <Sparkles className="h-4 w-4" />,
    },
    {
      id: "trajtimet-e-fytyres",
      name: "Trajtimet e Fytyrës",
      icon: <User className="h-4 w-4" />,
    },
    { id: "berber", name: "Berber", icon: <Scissors className="h-4 w-4" /> },
    {
      id: "zgjatimi-i-qerpikeve",
      name: "Zgjatimi i Qerpikëve",
      icon: <CheckCircle className="h-4 w-4" />,
    },
    {
      id: "kujdestar-per-te-moshuar-dhe-femije",
      name: "Kujdestar për të Moshuar dhe Fëmijë",
      icon: <HeartHandshake className="h-4 w-4" />,
    },
    { id: "makeup", name: "Makeup", icon: <Feather className="h-4 w-4" /> },
    {
      id: "makeup-permanent-pmu",
      name: "Makeup Permanent (PMU)",
      icon: <Sparkles className="h-4 w-4" />,
    },
    { id: "masazhet", name: "Masazhe", icon: <Heart className="h-4 w-4" /> },
    {
      id: "manikyr-pedikyr-nail-art",
      name: "Manikyr & Pedikyr (Nail Art)",
      icon: <Award className="h-4 w-4" />,
    },
    {
      id: "operatoret-turistike",
      name: "Operatorët Turistikë",
      icon: <Globe className="h-4 w-4" />,
    },
    {
      id: "pajisjet-e-estetikes",
      name: "Pajisjet e Estetikës",
      icon: <Sparkles className="h-4 w-4" />,
    },
    {
      id: "sherbim-pastrimi-ne-njesi-banimi-dhe-institucione",
      name: "Shërbim Pastrimi në Njësi Banimi dhe Institucione",
      icon: <Droplet className="h-4 w-4" />,
    },
    { id: "recepsion", name: "Recepsion", icon: <User className="h-4 w-4" /> },
    {
      id: "tattoo-art",
      name: "Tattoo Art",
      icon: <PenTool className="h-4 w-4" />,
    },
    {
      id: "fashion-design",
      name: "Fashion Design",
      icon: <ShoppingBag className="h-4 w-4" />,
    },
    {
      id: "terapia-hixhama",
      name: "Terapia Hixhama",
      icon: <Heart className="h-4 w-4" />,
    },
  ];

  const relatedCourses = courses
    .filter((c) => c.id !== course.id && c.category === course.category)
    .slice(0, 3);

  // image list from course.media
  const courseImages: { src: string; alt?: string }[] = (course.media ?? [])
    .filter((m) => m.type === "image")
    .map((m) => ({ src: m.src, alt: m.alt }));

  /* ───────────────── Course + Breadcrumb JSON-LD ───────────────── */
  const courseLD = useMemo(() => courseToJsonLd(course), [course]);
  const crumbsLD = useMemo(() => courseBreadcrumbsJsonLd(course), [course]);

  return (
    <div className="flex flex-col w-full">
      {/* Inject JSON-LD */}
      <JsonLd data={courseLD} />
      <JsonLd data={crumbsLD} />

      {/* ── Hero Section with Video Background ── */}
      <VideoBackground
        videoSrc={course.videoSrc || "/placeholder-video.mp4"}
        overlayOpacity={0.6}
        className="min-h-[60vh] md:h-[75vh] py-20 md:py-32 bg-afrodite-creme"
      >
        <motion.div
          style={{ opacity, scale }}
          className="container mx-auto px-4 relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-poppins text-afrodite-creme mb-6">
              {course.title}
            </h1>
            <div className="h-1 w-24 bg-afrodite-purple mx-auto mb-8" />
            <p className="text-lg text-afrodite-creme mb-8">
              {course.description}
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center text-afrodite-creme">
                <Clock className="h-5 w-5 mr-2 text-afrodite-purple" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center text-afrodite-creme">
                <Award className="h-5 w-5 mr-2 text-afrodite-purple" />
                <span>{course.level}</span>
              </div>
            </div>
            <Link href={`/register?courseId=${course.id}`} passHref>
              <AnimatedButton
                size="lg"
                variant="default"
                className="rounded-xl px-8 bg-afrodite-lightPurple text-afrodite-creme"
              >
                Regjistrohu Tani
              </AnimatedButton>
            </Link>
          </motion.div>
        </motion.div>
      </VideoBackground>

      {/* ── Course Overview Section ── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div
                className="rounded-xl overflow-hidden shadow-xl cursor-zoom-in group"
                onClick={() => {
                  const idxInMedia = courseImages.findIndex(
                    (s) => s.src === (course.image || "")
                  );
                  if (idxInMedia >= 0) {
                    setLightbox({
                      sources: courseImages,
                      startIndex: idxInMedia,
                    });
                  } else {
                    setLightbox({
                      sources: [
                        {
                          src: course.image || "/placeholder.svg",
                          alt: course.title,
                        },
                        ...courseImages,
                      ],
                      startIndex: 0,
                    });
                  }
                }}
                aria-label="Zmadho imazhin e kursit"
              >
                <Image
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  width={800}
                  height={600}
                  className="object-cover w-full  h-[700px] transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl font-bold font-poppins text-afrodite-purple mb-4">
                  Rreth Kursit
                </h2>
                <div className="h-1 w-16 bg-afrodite-purple mb-6" />
                <p className="text-afrodite-lightPurple">
                  {course.longDescription}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center p-4 bg-afrodite-creme rounded-lg">
                  <Clock className="h-10 w-10 text-afrodite-purple mr-4" />
                  <div>
                    <h3 className="font-bold text-afrodite-purple">
                      Kohëzgjatja
                    </h3>
                    <p className="text-afrodite-lightPurple">
                      {course.duration}
                    </p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-afrodite-creme rounded-lg">
                  <Calendar className="h-10 w-10 text-afrodite-purple mr-4" />
                  <div>
                    <h3 className="font-bold text-afrodite-purple">Orari</h3>
                    <p className="text-afrodite-lightPurple">
                      {course.schedule}
                    </p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-afrodite-creme rounded-lg">
                  <Award className="h-10 w-10 text-afrodite-purple mr-4" />
                  <div>
                    <h3 className="font-bold text-afrodite-purple">Niveli</h3>
                    <p className="text-afrodite-lightPurple">{course.level}</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-afrodite-creme rounded-lg">
                  <GraduationCap className="h-10 w-10 text-afrodite-purple mr-4" />
                  <div>
                    <h3 className="font-bold text-afrodite-purple">
                      Certifikim
                    </h3>
                    <p className="text-afrodite-lightPurple">
                      Certifikatë Ndërkombëtare
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link href={`/register?courseId=${course.id}`} passHref>
                  <AnimatedButton
                    size="lg"
                    variant="default"
                    className="rounded-xl px-8 bg-afrodite-lightPurple text-afrodite-creme"
                  >
                    Regjistrohu Tani
                  </AnimatedButton>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Content Tabs ── */}
      <section className="py-16 md:py-24 bg-afrodite-creme relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>

        <div className="container mx-auto px-4">
          <Tabs defaultValue="curriculum" className="w-full">
            <div className="overflow-x-auto scrollbar-hide pt-1">
              <TabsList className="inline-flex min-w-max gap-4 md:grid md:grid-cols-3 mb-8">
                <TabsTrigger value="curriculum">Kurrikula</TabsTrigger>
                <TabsTrigger value="benefits">Përfitimet</TabsTrigger>
                <TabsTrigger value="media">Media</TabsTrigger>
              </TabsList>
            </div>

            {/* ── Curriculum ── */}
            <TabsContent
              value="curriculum"
              className="bg-afrodite-white p-6 rounded-xl shadow-md"
            >
              <h3 className="text-2xl font-bold font-poppins text-afrodite-purple mb-6">
                Çfarë do të mësoni
              </h3>
              <Accordion type="single" collapsible className="w-full">
                {course.curriculum?.map((mod, i) => (
                  <AccordionItem key={i} value={`mod-${i}`}>
                    <AccordionTrigger className="text-lg font-medium text-afrodite-purple">
                      {mod.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="pl-6 space-y-2">
                        {mod.lessons.map((les, j) => (
                          <motion.li
                            key={j}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: j * 0.1 }}
                            className="flex items-start"
                          >
                            <CheckCircle className="h-5 w-5 text-afrodite-purple mr-2 mt-0.5" />
                            <span className="text-afrodite-lightPurple">
                              {les}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>

            {/* ── Benefits & Materials ── */}
            <TabsContent
              value="benefits"
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-afrodite-purple">
                    Përfitimet e Kursit
                  </h3>
                  <ul className="space-y-4">
                    {course.benefits?.map((b, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start"
                      >
                        <CheckCircle className="h-6 w-6 text-afrodite-purple mr-3 mt-0.5" />
                        <span className="text-afrodite-lightPurple">{b}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-afrodite-purple">
                    Materialet e Përfshira
                  </h3>
                  <ul className="space-y-4">
                    {course.materials?.map((m, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start"
                      >
                        <CheckCircle className="h-6 w-6 text-afrodite-purple mr-3 mt-0.5" />
                        <span className=" text-afrodite-lightPurple">{m}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>

            {/* ── Media ── */}
            <TabsContent
              value="media"
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <h3 className="text-2xl font-bold mb-6">Media</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {course.media?.map((item, i) =>
                  item.type === "image" ? (
                    <motion.button
                      key={i}
                      type="button"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="overflow-hidden rounded-lg shadow-lg cursor-zoom-in text-left"
                      onClick={() => {
                        const idx = courseImages.findIndex(
                          (s) => s.src === item.src
                        );
                        setLightbox({
                          sources: courseImages.length
                            ? courseImages
                            : [
                                {
                                  src: course.image || "/placeholder.svg",
                                  alt: course.title,
                                },
                              ],
                          startIndex: idx >= 0 ? idx : 0,
                        });
                      }}
                      aria-label={item.alt ?? `Hap imazhin ${i + 1}`}
                    >
                      <Image
                        src={item.src}
                        alt={item.alt || `image-${i}`}
                        width={400}
                        height={300}
                        className="object-cover w-full h-60 transition-transform duration-300 hover:scale-[1.03]"
                      />
                    </motion.button>
                  ) : (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="relative rounded-lg shadow-lg cursor-pointer overflow-hidden"
                      onClick={() =>
                        setVideoModal({ src: item.src, alt: item.alt })
                      }
                    >
                      <video
                        src={item.src}
                        muted
                        loop
                        playsInline
                        className="object-cover w-full h-60"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                        <Play className="h-12 w-12 text-afrodite-creme" />
                      </div>
                    </motion.div>
                  )
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* ── Modals ── */}
      {videoModal && (
        <VideoModal
          isOpen={true}
          onClose={() => setVideoModal(null)}
          videoSrc={videoModal.src}
          title={videoModal.alt ?? ""}
        />
      )}

      {lightbox && (
        <ImageLightbox
          sources={lightbox.sources}
          startIndex={lightbox.startIndex}
          onClose={() => setLightbox(null)}
        />
      )}

      {/* ── CTA Section ── */}
      <section className="py-16 bg-afrodite-creme relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
          <Image
            src="/wave-pattern.svg"
            alt="Pattern"
            width={256}
            height={256}
            className="object-contain"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-afrodite-purple mb-6">
              Gati për të Filluar Karrierën Tuaj të Re?
            </h2>
            <p className="text-lg text-afrodite-lightPurple mb-8">
              Regjistrohuni sot në kursin tonë profesional dhe bëhuni pjesë e
              komunitetit tonë të suksesshëm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/register?courseId=${course.id}`} passHref>
                <AnimatedButton
                  size="lg"
                  variant="default"
                  className="rounded-xl px-8 bg-afrodite-lightPurple text-afrodite-creme"
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
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-64 h-64 opacity-10">
          <Image
            src="/wave-pattern.svg"
            alt="Pattern"
            width={256}
            height={256}
            className="object-contain"
          />
        </div>
      </section>

      {/* ── Related Courses Section ── */}
      {relatedCourses.length > 0 && (
        <section className="py-16 md:py-24 bg-afrodite-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-afrodite-creme to-transparent"></div>

          <div className="container mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {relatedCourses.map((rc) => (
                <motion.div
                  key={rc.id}
                  variants={itemVariants}
                  className="bg-afrodite-creme rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 relative flex flex-col h-full"
                >
                  {rc.featured && (
                    <div className="absolute top-4 left-4 z-10 bg-amber-500 text-afrodite-purple text-xs font-bold px-3 py-1 rounded-full">
                      Kurs i Rekomanduar
                    </div>
                  )}

                  <div className="relative h-[14rem] overflow-hidden">
                    <Image
                      src={rc.image || "/placeholder.svg"}
                      alt={rc.title}
                      width={400}
                      height={400}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-500 cursor-zoom-in"
                      style={
                        rc.noCustomCrop
                          ? undefined
                          : { objectPosition: "center 30%" }
                      }
                      onClick={() =>
                        setLightbox({
                          sources: [
                            {
                              src: rc.image || "/placeholder.svg",
                              alt: rc.title,
                            },
                          ],
                          startIndex: 0,
                        })
                      }
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                    <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center">
                      <div className="flex items-center space-x-2 text-afrodite-creme text-sm">
                        <Clock className="h-4 w-4 text-afrodite-creme" />
                        <span>{rc.duration}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-4">
                      <div className="flex items-center mb-2 flex-wrap gap-2">
                        <span className="text-xs font-medium bg-afrodite-purple text-afrodite-creme px-3 py-1 rounded-full">
                          {
                            [
                              { id: "estetike", name: "Estetikë" },
                              { id: "parukeri", name: "Parukeri" },
                              {
                                id: "parukeri-estetike",
                                name: "Parukeri–Estetikë",
                              },
                              {
                                id: "trajtimet-e-fytyres",
                                name: "Trajtimet e Fytyrës",
                              },
                              { id: "berber", name: "Berber" },
                              {
                                id: "zgjatimi-i-qerpikeve",
                                name: "Zgjatimi i Qerpikëve",
                              },
                              {
                                id: "kujdestar-per-te-moshuar-dhe-femije",
                                name: "Kujdestar për të Moshuar dhe Fëmijë",
                              },
                              { id: "makeup", name: "Makeup" },
                              {
                                id: "makeup-permanent-pmu",
                                name: "Makeup Permanent (PMU)",
                              },
                              { id: "masazhet", name: "Masazhe" },
                              {
                                id: "manikyr-pedikyr-nail-art",
                                name: "Manikyr & Pedikyr (Nail Art)",
                              },
                              {
                                id: "operatoret-turistike",
                                name: "Operatorët Turistikë",
                              },
                              {
                                id: "pajisjet-e-estetikes",
                                name: "Pajisjet e Estetikës",
                              },
                              {
                                id: "sherbim-pastrimi-ne-njesi-banimi-dhe-institucione",
                                name: "Shërbim Pastrimi...",
                              },
                              { id: "recepsion", name: "Recepsion" },
                              { id: "tattoo-art", name: "Tattoo Art" },
                              { id: "fashion-design", name: "Fashion Design" },
                              {
                                id: "terapia-hixhama",
                                name: "Terapia Hixhama",
                              },
                            ].find((c) => c.id === rc.category)?.name
                          }
                        </span>
                        <span className="text-xs font-medium bg-afrodite-purple text-afrodite-creme px-3 py-1 rounded-full">
                          {rc.level}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold font-poppins text-afrodite-purple mb-3 line-clamp-2">
                        {rc.title}
                      </h3>
                      <p className="text-afrodite-lightPurple line-clamp-3 mb-4">
                        {rc.description}
                      </p>
                    </div>

                    <div className="mt-auto pt-4 border-t border-afrodite-purple">
                      <div className="flex items-center text-sm text-afrodite-lightPurple mb-4">
                        <Calendar className="h-4 w-4 mr-1 text-afrodite-purple" />
                        <span>{rc.schedule}</span>
                      </div>

                      {rc.category === "UET Italia" && rc.link ? (
                        <a
                          href={rc.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Hap faqen e kursit UET: ${rc.title}`}
                        >
                          <AnimatedButton
                            size="lg"
                            variant="default"
                            className="rounded-xl px-8 bg-afrodite-lightPurple text-afrodite-creme"
                          >
                            Mëso më shumë
                            <ChevronRight className="ml-2 h-4 w-4 transition-transform hover:translate-x-1" />
                          </AnimatedButton>
                        </a>
                      ) : (
                        <Link href={`/courses/${rc.id}`}>
                          <AnimatedButton
                            size="lg"
                            variant="default"
                            className="rounded-xl px-8 bg-afrodite-lightPurple text-afrodite-creme"
                          >
                            Mëso më shumë
                            <ChevronRight className="ml-2 h-4 w-4 transition-transform hover:translate-x-1" />
                          </AnimatedButton>
                        </Link>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      <WhatsAppButton />
    </div>
  );
}
