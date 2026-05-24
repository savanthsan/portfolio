"use client";

import { Award, ExternalLink, Trophy } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function Achievements() {
  const { achievements } = portfolioConfig;
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.05 });

  if (!achievements || achievements.length === 0) return null;

  return (
    <section id="achievements" ref={ref} className="py-20 relative overflow-hidden bg-grid-pattern/30">
      
      {/* Background Glow Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] glow-orb-purple animate-pulse-slow rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className={`text-center mb-12 reveal-on-scroll ${isVisible ? "active" : ""}`}>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl flex items-center justify-center gap-2">
            <Trophy className="w-8 h-8 text-blue-400" />
            <span>Achievements & Certifications</span>
          </h2>
          <div className="mt-2 w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
          <p className="text-slate-400 text-sm mt-3 max-w-lg mx-auto">
            A showcase of recognized honors, certifications, and technical accomplishments.
          </p>
        </div>

        {/* Achievements List */}
        <div className="flex flex-col items-center max-w-3xl mx-auto gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              style={{ transitionDelay: `${index * 120}ms` }}
              className={`glass-card p-6 sm:p-8 rounded-2xl border border-blue-500/10 bg-slate-950/40 w-full hover:border-blue-500/30 transition-all duration-300 relative group reveal-on-scroll ${
                isVisible ? "active" : ""
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  {/* Badge/Trophy Icon */}
                  <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/25 text-blue-400 group-hover:text-blue-300 transition-colors shrink-0">
                    <Award className="w-7 h-7" />
                  </div>
                  
                  <div>
                    {/* Provider */}
                    <span className="text-[10px] font-mono tracking-wider text-blue-400 font-semibold bg-blue-500/5 px-2.5 py-1 rounded border border-blue-500/15">
                      {achievement.provider}
                    </span>
                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-blue-350 transition-colors mt-2.5">
                      {achievement.title}
                    </h3>
                    {/* Description */}
                    <p className="text-slate-400 text-sm mt-2 leading-relaxed max-w-xl">
                      {achievement.description}
                    </p>
                  </div>
                </div>

                {/* View Certificate Button */}
                {achievement.certificateLink && (
                  <a
                    href={achievement.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-slate-700 hover:border-blue-500/50 bg-slate-900/40 hover:bg-purple-950/10 text-slate-200 hover:text-blue-300 font-semibold transition-all duration-200 shrink-0 text-sm self-start md:self-center"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
