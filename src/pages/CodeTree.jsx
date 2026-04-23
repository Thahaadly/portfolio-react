import React from 'react';
import { FaBrain, FaDatabase, FaReact, FaLaravel, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiCodeigniter, SiJavascript } from 'react-icons/si';

const sizeMap    = { lg: { bubble: 56, icon: 28 }, md: { bubble: 48, icon: 22 }, sm: { bubble: 40, icon: 18 } };
const shadowMap  = { emerald:'rgba(16,185,129,0.2)', rose:'rgba(244,63,94,0.2)', teal:'rgba(20,184,166,0.2)', cyan:'rgba(6,182,212,0.2)', sky:'rgba(14,165,233,0.2)', amber:'rgba(245,158,11,0.2)', yellow:'rgba(234,179,8,0.2)' };
const borderMap  = { emerald:'#d1fae5', rose:'#ffe4e6', teal:'#ccfbf1', cyan:'#cffafe', sky:'#e0f2fe', amber:'#fef3c7', yellow:'#fef9c3' };

function TechNode({ icon, label, color = 'indigo', position = {}, translate = '', size = 'md', delay = 0 }) {
    const s = sizeMap[size] ?? sizeMap.md;
    const floatStyle = { position: 'absolute', ...position, animation: `techFloat 4s ease-in-out infinite`, animationDelay: `${delay}ms` };
    
    return (
        <div className={`${translate} group cursor-pointer`} style={floatStyle}>
            <div
                style={{
                    width: s.bubble, height: s.bubble, borderRadius: '50%',
                    background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)',
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
            }} className="group-hover:opacity-100">
                {label}
            </span>
        </div>
    );
}

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

export default function CodeTree() {
    return (
        <div className="relative w-full h-[480px] flex flex-col items-center justify-end">
            <style>{`
                @keyframes techFloat { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
                @keyframes codeTextDrift { 0%, 100% { opacity: 0.6; transform: translateY(0); } 50% { opacity: 0.9; transform: translateY(-6px); } }
                @keyframes rootPulse { 0% { transform: scale(1); opacity: 0.5; } 100% { transform: scale(1.55); opacity: 0; } }
            `}</style>

            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                {FLOAT_TEXTS.map((item, i) => (
                    <span key={i} className="absolute font-mono select-none" style={{
                        fontSize: 11, fontWeight: 800, color: item.color, opacity: 0.7,
                        top: item.top, left: item.left, right: item.right,
                        animation: `codeTextDrift ${4 + (i % 4)}s ease-in-out infinite`,
                        animationDelay: `${i * 0.35}s`, letterSpacing: '0.02em', textShadow: `0 0 12px ${item.color}55`,
                    }}>
                        {item.text}
                    </span>
                ))}
            </div>

            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 300 480" preserveAspectRatio="xMidYMid meet">
                <defs>
                    <linearGradient id="trunkGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4f46e5" stopOpacity="1"/><stop offset="100%" stopColor="#818cf8" stopOpacity="0.7"/></linearGradient>
                    <linearGradient id="branchGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#6366f1" stopOpacity="1"/><stop offset="100%" stopColor="#a5b4fc" stopOpacity="0.75"/></linearGradient>
                    <linearGradient id="leafGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#818cf8" stopOpacity="0.9"/><stop offset="100%" stopColor="#c7d2fe" stopOpacity="0.55"/></linearGradient>
                </defs>
                <line x1="150" y1="455" x2="150" y2="340" stroke="url(#trunkGrad)" strokeWidth="5" strokeLinecap="round"/>
                <path d="M150,340 Q150,295 150,258" fill="none" stroke="url(#branchGrad)" strokeWidth="3.5" strokeLinecap="round"/>
                <path d="M150,340 Q108,322 72,298" fill="none" stroke="url(#branchGrad)" strokeWidth="3.5" strokeLinecap="round"/>
                <path d="M150,340 Q192,322 228,298" fill="none" stroke="url(#branchGrad)" strokeWidth="3.5" strokeLinecap="round"/>
                <path d="M72,298 Q46,264 38,224"   fill="none" stroke="url(#leafGrad)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="7 4"/>
                <path d="M72,298 Q68,268 66,238"   fill="none" stroke="url(#leafGrad)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="7 4"/>
                <path d="M228,298 Q244,264 250,224" fill="none" stroke="url(#leafGrad)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="7 4"/>
                <path d="M150,258 Q116,234 98,204"  fill="none" stroke="url(#leafGrad)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="7 4"/>
            </svg>

            <div className="absolute inset-0 z-20">
                <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 group cursor-default">
                    <div style={{ position: 'absolute', width: 64, height: 64, borderRadius: '50%', background: 'rgba(99,102,241,0.1)', animation: 'rootPulse 2.5s ease-out infinite' }}/>
                    <div className="relative h-14 w-14 rounded-full bg-gradient-to-br from-indigo-50 to-white flex flex-col items-center justify-center border border-indigo-200 z-10 transition-transform duration-300 group-hover:scale-110" style={{ boxShadow: '0 4px 20px rgba(99,102,241,0.2)' }}>
                        <FaBrain className="text-2xl text-indigo-500 animate-pulse" />
                        <FaDatabase className="text-sm text-indigo-400 -mt-1" />
                    </div>
                    <span className="text-[8px] font-bold text-indigo-500/70 uppercase tracking-[0.2em] z-10 mt-1">Data & Logic</span>
                </div>
                <TechNode icon={<FaReact style={{ fontSize: 28, color: '#10b981', animation: 'spin 6s linear infinite' }} />} label="React JS" color="emerald" position={{ top: '43%', left: '50%', marginLeft: -28 }} size="lg" delay={0} />
                <TechNode icon={<FaLaravel style={{ fontSize: 22, color: '#f43f5e' }} />} label="Laravel" color="rose" position={{ top: '54%', left: '19%' }} size="md" delay={200} />
                <TechNode icon={<SiTailwindcss style={{ fontSize: 22, color: '#0d9488' }} />} label="Tailwind" color="teal" position={{ top: '54%', left: '69%' }} size="md" delay={400} />
                <TechNode icon={<SiMysql style={{ fontSize: 18, color: '#0891b2' }} />} label="MySQL" color="cyan" position={{ top: '64%', left: '7%' }} size="sm" delay={600} />
                <TechNode icon={<SiCodeigniter style={{ fontSize: 18, color: '#3b82f6' }} />} label="CI4" color="sky" position={{ top: '53%', left: '1%' }} size="sm" delay={800} />
                <TechNode icon={<FaPython style={{ fontSize: 18, color: '#d97706' }} />} label="Python" color="amber" position={{ top: '60%', left: '79%' }} size="sm" delay={1000} />
                <TechNode icon={<SiJavascript style={{ fontSize: 18, color: '#ca8a04' }} />} label="JS" color="yellow" position={{ top: '33%', left: '24%' }} size="sm" delay={1200} />
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-indigo-100/30 blur-[60px] -z-10" />
        </div>
    );
}