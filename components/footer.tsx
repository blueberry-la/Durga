"use client";

import React from "react";
import { ArrowUp, Linkedin } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 px-4 sm:px-8 md:px-12 border-t border-white/10 bg-[#060608] text-white relative overflow-x-clip">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Subhead */}
        <div className="space-y-1 text-center md:text-left">
          <div className="font-serif text-3xl font-black italic tracking-wider text-white">
            Durga S.
          </div>
          <div className="font-mono text-xs text-neutral-400">
            FULL-STACK DEVELOPER • CTO & CO-FOUNDER • DEVOPS ENGINEER
          </div>
        </div>

        {/* Copyright & Social */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 font-mono text-xs text-neutral-400 text-center">
          <span>© 2026 Durga S. All rights reserved.</span>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/durgasofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white hover:text-red-500 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-red-500" />
              <span>LINKEDIN</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-3 rounded-full border border-white/10 bg-white/5 hover:border-red-500 hover:text-red-500 transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
