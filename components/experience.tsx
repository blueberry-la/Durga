"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, Building2, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    role: "CO-FOUNDER & CTO",
    company: "CorePro Techno LLP",
    period: "June 2025 — Present",
    type: "Leadership & Technical Operations",
    badge: "CURRENT ROLE",
    badgeStyle: "bg-red-600/20 text-red-400 border-red-600/40",
    description:
      "Leading end-to-end technical execution, product architectural direction, team coordination and business growth strategy.",
    responsibilities: [
      "Product development",
      "System architecture",
      "Technical execution",
      "Full-stack development",
      "Website development",
      "Website maintenance",
      "Team leadership",
      "Team coordination",
      "Hiring process",
      "Project management",
      "Client meetings",
      "Client communication",
      "Technical decision-making",
      "Brand building",
      "SEO",
      "Google Analytics",
      "Marketing coordination",
    ],
  },
  {
    role: "PHP DEVELOPER INTERN",
    company: "Nass Online Practise Pvt Ltd",
    period: "April 2025 — June 2025",
    type: "Software Engineering Internship",
    badge: "INTERNSHIP",
    badgeStyle: "bg-white/10 text-neutral-300 border-white/20",
    description:
      "Hands-on web application development with PHP and Laravel framework, working on client projects and software maintenance.",
    responsibilities: [
      "PHP development",
      "Laravel framework implementation",
      "Software development tasks",
      "Working with Laravel-based software",
      "Handling software development tasks",
      "Debugging and code maintenance",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10 relative">
      {/* Section Tag & Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="font-mono text-xs font-bold text-red-500 tracking-widest uppercase mb-2">
            03 / EXPERIENCE
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight uppercase text-white">
            PROVEN ROLES & <br />
            <span className="text-neutral-400">TECHNICAL LEADERSHIP.</span>
          </h2>
        </div>

        <div className="font-mono text-xs text-neutral-400 max-w-xs border-l-2 border-red-600 pl-4 py-1">
          Authentic career history across full-stack development, software engineering and executive leadership.
        </div>
      </div>

      {/* Experience Cards */}
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.role}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="p-8 rounded-2xl border border-white/10 bg-[#0d0d12] hover:border-red-600/40 transition-all duration-300 space-y-6"
          >
            {/* Header Info Bar */}
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className={`font-mono text-[11px] font-bold px-3 py-1 rounded-full border ${exp.badgeStyle}`}>
                    {exp.badge}
                  </span>
                  <span className="font-mono text-xs text-neutral-400">{exp.type}</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-wide">
                  {exp.role}
                </h3>
                <div className="flex items-center gap-2 font-mono text-sm text-red-400 font-semibold mt-1">
                  <Building2 className="w-4 h-4" />
                  <span>{exp.company}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs text-neutral-300 px-4 py-2 rounded-xl bg-neutral-900 border border-white/10">
                <Calendar className="w-4 h-4 text-red-500" />
                <span>{exp.period}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-neutral-300 font-sans text-base leading-relaxed">
              {exp.description}
            </p>

            {/* Responsibilities Grid */}
            <div>
              <div className="font-mono text-xs text-neutral-400 uppercase tracking-widest mb-4">
                AREAS OF RESPONSIBILITY & SKILLS:
              </div>
              <div className="flex flex-wrap gap-2">
                {exp.responsibilities.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 font-mono text-xs text-neutral-200 hover:border-red-500/50 hover:bg-red-950/20 transition-all"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
