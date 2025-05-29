"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Calendar, ArrowRight } from "lucide-react"

interface TimelineEvent {
  year: string
  title: string
  description: string
  image: string
  color?: string
}

interface EnhancedTimelineProps {
  events: TimelineEvent[]
}

export default function EnhancedTimeline({ events }: EnhancedTimelineProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState<"left" | "right">("right")
  const [isExpanded, setIsExpanded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Set a fixed height for the container to prevent layout shifts
  const [containerHeight, setContainerHeight] = useState(300)

  // Colors for the timeline nodes
  const colors = ["bg-purple-500", "bg-blue-500", "bg-pink-500", "bg-green-500", "bg-amber-500"]

  const handleNext = () => {
    if (activeIndex < events.length - 1) {
      setDirection("right")
      setActiveIndex(activeIndex + 1)
    }
  }

  const handlePrev = () => {
    if (activeIndex > 0) {
      setDirection("left")
      setActiveIndex(activeIndex - 1)
    }
  }

  const handleEventClick = (index: number) => {
    setDirection(index > activeIndex ? "right" : "left")
    setActiveIndex(index)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrev()
      } else if (e.key === "ArrowRight") {
        handleNext()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [activeIndex])

  // Update container height when content changes
  useEffect(() => {
    if (containerRef.current) {
      const updateHeight = () => {
        if (containerRef.current) {
          const height = containerRef.current.scrollHeight
          setContainerHeight(height)
        }
      }

      // Update after a short delay to ensure content is rendered
      const timer = setTimeout(updateHeight, 100)
      return () => clearTimeout(timer)
    }
  }, [activeIndex, isExpanded])

  const variants = {
    enter: (direction: "left" | "right") => ({
      x: direction === "right" ? 30 : -30,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: "left" | "right") => ({
      x: direction === "right" ? -30 : 30,
      opacity: 0,
      position: "absolute",
    }),
  }

  return (
    <div className="w-full">
      <div className="relative">
        {/* Timeline Bar */}
        <div className="relative mb-16">
          <div className="h-1 bg-gray-200 absolute w-full top-1/2 transform -translate-y-1/2"></div>

          <div className="flex justify-between relative">
            {events.map((event, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center cursor-pointer z-10"
                onClick={() => handleEventClick(index)}
                tabIndex={0}
                role="button"
                aria-label={`View event from ${event.year}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleEventClick(index)
                  }
                }}
              >
                <motion.div
                  className={`w-8 h-8 rounded-full ${
                    index === activeIndex ? colors[index % colors.length] : "bg-gray-300"
                  } flex items-center justify-center transition-all duration-300 cursor-pointer`}
                  whileHover={{ scale: 1.2 }}
                  animate={index === activeIndex ? { scale: 1.2 } : { scale: 1 }}
                >
                  <span className="text-white font-bold text-sm">{event.year}</span>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Content Section with fixed height container */}
        <div className="relative overflow-hidden" style={{ height: containerHeight, transition: "height 0.3s ease" }}>
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={activeIndex}
              ref={containerRef}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden w-full"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src={events[activeIndex].image || "/placeholder.svg"}
                    alt={events[activeIndex].title}
                    fill
                    className="object-cover"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-${colors[activeIndex % colors.length].replace("bg-", "")}/50 to-transparent`}
                  ></div>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full flex items-center">
                    <Calendar className="h-4 w-4 mr-1 text-purple-500" />
                    <span className="text-sm font-medium">{events[activeIndex].year}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-2xl font-bold text-navy-900 mb-2">{events[activeIndex].title}</h4>

                  <motion.div
                    initial={{ height: "80px", overflow: "hidden" }}
                    animate={{ height: isExpanded ? "auto" : "80px", overflow: isExpanded ? "visible" : "hidden" }}
                  >
                    <p className="text-navy-700">{events[activeIndex].description}</p>
                  </motion.div>

                  {events[activeIndex].description.length > 120 && (
                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="mt-2 text-purple-600 hover:text-purple-800 flex items-center text-sm font-medium"
                    >
                      {isExpanded ? "Lexo më pak" : "Lexo më shumë"}
                      <ArrowRight className={`ml-1 h-3 w-3 transition-transform ${isExpanded ? "rotate-90" : ""}`} />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className={`flex items-center px-4 py-2 rounded-lg ${
              activeIndex === 0
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-navy-900 text-white hover:bg-navy-800"
            }`}
            aria-label="Previous event"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            <span>Mëparshëm</span>
          </button>

          <button
            onClick={handleNext}
            disabled={activeIndex === events.length - 1}
            className={`flex items-center px-4 py-2 rounded-lg ${
              activeIndex === events.length - 1
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-navy-900 text-white hover:bg-navy-800"
            }`}
            aria-label="Next event"
          >
            <span>Tjetër</span>
            <ChevronRight className="h-5 w-5 ml-1" />
          </button>
        </div>

        {/* Screen reader announcement */}
        <div className="sr-only" aria-live="polite">
          Showing event from {events[activeIndex].year}: {events[activeIndex].title}
        </div>
      </div>
    </div>
  )
}
