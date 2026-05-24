"use client";

import { User, ShieldCheck, Heart, Zap } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function About() {
  const { personalInfo } = portfolioConfig;
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.05 });

  const highlights = [
    {
      icon: <Zap className="w-5 h-5 text-blue-400" />,
      title: "Problem Solver",
      desc: "Creating web apps and software to tackle everyday needs.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-indigo-400" />,
      title: "Dedicated Student",
      desc: "Consistently building practical experience along with academics.",
    },
    {
      icon: <Heart className="w-5 h-5 text-cyan-400" />,
      title: "Tech Enthusiast",
      desc: "Fascinated by artificial intelligence and full-stack systems.",
    },
  ];

  return (
    <section id="about" ref={ref} className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className={`text-center mb-12 reveal-on-scroll ${isVisible ? "active" : ""}`}>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl flex items-center justify-center gap-2">
            <User className="w-8 h-8 text-blue-400" />
            <span>About Me</span>
          </h2>
          <div className="mt-2 w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        {/* Scroll Reveal Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Side: Bio Text */}
          <div 
            style={{ transitionDelay: "80ms" }}
            className={`lg:col-span-7 flex flex-col justify-center reveal-on-scroll ${
              isVisible ? "active" : ""
            }`}
          >
            <div className="glass-card p-8 rounded-2xl border border-blue-500/10 bg-slate-950/40 relative">
              <span className="absolute -top-3 left-6 px-3 py-0.5 rounded-md text-[10px] font-mono tracking-wider border border-blue-500/20 text-blue-400 bg-slate-950 uppercase">
                My Story
              </span>
              <p className="text-slate-300 text-base leading-relaxed mb-6 font-normal">
                {personalInfo.aboutText}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 border-t border-slate-800/80 pt-6">
                <div>
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Current Focus
                  </h4>
                  <p className="text-sm font-medium text-slate-300 mt-1">
                    Web Development, AI APIs & Full-Stack Projects
                  </p>
                </div>
                <div className="sm:border-l sm:border-slate-800/80 sm:pl-6">
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Affiliation
                  </h4>
                  <p className="text-sm font-medium text-slate-300 mt-1">
                    Cochin University of Science and Technology (CUSAT)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Quick Highlights Grid */}
          <div className="lg:col-span-5 flex flex-col gap-4 justify-between">
            {highlights.map((h, i) => (
              <div
                key={i}
                style={{ transitionDelay: `${(i + 1) * 120}ms` }}
                className={`glass-card p-6 rounded-2xl flex gap-4 items-start border border-blue-500/10 bg-slate-950/40 hover:-translate-y-1 hover:border-blue-500/30 transition-all duration-300 reveal-on-scroll ${
                  isVisible ? "active" : ""
                }`}
              >
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 shadow-md">
                  {h.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-200">{h.title}</h3>
                  <p className="text-sm text-slate-400 mt-1 leading-relaxed">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
