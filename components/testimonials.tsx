"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Engineering meets execution. Durga translates complex requirements into highly structured database layouts and efficient frontends in record time.",
    author: "Startup Director",
    role: "CorePro Techno Partner",
  },
  {
    quote: "Technology with business thinking. Unlike developers who just write code, Durga understands market validation, MVP speed, and operational cost management.",
    author: "Co-Founder",
    role: "IGNITES Cohort Initiative",
  },
  {
    quote: "Building beyond code. From graphic designs and video formatting to complete systems development, Durga manages product creation comprehensively.",
    author: "Marketing Director",
    role: "Digital Scale Launch",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-32 bg-[#0C0C0C] overflow-hidden select-none">
      {/* Background visual light */}
      <div className="absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-24 text-center">
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-accent-red font-semibold block mb-4">
            Testimonials
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl text-white tracking-tight leading-none mb-6">
            Building Beyond Code
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-8 rounded-[36px] border border-white/5 bg-[#121212] flex flex-col justify-between hover:border-white/10 transition-all duration-300 shadow-xl group"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 mb-8 text-accent-red">
                  <Quote className="w-4 h-4 fill-accent-red/20" />
                </div>

                <p className="font-serif text-lg sm:text-xl text-white/90 leading-relaxed italic mb-8">
                  &ldquo;{test.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 flex flex-col items-start select-none">
                <span className="font-sans text-xs text-white font-medium">
                  {test.author}
                </span>
                <span className="font-sans text-[10px] text-accent-muted uppercase tracking-widest mt-1">
                  {test.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
