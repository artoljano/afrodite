"use client"

import { useEffect, useRef } from "react"
import lottie from "lottie-web"

interface LottieAnimationProps {
  animationData: any
  className?: string
  loop?: boolean
  autoplay?: boolean
}

export default function LottieAnimation({
  animationData,
  className = "",
  loop = true,
  autoplay = true,
}: LottieAnimationProps) {
  const animationContainer = useRef<HTMLDivElement>(null)
  const anim = useRef<any>(null)

  useEffect(() => {
    if (animationContainer.current) {
      anim.current = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop,
        autoplay,
        animationData,
      })
    }

    return () => {
      if (anim.current) {
        anim.current.destroy()
      }
    }
  }, [animationData, loop, autoplay])

  return <div ref={animationContainer} className={className} />
}
