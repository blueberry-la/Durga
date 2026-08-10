"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollIndicator() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  return (
    <>
      {/* Top Red Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red-700 via-red-500 to-rose-400 z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Subtle Desktop Cursor Glow (hidden on touch devices) */}
      {isVisible && (
        <div
          className="fixed top-0 left-0 w-8 h-8 rounded-full border border-red-500/40 bg-red-600/10 pointer-events-none z-[99] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 hidden md:block"
          style={{
            transform: `translate3d(${mousePosition.x}px, ${mousePosition.x ? mousePosition.y : -100}px, 0) translate(-50%, -50%)`,
          }}
        />
      )}
    </>
  );
}
