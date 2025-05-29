"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface AnimatedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export default function AnimatedImage({ src, alt, width, height, className = "" }: AnimatedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="overflow-hidden relative"
    >
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className={`transition-all duration-700 ${className} ${isLoaded ? "blur-0 scale-100" : "blur-sm scale-105"}`}
        onLoadingComplete={() => setIsLoaded(true)}
      />
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute inset-0 bg-navy-200"
      />
    </motion.div>
  )
}
