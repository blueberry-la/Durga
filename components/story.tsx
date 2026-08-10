"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Code2, Rocket, Share2, Compass, Layers } from "lucide-react";

const timelineEvents = [
  {
    step: "01",
    label: "The Beginning",
    title: "PHP Full Stack Developer",
    desc: "Began coding core web architectures, building solid fundamentals in server logic, databases, and structural code design.",
    icon: Code2,
  },
  {
    step: "02",
    label: "Growth",
    title: "Production Applications",
    desc: "Designed and engineered reliable customer-facing apps. Implemented robust databases and customized API services.",
    icon: Layers,
  },
  {
    step: "03",
    label: "Focus Shift",
    title: "Transition to Product Thinking",
    desc: "Moved beyond code syntax to look at system UX, solution longevity, business constraints, and product-market fit.",
    icon: Compass,
  },
  {
    step: "04",
    label: "The Leap",
    title: "Co-Founded CorePro Techno LLP",
    desc: "Co-founded a professional technology agency, taking charge of end-to-end engineering, hiring, and project execution.",
    icon: Share2,
  },
  {
    step: "05",
    label: "Present",
    title: "CTO & Startup Builder",
    desc: "Currently leading product architecture, scaling CorePro, and launching the IGNITES startup incubator initiative.",
    icon: Rocket,
  },
];

export default function Story() {
  return (
    <section id="about" className="relative min-h-screen py-28 bg-[#0C0C0C] overflow-hidden select-none">
      {/* Background glow */}
      <div className="absolute right-0 top-1/3 w-[30vw] h-[30vw] bg-[#FF3B30]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-20 text-left">
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-accent-red font-semibold block mb-4">
            The Journey
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl text-white tracking-tight leading-none">
            Started as a Developer.
          </h2>
        </div>

        {/* Narrative Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Timeline */}
          <div className="lg:col-span-8 relative pl-6 border-l border-white/5 flex flex-col gap-12">
            {timelineEvents.map((event, idx) => {
              const Icon = event.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline point indicator */}
                  <div className="absolute -left-[31px] top-0 w-4.5 h-4.5 rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:border-accent-red">
                    <div className="w-1.5 h-1.5 rounded-full bg-white group-hover:bg-accent-red transition-all" />
                  </div>

                  <div className="flex flex-col items-start">
                    <span className="font-sans text-[9px] uppercase tracking-widest text-accent-red font-medium mb-1">
                      {event.label}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-white mb-2 tracking-wide font-normal group-hover:text-accent-red transition-colors duration-200">
                      {event.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-accent-muted leading-relaxed font-light max-w-xl">
                      {event.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Quote Section */}
          <div className="lg:col-span-4 lg:sticky lg:top-36 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-8 rounded-3xl border border-white/5 bg-[#121212] relative overflow-hidden shadow-2xl"
            >
              <div className="absolute -top-10 -left-6 font-serif text-[120px] text-white/5 select-none leading-none">
                &ldquo;
              </div>
              <p className="font-serif text-2xl sm:text-3xl text-white italic relative z-10 leading-snug mb-6">
                I don&rsquo;t just build websites. I build products, systems, and opportunities.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-accent-red" />
                <span className="font-sans text-[10px] uppercase tracking-widest text-accent-muted">
                  Durga . S Narrative
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
