"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

interface TimelineEvent {
  year: string
  title: string
  description: string
  image: string
}

interface HorizontalTimelineProps {
  events: TimelineEvent[]
}

export default function HorizontalTimeline({ events }: HorizontalTimelineProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [showPopup, setShowPopup] = useState(false)
  const timelineRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleNext = () => {
    if (activeIndex < events.length - 1) {
      setActiveIndex(activeIndex + 1)
    }
  }

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1)
    }
  }

  const handleEventClick = (index: number) => {
    setActiveIndex(index)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!timelineRef.current) return

    setIsDragging(true)
    setStartX(e.pageX - timelineRef.current.offsetLeft)
    setScrollLeft(timelineRef.current.scrollLeft)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !timelineRef.current) return

    e.preventDefault()
    const x = e.pageX - timelineRef.current.offsetLeft
    const walk = (x - startX) * 2 // Scroll speed multiplier
    timelineRef.current.scrollLeft = scrollLeft - walk
  }

  useEffect(() => {
    if (timelineRef.current) {
      const eventElements = timelineRef.current.querySelectorAll(".timeline-event")
      if (eventElements[activeIndex]) {
        const scrollPosition =
          eventElements[activeIndex].getBoundingClientRect().left +
          timelineRef.current.scrollLeft -
          timelineRef.current.getBoundingClientRect().left -
          timelineRef.current.offsetWidth / 2 +
          eventElements[activeIndex].clientWidth / 2

        timelineRef.current.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        })
      }
    }
  }, [activeIndex])

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

  return (
    <div className="w-full">
      <div className="relative">
        <div
          ref={timelineRef}
          className="overflow-x-auto hide-scrollbar py-8 px-4"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
        >
          <div className="flex items-center min-w-max">
            <div className="h-0.5 bg-purple-500 absolute w-full left-0 top-1/2 transform -translate-y-1/2 z-0"></div>

            {events.map((event, index) => (
              <div
                key={index}
                className={`timeline-event relative mx-12 flex flex-col items-center cursor-pointer z-10 transition-all duration-300 ${
                  index === activeIndex ? "scale-110" : "opacity-70 hover:opacity-100"
                }`}
                onClick={() => handleEventClick(index)}
                onMouseEnter={() => {
                  if (index === activeIndex) setShowPopup(true)
                }}
                onMouseLeave={() => setShowPopup(false)}
              >
                <div
                  className={`w-6 h-6 rounded-full ${
                    index === activeIndex ? "bg-purple-500" : "bg-navy-300"
                  } mb-4 transition-colors duration-300`}
                ></div>
                <div
                  className={`text-lg font-bold ${
                    index === activeIndex ? "text-navy-900" : "text-navy-600"
                  } transition-colors duration-300`}
                >
                  {event.year}
                </div>

                <AnimatePresence>
                  {showPopup && index === activeIndex && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-16 bg-white rounded-lg shadow-lg p-4 w-64 z-20"
                    >
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-4 h-4 bg-white rotate-45"></div>
                      <div className="relative h-32 w-full mb-3 rounded-md overflow-hidden">
                        <Image
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h4 className="font-bold text-navy-900 mb-1">{event.title}</h4>
                      <p className="text-sm text-navy-700">{event.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handlePrev}
          disabled={activeIndex === 0}
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-20 ${
            activeIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-navy-50"
          }`}
          aria-label="Previous event"
          tabIndex={0}
        >
          <ChevronLeft className="h-5 w-5 text-navy-900" />
        </button>

        <button
          onClick={handleNext}
          disabled={activeIndex === events.length - 1}
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-20 ${
            activeIndex === events.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-navy-50"
          }`}
          aria-label="Next event"
          tabIndex={0}
        >
          <ChevronRight className="h-5 w-5 text-navy-900" />
        </button>
      </div>

      <div className="sr-only" aria-live="polite">
        Showing timeline event: {events[activeIndex].title} from {events[activeIndex].year}
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-xl font-bold font-poppins text-navy-900 mb-2">{events[activeIndex].title}</h3>
        <p className="text-navy-700 max-w-2xl mx-auto">{events[activeIndex].description}</p>
      </div>
    </div>
  )
}
