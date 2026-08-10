"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, UserPlus, MessageSquare, CheckSquare, Megaphone, Search, BarChart3, Palette, Image as ImageIcon } from "lucide-react";

const pillars = [
  {
    title: "TEAM LEADERSHIP",
    icon: Users,
    desc: "Leading and coordinating team members, facilitating sprint collaboration, and providing engineering guidance.",
    tags: ["Team Alignment", "Sprint Planning", "Peer Mentorship"],
  },
  {
    title: "HIRING",
    icon: UserPlus,
    desc: "Working with hiring processes, candidate technical screening, and team growth coordination.",
    tags: ["Candidate Screening", "Role Profiling", "Team Scaling"],
  },
  {
    title: "CLIENTS",
    icon: MessageSquare,
    desc: "Cold calls, outreach messages, client discovery meetings, technical proposals and requirement discussions.",
    tags: ["Cold Outreach", "Discovery Calls", "Requirement Scope"],
  },
  {
    title: "PROJECT MANAGEMENT",
    icon: CheckSquare,
    desc: "Planning deliverables, task allocation, project milestone tracking and on-time client execution.",
    tags: ["Task Distribution", "Milestones", "Delivery Quality"],
  },
];

const supplementarySkills = [
  { name: "MARKETING", icon: Megaphone, detail: "Campaign planning & growth outreach" },
  { name: "SEO", icon: Search, detail: "Search visibility & performance optimization" },
  { name: "GOOGLE ANALYTICS", icon: BarChart3, detail: "User traffic & engagement analytics" },
  { name: "BRAND BUILDING", icon: Palette, detail: "Identity design & commercial positioning" },
  { name: "POSTER CREATION", icon: ImageIcon, detail: "Digital artwork & promotional visuals" },
];

export default function BeyondCode() {
  return (
    <section className="py-32 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto border-t border-white/10 relative overflow-x-clip">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
        <div>
          <div className="font-mono text-xs font-bold text-red-500 tracking-widest uppercase mb-3">
            07 / BEYOND CODE
          </div>
          <h2 className="font-serif section-clamp-serif font-black tracking-tight uppercase text-white">
            ENGINEERING IS MORE <br />
            <span className="font-serif-italic text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-white">
              THAN WRITING CODE.
            </span>
          </h2>
        </div>

        <div className="font-mono text-xs text-neutral-400 max-w-xs border-l-2 border-red-600 pl-4 py-1">
          Combining engineering discipline with business outreach, team building and digital content execution.
        </div>
      </div>

      {/* 4 Core Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {pillars.map((pil, index) => {
          const Icon = pil.icon;
          return (
            <motion.div
              key={pil.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 sm:p-10 rounded-3xl border border-white/10 bg-[#0d0d12] hover:border-red-600/40 transition-all duration-300 space-y-4"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-red-950/40 border border-red-600/30 text-red-400">
                  {Icon && <Icon className="w-6 h-6" />}
                </div>
                <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
                  {pil.title}
                </h3>
              </div>

              <p className="text-neutral-300 font-sans text-base leading-relaxed">
                {pil.desc}
              </p>

              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                {pil.tags.map((t) => (
                  <span key={t} className="font-mono text-[11px] px-3 py-1 rounded-md bg-white/5 border border-white/10 text-neutral-300">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Supplementary Capabilities Strip */}
      <div className="p-8 sm:p-10 rounded-3xl border border-white/10 bg-neutral-950 space-y-6">
        <div className="font-mono text-xs font-bold text-red-500 uppercase tracking-widest">
          COMMERCIAL & DIGITAL CREATIVE CAPABILITIES
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {supplementarySkills.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.name} className="p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-red-600/30 transition-all">
                {Icon && <Icon className="w-5 h-5 text-red-500 mb-2" />}
                <div className="font-mono text-xs font-bold text-white mb-1">{item.name}</div>
                <div className="text-[11px] text-neutral-400 font-sans leading-tight">{item.detail}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
