"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on desktop devices with fine pointers
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("a, button, [role='button'], [data-cursor]");
      if (interactive) {
        setIsHovered(true);
        const text = interactive.getAttribute("data-cursor");
        setCursorText(text || "");
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[999] hidden md:flex items-center justify-center rounded-full mix-blend-difference"
      animate={{
        x: mousePosition.x - (isHovered ? (cursorText ? 50 : 25) : 10),
        y: mousePosition.y - (isHovered ? (cursorText ? 50 : 25) : 10),
        width: isHovered ? (cursorText ? 100 : 50) : 20,
        height: isHovered ? (cursorText ? 100 : 50) : 20,
        backgroundColor: isHovered ? "rgba(220, 38, 38, 0.9)" : "rgba(255, 255, 255, 0.85)",
      }}
      transition={{ type: "spring", stiffness: 450, damping: 28, mass: 0.5 }}
    >
      {cursorText && (
        <span className="font-mono text-[10px] font-bold tracking-tighter uppercase text-white text-center px-1">
          {cursorText}
        </span>
      )}
    </motion.div>
  );
}
