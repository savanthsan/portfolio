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
    <footer ref={ref} className="border-t-3 border-[#0F172A] bg-white relative z-10 py-12">
      <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 reveal-on-scroll ${isVisible ? "active" : ""}`}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo Brand */}
          <div className="flex items-center gap-2">
            <div className="p-1 bg-[#00BD7D] border-2 border-[#0F172A] rounded-sm">
              <Code2 className="w-4 h-4 text-[#0F172A]" />
            </div>
            <span className="font-display font-extrabold uppercase tracking-wider text-[#0F172A] text-sm">
              Savanth Sanju
            </span>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-mono font-bold uppercase tracking-wider">
            <a href="#about" className="text-[#4B5563] hover:text-[#00BD7D] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00BD7D] rounded px-1">About</a>
            <a href="#education" className="text-[#4B5563] hover:text-[#00BD7D] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00BD7D] rounded px-1">Education</a>
            <a href="#skills" className="text-[#4B5563] hover:text-[#00BD7D] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00BD7D] rounded px-1">Skills</a>
            <a href="#projects" className="text-[#4B5563] hover:text-[#00BD7D] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00BD7D] rounded px-1">Projects</a>
            <a href="#contact" className="text-[#4B5563] hover:text-[#00BD7D] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00BD7D] rounded px-1">Contact</a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={handleScrollToTop}
            className="p-3 rounded border-2 border-[#0F172A] bg-white text-[#0F172A] hover:bg-[#00BD7D] shadow-[2.5px_2.5px_0px_0px_#0F172A] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00BD7D] focus-visible:ring-offset-2 transition-all duration-150 cursor-pointer"
            aria-label="Scroll back to top of page"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 pt-8 border-t-2 border-[#0F172A]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono font-bold text-[#4B5563] uppercase tracking-wider">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p className="normal-case font-sans font-medium text-slate-500">
            Designed & Built with{" "}
            <span className="font-bold text-[#0F172A] hover:text-[#00BD7D] transition-colors">Next.js</span> &{" "}
            <span className="font-bold text-[#0F172A] hover:text-[#00BD7D] transition-colors">Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
