"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Cpu, Layers, Palette, Video, Megaphone, Share2 } from "lucide-react";

const services = [
  {
    title: "Founder",
    icon: Sparkles,
    desc: "Directing tech-forward companies. Formulating vision, building strategic structures, and aligning solutions to real user problems.",
  },
  {
    title: "CTO",
    icon: Cpu,
    desc: "Overseeing complete architecture, choosing scalable frameworks, mentoring engineering squads, and setting technical strategy.",
  },
  {
    title: "Full Stack Builder",
    icon: Layers,
    desc: "Writing high-grade backend modules (PHP, Laravel) and modular frontend views (React, Next.js, Tailwind, TypeScript).",
  },
  {
    title: "Graphic Designer",
    icon: Palette,
    desc: "Designing bespoke editorial styles, UI prototypes, branding materials, and minimal premium digital assets.",
  },
  {
    title: "Video Editor",
    icon: Video,
    desc: "Directing, splicing, and formatting cinematic shorts, explainers, and high-impact promotion assets.",
  },
  {
    title: "Digital Marketer",
    icon: Megaphone,
    desc: "Formulating conversion tactics, launch blueprints, search optimization, and growth metrics.",
  },
  {
    title: "Digital Creator",
    icon: Share2,
    desc: "Generating content for software developers and tech audiences. Fostering startup communities and mentoring.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 bg-[#0A0A0A] overflow-hidden select-none">
      {/* Background visual glows */}
      <div className="absolute left-0 bottom-1/4 w-[35vw] h-[35vw] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-20 text-center">
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-accent-red font-semibold block mb-4">
            Capabilities
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl text-white tracking-tight leading-none mb-6">
            What I Do
          </h2>
          <p className="font-sans text-xs sm:text-sm text-accent-muted max-w-lg mx-auto font-light leading-relaxed">
            Bridging technical execution, business strategy, and visual design to create products that impact industries.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-3xl border border-white/5 bg-[#121212] p-8 flex flex-col justify-between transition-all duration-300 hover:border-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] cursor-pointer"
              >
                {/* Accent red glow border element on hover */}
                <div className="absolute inset-0 rounded-3xl border border-accent-red/0 group-hover:border-accent-red/25 transition-all duration-300 pointer-events-none z-10" />
                
                {/* Glow aura */}
                <div className="absolute inset-0 bg-accent-red/0 group-hover:bg-accent-red/[0.02] rounded-3xl blur-xl transition-all duration-300 pointer-events-none" />

                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-accent-red group-hover:border-accent-red transition-all duration-300">
                    <Icon className="w-5 h-5 text-white transition-colors duration-300" />
                  </div>

                  <h3 className="font-serif text-2xl text-white mb-3 group-hover:text-accent-red transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="font-sans text-xs sm:text-sm text-accent-muted font-light leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-1.5 text-[10px] font-sans uppercase tracking-widest text-white/50 group-hover:text-white transition-colors duration-300 font-medium">
                  Learn More
                  <span className="translate-x-0 group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
