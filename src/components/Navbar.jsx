"use client";

import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";

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

      const sections = navItems.map(item => item.href.substring(1));
      let currentSection = "home";

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ${
        scrolled
          ? "py-2 bg-white/90 backdrop-blur-md border-b-2 border-[#0F172A] shadow-[0_4px_12px_rgba(15,23,42,0.06)]"
          : "py-4 bg-transparent border-b-2 border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 text-xl font-display font-extrabold uppercase tracking-tight text-[#0F172A] hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00BD7D] focus-visible:ring-offset-2 rounded"
          >
            <div className="p-1.5 bg-[#00BD7D] border-2 border-[#0F172A] rounded">
              <Code2 className="w-5 h-5 text-[#0F172A]" />
            </div>
            <span>Savanth.dev</span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-xs font-mono font-bold uppercase tracking-wider transition-colors py-1.5 px-2.5 rounded hover:text-[#00BD7D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00BD7D] focus-visible:ring-offset-2 ${
                  activeSection === item.href.substring(1)
                    ? "text-[#0F172A] border-b-2 border-[#00BD7D]"
                    : "text-[#4B5563]"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider rounded border-2 border-[#0F172A] bg-[#00BD7D] text-[#0F172A] shadow-[3px_3px_0px_0px_#0F172A] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#0F172A] active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_0px_#0F172A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00BD7D] focus-visible:ring-offset-2 transition-all"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded border-2 border-[#0F172A] text-[#0F172A] hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00BD7D] focus-visible:ring-offset-2 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b-2 border-[#0F172A] shadow-xl transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 max-h-screen py-4 block" : "opacity-0 max-h-0 hidden"
        }`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col gap-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`px-3 py-2.5 rounded-lg text-sm font-mono font-bold uppercase tracking-wider transition-colors hover:bg-slate-50 hover:text-[#00BD7D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00BD7D] ${
                activeSection === item.href.substring(1)
                  ? "bg-slate-100 text-[#0F172A] border-l-4 border-[#00BD7D]"
                  : "text-[#4B5563]"
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 px-3">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block text-center w-full px-4 py-3 text-sm font-mono font-bold uppercase tracking-wider rounded border-2 border-[#0F172A] bg-[#00BD7D] text-[#0F172A] shadow-[3px_3px_0px_0px_#0F172A] hover:shadow-[4px_4px_0px_0px_#0F172A] transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
