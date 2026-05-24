"use client";

import { BookOpen, Star } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function Learning() {
  const { currentlyLearning } = portfolioConfig;
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.05 });

  // Map levels to color gradients
  const getLevelStyles = (level) => {
    switch (level) {
      case "Advanced":
        return {
          bg: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300",
          progress: "w-4/5 bg-gradient-to-r from-cyan-500 to-blue-500",
          stars: 4
        };
      case "Intermediate":
        return {
          bg: "bg-blue-500/10 border-blue-500/20 text-blue-350",
          progress: "w-3/5 bg-gradient-to-r from-blue-500 to-indigo-500",
          stars: 3
        };
      case "Beginner":
      default:
        return {
          bg: "bg-indigo-500/10 border-indigo-500/20 text-indigo-300",
          progress: "w-2/5 bg-gradient-to-r from-indigo-500 to-cyan-500",
          stars: 2
        };
    }
  };

  return (
    <section id="learning" ref={ref} className="py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className={`text-center mb-12 reveal-on-scroll ${isVisible ? "active" : ""}`}>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl flex items-center justify-center gap-2">
            <BookOpen className="w-8 h-8 text-blue-400" />
            <span>Currently Learning</span>
          </h2>
          <div className="mt-2 w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
          <p className="text-slate-400 text-sm mt-3 max-w-lg mx-auto">
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
                className={`glass-card p-6 rounded-2xl border border-blue-500/10 bg-slate-950/40 hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between reveal-on-scroll ${
                  isVisible ? "active" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[10px] font-mono tracking-wider font-semibold border px-2 py-0.5 rounded uppercase ${styles.bg}`}>
                      {tech.level}
                    </span>
                    <div className="flex gap-0.5 text-yellow-500/70">
                      {Array.from({ length: styles.stars }).map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-500/30" />
                      ))}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-200 mb-6">
                    {tech.name}
                  </h3>
                </div>

                <div>
                  <div className="flex justify-between items-center text-xs text-slate-500 mb-1.5 font-medium">
                    <span>Progress Tracker</span>
                    <span>{tech.level === "Advanced" ? "80%" : tech.level === "Intermediate" ? "60%" : "40%"}</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-900 border border-slate-800 overflow-hidden">
                    <div className={`h-full rounded-full ${styles.progress}`} />
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
