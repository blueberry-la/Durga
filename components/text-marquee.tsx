"use client";

import React from "react";

interface TextMarqueeProps {
  items?: string[];
  speed?: number;
  reverse?: boolean;
}

const defaultItems = [
  "FULL-STACK PHP DEVELOPER",
  "CTO & CO-FOUNDER",
  "DEVOPS ENGINEER — NEXT TARGET",
  "I BUILD",
  "I LEAD",
  "I LEARN",
  "I SHIP",
];

export default function TextMarquee({
  items = defaultItems,
  reverse = false,
}: TextMarqueeProps) {
  return (
    <div className="w-full overflow-hidden border-y border-white/10 bg-[#060608] py-5 select-none relative z-10 group">
      <div
        className={`flex whitespace-nowrap gap-10 items-center w-max ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        } group-hover:[animation-play-state:paused]`}
      >
        {[...items, ...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-10">
            <span className="font-serif text-2xl sm:text-4xl font-extrabold italic tracking-wider text-neutral-300 group-hover:text-white transition-colors">
              {text}
            </span>
            <span className="h-2.5 w-2.5 rounded-full bg-red-600 inline-block" />
          </div>
        ))}
      </div>
    </div>
  );
}
