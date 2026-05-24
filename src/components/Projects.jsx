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

  const categories = ["all", "Fullstack / AI", "Desktop / Systems", "AI / ML Research"];

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" ref={ref} className="py-20 relative overflow-hidden bg-grid-pattern/30">
      
      {/* Background Glow Orb */}
      <div className="absolute bottom-1/4 left-1/4 -translate-x-1/2 translate-y-1/2 w-[350px] h-[350px] glow-orb-blue animate-pulse-slow rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className={`text-center mb-12 reveal-on-scroll ${isVisible ? "active" : ""}`}>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl flex items-center justify-center gap-2">
            <Layers className="w-8 h-8 text-blue-400" />
            <span>Featured Projects</span>
          </h2>
          <div className="mt-2 w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
          <p className="text-slate-400 text-sm mt-3 max-w-lg mx-auto">
            A selection of web development applications, systems engineering utilities, and research concepts.
          </p>
        </div>

        {/* Filter Buttons */}
        <div 
          className={`flex flex-wrap justify-center gap-2 mb-10 reveal-on-scroll ${isVisible ? "active" : ""}`}
          style={{ transitionDelay: "80ms" }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-full border transition-all duration-300 ${
                filter === cat
                  ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/20"
                  : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
              }`}
            >
              {cat === "all" ? "All Projects" : cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              style={{ transitionDelay: `${index * 120}ms` }}
              className={`glass-card p-6 sm:p-8 rounded-2xl border border-blue-500/10 bg-slate-950/40 flex flex-col justify-between hover:border-blue-500/30 transition-all duration-300 relative group reveal-on-scroll ${
                isVisible ? "active" : ""
              }`}
            >
              <div>
                {/* Folder Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/25 text-blue-400 group-hover:text-blue-300 transition-colors">
                    <Folder className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-2 text-slate-500">
                    <span className="text-[10px] font-mono tracking-wider bg-slate-900 border border-slate-800 px-2 py-0.5 rounded uppercase">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-blue-350 transition-colors mb-3">
                  {project.name}
                </h3>

                {/* Project Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>
              </div>

              {/* Bottom Details */}
              <div className="border-t border-slate-800/80 pt-5 mt-auto flex flex-col gap-4">
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-[10px] font-mono font-medium rounded-md bg-blue-950/20 text-blue-300 border border-blue-900/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-3">
                  {project.link && project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 hover:underline transition-colors"
                    >
                      <span>View Repository</span>
                      <GitHub className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.demoLink && project.demoLink !== "#" && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-slate-200 hover:underline transition-colors ml-auto"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
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
