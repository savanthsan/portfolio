"use client";

import { BookOpen, Star } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function Learning() {
  const { currentlyLearning } = portfolioConfig;
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.05 });

  // Map levels to color classes and segmented steps
  const getLevelStyles = (level) => {
    switch (level) {
      case "Advanced":
        return {
          badgeClass: "bg-[#00BD7D] text-[#0F172A] border-2 border-[#0F172A] shadow-[1.5px_1.5px_0px_0px_#0F172A]",
          steps: 4,
          stars: 4
        };
      case "Intermediate":
        return {
          badgeClass: "bg-white text-[#0F172A] border-2 border-[#0F172A] shadow-[1.5px_1.5px_0px_0px_#00BD7D]",
          steps: 3,
          stars: 3
        };
      case "Beginner":
      default:
        return {
          badgeClass: "bg-[#F8FAFC] text-[#4B5563] border-2 border-slate-200 shadow-[1px_1px_0px_0px_rgba(15,23,42,0.05)]",
          steps: 2,
          stars: 2
        };
    }
  };

  const totalSteps = 5;

  return (
    <section id="learning" ref={ref} className="py-24 relative overflow-hidden bg-white">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2E8F0_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className={`text-center mb-16 reveal-on-scroll ${isVisible ? "active" : ""}`}>
          <h2 className="text-3xl font-display uppercase tracking-wider font-extrabold text-[#0F172A] flex items-center justify-center gap-3">
            <div className="p-1.5 bg-[#00BD7D] border-2 border-[#0F172A] rounded">
              <BookOpen className="w-6 h-6 text-[#0F172A]" />
            </div>
            <span>Currently Learning</span>
          </h2>
          <div className="mt-3 w-20 h-1.5 bg-[#00BD7D] border-2 border-[#0F172A] mx-auto rounded shadow-[2px_2px_0px_0px_#0F172A]" />
          <p className="text-[#4B5563] text-sm mt-4 max-w-lg mx-auto font-medium">
            Stack expansion! Technologies I am currently diving deeper into or exploring for full-stack AI applications.
          </p>
        </div>

        {/* Learning Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentlyLearning.map((tech, index) => {
            const styles = getLevelStyles(tech.level);
            return (
              <div
                key={tech.name}
                style={{ transitionDelay: `${index * 80}ms` }}
                className={`isometric-slab p-6 rounded border-2 border-[#0F172A] bg-white hover:border-[#0F172A] flex flex-col justify-between reveal-on-scroll ${
                  isVisible ? "active" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded uppercase ${styles.badgeClass}`}>
                      {tech.level}
                    </span>
                    <div className="flex gap-0.5 text-yellow-500">
                      {Array.from({ length: styles.stars }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-500" />
                      ))}
                    </div>
                  </div>

                  <h3 className="text-lg font-display font-extrabold uppercase tracking-wide text-[#0F172A] mb-8 mt-2">
                    {tech.name}
                  </h3>
                </div>

                <div>
                  <div className="flex justify-between items-center text-xs font-mono font-bold text-[#4B5563] uppercase tracking-wider mb-2">
                    <span>Progress Steps</span>
                    <span>{styles.steps} / {totalSteps}</span>
                  </div>
                  
                  {/* Segmented stepped indicator (tactile realism style) */}
                  <div className="flex gap-1.5">
                    {Array.from({ length: totalSteps }).map((_, i) => {
                      const isFilled = i < styles.steps;
                      return (
                        <div
                          key={i}
                          className={`h-3.5 flex-1 border-2 border-[#0F172A] transition-colors rounded-sm ${
                            isFilled 
                              ? "bg-[#00BD7D] shadow-[1px_1px_0px_0px_#0F172A]" 
                              : "bg-[#F8FAFC]"
                          }`}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
