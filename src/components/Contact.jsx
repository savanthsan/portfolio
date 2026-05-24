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
    <section id="contact" ref={ref} className="py-20 relative overflow-hidden bg-grid-pattern">
      {/* Background Glow Orb */}
      <div className="absolute top-1/4 right-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] glow-orb-blue animate-pulse-slow rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className={`text-center mb-12 reveal-on-scroll ${isVisible ? "active" : ""}`}>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl flex items-center justify-center gap-2">
            <Mail className="w-8 h-8 text-blue-400" />
            <span>Get in Touch</span>
          </h2>
          <div className="mt-2 w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
          <p className="text-slate-400 text-sm mt-3 max-w-lg mx-auto">
            Have a project idea, question, or just want to connect? Reach out using the details below!
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Direct Links & Copy Widgets */}
          <div 
            style={{ transitionDelay: "100ms" }}
            className={`lg:col-span-5 flex flex-col justify-between gap-4 reveal-on-scroll ${
              isVisible ? "active" : ""
            }`}
          >
            {/* Email Card */}
            <div className="glass-card p-6 rounded-2xl border border-blue-500/10 bg-slate-950/40 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono tracking-wider font-semibold border border-blue-500/25 px-2 py-0.5 rounded uppercase text-blue-300 bg-blue-500/5">
                  Direct Email
                </span>
                <p className="text-slate-350 text-base font-semibold mt-3 select-all">
                  {contact.email}
                </p>
              </div>

              <button
                onClick={handleCopyEmail}
                className="mt-6 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-blue-500/20 hover:border-blue-500/50 bg-blue-500/5 hover:bg-blue-500/15 text-blue-300 text-sm font-semibold transition-all duration-200"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-green-400" />
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
            <div className="grid grid-cols-2 gap-4">
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className="glass-card p-6 rounded-2xl border border-blue-500/10 bg-slate-950/40 hover:border-blue-500/30 flex flex-col justify-between group transition-all duration-300"
              >
                <div className="p-2.5 w-fit rounded-lg bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-colors">
                  <GitHub className="w-5 h-5" />
                </div>
                <div className="mt-8">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">GitHub</h4>
                  <p className="text-sm font-semibold text-slate-300 mt-1">Visit Profile</p>
                </div>
              </a>

              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="glass-card p-6 rounded-2xl border border-blue-500/10 bg-slate-950/40 hover:border-blue-500/30 flex flex-col justify-between group transition-all duration-300"
              >
                <div className="p-2.5 w-fit rounded-lg bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-colors">
                  <LinkedIn className="w-5 h-5" />
                </div>
                <div className="mt-8">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">LinkedIn</h4>
                  <p className="text-sm font-semibold text-slate-300 mt-1">Let's Connect</p>
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
            <div className="glass-card p-8 rounded-2xl border border-blue-500/10 bg-slate-950/40 relative">
              <span className="absolute -top-3 left-6 px-3 py-0.5 rounded-md text-[10px] font-mono tracking-wider border border-blue-500/20 text-blue-400 bg-slate-950 uppercase">
                Send a Message
              </span>

              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Subject / Topic
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Collaboration, Project Idea, Say Hello..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-800 focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/50 text-slate-200 text-sm placeholder-slate-600 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Message Details
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Savanth, I'd like to talk about..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-800 focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/50 text-slate-200 text-sm placeholder-slate-600 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold shadow-lg hover:shadow-blue-500/10 transition-all duration-200"
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
