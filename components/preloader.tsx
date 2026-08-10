"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Short loading timer (1.8s) for punchy cinematic entry
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", opacity: 0.9 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-[#050507] text-white select-none overflow-hidden"
        >
          {/* Subtle Background Glow */}
          <div className="absolute w-[400px] h-[400px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

          {/* Name Reveal */}
          <div className="overflow-hidden mb-6 px-4">
            <motion.h1
              initial={{ y: "100%", opacity: 0, filter: "blur(10px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="font-display text-4xl sm:text-6xl md:text-8xl font-black tracking-widest text-center uppercase"
            >
              DURGA S<span className="text-red-600">.</span>
            </motion.h1>
          </div>

          {/* Expanding Red Horizontal Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1], delay: 0.3 }}
            className="w-48 sm:w-72 h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent origin-center mb-6"
          />

          {/* Subtitle Tag */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="font-mono text-xs sm:text-sm text-neutral-400 uppercase tracking-[0.3em]"
          >
            FROM CODE TO SYSTEMS
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
