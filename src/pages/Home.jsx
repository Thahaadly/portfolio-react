import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroPhoto from '../assets/fix.jpeg';
import { resolveProjectImage } from '../utils/projectImageResolver';
import { mockProjects } from '../data';
import { FaLock } from 'react-icons/fa';
import {
    FaBrain,
    FaChartPie,
    FaChartLine,
    FaCode,
    FaDatabase,
    FaExternalLinkAlt,
    FaGithub,
    FaImage,
    FaFolderOpen,
    FaInstagram,
    FaLaravel,
    FaPalette,
    FaPhp,
    FaPython,
    FaReact,
    FaRocket,
    FaTools,
} from 'react-icons/fa';
import { SiCodeigniter, SiMysql, SiTailwindcss, SiJavascript, SiPython } from 'react-icons/si';

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const skillGroups = [
    {
        category: 'Data & Machine Learning',
        items: [
            { name: 'Python', icon: FaPython },
            { name: 'SQL', icon: FaDatabase },
            { name: 'Machine Learning', icon: FaBrain },
            { name: 'Data Analysis', icon: FaChartLine },
        ],
    },
    {
        category: 'Web Development',
        items: [
            { name: 'React JS', icon: FaReact },
            { name: 'Laravel', icon: FaLaravel },
            { name: 'CI4', icon: SiCodeigniter },
            { name: 'Tailwind', icon: SiTailwindcss },
        ],
    },
];

const glassTheme = {
    primary: 'text-indigo-600',
    primaryHover: 'hover:text-indigo-500',
    glassSurface: 'bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]',
    glassCard: 'bg-white/30 backdrop-blur-lg border border-white/50 shadow-[0_4px_24px_0_rgba(31,38,135,0.05)] hover:bg-white/50 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] transition-all duration-300',
    button: 'bg-white/60 backdrop-blur-md border border-white/80 text-slate-800 hover:bg-white/80 shadow-sm transition-all',
    buttonSolid: 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md transition-all',
    navHover: 'hover:bg-white/50 hover:text-indigo-600',
    chip: 'bg-white/40 backdrop-blur-sm border-white/60 text-indigo-700',
    skillIcon: 'bg-indigo-100/50 text-indigo-600',
    badge: 'border-indigo-200/50 bg-white/40 backdrop-blur-md text-indigo-700',
};

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────
function getProjectMeta(title = '') {
    const normalizedTitle = title.toLowerCase();
    const projectSlug = title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-').replace(/-+/g, '-');
    const fallbackSlug = projectSlug || 'project-portfolio';

    if (normalizedTitle.includes('nlp') || normalizedTitle.includes('bencana')) return { badges: [{ name: 'Python', icon: FaPython }, { name: 'XLM-RoBERTa', icon: FaBrain }], watermarkIcon: FaBrain, githubLink: `https://github.com/thahawafiq/${fallbackSlug}`, demoLink: `https://demo.thahawafiq.dev/${fallbackSlug}` };
    if (normalizedTitle.includes('web movie') || normalizedTitle.includes('tmovie')) return { badges: [{ name: 'React JS', icon: FaReact }, { name: 'Movie Catalog', icon: FaCode }], watermarkIcon: FaReact, githubLink: `https://github.com/thahawafiq/${fallbackSlug}`, demoLink: `https://demo.thahawafiq.dev/${fallbackSlug}` };
    if (normalizedTitle.includes('shopping') || normalizedTitle.includes('clothing store')) return { badges: [{ name: 'React JS', icon: FaReact }, { name: 'REST API', icon: FaDatabase }], watermarkIcon: FaDatabase, githubLink: `https://github.com/thahawafiq/${fallbackSlug}`, demoLink: `https://demo.thahawafiq.dev/${fallbackSlug}` };
    if (normalizedTitle.includes('react native') || normalizedTitle.includes('hotel booking')) return { badges: [{ name: 'React Native', icon: FaReact }, { name: 'Android App', icon: FaRocket }], watermarkIcon: FaRocket, githubLink: `https://github.com/thahawafiq/${fallbackSlug}`, demoLink: `https://demo.thahawafiq.dev/${fallbackSlug}` };
    if (normalizedTitle.includes('covid news') || normalizedTitle.includes('web berita')) return { badges: [{ name: 'React JS', icon: FaReact }, { name: 'News API', icon: FaChartLine }], watermarkIcon: FaChartLine, githubLink: `https://github.com/thahawafiq/${fallbackSlug}`, demoLink: `https://demo.thahawafiq.dev/${fallbackSlug}` };
    if (normalizedTitle.includes('portfolio pribadi')) return { badges: [{ name: 'React JS', icon: FaReact }, { name: 'Personal Branding', icon: FaCode }], watermarkIcon: FaCode, githubLink: `https://github.com/thahawafiq/${fallbackSlug}`, demoLink: `https://demo.thahawafiq.dev/${fallbackSlug}` };
    if (normalizedTitle.includes('nba') || normalizedTitle.includes('clustering')) return { badges: [{ name: 'Python', icon: FaPython }, { name: 'K-Means', icon: FaChartPie }], watermarkIcon: FaChartPie, githubLink: `https://github.com/thahawafiq/${fallbackSlug}`, demoLink: `https://demo.thahawafiq.dev/${fallbackSlug}` };
    if (normalizedTitle.includes('olist') || normalizedTitle.includes('otomotif')) return { badges: [{ name: 'Python', icon: FaPython }, { name: 'Data Analysis', icon: FaChartLine }], watermarkIcon: FaChartLine, githubLink: `https://github.com/thahawafiq/${fallbackSlug}`, demoLink: `https://demo.thahawafiq.dev/${fallbackSlug}` };
    if (normalizedTitle.includes('arsip') || normalizedTitle.includes('bppks')) return { badges: [{ name: 'PHP', icon: FaPhp }, { name: 'MySQL', icon: SiMysql }, { name: 'CI4', icon: SiCodeigniter }], watermarkIcon: FaDatabase, githubLink: `https://github.com/thahawafiq/${fallbackSlug}`, demoLink: `https://demo.thahawafiq.dev/${fallbackSlug}` };
    if (normalizedTitle.includes('react') || normalizedTitle.includes('portfolio')) return { badges: [{ name: 'React JS', icon: FaReact }, { name: 'Laravel', icon: FaLaravel }, { name: 'Tailwind', icon: SiTailwindcss }], watermarkIcon: FaCode, githubLink: `https://github.com/thahawafiq/${fallbackSlug}`, demoLink: `https://demo.thahawafiq.dev/${fallbackSlug}` };
    return { badges: [{ name: 'Web Dev', icon: FaCode }], watermarkIcon: FaCode, githubLink: `https://github.com/thahawafiq/${fallbackSlug}`, demoLink: `https://demo.thahawafiq.dev/${fallbackSlug}` };
}

