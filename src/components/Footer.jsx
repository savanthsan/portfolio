"use client";

import { Code2, ArrowUp } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function Footer() {
  const { personalInfo } = portfolioConfig;
  const currentYear = new Date().getFullYear();
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.05 });

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer ref={ref} className="border-t border-slate-900 bg-[#02000f]/80 relative z-10 py-12">
      <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 reveal-on-scroll ${isVisible ? "active" : ""}`}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo Brand */}
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-purple-500" />
            <span className="font-bold text-slate-350 text-sm">Savanth Sanju</span>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-slate-500 font-medium">
            <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
            <a href="#education" className="hover:text-purple-400 transition-colors">Education</a>
            <a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={handleScrollToTop}
            className="p-2.5 rounded-full border border-slate-800 bg-slate-900/40 text-slate-400 hover:text-purple-400 hover:border-purple-500/30 transition-all duration-200"
            aria-label="Scroll back to top of page"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 pt-8 border-t border-slate-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 font-normal">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p>
            Designed & Built with{" "}
            <span className="text-purple-500/80">Next.js</span> &{" "}
            <span className="text-purple-500/80">Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
