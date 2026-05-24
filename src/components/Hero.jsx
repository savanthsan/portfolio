"use client";

import { ArrowRight, Mail } from "lucide-react";
import { GitHub, LinkedIn } from "@/components/BrandIcons";
import { portfolioConfig } from "@/config/portfolio";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function Hero() {
  const { personalInfo, contact } = portfolioConfig;
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.05 });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-grid-pattern"
    >
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] glow-orb-purple animate-pulse-slow rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[450px] h-[450px] glow-orb-blue animate-pulse-slow rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div
          ref={ref}
          className={`flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto reveal-on-scroll ${
            isVisible ? "active" : ""
          }`}
        >
          {/* Welcome Badge */}
          <span className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-blue-500/30 text-blue-300 bg-blue-500/10 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
            Welcome to my portfolio
          </span>

          {/* Heading with shimmering white-to-blue gradient */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none">
            Hi, I'm{" "}
            <span className="gradient-text-blue font-black tracking-tight select-none">
              {personalInfo.name}
            </span>
          </h1>

          {/* Title */}
          <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-200">
            {personalInfo.title}
          </p>

          {/* Short Description */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
            {personalInfo.shortDescription}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 pt-2 w-full">
            <a
              href="#projects"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-700 hover:border-blue-500/50 bg-slate-900/40 hover:bg-purple-950/10 text-slate-200 hover:text-blue-350 font-semibold hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Contact Me</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 pt-6 border-t border-slate-800/80 w-full max-w-md">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Connect:
            </span>
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg border border-slate-800/80 bg-slate-900/30 text-slate-400 hover:text-blue-400 hover:border-blue-500/30 transition-all duration-200"
              aria-label="GitHub Profile"
            >
              <GitHub className="w-5 h-5" />
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg border border-slate-800/80 bg-slate-900/30 text-slate-400 hover:text-blue-400 hover:border-blue-500/30 transition-all duration-200"
              aria-label="LinkedIn Profile"
            >
              <LinkedIn className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="p-2.5 rounded-lg border border-slate-800/80 bg-slate-900/30 text-slate-400 hover:text-blue-400 hover:border-blue-500/30 transition-all duration-200"
              aria-label="Send Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#020205] to-transparent pointer-events-none" />
    </section>
  );
}
