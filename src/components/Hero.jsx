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
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#F8FAFC] perspective-container"
    >
      {/* Receding 3D Perspective Grid Background */}
      <div className="perspective-grid-plane animate-pulse-slow" />

      {/* Decorative Isometric Line */}
      <div className="absolute top-1/4 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00BD7D]/20 to-transparent transform -skew-y-3" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div
          ref={ref}
          className={`flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto reveal-on-scroll ${
            isVisible ? "active" : ""
          }`}
        >
          {/* Welcome Badge */}
          <span className="px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-wider border-2 border-[#0F172A] bg-white text-[#0F172A] shadow-[3px_3px_0px_0px_#00BD7D] transform -rotate-1">
            Welcome to my portfolio
          </span>

          {/* Heading with Oswald display font and thick offset block */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight leading-tight text-[#0F172A] flex flex-col items-center">
            <span className="mb-2">Hi, I'm</span>
            <span className="inline-block px-5 py-2.5 border-3 border-[#0F172A] bg-[#00BD7D] text-[#0F172A] shadow-[6px_6px_0px_0px_#0F172A] -rotate-2 select-none uppercase tracking-wide font-display text-5xl sm:text-7xl lg:text-8xl">
              {personalInfo.name}
            </span>
          </h1>

          {/* Title */}
          <p className="text-lg sm:text-xl lg:text-2xl font-mono font-bold text-[#0F172A] uppercase tracking-wider bg-white border-2 border-[#0F172A] px-4 py-1.5 shadow-[3px_3px_0px_0px_#0F172A]">
            {personalInfo.title}
          </p>

          {/* Short Description */}
          <p className="text-base sm:text-lg text-[#4B5563] max-w-2xl leading-relaxed font-sans font-medium">
            {personalInfo.shortDescription}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4 w-full">
            <a
              href="#projects"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 font-mono text-sm font-bold uppercase tracking-wider rounded border-2 border-[#0F172A] bg-[#00BD7D] text-[#0F172A] shadow-[4px_4px_0px_0px_#0F172A] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#0F172A] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_0px_#0F172A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00BD7D] focus-visible:ring-offset-2 transition-all duration-150"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 font-mono text-sm font-bold uppercase tracking-wider rounded border-2 border-[#0F172A] bg-white text-[#0F172A] shadow-[4px_4px_0px_0px_#0F172A] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#0F172A] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_0px_#0F172A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00BD7D] focus-visible:ring-offset-2 transition-all duration-150"
            >
              <span>Contact Me</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 border-t-2 border-[#0F172A] w-full max-w-md">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#4B5563]">
              Connect Stack:
            </span>
            <div className="flex items-center gap-3">
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded border-2 border-[#0F172A] bg-white text-[#0F172A] hover:bg-[#00BD7D] hover:shadow-[2.5px_2.5px_0px_0px_#0F172A] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00BD7D] focus-visible:ring-offset-2 transition-all duration-150"
                aria-label="GitHub Profile"
              >
                <GitHub className="w-5 h-5" />
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded border-2 border-[#0F172A] bg-white text-[#0F172A] hover:bg-[#00BD7D] hover:shadow-[2.5px_2.5px_0px_0px_#0F172A] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00BD7D] focus-visible:ring-offset-2 transition-all duration-150"
                aria-label="LinkedIn Profile"
              >
                <LinkedIn className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="p-3 rounded border-2 border-[#0F172A] bg-white text-[#0F172A] hover:bg-[#00BD7D] hover:shadow-[2.5px_2.5px_0px_0px_#0F172A] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00BD7D] focus-visible:ring-offset-2 transition-all duration-150"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Vanishing Divider */}
      <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
