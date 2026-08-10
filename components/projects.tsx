"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2, ArrowUpRight, ExternalLink, X, Code, CheckCircle, Terminal } from "lucide-react";

interface ProjectItem {
  id: string;
  num: string;
  name: string;
  category: string;
  tech: string[];
  role: string;
  description: string;
  details: string;
  isPlaceholder: boolean;
  status: string;
}

const projects: ProjectItem[] = [
  {
    id: "proj-1",
    num: "PROJECT 01",
    name: "[ADD PROJECT NAME]",
    category: "Full-Stack Web Platform / React / Next.js",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    role: "Lead Full-Stack Developer",
    description: "Placeholder for primary web application. Designed for full-stack architecture, clean client UIs, and dynamic API endpoints.",
    details: "Replace this project card with your actual live product or client platform built during your time as CTO & Co-Founder at CorePro Techno LLP or personal developments.",
    isPlaceholder: true,
    status: "PLACEHOLDER — READY TO EDIT",
  },
  {
    id: "proj-2",
    num: "PROJECT 02",
    name: "[ADD PROJECT NAME]",
    category: "PHP & Laravel Application",
    tech: ["PHP", "Laravel", "MySQL", "Bootstrap / Tailwind"],
    role: "Full-Stack Developer",
    description: "Placeholder for backend-heavy software platform. Focused on custom MVC development, relational database schemas, and API integration.",
    details: "Replace this card with your PHP/Laravel projects, software development work from Nass Online Practise or CorePro Techno LLP.",
    isPlaceholder: true,
    status: "PLACEHOLDER — READY TO EDIT",
  },
  {
    id: "proj-3",
    num: "PROJECT 03",
    name: "[ADD PROJECT NAME]",
    category: "Client Web Product & Digital Experience",
    tech: ["HTML5", "CSS3", "JavaScript", "SEO / Analytics"],
    role: "CTO / Technical Project Lead",
    description: "Placeholder for custom client website development, technical planning, performance optimization and maintenance.",
    details: "Add client websites managed under CorePro Techno LLP including technical decision-making and marketing integration.",
    isPlaceholder: true,
    status: "PLACEHOLDER — READY TO EDIT",
  },
  {
    id: "proj-4",
    num: "PROJECT 04",
    name: "[ADD PROJECT NAME]",
    category: "DevOps Infrastructure / Docker Lab",
    tech: ["Linux", "Docker", "Nginx", "Git", "CI/CD"],
    role: "DevOps Engineer (Target / Project)",
    description: "Placeholder for personal DevOps hands-on lab environment, automated deployments, containerized microservices and CI/CD pipelines.",
    details: "Document your Linux administration labs, Docker compose setups, GitHub Actions CI/CD workflows and Nginx reverse proxy configurations here.",
    isPlaceholder: true,
    status: "DEVOPS LAB PLACEHOLDER",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10 relative">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
        <div>
          <div className="font-mono text-xs font-bold text-red-500 tracking-widest uppercase mb-3">
            06 / SELECTED WORK
          </div>
          <h2 className="font-display text-[clamp(2.8rem,7.5vw,7.5rem)] font-extrabold tracking-tight uppercase leading-[0.95] text-white">
            PROJECT SHOWCASE. <br />
            <span className="text-neutral-400">EDITORIAL ARCHIVE.</span>
          </h2>
        </div>

        <div className="font-mono text-xs text-neutral-400 max-w-xs border-l-2 border-red-600 pl-4 py-1">
          Structured placeholders ready to highlight React, Next.js, PHP/Laravel platforms, and DevOps environments.
        </div>
      </div>

      {/* Projects Grid with Interactive Cursor Triggers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((proj, index) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            data-cursor="VIEW PROJECT →"
            onClick={() => setSelectedProject(proj)}
            className="group cursor-pointer flex flex-col justify-between p-8 sm:p-12 rounded-3xl border border-white/10 bg-[#0d0d12] hover:border-red-600/60 hover:bg-[#12121a] transition-all duration-500 relative overflow-hidden shadow-lg hover:shadow-[0_15px_40px_rgba(220,38,38,0.15)]"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-8">
                <span className="font-mono text-sm font-bold text-neutral-400 group-hover:text-red-500 transition-colors">
                  {proj.num}
                </span>
                <span className="font-mono text-[10px] px-3.5 py-1 rounded-full border border-dashed border-red-600/40 bg-red-950/30 text-red-400">
                  {proj.status}
                </span>
              </div>

              <div className="font-mono text-xs text-neutral-400 mb-3 uppercase tracking-wider">
                {proj.category}
              </div>

              <h3 className="font-display text-[clamp(1.8rem,4vw,3.5rem)] font-bold text-white mb-4 group-hover:text-red-400 transition-colors leading-tight">
                {proj.name}
              </h3>

              <p className="text-neutral-300 font-sans text-base leading-relaxed mb-8">
                {proj.description}
              </p>

              <div className="space-y-2 mb-8">
                <div className="flex items-center gap-2 font-mono text-xs text-neutral-400">
                  <span className="text-red-500 font-bold">MY ROLE:</span>
                  <span className="text-white font-semibold">{proj.role}</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 mt-auto flex items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {proj.tech.map((t) => (
                  <span key={t} className="font-mono text-xs px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-neutral-300 group-hover:border-red-600/30">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-red-400 group-hover:text-white transition-colors shrink-0">
                <span>DETAILS</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-red-500" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Drawer Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl p-5 sm:p-8 md:p-12 rounded-3xl border border-red-600/40 bg-[#0f0f15] shadow-[0_25px_70px_rgba(0,0,0,0.95)] space-y-6 relative max-h-[85vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 sm:p-3 rounded-full border border-white/10 bg-neutral-900 text-neutral-400 hover:text-white hover:border-red-500 transition-colors"
                aria-label="Close project modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="font-mono text-xs text-red-500 font-bold uppercase tracking-wider pr-8">
                {selectedProject.num} / PROJECT SHOWCASE
              </div>

              <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white">
                {selectedProject.name}
              </h3>

              <div className="p-4 rounded-2xl border border-white/10 bg-neutral-900/90 space-y-2">
                <div className="font-mono text-xs text-neutral-400 uppercase">CATEGORY</div>
                <div className="text-white font-mono text-sm font-semibold">{selectedProject.category}</div>
                <div className="font-mono text-xs text-red-400 pt-1">ROLE: {selectedProject.role}</div>
              </div>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                {selectedProject.details}
              </p>

              <div>
                <div className="font-mono text-xs text-neutral-400 uppercase mb-3">TECHNOLOGY STACK USED:</div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => (
                    <span key={tech} className="font-mono text-xs px-3.5 py-1.5 rounded-xl border border-red-600/40 bg-red-950/40 text-red-300 font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <span className="font-mono text-xs text-neutral-500">Easily edit this placeholder in components/projects.tsx</span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-full sm:w-auto px-8 py-3 rounded-xl bg-red-600 text-white font-mono text-xs font-bold uppercase hover:bg-red-700 transition-colors"
                >
                  CLOSE
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
