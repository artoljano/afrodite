"use client"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface Partner {
  name: string
  logo: string
  width?: number
  height?: number
}

const partners: Partner[] = [
  { name: "Western Balkan", logo: "/placeholder.svg?height=80&width=160&text=Western+Balkan", width: 160, height: 80 },
  { name: "OMC", logo: "/placeholder.svg?height=80&width=160&text=OMC+Logo", width: 160, height: 80 },
  { name: "Beauty Academy", logo: "/placeholder.svg?height=80&width=160&text=Beauty+Academy", width: 160, height: 80 },
  { name: "Pro Makeup", logo: "/placeholder.svg?height=80&width=160&text=Pro+Makeup", width: 160, height: 80 },
  { name: "Nail Art Association", logo: "/placeholder.svg?height=80&width=160&text=Nail+Art", width: 160, height: 80 },
  {
    name: "International Beauty",
    logo: "/placeholder.svg?height=80&width=160&text=Int+Beauty",
    width: 160,
    height: 80,
  },
  {
    name: "European Cosmetology",
    logo: "/placeholder.svg?height=80&width=160&text=EU+Cosmetology",
    width: 160,
    height: 80,
  },
  {
    name: "Aesthetic Guild",
    logo: "/placeholder.svg?height=80&width=160&text=Aesthetic+Guild",
    width: 160,
    height: 80,
  },
]

interface PartnerLogosCarouselProps {
  className?: string
}

export default function PartnerLogosCarousel({ className = "" }: PartnerLogosCarouselProps) {
  const [isPaused, setIsPaused] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [scrollWidth, setScrollWidth] = useState(0)

  // Duplicate the partners array to create a seamless loop
  const allPartners = [...partners, ...partners]

  useEffect(() => {
    if (scrollRef.current) {
      setScrollWidth(scrollRef.current.scrollWidth / 2)
    }
  }, [])

  // Add keyboard navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        // Simulate scrolling left
        if (scrollRef.current) {
          scrollRef.current.scrollLeft -= 200
        }
      } else if (e.key === "ArrowRight") {
        // Simulate scrolling right
        if (scrollRef.current) {
          scrollRef.current.scrollLeft += 200
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <div
      className={`overflow-hidden relative ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Partner logos carousel"
      tabIndex={0}
    >
      <div ref={scrollRef} className="flex items-center">
        <motion.div
          className="flex items-center space-x-8 py-6"
          animate={isPaused ? { x: 0 } : { x: -scrollWidth }}
          transition={
            isPaused
              ? { duration: 0 }
              : {
                  x: {
                    duration: 25,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                    repeatType: "loop",
                  },
                }
          }
        >
          {allPartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="bg-white rounded-lg px-6 py-4 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center min-w-[180px] h-24"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={partner.width || 160}
                height={partner.height || 80}
                className="max-h-16 object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
