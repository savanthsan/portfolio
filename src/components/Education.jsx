"use client";

import { GraduationCap, Calendar, MapPin, Sparkles } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function Education() {
  const { education } = portfolioConfig;
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.05 });

  return (
    <section id="education" ref={ref} className="py-20 relative overflow-hidden bg-grid-pattern/30">
      {/* Background Glow Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] glow-orb-blue animate-pulse-slow rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className={`text-center mb-12 reveal-on-scroll ${isVisible ? "active" : ""}`}>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl flex items-center justify-center gap-2">
            <GraduationCap className="w-8 h-8 text-blue-400" />
            <span>Education</span>
          </h2>
          <div className="mt-2 w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        {/* Card and Timeline */}
        <div
          className={`reveal-on-scroll ${isVisible ? "active" : ""}`}
          style={{ transitionDelay: "120ms" }}
        >
          <div className="relative pl-6 sm:pl-8 border-l border-blue-500/20 max-w-2xl mx-auto">
            {/* Timeline Dot */}
            <div className="absolute -left-3.5 top-1.5 p-1 rounded-full bg-blue-950 border-2 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <GraduationCap className="w-4 h-4 text-blue-300" />
            </div>

            {/* Main Education Card */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-blue-500/10 bg-slate-950/40 relative">
              <span className="absolute -top-3 right-6 px-3 py-0.5 rounded-md text-[10px] font-mono tracking-wider border border-blue-500/20 text-blue-400 bg-slate-950 uppercase">
                Active Course
              </span>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
                  {education.degree}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-blue-400 font-semibold bg-blue-500/5 px-2.5 py-1 rounded-full border border-blue-500/20 w-fit">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{education.period}</span>
                </div>
              </div>

              <div className="flex flex-col gap-2 mb-6">
                <p className="text-base text-slate-300 font-medium">
                  {education.university}
                </p>
                <div className="flex items-center gap-1 text-sm text-slate-500 font-medium">
                  <MapPin className="w-4 h-4 text-slate-500" />
                  <span>{education.location}</span>
                </div>
              </div>

              {/* Interests sub-block */}
              <div className="border-t border-slate-800/80 pt-6">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  <span>Key Fields of Interest</span>
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {education.interests.map((interest) => (
                    <span
                      key={interest}
                      className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-blue-500/5 text-blue-300 border border-blue-500/10 hover:border-blue-500/30 hover:bg-blue-500/10 transition-all duration-200 cursor-default"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
