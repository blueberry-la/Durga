"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Layers, Globe, Cpu, Server } from "lucide-react";

const toolkitData = [
  {
    category: "LANGUAGES",
    icon: Code2,
    badge: "CORE PROGRAMMING",
    description: "Primary programming languages used for backend logic, scripting, and web interactivity.",
    items: [
      { name: "PHP", status: "Primary Backend Language" },
      { name: "Python", status: "Scripting & Automation" },
      { name: "JavaScript", status: "ES6+ Web & Dynamic Client Logic" },
    ],
  },
  {
    category: "FRAMEWORKS",
    icon: Layers,
    badge: "WEB & PRODUCT",
    description: "Modern application frameworks for scalable server-rendered and single-page apps.",
    items: [
      { name: "Laravel", status: "MVC Web Architecture" },
      { name: "React", status: "UI Components & Hooks" },
      { name: "Next.js", status: "Full-Stack React Framework" },
      { name: "jQuery", status: "DOM Manipulation & Legacy Systems" },
    ],
  },
  {
    category: "WEB",
    icon: Globe,
    badge: "FRONTEND BASE",
    description: "Core standards for modern accessible web interfaces and styling.",
    items: [
      { name: "HTML", status: "Semantic Standard Markup" },
      { name: "CSS", status: "Custom Layouts, Tailwind & Animations" },
    ],
  },
  {
    category: "PRODUCT / DIGITAL",
    icon: Cpu,
    badge: "BUSINESS & AI",
    description: "Digital growth tools, analytics, search optimization, and AI workflow integration.",
    items: [
      { name: "SEO", status: "Technical & On-Page Optimization" },
      { name: "Google Analytics", status: "User Behavior & Traffic Insights" },
      { name: "Prompt Engineering", status: "AI Acceleration & LLM Workflows" },
    ],
  },
  {
    category: "DEVOPS — LEARNING",
    icon: Server,
    badge: "CURRENT FOCUS / TARGET",
    badgeStyle: "bg-red-600/30 border-red-600 text-red-300 font-bold animate-pulse",
    description: "Infrastructure, containerization, deployment pipelines, and cloud automation technologies currently being mastered.",
    items: [
      { name: "Linux", status: "CLI & Administration" },
      { name: "Git", status: "Version Control & Branching" },
      { name: "Bash", status: "Shell Scripting" },
      { name: "Docker", status: "Containerization" },
      { name: "CI/CD", status: "Automated Build Pipelines" },
      { name: "Nginx", status: "Reverse Proxy & Web Server" },
      { name: "AWS", status: "Cloud Platform Fundamentals" },
      { name: "Monitoring", status: "System Metrics & Logs" },
      { name: "Kubernetes", status: "Container Orchestration" },
      { name: "Terraform", status: "Infrastructure as Code" },
    ],
    isDevOps: true,
  },
];

export default function Toolkit() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const filteredCategories =
    activeCategory === "ALL"
      ? toolkitData
      : toolkitData.filter((cat) => cat.category.includes(activeCategory));

  return (
    <section id="skills" className="py-32 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto border-t border-white/10 relative overflow-x-clip">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="font-mono text-xs font-bold text-red-500 tracking-widest uppercase mb-3">
            05 / TOOLKIT
          </div>
          <h2 className="font-serif section-clamp-serif font-black tracking-tight uppercase text-white">
            TECHNOLOGY STACK<span className="text-red-600 font-sans">.</span> <br />
            <span className="font-serif-italic text-neutral-400">TOOLS & PLATFORMS.</span>
          </h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {["ALL", "LANGUAGES", "FRAMEWORKS", "DEVOPS"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-mono text-xs px-4 py-2 rounded-xl border transition-all ${
                activeCategory === cat
                  ? "bg-red-600 text-white border-red-500 font-bold"
                  : "bg-white/5 text-neutral-400 border-white/10 hover:text-white hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Categories */}
      <div className="space-y-8">
        {filteredCategories.map((group, index) => {
          const Icon = group.icon;
          return (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 rounded-3xl border transition-all ${
                group.isDevOps
                  ? "bg-gradient-to-r from-[#170b0e] via-[#0d0d12] to-[#0d0d12] border-red-600/50 shadow-[0_10px_30px_rgba(220,38,38,0.1)]"
                  : "bg-[#0d0d12] border-white/10"
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl border ${group.isDevOps ? "bg-red-600 text-white border-red-500" : "bg-neutral-900 border-white/10 text-red-500"}`}>
                    {Icon && <Icon className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
                      {group.category}
                    </h3>
                    <p className="text-xs font-sans text-neutral-400">{group.description}</p>
                  </div>
                </div>

                <span
                  className={`font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border ${
                    group.badgeStyle || "border-white/10 bg-white/5 text-neutral-300"
                  }`}
                >
                  {group.badge}
                </span>
              </div>

              {/* Items Pill Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className={`p-4 rounded-2xl border transition-all ${
                      group.isDevOps
                        ? "bg-red-950/20 border-red-900/40 hover:border-red-600/60"
                        : "bg-white/5 border-white/10 hover:border-white/20"
                    }`}
                  >
                    <div className="font-mono text-sm font-bold text-white mb-0.5">
                      {item.name}
                    </div>
                    <div className="text-[11px] font-sans text-neutral-400">
                      {item.status}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
