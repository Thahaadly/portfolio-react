import { FaBriefcase } from 'react-icons/fa';
import { glassTheme as theme } from '../utils/theme';
import hacktiv8Logo from '../assets/hacktiv8.png';
import bnspLogo from '../assets/bnsp.png';
import ulmLogo from '../assets/ulm.png';

export default function Timeline() {
    const experiences = [
        {
            year: 'Lulus',
            title: 'S1 Ilmu Komputer',
            subtitle: 'Universitas Lambung Mangkurat (ULM)',
            description: 'Lulusan dengan pemahaman kuat di bidang pengembangan perangkat lunak. Menyelesaikan tugas akhir berfokus pada Machine Learning (K-Means Clustering) untuk analisis data performa olahraga.',
            icon: <img src={ulmLogo} alt="ULM Logo" className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal dark:bg-white rounded-2xl p-1" />,
            color: 'indigo'
        },
        {
            year: 'Agt - Des 2023',
            title: 'Studi Independen React & React Native',
            subtitle: 'PT. Hacktivate Teknologi Indonesia (MSIB 5)',
            description: 'Lulus dengan skor 90/100. Membangun 4 proyek aplikasi (E-Commerce, Portal Berita, Web Movie, Mobile Hotel) secara end-to-end dengan implementasi REST API, arsitektur component-based, dan React Hooks.',
            icon: <img src={hacktiv8Logo} alt="Hacktiv8 Logo" className="w-full h-full object-cover rounded-2xl" />,
            color: 'emerald'
        },
        {
            year: '2025 - 2028',
            title: 'Sertifikasi Junior Office Operator',
            subtitle: 'BNSP',
            description: 'Sertifikasi kompetensi nasional yang memvalidasi keahlian praktis dalam mengoperasikan perangkat lunak Microsoft Office (Word, Excel, PowerPoint) untuk administrasi dan pengolahan data.',
            icon: <img src={bnspLogo} alt="BNSP Logo" className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal dark:bg-white rounded-2xl" />,
            color: 'rose'
        }
    ];

    // Helper map for colors
    const colorMap = {
        indigo: { bg: 'bg-indigo-50 dark:bg-indigo-900/30', border: 'border-indigo-200 dark:border-indigo-800', text: 'text-indigo-600 dark:text-indigo-400', badge: 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300' },
        emerald: { bg: 'bg-emerald-50 dark:bg-emerald-900/30', border: 'border-emerald-200 dark:border-emerald-800', text: 'text-emerald-600 dark:text-emerald-400', badge: 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300' },
        rose: { bg: 'bg-rose-50 dark:bg-rose-900/30', border: 'border-rose-200 dark:border-rose-800', text: 'text-rose-600 dark:text-rose-400', badge: 'bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300' }
    };

    return (
        <div className="w-full flex flex-col pt-2">
            {/* Header Experience */}
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="h-10 w-10 md:h-14 md:w-14 rounded-2xl bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 flex items-center justify-center shadow-inner shrink-0">
                    <FaBriefcase className="text-xl md:text-3xl text-indigo-500" />
                </div>
                <div>
                    <h3 className="text-lg md:text-2xl font-bold text-slate-800 dark:text-slate-100">Experience & Education</h3>
                    <p className="text-[10px] md:text-sm text-slate-500">My academic background and professional certifications</p>
                </div>
            </div>
            
            {/* Grid Layout (No Scroll) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5 w-full">
                {experiences.map((exp, index) => {
                    const c = colorMap[exp.color];
                    return (
                        <div key={index} className={`rounded-[2rem] p-4 md:p-6 border flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${theme.glassCard} bg-white/40 dark:bg-slate-800/40 relative overflow-hidden group`} data-aos="fade-up" data-aos-delay={index * 100}>
                            {/* Background Glow */}
                            <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none opacity-20 ${c.bg}`}></div>
                            
                            {/* Card Header (Icon & Year) */}
                            <div className="flex justify-between items-start mb-4 relative z-10">
                                <div className={`flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-2xl border border-white/60 dark:border-slate-700 ${c.bg} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                                    {exp.icon}
                                </div>
                                <span className={`inline-block px-2 md:px-3 py-1 text-[9px] md:text-[10px] font-bold uppercase tracking-wider rounded-full ${c.badge}`}>
                                    {exp.year}
                                </span>
                            </div>
                            
                            {/* Card Body */}
                            <div className="relative z-10 flex flex-col flex-grow">
                                <h4 className="text-sm md:text-base font-bold text-slate-800 dark:text-slate-100 mb-1 leading-tight">{exp.title}</h4>
                                <p className={`text-[10px] md:text-xs font-bold mb-3 ${c.text}`}>{exp.subtitle}</p>
                                <div className="text-[10px] md:text-xs text-slate-600 dark:text-slate-300 leading-relaxed mt-auto">{exp.description}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
