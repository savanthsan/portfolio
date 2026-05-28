"use client";

import { useState } from "react";
import { Folder, ExternalLink, Layers } from "lucide-react";
import { GitHub } from "@/components/BrandIcons";
import { portfolioConfig } from "@/config/portfolio";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function Projects() {
  const { projects } = portfolioConfig;
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.05 });
  const [filter, setFilter] = useState("all");

  // Dynamically extract categories to prevent missing category buttons
  const categories = ["all", ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" ref={ref} className="py-24 relative overflow-hidden bg-[#F8FAFC]">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2E8F0_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className={`text-center mb-16 reveal-on-scroll ${isVisible ? "active" : ""}`}>
          <h2 className="text-3xl font-display uppercase tracking-wider font-extrabold text-[#0F172A] flex items-center justify-center gap-3">
            <div className="p-1.5 bg-[#00BD7D] border-2 border-[#0F172A] rounded">
              <Layers className="w-6 h-6 text-[#0F172A]" />
            </div>
            <span>Featured Projects</span>
          </h2>
          <div className="mt-3 w-20 h-1.5 bg-[#00BD7D] border-2 border-[#0F172A] mx-auto rounded shadow-[2px_2px_0px_0px_#0F172A]" />
          <p className="text-[#4B5563] text-sm mt-4 max-w-lg mx-auto font-medium">
            A selection of web development applications, systems engineering utilities, and research concepts.
          </p>
        </div>

        {/* Filter Buttons */}
        <div 
          className={`flex flex-wrap justify-center gap-3 mb-12 reveal-on-scroll ${isVisible ? "active" : ""}`}
          style={{ transitionDelay: "80ms" }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2.5 text-xs font-mono font-bold uppercase tracking-wider border-2 rounded transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00BD7D] focus-visible:ring-offset-2 ${
                filter === cat
                  ? "bg-[#00BD7D] border-[#0F172A] text-[#0F172A] shadow-[3.5px_3.5px_0px_0px_#0F172A] -translate-x-0.5 -translate-y-0.5"
                  : "bg-white border-slate-200 text-[#4B5563] shadow-[2px_2px_0px_0px_rgba(15,23,42,0.05)] hover:border-[#0F172A] hover:text-[#0F172A]"
              }`}
            >
              {cat === "all" ? "All Projects" : cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              style={{ transitionDelay: `${index * 100}ms` }}
              className={`isometric-slab p-6 sm:p-8 rounded border-2 border-[#0F172A] bg-white flex flex-col justify-between relative group reveal-on-scroll ${
                isVisible ? "active" : ""
              }`}
            >
              <div>
                {/* Folder Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded border-2 border-[#0F172A] bg-[#00BD7D]/10 text-[#0F172A] shadow-[2.5px_2.5px_0px_0px_#0F172A] transition-colors group-hover:bg-[#00BD7D]">
                    <Folder className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold tracking-wider bg-[#F1F5F9] border-2 border-[#0F172A] px-2.5 py-1 rounded uppercase text-[#0F172A] shadow-[1.5px_1.5px_0px_0px_#0F172A]">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-display font-extrabold uppercase tracking-wide text-[#0F172A] group-hover:text-[#00BD7D] transition-colors mb-3">
                  {project.name}
                </h3>

                {/* Project Description */}
                <p className="text-[#4B5563] text-sm leading-relaxed mb-6 font-medium">
                  {project.description}
                </p>
              </div>

              {/* Bottom Details */}
              <div className="border-t-2 border-[#0F172A]/10 pt-5 mt-auto flex flex-col gap-4">
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-[10px] font-mono font-bold rounded border-2 border-[#0F172A] bg-[#F8FAFC] text-[#0F172A] hover:bg-[#00BD7D]/10 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-4 pt-2">
                  {project.link && project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#0F172A] hover:text-[#00BD7D] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00BD7D] focus-visible:ring-offset-2 rounded"
                    >
                      <span>View Code</span>
                      <GitHub className="w-4 h-4" />
                    </a>
                  )}
                  {project.demoLink && project.demoLink !== "#" && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#0F172A] hover:text-[#00BD7D] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00BD7D] focus-visible:ring-offset-2 rounded ml-auto"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
