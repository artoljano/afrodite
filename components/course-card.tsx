// File: /components/course-card.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Check, Clock, Users, Info } from "lucide-react";
import { AnimatedButton } from "@/components/animated-button";
import type { Course } from "@/data/courses";

interface CourseCardProps {
  course: Course;
  delay: number;
  inView: boolean;
}

export default function CourseCard({ course, delay, inView }: CourseCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  // Duration in hours, fallback to whatever string the course provides
  const durationDisplay = course.durationHours
    ? `${course.durationHours}h`
    : course.duration || "";

  // Use the course’s benefit list (or empty array) and cap at 4
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
        {/* ─── FRONT OF CARD ─────────────────────────────────────────── */}
        <div
          className="absolute inset-0 backface-hidden rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* “More info” hint */}
          <div className="absolute top-4 right-4 z-10 flex items-center space-x-1 bg-black/70 text-white text-xs font-medium px-2 py-1 rounded">
            <Info className="h-4 w-4" />
            <span className="cursor-pointer" onClick={() => setIsFlipped(true)}>
              Më shumë info
            </span>
          </div>

          {/* IMAGE AREA (always 12rem tall) */}
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

            {/* Optional “featured” badge */}
            {course.featured && (
              <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                Kurs i Certifikuar
              </div>
            )}

            {/* Duration & enrolled */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-white text-sm">
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

          {/* TEXT CONTENT (clamped) */}
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold font-poppins text-gray-900 h-12 leading-6 overflow-hidden">
              {course.title}
            </h3>
            <p className="text-gray-700 line-clamp-3 flex-grow">
              {course.description}
            </p>
            <div className="mt-4">
              <AnimatedButton className="w-full bg-black hover:bg-purple-900 text-white">
                Mëso më shumë
                <ChevronRight className="ml-2 h-4 w-4 transition-transform hover:translate-x-1" />
              </AnimatedButton>
            </div>
          </div>
        </div>

        {/* ─── BACK OF CARD ─────────────────────────────────────────── */}
        <div
          className="absolute inset-0 backface-hidden rounded-xl overflow-hidden bg-gradient-to-br from-black to-purple-900 p-6 flex flex-col justify-center"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* Flip‐back button */}
          <div
            onClick={() => setIsFlipped(false)}
            className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-full cursor-pointer"
          >
            Kthehu për më shumë
          </div>

          <h3 className="text-xl font-bold font-poppins text-white mb-6 text-center">
            Çfarë do të përfitoni
          </h3>
          <ul className="space-y-4 flex-grow overflow-auto">
            {topBenefits.map((point, idx) => (
              <li key={idx} className="flex items-start">
                <div className="bg-purple-500/20 p-1 rounded-full mr-3 mt-0.5">
                  <Check className="h-4 w-4 text-purple-300" />
                </div>
                <span className="text-white">{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <AnimatedButton
              variant="secondary"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
            >
              Regjistrohu Tani
            </AnimatedButton>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
