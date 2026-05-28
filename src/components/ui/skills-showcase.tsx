"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

const skills = [
  { name: "Design", level: 95 },
  { name: "Development", level: 90 },
  { name: "Branding", level: 85 },
  { name: "Motion", level: 78 },
  { name: "Strategy", level: 82 },
];

export function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="isometric-slab flex flex-col w-full max-w-md p-8 rounded border-2 border-[#0F172A] bg-white">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-1 bg-[#00BD7D] border-2 border-[#0F172A] rounded-sm">
          <Sparkles className="w-4 h-4 text-[#0F172A]" />
        </div>
        <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#4B5563]">
          Expertise Level
        </span>
      </div>

      {/* Skills list */}
      <div className="flex flex-col gap-2">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="group relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={cn(
                "relative flex items-center justify-between py-4 px-3 cursor-pointer",
                "transition-all duration-150 ease-out",
                "rounded border-2 border-transparent",
                hoveredIndex === index 
                  ? "bg-[#F8FAFC] border-[#0F172A] shadow-[2.5px_2.5px_0px_0px_#00BD7D] -translate-x-0.5 -translate-y-0.5" 
                  : "bg-transparent"
              )}
            >
              {/* Left side - skill name with animated elements */}
              <div className="relative flex items-center gap-3">
                <div
                  className={cn(
                    "h-4 w-1 bg-[#00BD7D] border border-[#0F172A] transition-all duration-200",
                    hoveredIndex === index ? "scale-y-100 opacity-100" : "scale-y-50 opacity-0"
                  )}
                />

                {/* Skill name */}
                <span
                  className={cn(
                    "text-sm font-display font-extrabold uppercase tracking-wider transition-all duration-200",
                    hoveredIndex === index ? "text-[#0F172A] translate-x-0" : "text-[#4B5563] -translate-x-2"
                  )}
                >
                  {skill.name}
                </span>
              </div>

              {/* Right side - progress visualization */}
              <div className="flex items-center gap-3">
                <div className="relative w-24 h-4 rounded-sm border-2 border-[#0F172A] overflow-hidden bg-slate-100 shadow-[1px_1px_0px_0px_rgba(15,23,42,0.05)]">
                  {/* Animated fill */}
                  <div
                    className="absolute inset-y-0 left-0 bg-[#00BD7D] transition-all duration-500 ease-out border-r-2 border-[#0F172A]"
                    style={{
                      width: hoveredIndex === index ? `${skill.level}%` : "0%",
                      transitionDelay: hoveredIndex === index ? "50ms" : "0ms",
                    }}
                  />

                  {/* Shine effect on hover */}
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent",
                      "transition-transform duration-500 ease-out",
                      hoveredIndex === index ? "translate-x-full" : "-translate-x-full"
                    )}
                    style={{
                      transitionDelay: hoveredIndex === index ? "150ms" : "0ms",
                    }}
                  />
                </div>

                <div className="relative w-10 text-right">
                  <span
                    className={cn(
                      "block text-xs font-mono font-bold tabular-nums",
                      "transition-all duration-200",
                      hoveredIndex === index
                        ? "text-[#0F172A] opacity-100 translate-y-0"
                        : "text-[#4B5563] opacity-60"
                    )}
                  >
                    {skill.level}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 mt-8 pt-5 border-t-2 border-[#0F172A]/10">
        <div className="w-2 h-2 rounded-full bg-[#00BD7D] animate-ping" />
        <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#4B5563]">
          Hover tabs to expand metrics
        </p>
      </div>
    </div>
  );
}
