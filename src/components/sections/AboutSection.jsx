import { useState } from 'react';
import Timeline from '../Timeline';
import { glassTheme as theme } from '../../utils/theme';
import profileImage from '../../assets/fix.jpeg';
import { FaUserAstronaut, FaCode, FaGithub, FaHistory, FaMapMarkerAlt, FaGraduationCap, FaLaptopCode, FaReact, FaLaravel, FaBrain, FaDatabase, FaPython } from 'react-icons/fa';
import { SiCodeigniter, SiMysql, SiTailwindcss } from 'react-icons/si';

export default function AboutSection({ isDarkMode }) {
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
                    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 lg:gap-8 items-center h-full animate-fade-in">
                        <style>{`
                            @keyframes avatarFloat {
                                0%, 100% { transform: translateY(0px); }
                                50% { transform: translateY(-15px); }
                            }
                            .animate-avatar-float {
                                animation: avatarFloat 5s ease-in-out infinite;
                            }
                            @keyframes blob {
                                0% { transform: translate(0px, 0px) scale(1); }
                                33% { transform: translate(30px, -50px) scale(1.1); }
                                66% { transform: translate(-20px, 20px) scale(0.9); }
                                100% { transform: translate(0px, 0px) scale(1); }
                            }
                            .animate-blob {
                                animation: blob 8s infinite;
                            }
                            .animation-delay-2000 {
                                animation-delay: 2s;
                            }
                            .animation-delay-4000 {
                                animation-delay: 4s;
                            }
                        `}</style>

                        <div className="z-10 relative flex flex-col justify-center h-full space-y-4 lg:space-y-6">
                            
                            {/* Status Badge */}
                            <div className="flex items-center gap-2 px-3 py-1.5 w-fit rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                                <span className="relative flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span className="text-[10px] md:text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Available for Work</span>
                            </div>

                            {/* Bio */}
                            <div className="mt-2">
                                <p className="text-sm lg:text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
                                    Lulusan Ilmu Komputer dengan keahlian praktis di bidang <span className="font-bold text-indigo-600 dark:text-indigo-400">Fullstack Web Development</span>. Berpengalaman membangun antarmuka interaktif (React JS, React Native) sebagai lulusan MSIB PT. Hacktive Teknologi Indonesia (skor 90/100), serta merancang arsitektur Back-End (Laravel, CI4, MySQL). Mampu bekerja dalam tim untuk mengembangkan aplikasi end-to-end yang skalabel dan user-friendly.
                                </p>
                            </div>

                            {/* Quick Facts Bento */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 lg:gap-3">
                                {/* Education */}
                                <div className={`p-3 lg:p-4 rounded-xl lg:rounded-2xl flex flex-col gap-1 lg:gap-2 transition-transform hover:-translate-y-1 ${theme.glassCard} bg-white/40 dark:bg-slate-800/40 border border-white/50 dark:border-slate-700/50 shadow-sm`}>
                                    <FaGraduationCap className="text-xl lg:text-2xl text-indigo-500 drop-shadow-sm" />
                                    <div>
                                        <p className="text-[9px] lg:text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">Education</p>
                                        <p className="text-xs lg:text-sm font-bold text-slate-800 dark:text-slate-100">S1 Ilmu Komputer</p>
                                    </div>
                                </div>
                                {/* Focus */}
                                <div className={`p-3 lg:p-4 rounded-xl lg:rounded-2xl flex flex-col gap-1 lg:gap-2 transition-transform hover:-translate-y-1 ${theme.glassCard} bg-white/40 dark:bg-slate-800/40 border border-white/50 dark:border-slate-700/50 shadow-sm`}>
                                    <FaLaptopCode className="text-xl lg:text-2xl text-cyan-500 drop-shadow-sm" />
                                    <div>
                                        <p className="text-[9px] lg:text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">Focus</p>
                                        <p className="text-xs lg:text-sm font-bold text-slate-800 dark:text-slate-100">Fullstack Web</p>
                                    </div>
                                </div>
                                {/* Location */}
                                <div className={`p-3 lg:p-4 rounded-xl lg:rounded-2xl flex flex-col gap-1 lg:gap-2 transition-transform hover:-translate-y-1 ${theme.glassCard} bg-white/40 dark:bg-slate-800/40 border border-white/50 dark:border-slate-700/50 shadow-sm`}>
                                    <FaMapMarkerAlt className="text-xl lg:text-2xl text-rose-500 drop-shadow-sm" />
                                    <div>
                                        <p className="text-[9px] lg:text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">Location</p>
                                        <p className="text-xs lg:text-sm font-bold text-slate-800 dark:text-slate-100">Banjarmasin, ID</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Aesthetic Aurora Avatar */}
                        <div className="w-full h-full min-h-[350px] flex justify-center items-center relative py-4 lg:py-0">
                            
                            <div className="relative w-64 h-80 md:w-72 md:h-96 lg:w-80 lg:h-[400px] flex items-center justify-center group">
                                
                                {/* Soft Abstract Aurora Background */}
                                <div className="absolute inset-0 z-0 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out">
                                    <div className="absolute w-40 h-40 md:w-56 md:h-56 bg-indigo-300 dark:bg-indigo-600 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-70 animate-blob"></div>
                                    <div className="absolute w-40 h-40 md:w-56 md:h-56 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-70 animate-blob animation-delay-2000 -right-4 top-4 md:-right-8 md:top-8"></div>
                                    <div className="absolute w-40 h-40 md:w-56 md:h-56 bg-cyan-300 dark:bg-cyan-600 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-70 animate-blob animation-delay-4000 -bottom-8 left-10 md:-bottom-12 md:left-12"></div>
                                </div>
                                
                                {/* Elegant Frosted Glass Frame */}
                                <div className="relative z-10 w-56 h-72 md:w-64 md:h-80 lg:w-72 lg:h-[350px] rounded-[2.5rem] p-2 bg-white/40 dark:bg-slate-800/40 backdrop-blur-md shadow-2xl border border-white/60 dark:border-white/10 transition-all duration-700 ease-out group-hover:-translate-y-2 group-hover:scale-[1.02] group-hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.3)]">
                                    <div className="w-full h-full rounded-[2rem] overflow-hidden">
                                        {/* Smooth image zoom on hover */}
                                        <img src={profileImage} alt="Thaha Wafiq Adly" className="w-full h-full object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-105 grayscale-[15%] group-hover:grayscale-0" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                );
            case 'skills':
                return (
                    <div className="flex flex-col h-full animate-fade-in gap-6">
                        {/* Marquee Area */}
                        <div className={`rounded-3xl p-6 relative overflow-hidden ${theme.glassSurface} flex flex-col items-center justify-center shrink-0`}>
                            <h2 className="text-2xl font-black text-slate-800 dark:text-slate-100 mb-6">Tech Ecosystem</h2>
                            <style>{`
                                @keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-100%); } }
                                .animate-marquee { animation: marquee 25s linear infinite; }
                                .pause-on-hover:hover .animate-marquee { animation-play-state: paused; }
                            `}</style>
                            <div className="w-full relative flex overflow-hidden pause-on-hover [mask-image:_linear-gradient(to_right,transparent_0,_black_32px,_black_calc(100%-32px),transparent_100%)] md:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                                {[1, 2].map((i) => (
                                    <div key={i} className="flex w-max animate-marquee items-center gap-12 pr-12" aria-hidden={i === 2}>
                                        {[ { icon: FaReact, name: 'React JS', color: 'text-emerald-500' }, { icon: FaLaravel, name: 'Laravel', color: 'text-rose-500' }, { icon: SiTailwindcss, name: 'Tailwind', color: 'text-teal-500' }, { icon: SiCodeigniter, name: 'CodeIgniter', color: 'text-sky-500' }, { icon: SiMysql, name: 'MySQL', color: 'text-cyan-600' }, { icon: FaPython, name: 'Python', color: 'text-yellow-500' }, { icon: FaDatabase, name: 'Data Logic', color: 'text-indigo-500' }, { icon: FaBrain, name: 'Machine Learning', color: 'text-purple-500' } ].map((item, index) => (
                                            <div key={index} className="flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
                                                <item.icon className={`text-3xl ${item.color}`} />
                                                <span className="text-lg font-bold text-slate-700 dark:text-slate-200">{item.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Specializations */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
                            <div className={`p-6 rounded-3xl border group hover:-translate-y-1 transition-all duration-300 ${theme.glassCard} bg-white/40 dark:bg-slate-800/40`}>
                                <div className="h-10 w-10 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-100 dark:border-emerald-800 flex items-center justify-center mb-4"><FaReact className="text-xl text-emerald-500" /></div>
                                <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100 mb-2">Frontend Architecture</h3>
                                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">Membangun antarmuka dinamis dengan React JS dan Tailwind CSS. Fokus pada UX yang mulus dan clean code.</p>
                            </div>
                            <div className={`p-6 rounded-3xl border group hover:-translate-y-1 transition-all duration-300 ${theme.glassCard} bg-white/40 dark:bg-slate-800/40`}>
                                <div className="h-10 w-10 rounded-xl bg-rose-50 dark:bg-rose-900/30 border border-rose-100 dark:border-rose-800 flex items-center justify-center mb-4"><FaLaravel className="text-xl text-rose-500" /></div>
                                <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100 mb-2">Backend & Database</h3>
                                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">Merancang REST API aman dan arsitektur database MySQL yang efisien menggunakan framework PHP modern.</p>
                            </div>
                            <div className={`p-6 rounded-3xl border group hover:-translate-y-1 transition-all duration-300 lg:col-span-1 md:col-span-2 ${theme.glassCard} bg-white/40 dark:bg-slate-800/40`}>
                                <div className="h-10 w-10 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 flex items-center justify-center mb-4"><FaBrain className="text-xl text-indigo-500" /></div>
                                <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100 mb-2">Data Analytics & Logic</h3>
                                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">Berpengalaman menggunakan Python untuk ekstraksi insight dan pemodelan Machine Learning, khususnya K-Means Clustering.</p>
                            </div>
                        </div>
                    </div>
                );
            case 'github':
                return (
                    <div className="flex flex-col h-full animate-fade-in space-y-4 md:space-y-6 lg:justify-center">
                        {/* Header GitHub */}
                        <div className="flex items-center gap-4 mb-2">
                            <div className="h-12 w-12 md:h-14 md:w-14 rounded-2xl bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 flex items-center justify-center shadow-inner">
                                <FaGithub className="text-2xl md:text-3xl text-indigo-500" />
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100">GitHub Analytics</h3>
                                <p className="text-xs md:text-sm text-slate-500">Real-time statistics & repository overview</p>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 w-full max-w-5xl">
                            
                            {/* Overview Card */}
                            <div className={`p-4 md:p-6 rounded-3xl border transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1 ${theme.glassCard} bg-white/40 dark:bg-slate-800/40 relative overflow-hidden group`}>
                                {/* Glow decoration */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
                                
                                <h4 className="text-[10px] md:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                                    <FaCode className="text-indigo-400" /> Stats Overview
                                </h4>
                                
                                {/* Image Container */}
                                <div className="flex justify-center bg-white/60 dark:bg-slate-900/60 rounded-2xl p-2 border border-white/50 dark:border-slate-700/50 shadow-inner">
                                    <img 
                                        src={`https://github-readme-stats-sigma-five.vercel.app/api?username=Thahaadly&show_icons=true&hide_border=true&bg_color=00000000${isDarkMode ? '&theme=tokyonight' : '&title_color=4f46e5&text_color=334155&icon_color=4f46e5'}`} 
                                        alt="Thahaadly GitHub Stats" 
                                        className="w-full h-auto drop-shadow-sm transition-transform duration-500 group-hover:scale-[1.02]"
                                    />
                                </div>
                            </div>
                            
                            {/* Languages Card */}
                            <div className={`p-4 md:p-6 rounded-3xl border transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1 ${theme.glassCard} bg-white/40 dark:bg-slate-800/40 relative overflow-hidden group`}>
                                {/* Glow decoration */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
                                
                                <h4 className="text-[10px] md:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                                    <FaReact className="text-cyan-400" /> Top Languages
                                </h4>
                                
                                {/* Image Container */}
                                <div className="flex justify-center bg-white/60 dark:bg-slate-900/60 rounded-2xl p-2 border border-white/50 dark:border-slate-700/50 shadow-inner h-[calc(100%-2rem)] items-center">
                                    <img 
                                        src={`https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=Thahaadly&layout=compact&hide_border=true&bg_color=00000000${isDarkMode ? '&theme=tokyonight' : '&title_color=4f46e5&text_color=334155'}`} 
                                        alt="Top Languages" 
                                        className="w-full max-w-md h-auto drop-shadow-sm transition-transform duration-500 group-hover:scale-[1.02]"
                                    />
                                </div>
                            </div>
                            
                        </div>
                    </div>
                );
            case 'experience':
                return (
                    <div className="flex flex-col h-full animate-fade-in overflow-y-auto custom-scrollbar pr-2 pb-10">
                        <Timeline />
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <section id="about" className="w-full h-full flex flex-col justify-center animate-fade-in min-h-[calc(100vh-8rem)] pt-4 md:pt-0">
            <div className="w-full max-w-6xl mx-auto h-[85vh] md:h-full md:max-h-[750px] px-2 sm:px-4 pb-8 md:pb-0 flex flex-col">
                <div className="flex flex-row w-full h-full items-center justify-center">
                    
                    {/* Sidebar / Left Navigation (Hanging) */}
                    <div className={`flex flex-col items-center justify-center gap-6 lg:gap-8 
                                  ${theme.glassSurface}
                                  border-r-0 -mr-[1px]
                                  shadow-[-10px_0_30px_rgba(0,0,0,0.05)] z-20 w-16 md:w-20 lg:w-24 
                                  rounded-l-[2rem] lg:rounded-l-[3rem] rounded-r-none
                                  py-8 px-2 lg:py-12 lg:px-4
                                  shrink-0`}>
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`group relative flex items-center justify-center p-3 lg:p-4 rounded-xl lg:rounded-2xl transition-all duration-300
                                    ${activeTab === tab.id 
                                        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/40 scale-110' 
                                        : 'text-slate-600 dark:text-slate-400 hover:bg-white/50 dark:hover:bg-slate-800/50 hover:scale-105'
                                    }
                                `}
                            >
                                <span className="text-lg md:text-xl lg:text-2xl">{tab.icon}</span>
                                
                                {/* Tooltip (Desktop Only) */}
                                <div className="absolute left-full ml-4 px-4 py-2 bg-slate-800 dark:bg-slate-100 text-white dark:text-slate-900 text-sm font-bold rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap z-50 pointer-events-none shadow-xl hidden lg:block">
                                    {tab.label}
                                    {/* Arrow */}
                                    <div className="absolute top-1/2 -left-1 -translate-y-1/2 border-y-4 border-y-transparent border-r-4 border-r-slate-800 dark:border-r-slate-100"></div>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Main Content Pane */}
                    <div className={`flex-1 w-full h-full rounded-[2rem] lg:rounded-[2.5rem] p-4 sm:p-6 md:p-8 lg:p-12 ${theme.glassSurface} shadow-2xl overflow-y-auto custom-scrollbar relative z-10`}>
                        {renderContent()}
                    </div>

                </div>
            </div>
        </section>
    );
}
