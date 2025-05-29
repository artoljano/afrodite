"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote, Play, Star } from "lucide-react"
import VideoModal from "./video-modal"

const testimonials = [
  {
    id: 1,
    name: "Elisa Hoxha",
    role: "Makeup Artist",
    content:
      "Kursi i Makeup Artist në Afrodite Academy ishte një eksperiencë transformuese për mua. Mësova teknika profesionale që më ndihmuan të filloj karrierën time si makeup artist.",
    avatar: "/images/student-testimonial.png",
    hasVideo: true,
    videoSrc: "/videos/student-testimonial.mp4",
    rating: 5,
    location: "Tiranë",
  },
  {
    id: 2,
    name: "Arta Krasniqi",
    role: "Estetiste",
    content:
      "Falë kursit të Estetikës në Afrodite Academy, tani kam biznesin tim të suksesshëm. Instruktorët ishin shumë profesionalë dhe të përkushtuar për suksesin e studentëve.",
    avatar: "/images/student-testimonial.png",
    hasVideo: false,
    rating: 5,
    location: "Durrës",
  },
  {
    id: 3,
    name: "Besa Malaj",
    role: "Nail Technician",
    content:
      "Kursi i Manikyr & Pedikyr ishte fantastik! Mësova teknikat më të fundit dhe tani punoj në një nga sallonet më të mira në Tiranë. Faleminderit Afrodite Academy!",
    avatar: "/images/student-testimonial.png",
    hasVideo: false,
    rating: 4,
    location: "Vlorë",
  },
]

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [videoModalOpen, setVideoModalOpen] = useState(false)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [current, autoplay])

  // When video modal opens, pause autoplay
  useEffect(() => {
    if (videoModalOpen) {
      setAutoplay(false)
    }
  }, [videoModalOpen])

  // Add keyboard navigation and ARIA attributes for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prev()
      } else if (e.key === "ArrowRight") {
        next()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const currentTestimonial = testimonials[current]

  return (
    <div className="relative max-w-4xl mx-auto">
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 md:-translate-x-full z-10"
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
      >
        <button
          onClick={prev}
          className="bg-white text-black p-3 rounded-full shadow-md hover:bg-purple-50 transition-colors"
          aria-label="Previous testimonial"
          tabIndex={0}
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      </div>

      <div
        className="overflow-hidden py-12"
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-8 md:p-12 relative"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-100 rounded-bl-full opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-purple-100 rounded-tr-full opacity-50"></div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="md:w-1/3 flex flex-col items-center text-center">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-purple-100 mb-4">
                  <Image
                    src={`/placeholder.svg?height=96&width=96&text=Student+${current + 1}`}
                    alt={currentTestimonial.name}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />

                  {/* Play button overlay for video testimonials */}
                  {currentTestimonial.hasVideo && (
                    <button
                      onClick={() => setVideoModalOpen(true)}
                      className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-colors group"
                      aria-label="Play video testimonial"
                    >
                      <div className="bg-white/80 group-hover:bg-white group-hover:scale-110 rounded-full p-1.5 transition-all duration-300">
                        <Play className="h-4 w-4 text-purple-600 fill-purple-600" />
                      </div>
                    </button>
                  )}
                </div>
                <h4 className="text-lg font-bold font-poppins text-gray-900">{currentTestimonial.name}</h4>
                <p className="text-gray-600 mb-2">{currentTestimonial.role}</p>
                <div className="flex items-center justify-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < currentTestimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-2">{currentTestimonial.location}</p>
              </div>

              <div className="md:w-2/3">
                <Quote className="h-10 w-10 text-purple-200 mb-4" />
                <p className="text-lg md:text-xl text-gray-700 mb-6 italic relative z-10">
                  "{currentTestimonial.content}"
                </p>

                <div className="flex items-center justify-between mt-8">
                  <div className="text-sm text-gray-500">Student i diplomuar, {new Date().getFullYear() - 1}</div>

                  {currentTestimonial.hasVideo && (
                    <button
                      onClick={() => setVideoModalOpen(true)}
                      className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
                    >
                      Shiko videon e plotë
                      <Play className="ml-2 h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="sr-only" aria-live="polite">
          Showing testimonial from {currentTestimonial.name}, {currentTestimonial.role}
        </div>
      </div>

      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 md:translate-x-full z-10"
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
      >
        <button
          onClick={next}
          className="bg-white text-black p-3 rounded-full shadow-md hover:bg-purple-50 transition-colors"
          aria-label="Next testimonial"
          tabIndex={0}
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === current ? "bg-purple-600" : "bg-gray-200"}`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        videoSrc={currentTestimonial.hasVideo ? currentTestimonial.videoSrc : ""}
        title={`${currentTestimonial.name} - Historia e Suksesit`}
      />
    </div>
  )
}
