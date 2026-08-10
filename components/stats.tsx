"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { label: "Completed Projects", value: 25, suffix: "+" },
  { label: "Products Launched", value: 10, suffix: "+" },
  { label: "Content Pieces", value: 50, suffix: "+" },
  { label: "Validated Ideas", value: 100, suffix: "+" },
];

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      if (start === end) return;
      
      const duration = 1.5; // seconds
      const stepTime = Math.max(Math.floor((duration * 1000) / end), 15);
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        }
      }, stepTime);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-serif text-5xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-white select-none">
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative py-24 bg-[#0A0A0A] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 items-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-3xl border border-white/5 bg-[#121212] shadow-xl hover:border-white/10 transition-colors duration-300"
            >
              <div className="mb-3 flex items-center justify-center text-accent-red">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <span className="font-sans text-[10px] uppercase tracking-widest text-accent-muted">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