function getProjectBadges(project) {
    if (project.tech_stack) return project.tech_stack.split(',').map((item) => item.trim()).filter(Boolean).slice(0, 5);
    const source = `${project.title || ''} ${project.description || ''}`.toLowerCase();
    const badges = [];
    if (source.includes('react')) badges.push('React JS');
    if (source.includes('laravel')) badges.push('Laravel');
    if (source.includes('tailwind')) badges.push('Tailwind CSS');
    if (source.includes('python')) badges.push('Python');
    if (source.includes('mysql')) badges.push('MySQL');
    return badges.length ? badges.slice(0, 5) : ['Web Dev'];
}

// ─────────────────────────────────────────────
// SUB-COMPONENTS
// ─────────────────────────────────────────────

function ProjectVisual({ src, alt, className }) {
    const [hasError, setHasError] = useState(false);
    useEffect(() => { setHasError(false); }, [src]);
    if (!src || hasError) {
        return (
            <div className={`relative flex items-center justify-center bg-white/20 backdrop-blur-sm ${className}`}>
                <div className="flex flex-col items-center gap-1 text-slate-500">
                    <FaImage className="text-xl" />
                    <span className="text-[11px] font-medium tracking-wide">Preview not available</span>
                </div>
            </div>
        );
    }
    return <img src={src} alt={alt} className={className} onError={() => setHasError(true)} />;
}

function HangingIDCard() {
    return (
        <div className="relative flex justify-center w-full h-[400px]">
            <style>{`
                @keyframes swing {
                    0%   { transform: rotate(4deg); }
                    50%  { transform: rotate(-4deg); }
                    100% { transform: rotate(4deg); }
                }
                .animate-swing {
                    animation: swing 5s ease-in-out infinite;
                    transform-origin: top center;
                }
            `}</style>
            <div className="animate-swing absolute -top-10 flex flex-col items-center">
                <div className="w-1.5 h-32 bg-gradient-to-b from-indigo-500/20 to-white/60 rounded-t-full shadow-sm"></div>
                <div className="relative w-56 bg-white/40 backdrop-blur-xl border border-white/60 rounded-2xl p-4 shadow-[0_15px_35px_rgba(31,38,135,0.1)] flex flex-col items-center gap-3">
                    <div className="w-10 h-2 border-2 border-white/60 bg-white/20 rounded-full mb-1"></div>
                    <div className="relative w-full h-48 rounded-xl overflow-hidden border-2 border-white/80 shadow-inner">
                        <img src={heroPhoto} alt="Thaha Wafiq" className="w-full h-full object-cover object-top" />
                    </div>
                    <div className="text-center w-full mt-2">
                        <h3 className="font-black text-slate-800 text-lg tracking-tight">THAHA WAFIQ</h3>
                        <p className="text-[10px] text-indigo-600 font-bold tracking-[0.2em] uppercase mt-1">Web Developer</p>
                    </div>
                    <div className="w-full h-6 mt-2 opacity-30 bg-[repeating-linear-gradient(90deg,#1e293b_0px,#1e293b_2px,transparent_2px,transparent_4px,transparent_5px,#1e293b_5px,#1e293b_8px)]"></div>
                </div>
            </div>
        </div>
    );
}

