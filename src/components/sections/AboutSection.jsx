import { useState } from "react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Timeline from "../Timeline";
import profileImage from "../../assets/fix.jpeg";
import { mockProjects } from "../../data";
import {
  FaUserAstronaut,
  FaCode,
  FaHistory,
  FaGraduationCap,
  FaLaptopCode,
  FaReact,
  FaLaravel,
  FaBrain,
  FaPython,
  FaCamera,
  FaGithub,
  FaDatabase,
  FaChartPie,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const CORE_TECH = [
  { name: "React", icon: FaReact, color: "#61DAFB", animation: "animate-[spin_4s_linear_infinite]" },
  { name: "Laravel", icon: FaLaravel, color: "#FF2D20", animation: "anim-float" },
  { name: "MySQL", icon: FaDatabase, color: "#F29111", animation: "anim-swing" }
];
const GITHUB_URL = "https://github.com/Thahaadly";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", label: "Profile", icon: <FaUserAstronaut /> },
    { id: "skills", label: "Tech Stack", icon: <FaCode /> },
    { id: "experience", label: "Experience", icon: <FaHistory /> },
    { id: "insights", label: "Insights", icon: <FaChartPie /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 lg:gap-12 items-center animate-fade-in pt-2">
            <div className="flex flex-col justify-center h-full space-y-8">
              {/* Status Badge */}
              <div className="flex items-center gap-2 px-3 py-1.5 w-fit rounded-[32px] bg-emerald-50 border border-emerald-200">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[12px] font-bold text-emerald-600 uppercase tracking-wider">
                  Available for Work
                </span>
              </div>

              {/* Bio */}
              <div>
                <h2 className="text-[40px] md:text-[56px] leading-[1.05] tracking-[-1.12px] font-normal text-[#17171c] mb-6">
                  Web Dev & <br className="hidden lg:block" /> Data Analyst
                </h2>
                <p className="text-[16px] md:text-[18px] leading-relaxed text-[#616161]">
                  Lulusan Ilmu Komputer yang berfokus sebagai Front-End Web Developer, dibekali dengan pemahaman Fullstack. Terbiasa mengerjakan ekosistem antarmuka untuk platform web maupun mobile, serta memiliki pengalaman praktis dalam menangani integrasi Back-End agar sebuah aplikasi bisa berjalan dengan baik secara utuh.
                </p>
              </div>

              {/* Quick Facts List (Flat Minimalist) */}
              <div className="flex flex-col border-t border-[#e5e7eb]">
                {/* Education */}
                <div className="flex items-center gap-4 py-4 border-b border-[#e5e7eb]">
                  <div className="h-12 w-12 rounded-full bg-[#f1f5ff] flex items-center justify-center shrink-0">
                    <FaGraduationCap className="text-xl text-[#17171c]" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-[#616161] uppercase tracking-widest mb-0.5">
                      Education
                    </p>
                    <p className="text-[15px] font-bold text-[#17171c]">
                      S1 Ilmu Komputer
                    </p>
                  </div>
                </div>
                {/* Focus */}
                <div className="flex items-center gap-4 py-4 border-b border-[#e5e7eb]">
                  <div className="h-12 w-12 rounded-full bg-[#f1f5ff] flex items-center justify-center shrink-0">
                    <FaLaptopCode className="text-xl text-[#17171c]" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-[#616161] uppercase tracking-widest mb-0.5">
                      Focus
                    </p>
                    <p className="text-[15px] font-bold text-[#17171c]">
                      Front-End Web
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hybrid Identity Card */}
            <div className="w-full flex justify-center items-center">
              <div className="w-full max-w-[320px] rounded-[22px] p-2 bg-gradient-to-br from-[#182c3c] via-[#4d6978] to-[#d9c8b3] border border-transparent shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-[#000000] opacity-[0.05] mix-blend-multiply pointer-events-none"></div>

                <div className="relative z-10 flex flex-col">
                  <div className="w-full rounded-[18px] overflow-hidden aspect-[4/5]">
                    <img
                      src={profileImage}
                      alt="Thaha Wafiq Adly"
                      className="w-full h-full object-cover object-top grayscale-[15%] hover:grayscale-0 transition-all duration-700"
                    />
                  </div>

                  <div className="mt-2 rounded-[18px] bg-[#ffffff]/10 border border-[#ffffff]/20 p-5 flex flex-col gap-4">
                    <div>
                      <p className="text-[11px] font-bold text-[#ffffff]/70 uppercase tracking-widest mb-1">
                        Projects
                      </p>
                      <p className="text-[28px] font-bold text-[#ffffff] leading-none tracking-tight">
                        {mockProjects.length}+
                      </p>
                      <p className="text-[13px] text-[#f3f4f6]/80 mt-1">
                        Built & shipped
                      </p>
                    </div>

                    <div>
                      <p className="text-[11px] font-bold text-[#ffffff]/70 uppercase tracking-widest mb-2.5">
                        Core Stack
                      </p>
                      <div className="flex gap-1.5">
                        <style>{`
                          @keyframes tech-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
                          @keyframes tech-swing { 0%, 100% { transform: rotate(-8deg); } 50% { transform: rotate(8deg); } }
                          .anim-float { animation: tech-float 3s ease-in-out infinite; }
                          .anim-swing { animation: tech-swing 3s ease-in-out infinite; }
                        `}</style>
                        {CORE_TECH.map((tech) => {
                          const Icon = tech.icon;
                          return (
                            <span
                              key={tech.name}
                              className="px-2.5 py-1.5 rounded-full text-[11px] font-bold text-[#ffffff] bg-[#ffffff]/10 border border-[#ffffff]/20 flex items-center gap-1.5 hover:bg-[#ffffff]/20 transition-colors whitespace-nowrap"
                            >
                              <Icon className={`text-[13px] ${tech.animation}`} style={{ color: tech.color }} />
                              {tech.name}
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    <a
                      href={GITHUB_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit my GitHub profile"
                      className="inline-flex items-center justify-center gap-2 w-full rounded-[32px] py-3 text-[13px] font-bold bg-[#ffffff] text-[#17171c] hover:bg-[#f3f4f6] transition-colors"
                    >
                      <FaGithub className="text-base" />
                      View on GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "skills":
        const techIcons = [
          {
            icon: FaReact,
            color: "#61DAFB",
            shadow: "shadow-[0_0_15px_rgba(97,218,251,0.4)]",
          },
          {
            icon: FaLaravel,
            color: "#FF2D20",
            shadow: "shadow-[0_0_15px_rgba(255,45,32,0.4)]",
          },
          {
            icon: SiTailwindcss,
            color: "#06B6D4",
            shadow: "shadow-[0_0_15px_rgba(6,182,212,0.4)]",
          },
          {
            icon: FaDatabase,
            color: "#F29111",
            shadow: "shadow-[0_0_15px_rgba(242,145,17,0.4)]",
          },
          {
            icon: FaPython,
            color: "#3776AB",
            shadow: "shadow-[0_0_15px_rgba(55,118,171,0.4)]",
          },
          {
            icon: FaBrain,
            color: "#F59E0B",
            shadow: "shadow-[0_0_15px_rgba(245,158,11,0.4)]",
          },
        ];

        return (
          <div className="flex flex-col animate-fade-in pt-2 w-full max-w-6xl mx-auto">
            <style>{`
                            @keyframes orbit { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                            @keyframes orbit-reverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
                            .animate-orbit { animation: orbit 25s linear infinite; }
                            .animate-orbit-reverse { animation: orbit-reverse 25s linear infinite; }
                        `}</style>

            {/* Unified Main Card */}
            <div className="w-full rounded-[32px] border border-transparent bg-gradient-to-br from-[#182c3c] via-[#4d6978] to-[#d9c8b3] shadow-lg flex flex-col lg:flex-row overflow-hidden relative">
              <div className="absolute inset-0 bg-[#000000] opacity-[0.05] mix-blend-multiply pointer-events-none"></div>

              {/* Left Column: Half-Circle Orbit */}
              <div className="w-full lg:w-[45%] min-h-[400px] lg:min-h-full relative overflow-hidden bg-transparent flex items-center border-b lg:border-b-0 lg:border-r border-[#ffffff]/10">
                {/* Center Anchor at the left edge (handles scale and translation) */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[440px] h-[440px] scale-[0.6] sm:scale-[0.75] md:scale-100 origin-center">
                  {/* The animated orbit layer */}
                  <div className="w-full h-full rounded-full border border-dashed border-[#ffffff]/30 animate-orbit">
                    {techIcons.map((item, index) => {
                      const angle = (index / techIcons.length) * 360;
                      const Icon = item.icon;
                      return (
                        /* Position on orbit */
                        <div
                          key={index}
                          className="absolute top-1/2 left-1/2 -mt-7 -ml-7"
                          style={{
                            transform: `rotate(${angle}deg) translateX(220px)`,
                          }}
                        >
                          {/* Cancel initial angle */}
                          <div style={{ transform: `rotate(-${angle}deg)` }}>
                            {/* Cancel orbit rotation over time */}
                            <div
                              className={`animate-orbit-reverse w-14 h-14 bg-[#ffffff]/10 backdrop-blur-sm border border-[#ffffff]/20 rounded-full flex items-center justify-center ${item.shadow}`}
                            >
                              <Icon
                                className="text-[26px]"
                                style={{ color: item.color }}
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Label in the center of the orbit */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-12">
                  <h3
                    className="text-[40px] font-bold text-[#ffffff] tracking-tighter opacity-20"
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                    }}
                  >
                    ECOSYSTEM
                  </h3>
                </div>
              </div>

              {/* Right Column: Unified Capabilities List (Nested Cards) */}
              <div className="w-full lg:w-[55%] flex flex-col p-6 md:p-10 bg-transparent relative z-10">
                <h2 className="text-[28px] md:text-[32px] font-bold text-[#ffffff] mb-6 tracking-tight px-2">
                  Core Capabilities
                </h2>

                <div className="flex flex-col gap-4">
                  {/* Card 1: Frontend */}
                  <div
                    className="p-6 rounded-[24px] bg-[#ffffff]/10 border border-[#ffffff]/20 shadow-[0_8px_24px_rgba(97,218,251,0.12)] hover:shadow-[0_8px_32px_rgba(97,218,251,0.25)] transition-all duration-300 group animate-fade-in"
                    style={{
                      animationFillMode: "both",
                      animationDelay: "100ms",
                    }}
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="h-12 w-12 rounded-full bg-[#ffffff]/10 border border-[#ffffff]/20 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(97,218,251,0.3)] group-hover:scale-110 transition-transform duration-300">
                        <FaReact
                          style={{ color: "#61DAFB" }}
                          className="text-xl"
                        />
                      </div>
                      <h3 className="font-bold text-[18px] md:text-[20px] text-[#ffffff]">
                        Frontend Architecture
                      </h3>
                    </div>
                    <p className="text-[14.5px] leading-relaxed text-[#f3f4f6] mt-1">
                      Membangun antarmuka dinamis dan responsif dengan React JS
                      dan Tailwind CSS. Fokus pada UX yang mulus, state
                      management, dan clean code principles.
                    </p>
                  </div>

                  {/* Card 2: Backend */}
                  <div
                    className="p-6 rounded-[24px] bg-[#ffffff]/10 border border-[#ffffff]/20 shadow-[0_8px_24px_rgba(255,45,32,0.08)] hover:shadow-[0_8px_32px_rgba(255,45,32,0.2)] transition-all duration-300 group animate-fade-in"
                    style={{
                      animationFillMode: "both",
                      animationDelay: "200ms",
                    }}
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="h-12 w-12 rounded-full bg-[#ffffff]/10 border border-[#ffffff]/20 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(255,45,32,0.3)] group-hover:scale-110 transition-transform duration-300">
                        <FaLaravel
                          style={{ color: "#FF2D20" }}
                          className="text-xl"
                        />
                      </div>
                      <h3 className="font-bold text-[18px] md:text-[20px] text-[#ffffff]">
                        Backend & Database
                      </h3>
                    </div>
                    <p className="text-[14.5px] leading-relaxed text-[#f3f4f6] mt-1">
                      Merancang REST API yang aman dan arsitektur database
                      relasional (MySQL) yang efisien menggunakan framework PHP
                      modern (Laravel, CodeIgniter).
                    </p>
                  </div>

                  {/* Card 3: Data Analytics */}
                  <div
                    className="p-6 rounded-[24px] bg-[#ffffff]/10 border border-[#ffffff]/20 shadow-[0_8px_24px_rgba(245,158,11,0.08)] hover:shadow-[0_8px_32px_rgba(245,158,11,0.2)] transition-all duration-300 group animate-fade-in"
                    style={{
                      animationFillMode: "both",
                      animationDelay: "300ms",
                    }}
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="h-12 w-12 rounded-full bg-[#ffffff]/10 border border-[#ffffff]/20 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(245,158,11,0.3)] group-hover:scale-110 transition-transform duration-300">
                        <FaBrain
                          style={{ color: "#F59E0B" }}
                          className="text-xl"
                        />
                      </div>
                      <h3 className="font-bold text-[18px] md:text-[20px] text-[#ffffff]">
                        Data Analytics & Logic
                      </h3>
                    </div>
                    <p className="text-[14.5px] leading-relaxed text-[#f3f4f6] mt-1">
                      Berpengalaman menggunakan Python untuk ekstraksi insight
                      dan permodelan Machine Learning, khususnya implementasi
                      K-Means Clustering untuk analisis data performa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "gallery":
        // Array of placeholder images for the Masonry grid
        const galleryImages = [
          {
            src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
            alt: "Team Collaboration",
          },
          {
            src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
            alt: "Coding Session",
          },
          {
            src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
            alt: "Workshop",
          },
          {
            src: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800",
            alt: "Setup",
          },
          {
            src: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
            alt: "Working",
          },
          {
            src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
            alt: "Office",
          },
        ];

        return (
          <div className="flex flex-col animate-fade-in gap-8 pt-2 w-full max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-2">
              <div className="h-14 w-14 rounded-full bg-[#17171c] flex items-center justify-center shrink-0">
                <FaCamera className="text-2xl text-[#ffffff]" />
              </div>
              <div>
                <h3 className="text-[32px] md:text-[40px] tracking-[-0.8px] font-normal text-[#17171c]">
                  Life & Journey
                </h3>
                <p className="text-[16px] text-[#616161]">
                  Momen di balik layar, diskusi tim, dan pengalaman nyata.
                </p>
              </div>
            </div>

            {/* Masonry Grid Setup */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 w-full">
              {galleryImages.map((img, index) => (
                <div
                  key={index}
                  className="break-inside-avoid relative group overflow-hidden rounded-[22px] bg-[#f3f4f6] shadow-sm hover:shadow-xl transition-all duration-500 border border-[#e5e7eb]"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17171c]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-auto object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 relative z-0"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 pointer-events-none">
                    <p className="text-[#ffffff] font-medium text-sm drop-shadow-md">
                      {img.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "experience":
        return (
          <div className="flex flex-col animate-fade-in pt-2 pb-10">
            <Timeline />
          </div>
        );
      case "insights":
        const langData = [
          { name: "JavaScript / React", value: 45, color: "#F59E0B" },
          { name: "PHP / Laravel", value: 30, color: "#FF2D20" },
          { name: "Python / Data", value: 15, color: "#3776AB" },
          { name: "SQL & Others", value: 10, color: "#06B6D4" },
        ];

        const commitData = [
          { month: "Jan", frontend: 18, backend: 9, data: 5, color: "#F59E0B" },
          { month: "Feb", frontend: 22, backend: 14, data: 9, color: "#FF2D20" },
          { month: "Mar", frontend: 12, backend: 10, data: 6, color: "#3776AB" },
          { month: "Apr", frontend: 28, backend: 18, data: 14, color: "#06B6D4" },
          { month: "May", frontend: 25, backend: 20, data: 10, color: "#8B5CF6" },
          { month: "Jun", frontend: 32, backend: 24, data: 14, color: "#10B981" },
        ];

        const CustomBarTooltip = ({ active, payload, label }) => {
          if (active && payload && payload.length) {
            return (
              <div style={{ background: "#17171c", borderRadius: "14px", padding: "10px 16px", border: "none" }}>
                <p style={{ color: "#ffffff", fontWeight: "700", marginBottom: "6px", fontSize: "14px" }}>{label}</p>
                {payload.map((p, i) => (
                  <p key={i} style={{ color: p.fill === "#ffffff" ? "#d9c8b3" : p.fill, fontSize: "13px", margin: "2px 0" }}>
                    {p.name}: <strong>{p.value}</strong> commits
                  </p>
                ))}
              </div>
            );
          }
          return null;
        };

        const CustomPieTooltip = ({ active, payload }) => {
          if (active && payload && payload.length) {
            const item = payload[0];
            return (
              <div style={{ background: "#17171c", borderRadius: "14px", padding: "10px 16px", border: "none" }}>
                <p style={{ color: item.payload.color, fontWeight: "700", fontSize: "13px" }}>{item.name}</p>
                <p style={{ color: "#ffffff", fontSize: "13px" }}>{item.value}% penggunaan</p>
              </div>
            );
          }
          return null;
        };

        return (
          <div className="flex flex-col animate-fade-in pt-2 w-full max-w-6xl mx-auto gap-8">
            <style>{`
              @keyframes chartFadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
              .chart-card-1 { animation: chartFadeIn 0.5s ease forwards; }
              .chart-card-2 { animation: chartFadeIn 0.5s ease 0.15s both; }
            `}</style>

            <div className="flex items-center gap-4 mb-2">
              <div className="h-14 w-14 rounded-full bg-[#17171c] flex items-center justify-center shrink-0">
                <FaChartPie className="text-2xl text-[#ffffff]" />
              </div>
              <div>
                <h3 className="text-[32px] md:text-[40px] tracking-[-0.8px] font-normal text-[#17171c]">
                  Coding Insights
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
              {/* Language Distribution Pie Chart */}
              <div className="chart-card-1 w-full rounded-[24px] bg-[#ffffff] border border-[#e5e7eb] shadow-sm p-6 flex flex-col hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-[18px] font-bold text-[#17171c] mb-1">Language Distribution</h4>
                <p className="text-[13px] text-[#9ca3af] mb-5">Persentase bahasa yang paling sering digunakan</p>
                <div className="h-[220px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={langData}
                        cx="50%"
                        cy="50%"
                        innerRadius={55}
                        outerRadius={85}
                        paddingAngle={4}
                        dataKey="value"
                        isAnimationActive={true}
                        animationBegin={100}
                        animationDuration={900}
                        animationEasing="ease-out"
                      >
                        {langData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={entry.color}
                            stroke="none"
                          />
                        ))}
                      </Pie>
                      <Tooltip content={<CustomPieTooltip />} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mt-3">
                  {langData.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }}></span>
                      <span className="text-[12px] font-medium text-[#616161]">{item.name} <span className="font-bold text-[#17171c]">{item.value}%</span></span>
                    </div>
                  ))}
                </div>
              </div>

              {/* GitHub Commit Activity Stacked Bar Chart */}
              <div className="chart-card-2 w-full rounded-[24px] bg-gradient-to-br from-[#182c3c] via-[#4d6978] to-[#d9c8b3] border border-transparent shadow-lg p-6 flex flex-col hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#000000] opacity-[0.05] mix-blend-multiply pointer-events-none"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <h4 className="text-[18px] font-bold text-[#ffffff] mb-1">Commit Activity (6 Months)</h4>
                  <p className="text-[13px] text-[#ffffff]/60 mb-5">Breakdown kontribusi per kategori proyek</p>
                  <div className="h-[220px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={commitData} margin={{ top: 5, right: 5, left: -25, bottom: 5 }} barCategoryGap="30%">
                        <XAxis dataKey="month" tick={{ fill: "rgba(255,255,255,0.7)", fontSize: 12 }} axisLine={false} tickLine={false} />
                        <YAxis tick={{ fill: "rgba(255,255,255,0.7)", fontSize: 11 }} axisLine={false} tickLine={false} />
                        <Tooltip content={<CustomBarTooltip />} cursor={{ fill: "rgba(255,255,255,0.07)" }} />
                        <Legend
                          formatter={(value) => <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "12px" }}>{value}</span>}
                          wrapperStyle={{ paddingTop: "8px" }}
                        />
                        <Bar dataKey="frontend" name="Frontend" stackId="a" fill="#F59E0B" radius={[0,0,0,0]}
                          isAnimationActive={true} animationBegin={200} animationDuration={900} animationEasing="ease-out" />
                        <Bar dataKey="backend" name="Backend" stackId="a" fill="#06B6D4" radius={[0,0,0,0]}
                          isAnimationActive={true} animationBegin={300} animationDuration={900} animationEasing="ease-out" />
                        <Bar dataKey="data" name="Data / Python" stackId="a" fill="#3776AB" radius={[4,4,0,0]}
                          isAnimationActive={true} animationBegin={400} animationDuration={900} animationEasing="ease-out" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="about" className="w-full flex flex-col pb-4 lg:pb-8 pt-0">
      <div className="w-full max-w-6xl mx-auto px-6 lg:px-4">
        {/* Horizontal Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6 pb-6 border-b border-[#e5e7eb]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-[32px] text-[15px] font-bold transition-all duration-300
                                ${
                                  activeTab === tab.id
                                    ? "bg-[#17171c] text-[#ffffff]"
                                    : "bg-transparent text-[#616161] hover:bg-[#ffffff]:bg-[#212121]"
                                }
                            `}
            >
              <span
                className={activeTab === tab.id ? "opacity-100" : "opacity-70"}
              >
                {tab.icon}
              </span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content Container (Unboxed & Open) */}
        <div className="w-full min-h-[500px]">{renderContent()}</div>
      </div>
    </section>
  );
}
