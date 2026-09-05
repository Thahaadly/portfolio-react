import { FaGithub, FaLinkedin, FaDownload, FaEye } from "react-icons/fa";
import { glassTheme as theme } from "../../utils/theme";

export default function HeroSection({ setActivePage, setIsCVModalOpen }) {
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
              Web Developer & <br className="md:hidden" /> Data Analyst
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
                A versatile Fullstack Web Developer & Data Analyst, ready to craft beautiful interfaces, scalable systems, and data-driven insights.
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
    </section>
  );
}
