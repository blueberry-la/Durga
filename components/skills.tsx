"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Compass, Palette, ShieldAlert } from "lucide-react";

const skillCategories = [
  {
    title: "Engineering",
    icon: Code2,
    skills: ["PHP", "Laravel", "MySQL", "JavaScript", "Next.js", "TypeScript", "REST APIs", "Git"],
  },
  {
    title: "Product",
    icon: Compass,
    skills: ["Strategy", "Architecture", "Execution", "UX Design", "MVPs", "Agile Roadmap", "Systems Design"],
  },
  {
    title: "Creative",
    icon: Palette,
    skills: ["Design System", "Video Editing", "Content Creation", "Branding", "Figma", "Premiere Pro", "Vector Art"],
  },
  {
    title: "Business",
    icon: ShieldAlert, // Let's use briefcase or similar or just keep it simple. Wait, briefcases or leader icon?
    skills: ["Leadership", "Growth", "Management", "Operations", "Consulting", "Startups", "Partnerships"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 bg-[#0A0A0A] overflow-hidden select-none">
      {/* Background glow */}
      <div className="absolute left-1/4 top-1/4 w-[35vw] h-[35vw] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-20 text-center">
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-accent-red font-semibold block mb-4">
            Stack
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl text-white tracking-tight leading-none mb-6">
            Skills &amp; Expertise
          </h2>
          <p className="font-sans text-xs sm:text-sm text-accent-muted max-w-md mx-auto font-light leading-relaxed">
            A comprehensive overview of engineering, product design, creative direction, and business administration.
          </p>
        </div>

        {/* Skill categories list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-8 rounded-3xl border border-white/5 bg-[#121212] flex flex-col justify-between hover:border-white/10 transition-all duration-300 shadow-xl"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                      <Icon className="w-4 h-4 text-accent-red" />
                    </div>
                    <h3 className="font-serif text-xl text-white">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {cat.skills.map((skill, sIdx) => (
                      <motion.span
                        key={sIdx}
                        whileHover={{ scale: 1.05, borderColor: "rgba(255, 59, 48, 0.4)", color: "#FFFFFF" }}
                        className="px-3 py-1.5 rounded-full border border-white/5 bg-white/[0.02] font-sans text-xs text-accent-muted transition-colors duration-200 cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 text-[9px] font-sans uppercase tracking-widest text-accent-muted">
                  Expertise Matrix
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
