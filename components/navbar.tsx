"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "ABOUT", href: "#about" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "PROJECTS", href: "#projects" },
  { name: "SKILLS", href: "#skills" },
  { name: "DEVOPS", href: "#devops" },
  { name: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section observer logic
      const sections = ["about", "experience", "projects", "skills", "devops", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-4 md:px-10 py-4 transition-all duration-300 pointer-events-none"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
          {/* Logo / Brand Name in Luxury Bodoni Serif */}
          <a
            href="#"
            className="group flex items-center gap-2 font-serif text-xl sm:text-2xl tracking-wider font-black text-white transition-opacity hover:opacity-90 italic"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
            </span>
            <span>Durga S.</span>
          </a>

          {/* Desktop Navigation Links */}
          <div
            className={`hidden md:flex items-center gap-7 px-7 py-3 rounded-full border transition-all duration-300 backdrop-blur-md ${scrolled
                ? "bg-[#08080a]/90 border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
                : "bg-[#08080a]/40 border-white/5"
              }`}
          >
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-mono text-xs font-semibold tracking-widest transition-colors duration-200 relative py-1 ${isActive ? "text-white" : "text-neutral-400 hover:text-white"
                    }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-red-600 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Action CTA & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/durgasofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1.5 px-4 py-2 rounded-full border border-red-600/30 bg-red-950/20 text-red-400 hover:bg-red-600 hover:text-white font-mono text-xs uppercase tracking-wider transition-all duration-300"
            >
              <span>LINKEDIN</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex items-center justify-center w-11 h-11 rounded-full border border-white/10 bg-[#08080a]/90 text-white backdrop-blur-md hover:border-red-600/50 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5 text-red-500" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-4 top-20 z-40 p-6 rounded-3xl bg-[#0d0d12]/95 border border-white/10 backdrop-blur-2xl md:hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)] max-h-[calc(100vh-6rem)] overflow-y-auto"
          >
            <div className="flex flex-col gap-4">
              <div className="text-[10px] font-mono text-red-500 uppercase tracking-widest border-b border-white/5 pb-2">
                NAVIGATION
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-serif text-2xl font-bold tracking-wider text-neutral-300 hover:text-white transition-all italic"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-3.5 rounded-xl bg-red-600 text-white font-mono text-xs font-bold text-center tracking-widest uppercase hover:bg-red-700 transition-colors"
                >
                  LET'S CONNECT
                </a>
                <a
                  href="https://www.linkedin.com/in/durgasofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-3.5 rounded-xl border border-white/10 text-neutral-300 font-mono text-xs text-center tracking-widest uppercase flex items-center justify-center gap-1.5"
                >
                  <span>LINKEDIN PROFILE</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-red-500" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