// ─── TechNode: reusable floating icon bubble ───
const sizeMap    = { lg: { bubble: 56, icon: 28 }, md: { bubble: 48, icon: 22 }, sm: { bubble: 40, icon: 18 } };
const shadowMap  = { emerald:'rgba(16,185,129,0.2)', rose:'rgba(244,63,94,0.2)', teal:'rgba(20,184,166,0.2)', cyan:'rgba(6,182,212,0.2)', sky:'rgba(14,165,233,0.2)', amber:'rgba(245,158,11,0.2)', yellow:'rgba(234,179,8,0.2)' };
const borderMap  = { emerald:'#d1fae5', rose:'#ffe4e6', teal:'#ccfbf1', cyan:'#cffafe', sky:'#e0f2fe', amber:'#fef3c7', yellow:'#fef9c3' };

function TechNode({ icon, label, color = 'indigo', position = {}, translate = '', size = 'md', delay = 0 }) {
    const s = sizeMap[size] ?? sizeMap.md;
    const floatStyle = {
        position: 'absolute',
        ...position,
        animation: `techFloat 4s ease-in-out infinite`,
        animationDelay: `${delay}ms`,
    };
    return (
        <div className={`${translate} group cursor-pointer`} style={floatStyle}>
            <div
                style={{
                    width: s.bubble, height: s.bubble,
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.9)',
                    backdropFilter: 'blur(8px)',
                    border: `1.5px solid ${borderMap[color] ?? '#e0e7ff'}`,
                    boxShadow: `0 5px 20px ${shadowMap[color] ?? 'rgba(99,102,241,0.15)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.2)'; e.currentTarget.style.boxShadow = `0 8px 28px ${shadowMap[color] ?? 'rgba(99,102,241,0.25)'}`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = `0 5px 20px ${shadowMap[color] ?? 'rgba(99,102,241,0.15)'}`; }}
            >
                {icon}
            </div>
            <span style={{
                position: 'absolute', bottom: -20, left: '50%', transform: 'translateX(-50%)',
                fontSize: 9, fontWeight: 700, color: '#64748b', whiteSpace: 'nowrap',
                opacity: 0, transition: 'opacity 0.3s',
            }}
                className="group-hover:opacity-100"
            >
                {label}
            </span>
        </div>
    );
}

// ─── CodeTree: the full binary-tree visual ───
const FLOAT_TEXTS = [
    { text: '<App />',                  top: '5%',  left: '42%',  color: '#6366f1' },
    { text: 'import { useState }',      top: '10%', left: '28%',  color: '#8b5cf6' },
    { text: 'SELECT * FROM',            top: '13%', right: '22%', color: '#0891b2' },
    { text: 'function render()',        top: '22%', left: '12%',  color: '#6366f1' },
    { text: 'display: flex;',           top: '24%', right: '8%',  color: '#0d9488' },
    { text: "Route::get('/api')",       top: '38%', left: '3%',   color: '#e11d48' },
    { text: "df.groupby('id')",         top: '35%', right: '3%',  color: '#d97706' },
    { text: 'const data = []',          top: '52%', left: '2%',   color: '#6366f1' },
    { text: 'KMeans(n_clusters=3)',     top: '50%', right: '2%',  color: '#8b5cf6' },
    { text: 'return response()',        top: '67%', left: '8%',   color: '#6366f1' },
    { text: 'npm run build',            top: '63%', right: '10%', color: '#0d9488' },
    { text: 'justify-center',           top: '78%', left: '22%',  color: '#0891b2' },
    { text: 'JOIN users ON',            top: '80%', right: '28%', color: '#d97706' },
    { text: 'useEffect(() => {}, [])',  top: '42%', left: '38%',  color: '#8b5cf6' },
    { text: 'php artisan',              top: '57%', left: '43%',  color: '#e11d48' },
];

function CodeTree() {
    return (
        <div className="relative w-full h-[480px] flex flex-col items-center justify-end">
            {/* Keyframes injected once */}
            <style>{`
                @keyframes techFloat {
                    0%, 100% { transform: translateY(0px); }
                    50%       { transform: translateY(-8px); }
                }
                @keyframes codeTextDrift {
                    0%, 100% { opacity: 0.6; transform: translateY(0); }
                    50%       { opacity: 0.9; transform: translateY(-6px); }
                }
                @keyframes rootPulse {
                    0%   { transform: scale(1);   opacity: 0.5; }
                    100% { transform: scale(1.55); opacity: 0; }
                }
            `}</style>

            {/* ── Floating code texts ── */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                {FLOAT_TEXTS.map((item, i) => (
                    <span
                        key={i}
                        className="absolute font-mono select-none"
                        style={{
                            fontSize: 11,
                            fontWeight: 800,
                            color: item.color,
                            opacity: 0.7,
                            top: item.top, left: item.left, right: item.right,
                            animation: `codeTextDrift ${4 + (i % 4)}s ease-in-out infinite`,
                            animationDelay: `${i * 0.35}s`,
                            letterSpacing: '0.02em',
                            textShadow: `0 0 12px ${item.color}55`,
                        }}
                    >
                        {item.text}
                    </span>
                ))}
            </div>

            {/* ── SVG branch lines ── */}
            <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-10"
                viewBox="0 0 300 480"
                preserveAspectRatio="xMidYMid meet"
            >
                <defs>
                    <linearGradient id="trunkGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#4f46e5" stopOpacity="1"/>
                        <stop offset="100%" stopColor="#818cf8" stopOpacity="0.7"/>
                    </linearGradient>
                    <linearGradient id="branchGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#6366f1" stopOpacity="1"/>
                        <stop offset="100%" stopColor="#a5b4fc" stopOpacity="0.75"/>
                    </linearGradient>
                    <linearGradient id="leafGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#818cf8" stopOpacity="0.9"/>
                        <stop offset="100%" stopColor="#c7d2fe" stopOpacity="0.55"/>
                    </linearGradient>
                </defs>

                {/* Trunk */}
                <line x1="150" y1="455" x2="150" y2="340" stroke="url(#trunkGrad)" strokeWidth="5" strokeLinecap="round"/>

                {/* Level-1 branches */}
                <path d="M150,340 Q150,295 150,258" fill="none" stroke="url(#branchGrad)" strokeWidth="3.5" strokeLinecap="round"/>
                <path d="M150,340 Q108,322 72,298" fill="none" stroke="url(#branchGrad)" strokeWidth="3.5" strokeLinecap="round"/>
                <path d="M150,340 Q192,322 228,298" fill="none" stroke="url(#branchGrad)" strokeWidth="3.5" strokeLinecap="round"/>

                {/* Level-2 branches (dashed) */}
                <path d="M72,298 Q46,264 38,224"   fill="none" stroke="url(#leafGrad)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="7 4"/>
                <path d="M72,298 Q68,268 66,238"   fill="none" stroke="url(#leafGrad)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="7 4"/>
                <path d="M228,298 Q244,264 250,224" fill="none" stroke="url(#leafGrad)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="7 4"/>
                <path d="M150,258 Q116,234 98,204"  fill="none" stroke="url(#leafGrad)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="7 4"/>
            </svg>

            {/* ── Tech nodes ── */}
            <div className="absolute inset-0 z-20">

                {/* ROOT */}
                <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 group cursor-default">
                    <div style={{
                        position: 'absolute', width: 64, height: 64, borderRadius: '50%',
                        background: 'rgba(99,102,241,0.1)',
                        animation: 'rootPulse 2.5s ease-out infinite',
                    }}/>
                    <div className="relative h-14 w-14 rounded-full bg-gradient-to-br from-indigo-50 to-white flex flex-col items-center justify-center border border-indigo-200 z-10 transition-transform duration-300 group-hover:scale-110"
                        style={{ boxShadow: '0 4px 20px rgba(99,102,241,0.2)' }}
                    >
                        <FaBrain className="text-2xl text-indigo-500 animate-pulse" />
                        <FaDatabase className="text-sm text-indigo-400 -mt-1" />
                    </div>
                    <span className="text-[8px] font-bold text-indigo-500/70 uppercase tracking-[0.2em] z-10 mt-1">Data & Logic</span>
                </div>

                {/* LEVEL 1 — React JS (top-center) */}
                <TechNode
                    icon={<FaReact style={{ fontSize: 28, color: '#10b981', animation: 'spin 6s linear infinite' }} />}
                    label="React JS" color="emerald"
                    position={{ top: '43%', left: '50%', marginLeft: -28 }}
                    size="lg" delay={0}
                />

                {/* LEVEL 2 — Laravel (left) */}
                <TechNode
                    icon={<FaLaravel style={{ fontSize: 22, color: '#f43f5e' }} />}
                    label="Laravel" color="rose"
                    position={{ top: '54%', left: '19%' }}
                    size="md" delay={200}
                />

                {/* LEVEL 2 — Tailwind (right) */}
                <TechNode
                    icon={<SiTailwindcss style={{ fontSize: 22, color: '#0d9488' }} />}
                    label="Tailwind" color="teal"
                    position={{ top: '54%', left: '69%' }}
                    size="md" delay={400}
                />

                {/* LEVEL 3 — MySQL */}
                <TechNode
                    icon={<SiMysql style={{ fontSize: 18, color: '#0891b2' }} />}
                    label="MySQL" color="cyan"
                    position={{ top: '64%', left: '7%' }}
                    size="sm" delay={600}
                />

                {/* LEVEL 3 — CI4 */}
                <TechNode
                    icon={<SiCodeigniter style={{ fontSize: 18, color: '#3b82f6' }} />}
                    label="CI4" color="sky"
                    position={{ top: '53%', left: '1%' }}
                    size="sm" delay={800}
                />

                {/* LEVEL 3 — Python */}
                <TechNode
                    icon={<FaPython style={{ fontSize: 18, color: '#d97706' }} />}
                    label="Python" color="amber"
                    position={{ top: '60%', left: '79%' }}
                    size="sm" delay={1000}
                />

                {/* LEVEL 3 — JavaScript */}
                <TechNode
                    icon={<SiJavascript style={{ fontSize: 18, color: '#ca8a04' }} />}
                    label="JS" color="yellow"
                    position={{ top: '33%', left: '24%' }}
                    size="sm" delay={1200}
                />
            </div>

            {/* Decorative glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-indigo-100/30 blur-[60px] -z-10" />
        </div>
    );
}

// ─────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────
function Home() {
    const navigate = useNavigate();
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [activePortfolioTab, setActivePortfolioTab] = useState('projects');
    const theme = glassTheme;

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

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/projects');
                const payload = Array.isArray(response.data) ? response.data : response.data?.data;
                setProjects(Array.isArray(payload) ? payload : []);
            } catch {
                setProjects([]);
                setError('Gagal memuat proyek. Pastikan backend Laravel menyala.');
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div className="relative min-h-screen scroll-smooth overflow-x-hidden font-sans text-slate-800">

            {/* Mesh gradient background */}
            <div className="fixed inset-0 -z-10 bg-slate-50">
                <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-indigo-300/40 blur-[100px] mix-blend-multiply"></div>
                <div className="absolute top-[20%] right-[-5%] h-[400px] w-[400px] rounded-full bg-cyan-200/50 blur-[100px] mix-blend-multiply"></div>
                <div className="absolute bottom-[-10%] left-[20%] h-[600px] w-[600px] rounded-full bg-purple-200/40 blur-[120px] mix-blend-multiply"></div>
            </div>

            {/* Floating Navigation */}
            <div className="fixed top-8 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
                <nav className={`pointer-events-auto flex items-center gap-1 sm:gap-2 rounded-full p-1.5 shadow-lg ${theme.glassSurface}`}>
                    {[
                        { label: 'Home', id: 'home' },
                        { label: 'About', id: 'about' },
                        { label: 'Portfolio', id: 'portfolio' },
                        { label: 'Contact', id: 'contact' },
                    ].map((menu) => (
                        <button
                            key={menu.id}
                            type="button"
                            onClick={() => scrollToSection(menu.id)}
                            className={`rounded-full px-4 sm:px-6 py-2.5 text-xs sm:text-sm font-semibold tracking-wide text-slate-600 transition ${theme.navHover}`}
                        >
                            {menu.label}
                        </button>
                    ))}
                    <div className="w-px h-6 bg-slate-200 mx-1"></div>
    <a 
        href="/path-to-your-cv.pdf" 
        download
        className="bg-indigo-600 text-white rounded-full px-5 py-2.5 text-xs font-bold hover:bg-indigo-700 transition-all shadow-md flex items-center gap-2"
    >
        CV
    </a>
                </nav>
            </div>

            <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pt-36 pb-16 md:px-10">

                {/* ── Hero Section ── */}
                <section id="home" data-aos="fade-up" className={`scroll-mt-32 flex flex-col items-center gap-10 rounded-[2.5rem] p-8 md:p-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:px-16 lg:py-24 ${theme.glassSurface}`}>
                    <div className="flex w-full flex-col items-center gap-6 text-center lg:w-1/2 lg:items-start lg:text-left">
                        <p className={`inline-flex rounded-full px-4 py-1.5 text-xs font-bold tracking-[0.15em] uppercase border border-white/50 bg-white/30 backdrop-blur-sm ${theme.primary}`}>
                            Creative Studio
                        </p>
                        <h1 className="text-4xl font-black tracking-tight text-slate-800 sm:text-5xl md:text-6xl drop-shadow-sm">
                            Fullstack Web Developer
                        </h1>
                        <div data-aos="fade-up" data-aos-delay="120" className="max-w-xl text-base leading-relaxed text-slate-600 lg:text-lg">
                            <TypeAnimation
                                sequence={['Merangkai antarmuka pengguna yang memukau dengan backend, database, dan API yang andal secara end-to-end.']}
                                speed={65} repeat={0} wrapper="span"
                            />
                        </div>
                        <div className="mt-2 flex flex-wrap justify-center gap-2 lg:justify-start">
                            {['React', 'Laravel', 'Tailwind', 'MySQL'].map((tag) => (
                                <span key={tag} className={`rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wide ${theme.chip}`}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
                            <button type="button" onClick={() => scrollToSection('portfolio')} className={`inline-flex items-center rounded-2xl px-8 py-3.5 text-sm font-semibold ${theme.buttonSolid}`}>
                                Lihat Proyek
                            </button>
                            <a 
        href="/CV Thaha Wafiq Adly.pdf" 
        download 
        className={`inline-flex items-center gap-2 rounded-2xl px-8 py-3.5 text-sm font-bold ${theme.button}`}
    >
        <FaRocket className="text-xs" /> Download CV
    </a>
                            <div className="flex gap-3">
                                <a href="https://instagram.com" target="_blank" rel="noreferrer" className={`inline-flex h-11 w-11 items-center justify-center rounded-full ${theme.button}`} aria-label="Instagram">
                                    <FaInstagram className="text-xl" />
                                </a>
                                <a href="https://github.com" target="_blank" rel="noreferrer" className={`inline-flex h-11 w-11 items-center justify-center rounded-full ${theme.button}`} aria-label="GitHub">
                                    <FaGithub className="text-xl" />
                                </a>
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

                        {/* Kotak utama: teks + CodeTree */}
                        <div
                            data-aos="fade-up"
                            className={`rounded-[2.5rem] p-8 md:p-12 lg:grid lg:grid-cols-2 lg:items-center gap-12 overflow-hidden relative ${theme.glassSurface}`}
                        >
                            {/* Kolom Kiri */}
                            <div className="z-10 relative">
                                <p className={`mb-4 text-sm font-bold tracking-[0.2em] uppercase ${theme.primary}`}>About Me</p>
                                <h2 className="mb-5 text-2xl font-black text-slate-800 md:text-3xl lg:text-4xl leading-snug drop-shadow-sm">
                                    Mengubah Data & Logika Menjadi<br className="hidden lg:block" /> Pengalaman Web Interaktif.
                                </h2>
                                <p className="text-base leading-relaxed text-slate-600 max-w-xl">
                                    Saya Thaha Wafiq Adly, lulusan Ilmu Komputer Universitas Lambung Mangkurat. Saya memadukan pemikiran analitis dari dunia Data Analytics dengan keahlian teknis membangun antarmuka interaktif. Bagi saya, coding bukan sekadar merangkai sintaks, tapi menceritakan insight data menjadi sebuah aplikasi web yang fungsional dan berdampak.
                                </p>
                            </div>

                            {/* Kolom Kanan: Code Tree */}
                            <div data-aos="zoom-in" data-aos-delay="200">
                                <CodeTree />
                            </div>

                            {/* Decorative bg glow */}
                            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-50/50 blur-[80px] -z-10 translate-x-20 translate-y-20"></div>
                        </div>

                        {/* Bento bawah */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                            {/* Edukasi */}
                            <div data-aos="fade-up" data-aos-delay="100" className={`col-span-1 rounded-[2.5rem] p-8 flex flex-col justify-center ${theme.glassCard}`}>
                                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 shadow-inner border border-white">
                                    <FaBrain className={`text-2xl ${theme.primary} animate-pulse`} />
                                </div>
                                <h3 className="font-bold text-slate-800 text-lg mb-4">Pendidikan & Legalitas</h3>
                                <ul className="text-sm text-slate-600 space-y-3 font-medium">
                                    <li className="flex items-center gap-3">
                                        <span className="h-2 w-2 rounded-full bg-indigo-400 shadow-sm"></span>
                                        Ilmu Komputer, ULM
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="h-2 w-2 rounded-full bg-indigo-400 shadow-sm mt-1.5"></span>
                                        <span className="leading-snug">Sertifikasi BNSP Junior Office Operator (2028)</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Spesialisasi */}
                            <div data-aos="fade-up" data-aos-delay="200" className={`col-span-1 md:col-span-2 rounded-[2.5rem] p-8 flex flex-col justify-center relative overflow-hidden group ${theme.glassCard}`}>
                                <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-blue-300/20 blur-3xl transition-all duration-700 group-hover:scale-[2.5] group-hover:bg-indigo-200/40 z-0"></div>
                                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 shadow-inner border border-white relative z-10">
                                    <FaReact className="text-3xl text-emerald-600 transition-transform duration-700 group-hover:rotate-180" />
                                </div>
                                <h3 className="font-bold text-slate-800 text-xl mb-3 z-10 relative">Spesialisasi Frontend & Ekosistem</h3>
                                <p className="text-base text-slate-600 leading-relaxed z-10 relative max-w-2xl">
                                    Melalui program intensif berfokus pada ekosistem React JS, saya memiliki jam terbang tinggi dalam mendesain komponen UI yang dinamis. Saat ini saya berfokus mengembangkan arsitektur Fullstack yang menyatukan keluwesan React dengan ketangguhan backend Laravel dan MySQL.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
{/* ── Skills Section (Infinite Marquee & Bento Concept) ── */}
<section id="skills" data-aos="fade-up" className="scroll-mt-32 space-y-6">
    
    {/* 1. BAGIAN ATAS: INFINITE LOGO MARQUEE */}
    <div className={`rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden ${theme.glassSurface} flex flex-col items-center justify-center`}>
        
        <p className={`mb-3 text-sm font-bold tracking-[0.2em] uppercase ${theme.primary} text-center`}>
            Tech Stack
        </p>
        <h2 className="text-3xl font-black text-slate-800 md:text-4xl drop-shadow-sm text-center mb-10">
            Ekosistem Teknologi
        </h2>

        {/* Custom CSS untuk Infinite Scroll */}
        <style>
            {`
                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-100%); }
                }
                .animate-marquee {
                    animation: marquee 25s linear infinite;
                }
                /* Berhenti sejenak kalau di-hover */
                .pause-on-hover:hover .animate-marquee {
                    animation-play-state: paused;
                }
            `}
        </style>

        {/* Pembungkus Marquee */}
        <div className="w-full relative flex overflow-hidden pause-on-hover [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            
            {/* List Icon Asli */}
            <div className="flex w-max animate-marquee items-center gap-12 pr-12">
                {[
                    { icon: FaReact, name: 'React JS', color: 'text-emerald-500' },
                    { icon: FaLaravel, name: 'Laravel', color: 'text-rose-500' },
                    { icon: SiTailwindcss, name: 'Tailwind', color: 'text-teal-500' },
                    { icon: SiCodeigniter, name: 'CodeIgniter', color: 'text-sky-500' },
                    { icon: SiMysql, name: 'MySQL', color: 'text-cyan-600' },
                    { icon: FaPython, name: 'Python', color: 'text-yellow-500' },
                    { icon: FaDatabase, name: 'Data Logic', color: 'text-indigo-500' },
                    { icon: FaBrain, name: 'Machine Learning', color: 'text-purple-500' },
                ].map((item, index) => (
                    <div key={`original-${index}`} className="flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
                        <item.icon className={`text-4xl md:text-5xl ${item.color}`} />
                        <span className="text-xl font-bold text-slate-700">{item.name}</span>
                    </div>
                ))}
            </div>

            {/* List Icon Copy (Untuk efek infinite loop yang mulus) */}
            <div className="flex w-max animate-marquee items-center gap-12 pr-12" aria-hidden="true">
                {[
                    { icon: FaReact, name: 'React JS', color: 'text-emerald-500' },
                    { icon: FaLaravel, name: 'Laravel', color: 'text-rose-500' },
                    { icon: SiTailwindcss, name: 'Tailwind', color: 'text-teal-500' },
                    { icon: SiCodeigniter, name: 'CodeIgniter', color: 'text-sky-500' },
                    { icon: SiMysql, name: 'MySQL', color: 'text-cyan-600' },
                    { icon: FaPython, name: 'Python', color: 'text-yellow-500' },
                    { icon: FaDatabase, name: 'Data Logic', color: 'text-indigo-500' },
                    { icon: FaBrain, name: 'Machine Learning', color: 'text-purple-500' },
                ].map((item, index) => (
                    <div key={`copy-${index}`} className="flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
                        <item.icon className={`text-4xl md:text-5xl ${item.color}`} />
                        <span className="text-xl font-bold text-slate-700">{item.name}</span>
                    </div>
                ))}
            </div>
            
        </div>
    </div>

    {/* 2. BAGIAN BAWAH: BENTO BOX DETAIL SKILL */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Bento 1: Frontend */}
        <div data-aos="fade-up" data-aos-delay="100" className={`p-8 rounded-[2rem] border group hover:-translate-y-2 transition-all duration-300 ${theme.glassCard} bg-white/40`}>
            <div className="h-12 w-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FaReact className="text-2xl text-emerald-500" />
            </div>
            <h3 className="font-bold text-xl text-slate-800 mb-3">Frontend Architecture</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
                Membangun antarmuka yang dinamis, responsif, dan interaktif menggunakan React JS dan Tailwind CSS. Fokus pada *User Experience* (UX) yang mulus dan *clean code*.
            </p>
        </div>

        {/* Bento 2: Backend & API */}
        <div data-aos="fade-up" data-aos-delay="200" className={`p-8 rounded-[2rem] border group hover:-translate-y-2 transition-all duration-300 ${theme.glassCard} bg-white/40`}>
            <div className="h-12 w-12 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FaLaravel className="text-2xl text-rose-500" />
            </div>
            <h3 className="font-bold text-xl text-slate-800 mb-3">Backend & Database</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
                Merancang RESTful API yang aman dan arsitektur database relasional (MySQL) yang efisien menggunakan framework PHP modern seperti Laravel dan CodeIgniter 4.
            </p>
        </div>

        {/* Bento 3: Data Analytics & ML */}
        <div data-aos="fade-up" data-aos-delay="300" className={`p-8 rounded-[2rem] border group hover:-translate-y-2 transition-all duration-300 lg:col-span-1 md:col-span-2 ${theme.glassCard} bg-white/40`}>
            <div className="h-12 w-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FaBrain className="text-2xl text-indigo-500" />
            </div>
            <h3 className="font-bold text-xl text-slate-800 mb-3">Data Analytics & Logic</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
                Menggunakan Python untuk ekstraksi *insight* dari data mentah. Berpengalaman dalam model Machine Learning seperti K-Means Clustering dan Natural Language Processing (NLP).
            </p>
        </div>

    </div>
</section>
              {/* ── Portfolio Section (Hanya Grid Proyek) ── */}
<section id="portfolio" data-aos="fade-up" className="scroll-mt-32 space-y-8">
    
    <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-black text-slate-800 md:text-4xl drop-shadow-sm">Karya & Eksplorasi</h2>
        <p className="text-slate-600">Proyek end-to-end yang dibangun dengan ketelitian.</p>
    </div>

    {/* Grid Proyek */}
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {mockProjects.map((project, index) => {
        // Kita pecah string "technologies" dari mock data menjadi array
        const techList = project.technologies ? project.technologies.split(', ') : [];
        
        return (
            <article key={project.id} data-aos="fade-up" data-aos-delay={(index % 6) * 70} className={`group relative flex flex-col overflow-hidden rounded-[2rem] ${theme.glassCard}`}>
                
                {/* Watermark Icon Latar Belakang */}
                <FaCode className="absolute right-4 top-4 text-5xl text-slate-200/50 drop-shadow-sm z-10" />
                
                {/* Gambar Proyek (Diambil dari folder public) */}
                {/* Tambahkan fallback onError jika gambar belum kamu masukkan ke folder public */}
                <img 
                    src={`/${project.image}`} 
                    alt={project.title} 
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-105 bg-slate-100" 
                    onError={(e) => { e.target.src = 'https://placehold.co/600x400/e2e8f0/475569?text=Preview+Belum+Tersedia' }}
                />
                
                <div className="relative z-20 flex flex-col p-6 flex-grow bg-white/40 backdrop-blur-md border-t border-white/50">
                    <h3 className="text-xl font-bold text-slate-800 transition group-hover:text-indigo-600">
                        {project.title}
                    </h3>
                    <p className="mt-3 line-clamp-3 text-sm text-slate-600">
                        {project.description}
                    </p>
                    
                    {/* Badges Teknologi */}
                    <div className="mt-4 flex flex-wrap gap-2">
                        {techList.map((tech, idx) => (
                            <span key={idx} className={`inline-flex items-center gap-1 rounded-md border px-2.5 py-1 text-[11px] font-bold ${theme.badge}`}>
                                {tech}
                            </span>
                        ))}
                    </div>
                    
                    {/* Tombol Aksi */}
                    <div className="mt-6 flex gap-2 justify-end mt-auto pt-4">
                        {project.link !== '#' ? (
                            <a 
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold ${theme.button}`}
                            >
                                <FaExternalLinkAlt /> GitHub
                            </a>
                        ) : (
                            <span className="inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold text-slate-400 bg-slate-100/50 cursor-not-allowed">
                                <FaLock className="text-[10px]" /> Internal
                            </span>
                        )}
                    </div>
                </div>
            </article>
        );
    })}
