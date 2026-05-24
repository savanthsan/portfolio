"use client";

import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Learning", href: "#learning" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section highlights
      const sections = navItems.map(item => item.href.substring(1));
      let currentSection = "home";

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-[#030014]/75 backdrop-blur-md border-b border-purple-500/10 shadow-lg shadow-purple-500/5"
          : "py-5 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 text-xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent hover:opacity-85 transition-opacity"
          >
            <Code2 className="w-6 h-6 text-purple-400" />
            <span>Savanth.dev</span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-purple-400 ${
                  activeSection === item.href.substring(1)
                    ? "text-purple-400 font-semibold"
                    : "text-slate-300"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 py-2 text-xs font-semibold rounded-full border border-purple-500/30 text-purple-200 bg-purple-500/5 hover:bg-purple-500/15 hover:border-purple-500/60 transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.1)]"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-400 hover:text-slate-200 focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#030014] border-b border-purple-500/10 shadow-xl transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 max-h-screen py-4 block" : "opacity-0 max-h-0 hidden"
        }`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col gap-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`px-3 py-2 rounded-md text-base font-medium transition-colors hover:bg-purple-950/20 hover:text-purple-400 ${
                activeSection === item.href.substring(1)
                  ? "bg-purple-950/30 text-purple-400 font-semibold border-l-2 border-purple-500"
                  : "text-slate-300"
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 px-3">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block text-center w-full px-4 py-2.5 text-sm font-semibold rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
