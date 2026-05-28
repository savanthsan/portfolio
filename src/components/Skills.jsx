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
        return <Layout className="w-5 h-5 text-[#0F172A]" />;
      case "Backend":
      case "Database":
        return <Database className="w-5 h-5 text-[#0F172A]" />;
      case "Tools":
        return <Terminal className="w-5 h-5 text-[#0F172A]" />;
      case "Specialties":
        return <Sparkles className="w-5 h-5 text-[#0F172A]" />;
      default:
        return <Code2 className="w-5 h-5 text-[#0F172A]" />;
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
    <section id="skills" ref={ref} className="py-24 relative overflow-hidden bg-white">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2E8F0_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className={`text-center mb-16 reveal-on-scroll ${isVisible ? "active" : ""}`}>
          <h2 className="text-3xl font-display uppercase tracking-wider font-extrabold text-[#0F172A] flex items-center justify-center gap-3">
            <div className="p-1.5 bg-[#00BD7D] border-2 border-[#0F172A] rounded">
              <Award className="w-6 h-6 text-[#0F172A]" />
            </div>
            <span>My Skills</span>
          </h2>
          <div className="mt-3 w-20 h-1.5 bg-[#00BD7D] border-2 border-[#0F172A] mx-auto rounded shadow-[2px_2px_0px_0px_#0F172A]" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(groupedSkills).map(([category, items], idx) => (
            <div
              key={category}
              style={{ transitionDelay: `${idx * 100}ms` }}
              className={`isometric-slab p-6 rounded border-2 border-[#0F172A] bg-white flex flex-col justify-start reveal-on-scroll ${
                isVisible ? "active" : ""
              }`}
            >
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b-2 border-[#0F172A]/10">
                <div className="p-1.5 bg-[#00BD7D]/10 border border-[#0F172A] rounded">
                  {getCategoryIcon(items[0]?.category)}
                </div>
                <h3 className="text-sm font-display font-extrabold uppercase tracking-wider text-[#0F172A]">
                  {category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5 mt-2">
                {items.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3.5 py-2 text-xs font-mono font-bold rounded border-2 border-[#0F172A] bg-[#F8FAFC] text-[#0F172A] hover:bg-[#00BD7D] hover:shadow-[2.5px_2.5px_0px_0px_#0F172A] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none cursor-default transition-all duration-150"
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
