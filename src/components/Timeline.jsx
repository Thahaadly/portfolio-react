import { FaGraduationCap, FaCertificate } from 'react-icons/fa';
import { glassTheme as theme } from '../utils/theme';

export default function Timeline() {
    const experiences = [
        {
            year: 'Lulus',
            title: 'S1 Ilmu Komputer',
            subtitle: 'Universitas Lambung Mangkurat (ULM)',
            description: 'Fokus pada pengembangan perangkat lunak, algoritma, dan data science (Machine Learning, NLP). Menggabungkan pemikiran analitis dengan pengembangan sistem fungsional.',
            icon: <FaGraduationCap className="text-indigo-500" />
        },
        {
            year: '8 Desember 2024',
            title: 'Sertifikasi React and React Native Basics',
            subtitle: 'Hacktiv8',
            description: 'Mengikuti program intensif untuk pengembangan frontend modern dan mobile development menggunakan ekosistem React.',
            icon: <FaCertificate className="text-emerald-500" />
        },
        {
            year: '2025 - 2028',
            title: 'Sertifikasi Junior Office Operator',
            subtitle: 'BNSP',
            description: 'Sertifikasi kompetensi pengoperasian perangkat lunak dan manajemen data dasar yang diakui secara nasional.',
            icon: <FaCertificate className="text-rose-500" />
        }
    ];

    return (
        <div className={`rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden ${theme.glassSurface}`}>
            <p className={`mb-4 text-sm font-bold tracking-[0.2em] uppercase ${theme.primary}`}>Perjalanan</p>
            <h3 className="font-black text-slate-800 dark:text-slate-100 text-2xl md:text-3xl mb-10">Pendidikan & Sertifikasi</h3>
            
            <div className="relative border-l-2 border-indigo-200/50 dark:border-indigo-800/50 ml-4 md:ml-6 space-y-8">
                {experiences.map((exp, index) => (
                    <div key={index} className="relative pl-8 md:pl-10" data-aos="fade-up" data-aos-delay={index * 100}>
                        <div className={`absolute -left-6 md:-left-6 top-0 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white dark:border-slate-900 bg-indigo-50 dark:bg-indigo-900 shadow-md transition-transform hover:scale-110`}>
                            <span className="text-xl">{exp.icon}</span>
                        </div>
                        <div className={`rounded-2xl p-6 border ${theme.glassCard} bg-white/40 dark:bg-slate-800/40 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md`}>
                            <span className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider rounded-full mb-3">{exp.year}</span>
                            <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100">{exp.title}</h4>
                            <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">{exp.subtitle}</p>
                            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-indigo-300/20 blur-[80px] -z-10 translate-x-1/3 translate-y-1/3"></div>
        </div>
    );
}
