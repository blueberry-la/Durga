"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Code2, Users, Server, CheckCircle2 } from "lucide-react";

const chapters = [
  {
    number: "01",
    title: "FULL-STACK PHP DEVELOPER",
    company: "Software & Web Engineering",
    period: "FOUNDATION PHASE",
    icon: Code2,
    badge: "ENGINEERING FOUNDATION",
    badgeColor: "border-white/20 bg-white/5 text-neutral-300",
    tags: ["PHP", "Laravel", "MySQL", "JavaScript", "React", "Next.js"],
    description:
      "Started with PHP development and progressed into full-stack web development, building and maintaining websites and software products.",
    highlights: [
      "Building full-stack web applications and interactive UIs",
      "Database schema design and backend API development",
      "Software maintenance, feature enhancements and bug fixes",
    ],
  },
  {
    number: "02",
    title: "CTO & CO-FOUNDER",
    company: "CorePro Techno LLP",
    period: "LEADERSHIP & BUSINESS EXECUTION",
    icon: Users,
    badge: "TECHNICAL LEADERSHIP",
    badgeColor: "border-red-500/40 bg-red-950/30 text-red-400",
    tags: [
      "Product Development",
      "System Architecture",
      "Technical Execution",
      "Team Leadership",
      "Project Management",
      "Hiring",
      "Client Management",
    ],
    description:
      "Moved from writing code into technical leadership, product development and business execution.",
    highlights: [
      "Architecting end-to-end digital solutions for clients",
      "Leading technical teams, sprint planning and quality control",
      "Managing client requirements, technical presentations and hiring",
    ],
  },
  {
    number: "03",
    title: "DEVOPS ENGINEER",
    company: "Infrastructure & Automation",
    period: "NEXT TARGET / CURRENT JOURNEY",
    icon: Server,
    badge: "NEXT TARGET / CURRENT FOCUS",
    badgeColor: "border-red-600 bg-red-600 text-white font-bold animate-pulse",
    tags: [
      "Linux",
      "Git",
      "Bash",
      "Docker",
      "CI/CD",
      "Nginx",
      "AWS",
      "Monitoring",
      "Kubernetes",
      "Terraform",
    ],
    description:
      "Building on my software development foundation to move deeper into infrastructure, automation, deployment and cloud engineering.",
    highlights: [
      "Deepening expertise in Linux systems administration & Bash script automation",
      "Containerizing applications with Docker & deploying CI/CD pipelines",
      "Mastering cloud infrastructure provisioning with AWS & Terraform",
    ],
    isTarget: true,
  },
];

export default function Journey() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "100%"]), {
    stiffness: 100,
    damping: 30,
  });

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="py-32 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto border-t border-white/10 relative overflow-x-clip"
    >
      {/* Section Header with Big Editorial Serif Typography */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
        <div>
          <div className="font-mono text-xs font-bold text-red-500 tracking-widest uppercase mb-3">
            01 / JOURNEY
          </div>
          <h2 className="font-serif section-clamp-serif font-black tracking-tight uppercase text-white">
            THREE CHAPTERS<span className="text-red-600 font-sans">.</span> <br />
            <span className="font-serif-italic text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-white">
              ONE ENGINEERING JOURNEY.
            </span>
          </h2>
        </div>

        <div className="font-mono text-xs text-neutral-400 max-w-xs border-l-2 border-red-600 pl-4 py-1">
          A natural progression from writing application code to leading technical teams and scaling infrastructure.
        </div>
      </div>

      {/* Animated Vertical Progression Line & Cards */}
      <div className="relative pl-6 md:pl-12 space-y-16">
        {/* Continuous Red Line Guide */}
        <div className="absolute top-0 left-2 md:left-4 bottom-0 w-[2px] bg-white/10">
          <motion.div
            style={{ height: lineHeight }}
            className="w-full bg-gradient-to-b from-red-600 via-red-500 to-rose-500 origin-top"
          />
        </div>

        {chapters.map((chap, index) => {
          const Icon = chap.icon;
          return (
            <motion.div
              key={chap.number}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline Bullet Node */}
              <div
                className={`absolute -left-[33px] md:-left-[57px] top-6 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                  chap.isTarget
                    ? "border-red-600 bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.8)]"
                    : "border-red-600 bg-[#08080a] text-red-500"
                }`}
              >
                <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
              </div>

              {/* Card Container */}
              <div
                className={`p-6 sm:p-10 md:p-12 rounded-3xl border transition-all duration-500 ${
                  chap.isTarget
                    ? "bg-gradient-to-b from-[#180a0e] via-[#0d0d12] to-[#0d0d12] border-red-600/60 shadow-[0_15px_50px_rgba(220,38,38,0.2)]"
                    : "bg-[#0d0d12]/90 border-white/10 hover:border-white/20"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <span className="font-serif text-4xl sm:text-5xl font-black text-red-500 italic">
                      {chap.number}
                    </span>
                    <div>
                      <h3 className="font-serif text-2xl sm:text-4xl font-bold text-white tracking-wide">
                        {chap.title}
                      </h3>
                      <div className="font-mono text-xs text-neutral-400">{chap.company}</div>
                    </div>
                  </div>

                  <span
                    className={`font-mono text-xs uppercase tracking-wider px-4 py-1.5 rounded-full border ${chap.badgeColor}`}
                  >
                    {chap.badge}
                  </span>
                </div>

                <p className="text-neutral-300 text-base sm:text-lg leading-relaxed mb-8 font-sans">
                  {chap.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2.5 mb-8">
                  {chap.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="pt-6 border-t border-white/10">
                  <div className="font-mono text-xs uppercase tracking-wider text-neutral-500 mb-3">
                    CORE SKILLS & STACK
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {chap.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`font-mono text-xs px-3 py-1.5 rounded-lg border ${
                          chap.isTarget
                            ? "bg-red-950/60 text-red-300 border-red-800/60"
                            : "bg-white/5 text-neutral-300 border-white/10"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Career Narrative Footer Strip */}
      <div className="mt-16 p-6 rounded-2xl border border-white/10 bg-neutral-950 flex flex-wrap items-center justify-between gap-4">
        <div className="font-mono text-xs text-neutral-300 font-semibold tracking-wider">
          SUMMARY PROGRESSION STATEMENT:
        </div>
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-neutral-400">
          <span className="text-white font-bold">FULL-STACK PHP DEVELOPER</span>
          <ArrowRight className="w-4 h-4 text-red-500" />
          <span className="text-white font-bold">CTO & CO-FOUNDER</span>
          <ArrowRight className="w-4 h-4 text-red-500" />
          <span className="text-red-400 font-bold px-3 py-1 rounded bg-red-950 border border-red-600/40">
            DEVOPS ENGINEER — NEXT TARGET
          </span>
        </div>
      </div>
    </section>
  );
}
