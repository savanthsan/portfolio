"use client";

import { GraduationCap, Calendar, MapPin, Sparkles } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function Education() {
  const { education } = portfolioConfig;
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.05 });

  return (
    <section id="education" ref={ref} className="py-24 relative overflow-hidden bg-[#F8FAFC]">
      {/* Receding 3D Perspective Grid Background Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2E8F0_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className={`text-center mb-16 reveal-on-scroll ${isVisible ? "active" : ""}`}>
          <h2 className="text-3xl font-display uppercase tracking-wider font-extrabold text-[#0F172A] flex items-center justify-center gap-3">
            <div className="p-1.5 bg-[#00BD7D] border-2 border-[#0F172A] rounded">
              <GraduationCap className="w-6 h-6 text-[#0F172A]" />
            </div>
            <span>Education</span>
          </h2>
          <div className="mt-3 w-20 h-1.5 bg-[#00BD7D] border-2 border-[#0F172A] mx-auto rounded shadow-[2px_2px_0px_0px_#0F172A]" />
        </div>

        {/* Card and Timeline */}
        <div
          className={`reveal-on-scroll ${isVisible ? "active" : ""}`}
          style={{ transitionDelay: "120ms" }}
        >
          <div className="relative pl-8 sm:pl-12 border-l-4 border-[#0F172A] max-w-2xl mx-auto py-4">
            {/* Timeline Dot (3D Block Style) */}
            <div className="absolute -left-[20px] top-6 p-2 bg-[#00BD7D] border-2 border-[#0F172A] shadow-[2.5px_2.5px_0px_0px_#0F172A] rounded">
              <GraduationCap className="w-4 h-4 text-[#0F172A]" />
            </div>

            {/* Main Education Card */}
            <div className="isometric-slab p-6 sm:p-8 rounded border-2 border-[#0F172A] bg-white relative">
              <span className="absolute -top-3.5 right-6 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider border-2 border-[#0F172A] text-[#0F172A] bg-[#00BD7D] shadow-[2.5px_2.5px_0px_0px_#0F172A]">
                Active Course
              </span>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
                <h3 className="text-xl sm:text-2xl font-display font-extrabold uppercase tracking-wide text-[#0F172A]">
                  {education.degree}
                </h3>
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#0F172A] bg-[#F1F5F9] px-3 py-1.5 rounded border-2 border-[#0F172A] shadow-[2px_2px_0px_0px_#0F172A] w-fit shrink-0">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{education.period}</span>
                </div>
              </div>

              <div className="flex flex-col gap-2 mb-6">
                <p className="text-md text-[#4B5563] font-bold">
                  {education.university}
                </p>
                <div className="flex items-center gap-1 text-sm text-[#4B5563] font-semibold">
                  <MapPin className="w-4 h-4 text-[#4B5563]" />
                  <span>{education.location}</span>
                </div>
              </div>

              {/* Interests sub-block */}
              <div className="border-t-2 border-[#0F172A]/10 pt-6">
                <h4 className="text-xs font-mono font-bold text-[#4B5563] uppercase tracking-widest mb-4 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#00BD7D]" />
                  <span>Key Fields of Interest</span>
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {education.interests.map((interest) => (
                    <span
                      key={interest}
                      className="px-3.5 py-2 text-xs font-mono font-bold rounded border-2 border-[#0F172A] bg-[#F8FAFC] text-[#0F172A] hover:bg-[#00BD7D] hover:shadow-[2.5px_2.5px_0px_0px_#0F172A] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none transition-all duration-150 cursor-default"
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
