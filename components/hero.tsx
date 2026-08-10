"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, MapPin, Terminal, Cpu } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax subtle text movement on scroll
  const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.15]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[95vh] flex flex-col justify-between pt-28 pb-16 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto overflow-x-clip"
    >
      {/* Ambient Crimson Illumination */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] md:w-[900px] h-[450px] bg-red-600/15 rounded-full blur-[170px] pointer-events-none -z-10 animate-pulse-slow" />

      {/* Top Meta Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8"
      >
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
          <MapPin className="w-3.5 h-3.5 text-red-500" />
          <span className="text-white font-semibold">TRIVANDRUM, KERALA, INDIA</span>
        </div>

        <div className="flex items-center gap-2 px-3.5 py-1 rounded-full border border-red-600/40 bg-red-950/30 text-[11px] font-mono text-red-400 tracking-wider">
          <span className="h-2 w-2 rounded-full bg-red-500 animate-ping" />
          <span>OPEN TO DEVOPS / CLOUD / ENGINEERING OPPORTUNITIES</span>
        </div>
      </motion.div>

      {/* Central Editorial Hero Statement */}
      <div className="my-auto py-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="inline-flex items-center gap-2 text-xs font-mono text-red-500 uppercase tracking-[0.25em] mb-4"
        >
          <Terminal className="w-4 h-4 text-red-500" />
          <span>LUXURY EDITORIAL ENGINEERING PORTFOLIO</span>
        </motion.div>

        {/* HIGH-CONTRAST EDITORIAL SERIF HEADLINE (BODONI MODA) */}
        <motion.div style={{ y: textY, opacity: textOpacity }} className="mb-8 select-none">
          <h1 className="font-serif hero-clamp-serif font-black tracking-tight text-white uppercase">
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: "100%", filter: "blur(12px)", opacity: 0 }}
                animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 1.0 }}
                className="block"
              >
                FROM <span className="font-serif-italic font-normal text-neutral-300">CODE</span>
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: "100%", filter: "blur(12px)", opacity: 0 }}
                animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 1.15 }}
                className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-white"
              >
                TO SYSTEMS<span className="text-red-600 font-sans">.</span>
              </motion.span>
            </div>
          </h1>
        </motion.div>

        {/* IDENTITY & ROLES (HIGH CONTRAST BOLD EDITORIAL) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="space-y-4 max-w-4xl"
        >
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-sm sm:text-base md:text-lg font-bold tracking-wider">
            <span className="font-serif text-3xl font-black text-white italic tracking-normal pr-1">
              Durga S.
            </span>
            <span className="text-red-600">/</span>
            <span className="text-neutral-300">FULL-STACK DEVELOPER</span>
            <span className="text-red-600">•</span>
            <span className="text-neutral-300">CTO & CO-FOUNDER</span>
            <span className="text-red-600">•</span>
            <span className="px-3 py-1 rounded bg-red-600/20 text-red-400 border border-red-600/40 text-xs sm:text-sm font-semibold">
              DEVOPS ENGINEER — NEXT TARGET
            </span>
          </div>

          <p className="text-neutral-300 text-base sm:text-xl leading-relaxed max-w-2xl font-sans">
            Building digital products, leading technical teams, and moving deeper into infrastructure, automation and cloud engineering.
          </p>
        </motion.div>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.45 }}
          className="flex flex-wrap items-center gap-4 pt-8"
        >
          <a
            href="#projects"
            data-cursor="DISCOVER WORK"
            className="group relative inline-flex items-center gap-3 px-9 py-4 rounded-xl bg-red-600 text-white font-mono text-xs font-bold uppercase tracking-widest overflow-hidden transition-all duration-300 hover:bg-red-700 hover:shadow-[0_0_40px_rgba(220,38,38,0.6)]"
          >
            <span>VIEW MY WORK</span>
            <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
          </a>

          <a
            href="https://www.linkedin.com/in/durgasofficial"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="LINKEDIN PROFILE"
            className="group inline-flex items-center gap-3 px-9 py-4 rounded-xl border border-white/15 bg-white/5 text-white font-mono text-xs font-bold uppercase tracking-widest backdrop-blur-sm transition-all duration-300 hover:border-red-600/60 hover:bg-white/10"
          >
            <span>MY LINKEDIN</span>
            <ArrowUpRight className="w-4 h-4 text-red-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>

      {/* Bottom Summary Strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div className="flex items-start gap-4">
          <div className="p-2.5 rounded-lg bg-neutral-900 border border-white/10 text-red-500">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <div className="font-mono text-xs text-neutral-500 uppercase tracking-wider">01 / FOUNDATION</div>
            <div className="font-serif font-bold text-white text-lg">Full-Stack & PHP</div>
            <p className="text-xs text-neutral-400 mt-0.5">Web apps, React, Next.js & Laravel</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="p-2.5 rounded-lg bg-neutral-900 border border-white/10 text-red-500">
            <Terminal className="w-5 h-5" />
          </div>
          <div>
            <div className="font-mono text-xs text-neutral-500 uppercase tracking-wider">02 / LEADERSHIP</div>
            <div className="font-serif font-bold text-white text-lg">CTO & Co-Founder</div>
            <p className="text-xs text-neutral-400 mt-0.5">CorePro Techno LLP — Product & Architecture</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="p-2.5 rounded-lg bg-red-950/40 border border-red-600/40 text-red-400">
            <span className="font-mono font-bold text-xs">TARGET</span>
          </div>
          <div>
            <div className="font-mono text-xs text-red-400 uppercase tracking-wider">03 / NEXT TARGET</div>
            <div className="font-serif font-bold text-white text-lg">DevOps & Cloud</div>
            <p className="text-xs text-neutral-400 mt-0.5">Linux, Containers, CI/CD & Automation</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
