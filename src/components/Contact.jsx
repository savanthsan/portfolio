"use client";

import { useState } from "react";
import { Mail, Copy, Check, Send } from "lucide-react";
import { GitHub, LinkedIn } from "@/components/BrandIcons";
import { portfolioConfig } from "@/config/portfolio";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function Contact() {
  const { contact } = portfolioConfig;
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.05 });
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ subject: "", message: "" });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const mailtoUri = `mailto:${contact.email}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoUri;
  };

  return (
    <section id="contact" ref={ref} className="py-24 relative overflow-hidden bg-[#F8FAFC]">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2E8F0_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className={`text-center mb-16 reveal-on-scroll ${isVisible ? "active" : ""}`}>
          <h2 className="text-3xl font-display uppercase tracking-wider font-extrabold text-[#0F172A] flex items-center justify-center gap-3">
            <div className="p-1.5 bg-[#00BD7D] border-2 border-[#0F172A] rounded">
              <Mail className="w-6 h-6 text-[#0F172A]" />
            </div>
            <span>Get in Touch</span>
          </h2>
          <div className="mt-3 w-20 h-1.5 bg-[#00BD7D] border-2 border-[#0F172A] mx-auto rounded shadow-[2px_2px_0px_0px_#0F172A]" />
          <p className="text-[#4B5563] text-sm mt-4 max-w-lg mx-auto font-medium">
            Have a project idea, question, or just want to connect? Reach out using the details below!
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Direct Links & Copy Widgets */}
          <div 
            style={{ transitionDelay: "100ms" }}
            className={`lg:col-span-5 flex flex-col justify-between gap-6 reveal-on-scroll ${
              isVisible ? "active" : ""
            }`}
          >
            {/* Email Card */}
            <div className="isometric-slab p-6 rounded relative border-2 border-[#0F172A] bg-white flex flex-col justify-between flex-1">
              <span className="absolute -top-3.5 left-6 px-3.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider border-2 border-[#0F172A] text-[#0F172A] bg-[#00BD7D] shadow-[2.5px_2.5px_0px_0px_#0F172A]">
                Direct Email
              </span>
              <div className="mt-4">
                <p className="text-[#0F172A] text-base font-mono font-bold select-all break-all">
                  {contact.email}
                </p>
              </div>

              <button
                onClick={handleCopyEmail}
                className="mt-8 flex items-center justify-center gap-2 w-full py-3 rounded border-2 border-[#0F172A] bg-white text-[#0F172A] font-mono text-xs font-bold uppercase tracking-wider shadow-[3px_3px_0px_0px_#0F172A] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4.5px_4.5px_0px_0px_#0F172A] active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_0px_#0F172A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00BD7D] focus-visible:ring-offset-2 transition-all duration-150 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#16A34A]" />
                    <span>Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Grid */}
            <div className="grid grid-cols-2 gap-5">
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className="isometric-slab p-6 rounded border-2 border-[#0F172A] bg-white flex flex-col justify-between group transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00BD7D] focus-visible:ring-offset-2"
              >
                <div className="p-2.5 w-fit rounded bg-[#F8FAFC] border-2 border-slate-200 text-[#0F172A] group-hover:bg-[#00BD7D] group-hover:border-[#0F172A] group-hover:shadow-[2px_2px_0px_0px_#0F172A] transition-all">
                  <GitHub className="w-5 h-5" />
                </div>
                <div className="mt-8">
                  <h4 className="text-xs font-mono font-bold text-[#4B5563] uppercase tracking-widest">GitHub</h4>
                  <p className="text-sm font-bold text-[#0F172A] mt-1">Visit Profile</p>
                </div>
              </a>

              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="isometric-slab p-6 rounded border-2 border-[#0F172A] bg-white flex flex-col justify-between group transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00BD7D] focus-visible:ring-offset-2"
              >
                <div className="p-2.5 w-fit rounded bg-[#F8FAFC] border-2 border-slate-200 text-[#0F172A] group-hover:bg-[#00BD7D] group-hover:border-[#0F172A] group-hover:shadow-[2px_2px_0px_0px_#0F172A] transition-all">
                  <LinkedIn className="w-5 h-5" />
                </div>
                <div className="mt-8">
                  <h4 className="text-xs font-mono font-bold text-[#4B5563] uppercase tracking-widest">LinkedIn</h4>
                  <p className="text-sm font-bold text-[#0F172A] mt-1">Let's Connect</p>
                </div>
              </a>
            </div>

          </div>

          {/* Right Column: Pre-filled Email Send Form */}
          <div 
            style={{ transitionDelay: "200ms" }}
            className={`lg:col-span-7 reveal-on-scroll ${
              isVisible ? "active" : ""
            }`}
          >
            <div className="isometric-slab p-8 rounded relative border-2 border-[#0F172A] bg-white">
              <span className="absolute -top-3.5 left-6 px-3.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider border-2 border-[#0F172A] text-[#0F172A] bg-[#00BD7D] shadow-[2.5px_2.5px_0px_0px_#0F172A]">
                Send a Message
              </span>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label htmlFor="subject" className="block text-xs font-mono font-bold text-[#4B5563] uppercase tracking-wider mb-2">
                    Subject / Topic
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Collaboration, Project Idea, Say Hello..."
                    className="w-full px-4 py-3 rounded border-2 border-[#0F172A] bg-[#F8FAFC] text-[#0F172A] text-sm font-medium placeholder-[#94A3B8] focus:border-[#00BD7D] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00BD7D]/20 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono font-bold text-[#4B5563] uppercase tracking-wider mb-2">
                    Message Details
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Savanth, I'd like to talk about..."
                    className="w-full px-4 py-3 rounded border-2 border-[#0F172A] bg-[#F8FAFC] text-[#0F172A] text-sm font-medium placeholder-[#94A3B8] focus:border-[#00BD7D] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00BD7D]/20 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded border-2 border-[#0F172A] bg-[#00BD7D] text-[#0F172A] font-mono text-sm font-bold uppercase tracking-wider shadow-[4px_4px_0px_0px_#0F172A] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#0F172A] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_0px_#0F172A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00BD7D] focus-visible:ring-offset-2 transition-all duration-150 cursor-pointer"
                >
                  <span>Open Mail Draft</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
