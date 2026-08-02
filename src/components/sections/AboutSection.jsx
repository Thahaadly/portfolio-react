import { useState } from 'react';
import Timeline from '../Timeline';
import profileImage from '../../assets/fix.jpeg';
import { FaUserAstronaut, FaCode, FaGithub, FaHistory, FaGraduationCap, FaLaptopCode, FaReact, FaLaravel, FaBrain, FaPython } from 'react-icons/fa';
import { SiMysql, SiTailwindcss } from 'react-icons/si';

export default function AboutSection() {
    const [activeTab, setActiveTab] = useState('profile');

    const tabs = [
        { id: 'profile', label: 'Profile', icon: <FaUserAstronaut /> },
        { id: 'skills', label: 'Tech Stack', icon: <FaCode /> },
        { id: 'github', label: 'GitHub Stats', icon: <FaGithub /> },
        { id: 'experience', label: 'Experience', icon: <FaHistory /> },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'profile':
                return (
                    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 lg:gap-12 items-center animate-fade-in pt-2">
                        
                        <div className="flex flex-col justify-center h-full space-y-8">
                            
                            {/* Status Badge */}
                            <div className="flex items-center gap-2 px-3 py-1.5 w-fit rounded-[32px] bg-emerald-50 border border-emerald-200">
                                <span className="relative flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span className="text-[12px] font-bold text-emerald-600 uppercase tracking-wider">Available for Work</span>
                            </div>

                            {/* Bio */}
                            <div>
                                <h2 className="text-[40px] md:text-[56px] leading-[1.05] tracking-[-1.12px] font-normal text-[#17171c] mb-6">
                                    Web <br className="hidden lg:block"/> Developer
                                </h2>
                                <p className="text-[16px] md:text-[18px] leading-relaxed text-[#616161]">
                                    Lulusan Ilmu Komputer yang berfokus pada <span className="font-bold text-[#17171c]">Front-End Web Development</span> dengan rekam jejak pengalaman sebagai Fullstack. Berpengalaman membangun antarmuka interaktif (React JS, React Native) sebagai lulusan MSIB PT. Hacktivate Teknologi Indonesia (skor 90/100), serta merancang arsitektur Back-End (Laravel, CI4, MySQL).
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
                                        <p className="text-[11px] font-bold text-[#616161] uppercase tracking-widest mb-0.5">Education</p>
                                        <p className="text-[15px] font-bold text-[#17171c]">S1 Ilmu Komputer</p>
                                    </div>
                                </div>
                                {/* Focus */}
                                <div className="flex items-center gap-4 py-4 border-b border-[#e5e7eb]">
                                    <div className="h-12 w-12 rounded-full bg-[#f1f5ff] flex items-center justify-center shrink-0">
                                        <FaLaptopCode className="text-xl text-[#17171c]" />
                                    </div>
                                    <div>
                                        <p className="text-[11px] font-bold text-[#616161] uppercase tracking-widest mb-0.5">Focus</p>
                                        <p className="text-[15px] font-bold text-[#17171c]">Front-End Web</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Flat Avatar Display */}
                        <div className="w-full flex justify-center items-center">
                            <div className="w-full max-w-[320px] rounded-[22px] p-2 bg-gradient-to-br from-[#182c3c] via-[#4d6978] to-[#d9c8b3] border border-transparent shadow-lg relative overflow-hidden">
                                <div className="absolute inset-0 bg-[#000000] opacity-[0.05] mix-blend-multiply pointer-events-none"></div>
                                <div className="w-full rounded-[18px] overflow-hidden aspect-[3/4] relative z-10">
                                    <img src={profileImage} alt="Thaha Wafiq Adly" className="w-full h-full object-cover object-top grayscale-[15%] hover:grayscale-0 transition-all duration-700" />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                );
            case 'skills':
                const techIcons = [
                    { icon: FaReact, color: '#61DAFB', shadow: 'shadow-[0_0_15px_rgba(97,218,251,0.4)]' },
                    { icon: FaLaravel, color: '#FF2D20', shadow: 'shadow-[0_0_15px_rgba(255,45,32,0.4)]' },
                    { icon: SiTailwindcss, color: '#06B6D4', shadow: 'shadow-[0_0_15px_rgba(6,182,212,0.4)]' },
                    { icon: SiMysql, color: '#4479A1', shadow: 'shadow-[0_0_15px_rgba(68,121,161,0.4)]' },
                    { icon: FaPython, color: '#3776AB', shadow: 'shadow-[0_0_15px_rgba(55,118,171,0.4)]' },
                    { icon: FaBrain, color: '#F59E0B', shadow: 'shadow-[0_0_15px_rgba(245,158,11,0.4)]' }
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
                                                style={{ transform: `rotate(${angle}deg) translateX(220px)` }}
                                            >
                                                {/* Cancel initial angle */}
                                                <div style={{ transform: `rotate(-${angle}deg)` }}>
                                                    {/* Cancel orbit rotation over time */}
                                                    <div className={`animate-orbit-reverse w-14 h-14 bg-[#ffffff]/10 backdrop-blur-sm border border-[#ffffff]/20 rounded-full flex items-center justify-center ${item.shadow}`}>
                                                        <Icon className="text-[26px]" style={{ color: item.color }} />
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                        })}
                                    </div>
                                </div>
                                
                                {/* Label in the center of the orbit */}
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-12">
                                    <h3 className="text-[40px] font-bold text-[#ffffff] tracking-tighter opacity-20" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>ECOSYSTEM</h3>
                                </div>
                            </div>
                            
                            {/* Right Column: Unified Capabilities List (Nested Cards) */}
                            <div className="w-full lg:w-[55%] flex flex-col p-6 md:p-10 bg-transparent relative z-10">
                                <h2 className="text-[28px] md:text-[32px] font-bold text-[#ffffff] mb-6 tracking-tight px-2">Core Capabilities</h2>
                                
                                <div className="flex flex-col gap-4">
                                    {/* Card 1: Frontend */}
                                    <div className="p-6 rounded-[24px] bg-[#ffffff]/10 border border-[#ffffff]/20 shadow-[0_8px_24px_rgba(97,218,251,0.12)] hover:shadow-[0_8px_32px_rgba(97,218,251,0.25)] transition-all duration-300 group animate-fade-in" style={{ animationFillMode: 'both', animationDelay: '100ms' }}>
                                        <div className="flex items-center gap-4 mb-3">
                                            <div className="h-12 w-12 rounded-full bg-[#ffffff]/10 border border-[#ffffff]/20 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(97,218,251,0.3)] group-hover:scale-110 transition-transform duration-300">
                                                <FaReact style={{ color: '#61DAFB' }} className="text-xl" />
                                            </div>
                                            <h3 className="font-bold text-[18px] md:text-[20px] text-[#ffffff]">Frontend Architecture</h3>
                                        </div>
                                        <p className="text-[14.5px] leading-relaxed text-[#f3f4f6] mt-1">
                                            Membangun antarmuka dinamis dan responsif dengan React JS dan Tailwind CSS. Fokus pada UX yang mulus, state management, dan clean code principles.
                                        </p>
                                    </div>

                                    {/* Card 2: Backend */}
                                    <div className="p-6 rounded-[24px] bg-[#ffffff]/10 border border-[#ffffff]/20 shadow-[0_8px_24px_rgba(255,45,32,0.08)] hover:shadow-[0_8px_32px_rgba(255,45,32,0.2)] transition-all duration-300 group animate-fade-in" style={{ animationFillMode: 'both', animationDelay: '200ms' }}>
                                        <div className="flex items-center gap-4 mb-3">
                                            <div className="h-12 w-12 rounded-full bg-[#ffffff]/10 border border-[#ffffff]/20 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(255,45,32,0.3)] group-hover:scale-110 transition-transform duration-300">
                                                <FaLaravel style={{ color: '#FF2D20' }} className="text-xl" />
                                            </div>
                                            <h3 className="font-bold text-[18px] md:text-[20px] text-[#ffffff]">Backend & Database</h3>
                                        </div>
                                        <p className="text-[14.5px] leading-relaxed text-[#f3f4f6] mt-1">
                                            Merancang REST API yang aman dan arsitektur database relasional (MySQL) yang efisien menggunakan framework PHP modern (Laravel, CodeIgniter).
                                        </p>
                                    </div>

                                    {/* Card 3: Data Analytics */}
                                    <div className="p-6 rounded-[24px] bg-[#ffffff]/10 border border-[#ffffff]/20 shadow-[0_8px_24px_rgba(245,158,11,0.08)] hover:shadow-[0_8px_32px_rgba(245,158,11,0.2)] transition-all duration-300 group animate-fade-in" style={{ animationFillMode: 'both', animationDelay: '300ms' }}>
                                        <div className="flex items-center gap-4 mb-3">
                                            <div className="h-12 w-12 rounded-full bg-[#ffffff]/10 border border-[#ffffff]/20 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(245,158,11,0.3)] group-hover:scale-110 transition-transform duration-300">
                                                <FaBrain style={{ color: '#F59E0B' }} className="text-xl" />
                                            </div>
                                            <h3 className="font-bold text-[18px] md:text-[20px] text-[#ffffff]">Data Analytics & Logic</h3>
                                        </div>
                                        <p className="text-[14.5px] leading-relaxed text-[#f3f4f6] mt-1">
                                            Berpengalaman menggunakan Python untuk ekstraksi insight dan permodelan Machine Learning, khususnya implementasi K-Means Clustering untuk analisis data performa.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                );
            case 'github':
                return (
                    <div className="flex flex-col animate-fade-in gap-8 pt-2 w-full max-w-5xl mx-auto">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="h-14 w-14 rounded-full bg-[#17171c] flex items-center justify-center">
                                <FaGithub className="text-3xl text-[#ffffff]" />
                            </div>
                            <div>
                                <h3 className="text-[32px] md:text-[40px] tracking-[-0.8px] font-normal text-[#17171c]">GitHub Analytics</h3>
                                <p className="text-[16px] text-[#616161]">Real-time statistics & repository overview</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
                            <div className="p-2 md:p-4 rounded-[22px] bg-gradient-to-br from-[#182c3c] via-[#4d6978] to-[#d9c8b3] border border-transparent shadow-lg flex justify-center items-center hover:-translate-y-1 transition-transform relative overflow-hidden">
                                <div className="absolute inset-0 bg-[#000000] opacity-[0.05] mix-blend-multiply pointer-events-none"></div>
                                <img 
                                    src={`https://github-readme-stats-sigma-five.vercel.app/api?username=Thahaadly&show_icons=true&hide_border=true&bg_color=00000000&title_color=ffffff&text_color=e5e5e5&icon_color=ffffff`} 
                                    alt="Thahaadly GitHub Stats" 
                                    loading="lazy"
                                    className="w-full h-auto drop-shadow-sm relative z-10"
                                />
                            </div>
                            <div className="p-2 md:p-4 rounded-[22px] bg-gradient-to-br from-[#182c3c] via-[#4d6978] to-[#d9c8b3] border border-transparent shadow-lg flex justify-center items-center hover:-translate-y-1 transition-transform relative overflow-hidden">
                                <div className="absolute inset-0 bg-[#000000] opacity-[0.05] mix-blend-multiply pointer-events-none"></div>
                                <img 
                                    src={`https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=Thahaadly&layout=compact&hide_border=true&bg_color=00000000&title_color=ffffff&text_color=e5e5e5`} 
                                    alt="Top Languages" 
                                    loading="lazy"
                                    className="w-full max-w-md h-auto drop-shadow-sm relative z-10"
                                />
                            </div>
                        </div>
                    </div>
                );
            case 'experience':
                return (
                    <div className="flex flex-col animate-fade-in pt-2 pb-10">
                        <Timeline />
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
                                ${activeTab === tab.id 
                                    ? 'bg-[#17171c] text-[#ffffff]' 
                                    : 'bg-transparent text-[#616161] hover:bg-[#ffffff]:bg-[#212121]'
                                }
                            `}
                        >
                            <span className={activeTab === tab.id ? 'opacity-100' : 'opacity-70'}>{tab.icon}</span>
                            <span>{tab.label}</span>
                        </button>
                    ))}
                </div>

                {/* Content Container (Unboxed & Open) */}
                <div className="w-full min-h-[500px]">
                    {renderContent()}
                </div>

            </div>
        </section>
    );
}
