import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import PortfolioSection from "../components/sections/PortfolioSection";
import ContactSection from "../components/sections/ContactSection";
import ControlAssistant from "../components/ControlAssistant";

export default function Home() {
  const [activePage, setActivePage] = useState("home");

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [activePage]);
  return (
    <div className="relative flex flex-col h-screen overflow-hidden font-sans text-[#212121] transition-colors duration-300">
      {/* Background Canvas */}
      <div className="fixed inset-0 -z-10 bg-[#f2efe9] transition-colors duration-300">
        {/* Clean canvas background per Cohere guidelines. No ambient glows. */}
      </div>

      <ControlAssistant activePage={activePage} setActivePage={setActivePage} />

      <main
        className={`relative mx-auto flex flex-1 w-full max-w-6xl flex-col px-6 pb-12 md:px-10 overflow-y-auto ${activePage === "home" ? "pt-12" : "pt-4 md:pt-6"}`}
      >
        <div className="flex-1">
          {activePage === "home" && <HeroSection setActivePage={setActivePage} />}
          {activePage === "about" && <AboutSection />}
          {activePage === "portfolio" && <PortfolioSection />}
          {activePage === "contact" && <ContactSection />}
        </div>
        
        {/* Quirky Mini Footer */}
        <div className="w-full text-center mt-16 pt-6 border-t border-slate-200/50">
          <p className="text-[12px] md:text-[13px] text-slate-400 font-medium tracking-wide">
            Crafted with ☕ and passion by Thaha Wafiq Adly. © {new Date().getFullYear()}
          </p>
        </div>
      </main>
    </div>
  );
}