</div>
</section>
                {/* ── Contact Section ── */}
                <section id="contact" data-aos="fade-up" className="scroll-mt-32 pb-8">
                    <div className={`relative overflow-hidden rounded-[2.5rem] p-8 md:p-12 ${theme.glassSurface}`}>
                        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-indigo-400/20 blur-3xl"></div>
                        <div className="relative z-10 text-center md:text-left">
                            <p className={`text-xs font-bold tracking-[0.2em] uppercase ${theme.primary}`}>Interactive Demo</p>
                            <h2 className="mt-3 text-3xl font-black text-slate-800 md:text-4xl">Coba Sistem CMS Saya</h2>
                            <div className="mt-5 flex flex-col md:flex-row md:items-center gap-4 text-sm text-slate-700">
                                <span className="rounded-xl border border-white/60 bg-white/40 px-4 py-2 shadow-sm"><span className="font-semibold">Email:</span> demo@thaha.com</span>
                                <span className="rounded-xl border border-white/60 bg-white/40 px-4 py-2 shadow-sm"><span className="font-semibold">Pass:</span> password123</span>
                            </div>
                            <button onClick={() => navigate('/login')} className={`mt-8 inline-flex items-center rounded-2xl px-8 py-4 text-sm font-bold ${theme.buttonSolid}`}>
                                Masuk ke Dashboard Admin
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="border-t border-white/40 bg-white/20 backdrop-blur-md py-8">
                <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between px-6 text-sm font-medium text-slate-600 md:flex-row md:px-10">
                    <p>© {new Date().getFullYear()} Thaha Wafiq. All rights reserved.</p>
                    <p>Contact: thahawafiq@email.com</p>
                </div>
            </footer>

            {showScrollTop && (
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={`fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full ${theme.buttonSolid} shadow-lg`} aria-label="Scroll atas">
                    <FaRocket className="text-xl" />
                </button>
            )}
        </div>
    );
}

export default Home;