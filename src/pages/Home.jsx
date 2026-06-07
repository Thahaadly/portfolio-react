import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';

// Komponen Eksternal yang sudah dipisah
import HangingIDCard from '../components/Hangingidcard';
import CodeTree from '../components/CodeTree';
import Footer from '../components/Footer';
import Timeline from '../components/Timeline';
import { glassTheme as theme } from '../utils/theme';
import { mockProjects } from '../data';

// Icons
import { FaBrain, FaDatabase, FaReact, FaLaravel, FaPython, FaRocket, FaInstagram, FaGithub, FaLock, FaExternalLinkAlt, FaEnvelope, FaLinkedin, FaWhatsapp, FaCode, FaMoon, FaSun } from 'react-icons/fa';
import { SiCodeigniter, SiMysql, SiTailwindcss } from 'react-icons/si';

export default function Home() {
    const navigate = useNavigate();
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [activeFilter, setActiveFilter] = useState('All');
    const [isDarkMode, setIsDarkMode] = useState(false);
    
    useEffect(() => {
        if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
        }
    };
    
    const filters = ['All', 'Fullstack', 'Frontend', 'Mobile', 'Data Science'];

    const filteredProjects = projects.filter(project => {
        if (activeFilter === 'All') return true;
        const allText = `${project.tech_stack || project.technologies || ''} ${project.title || ''} ${project.description || ''}`.toLowerCase();
        
        switch(activeFilter) {
            case 'Mobile': return allText.includes('react native') || allText.includes('mobile');
            case 'Data Science': return allText.includes('python') || allText.includes('machine learning') || allText.includes('data');
            case 'Frontend': return allText.includes('react js') && !allText.includes('laravel') && !allText.includes('codeigniter');
            case 'Fullstack': return (allText.includes('laravel') || allText.includes('codeigniter')) || allText.includes('fullstack');
            default: return true;
        }
    });

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api';
                const response = await axios.get(`${apiUrl}/projects`);
                const data = Array.isArray(response.data) ? response.data : response.data?.data;
                if (data && data.length > 0) {
                    setProjects(data);
                } else {
                    setProjects(mockProjects);
                }
            } catch (error) {
                console.error("Gagal mengambil data dari API, fallback ke mock", error);
                setProjects(mockProjects);
            } finally {
                setIsLoading(false);
            }
        };
        fetchProjects();
    }, []);

    useEffect(() => {
        AOS.init({ duration: 800, once: false, easing: 'ease-out-cubic', offset: 50 });
        AOS.refreshHard();
    }, []);

    useEffect(() => {
        const handleScroll = () => setShowScrollTop(window.scrollY > 280);
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div className="relative min-h-screen scroll-smooth overflow-x-hidden font-sans text-slate-800 dark:text-slate-100 dark:text-slate-100 transition-colors duration-300">
            {/* Background Blur */}
            <div className="fixed inset-0 -z-10 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
                <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-indigo-300/40 dark:bg-indigo-900/40 blur-[100px] mix-blend-multiply dark:mix-blend-screen"></div>
                <div className="absolute top-[20%] right-[-5%] h-[400px] w-[400px] rounded-full bg-cyan-200/50 dark:bg-cyan-900/30 blur-[100px] mix-blend-multiply dark:mix-blend-screen"></div>
                <div className="absolute bottom-[-10%] left-[20%] h-[600px] w-[600px] rounded-full bg-purple-200/40 dark:bg-purple-900/30 blur-[120px] mix-blend-multiply dark:mix-blend-screen"></div>
            </div>

            {/* Navbar */}
            <div className="fixed top-8 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
                <nav className={`pointer-events-auto flex items-center gap-1 sm:gap-2 rounded-full p-1.5 shadow-lg ${theme.glassSurface}`}>
                    {[
                        { label: 'Home', id: 'home' },
                        { label: 'About', id: 'about' },
                        { label: 'Portfolio', id: 'portfolio' },
                        { label: 'Contact', id: 'contact' },
                    ].map((menu) => (
                        <button key={menu.id} onClick={() => scrollToSection(menu.id)} className={`rounded-full px-4 sm:px-6 py-2.5 text-xs sm:text-sm font-semibold tracking-wide text-slate-600 dark:text-slate-300 transition ${theme.navHover}`}>
                            {menu.label}
                        </button>
                    ))}
                    <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-1"></div>
                    <button onClick={toggleDarkMode} className={`rounded-full p-2 md:p-2.5 text-slate-600 dark:text-slate-300 dark:text-slate-300 transition ${theme.navHover}`} aria-label="Toggle Dark Mode">
                        {isDarkMode ? <FaSun className="text-sm md:text-base text-amber-400" /> : <FaMoon className="text-sm md:text-base text-indigo-500" />}
                    </button>
                    <a href="/CV-Thaha-Wafiq-Adly-FullStack.pdf" download className="bg-indigo-600 dark:bg-indigo-500 text-white rounded-full px-5 py-2.5 text-xs font-bold hover:bg-indigo-700 dark:hover:bg-indigo-600 shadow-md flex items-center gap-2">CV</a>
                </nav>
            </div>

            <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pt-36 pb-16 md:px-10">
                
                {/* ── Hero Section ── */}
                <section id="home" data-aos="fade-up" className={`scroll-mt-32 flex flex-col items-center gap-10 rounded-[2.5rem] p-8 md:p-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:px-16 lg:py-24 ${theme.glassSurface}`}>
                    <div className="flex w-full flex-col items-center gap-6 text-center lg:w-1/2 lg:items-start lg:text-left">
                        <h1 className="text-4xl font-black tracking-tight text-slate-800 dark:text-slate-100 sm:text-5xl md:text-6xl drop-shadow-sm">Fullstack Web Developer</h1>
                        <div data-aos="fade-up" data-aos-delay="120" className="max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300 lg:text-lg">
                            <TypeAnimation sequence={['Merangkai antarmuka pengguna yang memukau dengan backend, database, dan API yang andal secara end-to-end.']} speed={65} repeat={0} wrapper="span" />
                        </div>
                        
                        <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
                            <button onClick={() => scrollToSection('portfolio')} className={`inline-flex items-center rounded-2xl px-8 py-3.5 text-sm font-semibold ${theme.buttonSolid}`}>Lihat Proyek</button>
                            <a href="/CV-Thaha-Wafiq-Adly-FullStack.pdf" download className={`inline-flex items-center gap-2 rounded-2xl px-8 py-3.5 text-sm font-bold ${theme.button}`}><FaRocket className="text-xs" /> Download CV</a>
                            <div className="flex gap-3">
                                <a href="https://www.instagram.com/thaha.aa?igsh=MTNndTV4Z20zcGh2eA%3D%3D&utm_source=qr" aria-label="Instagram" target="_blank" rel="noreferrer" className={`inline-flex h-11 w-11 items-center justify-center rounded-full ${theme.button}`}><FaInstagram className="text-xl" /></a>
                                <a href="https://github.com/Thahaadly" aria-label="GitHub" target="_blank" rel="noreferrer" className={`inline-flex h-11 w-11 items-center justify-center rounded-full ${theme.button}`}><FaGithub className="text-xl" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full max-w-sm flex justify-center lg:w-1/2 lg:max-w-xl lg:justify-end">
                        <HangingIDCard />
                    </div>
                </section>

                {/* ── About Section ── */}
                <section id="about" data-aos="fade-up" className="scroll-mt-32 space-y-6">
                    <div className="flex flex-col gap-4">
                        <div data-aos="fade-up" className={`rounded-[2.5rem] p-8 md:p-12 lg:grid lg:grid-cols-2 lg:items-center gap-12 overflow-hidden relative ${theme.glassSurface}`}>
                            <div className="z-10 relative">
                                <p className={`mb-4 text-sm font-bold tracking-[0.2em] uppercase ${theme.primary}`}>About Me</p>
                                <h2 className="mb-5 text-2xl font-black text-slate-800 dark:text-slate-100 md:text-3xl lg:text-4xl leading-snug drop-shadow-sm">Mengubah Data & Logika Menjadi<br className="hidden lg:block" /> Pengalaman Web Interaktif.</h2>
                                <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300 max-w-xl">Saya Thaha Wafiq Adly, lulusan Ilmu Komputer Universitas Lambung Mangkurat. Saya memadukan pemikiran analitis dari dunia Data Analytics dengan keahlian teknis membangun antarmuka interaktif. Bagi saya, coding bukan sekadar merangkai sintaks, tapi menceritakan insight data menjadi sebuah aplikasi web yang fungsional dan berdampak.</p>
                            </div>
                            <div data-aos="zoom-in" data-aos-delay="200">
                                <CodeTree />
                            </div>
                            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-50/50 blur-[80px] -z-10 translate-x-20 translate-y-20"></div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div data-aos="fade-up" data-aos-delay="200" className={`rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-center relative overflow-hidden group ${theme.glassSurface}`}>
                                <div className="absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-blue-300/20 blur-3xl transition-all duration-700 group-hover:scale-[2.5] group-hover:bg-indigo-200/40 z-0"></div>
                                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 shadow-inner border border-white relative z-10"><FaReact className="text-3xl text-emerald-600 transition-transform duration-700 group-hover:rotate-180" /></div>
                                <h3 className="font-bold text-slate-800 dark:text-slate-100 text-2xl md:text-3xl mb-4 z-10 relative">Spesialisasi Frontend & Ekosistem</h3>
                                <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed z-10 relative">Melalui program intensif berfokus pada ekosistem React JS, saya memiliki jam terbang tinggi dalam mendesain komponen UI yang dinamis. Saat ini saya berfokus mengembangkan arsitektur Fullstack yang menyatukan keluwesan React dengan ketangguhan backend Laravel dan MySQL.</p>
                            </div>

                            <div data-aos="fade-up" data-aos-delay="300" className={`rounded-[2.5rem] p-8 md:p-12 flex flex-col items-center justify-center relative overflow-hidden ${theme.glassSurface}`}>
                                <h3 className="font-bold text-slate-800 dark:text-slate-100 text-xl mb-6 z-10 relative self-start inline-flex items-center gap-2"><FaGithub /> GitHub Stats</h3>
                                <div className="w-full flex flex-col items-center gap-4">
                                    <img 
                                        src={`https://github-readme-stats.vercel.app/api?username=Thahaadly&show_icons=true&hide_border=true${isDarkMode ? '&theme=tokyonight' : '&theme=transparent&title_color=4f46e5&text_color=334155&icon_color=4f46e5'}`} 
                                        alt="Thahaadly GitHub Stats" 
                                        className="w-full max-w-sm drop-shadow-sm transition-transform hover:scale-105"
                                    />
                                    <img 
                                        src={`https://github-readme-stats.vercel.app/api/top-langs/?username=Thahaadly&layout=compact&hide_border=true${isDarkMode ? '&theme=tokyonight' : '&theme=transparent&title_color=4f46e5&text_color=334155'}`} 
                                        alt="Top Languages" 
                                        className="w-full max-w-sm drop-shadow-sm transition-transform hover:scale-105"
                                    />
                                </div>
                            </div>
                        </div>

                        <Timeline />
                    </div>
                </section>

                {/* ── Skills Marquee Section ── */}
                <section id="skills" data-aos="fade-up" className="scroll-mt-32 space-y-6">
                    <div className={`rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden ${theme.glassSurface} flex flex-col items-center justify-center`}>
                        <p className={`mb-3 text-sm font-bold tracking-[0.2em] uppercase ${theme.primary} text-center`}>Tech Stack</p>
                        <h2 className="text-3xl font-black text-slate-800 dark:text-slate-100 md:text-4xl drop-shadow-sm text-center mb-10">Skills</h2>
                        <style>{`
                            @keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-100%); } }
                            .animate-marquee { animation: marquee 25s linear infinite; }
                            .pause-on-hover:hover .animate-marquee { animation-play-state: paused; }
                        `}</style>
                        <div className="w-full relative flex overflow-hidden pause-on-hover [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                            {[1, 2].map((i) => (
                                <div key={i} className="flex w-max animate-marquee items-center gap-12 pr-12" aria-hidden={i === 2}>
                                    {[ { icon: FaReact, name: 'React JS', color: 'text-emerald-500' }, { icon: FaLaravel, name: 'Laravel', color: 'text-rose-500' }, { icon: SiTailwindcss, name: 'Tailwind', color: 'text-teal-500' }, { icon: SiCodeigniter, name: 'CodeIgniter', color: 'text-sky-500' }, { icon: SiMysql, name: 'MySQL', color: 'text-cyan-600' }, { icon: FaPython, name: 'Python', color: 'text-yellow-500' }, { icon: FaDatabase, name: 'Data Logic', color: 'text-indigo-500' }, { icon: FaBrain, name: 'Machine Learning', color: 'text-purple-500' } ].map((item, index) => (
                                        <div key={index} className="flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
                                            <item.icon className={`text-4xl md:text-5xl ${item.color}`} />
                                            <span className="text-xl font-bold text-slate-700">{item.name}</span>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div data-aos="fade-up" data-aos-delay="100" className={`p-8 rounded-[2rem] border group hover:-translate-y-2 transition-all duration-300 ${theme.glassCard} bg-white/40`}>
                            <div className="h-12 w-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><FaReact className="text-2xl text-emerald-500" /></div>
                            <h3 className="font-bold text-xl text-slate-800 dark:text-slate-100 mb-3">Frontend Architecture</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">Membangun antarmuka dinamis dengan React JS dan Tailwind CSS. Fokus pada UX yang mulus dan clean code.</p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="200" className={`p-8 rounded-[2rem] border group hover:-translate-y-2 transition-all duration-300 ${theme.glassCard} bg-white/40`}>
                            <div className="h-12 w-12 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><FaLaravel className="text-2xl text-rose-500" /></div>
                            <h3 className="font-bold text-xl text-slate-800 dark:text-slate-100 mb-3">Backend & Database</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">Merancang REST API aman dan arsitektur database MySQL yang efisien menggunakan framework PHP modern.</p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="300" className={`p-8 rounded-[2rem] border group hover:-translate-y-2 transition-all duration-300 lg:col-span-1 md:col-span-2 ${theme.glassCard} bg-white/40`}>
                            <div className="h-12 w-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><FaBrain className="text-2xl text-indigo-500" /></div>
                            <h3 className="font-bold text-xl text-slate-800 dark:text-slate-100 mb-3">Data Analytics & Logic</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">Ekstraksi insight dengan Python. Berpengalaman di model Machine Learning (K-Means) & NLP.</p>
                        </div>
                    </div>
                </section>

               {/* ── Portfolio Section ── */}
                <section id="portfolio" data-aos="fade-up" className="scroll-mt-32 space-y-8">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-3xl font-black text-slate-800 dark:text-slate-100 md:text-4xl drop-shadow-sm">Karya & Eksplorasi</h2>
                        <p className="text-slate-600 dark:text-slate-300">Proyek end-to-end yang dibangun dengan ketelitian.</p>
                    </div>

                    {/* Project Filter Buttons */}
                    <div className="flex flex-wrap gap-2 md:gap-3" data-aos="fade-up" data-aos-delay="50">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`rounded-full px-4 py-2 text-xs md:text-sm font-semibold transition-all duration-300 ${
                                    activeFilter === filter
                                        ? 'bg-indigo-600 text-white shadow-md'
                                        : 'bg-white/60 text-slate-600 dark:text-slate-300 hover:bg-indigo-100 hover:text-indigo-600 border border-white/50'
                                }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {isLoading ? (
                            [1, 2, 3].map((skeleton) => (
                                <div key={skeleton} className={`h-[420px] rounded-[2rem] animate-pulse bg-slate-200/50 ${theme.glassCard}`}></div>
                            ))
                        ) : filteredProjects.map((project, index) => {
                            const techList = project.tech_stack ? project.tech_stack.split(', ') : (project.technologies ? project.technologies.split(', ') : []);
                            const imagePath = project.image ? (project.image.startsWith('http') ? project.image : `/${project.image}`) : 'https://placehold.co/600x400/e2e8f0/475569?text=No+Image';
                            return (
                                /* PENTING: Hilangkan overflow-hidden di <article> ini agar pop-up bisa keluar batas */
                                <article key={project.id} data-aos="fade-up" data-aos-delay={(index % 6) * 70} className={`group relative flex flex-col rounded-[2rem] ${theme.glassCard}`}>
                                    
                                    {/* ── Wrapper Utama Card ── 
                                        Kita pindahkan overflow-hidden ke div dalam ini 
                                    */}
                                    <div className="flex flex-col h-full overflow-hidden rounded-[2rem]">
                                        <FaCode className="absolute right-4 top-4 text-5xl text-slate-200/50 drop-shadow-sm z-10 pointer-events-none" />
                                        
                                        {/* Gambar Card Normal (Kembali ke object-cover agar tidak ada ruang kosong) */}
                                        <img 
                                            src={imagePath} 
                                            alt={project.title} 
                                            className="h-56 w-full object-cover object-top transition duration-700 group-hover:scale-105 bg-slate-100" 
                                            onError={(e) => { e.target.src = 'https://placehold.co/600x400/e2e8f0/475569?text=Preview+Belum+Tersedia' }} 
                                        />
                                        
                                        <div className="relative z-20 flex flex-col p-6 flex-grow bg-white/40 backdrop-blur-md border-t border-white/50">
                                            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 transition group-hover:text-indigo-600">{project.title}</h3>
                                            <p className="mt-3 line-clamp-3 text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {techList.map((tech, idx) => (<span key={idx} className={`inline-flex items-center gap-1 rounded-md border px-2.5 py-1 text-[11px] font-bold ${theme.badge}`}>{tech}</span>))}
                                            </div>
                                            
                                            {/* Tombol Aksi */}
                                            <div className="mt-6 flex flex-wrap gap-2 justify-end mt-auto pt-4">
                                                {project.link_github || project.link !== '#' ? (
                                                    <a href={project.link_github || project.link} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold ${theme.button}`}>
                                                        <FaGithub className="text-sm" /> GitHub
                                                    </a>
                                                ) : (
                                                    <span className="inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold text-slate-400 bg-slate-100/50 cursor-not-allowed">
                                                        <FaLock className="text-[10px]" /> Internal
                                                    </span>
                                                )}
                                                {(project.link_demo || project.demo) && (
                                                    <a href={project.link_demo || project.demo} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold ${theme.buttonSolid}`}>
                                                        <FaExternalLinkAlt className="text-[10px]" /> Live Web
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* 🔥 FITUR POP-UP GAMBAR ESTETIK 🔥 */}
                                    {/* Muncul melayang keluar dari card dengan animasi membesar saat di-hover */}
                                    {project.isMobile && (
                                        <div className="absolute z-50 left-1/2 -translate-x-1/2 -top-24 w-[240px] opacity-0 invisible scale-90 group-hover:opacity-100 group-hover:visible group-hover:scale-100 group-hover:-translate-y-4 transition-all duration-500 ease-out pointer-events-none">
                                            <div className="bg-white/70 backdrop-blur-xl p-3 rounded-[2rem] border border-white/80 shadow-[0_20px_50px_-12px_rgba(31,38,135,0.35)]">
                                                <img 
                                                    src={imagePath} 
                                                    alt={`${project.title} Full View`} 
                                                    className="w-full h-auto rounded-2xl drop-shadow-md"
                                                />
                                            </div>
                                        </div>
                                    )}

                                </article>
                            );
                        })}
                    </div>
                </section>

                {/* ── Interactive Demo & Contact Section ── */}
                <section id="demo" data-aos="fade-up" className="scroll-mt-32 pb-8">
                    <div className={`relative overflow-hidden rounded-[2.5rem] p-8 md:p-12 ${theme.glassSurface}`}>
                        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-indigo-400/20 blur-3xl"></div>
                        <div className="relative z-10 text-center md:text-left">
                            <p className={`text-xs font-bold tracking-[0.2em] uppercase ${theme.primary}`}>Interactive Demo</p>
                            <h2 className="mt-3 text-3xl font-black text-slate-800 dark:text-slate-100 md:text-4xl">Coba Sistem CMS Saya</h2>
                            <button onClick={() => navigate('/login')} className={`mt-8 inline-flex items-center rounded-2xl px-8 py-4 text-sm font-bold ${theme.buttonSolid}`}>Masuk ke Dashboard Admin</button>
                        </div>
                    </div>
               </section>
                <section id="contact" data-aos="fade-up" className="scroll-mt-32 space-y-8 pb-10">
                    <div className="flex flex-col gap-2 text-center md:text-left">
                        <h2 className="text-3xl font-black text-slate-800 dark:text-slate-100 md:text-4xl drop-shadow-sm">Terkoneksi Bersama</h2>
                        <p className="text-slate-600 dark:text-slate-300">Mari berdiskusi tentang peluang kolaborasi dan ide menarik.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Form Kontak */}
                        <div className={`p-8 rounded-[2.5rem] ${theme.glassSurface} order-2 lg:order-1`}>
                            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert('Pesan berhasil dikirim!'); }}>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Nama Lengkap</label>
                                    <input type="text" id="name" required className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:text-white" placeholder="Masukkan nama Anda" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Email</label>
                                    <input type="email" id="email" required className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:text-white" placeholder="nama@email.com" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Pesan</label>
                                    <textarea id="message" required rows="4" className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:text-white" placeholder="Tuliskan pesan Anda..."></textarea>
                                </div>
                                <button type="submit" className={`w-full rounded-xl py-3.5 text-sm font-bold ${theme.buttonSolid}`}>Kirim Pesan</button>
                            </form>
                        </div>
                        
                        {/* Kartu Kontak */}
                        <div className="flex flex-col gap-5 order-1 lg:order-2">
                            <a href="mailto:thahaadly6@gmail.com" aria-label="Kirim Email" className={`flex items-center gap-5 p-6 rounded-[2rem] group hover:-translate-y-1 transition-all duration-300 ${theme.glassCard}`}>
                                <div className="h-14 w-14 rounded-full bg-rose-50 dark:bg-rose-900/30 text-rose-500 dark:text-rose-400 flex shrink-0 items-center justify-center border border-rose-100 dark:border-rose-800/50 group-hover:scale-110 transition-transform"><FaEnvelope className="text-2xl" /></div>
                                <div>
                                    <h3 className="font-bold text-slate-800 dark:text-slate-100 text-lg">Email</h3>
                                    <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 group-hover:underline">thahaadly6@gmail.com</span>
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/in/thahaa/" target="_blank" rel="noopener noreferrer" aria-label="Kunjungi LinkedIn" className={`flex items-center gap-5 p-6 rounded-[2rem] group hover:-translate-y-1 transition-all duration-300 ${theme.glassCard}`}>
                                <div className="h-14 w-14 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex shrink-0 items-center justify-center border border-blue-100 dark:border-blue-800/50 group-hover:scale-110 transition-transform"><FaLinkedin className="text-2xl" /></div>
                                <div>
                                    <h3 className="font-bold text-slate-800 dark:text-slate-100 text-lg">LinkedIn</h3>
                                    <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 group-hover:underline">Thaha Wafiq Adly</span>
                                </div>
                            </a>
                            <a href="https://wa.me/6289618687992" target="_blank" rel="noopener noreferrer" aria-label="Hubungi via WhatsApp" className={`flex items-center gap-5 p-6 rounded-[2rem] group hover:-translate-y-1 transition-all duration-300 ${theme.glassCard}`}>
                                <div className="h-14 w-14 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-500 dark:text-emerald-400 flex shrink-0 items-center justify-center border border-emerald-100 dark:border-emerald-800/50 group-hover:scale-110 transition-transform"><FaWhatsapp className="text-2xl" /></div>
                                <div>
                                    <h3 className="font-bold text-slate-800 dark:text-slate-100 text-lg">WhatsApp</h3>
                                    <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 group-hover:underline">Chat via WA</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer scrollToSection={scrollToSection} />

            {showScrollTop && (
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={`fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full ${theme.buttonSolid} shadow-lg`} aria-label="Scroll atas"><FaRocket className="text-xl" /></button>
            )}
        </div>
    );
}