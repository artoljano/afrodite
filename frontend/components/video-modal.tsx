// components/VideoModal.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose(): void;
  videoSrc: string;
  title: string;
}

export default function VideoModal({
  isOpen,
  onClose,
  videoSrc,
  title,
}: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mounted, setMounted] = useState(false);

  // we only render portal on client
  useEffect(() => {
    setMounted(true);
  }, []);

  // ESC key + lock scroll
  useEffect(() => {
    const handle = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handle);
    }
    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handle);
    };
  }, [isOpen, onClose]);

  // auto play / pause
  useEffect(() => {
    if (isOpen) videoRef.current?.play();
    else videoRef.current?.pause();
  }, [isOpen]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        // ============ backdrop ============
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          style={{ zIndex: 9999 }}
          className="
            fixed inset-0
            flex items-start justify-center
            pt-20 px-4 pb-4
            bg-black/70 backdrop-blur-sm
          "
        >
          {/* ========== modal card ========== */}
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="
              relative
              bg-black rounded-xl overflow-hidden
              aspect-[9/16] w-full max-w-sm
            "
          >
            {/* close */}
            <button
              onClick={onClose}
              aria-label="Close video"
              className="
                absolute top-2 right-2 z-10
                bg-black/50 text-white p-2 rounded-full
                hover:bg-black/80 transition-colors
              "
            >
              <X className="h-5 w-5" />
            </button>

            {/* video */}
            <video
              ref={videoRef}
              src={videoSrc}
              controls
              className="w-full h-full object-cover"
              autoPlay
              playsInline
            />

            {/* title bar */}
            <div className="absolute bottom-0 w-full bg-black/70 p-2 text-center">
              <h3 className="text-sm font-medium text-white truncate">
                {title}
              </h3>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
