"use client";

import { User, ShieldCheck, Heart, Zap } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function About() {
  const { personalInfo } = portfolioConfig;
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.05 });

  const highlights = [
    {
      icon: <Zap className="w-5 h-5 text-[#0F172A]" />,
      title: "Problem Solver",
      desc: "Creating web apps and software to tackle everyday needs.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#0F172A]" />,
      title: "Dedicated Student",
      desc: "Consistently building practical experience along with academics.",
    },
    {
      icon: <Heart className="w-5 h-5 text-[#0F172A]" />,
      title: "Tech Enthusiast",
      desc: "Fascinated by artificial intelligence and full-stack systems.",
    },
  ];

  return (
    <section id="about" ref={ref} className="py-24 relative overflow-hidden bg-white">
      {/* Dynamic Grid Background Accent (Decorative) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2E8F0_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className={`text-center mb-16 reveal-on-scroll ${isVisible ? "active" : ""}`}>
          <h2 className="text-3xl font-display uppercase tracking-wider font-extrabold text-[#0F172A] flex items-center justify-center gap-3">
            <div className="p-1.5 bg-[#00BD7D] border-2 border-[#0F172A] rounded">
              <User className="w-6 h-6 text-[#0F172A]" />
            </div>
            <span>About Me</span>
          </h2>
          <div className="mt-3 w-20 h-1.5 bg-[#00BD7D] border-2 border-[#0F172A] mx-auto rounded shadow-[2px_2px_0px_0px_#0F172A]" />
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
            <div className="isometric-slab p-8 rounded relative border-2 border-[#0F172A] bg-white">
              <span className="absolute -top-3.5 left-6 px-3.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider border-2 border-[#0F172A] text-[#0F172A] bg-[#00BD7D] shadow-[2.5px_2.5px_0px_0px_#0F172A]">
                My Story
              </span>
              <p className="text-[#4B5563] text-base leading-relaxed mb-8 font-medium">
                {personalInfo.aboutText}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 border-t-2 border-[#0F172A]/10 pt-6">
                <div className="flex-1">
                  <h4 className="text-xs font-mono font-bold text-[#4B5563] uppercase tracking-widest">
                    Current Focus
                  </h4>
                  <p className="text-sm font-bold text-[#0F172A] mt-1.5 leading-snug">
                    Web Development, AI APIs & Full-Stack Projects
                  </p>
                </div>
                <div className="sm:border-l-2 sm:border-[#0F172A]/10 sm:pl-6 flex-1">
                  <h4 className="text-xs font-mono font-bold text-[#4B5563] uppercase tracking-widest">
                    Affiliation
                  </h4>
                  <p className="text-sm font-bold text-[#0F172A] mt-1.5 leading-snug">
                    Cochin University of Science and Technology (CUSAT)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Quick Highlights Grid */}
          <div className="lg:col-span-5 flex flex-col gap-5 justify-between">
            {highlights.map((h, i) => (
              <div
                key={i}
                style={{ transitionDelay: `${(i + 1) * 120}ms` }}
                className={`isometric-slab p-6 rounded flex gap-4 items-start border-2 border-[#0F172A] bg-white reveal-on-scroll ${
                  isVisible ? "active" : ""
                }`}
              >
                <div className="p-2.5 rounded bg-[#00BD7D] border-2 border-[#0F172A] shadow-[2px_2px_0px_0px_#0F172A] text-[#0F172A] shrink-0">
                  {h.icon}
                </div>
                <div>
                  <h3 className="text-md font-display font-extrabold uppercase tracking-wider text-[#0F172A]">{h.title}</h3>
                  <p className="text-sm text-[#4B5563] mt-1.5 leading-relaxed font-medium">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
