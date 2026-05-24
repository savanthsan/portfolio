import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Learning from "@/components/Learning";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SpotlightBg from "@/components/SpotlightBg";

export default function Home() {
  return (
    <>
      {/* Interactive Cursor Spotlight Background */}
      <SpotlightBg />

      {/* Navigation Menu Header */}
      <Navbar />

      {/* Main Page Layout Sections */}
      <main className="flex flex-col flex-1 w-full min-h-screen relative z-10">
        {/* Intro Hero with interactive MagnetLines */}
        <Hero />

        {/* Biography Details */}
        <About />

        {/* Education Timeline */}
        <Education />

        {/* Skills Cards & Badges */}
        <Skills />

        {/* Filterable Project Showcase */}
        <Projects />

        {/* Currently Learning Tracker */}
        <Learning />

        {/* Clipboard Copy Contact Form */}
        <Contact />
      </main>

      {/* Page Footer */}
      <Footer />
    </>
  );
}
