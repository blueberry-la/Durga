"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Box, Users, TrendingUp, Palette, Server } from "lucide-react";

const capabilities = [
  {
    num: "CARD 01",
    title: "FULL-STACK DEVELOPMENT",
    icon: Code,
    tags: ["PHP", "Laravel", "Python", "React", "Next.js", "JavaScript", "jQuery", "HTML", "CSS"],
    description: "Building responsive websites, web applications and digital products.",
    status: "PROVEN EXPERTISE",
    statusStyle: "border-white/10 text-neutral-400 bg-white/5",
  },
  {
    num: "CARD 02",
    title: "PRODUCT DEVELOPMENT",
    icon: Box,
    tags: ["Product thinking", "Technical planning", "Web development", "Website maintenance", "Client requirements"],
    description: "Transforming raw requirements into functional, scalable software products and maintained web platforms.",
    status: "PROVEN EXPERTISE",
    statusStyle: "border-white/10 text-neutral-400 bg-white/5",
  },
  {
    num: "CARD 03",
    title: "TECHNICAL LEADERSHIP",
    icon: Users,
    tags: ["Team leadership", "Team coordination", "Hiring", "Project management", "Technical decisions"],
    description: "Guiding engineering efforts, sprint delivery, hiring coordination and architectural decision-making.",
    status: "EXECUTIVE ROLE",
    statusStyle: "border-red-500/30 text-red-400 bg-red-950/20",
  },
  {
    num: "CARD 04",
    title: "BUSINESS & GROWTH",
    icon: TrendingUp,
    tags: ["Client meetings", "Cold calling", "Client outreach", "Marketing", "SEO", "Google Analytics", "Brand building"],
    description: "Bridge between technical systems and commercial growth, client communication and marketing strategy.",
    status: "COMMERCIAL CAPABILITY",
    statusStyle: "border-white/10 text-neutral-400 bg-white/5",
  },
  {
    num: "CARD 05",
    title: "CREATIVE & DIGITAL",
    icon: Palette,
    tags: ["Poster creation", "Digital content", "Brand experiences", "Website design/development"],
    description: "Crafting visually compelling promotional collateral, posters, brand storytelling and frontend visual design.",
    status: "CREATIVE CAPABILITY",
    statusStyle: "border-white/10 text-neutral-400 bg-white/5",
  },
  {
    num: "CARD 06",
    title: "DEVOPS — CURRENT FOCUS",
    icon: Server,
    tags: ["Linux", "Git", "Bash", "Docker", "CI/CD", "Nginx", "AWS", "Monitoring", "Kubernetes", "Terraform"],
    description: "Expanding into infrastructure automation, continuous integration, containerization and cloud systems.",
    status: "CURRENTLY LEARNING / BUILDING",
    statusStyle: "border-red-600 bg-red-600 text-white font-bold animate-pulse",
    isFocus: true,
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-32 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto border-t border-white/10 relative overflow-x-clip">
      {/* Section Tag */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
        <div>
          <div className="font-mono text-xs font-bold text-red-500 tracking-widest uppercase mb-3">
            04 / CAPABILITIES
          </div>
          <h2 className="font-serif section-clamp-serif font-black tracking-tight uppercase text-white">
            WHAT I DO<span className="text-red-600 font-sans">.</span> <br />
            <span className="font-serif-italic text-neutral-400">SKILLS & CORE COMPETENCIES.</span>
          </h2>
        </div>

        <div className="font-mono text-xs text-neutral-400 max-w-xs border-l-2 border-red-600 pl-4 py-1">
          A multi-disciplinary skill set combining software development, team management, business execution, and DevOps growth.
        </div>
      </div>

      {/* Grid of Interactive Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {capabilities.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group flex flex-col justify-between p-8 rounded-3xl border transition-all duration-300 ${
                item.isFocus
                  ? "bg-gradient-to-b from-[#170c10] to-[#0d0d12] border-red-600/60 shadow-[0_10px_30px_rgba(220,38,38,0.2)]"
                  : "bg-[#0d0d12] border-white/10 hover:border-red-600/40 hover:bg-[#111118]"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span className="font-mono text-xs text-neutral-500 font-bold">{item.num}</span>
                  <span
                    className={`font-mono text-[10px] px-3 py-1 rounded-full border tracking-wider ${item.statusStyle}`}
                  >
                    {item.status}
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-3 rounded-xl border ${
                      item.isFocus
                        ? "bg-red-600 text-white border-red-500"
                        : "bg-neutral-900 border-white/10 text-red-500 group-hover:bg-red-950 group-hover:text-white"
                    }`}
                  >
                    {Icon && <Icon className="w-5 h-5" />}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white tracking-wide">
                    {item.title}
                  </h3>
                </div>

                <p className="text-neutral-300 font-sans text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 mt-auto">
                <div className="font-mono text-[10px] uppercase text-neutral-500 tracking-wider mb-2.5">
                  SKILLS & TOOLS
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`font-mono text-[11px] px-2.5 py-1 rounded-md border ${
                        item.isFocus
                          ? "bg-red-950/50 text-red-300 border-red-800/50"
                          : "bg-white/5 text-neutral-300 border-white/10"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
