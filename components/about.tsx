"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Rocket, MapPin, Mail, Linkedin } from "lucide-react";

const personalStatements = [
  "I BUILD.",
  "I LEAD.",
  "I LEARN.",
  "I SHIP.",
];

export default function About() {
  return (
    <section id="about" className="py-32 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto border-t border-white/10 relative overflow-x-clip">
      {/* Section Tag */}
      <div className="font-mono text-xs font-bold text-red-500 tracking-widest uppercase mb-4">
        02 / ABOUT
      </div>

      {/* Main Big Editorial Serif Headline */}
      <h2 className="font-serif section-clamp-serif font-black tracking-tight uppercase text-white mb-12 max-w-6xl">
        I BUILD PRODUCTS<span className="text-red-600 font-sans">.</span> <br />
        I LEAD TEAMS<span className="text-red-600 font-sans">.</span> <br />
        <span className="font-serif-italic text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-white">
          I'M LEARNING TO BUILD SYSTEMS.
        </span>
      </h2>

      {/* Personal Statements Badge Strip */}
      <div className="flex flex-wrap gap-2.5 sm:gap-4 mb-12 sm:mb-16">
        {personalStatements.map((stmt, idx) => (
          <motion.div
            key={stmt}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="px-4 py-2 sm:px-6 sm:py-3 rounded-full border border-red-600/30 bg-red-950/20 font-serif text-base sm:text-2xl font-black italic tracking-wider text-red-400"
          >
            {stmt}
          </motion.div>
        ))}
      </div>

      {/* Grid Layout: Editorial Bio Copy + Brand Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Bio Paragraphs */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-8 space-y-8 text-base sm:text-xl leading-relaxed text-neutral-300 font-sans"
        >
          <div className="p-5 sm:p-8 rounded-2xl border border-red-600/40 bg-gradient-to-r from-[#16090c] to-[#0d0d12] text-white font-serif font-bold text-lg sm:text-3xl border-l-4 sm:border-l-8 border-l-red-600 shadow-[0_10px_30px_rgba(220,38,38,0.15)] leading-snug">
            "I’m Durga S., a full-stack developer, product builder, and CTO & Co-Founder."
          </div>

          <p className="text-neutral-300">
            I started my journey as a PHP developer and evolved into full-stack engineering, building websites, software products and digital experiences.
          </p>

          <p className="text-neutral-300">
            Over time, my role expanded beyond development. As CTO & Co-Founder, I have worked across product development, system architecture, technical execution, team coordination, hiring, project management, client communication, marketing and brand building.
          </p>

          <div className="pt-4 border-t border-white/10 space-y-3">
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white uppercase tracking-wide">
              Now I’m taking the next step in my engineering journey: DevOps.
            </h3>
            <p className="text-neutral-400 text-base sm:text-lg">
              I’m focusing on Linux, networking, Git, Bash, Docker, CI/CD, cloud infrastructure, monitoring and automation — with the goal of becoming a strong DevOps Engineer.
            </p>
          </div>
        </motion.div>

        {/* Sidebar Info Card */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-4 p-8 rounded-3xl border border-white/10 bg-[#0d0d12] space-y-6"
        >
          <div className="font-mono text-xs font-bold text-red-500 uppercase tracking-widest border-b border-white/10 pb-3">
            BRAND ESSENTIALS
          </div>

          <div className="space-y-4">
            <div>
              <div className="font-mono text-[10px] text-neutral-500 uppercase">FULL NAME</div>
              <div className="font-serif text-3xl font-black text-white italic">Durga S.</div>
            </div>

            <div>
              <div className="font-mono text-[10px] text-neutral-500 uppercase">LOCATION</div>
              <div className="flex items-center gap-2 text-sm text-neutral-300 font-mono mt-0.5">
                <MapPin className="w-4 h-4 text-red-500" />
                <span>Trivandrum, Kerala, India</span>
              </div>
            </div>

            <div>
              <div className="font-mono text-[10px] text-neutral-500 uppercase">DIRECT EMAIL</div>
              <a
                href="mailto:d66190721@gmail.com"
                className="flex items-center gap-2 text-sm text-red-400 font-mono hover:underline mt-0.5"
              >
                <Mail className="w-4 h-4" />
                <span>d66190721@gmail.com</span>
              </a>
            </div>

            <div>
              <div className="font-mono text-[10px] text-neutral-500 uppercase">LINKEDIN</div>
              <a
                href="https://www.linkedin.com/in/durgasofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white font-mono hover:text-red-400 transition-colors mt-0.5"
              >
                <Linkedin className="w-4 h-4 text-red-500" />
                <span>linkedin.com/in/durgasofficial</span>
              </a>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 space-y-2.5">
            <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
              <ShieldCheck className="w-4 h-4 text-red-500" />
              <span>Full-Stack Engineering & CTO Experience</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
              <Rocket className="w-4 h-4 text-red-500" />
              <span>Actively Mastering Cloud & DevOps Systems</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
