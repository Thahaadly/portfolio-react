import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaDatabase, FaServer, FaCode, FaRocket } from "react-icons/fa";
import { SiReact, SiLaravel, SiMysql, SiTailwindcss, SiGithub, SiVercel, SiFigma } from "react-icons/si";

const workflowSteps = [
  {
    id: "01",
    title: "Discovery & Architecture",
    description: "Menganalisis kebutuhan bisnis, merancang ERD, dan menentukan arsitektur API. Fase ini memastikan fondasi yang kokoh sebelum koding dimulai.",
    icon: FaDatabase,
    tech: [
      { icon: SiFigma, color: "#F24E1E", shadow: "rgba(242,78,30,0.4)" }, 
      { icon: FaDatabase, color: "#4479A1", shadow: "rgba(68,121,161,0.4)" }
    ],
  },
  {
    id: "02",
    title: "Backend Foundation",
    description: "Membangun RESTful API yang aman dan scalable menggunakan arsitektur MVC. Mengatur autentikasi, role-based access, dan optimasi query database.",
    icon: FaServer,
    tech: [
      { icon: SiLaravel, color: "#FF2D20", shadow: "rgba(255,45,32,0.4)" }, 
      { icon: FaDatabase, color: "#F29111", shadow: "rgba(242,145,17,0.4)" } 
    ],
  },
  {
    id: "03",
    title: "Frontend Crafting",
    description: "Menerjemahkan UI/UX menjadi komponen interaktif dengan React. Mengelola state global dan mengintegrasikannya dengan endpoint API secara mulus.",
    icon: FaCode,
    tech: [
      { icon: SiReact, color: "#61DAFB", shadow: "rgba(97,218,251,0.4)" }, 
      { icon: SiTailwindcss, color: "#06B6D4", shadow: "rgba(6,182,212,0.4)" }
    ],
  },
  {
    id: "04",
    title: "Testing & Deployment",
    description: "Melakukan pengujian akhir, optimasi performa, menghilangkan bug, dan mengunggah aplikasi ke server produksi agar siap digunakan oleh publik.",
    icon: FaRocket,
    tech: [
      { icon: SiGithub, color: "#ffffff", shadow: "rgba(255,255,255,0.4)" }, 
      { icon: SiVercel, color: "#ffffff", shadow: "rgba(255,255,255,0.4)" }
    ],
  },
];

