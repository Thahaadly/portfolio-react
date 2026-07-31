
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import { glassTheme as theme } from '../../utils/theme';

export default function HeroSection({ setActivePage }) {
    return (
        <section id="home" className="w-full h-full flex flex-col justify-center animate-fade-in py-4 lg:py-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 w-full items-center">
                
                {/* ── Left Column: Editorial Declaration ── */}
                <div className="lg:col-span-5 flex flex-col items-start text-left gap-8">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-[64px] lg:text-[88px] leading-[0.95] tracking-[-1.5px] font-normal text-[#17171c] dark:text-[#ffffff] drop-shadow-none">
                            Hi, I'm <br />
                            Thaha.
                        </h1>
                        <h2 className="text-[20px] lg:text-[22px] font-medium text-[#616161] dark:text-[#d9d9dd] tracking-tight pl-4 border-l-[3px] border-[#17171c] dark:border-[#ffffff] ml-1 mt-2">
                            Web Developer
                        </h2>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-4 mt-4">
                        <a href="/CV-Thaha-Wafiq-Adly.pdf" download="CV_Thaha_Wafiq_Adly.pdf" className={`px-8 py-3.5 flex items-center justify-center gap-2 text-[14px] font-bold ${theme.buttonSolid}`}>
                            <FaDownload /> Download CV
                        </a>
                        <div className="flex gap-3">
                            <a href="https://github.com/Thahaadly" target="_blank" rel="noreferrer" className={`h-[48px] w-[48px] flex justify-center items-center ${theme.button}`} title="GitHub">
                                <FaGithub className="text-xl" />
                            </a>
                            <a href="https://www.linkedin.com/in/thahaa/" target="_blank" rel="noreferrer" className={`h-[48px] w-[48px] flex justify-center items-center ${theme.button}`} title="LinkedIn">
                                <FaLinkedin className="text-xl" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* ── Right Column: Media Composition ── */}
                <div className="lg:col-span-7 flex flex-col justify-center gap-6 relative lg:pl-4 min-h-[300px]">

                    {/* 2. Warm Stone Product Card (Aligned & Clean) */}
                    <div className="w-full rounded-[22px] p-6 lg:p-8 flex flex-col bg-[#f2efe9] dark:bg-[#1a1a1c] border border-[#e5e7eb] dark:border-[#262626] z-20 shadow-sm transition-transform hover:-translate-y-1">
                        <h3 className="text-[18px] font-medium text-[#17171c] dark:text-[#ffffff] mb-3 tracking-tight">availability-status</h3>
                        <p className="text-[15px] leading-relaxed text-[#616161] dark:text-[#d9d9dd] mb-6">
                            A highly motivated front-end web developer with robust fullstack experience, ready to craft beautiful interfaces and scalable systems.
                        </p>
                        
                        {/* Rule-separated bullet details */}
                        <div className="border-t border-[#17171c]/10 dark:border-[#ffffff]/10 pt-5 flex flex-col gap-3">
                            <div className="flex items-start gap-3 text-[14px] text-[#17171c] dark:text-[#ffffff]">
                                <span className="text-[18px] leading-none mt-[-2px] text-[#17171c]/40 dark:text-[#ffffff]/40">•</span>
                                <span>Supports full-time roles, remote work, and freelance.</span>
                            </div>
                            <div className="flex items-start gap-3 text-[14px] text-[#17171c] dark:text-[#ffffff]">
                                <span className="text-[18px] leading-none mt-[-2px] text-[#17171c]/40 dark:text-[#ffffff]/40">•</span>
                                <span>Base: Banjarmasin, Indonesia</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
