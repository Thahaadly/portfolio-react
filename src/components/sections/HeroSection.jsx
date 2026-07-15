import { TypeAnimation } from 'react-type-animation';
import { FaRocket, FaGithub, FaLinkedin, FaMapMarkerAlt, FaTerminal, FaDownload } from 'react-icons/fa';
import { glassTheme as theme } from '../../utils/theme';

export default function HeroSection({ setActivePage }) {
    return (
        <section id="home" className="w-full h-full flex flex-col justify-center animate-fade-in min-h-[calc(100vh-8rem)] pt-4 md:pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:grid-rows-3 gap-4 lg:gap-6 w-full max-w-6xl mx-auto pb-8 md:pb-0 h-auto md:h-full md:max-h-[750px] px-4">
                
                {/* ── BENTO 1: Title (2 cols, 2 rows) ── */}
                <div className={`col-span-1 md:col-span-2 lg:col-span-2 md:row-span-2 rounded-[2.5rem] p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden group ${theme.glassSurface}`}>
                    <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-indigo-300/20 dark:bg-indigo-600/20 blur-3xl z-0"></div>
                    <div className="relative z-10 flex flex-col items-start text-left pt-6">
                        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-slate-900 dark:text-slate-100 drop-shadow-sm mb-4 leading-tight">
                            Hi, I'm <br/>
                            <span>Thaha</span>.
                        </h1>
                        <h2 className="text-2xl font-bold text-slate-600 dark:text-slate-400">
                            Web Developer
                        </h2>
                    </div>
                </div>

                {/* ── BENTO 2: Interactive Terminal (2 cols, 3 rows) ── */}
                <div className={`col-span-1 md:col-span-2 lg:col-span-2 md:row-span-3 rounded-[2.5rem] p-4 lg:p-6 flex flex-col relative overflow-hidden shadow-xl shadow-indigo-900/20 bg-slate-900 dark:bg-slate-950 border border-slate-700/50 transform-gpu`}>
                    <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent pointer-events-none z-0"></div>
                    <div className="relative z-10 w-full h-full flex flex-col min-h-[300px]">
                        {/* Terminal Header */}
                        <div className="flex items-center gap-2 pb-4 border-b border-slate-700/50 mb-4">
                            <div className="h-3.5 w-3.5 rounded-full bg-rose-500"></div>
                            <div className="h-3.5 w-3.5 rounded-full bg-amber-500"></div>
                            <div className="h-3.5 w-3.5 rounded-full bg-emerald-500"></div>
                            <span className="ml-2 text-xs text-slate-400 font-mono flex-1 text-center pr-10">~/portfolio/thaha.sh</span>
                        </div>
                        
                        {/* Terminal Body */}
                        <div className="flex-1 font-mono text-sm sm:text-base text-slate-300 flex flex-col overflow-y-auto custom-scrollbar pr-2">
                            <div className="flex gap-2 text-emerald-400 mb-2">
                                <span>$</span>
                                <span>./run_profile.sh</span>
                            </div>
                            <div className="text-slate-500 mb-4">Loading profile modules... [OK]</div>
                            
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
                                className="whitespace-pre-wrap leading-relaxed text-indigo-200"
                                cursor={false}
                            />
                        </div>
                    </div>
                </div>

                {/* ── BENTO 3: Location (1 col, 1 row) ── */}
                <div className={`col-span-1 md:col-span-1 lg:col-span-1 md:row-span-1 rounded-[2.5rem] p-6 flex flex-col justify-center items-center text-center gap-3 relative overflow-hidden group ${theme.glassSurface}`}>
                    <div className="h-12 w-12 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <FaMapMarkerAlt className="text-2xl text-indigo-500" />
                    </div>
                    <div>
                        <h3 className="text-sm lg:text-base font-bold text-slate-800 dark:text-slate-100">Banjarmasin, ID</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">Remote / Hybrid</p>
                    </div>
                </div>

                {/* ── BENTO 4: Actions & Socials (1 col, 1 row) ── */}
                <div className={`col-span-1 md:col-span-1 lg:col-span-1 md:row-span-1 rounded-[2.5rem] p-6 flex flex-col justify-center gap-3 ${theme.glassCard}`}>
                    <a href="/CV-Thaha-Wafiq-Adly.pdf" download="CV_Thaha_Wafiq_Adly.pdf" className={`w-full py-3 flex items-center justify-center gap-2 rounded-2xl text-sm font-bold shadow-md hover:-translate-y-1 transition-transform ${theme.buttonSolid}`}>
                        <FaDownload /> Download CV
                    </a>
                    <div className="flex gap-2 justify-between">
                        <a href="https://github.com/Thahaadly" target="_blank" rel="noreferrer" className={`flex-1 flex justify-center items-center h-10 rounded-2xl ${theme.button} hover:-translate-y-1 transition-transform`} title="GitHub">
                            <FaGithub className="text-sm" />
                        </a>
                        <a href="https://www.linkedin.com/in/thahaa/" target="_blank" rel="noreferrer" className={`flex-1 flex justify-center items-center h-10 rounded-2xl ${theme.button} hover:-translate-y-1 transition-transform`} title="LinkedIn">
                            <FaLinkedin className="text-sm" />
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}