export default function WorkflowSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Animasi ketinggian garis dari 0% ke 100%
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="workflow" className="w-full bg-transparent pt-4 pb-16 lg:pt-8 lg:pb-24 overflow-hidden px-4 md:px-6 lg:px-10 max-w-6xl mx-auto">
      
      {/* Unified Main Card (Matching Tech Stack Card) */}
      <div className="w-full rounded-[24px] md:rounded-[32px] border border-transparent bg-gradient-to-br from-[#182c3c] via-[#4d6978] to-[#d9c8b3] shadow-lg relative p-5 md:p-10 lg:p-16 overflow-hidden">
        
        {/* Dark overlay blend for the card */}
        <div className="absolute inset-0 bg-[#000000] opacity-[0.05] mix-blend-multiply pointer-events-none"></div>

        {/* Topography Animation Layer */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <style>{`
            @keyframes spin-slow {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            .contour-1 {
              position: absolute;
              width: 200%;
              height: 200%;
              top: -50%;
              left: -50%;
              background-image: repeating-radial-gradient(
                ellipse at center,
                transparent 0,
                transparent 30px,
                rgba(255, 255, 255, 0.05) 31px,
                transparent 32px
              );
              animation: spin-slow 90s linear infinite;
              -webkit-mask-image: radial-gradient(ellipse at center, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 60%);
              mask-image: radial-gradient(ellipse at center, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 60%);
            }
            .contour-2 {
              position: absolute;
              width: 150%;
              height: 150%;
              bottom: -25%;
              right: -25%;
              background-image: repeating-radial-gradient(
                circle at center,
                transparent 0,
                transparent 45px,
                rgba(255, 255, 255, 0.03) 46px,
                transparent 47px
              );
              animation: spin-slow 120s linear infinite reverse;
              -webkit-mask-image: radial-gradient(circle at center, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 70%);
              mask-image: radial-gradient(circle at center, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 70%);
            }
          `}</style>
          <div className="contour-1" />
          <div className="contour-2" />
        </div>

        {/* Header Section */}
        <div className="mb-20 text-center max-w-3xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="text-[#ffffff]/70 font-bold tracking-widest text-[11px] uppercase mb-4 block">
              How I Work
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#ffffff] leading-tight tracking-[-1px]">
              Development <br className="md:hidden" /> Timeline.
            </h2>
            <p className="mt-6 text-[#f3f4f6] text-base md:text-lg max-w-2xl mx-auto leading-relaxed opacity-90">
              Pendekatan terstruktur dari konsepsi ide hingga produk siap rilis. Memastikan kualitas dan performa di setiap fase pengembangan.
            </p>
          </motion.div>
        </div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative w-full max-w-5xl mx-auto z-10">
          
          {/* Garis Dasar (Glassmorphic) */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[3px] md:w-[4px] bg-[#ffffff]/10 -translate-x-1/2 rounded-full" />
          
          {/* Garis Progress (Putih Terang) */}
          <motion.div
            className="absolute left-[20px] md:left-1/2 top-0 w-[3px] md:w-[4px] bg-[#ffffff] shadow-[0_0_15px_rgba(255,255,255,0.5)] -translate-x-1/2 rounded-full z-10"
            style={{ height: lineHeight }}
          />

          {/* Iterasi Langkah-Langkah */}
          <div className="relative z-20 flex flex-col">
            {workflowSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              const Icon = step.icon;
              const isLast = index === workflowSteps.length - 1;
              const primaryShadow = step.tech[0]?.shadow || "rgba(255,255,255,0.1)";

              return (
                <div 
                  key={step.id}
                  className={`relative flex flex-col md:flex-row items-start w-full ${isEven ? 'md:flex-row-reverse' : ''} ${!isLast ? 'pb-28 md:pb-36' : ''}`}
                >
                  {/* Bagian Kosong untuk memberi ruang di desktop */}
                  <div className="hidden md:block md:w-1/2" />
                  
                  {/* Titik Tengah (Node Angka) */}
                  <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 top-0 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#ffffff]/20 bg-[#ffffff]/10 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.2)] z-30">
                    <span className="text-xs md:text-sm font-bold text-[#ffffff]">{step.id}</span>
                  </div>

                  {/* Deretan Logo Tech di Sepanjang Garis (jika bukan langkah terakhir) */}
                  {!isLast && (
                    <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 top-14 md:top-16 bottom-0 py-8 flex flex-col items-center justify-evenly z-20 pointer-events-none">
                      {step.tech.map((TechItem, idx) => {
                        const TechIcon = TechItem.icon;
                        return (
                          <div 
                            key={idx}
                            className="w-7 h-7 md:w-10 md:h-10 rounded-full bg-[#ffffff]/10 backdrop-blur-sm border border-[#ffffff]/20 flex items-center justify-center shadow-sm relative z-30 transition-all duration-300 pointer-events-auto"
                            style={{ color: TechItem.color }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)';
                                e.currentTarget.style.boxShadow = `0 0 15px ${TechItem.shadow}`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                          >
                            <TechIcon className="text-sm md:text-base drop-shadow-sm" />
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Konten Kartu */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={`w-full md:w-1/2 pl-12 md:pl-0 pt-1 md:pt-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}
                  >
                    <div 
                      className={`p-5 md:p-8 rounded-[20px] md:rounded-[24px] bg-[#ffffff]/10 border border-[#ffffff]/20 hover:bg-[#ffffff]/15 transition-all duration-300 relative group overflow-hidden ${isEven ? 'md:items-end' : 'md:items-start'} flex flex-col`}
                      style={{ boxShadow: `0 8px 32px ${primaryShadow.replace('0.4', '0.1')}` }}
                    >
                      
                      {/* Latar Angka Transparan Raksasa */}
                      <span className={`absolute -bottom-8 ${isEven ? '-left-4' : '-right-4'} text-[120px] font-black text-[#ffffff] opacity-10 leading-none select-none z-0 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-20`}>
                        {step.id}
                      </span>

                      <div className="relative z-10 w-full">
                        <div className={`flex items-center gap-3 md:gap-4 mb-3 md:mb-4 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                          <div 
                            className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-[#ffffff]/10 border border-[#ffffff]/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300"
                            style={{ boxShadow: `0 0 15px ${primaryShadow}` }}
                          >
                            <Icon className="text-lg md:text-xl text-[#ffffff]" />
                          </div>
                          <h3 className="font-bold text-[18px] md:text-[20px] text-[#ffffff]">{step.title}</h3>
                        </div>
                        <p className={`text-[14.5px] leading-relaxed text-[#f3f4f6] mt-1 text-left ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
