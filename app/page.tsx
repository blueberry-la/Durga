"use client";

import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Journey from "@/components/journey";
import About from "@/components/about";
import Experience from "@/components/experience";
import Capabilities from "@/components/capabilities";
import Toolkit from "@/components/toolkit";
import Projects from "@/components/projects";
import BeyondCode from "@/components/beyond-code";
import DevOpsJourney from "@/components/devops-journey";
import LearningPublic from "@/components/learning-public";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import ScrollIndicator from "@/components/scroll-indicator";
import Preloader from "@/components/preloader";
import CustomCursor from "@/components/custom-cursor";
import TextMarquee from "@/components/text-marquee";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#08080a] text-white selection:bg-red-600 selection:text-white overflow-x-hidden">
      {/* 1. Cinematic Preloader Screen */}
      <Preloader />

      {/* 2. Interactive Custom Cursor (Desktop) */}
      <CustomCursor />

      {/* 3. Top Scroll Progress Indicator */}
      <ScrollIndicator />

      {/* 4. Fine Grid Backdrop Lines */}
      <div className="fixed inset-0 grid-lines pointer-events-none z-0" />

      {/* 5. Crimson Top Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] crimson-glow pointer-events-none z-0" />

      {/* 6. Sticky Header Navbar */}
      <Navbar />

      {/* 7. Structured Sections */}
      <div className="relative z-10 flex flex-col w-full">
        <Hero />

        {/* Ticker Marquee 1 */}
        <TextMarquee
          items={[
            "FULL-STACK DEVELOPER",
            "CTO & CO-FOUNDER",
            "DEVOPS ENGINEER — NEXT TARGET",
            "I BUILD",
            "I LEAD",
            "I SHIP",
          ]}
        />

        <Journey />
        <About />
        <Experience />
        <Capabilities />

        {/* Ticker Marquee 2 */}
        <TextMarquee
          reverse
          items={[
            "FROM CODE TO SYSTEMS",
            "PHP & LARAVEL",
            "REACT & NEXT.JS",
            "LINUX & DOCKER",
            "CI/CD & AUTOMATION",
          ]}
        />

        <Toolkit />
        <Projects />
        <BeyondCode />
        <DevOpsJourney />
        <LearningPublic />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
