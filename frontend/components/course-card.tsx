// File: /components/course-card.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Check, Clock, Users, Info } from "lucide-react";
import { AnimatedButton } from "@/components/animated-button";
import type { Course } from "@/data/courses";
import Link from "next/link";

interface CourseCardProps {
  course: Course;
  delay: number;
  inView: boolean;
}

export default function CourseCard({ course, delay, inView }: CourseCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const durationDisplay = course.duration
    ? `${course.duration}`
    : course.duration || "";

  const benefits = course.benefits || [];
  const topBenefits = benefits.slice(0, 4);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      onMouseLeave={() => setIsFlipped(false)}
      className="perspective-1000 h-[450px] w-full"
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="relative w-full h-full transition-all duration-500"
        animate={{
          rotateY: isFlipped ? 180 : 0,
          boxShadow: isFlipped
            ? "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)"
            : "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)",
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT SIDE */}
        <div
          className="absolute inset-0 rounded-xl overflow-hidden bg-afrodite-creme shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
          style={{
            backfaceVisibility: "hidden",
            pointerEvents: isFlipped ? "none" : "auto",
          }}
        >
          <div className="absolute top-4 right-4 z-10 flex items-center space-x-1 bg-afrodite-creme text-afrodite-lightPurple text-xs font-medium px-2 py-1 rounded">
            <Info className="h-4 w-4" />
            <span className="cursor-pointer" onClick={() => setIsFlipped(true)}>
              Më shumë info
            </span>
          </div>

          <div
            onMouseEnter={() => setIsFlipped(true)}
            className="relative h-48 overflow-hidden cursor-pointer"
          >
            <Image
              src={course.image || "/placeholder.svg"}
              alt={course.title}
              width={400}
              height={400}
              className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            {course.featured && (
              <div className="absolute top-4 left-4 bg-afrodite-lightPurple text-afrodite-creme text-xs font-medium px-2 py-1 rounded-full">
                Kurs i Certifikuar
              </div>
            )}
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-afrodite-creme text-sm">
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{durationDisplay}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>{course.enrolled ?? 0} studentë</span>
              </div>
            </div>
          </div>

          <div className="p-6 flex flex-col flex-grow items-stretch">
            <h3 className="text-xl font-bold font-poppins text-afrodite-purple h-12 leading-6 overflow-hidden">
              {course.title}
            </h3>
            <p className="text-afrodite-lightPurple line-clamp-3 flex-grow">
              {course.description}
            </p>
            <div className="mt-4">
              {/* UPDATED: link to specific course page */}
              <Link href={`/courses/${course.id}`}>
                <AnimatedButton
                  size="default"
                  variant="default"
                  className="w-full block px-8 bg-afrodite-lightPurple text-afrodite-creme"
                >
                  Mëso më shumë
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform hover:translate-x-1" />
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </div>

        {/* BACK SIDE */}
        <div
          className="absolute inset-0 rounded-xl overflow-hidden bg-gradient-to-br from-black to-afrodite-purple p-6 flex flex-col justify-center"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            pointerEvents: isFlipped ? "auto" : "none",
          }}
        >
          <span
            className="absolute top-4 right-4 bg-afrodite-creme/10 backdrop-blur-sm text-afrodite-creme text-xs font-medium px-2 py-1 rounded-full cursor-pointer"
            onClick={() => setIsFlipped(false)}
          >
            Kthehu për më shumë
          </span>

          <h3 className="text-xl font-bold font-poppins text-afrodite-creme mb-6 text-center">
            Çfarë do të përfitoni
          </h3>
          <ul className="space-y-4 flex-grow overflow-auto">
            {topBenefits.map((point, idx) => (
              <li key={idx} className="flex items-start">
                <div className="bg-afrodite-lightPurple p-1 rounded-full mr-3 mt-0.5">
                  <Check className="h-4 w-4 text-afrodite-creme" />
                </div>
                <span className="text-afrodite-creme">{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <Link href={`/register?courseId=${course.id}`}>
              <AnimatedButton
                size="default"
                variant="default"
                className="w-full block px-8 bg-afrodite-lightPurple text-afrodite-creme"
              >
                Regjistrohu Tani
              </AnimatedButton>
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
