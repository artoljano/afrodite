"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";
import { partners } from "@/data/partners";

interface Partner {
  emri: string;
  logoImg: string;
  cardPicture: string;
  pershkrimi: string;
  width?: number;
  height?: number;
}

interface PartnerLogosCarouselProps {
  className?: string;
}

export default function PartnerLogosCarousel({
  className = "",
}: PartnerLogosCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const speed = useRef(100);
  const frozen = useRef(false);
  const scrollTimer = useRef<NodeJS.Timeout | null>(null);

  const [scrollWidth, setScrollWidth] = useState(0);
  const [isHoveringContainer, setIsHoveringContainer] = useState(false);
  const [activePartner, setActivePartner] = useState<Partner | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const allPartners = [...partners, ...partners];

  // Determine scrollable width
  useEffect(() => {
    if (scrollRef.current) {
      setScrollWidth(scrollRef.current.scrollWidth / 2);
    }
  }, []);

  // Update scroll speed based on interaction state
  const updateSpeed = () => {
    if (activePartner) {
      speed.current = 0;
      frozen.current = true;
    } else if (isHoveringContainer) {
      speed.current = 20;
      frozen.current = false;
    } else {
      speed.current = 100;
      frozen.current = false;
    }
  };

  // React to state changes
  useEffect(() => {
    updateSpeed();
  }, [activePartner, isHoveringContainer]);

  // Animate scroll
  useAnimationFrame((t, delta) => {
    if (frozen.current) return;

    const moveBy = (speed.current * delta) / 1000;
    const current = x.get();
    const next = current - moveBy;

    if (Math.abs(next) >= scrollWidth) {
      x.set(0);
    } else {
      x.set(next);
    }
  });

  // Handle mouse scroll detection to disable hover-triggered modal
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      if (scrollTimer.current) clearTimeout(scrollTimer.current);
      scrollTimer.current = setTimeout(() => setIsScrolling(false), 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimer.current) clearTimeout(scrollTimer.current);
    };
  }, []);

  useEffect(() => {
    if (activePartner) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [activePartner]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActivePartner(null);
        setIsHoveringContainer(false);
      }
    };

    if (activePartner) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activePartner]);

  return (
    <div
      className={`overflow-hidden relative ${className}`}
      onMouseEnter={() => {
        setIsHoveringContainer(true);
        updateSpeed();
      }}
      onMouseLeave={() => {
        setIsHoveringContainer(false);
        updateSpeed();
      }}
    >
      <div
        ref={scrollRef}
        className="flex items-center overflow-x-auto touch-pan-x scroll-smooth scrollbar-none"
      >
        <motion.div className="flex items-center space-x-8 py-6" style={{ x }}>
          {allPartners.map((partner, index) => (
            <div
              key={`${partner.emri}-${index}`}
              className="relative"
              onMouseEnter={() => {
                if (!isScrolling) {
                  setActivePartner(partner);
                  updateSpeed();
                }
              }}
            >
              <div className="bg-white rounded-lg px-6 py-4 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center min-w-[180px] h-24 cursor-pointer">
                {partner.logoImg ? (
                  <Image
                    src={partner.logoImg}
                    alt={partner.emri}
                    width={partner.width || 160}
                    height={partner.height || 80}
                    className="max-h-16 object-contain"
                  />
                ) : (
                  <div className="w-[160px] h-[80px] bg-gray-100 rounded flex items-center justify-center text-xs text-gray-400">
                    Pa logo
                  </div>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activePartner && (
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6"
          >
            <div
              className="relative bg-white rounded-xl shadow-xl w-full max-w-md mx-auto overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => {
                  setActivePartner(null);
                  setIsHoveringContainer(false);
                }}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10 text-2xl"
              >
                &times;
              </button>

              {/* Image */}
              <div className="relative w-full h-[50vh] md:h-[65vh] overflow-hidden">
                <Image
                  src={activePartner.cardPicture}
                  alt={activePartner.emri}
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Text Content */}
              <div className="p-6 h-[200px] overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 scrollbar-thumb-rounded">
                <h3 className="text-2xl font-bold font-poppins text-gray-900 mb-1">
                  {activePartner.emri}
                </h3>
                <p className="text-gray-600 text-sm">
                  {activePartner.pershkrimi}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
