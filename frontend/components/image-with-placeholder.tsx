"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface ImageWithPlaceholderProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  placeholderText?: string
}

export default function ImageWithPlaceholder({
  src,
  alt,
  width,
  height,
  className = "",
  placeholderText,
}: ImageWithPlaceholderProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  const placeholderSrc = placeholderText
    ? `/placeholder.svg?height=${height}&width=${width}&text=${encodeURIComponent(placeholderText)}`
    : `/placeholder.svg?height=${height}&width=${width}`

  return (
    <div className="relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded && !hasError ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          className={`${className} transition-all duration-500`}
          onLoadingComplete={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoaded && !hasError ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0"
      >
        <Image
          src={placeholderSrc || "/placeholder.svg"}
          alt={`Placeholder for ${alt}`}
          width={width}
          height={height}
          className={className}
        />
      </motion.div>
    </div>
  )
}
