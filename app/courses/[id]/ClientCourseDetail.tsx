// File: /app/courses/[id]/ClientCourseDetail.tsx
"use client";

import { useEffect, useState } from "react";
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
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import VideoBackground from "@/components/video-background";
import RequestInfoButton from "@/components/request-info-button";
import { AnimatedButton } from "@/components/animated-button";

import type { Course } from "@/data/courses";
import { courses } from "@/data/courses"; // ← add this line

interface Props {
  course: Course;
}

export default function ClientCourseDetail({ course }: Props) {
  // No need to look up anything in useEffect anymore; the server already provided `course`.
  // All of the Framer-Motion, hooks, etc. stay here.

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

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
            <div className="h-1 w-24 bg-purple-500 mx-auto mb-8"></div>
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
            <AnimatedButton size="lg" variant="secondary">
              REGJISTROHU TANI
            </AnimatedButton>
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
              <div className="rounded-xl overflow-hidden shadow-xl">
                <Image
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-navy-900 text-white p-6 rounded-lg shadow-lg"
              >
                <span className="text-2xl font-bold">{course.price}</span>
                <span className="block text-sm text-navy-100">
                  Çmimi i plotë
                </span>
              </motion.div>
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
                <div className="h-1 w-16 bg-purple-500 mb-6"></div>
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
                <AnimatedButton size="lg" variant="default">
                  REGJISTROHU TANI
                </AnimatedButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Course Content Tabs (Curriculum / Instructors / Benefits / FAQs) ── */}
      <section className="py-16 bg-navy-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="curriculum" className="w-full">
            <div className="relative w-full overflow-x-auto scrollbar-hide pt-1">
              <TabsList className="inline-flex min-w-max gap-4 md:grid md:grid-cols-4 mb-8">
                <TabsTrigger
                  value="curriculum"
                  className="text-md whitespace-nowrap px-4 py-2"
                >
                  Kurrikula
                </TabsTrigger>
                <TabsTrigger
                  value="instructors"
                  className="text-md whitespace-nowrap px-4 py-2"
                >
                  Instruktorët
                </TabsTrigger>
                <TabsTrigger
                  value="benefits"
                  className="text-md whitespace-nowrap px-4 py-2"
                >
                  Përfitimet
                </TabsTrigger>
                <TabsTrigger
                  value="faq"
                  className="text-md whitespace-nowrap px-4 py-2"
                >
                  Pyetje të Shpeshta
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent
              value="curriculum"
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <h3 className="text-2xl font-bold font-poppins text-navy-900 mb-6">
                Çfarë do të mësoni
              </h3>
              <Accordion type="single" collapsible className="w-full">
                {course.curriculum.map((module, idx) => (
                  <AccordionItem key={idx} value={`module-${idx}`}>
                    <AccordionTrigger className="text-lg font-medium text-navy-900 hover:text-purple-500">
                      {module.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 pl-6">
                        {module.lessons.map((lesson, lessonIdx) => (
                          <motion.li
                            key={lessonIdx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.3,
                              delay: lessonIdx * 0.1,
                            }}
                            className="flex items-start"
                          >
                            <CheckCircle className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-navy-700">{lesson}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>

            <TabsContent
              value="instructors"
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <h3 className="text-2xl font-bold font-poppins text-navy-900 mb-6">
                Instruktorët Tanë
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {course.instructors.map((instr, instrIdx) => (
                  <motion.div
                    key={instrIdx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: instrIdx * 0.2 }}
                    className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6 bg-navy-50 rounded-xl"
                  >
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
                      <Image
                        src={instr.image || "/placeholder.svg"}
                        alt={instr.name}
                        width={200}
                        height={200}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-navy-900 mb-1">
                        {instr.name}
                      </h4>
                      <p className="text-purple-600 mb-4">{instr.role}</p>
                      <p className="text-navy-700">{instr.bio}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent
              value="benefits"
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold font-poppins text-navy-900 mb-6">
                    Përfitimet e Kursit
                  </h3>
                  <ul className="space-y-4">
                    {course.benefits.map((b, bIdx) => (
                      <motion.li
                        key={bIdx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: bIdx * 0.1 }}
                        className="flex items-start"
                      >
                        <CheckCircle className="h-6 w-6 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-navy-700">{b}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold font-poppins text-navy-900 mb-6">
                    Materialet e Përfshira
                  </h3>
                  <ul className="space-y-4">
                    {course.materials.map((m, mIdx) => (
                      <motion.li
                        key={mIdx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: mIdx * 0.1 }}
                        className="flex items-start"
                      >
                        <CheckCircle className="h-6 w-6 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-navy-700">{m}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent
              value="faq"
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <h3 className="text-2xl font-bold font-poppins text-navy-900 mb-6">
                Pyetje të Shpeshta
              </h3>
              <Accordion type="single" collapsible className="w-full">
                {course.faqs.map((faq, faqIdx) => (
                  <AccordionItem key={faqIdx} value={`faq-${faqIdx}`}>
                    <AccordionTrigger className="text-lg font-medium text-navy-900 hover:text-purple-500">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-navy-700">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* ── Testimonials Section ── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins text-navy-900 mb-4">
              Çfarë Thonë Studentët Tanë
            </h2>
            <div className="h-1 w-24 bg-purple-500 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {course.testimonials.map((t, tIdx) => (
              <motion.div
                key={tIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: tIdx * 0.2 }}
                className="bg-navy-50 p-6 rounded-xl shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-purple-500">
                    <Image
                      src={t.image || "/placeholder.svg"}
                      alt={t.name}
                      width={100}
                      height={100}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-navy-900">
                      {t.name}
                    </h4>
                    <p className="text-navy-600">{t.role}</p>
                  </div>
                </div>
                <p className="text-navy-700 italic">"{t.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 bg-gradient-to-br from-black via-purple-900 to-black relative overflow-hidden">
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
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white mb-6">
              Gati për të Filluar Karrierën Tuaj të Re?
            </h2>
            <p className="text-lg text-navy-100 mb-8">
              Regjistrohuni sot në kursin tonë profesional dhe bëhuni pjesë e
              komunitetit tonë të profesionistëve të suksesshëm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <AnimatedButton
                size="lg"
                variant="secondary"
                className="text-white w-auto"
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
            alt="Decorative pattern"
            width={256}
            height={256}
            className="object-contain"
          />
        </div>
      </section>

      {/* ── Related Courses ── */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins text-navy-900 mb-4">
              Kurse të Ngjashme
            </h2>
            <div className="h-1 w-24 bg-purple-500 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses
              .filter(
                (c) => c.id !== course.id && c.category === course.category
              )
              .slice(0, 3)
              .map((related, rIdx) => (
                <motion.div
                  key={related.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: rIdx * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={related.image.replace(
                        "height=600&width=800",
                        "height=300&width=400"
                      )}
                      alt={related.title}
                      width={400}
                      height={300}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-black text-white text-xs font-medium px-3 py-1 rounded-full">
                      {related.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold font-poppins text-navy-900 mb-3 line-clamp-2">
                      {related.title}
                    </h3>
                    <p className="text-navy-700 mb-6 line-clamp-3">
                      {related.description}
                    </p>
                    <Link href={`/courses/${related.id}`}>
                      <AnimatedButton className="w-full">
                        Mëso më shumë
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </AnimatedButton>
                    </Link>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* ── Request Info Button ── */}
      <RequestInfoButton />
    </div>
  );
}
