"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);

      // Show tooltip after button appears
      const tooltipTimer = setTimeout(() => {
        setShowTooltip(true);

        // Hide tooltip after 5 seconds
        const hideTooltipTimer = setTimeout(() => {
          setShowTooltip(false);
        }, 5000);

        return () => clearTimeout(hideTooltipTimer);
      }, 1000);

      return () => clearTimeout(tooltipTimer);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-6 right-6 z-50"
        >
          {/* <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: -10 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-full mr-3 bottom-2 bg-white rounded-lg shadow-lg p-3 max-w-xs"
              >
                <div className="flex items-start">
                  <div className="flex-1">
                    <p className="text-gray-800 font-medium">
                      Keni nevojë për ndihmë?
                    </p>
                    <p className="text-gray-600 text-sm">
                      Na kontaktoni në WhatsApp për informacione të mëtejshme.
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setShowTooltip(false);
                    }}
                    className="ml-2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <div className="absolute right-0 top-1/2 -mr-2 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-4 h-4 bg-white"></div>
              </motion.div>
            )}
          </AnimatePresence> */}

          <a
            href="https://wa.me/35569204353"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors relative"
            aria-label="Contact us on WhatsApp"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <MessageCircle className="h-8 w-8 text-white" />
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
                repeatDelay: 1,
              }}
              className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white"
            ></motion.span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
