"use client"

import React from "react"
import { useState, useRef } from "react"
import { Button as ShadcnButton } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

// Extend the variants from the original shadcn Button
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default: "bg-black text-white hover:bg-black",
        secondary: "bg-purple-600 text-white hover:bg-black",
        outline: "border border-input bg-transparent text-current hover:bg-purple-600/10",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-md px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface AnimatedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  showRipple?: boolean
  showScale?: boolean
  showFill?: boolean
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  (
    { className, variant, size, showRipple = true, showScale = true, showFill = true, children, onClick, ...props },
    ref,
  ) => {
    const [rippleArray, setRippleArray] = useState<Array<{ x: number; y: number; size: number; id: number }>>([])
    const buttonRef = useRef<HTMLButtonElement | null>(null)

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!showRipple) {
        onClick?.(e)
        return
      }

      const button = buttonRef.current
      if (!button) return

      const rect = button.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const size = Math.max(rect.width, rect.height) * 2
      const id = Date.now()

      setRippleArray((prev) => [...prev, { x, y, size, id }])

      setTimeout(() => {
        setRippleArray((prev) => prev.filter((ripple) => ripple.id !== id))
      }, 1000)

      onClick?.(e)
    }

    // Determine fill color based on variant
    let fillColor = "bg-purple-600"
    if (variant === "default") fillColor = "bg-purple-600"
    if (variant === "secondary") fillColor = "bg-black"
    if (variant === "outline") fillColor = "bg-purple-600/20"
    if (variant === "ghost") fillColor = "bg-accent"

    // Determine scale class based on showScale
    const scaleClass = showScale ? "hover:scale-[1.03] active:scale-[0.98]" : ""

    // Determine if we should show the fill effect
    const fillEffectClass = showFill ? "group" : ""

    return (
      <ShadcnButton
        ref={(el) => {
          // Forward the ref
          if (ref) {
            if (typeof ref === "function") {
              ref(el)
            } else {
              ref.current = el
            }
          }
          buttonRef.current = el
        }}
        className={cn(
          buttonVariants({ variant, size }),
          scaleClass,
          fillEffectClass,
          "transition-all duration-300",
          className,
        )}
        onClick={handleClick}
        {...props}
      >
        {/* Fill effect - positioned behind content */}
        {showFill && (
          <span
            className={`absolute inset-0 w-full h-full ${fillColor} origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
            style={{ zIndex: 0 }}
          ></span>
        )}

        {/* Content wrapper to ensure it stays above the fill effect */}
        <span className="flex items-center justify-center relative" style={{ zIndex: 1 }}>
          {children}
        </span>

        {/* Ripple effect */}
        {showRipple &&
          rippleArray.map(({ x, y, size, id }) => (
            <span
              key={id}
              style={{
                top: y - size / 2,
                left: x - size / 2,
                width: size,
                height: size,
                zIndex: 2,
              }}
              className="absolute rounded-full bg-white/20 pointer-events-none animate-ripple"
            />
          ))}
      </ShadcnButton>
    )
  },
)

AnimatedButton.displayName = "AnimatedButton"

export { AnimatedButton }
