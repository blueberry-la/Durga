"use client";

import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Instagram, ArrowUpRight } from "lucide-react";

const topics = [
  "Linux",
  "DevOps",
  "Cloud",
  "Docker",
  "CI/CD",
  "Automation",
  "Engineering Projects",
];

const socials = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/durgasofficial",
    icon: Linkedin,
    badge: "PRIMARY SOCIAL / CAREER UPDATES",
    isPrimary: true,
  },
  {
    name: "GitHub",
    url: "https://github.com",
    icon: Github,
    badge: "GITHUB PROFILE PLACEHOLDER",
    isPrimary: false,
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    icon: Instagram,
    badge: "INSTAGRAM PLACEHOLDER",
    isPrimary: false,
  },
];

export default function LearningPublic() {
  return (
    <section className="py-32 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto border-t border-white/10 relative overflow-x-clip">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column Text & Topics */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="font-mono text-xs font-bold text-red-500 tracking-widest uppercase">
            PUBLIC CONTENT & UPDATES
          </div>

          <h2 className="font-serif section-clamp-serif font-black uppercase text-white tracking-tight">
            LEARNING IN <span className="font-serif-italic text-red-500">PUBLIC.</span>
          </h2>

          <p className="text-neutral-300 font-sans text-base sm:text-xl leading-relaxed max-w-2xl">
            Documenting my journey from full-stack development and technical leadership into DevOps engineering.
          </p>

          <div>
            <div className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-3">
              TOPICS I COVER & DOCUMENT:
            </div>
            <div className="flex flex-wrap gap-2">
              {topics.map((topic) => (
                <span
                  key={topic}
                  className="font-mono text-xs px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-neutral-200 hover:border-red-500/50 hover:bg-red-950/20 transition-all"
                >
                  #{topic}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column Social Cards */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 space-y-4"
        >
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor={s.name.toUpperCase()}
                className={`group flex items-center justify-between p-6 sm:p-8 rounded-3xl border transition-all duration-300 ${
                  s.isPrimary
                    ? "bg-gradient-to-r from-[#17090c] to-[#0d0d12] border-red-600/60 hover:shadow-[0_10px_30px_rgba(220,38,38,0.2)]"
                    : "bg-[#0d0d12] border-white/10 hover:border-white/20"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 rounded-xl border ${
                      s.isPrimary
                        ? "bg-red-600 text-white border-red-500"
                        : "bg-neutral-900 border-white/10 text-neutral-400 group-hover:text-white"
                    }`}
                  >
                    {Icon && <Icon className="w-5 h-5" />}
                  </div>
                  <div>
                    <div className="font-serif font-bold text-white text-xl">{s.name}</div>
                    <div className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider">
                      {s.badge}
                    </div>
                  </div>
                </div>

                <ArrowUpRight className="w-5 h-5 text-red-500 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
