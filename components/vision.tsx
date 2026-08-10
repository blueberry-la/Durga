"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function Vision() {
  return (
    <section id="vision" className="relative py-32 bg-[#0C0C0C] overflow-hidden select-none">
      {/* Huge Editorial Background Typography */}
      <div className="absolute inset-0 flex flex-col justify-between items-center pointer-events-none select-none z-0 py-16 opacity-5">
        <span className="text-stroke text-7xl sm:text-9xl xl:text-[180px] font-sans font-extrabold tracking-widest leading-none">
          BUILD
        </span>
        <span className="text-stroke text-7xl sm:text-9xl xl:text-[180px] font-sans font-extrabold tracking-widest leading-none">
          CREATE
        </span>
        <span className="text-stroke text-7xl sm:text-9xl xl:text-[180px] font-sans font-extrabold tracking-widest leading-none">
          SCALE
        </span>
      </div>

      {/* Red ambient light blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-[#FF3B30]/5 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="mb-24 text-left">
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-accent-red font-semibold block mb-4">
            Direction
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl text-white tracking-tight leading-none">
            Current Vision
          </h2>
        </div>

        {/* Split Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Block: CorePro Techno */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-between p-8 md:p-12 rounded-[40px] border border-white/5 bg-[#121212]/80 backdrop-blur-xl shadow-2xl hover:border-white/10 transition-all duration-300 group"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="font-sans text-xs uppercase tracking-widest text-accent-red font-semibold">
                  Co-Founder &amp; CTO
                </span>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-accent-red group-hover:border-accent-red transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-white mb-6 tracking-wide">
                COREPRO TECHNO LLP
              </h3>
              
              <p className="font-sans text-sm sm:text-base text-accent-muted font-light leading-relaxed mb-8">
                Leading software development, technical orchestration, and strategic execution. Creating durable solutions for business ventures.
              </p>

              <ul className="flex flex-col gap-4 font-sans text-xs sm:text-sm text-white/80">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4.5 h-4.5 text-accent-red" />
                  Product Engineering &amp; UX
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4.5 h-4.5 text-accent-red" />
                  Enterprise Systems Architecture
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4.5 h-4.5 text-accent-red" />
                  High Performance Team Leadership
                </li>
              </ul>
            </div>

            <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
              <span className="font-sans text-[10px] uppercase tracking-widest text-accent-muted">
                Role Focus
              </span>
              <span className="font-sans text-xs text-white">
                Tech &amp; Strategy
              </span>
            </div>
          </motion.div>

          {/* Right Block: IGNITES */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-between p-8 md:p-12 rounded-[40px] border border-white/5 bg-[#121212]/80 backdrop-blur-xl shadow-2xl hover:border-white/10 transition-all duration-300 group"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="font-sans text-xs uppercase tracking-widest text-accent-red font-semibold">
                  Founder Initiative
                </span>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-accent-red group-hover:border-accent-red transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-white mb-6 tracking-wide">
                IGNITES
              </h3>
              
              <p className="font-sans text-sm sm:text-base text-accent-muted font-light leading-relaxed mb-8">
                Turning ideas into validated digital products. Helping builders launch software, optimize operations, and secure growth.
              </p>

              <ul className="flex flex-col gap-4 font-sans text-xs sm:text-sm text-white/80">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4.5 h-4.5 text-accent-red" />
                  MVP Validation &amp; Architecture
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4.5 h-4.5 text-accent-red" />
                  Product Launch Consulting
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4.5 h-4.5 text-accent-red" />
                  Go-To-Market Execution
                </li>
              </ul>
            </div>

            <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
              <span className="font-sans text-[10px] uppercase tracking-widest text-accent-muted">
                Mission Focus
              </span>
              <span className="font-sans text-xs text-white">
                Launch &amp; Scaling
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
