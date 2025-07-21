"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Briefcase, Calendar } from "lucide-react";

interface AlumniProfile {
  id: number;
  name: string;
  graduationYear: string;
  profession: string;
  testimonial: string;
  image: string;
}

const alumni: AlumniProfile[] = [
  {
    id: 1,
    name: "Elira Hoxha",
    graduationYear: "2018",
    profession: "Makeup Artist",
    testimonial:
      "Akademia Afrodite ndryshoi jetën time. Sot jam makeup artist në një televizion kombëtar dhe punoj me klientë VIP.",
    image: "/placeholder.svg?height=100&width=100&text=Elira",
  },
  {
    id: 2,
    name: "Gentian Berisha",
    graduationYear: "2019",
    profession: "Salon Owner",
    testimonial:
      "Pas diplomimit në Afrodite Academy, hapa sallonin tim të bukurisë që tani ka 5 punëtorë dhe klientelë besnikë.",
    image: "/placeholder.svg?height=100&width=100&text=Gentian",
  },
  {
    id: 3,
    name: "Anisa Krasniqi",
    graduationYear: "2020",
    profession: "Esthetician",
    testimonial:
      "Trajnimet praktike dhe kontaktet që krijova në Afrodite Academy më ndihmuan të gjej punë menjëherë pas diplomimit.",
    image: "/placeholder.svg?height=100&width=100&text=Anisa",
  },
  {
    id: 4,
    name: "Dritan Leka",
    graduationYear: "2017",
    profession: "Beauty Brand Ambassador",
    testimonial:
      "Sot përfaqësoj një markë ndërkombëtare kozmetike në Shqipëri, falë njohurive dhe rrjetit që krijova në Afrodite Academy.",
    image: "/placeholder.svg?height=100&width=100&text=Dritan",
  },
  {
    id: 5,
    name: "Teuta Shala",
    graduationYear: "2021",
    profession: "Nail Art Specialist",
    testimonial:
      "Afrodite Academy më mësoi jo vetëm aspektin teknik, por edhe menaxhimin e biznesit dhe komunikimin me klientët.",
    image: "/placeholder.svg?height=100&width=100&text=Teuta",
  },
];

export default function AlumniCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(200);

  // Show 3 alumni at a time on desktop, 1 on mobile
  const displayCount =
    typeof window !== "undefined" && window.innerWidth >= 768 ? 3 : 1;

  const nextSlide = () => {
    setPrevIndex(currentIndex);
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + displayCount >= alumni.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setPrevIndex(currentIndex);
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0 ? alumni.length - displayCount : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Add keyboard navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  // Update container height when content changes
  useEffect(() => {
    if (containerRef.current) {
      const updateHeight = () => {
        if (containerRef.current) {
          const height = containerRef.current.scrollHeight;
          setContainerHeight(height);
        }
      };

      // Update after a short delay to ensure content is rendered
      const timer = setTimeout(updateHeight, 100);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  // Get visible alumni based on current index and display count
  const getVisibleAlumni = () => {
    const visibleAlumni = [];
    for (let i = 0; i < displayCount; i++) {
      const index = (currentIndex + i) % alumni.length;
      visibleAlumni.push(alumni[index]);
    }
    return visibleAlumni;
  };

  const variants = {
    enter: (direction: "left" | "right") => ({
      x: direction === "right" ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: "left" | "right") => ({
      x: direction === "right" ? -300 : 300,
      opacity: 0,
      position: "absolute",
      width: "100%",
    }),
  };

  return (
    <div className="relative w-full py-8">
      <h3 className="text-2xl font-bold font-poppins text-navy-900 mb-8 text-center">
        Histori Suksesi nga Alumni
      </h3>

      <div
        className="relative overflow-hidden"
        style={{ height: containerHeight, transition: "height 0.3s ease" }}
      >
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={currentIndex}
            ref={containerRef}
            custom={direction}
            // variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "tween", duration: 0.5 }}
            className="flex flex-col md:flex-row gap-6 w-full"
          >
            {getVisibleAlumni().map((alumnus) => (
              <div
                key={alumnus.id}
                className="bg-white rounded-xl shadow-md p-6 flex-1 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500 mr-4">
                    <Image
                      src={alumnus.image || "/placeholder.svg"}
                      alt={alumnus.name}
                      width={100}
                      height={100}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900">{alumnus.name}</h4>
                    <div className="flex items-center text-sm text-navy-600">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>Diplomuar {alumnus.graduationYear}</span>
                    </div>
                    <div className="flex items-center text-sm text-purple-600">
                      <Briefcase className="h-3 w-3 mr-1" />
                      <span>{alumnus.profession}</span>
                    </div>
                  </div>
                </div>
                <p className="text-navy-700 italic text-sm">
                  "{alumnus.testimonial}"
                </p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
        <div className="sr-only" aria-live="polite">
          Showing alumni profile of {getVisibleAlumni()[0]?.name}, graduated in{" "}
          {getVisibleAlumni()[0]?.graduationYear}, now working as{" "}
          {getVisibleAlumni()[0]?.profession}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md z-10"
        aria-label="Previous alumni"
        tabIndex={0}
      >
        <ChevronLeft className="h-5 w-5 text-navy-900" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md z-10"
        aria-label="Next alumni"
        tabIndex={0}
      >
        <ChevronRight className="h-5 w-5 text-navy-900" />
      </button>

      <div className="flex justify-center mt-6 space-x-2">
        {alumni.map(
          (_, index) =>
            index % displayCount === 0 && (
              <button
                key={index}
                onClick={() => {
                  setPrevIndex(currentIndex);
                  setDirection(index > currentIndex ? "right" : "left");
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-purple-500" : "bg-navy-200"
                }`}
                aria-label={`Go to alumni slide ${index + 1}`}
              />
            )
        )}
      </div>
    </div>
  );
}
