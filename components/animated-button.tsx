// File: components/animated-button.tsx

"use client";

import React, { useState, useRef } from "react";
import { Button as ShadcnButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

// 1. We include `rounded-xl` here in the base CVA so the button itself is rounded:
// const buttonVariants = cva(
//   "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group",
//   {
//     variants: {
//       variant: {
//         default: "bg-black text-white hover:bg-black",
//         secondary: "bg-purple-600 text-white hover:bg-black",
//         outline:
//           "border border-input bg-transparent text-current hover:bg-purple-600/10",
//         ghost: "hover:bg-accent hover:text-accent-foreground",
//         link: "text-primary underline-offset-4 hover:underline",
//       },
//       size: {
//         default: "h-10 px-4 py-2",
//         sm: "h-9 rounded-xl px-3",
//         lg: "h-12 rounded-xl px-6 text-base",
//       },
//     },
//     defaultVariants: {
//       variant: "default",
//       size: "default",
//     },
//   }
// );
const buttonVariants = cva(
  // 1) Added w-full sm:w-auto to force full-width on mobile, auto on larger screens
  "inline-flex w-full sm:w-auto items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default: "bg-transparent text-white hover:bg-transparent",
        secondary: "bg-afrodite-lightPurple text-afrodite-creme",
        outline:
          "border border-input bg-transparent text-current hover:bg-purple-600/10",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        custom: "",
        socials:
          "bg-afrodite-lightPurple text-afrodite-creme hover:bg-afrodite-creme hover:text-afrodite-purple",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-xl px-3",
        lg: "h-12 rounded-xl px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "lg",
    },
  }
);

export interface AnimatedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  showRipple?: boolean;
  showScale?: boolean;
  showFill?: boolean;
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  (
    {
      className,
      variant,
      size,
      showRipple = true,
      showScale = true,
      showFill = true,
      children,
      onClick,

      ...props
    },
    ref
  ) => {
    const [rippleArray, setRippleArray] = useState<
      Array<{ x: number; y: number; size: number; id: number }>
    >([]);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!showRipple) {
        onClick?.(e);
        return;
      }

      const button = buttonRef.current;
      if (!button) return;

      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const size = Math.max(rect.width, rect.height) * 2;
      const id = Date.now();

      setRippleArray((prev) => [...prev, { x, y, size, id }]);

      setTimeout(() => {
        setRippleArray((prev) => prev.filter((r) => r.id !== id));
      }, 1000);

      onClick?.(e);
    };

    // 2. Determine fill color based on variant
    let fillColor = "bg-afrodite-purple";
    if (variant === "default") fillColor = "bg-afrodite-purple";
    if (variant === "secondary") fillColor = "bg-afrodite-purple";
    if (variant === "outline") fillColor = "bg-afrodite-purple";
    if (variant === "ghost") fillColor = "bg-accent";
    if (variant === "socials") fillColor = "bg-afrodite-creme";

    // 3. Hover/active scaling
    const scaleClass = showScale
      ? "hover:scale-[1.03] active:scale-[0.98]"
      : "";

    return (
      <ShadcnButton
        ref={(el) => {
          // Forward the ref
          if (ref) {
            if (typeof ref === "function") {
              ref(el);
            } else {
              ref.current = el;
            }
          }
          buttonRef.current = el;
        }}
        className={cn(
          buttonVariants({ variant, size }),
          scaleClass,
          "transition-all duration-300",
          className
        )}
        onClick={handleClick}
        {...props}
      >
        {/* 4. Fill overlay: notice we explicitly add `rounded-xl` here */}
        {showFill && (
          <span
            className={cn(
              `absolute inset-0 w-full h-full ${fillColor} origin-left
               scale-x-0 group-hover:scale-x-100 transition-transform duration-200`,
              "rounded-xl"
            )}
            style={{ zIndex: 0 }}
          />
        )}

        {/* 5. Button content sits above the fill */}
        <span className="relative z-10 flex items-center justify-center">
          {children}
        </span>

        {/* 6. Ripple effect circles */}
        {showRipple &&
          rippleArray.map(({ x, y, size, id }) => (
            <span
              key={id}
              style={{
                top: y - size / 2,
                left: x - size / 2,
                width: size,
                height: size,
                zIndex: 20,
              }}
              className="absolute rounded-full bg-white/20 pointer-events-none animate-ripple"
            />
          ))}
      </ShadcnButton>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";

export { AnimatedButton };
