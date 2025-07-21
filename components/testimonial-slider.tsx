"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Play, Star } from "lucide-react";
import VideoModalTestimonial from "./video-modal-testimonial";
import testimonials from "@/data/testimonials";

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const videoThumbRef = useRef<HTMLVideoElement>(null);

  const next = () => {
    if (videoModalOpen) return;
    setCurrent((c) => (c + 1) % testimonials.length);
  };
  const prev = () => {
    if (videoModalOpen) return;
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };

  // autoplay + pause on modal
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoplay && !videoModalOpen) interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [autoplay, videoModalOpen]);

  // pause autoplay if modal opens
  useEffect(() => {
    if (videoModalOpen) setAutoplay(false);
  }, [videoModalOpen]);

  // keyboard nav
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [videoModalOpen]);

  // reset thumbnail to first frame on slide change
  useEffect(() => {
    const vid = videoThumbRef.current;
    if (vid) {
      vid.currentTime = 0;
      vid.pause();
    }
  }, [current]);

  const currentTestimonial = testimonials[current];

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Prev */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 z-10"
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
      >
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="bg-white text-black p-3 rounded-full shadow-md hover:bg-purple-50 transition-colors"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      </div>

      {/* Slider */}
      <div
        className="overflow-hidden py-12"
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-8 md:p-12 relative"
          >
            {/* Avatar / Thumbnail */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-100 rounded-bl-full opacity-50" />
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-purple-100 rounded-tr-full opacity-50" />
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="md:w-1/3 flex flex-col items-center text-center">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-purple-100 mb-4">
                  {currentTestimonial.hasVideo ? (
                    <video
                      ref={videoThumbRef}
                      src={currentTestimonial.videoSrc}
                      muted
                      playsInline
                      preload="metadata"
                      className="object-contain w-full h-full bg-black"
                      // pick about 0.05s for ~second frame, 0.1s for ~third frame at 30fps
                      onLoadedMetadata={() => {
                        const vid = videoThumbRef.current;
                        if (vid) {
                          // jump to ~third frame (adjust as needed)
                          vid.currentTime = 1;
                        }
                      }}
                      onSeeked={() => {
                        // once we’ve seeked, pause so it stays on that frame
                        videoThumbRef.current?.pause();
                      }}
                    />
                  ) : (
                    <Image
                      src={currentTestimonial.avatar}
                      alt={currentTestimonial.name}
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  )}
                  {currentTestimonial.hasVideo && (
                    <button
                      onClick={() => {
                        setAutoplay(false);
                        setVideoModalOpen(true);
                      }}
                      aria-label="Play video testimonial"
                      className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-colors"
                    >
                      <div className="bg-white/80 rounded-full p-1.5 transition-all duration-300">
                        <Play className="h-4 w-4 text-purple-600 fill-purple-600" />
                      </div>
                    </button>
                  )}
                </div>
                <h4 className="text-lg font-bold font-poppins text-gray-900">
                  {currentTestimonial.name}
                </h4>
                <p className="text-gray-600 mb-2">{currentTestimonial.role}</p>
                <div className="flex items-center justify-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < currentTestimonial.rating
                          ? "text-yellow-500 fill-yellow-500"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                {currentTestimonial.location && (
                  <p className="text-sm text-gray-500 mt-2">
                    {currentTestimonial.location}
                  </p>
                )}
              </div>

              {/* Content */}
              <div className="md:w-2/3">
                <Quote className="h-10 w-10 text-purple-200 mb-4" />
                <p className="text-lg md:text-xl text-gray-700 mb-6 italic">
                  "{currentTestimonial.content}"
                </p>
                <div className="flex items-center justify-between mt-8">
                  <div className="text-sm text-gray-500">
                    Student i diplomuar, {new Date().getFullYear() - 1}
                  </div>
                  {currentTestimonial.hasVideo && (
                    <button
                      onClick={() => {
                        setAutoplay(false);
                        setVideoModalOpen(true);
                      }}
                      className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
                    >
                      Shiko videon e plotë
                      <Play className="ml-2 h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 z-10"
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
      >
        <button
          onClick={next}
          aria-label="Next testimonial"
          className="bg-white text-black p-3 rounded-full shadow-md hover:bg-purple-50 transition-colors"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-colors ${
              i === current ? "bg-purple-600" : "bg-gray-200"
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>

      {/* Story Modal */}
      <VideoModalTestimonial
        isOpen={videoModalOpen}
        onClose={() => {
          setVideoModalOpen(false);
          setAutoplay(true);
        }}
        videoSrc={currentTestimonial.videoSrc}
        title={`${currentTestimonial.name} – Historia e Suksesit`}
      />
    </div>
  );
}
