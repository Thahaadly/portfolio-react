import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Komponen Eksternal yang sudah dipisah
import HangingIDCard from '../pages/Hangingidcard';
import CodeTree from '../pages/CodeTree';
import Footer from '../pages/Footer';
import { glassTheme as theme } from '../utils/theme';
import { mockProjects } from '../data';

// Icons
import { FaBrain, FaDatabase, FaReact, FaLaravel, FaPython, FaRocket, FaInstagram, FaGithub, FaLock, FaExternalLinkAlt, FaEnvelope, FaLinkedin, FaWhatsapp, FaCode } from 'react-icons/fa';
import { SiCodeigniter, SiMysql, SiTailwindcss } from 'react-icons/si';

export default function Home() {
    const navigate = useNavigate();
    const [showScrollTop, setShowScrollTop] = useState(false);

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
        <div className="relative min-h-screen scroll-smooth overflow-x-hidden font-sans text-slate-800">
            {/* Background Blur */}
            <div className="fixed inset-0 -z-10 bg-slate-50">
                <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-indigo-300/40 blur-[100px] mix-blend-multiply"></div>
                <div className="absolute top-[20%] right-[-5%] h-[400px] w-[400px] rounded-full bg-cyan-200/50 blur-[100px] mix-blend-multiply"></div>
                <div className="absolute bottom-[-10%] left-[20%] h-[600px] w-[600px] rounded-full bg-purple-200/40 blur-[120px] mix-blend-multiply"></div>
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
                        <button key={menu.id} onClick={() => scrollToSection(menu.id)} className={`rounded-full px-4 sm:px-6 py-2.5 text-xs sm:text-sm font-semibold tracking-wide text-slate-600 transition ${theme.navHover}`}>
                            {menu.label}
                        </button>
                    ))}
                    <div className="w-px h-6 bg-slate-200 mx-1"></div>
                    <a href="/CV-Thaha-Wafiq-Adly-FullStack.pdf" download className="bg-indigo-600 text-white rounded-full px-5 py-2.5 text-xs font-bold hover:bg-indigo-700 shadow-md flex items-center gap-2">CV</a>
                </nav>
            </div>

            <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pt-36 pb-16 md:px-10">
                
                {/* ── Hero Section ── */}
                <section id="home" data-aos="fade-up" className={`scroll-mt-32 flex flex-col items-center gap-10 rounded-[2.5rem] p-8 md:p-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:px-16 lg:py-24 ${theme.glassSurface}`}>
                    <div className="flex w-full flex-col items-center gap-6 text-center lg:w-1/2 lg:items-start lg:text-left">
                        <p className={`inline-flex rounded-full px-4 py-1.5 text-xs font-bold tracking-[0.15em] uppercase border border-white/50 bg-white/30 backdrop-blur-sm ${theme.primary}`}>Creative Studio</p>
                        <h1 className="text-4xl font-black tracking-tight text-slate-800 sm:text-5xl md:text-6xl drop-shadow-sm">Fullstack Web Developer</h1>
                        <div data-aos="fade-up" data-aos-delay="120" className="max-w-xl text-base leading-relaxed text-slate-600 lg:text-lg">
                            <TypeAnimation sequence={['Merangkai antarmuka pengguna yang memukau dengan backend, database, dan API yang andal secara end-to-end.']} speed={65} repeat={0} wrapper="span" />
                        </div>
                        <div className="mt-2 flex flex-wrap justify-center gap-2 lg:justify-start">
                            {['React', 'Laravel', 'Tailwind', 'MySQL'].map((tag) => (<span key={tag} className={`rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wide ${theme.chip}`}>{tag}</span>))}
                        </div>
                        <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
                            <button onClick={() => scrollToSection('portfolio')} className={`inline-flex items-center rounded-2xl px-8 py-3.5 text-sm font-semibold ${theme.buttonSolid}`}>Lihat Proyek</button>
                            <a href="/CV-Thaha-Wafiq-Adly-FullStack.pdf" download className={`inline-flex items-center gap-2 rounded-2xl px-8 py-3.5 text-sm font-bold ${theme.button}`}><FaRocket className="text-xs" /> Download CV</a>
                            <div className="flex gap-3">
                                <a href="https://www.instagram.com/thaha.aa?igsh=MTNndTV4Z20zcGh2eA%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" className={`inline-flex h-11 w-11 items-center justify-center rounded-full ${theme.button}`}><FaInstagram className="text-xl" /></a>
                                <a href="https://github.com/Thahaadly" target="_blank" rel="noreferrer" className={`inline-flex h-11 w-11 items-center justify-center rounded-full ${theme.button}`}><FaGithub className="text-xl" /></a>
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
                                <h2 className="mb-5 text-2xl font-black text-slate-800 md:text-3xl lg:text-4xl leading-snug drop-shadow-sm">Mengubah Data & Logika Menjadi<br className="hidden lg:block" /> Pengalaman Web Interaktif.</h2>
                                <p className="text-base leading-relaxed text-slate-600 max-w-xl">Saya Thaha Wafiq Adly, lulusan Ilmu Komputer Universitas Lambung Mangkurat. Saya memadukan pemikiran analitis dari dunia Data Analytics dengan keahlian teknis membangun antarmuka interaktif. Bagi saya, coding bukan sekadar merangkai sintaks, tapi menceritakan insight data menjadi sebuah aplikasi web yang fungsional dan berdampak.</p>
                            </div>
                            <div data-aos="zoom-in" data-aos-delay="200">
                                <CodeTree />
                            </div>
                            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-50/50 blur-[80px] -z-10 translate-x-20 translate-y-20"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div data-aos="fade-up" data-aos-delay="100" className={`col-span-1 rounded-[2.5rem] p-8 flex flex-col justify-center ${theme.glassCard}`}>
                                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 shadow-inner border border-white"><FaBrain className={`text-2xl ${theme.primary} animate-pulse`} /></div>
                                <h3 className="font-bold text-slate-800 text-lg mb-4">Pendidikan & Legalitas</h3>
                                <ul className="text-sm text-slate-600 space-y-3 font-medium">
                                    <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-indigo-400 shadow-sm"></span>Ilmu Komputer, ULM</li>
                                    <li className="flex items-start gap-3"><span className="h-2 w-2 rounded-full bg-indigo-400 shadow-sm mt-1.5"></span><span className="leading-snug">Sertifikasi BNSP Junior Office Operator (2025-2028)</span></li>
                                    <li className="flex items-start gap-3"><span className="h-2 w-2 rounded-full bg-indigo-400 shadow-sm mt-1.5"></span><span className="leading-snug">Sertifikasi React and React Native Basics Hacktiv8 (8 Desember)</span></li>
                                </ul>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="200" className={`col-span-1 md:col-span-2 rounded-[2.5rem] p-8 flex flex-col justify-center relative overflow-hidden group ${theme.glassCard}`}>
                                <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-blue-300/20 blur-3xl transition-all duration-700 group-hover:scale-[2.5] group-hover:bg-indigo-200/40 z-0"></div>
                                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 shadow-inner border border-white relative z-10"><FaReact className="text-3xl text-emerald-600 transition-transform duration-700 group-hover:rotate-180" /></div>
                                <h3 className="font-bold text-slate-800 text-xl mb-3 z-10 relative">Spesialisasi Frontend & Ekosistem</h3>
                                <p className="text-base text-slate-600 leading-relaxed z-10 relative max-w-2xl">Melalui program intensif berfokus pada ekosistem React JS, saya memiliki jam terbang tinggi dalam mendesain komponen UI yang dinamis. Saat ini saya berfokus mengembangkan arsitektur Fullstack yang menyatukan keluwesan React dengan ketangguhan backend Laravel dan MySQL.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Skills Marquee Section ── */}
                <section id="skills" data-aos="fade-up" className="scroll-mt-32 space-y-6">
                    <div className={`rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden ${theme.glassSurface} flex flex-col items-center justify-center`}>
                        <p className={`mb-3 text-sm font-bold tracking-[0.2em] uppercase ${theme.primary} text-center`}>Tech Stack</p>
                        <h2 className="text-3xl font-black text-slate-800 md:text-4xl drop-shadow-sm text-center mb-10">Skills</h2>
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
                            <h3 className="font-bold text-xl text-slate-800 mb-3">Frontend Architecture</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">Membangun antarmuka dinamis dengan React JS dan Tailwind CSS. Fokus pada UX yang mulus dan clean code.</p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="200" className={`p-8 rounded-[2rem] border group hover:-translate-y-2 transition-all duration-300 ${theme.glassCard} bg-white/40`}>
                            <div className="h-12 w-12 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><FaLaravel className="text-2xl text-rose-500" /></div>
                            <h3 className="font-bold text-xl text-slate-800 mb-3">Backend & Database</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">Merancang REST API aman dan arsitektur database MySQL yang efisien menggunakan framework PHP modern.</p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="300" className={`p-8 rounded-[2rem] border group hover:-translate-y-2 transition-all duration-300 lg:col-span-1 md:col-span-2 ${theme.glassCard} bg-white/40`}>
                            <div className="h-12 w-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><FaBrain className="text-2xl text-indigo-500" /></div>
                            <h3 className="font-bold text-xl text-slate-800 mb-3">Data Analytics & Logic</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">Ekstraksi insight dengan Python. Berpengalaman di model Machine Learning (K-Means) & NLP.</p>
                        </div>
                    </div>
                </section>

                {/* ── Portfolio Section ── */}
                <section id="portfolio" data-aos="fade-up" className="scroll-mt-32 space-y-8">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-3xl font-black text-slate-800 md:text-4xl drop-shadow-sm">Karya & Eksplorasi</h2>
                        <p className="text-slate-600">Proyek end-to-end yang dibangun dengan ketelitian.</p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {mockProjects.map((project, index) => {
                            const techList = project.technologies ? project.technologies.split(', ') : [];
                            return (
                                <article key={project.id} data-aos="fade-up" data-aos-delay={(index % 6) * 70} className={`group relative flex flex-col overflow-hidden rounded-[2rem] ${theme.glassCard}`}>
                                    <FaCode className="absolute right-4 top-4 text-5xl text-slate-200/50 drop-shadow-sm z-10" />
                                    <img src={`/${project.image}`} alt={project.title} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105 bg-slate-100" onError={(e) => { e.target.src = 'https://placehold.co/600x400/e2e8f0/475569?text=Preview+Belum+Tersedia' }} />
                                    <div className="relative z-20 flex flex-col p-6 flex-grow bg-white/40 backdrop-blur-md border-t border-white/50">
                                        <h3 className="text-xl font-bold text-slate-800 transition group-hover:text-indigo-600">{project.title}</h3>
                                        <p className="mt-3 line-clamp-3 text-sm text-slate-600">{project.description}</p>
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {techList.map((tech, idx) => (<span key={idx} className={`inline-flex items-center gap-1 rounded-md border px-2.5 py-1 text-[11px] font-bold ${theme.badge}`}>{tech}</span>))}
                                        </div>
                                        
                                        {/* ── Tombol Aksi ── */}
                                        <div className="mt-6 flex flex-wrap gap-2 justify-end mt-auto pt-4">
                                            
                                            {/* Tombol GitHub */}
                                            {project.link !== '#' ? (
                                                <a href={project.link} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold ${theme.button}`}>
                                                    <FaGithub className="text-sm" /> GitHub
                                                </a>
                                            ) : (
                                                <span className="inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold text-slate-400 bg-slate-100/50 cursor-not-allowed">
                                                    <FaLock className="text-[10px]" /> Internal
                                                </span>
                                            )}

                                            {/* Tombol Live Web (Akan muncul hanya jika data 'demo' ada di data.js) */}
                                            {project.demo && (
                                                <a href={project.demo} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold ${theme.buttonSolid}`}>
                                                    <FaExternalLinkAlt className="text-[10px]" /> Live Web
                                                </a>
                                            )}
                                        </div>
                                        
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </section>

                {/* ── Interactive Demo & Contact Section ── 
                <section id="demo" data-aos="fade-up" className="scroll-mt-32 pb-8">
                    <div className={`relative overflow-hidden rounded-[2.5rem] p-8 md:p-12 ${theme.glassSurface}`}>
                        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-indigo-400/20 blur-3xl"></div>
                        <div className="relative z-10 text-center md:text-left">
                            <p className={`text-xs font-bold tracking-[0.2em] uppercase ${theme.primary}`}>Interactive Demo</p>
                            <h2 className="mt-3 text-3xl font-black text-slate-800 md:text-4xl">Coba Sistem CMS Saya</h2>
                            <button onClick={() => navigate('/login')} className={`mt-8 inline-flex items-center rounded-2xl px-8 py-4 text-sm font-bold ${theme.buttonSolid}`}>Masuk ke Dashboard Admin</button>
                        </div>
                    </div>
               </section>
*/}
                <section id="contact" data-aos="fade-up" className="scroll-mt-32 space-y-8 pb-10">
                    <div className="flex flex-col gap-2 text-center md:text-left">
                        <h2 className="text-3xl font-black text-slate-800 md:text-4xl drop-shadow-sm">Kontak</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <a href="mailto:thahaadly6@gmail.com" className={`flex flex-col items-center justify-center p-8 rounded-[2rem] text-center group hover:-translate-y-2 transition-all duration-300 ${theme.glassCard}`}>
                            <div className="h-14 w-14 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center mb-4 border border-rose-100 group-hover:scale-110 transition-transform"><FaEnvelope className="text-2xl" /></div>
                            <h3 className="font-bold text-slate-800 text-lg">Email</h3>
                            <span className="text-sm font-semibold text-indigo-600 mt-2 group-hover:underline">thahaadly6@gmail.com</span>
                        </a>
                        <a href="https://www.linkedin.com/in/thahaa/" target="_blank" rel="noopener noreferrer" className={`flex flex-col items-center justify-center p-8 rounded-[2rem] text-center group hover:-translate-y-2 transition-all duration-300 ${theme.glassCard}`}>
                            <div className="h-14 w-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4 border border-blue-100 group-hover:scale-110 transition-transform"><FaLinkedin className="text-2xl" /></div>
                            <h3 className="font-bold text-slate-800 text-lg">LinkedIn</h3>
                            <span className="text-sm font-semibold text-indigo-600 mt-2 group-hover:underline">Thaha Wafiq Adly</span>
                        </a>
                        <a href="https://wa.me/6289618687992" target="_blank" rel="noopener noreferrer" className={`flex flex-col items-center justify-center p-8 rounded-[2rem] text-center group hover:-translate-y-2 transition-all duration-300 ${theme.glassCard}`}>
                            <div className="h-14 w-14 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-4 border border-emerald-100 group-hover:scale-110 transition-transform"><FaWhatsapp className="text-2xl" /></div>
                            <h3 className="font-bold text-slate-800 text-lg">WhatsApp</h3>
                            <span className="text-sm font-semibold text-indigo-600 mt-2 group-hover:underline">Chat via WA</span>
                        </a>
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