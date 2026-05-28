"use client";

import { Award, ExternalLink, Trophy } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function Achievements() {
  const { achievements } = portfolioConfig;
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.05 });

  if (!achievements || achievements.length === 0) return null;

  return (
    <section id="achievements" ref={ref} className="py-24 relative overflow-hidden bg-white">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2E8F0_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className={`text-center mb-16 reveal-on-scroll ${isVisible ? "active" : ""}`}>
          <h2 className="text-3xl font-display uppercase tracking-wider font-extrabold text-[#0F172A] flex items-center justify-center gap-3">
            <div className="p-1.5 bg-[#00BD7D] border-2 border-[#0F172A] rounded">
              <Trophy className="w-6 h-6 text-[#0F172A]" />
            </div>
            <span>Achievements & Certifications</span>
          </h2>
          <div className="mt-3 w-20 h-1.5 bg-[#00BD7D] border-2 border-[#0F172A] mx-auto rounded shadow-[2px_2px_0px_0px_#0F172A]" />
          <p className="text-[#4B5563] text-sm mt-4 max-w-lg mx-auto font-medium">
            A showcase of recognized honors, certifications, and technical accomplishments.
          </p>
        </div>

        {/* Achievements List */}
        <div className="flex flex-col items-center max-w-3xl mx-auto gap-8 w-full">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              style={{ transitionDelay: `${index * 120}ms` }}
              className={`isometric-slab p-6 sm:p-8 rounded border-2 border-[#0F172A] bg-white w-full relative group reveal-on-scroll ${
                isVisible ? "active" : ""
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  {/* Badge/Trophy Icon */}
                  <div className="p-3 rounded border-2 border-[#0F172A] bg-[#00BD7D]/10 text-[#0F172A] group-hover:bg-[#00BD7D] shrink-0 transition-colors shadow-[2.5px_2.5px_0px_0px_#0F172A]">
                    <Award className="w-6 h-6" />
                  </div>
                  
                  <div>
                    {/* Provider */}
                    <span className="inline-block text-[10px] font-mono font-bold tracking-wider text-[#0F172A] bg-[#F1F5F9] px-2.5 py-1 rounded border-2 border-[#0F172A] shadow-[1.5px_1.5px_0px_0px_#00BD7D]">
                      {achievement.provider}
                    </span>
                    {/* Title */}
                    <h3 className="text-xl font-display font-extrabold uppercase tracking-wide text-[#0F172A] group-hover:text-[#00BD7D] transition-colors mt-3">
                      {achievement.title}
                    </h3>
                    {/* Description */}
                    <p className="text-[#4B5563] text-sm mt-2 leading-relaxed max-w-xl font-medium">
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
                    className="flex items-center justify-center gap-2 px-5 py-3 rounded border-2 border-[#0F172A] bg-white text-[#0F172A] font-mono text-xs font-bold uppercase tracking-wider shadow-[3px_3px_0px_0px_#0F172A] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4.5px_4.5px_0px_0px_#0F172A] active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_0px_#0F172A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00BD7D] focus-visible:ring-offset-2 shrink-0 self-start md:self-center transition-all duration-150"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-3.5 h-3.5" />
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
