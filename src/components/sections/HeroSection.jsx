import { useState } from "react";
import { FaGithub, FaLinkedin, FaDownload, FaEye } from "react-icons/fa";
import { glassTheme as theme } from "../../utils/theme";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export default function HeroSection({ setActivePage }) {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  const handleDownloadCV = async () => {
    // Dynamically import confetti to save initial bundle size
    const confetti = (await import("canvas-confetti")).default;
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#17171c", "#4d6978", "#d9c8b3", "#ffffff"],
    });
  };

  return (
    <section
      id="home"
      className="w-full h-full flex flex-col justify-center animate-fade-in py-4 lg:py-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 w-full items-center">
        {/* ── Left Column: Editorial Declaration ── */}
        <div className="lg:col-span-5 flex flex-col items-start text-left gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-[52px] md:text-[64px] lg:text-[88px] leading-[0.95] tracking-[-1.5px] font-normal text-[#17171c] drop-shadow-none">
              Hi, I'm <br />
              Thaha.
            </h1>
            <h2 className="text-[20px] lg:text-[22px] font-medium text-[#616161] tracking-tight pl-4 border-l-[3px] border-[#17171c] ml-1 mt-2">
              Web Developer
            </h2>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <button
              onClick={() => setIsCVModalOpen(true)}
              className={`px-8 py-3.5 flex items-center justify-center gap-2 text-[14px] font-bold ${theme.buttonSolid} transition-transform hover:-translate-y-1`}
            >
              <FaEye className="text-lg" /> View CV
            </button>
            <div className="flex gap-3">
              <a
                href="https://github.com/Thahaadly"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit my GitHub profile"
                className={`h-[48px] w-[48px] flex justify-center items-center ${theme.button}`}
                title="GitHub"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/thahaa/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit my LinkedIn profile"
                className={`h-[48px] w-[48px] flex justify-center items-center ${theme.button}`}
                title="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* ── Right Column: Media Composition ── */}
        <div className="lg:col-span-7 flex flex-col justify-center gap-6 relative lg:pl-4 min-h-[300px]">
          {/* Gradient Accent Hero Card */}
          <div className="w-full rounded-[22px] p-6 lg:p-8 flex flex-col bg-gradient-to-br from-[#182c3c] via-[#4d6978] to-[#d9c8b3] border border-transparent z-20 shadow-lg transition-transform hover:-translate-y-1 relative overflow-hidden">
            <div className="absolute inset-0 bg-[#000000] opacity-[0.05] mix-blend-multiply"></div>

            <div className="relative z-10 flex flex-col">
              <h3 className="text-[18px] font-medium text-[#ffffff] mb-3 tracking-tight">
                availability-status
              </h3>
              <p className="text-[15px] leading-relaxed text-[#f3f4f6] mb-6">
                A highly motivated front-end web developer with robust fullstack
                experience, ready to craft beautiful interfaces and scalable
                systems.
              </p>

              {/* Rule-separated bullet details */}
              <div className="border-t border-[#ffffff]/20 pt-5 flex flex-col gap-3">
                <div className="flex items-start gap-3 text-[14px] text-[#f3f4f6]">
                  <span className="text-[18px] leading-none mt-[-2px] text-[#ffffff]/40">
                    •
                  </span>
                  <span>
                    Supports full-time roles, remote work, and freelance.
                  </span>
                </div>
                <div className="flex items-start gap-3 text-[14px] text-[#f3f4f6]">
                  <span className="text-[18px] leading-none mt-[-2px] text-[#ffffff]/40">
                    •
                  </span>
                  <span>Base: Banjarmasin, Indonesia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── CV Viewer Modal ── */}
      <Dialog open={isCVModalOpen} onOpenChange={setIsCVModalOpen}>
        <DialogContent className="max-w-[95vw] lg:max-w-5xl h-[85vh] p-0 flex flex-col bg-[#ffffff] border-none rounded-[22px] shadow-2xl overflow-hidden gap-0">
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
    </section>
  );
}
