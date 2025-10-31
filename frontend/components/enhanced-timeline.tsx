"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  type Variants,
  type TargetAndTransition,
} from "framer-motion";
import { ChevronLeft, ChevronRight, Calendar, ArrowRight } from "lucide-react";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image: string;
  color?: string; // optional per-event accent (not required; we rotate through a palette)
}

interface EnhancedTimelineProps {
  events: TimelineEvent[];
}

type Dir = "left" | "right";

export default function EnhancedTimeline({ events }: EnhancedTimelineProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<Dir>("right");
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Fixed height container to avoid layout shift during slide transitions
  const [containerHeight, setContainerHeight] = useState(300);

  // Safe Tailwind color packs (no dynamic class generation -> won’t get purged)
  const palette = [
    {
      dotBg: "bg-purple-500",
      gradFrom: "from-purple-500/50",
      accent: "text-purple-500",
    },
    {
      dotBg: "bg-blue-500",
      gradFrom: "from-blue-500/50",
      accent: "text-blue-500",
    },
    {
      dotBg: "bg-pink-500",
      gradFrom: "from-pink-500/50",
      accent: "text-pink-500",
    },
    {
      dotBg: "bg-green-500",
      gradFrom: "from-green-500/50",
      accent: "text-green-500",
    },
    {
      dotBg: "bg-amber-500",
      gradFrom: "from-amber-500/50",
      accent: "text-amber-500",
    },
  ] as const;

  const colorAt = (i: number) => palette[i % palette.length];

  const handleNext = () => {
    if (activeIndex < events.length - 1) {
      setDirection("right");
      setActiveIndex((i) => i + 1);
      setIsExpanded(false);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setDirection("left");
      setActiveIndex((i) => i - 1);
      setIsExpanded(false);
    }
  };

  const handleEventClick = (index: number) => {
    setDirection(index > activeIndex ? "right" : "left");
    setActiveIndex(index);
    setIsExpanded(false);
  };

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      else if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex]);

  // Keep container height in sync with current slide
  useEffect(() => {
    const update = () => {
      if (!containerRef.current) return;
      // Use scrollHeight to account for expanded text area
      setContainerHeight(containerRef.current.scrollHeight);
    };

    // Update soon after content mounts/changes
    const t = setTimeout(update, 60);

    // Also observe size changes (e.g., fonts, responsive wraps)
    const ro = new ResizeObserver(update);
    if (containerRef.current) ro.observe(containerRef.current);

    return () => {
      clearTimeout(t);
      ro.disconnect();
    };
  }, [activeIndex, isExpanded]);

  // Framer Motion variants (typed) — keep 'position' a literal so TS doesn’t widen to 'string'
  const variants = {
    enter: (dir: Dir): TargetAndTransition => ({
      x: dir === "right" ? 30 : -30,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 } as TargetAndTransition,
    exit: (dir: Dir): TargetAndTransition => ({
      x: dir === "right" ? -30 : 30,
      opacity: 0,
      position: "absolute" as const,
    }),
  } satisfies Variants;

  const current = events[activeIndex];
  const col = colorAt(activeIndex);

  return (
    <div className="w-full">
      <div className="relative">
        {/* Timeline Bar */}
        <div className="relative mb-16">
          <div className="h-1 bg-gray-200 absolute w-full top-1/2 -translate-y-1/2" />
          <div className="relative flex justify-between">
            {events.map((event, index) => {
              const isActive = index === activeIndex;
              const { dotBg } = colorAt(index);
              return (
                <div
                  key={`${event.year}-${index}`}
                  className="relative z-10 flex flex-col items-center cursor-pointer"
                  onClick={() => handleEventClick(index)}
                  tabIndex={0}
                  role="button"
                  aria-label={`Zgjidh eventin ${event.year}`}
                  aria-current={isActive ? "true" : undefined}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ")
                      handleEventClick(index);
                  }}
                >
                  <motion.div
                    className={[
                      "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
                      isActive ? dotBg : "bg-gray-300",
                    ].join(" ")}
                    whileHover={{ scale: 1.15 }}
                    animate={isActive ? { scale: 1.15 } : { scale: 1 }}
                  >
                    <span className="text-white font-bold text-xs leading-none">
                      {event.year}
                    </span>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Content Section (fixed-height wrapper to avoid layout shift) */}
        <div
          className="relative overflow-hidden"
          style={{ height: containerHeight, transition: "height 0.3s ease" }}
        >
          <AnimatePresence custom={direction} initial={false} mode="popLayout">
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
                {/* Image side */}
                <div className="relative h-64 md:h-auto min-h-[240px]">
                  <Image
                    src={current.image || "/placeholder.svg"}
                    alt={current.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                    priority={activeIndex === 0}
                  />
                  {/* Safe gradient class (no dynamic string building) */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${col.gradFrom} to-transparent`}
                  />
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full flex items-center">
                    <Calendar className={`h-4 w-4 mr-1 ${col.accent}`} />
                    <span className="text-sm font-medium">{current.year}</span>
                  </div>
                </div>

                {/* Text side */}
                <div className="p-6">
                  <h4 className="text-2xl font-bold text-navy-900 mb-2">
                    {current.title}
                  </h4>

                  <motion.div
                    initial={{ height: 80, overflow: "hidden" as const }}
                    animate={{
                      height: isExpanded ? "auto" : 80,
                      overflow: isExpanded ? "visible" : "hidden",
                    }}
                  >
                    <p className="text-navy-700">{current.description}</p>
                  </motion.div>

                  {current.description.length > 120 && (
                    <button
                      onClick={() => setIsExpanded((s) => !s)}
                      className="mt-2 text-purple-600 hover:text-purple-800 flex items-center text-sm font-medium"
                      aria-expanded={isExpanded}
                    >
                      {isExpanded ? "Lexo më pak" : "Lexo më shumë"}
                      <ArrowRight
                        className={`ml-1 h-3 w-3 transition-transform ${
                          isExpanded ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-between">
          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className={[
              "flex items-center px-4 py-2 rounded-lg",
              activeIndex === 0
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-navy-900 text-white hover:bg-navy-800",
            ].join(" ")}
            aria-label="Eventi i mëparshëm"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            <span>Mëparshëm</span>
          </button>

          <button
            onClick={handleNext}
            disabled={activeIndex === events.length - 1}
            className={[
              "flex items-center px-4 py-2 rounded-lg",
              activeIndex === events.length - 1
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-navy-900 text-white hover:bg-navy-800",
            ].join(" ")}
            aria-label="Eventi tjetër"
          >
            <span>Tjetër</span>
            <ChevronRight className="h-5 w-5 ml-1" />
          </button>
        </div>

        {/* Screen reader live region */}
        <div className="sr-only" aria-live="polite">
          Po shfaqet eventi {current.year}: {current.title}
        </div>
      </div>
    </div>
  );
}
