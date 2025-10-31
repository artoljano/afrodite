"use client"

import { motion } from "framer-motion"

interface WavePatternProps {
  color?: string
  width?: number
  height?: number
  className?: string
}

export default function WavePattern({
  color = "#8b5cf6",
  width = 256,
  height = 256,
  className = "",
}: WavePatternProps) {
  return (
    <motion.svg
      width={width}
      height={height}
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.path
        d="M0 96L10.7 90.7C21.3 85.3 42.7 74.7 64 74.7C85.3 74.7 106.7 85.3 128 90.7C149.3 96 170.7 96 192 90.7C213.3 85.3 234.7 74.7 245.3 69.3L256 64V128H245.3C234.7 128 213.3 128 192 128C170.7 128 149.3 128 128 128C106.7 128 85.3 128 64 128C42.7 128 21.3 128 10.7 128H0V96Z"
        fill={color}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <motion.path
        d="M0 128L10.7 133.3C21.3 138.7 42.7 149.3 64 149.3C85.3 149.3 106.7 138.7 128 133.3C149.3 128 170.7 128 192 133.3C213.3 138.7 234.7 149.3 245.3 154.7L256 160V96H245.3C234.7 96 213.3 96 192 96C170.7 96 149.3 96 128 96C106.7 96 85.3 96 64 96C42.7 96 21.3 96 10.7 96H0V128Z"
        fill={color}
        fillOpacity="0.7"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
      />
      <motion.path
        d="M0 160L10.7 165.3C21.3 170.7 42.7 181.3 64 181.3C85.3 181.3 106.7 170.7 128 165.3C149.3 160 170.7 160 192 165.3C213.3 170.7 234.7 181.3 245.3 186.7L256 192V128H245.3C234.7 128 213.3 128 192 128C170.7 128 149.3 128 128 128C106.7 128 85.3 128 64 128C42.7 128 21.3 128 10.7 128H0V160Z"
        fill={color}
        fillOpacity="0.4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.4, ease: "easeInOut" }}
      />
    </motion.svg>
  )
}
