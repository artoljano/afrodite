"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronRight, Check, Clock, Users, Award } from "lucide-react"
import { AnimatedButton } from "@/components/animated-button"

interface CourseCardProps {
  title: string
  description: string
  image: string
  delay: number
  inView: boolean
  learningPoints?: string[]
}

export default function CourseCard({
  title,
  description,
  image,
  delay,
  inView,
  learningPoints = [
    "Teknika profesionale të avancuara",
    "Praktikë me pajisje moderne",
    "Certifikim ndërkombëtar",
    "Mundësi punësimi pas diplomimit",
  ],
}: CourseCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="perspective-1000 h-[450px] w-full"
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full transition-all duration-500"
        animate={{
          rotateY: isFlipped ? 180 : 0,
          boxShadow: isFlipped
            ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of card */}
        <div
          className="absolute inset-0 backface-hidden rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="relative h-48 overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              width={400}
              height={300}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

            {/* Course badges */}
            <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-medium px-2 py-1 rounded-full">
              Kurs i Certifikuar
            </div>

            {/* Course info overlay */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
              <div className="flex items-center space-x-2 text-white text-sm">
                <Clock className="h-4 w-4" />
                <span>3 muaj</span>
              </div>
              <div className="flex items-center space-x-2 text-white text-sm">
                <Users className="h-4 w-4" />
                <span>12 studentë</span>
              </div>
            </div>
          </div>

          <div className="p-6 flex flex-col flex-grow">
            <div className="flex-grow">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold font-poppins text-gray-900">{title}</h3>
                <div className="bg-purple-100 text-purple-700 text-sm font-medium px-2 py-1 rounded">€350</div>
              </div>
              <p className="text-gray-700">{description}</p>

              {/* Course features */}
              <div className="flex items-center space-x-4 mt-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Award className="h-4 w-4 mr-1 text-purple-600" />
                  <span>Certifikim</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1 text-purple-600" />
                  <span>Praktikë</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100">
              <div
                onClick={(e) => {
                  e.stopPropagation()
                  setIsFlipped(false) // Explicitly prevent flipping
                }}
                onMouseEnter={(e) => {
                  e.stopPropagation()
                  setIsFlipped(false) // Explicitly prevent flipping
                }}
                className="inline-block w-full"
              >
                <AnimatedButton className="w-full bg-black hover:bg-purple-900 text-white">
                  Mëso më shumë
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </AnimatedButton>
              </div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className="absolute inset-0 backface-hidden rounded-xl overflow-hidden bg-gradient-to-br from-black to-purple-900 p-6 flex flex-col justify-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-full">
            Kthehu për më shumë
          </div>

          <h3 className="text-xl font-bold font-poppins text-white mb-6 text-center">Çfarë do të mësoni</h3>
          <ul className="space-y-4">
            {learningPoints.map((point, index) => (
              <li key={index} className="flex items-start">
                <div className="bg-purple-500/20 p-1 rounded-full mr-3 mt-0.5">
                  <Check className="h-4 w-4 text-purple-300" />
                </div>
                <span className="text-white">{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white">Çmimi:</span>
                <span className="text-white font-bold">€350</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white">Kohëzgjatja:</span>
                <span className="text-white">3 muaj</span>
              </div>
            </div>

            <AnimatedButton variant="secondary" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
              Regjistrohu Tani
            </AnimatedButton>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
