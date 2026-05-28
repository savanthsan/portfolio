import { Skills } from "@/components/ui/skills-showcase";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen relative flex items-center justify-center bg-[#F8FAFC] p-8 w-full perspective-container overflow-hidden">
      {/* receding 3D perspective grid background */}
      <div className="perspective-grid-plane opacity-25 animate-pulse-slow" />

      {/* Floating back button */}
      <div className="absolute top-8 left-8 z-20">
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider bg-white text-[#0F172A] border-2 border-[#0F172A] shadow-[2.5px_2.5px_0px_0px_#00BD7D] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#00BD7D] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all duration-150 rounded"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Portfolio</span>
        </Link>
      </div>

      <div className="relative z-10 w-full flex items-center justify-center py-16">
        <Skills />
      </div>
    </main>
  );
}
