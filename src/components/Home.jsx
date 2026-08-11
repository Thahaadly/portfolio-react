import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaDownload, FaGithub, FaMapMarkerAlt, FaLinkedin, FaReact, FaLaravel, FaPython } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="bg-white min-h-screen font-sans text-[#212121]">
      {/* Announcement Bar */}
      <div className="bg-black text-white h-[36px] flex items-center justify-center px-4 text-[12px] tracking-wide">
        <span className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Available for Work
        </span>
      </div>

      {/* Main Container */}
      <main className="max-w-[1440px] mx-auto">
        {/* Hero Section */}
        <section className="pt-24 md:pt-[120px] pb-16 px-6 flex flex-col items-center text-center">
          <h1 className="text-[50px] md:text-[96px] leading-[1.1] md:leading-none tracking-[-1px] md:tracking-[-1.92px] font-normal mb-6 md:mb-8 text-[#17171c] max-w-4xl">
            Hi, I'm Thaha.
          </h1>
          <p className="text-[16px] md:text-[18px] text-[#212121] max-w-2xl mb-10 leading-[1.5]">
            Fullstack Web Developer based in Banjarmasin. Merangkai antarmuka
            pengguna yang memukau dengan backend, database, dan API yang andal.
          </p>

          <div className="flex items-center gap-6">
            <Button asChild className="rounded-full px-6 text-[14px]" size="lg">
              <a href="/CV-Thaha-Wafiq-Adly.pdf" download="CV_Thaha_Wafiq_Adly.pdf">
                <FaDownload className="mr-2" /> Download CV
              </a>
            </Button>
            <a
              href="https://github.com/Thahaadly"
              target="_blank"
              rel="noreferrer"
              className="text-[#212121] text-[16px] py-2 border-b border-[#212121] hover:text-[#1863dc] hover:border-[#1863dc] transition-colors flex items-center gap-2"
            >
              Explore GitHub <FaGithub />
            </a>
          </div>
        </section>

        {/* Hero Media Composition */}
        <section className="px-6 pb-[80px]">
          <div className="flex flex-col md:flex-row gap-6 h-auto md:h-[600px]">
            {/* Terminal Mockup (Wide Card) */}
            <div className="flex-grow bg-[#17171c] text-white rounded-[22px] p-8 md:p-12 relative overflow-hidden flex flex-col shadow-sm border border-[#212121]">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-3 h-3 rounded-full bg-[#ff7759]"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span className="font-mono uppercase text-[12px] tracking-[0.28px] text-[#93939f] ml-2">
                  ~/portfolio/thaha.sh
                </span>
              </div>
              <h3 className="text-[32px] md:text-[48px] leading-[1.2] tracking-[-0.48px] max-w-md mb-6">
                Interactive Terminal
              </h3>
              <p className="text-[16px] text-[#93939f] max-w-sm mb-auto">
                Explore my technical background directly from the command line.
              </p>

              {/* Mockup Element */}
              <div className="mt-12 bg-black/40 rounded-[16px] p-6 border border-white/10 backdrop-blur-sm self-end w-full md:w-[90%] lg:w-[80%] h-48 overflow-y-auto">
                <div className="font-mono text-sm sm:text-base text-[#d9d9dd] flex flex-col">
                  <div className="flex gap-2 text-emerald-400 mb-2">
                    <span>$</span>
                    <span>./run_profile.sh</span>
                  </div>
                  <div className="text-slate-500 mb-4">
                    Loading profile modules... [OK]
                  </div>

                  <TypeAnimation
                    sequence={[
                      1000,
                      '$ echo "Merangkai antarmuka pengguna..."\n\n> Merangkai antarmuka pengguna yang memukau dengan backend, database, dan API yang andal.\n\n',
                      1500,
                      '$ echo "Merangkai antarmuka pengguna..."\n\n> Merangkai antarmuka pengguna yang memukau dengan backend, database, dan API yang andal.\n\n$ status --tech-stack\n\n[ React, Laravel, MySQL, Python ]\n\n$ ping creativity...\nSuccess! 100% packet received.\n\n$ _',
                    ]}
                    speed={70}
                    repeat={0}
                    wrapper="div"
                    className="whitespace-pre-wrap leading-relaxed text-[#f1f5ff]"
                    cursor={false}
                  />
                </div>
              </div>
            </div>

            {/* Location & Social Card (Narrow Card) */}
            <div className="w-full md:w-[400px] lg:w-[480px] bg-[#eeece7] rounded-[22px] p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f1f5ff] to-[#eeece7] opacity-80 group-hover:scale-105 transition-transform duration-700 ease-in-out"></div>
              {/* Decorative Abstract Shapes */}
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#1863dc]/10 rounded-full blur-3xl"></div>
              <div className="absolute top-20 -left-10 w-48 h-48 bg-[#ff7759]/10 rounded-full blur-3xl"></div>

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <span className="px-3 py-1 bg-white/60 backdrop-blur-md rounded-full text-[12px] uppercase font-mono tracking-wider text-[#17171c] flex items-center gap-2 w-fit">
                    <FaMapMarkerAlt className="text-[#ff7759]" /> Location
                  </span>
                </div>
                <div>
                  <h4 className="text-[24px] leading-[1.3] text-[#17171c] mb-2 font-medium">
                    Banjarmasin, ID
                  </h4>
                  <p className="text-[#616161] text-[16px] mb-6">
                    Available for Remote / Hybrid work.
                  </p>

                  <a
                    href="https://www.linkedin.com/in/thahaa/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-white border border-[#d9d9dd] text-[#17171c] px-4 py-2 rounded-full text-[14px] font-medium hover:border-[#17171c] transition-colors"
                  >
                    <FaLinkedin className="text-[#1863dc]" /> Connect on
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Strip */}
        <section className="py-[80px] px-6 text-center">
          <p className="text-[14px] font-mono uppercase tracking-[0.28px] text-[#93939f] mb-12">
            Core Tech Ecosystem
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-3 text-[24px] font-bold text-[#212121]">
              <FaReact className="text-3xl text-emerald-500" /> React JS
            </div>
            <div className="flex items-center gap-3 text-[24px] font-bold text-[#212121]">
              <FaLaravel className="text-3xl text-rose-500" /> Laravel
            </div>
            <div className="flex items-center gap-3 text-[24px] font-bold text-[#212121]">
              <SiMysql className="text-3xl text-cyan-600" /> MySQL
            </div>
            <div className="flex items-center gap-3 text-[24px] font-bold text-[#212121]">
              <FaPython className="text-3xl text-yellow-500" /> Python
            </div>
          </div>
        </section>

        {/* Dark Feature Band */}
        <section className="px-4 md:px-6 mb-[80px]">
          <div className="bg-[#003c33] text-white rounded-[22px] py-[80px] px-8 md:px-16 flex flex-col lg:flex-row items-start justify-between gap-12">
            <div className="max-w-xl">
              <h2 className="text-[48px] md:text-[60px] leading-[1] tracking-[-1.2px] mb-6">
                Specialized in end-to-end architecture.
              </h2>
              <p className="text-[18px] text-[#edfce9]/80 leading-[1.4] mb-8">
                From pixel-perfect React interfaces to robust Laravel APIs and
                Python data analytics, I build complete systems that scale
                gracefully.
              </p>
              <Button
                onClick={() => (window.location.href = "#portfolio")}
                className="bg-white text-[#003c33] rounded-full hover:bg-[#edfce9] px-6 text-[14px]"
                size="lg"
              >
                View Portfolio
              </Button>
            </div>

            {/* Capability Cards inside Dark Band */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full lg:w-1/2">
              <div className="bg-black/20 border border-white/10 rounded-[16px] p-6 backdrop-blur-sm">
                <div className="w-10 h-10 border border-white/20 rounded-[8px] mb-6 flex items-center justify-center text-[#edfce9]">
                  <FaReact className="text-xl" />
                </div>
                <h4 className="text-[24px] mb-2">Frontend Architecture</h4>
                <p className="text-[#edfce9]/60 text-[16px] leading-[1.5]">
                  Membangun antarmuka dinamis dengan React JS dan Tailwind CSS.
                  Fokus pada UX yang mulus dan clean code.
                </p>
              </div>
              <div className="bg-black/20 border border-white/10 rounded-[16px] p-6 backdrop-blur-sm">
                <div className="w-10 h-10 border border-white/20 rounded-[8px] mb-6 flex items-center justify-center text-[#edfce9]">
                  <FaLaravel className="text-xl" />
                </div>
                <h4 className="text-[24px] mb-2">Backend & Database</h4>
                <p className="text-[#edfce9]/60 text-[16px] leading-[1.5]">
                  Merancang REST API aman dan arsitektur database MySQL yang
                  efisien menggunakan framework PHP modern.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
