// File: /app/courses/[id]/ClientCourseDetail.tsx
"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import {
  Clock,
  Calendar,
  Award,
  CheckCircle,
  GraduationCap,
  ArrowRight,
  Play,
  ChevronRight,
  ShoppingBag,
  Droplet,
  HeartHandshake,
  Globe,
  Heart,
  BookOpen,
  Users,
  User,
  Sparkles,
  Feather,
  PenTool,
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
import RequestInfoButton from "@/components/request-info-button";
import { AnimatedButton } from "@/components/animated-button";

import type { Course } from "@/data/courses";
import { courses } from "@/data/courses";

interface Props {
  course: Course;
}

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

export default function ClientCourseDetail({ course }: Props) {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // we'll hold `null` or `{ src, alt }`
  const [videoModal, setVideoModal] = useState<{
    src: string;
    alt?: string;
  } | null>(null);

  const coursesRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: "makeup", name: "Makeup", icon: <Feather className="h-4 w-4" /> },
    {
      id: "nails",
      name: "Manikyr & Pedikyr",
      icon: <Award className="h-4 w-4" />,
    },
    {
      id: "esthetics",
      name: "Estetikë",
      icon: <Sparkles className="h-4 w-4" />,
    },
    {
      id: "facials",
      name: "Trajtimet e Fytyrës",
      icon: <User className="h-4 w-4" />,
    },
    // { id: "brows", name: "Vetulla", icon: <Eye className="h-4 w-4" /> },
    {
      id: "lashes",
      name: "Zgjatimi i Qerpikëve",
      icon: <CheckCircle className="h-4 w-4" />,
    },
    { id: "hair", name: "Parukeri", icon: <Users className="h-4 w-4" /> },
    // { id: "barber", name: "Berber", icon: <Scissors className="h-4 w-4" /> },
    { id: "massage", name: "Masazh", icon: <BookOpen className="h-4 w-4" /> },
    {
      id: "therapy",
      name: "Terapitë Estetike",
      icon: <Heart className="h-4 w-4" />,
    },
    // {
    //   id: "reception",
    //   name: "Recepsion",
    //   icon: <Headphones className="h-4 w-4" />,
    // },
    // {
    //   id: "tour-guide",
    //   name: "Udhërrëfyes Turistik",
    //   icon: <MapPin className="h-4 w-4" />,
    // },
    {
      id: "tourism",
      name: "Shërbime Turistike",
      icon: <Globe className="h-4 w-4" />,
    },
    // {
    //   id: "travel-agent",
    //   name: "Agjent Udhëtimesh",
    //   icon: <Briefcase className="h-4 w-4" />,
    // },
    // {
    //   id: "craft",
    //   name: "Veshje Artizanale",
    //   icon: <Hammer className="h-4 w-4" />,
    // },
    // {
    //   id: "industrial",
    //   name: "Modeliste Industriale",
    //   icon: <ShoppingBag className="h-4 w-4" />,
    // },
    {
      id: "fashion",
      name: "Fashion Design",
      icon: <ShoppingBag className="h-4 w-4" />,
    },
    {
      id: "cleaning",
      name: "Pastrim Profesional",
      icon: <Droplet className="h-4 w-4" />,
    },
    {
      id: "caregiver",
      name: "Kujdestar",
      icon: <HeartHandshake className="h-4 w-4" />,
    },

    { id: "tattoo", name: "Tattoo Art", icon: <PenTool className="h-4 w-4" /> },
  ];

  // inside ClientCourseDetail, before the JSX return
  const relatedCourses = courses
    .filter((c) => c.id !== course.id && c.category === course.category)
    .slice(0, 3);

  return (
    <div className="flex flex-col w-full">
      {/* ── Hero Section with Video Background ── */}
      <VideoBackground
        videoSrc={course.videoSrc || "/placeholder-video.mp4"}
        overlayOpacity={0.85}
        className="min-h-[60vh] md:h-[75vh] py-20 md:py-32 bg-gradient-to-r from-black to-purple-900"
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
            <h1 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-6">
              {course.title}
            </h1>
            <div className="h-1 w-24 bg-purple-500 mx-auto mb-8" />
            <p className="text-lg text-navy-100 mb-8">{course.description}</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center text-white">
                <Clock className="h-5 w-5 mr-2 text-purple-500" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center text-white">
                <Award className="h-5 w-5 mr-2 text-purple-500" />
                <span>{course.level}</span>
              </div>
              <div className="flex items-center text-white">
                <Calendar className="h-5 w-5 mr-2 text-purple-500" />
                <span>Fillon: {course.startDate}</span>
              </div>
            </div>
            <Link href={`/register?courseId=${course.id}`} passHref>
              <AnimatedButton size="lg" variant="secondary">
                REGJISTROHU TANI
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
              {/* {course.videoSrc ? (
                <>
                  <div
                    onClick={() => setIsModalOpen(true)}
                    className="group rounded-xl overflow-hidden shadow-xl cursor-pointer relative"
                  >
                    <video
                      src={course.image || "/placeholder.svg"}
                      width={800}
                      height={600}
                      className="
      w-full h-full max-h-[700px]
      object-cover
      transform              
      transition-transform duration-700
      group-hover:scale-105  
    "
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <Play className="h-12 w-12 text-purple-500" />
                    </div>
                  </div>
                  <VideoModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    videoSrc={course.videoSrc}
                    title={course.title}
                  />
                </>
              ) : ( */}
              <div className="rounded-xl overflow-hidden shadow-xl">
                <Image
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  width={800}
                  height={600}
                  className="object-cover w-full  h-[700px]"
                />
              </div>
              {/* )} */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl font-bold font-poppins text-navy-900 mb-4">
                  Rreth Kursit
                </h2>
                <div className="h-1 w-16 bg-purple-500 mb-6" />
                <p className="text-navy-700">{course.longDescription}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center p-4 bg-navy-50 rounded-lg">
                  <Clock className="h-10 w-10 text-purple-500 mr-4" />
                  <div>
                    <h3 className="font-bold text-navy-900">Kohëzgjatja</h3>
                    <p className="text-navy-700">{course.duration}</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-navy-50 rounded-lg">
                  <Calendar className="h-10 w-10 text-purple-500 mr-4" />
                  <div>
                    <h3 className="font-bold text-navy-900">Orari</h3>
                    <p className="text-navy-700">{course.schedule}</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-navy-50 rounded-lg">
                  <Award className="h-10 w-10 text-purple-500 mr-4" />
                  <div>
                    <h3 className="font-bold text-navy-900">Niveli</h3>
                    <p className="text-navy-700">{course.level}</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-navy-50 rounded-lg">
                  <GraduationCap className="h-10 w-10 text-purple-500 mr-4" />
                  <div>
                    <h3 className="font-bold text-navy-900">Certifikim</h3>
                    <p className="text-navy-700">Certifikatë Ndërkombëtare</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link href={`/register?courseId=${course.id}`} passHref>
                  <AnimatedButton size="lg" variant="default">
                    REGJISTROHU TANI
                  </AnimatedButton>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Content Tabs ── */}
      <section className="py-16 bg-navy-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="curriculum" className="w-full">
            <div className="overflow-x-auto scrollbar-hide pt-1">
              <TabsList className="inline-flex min-w-max gap-4 md:grid md:grid-cols-4 mb-8">
                <TabsTrigger value="curriculum">Kurrikula</TabsTrigger>
                <TabsTrigger value="instructors">Instruktorët</TabsTrigger>
                <TabsTrigger value="benefits">Përfitimet</TabsTrigger>
                <TabsTrigger value="media">Media</TabsTrigger>
              </TabsList>
            </div>

            {/* ── Curriculum ── */}
            <TabsContent
              value="curriculum"
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <h3 className="text-2xl font-bold font-poppins text-navy-900 mb-6">
                Çfarë do të mësoni
              </h3>
              <Accordion type="single" collapsible className="w-full">
                {course.curriculum.map((mod, i) => (
                  <AccordionItem key={i} value={`mod-${i}`}>
                    <AccordionTrigger className="text-lg font-medium">
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
                            <CheckCircle className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                            {les}
                          </motion.li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>

            {/* ── Instructors ── */}
            <TabsContent
              value="instructors"
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <h3 className="text-2xl font-bold mb-6">Instruktorët Tanë</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {course.instructors.map((instr, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="flex flex-col md:flex-row items-center gap-6 p-6 bg-navy-50 rounded-xl"
                  >
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
                      <Image
                        src={instr.image}
                        alt={instr.name}
                        width={200}
                        height={200}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{instr.name}</h4>
                      <p className="text-purple-600 mb-2">{instr.role}</p>
                      <p className="text-navy-700">{instr.bio}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* ── Benefits & Materials ── */}
            <TabsContent
              value="benefits"
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">
                    Përfitimet e Kursit
                  </h3>
                  <ul className="space-y-4">
                    {course.benefits.map((b, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start"
                      >
                        <CheckCircle className="h-6 w-6 text-purple-500 mr-3 mt-0.5" />
                        {b}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-6">
                    Materialet e Përfshira
                  </h3>
                  <ul className="space-y-4">
                    {course.materials.map((m, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start"
                      >
                        <CheckCircle className="h-6 w-6 text-purple-500 mr-3 mt-0.5" />
                        {m}
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
                {course.media.map((item, i) =>
                  item.type === "image" ? (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="overflow-hidden rounded-lg shadow-lg"
                    >
                      <Image
                        src={item.src}
                        alt={item.alt || `image-${i}`}
                        width={400}
                        height={300}
                        className="object-cover w-full h-60"
                      />
                    </motion.div>
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
                        <Play className="h-12 w-12 text-white" />
                      </div>
                    </motion.div>
                  )
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* ── Show VideoModal when set ── */}
      {videoModal && (
        <VideoModal
          isOpen={true}
          onClose={() => setVideoModal(null)}
          videoSrc={videoModal.src}
          title={videoModal.alt ?? ""}
        />
      )}

      {/* ── Testimonials Section ── */}
      {course.testimonials?.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-poppins text-navy-900 mb-4">
                Çfarë Thonë Studentët Tanë
              </h2>
              <div className="h-1 w-24 bg-purple-500 mx-auto mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {course.testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-navy-50 p-6 rounded-xl shadow-md"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-purple-500">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={100}
                        height={100}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-navy-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-navy-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-navy-700 italic">"{testimonial.text}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA Section ── */}
      <section className="py-16 bg-gradient-to-br from-black via-purple-900 to-black relative overflow-hidden">
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
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white mb-6">
              Gati për të Filluar Karrierën Tuaj të Re?
            </h2>
            <p className="text-lg text-navy-100 mb-8">
              Regjistrohuni sot në kursin tonë profesional dhe bëhuni pjesë e
              komunitetit tonë të suksesshëm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton
                size="lg"
                variant="secondary"
                className="text-white"
              >
                REGJISTROHU TANI
              </AnimatedButton>
              <Link href="/contact">
                <AnimatedButton
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/20"
                  showFill={false}
                >
                  NA KONTAKTONI
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
        <section className="py-16 bg-purple-50" ref={coursesRef}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins text-navy-900 mb-4">
              Kurse të Ngjashme
            </h2>
            <div className="h-1 w-24 bg-purple-500 mx-auto mb-6" />
          </div>
          <div className="container mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {relatedCourses.map((rc, i) => (
                <motion.div
                  key={rc.id}
                  variants={itemVariants}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 relative flex flex-col h-full"
                >
                  {/* Featured badge */}
                  {rc.featured && (
                    <div className="absolute top-4 left-4 z-10 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Kurs i Rekomanduar
                    </div>
                  )}

                  {/* Image with optional custom-crop */}
                  <div className="relative h-[14rem] overflow-hidden">
                    <Image
                      src={rc.image || "/placeholder.svg"}
                      alt={rc.title}
                      width={400}
                      height={400}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                      style={
                        rc.customcrop
                          ? { objectPosition: rc.customcrop }
                          : undefined
                      }
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center">
                      <div className="flex items-center space-x-2 text-white text-sm">
                        <Clock className="h-4 w-4 text-purple-300" />
                        <span>{rc.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-white text-sm">
                        <Users className="h-4 w-4 text-purple-300" />
                        <span>{rc.students} studentë</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-4">
                      <div className="flex items-center mb-2 flex-wrap gap-2">
                        <span className="text-xs font-medium bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                          {
                            categories.find((cat) => cat.id === rc.category)
                              ?.name
                          }
                        </span>
                        <span className="text-xs font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                          {rc.level}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold font-poppins text-gray-900 mb-3 line-clamp-2">
                        {rc.title}
                      </h3>
                      <p className="text-gray-700 line-clamp-3 mb-4">
                        {rc.description}
                      </p>
                    </div>

                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <div className="flex items-center text-sm text-gray-600 mb-4">
                        <Calendar className="h-4 w-4 mr-1 text-purple-600" />
                        <span>{rc.schedule}</span>
                      </div>
                      <Link href={`/courses/${rc.id}`}>
                        <AnimatedButton className="w-full bg-black hover:bg-black text-white">
                          Mëso më shumë
                          <ChevronRight className="ml-2 h-4 w-4 transition-transform hover:translate-x-1" />
                        </AnimatedButton>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* ── CTA, Related, RequestInfo … rest unchanged … */}
      <RequestInfoButton />
    </div>
  );
}
