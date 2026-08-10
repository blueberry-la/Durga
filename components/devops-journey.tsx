"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Server, ArrowUpRight, Terminal, Cpu } from "lucide-react";

const roadmapItems = [
  { step: "01", name: "LINUX", status: "CURRENTLY BUILDING", desc: "Linux CLI, file systems, permissions, process management & system administration basics." },
  { step: "02", name: "NETWORKING", status: "CURRENTLY LEARNING", desc: "TCP/IP, DNS, HTTP/HTTPS, SSH, port forwarding & subnet fundamentals." },
  { step: "03", name: "GIT", status: "CURRENTLY BUILDING", desc: "Version control, branching strategies, rebasing, pull requests & repository hooks." },
  { step: "04", name: "BASH / SHELL", status: "CURRENTLY BUILDING", desc: "Shell scripting, cron jobs, log parsing & system task automation." },
  { step: "05", name: "DOCKER", status: "CURRENTLY BUILDING", desc: "Containerization, Dockerfiles, multi-stage builds, networking & Docker Compose." },
  { step: "06", name: "CI/CD", status: "CURRENTLY LEARNING", desc: "Automated pipelines, GitHub Actions workflows, build tests & deployment triggers." },
  { step: "07", name: "AWS / CLOUD", status: "CURRENTLY LEARNING", desc: "EC2 instances, S3 storage, IAM security policies, VPCs & CloudWatch." },
  { step: "08", name: "NGINX", status: "CURRENTLY BUILDING", desc: "Reverse proxying, load balancing, SSL/TLS setup & virtual host routing." },
  { step: "09", name: "MONITORING", status: "CURRENTLY DOCUMENTING", desc: "Log aggregation, health metrics, uptime alerts & performance monitoring." },
  { step: "10", name: "KUBERNETES", status: "CURRENTLY LEARNING", desc: "Container orchestration, pods, deployments, services & ingress controllers." },
  { step: "11", name: "TERRAFORM", status: "CURRENTLY LEARNING", desc: "Infrastructure as Code (IaC), declarative provisioning & state management." },
];

export default function DevOpsJourney() {
  const [hoveredStep, setHoveredStep] = useState<string | null>(null);

  return (
    <section id="devops" className="py-32 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto border-t border-white/10 relative overflow-x-clip">
      {/* Background Accent Illumination */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-red-600/15 rounded-full blur-[170px] pointer-events-none -z-10 animate-pulse-slow" />

      {/* Section Header with Bodoni Moda High Contrast Serif */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
        <div>
          <div className="font-mono text-xs font-bold text-red-500 tracking-widest uppercase mb-3">
            08 / THE NEXT CHAPTER
          </div>
          <h2 className="font-serif section-clamp-serif font-black tracking-tight uppercase text-white">
            FROM APPLICATIONS<span className="text-red-600 font-sans">.</span> <br />
            <span className="font-serif-italic text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-white">
              TO INFRASTRUCTURE.
            </span>
          </h2>
          <div className="mt-4 flex items-center gap-3">
            <span className="px-4 py-1.5 rounded-full bg-red-600 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(220,38,38,0.6)]">
              DEVOPS ENGINEER — NEXT TARGET
            </span>
          </div>
        </div>

        {/* Status Pills */}
        <div className="flex flex-wrap gap-2 font-mono text-xs">
          <span className="px-3.5 py-1.5 rounded-full bg-red-950/50 border border-red-600/50 text-red-300">
            • CURRENTLY LEARNING
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-neutral-300">
            • CURRENTLY BUILDING
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-neutral-300">
            • CURRENTLY DOCUMENTING
          </span>
        </div>
      </div>

      {/* Narrative Manifesto Quote Box */}
      <div className="p-8 md:p-12 rounded-3xl border border-red-600/40 bg-gradient-to-r from-[#190a0e] via-[#0d0d12] to-[#0d0d12] mb-20 relative shadow-[0_15px_40px_rgba(220,38,38,0.1)]">
        <div className="flex items-start gap-5">
          <div className="p-4 rounded-2xl bg-red-600 text-white shrink-0 shadow-lg">
            <Terminal className="w-7 h-7" />
          </div>
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white uppercase tracking-wide">
              WHY DEVOPS IS MY NEXT DESTINATION:
            </h3>
            <p className="text-neutral-200 font-sans text-lg sm:text-xl leading-relaxed max-w-5xl">
              "My development background gives me an understanding of how applications are built. My DevOps journey is about understanding what happens after the code is written — how applications are deployed, automated, monitored and operated reliably."
            </p>
          </div>
        </div>
      </div>

      {/* Interactive 11-Step Node Roadmap Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
        {roadmapItems.map((item, index) => {
          const isHovered = hoveredStep === item.step;
          return (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onMouseEnter={() => setHoveredStep(item.step)}
              onMouseLeave={() => setHoveredStep(null)}
              className={`p-7 rounded-2xl border transition-all duration-300 relative ${
                isHovered
                  ? "bg-red-950/40 border-red-600 scale-[1.03] shadow-[0_10px_30px_rgba(220,38,38,0.25)]"
                  : "bg-[#0d0d12] border-white/10 hover:border-white/30"
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="font-mono text-sm font-bold text-red-500">{item.step}</span>
                <span className="font-mono text-[9px] px-2.5 py-0.5 rounded border border-white/10 bg-white/5 text-neutral-300">
                  {item.status}
                </span>
              </div>

              <h4 className="font-serif text-2xl font-bold text-white mb-2 tracking-wide">
                {item.name}
              </h4>

              <p className="text-neutral-400 font-sans text-xs sm:text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          );
        })}

        {/* Final Target Node Reveal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="p-7 rounded-2xl border-2 border-red-600 bg-gradient-to-b from-red-950/70 to-[#0d0d12] flex flex-col justify-between shadow-[0_0_30px_rgba(220,38,38,0.3)]"
        >
          <div>
            <div className="font-mono text-xs font-bold text-red-400 uppercase tracking-widest mb-2">
              TARGET DESTINATION
            </div>
            <h4 className="font-serif text-2xl font-black text-white italic mb-2">
              DEVOPS ENGINEER
            </h4>
            <p className="text-neutral-300 font-sans text-xs leading-relaxed">
              Combining software development experience with cloud infrastructure & automation systems.
            </p>
          </div>
          <div className="pt-4 border-t border-red-600/40 mt-4 flex items-center justify-between">
            <span className="font-mono text-[10px] text-red-300 uppercase">NEXT CAREER TARGET</span>
            <span className="h-2 w-2 rounded-full bg-red-500 animate-ping" />
          </div>
        </motion.div>
      </div>

      {/* DevOps Action CTA Banner */}
      <div className="p-8 md:p-12 rounded-3xl border border-white/10 bg-neutral-950 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="font-serif text-2xl sm:text-3xl font-extrabold text-white mb-2">
            FOLLOW MY DEVOPS & INFRASTRUCTURE JOURNEY
          </div>
          <p className="text-neutral-400 text-base font-sans">
            Connecting full-stack application experience with cloud & automation engineering on LinkedIn.
          </p>
        </div>

        <a
          href="https://www.linkedin.com/in/durgasofficial"
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="FOLLOW DEVOPS"
          className="group flex items-center gap-3 px-9 py-4 rounded-xl bg-red-600 text-white font-mono text-xs font-bold uppercase tracking-widest hover:bg-red-700 transition-all shrink-0 shadow-[0_0_25px_rgba(220,38,38,0.5)]"
        >
          <span>FOLLOW MY DEVOPS JOURNEY</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </section>
  );
}
