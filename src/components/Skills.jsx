"use client";

import { Award, Code2, Database, Layout, Sparkles, Terminal } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function Skills() {
  const { skills } = portfolioConfig;
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.05 });

  // Map category names to icons
  const getCategoryIcon = (category) => {
    switch (category) {
      case "Frontend":
        return <Layout className="w-5 h-5 text-blue-400" />;
      case "Backend":
      case "Database":
        return <Database className="w-5 h-5 text-indigo-400" />;
      case "Tools":
        return <Terminal className="w-5 h-5 text-blue-400" />;
      case "Specialties":
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
      default:
        return <Code2 className="w-5 h-5 text-slate-400" />;
    }
  };

  // Group skills by custom visual segments
  const groupedSkills = {
    "Frontend Dev": skills.filter((s) => s.category === "Frontend"),
    "Backend & DB": skills.filter((s) => s.category === "Backend" || s.category === "Database"),
    "Tools & Platforms": skills.filter((s) => s.category === "Tools"),
    "Specialties": skills.filter((s) => s.category === "Specialties"),
  };

  return (
    <section id="skills" ref={ref} className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className={`text-center mb-12 reveal-on-scroll ${isVisible ? "active" : ""}`}>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl flex items-center justify-center gap-2">
            <Award className="w-8 h-8 text-blue-400" />
            <span>My Skills</span>
          </h2>
          <div className="mt-2 w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(groupedSkills).map(([category, items], idx) => (
            <div
              key={category}
              style={{ transitionDelay: `${idx * 100}ms` }}
              className={`glass-card p-6 rounded-2xl border border-blue-500/10 bg-slate-950/40 flex flex-col hover:border-blue-500/35 transition-all duration-300 reveal-on-scroll ${
                isVisible ? "active" : ""
              }`}
            >
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-800/80">
                {getCategoryIcon(items[0]?.category)}
                <h3 className="text-base font-bold text-slate-200 uppercase tracking-wider">
                  {category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-blue-300 hover:border-blue-500/30 hover:bg-blue-950/15 cursor-default transition-all duration-200"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
