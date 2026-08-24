import { useState, useEffect, lazy, Suspense } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaDownload, FaEye } from "react-icons/fa";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { glassTheme as theme } from "../utils/theme";
import HeroSection from "../components/sections/HeroSection";
import ControlAssistant from "../components/ControlAssistant";

// Lazy load non-critical sections to improve initial page load performance
const AboutSection = lazy(() => import("../components/sections/AboutSection"));
const WorkflowSection = lazy(() => import("../components/sections/WorkflowSection"));
const PortfolioSection = lazy(() => import("../components/sections/PortfolioSection"));
const ContactSection = lazy(() => import("../components/sections/ContactSection"));

export default function Home() {
  const [activePage, setActivePage] = useState("home");
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

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

  const handleDownloadCV = async () => {
    const confetti = (await import("canvas-confetti")).default;
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#17171c", "#4d6978", "#d9c8b3", "#ffffff"],
    });
  };

  return (
    <div className="relative flex flex-col h-screen overflow-hidden font-sans text-[#212121] transition-colors duration-300">
      {/* Background Canvas */}
      <div className="fixed inset-0 -z-10 bg-[#f2efe9] transition-colors duration-300">
        {/* Clean canvas background per Cohere guidelines. No ambient glows. */}
      </div>

      <ControlAssistant activePage={activePage} setActivePage={setActivePage} setIsCVModalOpen={setIsCVModalOpen} />

      <main
        className={`relative mx-auto flex flex-1 w-full max-w-6xl flex-col px-6 md:px-10 overflow-y-auto ${activePage === "home" ? "pt-12" : "pt-4 md:pt-6"}`}
      >
        <div className="flex-1">
          <Suspense fallback={<div className="flex w-full h-full justify-center items-center opacity-50"><span className="animate-pulse">Loading...</span></div>}>
            {activePage === "home" && <HeroSection setActivePage={setActivePage} setIsCVModalOpen={setIsCVModalOpen} />}
            {activePage === "about" && <AboutSection />}
            {activePage === "workflow" && <WorkflowSection />}
            {activePage === "portfolio" && <PortfolioSection />}
            {activePage === "contact" && <ContactSection />}
          </Suspense>
        </div>
        
        {/* Quirky Mini Footer */}
        <div className="w-full text-center mt-16 pt-6 pb-28 md:pb-32 border-t border-slate-200/50">
          <p className="text-[12px] md:text-[13px] text-slate-400 font-medium tracking-wide">
            Crafted with ☕ and passion by Thaha Wafiq Adly. © {new Date().getFullYear()}
          </p>
        </div>
      </main>

      {/* ── Global CV Viewer Modal ── */}
      <Dialog open={isCVModalOpen} onOpenChange={setIsCVModalOpen}>
        <DialogContent className="max-w-[95vw] lg:max-w-5xl h-[85vh] p-0 flex flex-col bg-[#ffffff] border-none rounded-[22px] shadow-2xl overflow-hidden gap-0 z-[100]">
          <div className="sr-only">
            <DialogTitle>Curriculum Vitae - Thaha Wafiq Adly</DialogTitle>
            <DialogDescription>Inline PDF viewer of my CV</DialogDescription>
          </div>
          
          {/* Modal Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#e5e7eb] bg-[#f9fafb] shrink-0">
            <h3 className="font-bold text-[#17171c] text-[18px]">My Resume</h3>
            <a
              href="/CV-Thaha-Wafiq-Adly.pdf"
              download="CV_Thaha_Wafiq_Adly.pdf"
              onClick={handleDownloadCV}
              className={`px-5 py-2.5 flex items-center justify-center gap-2 text-[13px] font-bold ${theme.buttonSolid} rounded-full`}
            >
              <FaDownload /> Download PDF
            </a>
          </div>

          {/* Modal Body: PDF Iframe */}
          <div className="flex-grow w-full relative bg-[#e5e7eb]">
            <iframe
              src="/CV-Thaha-Wafiq-Adly.pdf#toolbar=0&navpanes=0&scrollbar=0"
              className="w-full h-full border-none"
              title="CV Thaha Wafiq Adly"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
