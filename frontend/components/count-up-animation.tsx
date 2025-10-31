"use client"

import { useState, useEffect } from "react"

interface CountUpAnimationProps {
  end: number
  duration?: number
  delay?: number
  prefix?: string
  suffix?: string
  className?: string
  inView: boolean
}

export default function CountUpAnimation({
  end,
  duration = 2,
  delay = 0.2,
  prefix = "",
  suffix = "",
  className = "",
  inView,
}: CountUpAnimationProps) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (inView && !hasAnimated) {
      let startTime: number
      let animationFrame: number

      const startAnimation = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = timestamp - startTime
        const timeProgress = Math.min(progress / (duration * 1000), 1)

        // Easing function for smoother animation
        const easedProgress = 1 - Math.pow(1 - timeProgress, 3)

        setCount(Math.floor(easedProgress * end))

        if (timeProgress < 1) {
          animationFrame = requestAnimationFrame(startAnimation)
        } else {
          setCount(end)
          setHasAnimated(true)
        }
      }

      // Delay the start of the animation
      const timer = setTimeout(() => {
        animationFrame = requestAnimationFrame(startAnimation)
      }, delay * 1000)

      return () => {
        clearTimeout(timer)
        if (animationFrame) {
          cancelAnimationFrame(animationFrame)
        }
      }
    }
  }, [inView, end, duration, delay, hasAnimated])

  return <span className={className}>{`${prefix}${count}${suffix}`}</span>
}
