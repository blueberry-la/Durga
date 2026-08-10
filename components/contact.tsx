"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, Copy, Check, Send, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("d66190721@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10 relative">
      {/* Background Illumination Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-600/15 rounded-full blur-[180px] pointer-events-none -z-10 animate-pulse-slow" />

      {/* Section Tag */}
      <div className="font-mono text-xs font-bold text-red-500 tracking-widest uppercase mb-4">
        09 / CONTACT
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Dramatic Giant Headline */}
        <div className="lg:col-span-6 space-y-8">
          <h2 className="font-display text-[clamp(4.2rem,13vw,13rem)] font-extrabold tracking-tighter uppercase text-white leading-[0.85] select-none">
            LET'S <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-white">
              BUILD.
            </span>
          </h2>

          <p className="text-neutral-300 font-sans text-xl sm:text-2xl leading-relaxed max-w-md">
            Open to DevOps, Cloud and Engineering opportunities.
          </p>

          <div className="space-y-4 pt-6 border-t border-white/10">
            {/* Email Box */}
            <div className="p-5 rounded-2xl border border-white/10 bg-[#0d0d12] flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-red-950/40 border border-red-600/30 text-red-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-neutral-500 uppercase">DIRECT EMAIL</div>
                  <div className="font-mono text-base text-white font-bold">d66190721@gmail.com</div>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                data-cursor="COPY EMAIL"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-white/10 bg-white/5 hover:border-red-500 text-xs font-mono text-neutral-300 hover:text-white transition-all"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? "COPIED!" : "COPY"}</span>
              </button>
            </div>

            {/* LinkedIn Box */}
            <a
              href="https://www.linkedin.com/in/durgasofficial"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="LINKEDIN"
              className="group p-5 rounded-2xl border border-white/10 bg-[#0d0d12] flex items-center justify-between gap-4 hover:border-red-600/60 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-neutral-900 border border-white/10 text-red-500">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-neutral-500 uppercase">LINKEDIN PROFILE</div>
                  <div className="font-mono text-base text-white font-bold">linkedin.com/in/durgasofficial</div>
                </div>
              </div>

              <ArrowUpRight className="w-5 h-5 text-red-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Location Box */}
            <div className="p-5 rounded-2xl border border-white/10 bg-[#0d0d12] flex items-center gap-3">
              <div className="p-3 rounded-xl bg-neutral-900 border border-white/10 text-red-500">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="font-mono text-[10px] text-neutral-500 uppercase">LOCATION</div>
                <div className="font-mono text-base text-white font-bold">Trivandrum, Kerala, India</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Direct Contact Form */}
        <div className="lg:col-span-6">
          <form
            onSubmit={handleSubmit}
            className="p-8 sm:p-12 rounded-3xl border border-white/10 bg-[#0d0d12] space-y-6 relative shadow-2xl"
          >
            <div className="font-mono text-xs font-bold text-red-500 uppercase tracking-widest border-b border-white/10 pb-4">
              SEND A DIRECT MESSAGE
            </div>

            {formSubmitted && (
              <div className="p-4 rounded-xl border border-emerald-500/40 bg-emerald-950/30 text-emerald-300 font-mono text-xs flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Message received! Thank you for reaching out to Durga S.</span>
              </div>
            )}

            <div className="space-y-2">
              <label className="font-mono text-xs text-neutral-400 uppercase">YOUR NAME</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your full name"
                className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-neutral-900 text-white font-sans text-sm focus:outline-none focus:border-red-600 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="font-mono text-xs text-neutral-400 uppercase">YOUR EMAIL ADDRESS</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="email@domain.com"
                className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-neutral-900 text-white font-sans text-sm focus:outline-none focus:border-red-600 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="font-mono text-xs text-neutral-400 uppercase">MESSAGE / OPPORTUNITY</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Describe your project, team opportunity, or inquiry..."
                className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-neutral-900 text-white font-sans text-sm focus:outline-none focus:border-red-600 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              data-cursor="SUBMIT"
              className="w-full py-4 rounded-xl bg-red-600 text-white font-mono text-xs font-bold uppercase tracking-widest hover:bg-red-700 transition-all flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(220,38,38,0.5)]"
            >
              <span>LET'S CONNECT</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
