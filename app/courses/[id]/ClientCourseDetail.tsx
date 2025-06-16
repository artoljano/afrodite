// File: /app/courses/[id]/ClientCourseDetail.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Clock,
  Calendar,
  Award,
  CheckCircle,
  GraduationCap,
  ArrowRight,
  Play,
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

  return (
    <div className="flex flex-col w-full">
      {/* ── Hero Section with Video Background ── */}
      <VideoBackground
        videoSrc={course.videoSrc || "/placeholder-video.mp4"}
        overlayOpacity={0.85}
        className="min-h-[60vh] md:min-h-[70vh] py-20 md:py-32 bg-gradient-to-r from-black to-purple-900"
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
              {course.videoSrc ? (
                <>
                  <div
                    onClick={() => setIsModalOpen(true)}
                    className="group rounded-xl overflow-hidden shadow-xl cursor-pointer relative"
                  >
                    <video
                      src={course.videoSrc || "/placeholder.svg"}
                      width={800}
                      height={600}
                      className="
      w-full h-full max-h-[600px]
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
              ) : (
                <div className="rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </div>
              )}
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
      <section className="py-16 bg-white">{/* … rest unchanged … */}</section>

      {/* ── CTA, Related, RequestInfo … rest unchanged … */}
      <RequestInfoButton />
    </div>
  );
}
