import { FaBriefcase } from 'react-icons/fa';
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
            icon: <img src={ulmLogo} alt="ULM Logo" className="w-full h-full object-contain p-1.5 mix-blend-multiply dark:mix-blend-normal dark:bg-white" />
        },
        {
            year: 'Agt - Des 2023',
            title: 'Studi Independen React',
            subtitle: 'PT. Hacktivate Teknologi Indonesia (MSIB 5)',
            description: 'Lulus dengan skor 90/100. Membangun 4 proyek aplikasi (E-Commerce, Portal Berita, Web Movie, Mobile Hotel) secara end-to-end dengan implementasi REST API, arsitektur component-based, dan React Hooks.',
            icon: <img src={hacktiv8Logo} alt="Hacktiv8 Logo" className="w-full h-full object-cover" />
        },
        {
            year: '2025 - 2028',
            title: 'Sertifikasi BNSP',
            subtitle: 'Junior Office Operator',
            description: 'Sertifikasi kompetensi nasional yang memvalidasi keahlian praktis dalam mengoperasikan perangkat lunak Microsoft Office (Word, Excel, PowerPoint) untuk administrasi dan pengolahan data.',
            icon: <img src={bnspLogo} alt="BNSP Logo" className="w-full h-full object-contain p-1 mix-blend-multiply dark:mix-blend-normal dark:bg-white" />
        }
    ];

    return (
        <div className="w-full flex flex-col pt-2">
            {/* Header Experience */}
            <div className="flex items-center gap-4 mb-8 border-b border-[#e5e7eb] dark:border-[#262626] pb-4">
                <div className="h-12 w-12 rounded-[14px] bg-[#17171c] dark:bg-[#ffffff] flex items-center justify-center shrink-0">
                    <FaBriefcase className="text-xl text-[#ffffff] dark:text-[#17171c]" />
                </div>
                <div>
                    <h3 className="text-[24px] font-bold text-[#17171c] dark:text-[#ffffff] tracking-tight">Experience & Education</h3>
                    <p className="text-[14px] text-[#616161] dark:text-[#d9d9dd]">My academic background and professional certifications</p>
                </div>
            </div>
            
            {/* Grid Layout (Editorial Cards) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
                {experiences.map((exp, index) => {
                    return (
                        <div key={index} className="rounded-[22px] p-6 border border-transparent flex flex-col h-full bg-gradient-to-br from-[#182c3c] via-[#4d6978] to-[#d9c8b3] shadow-lg transition-transform duration-300 hover:-translate-y-1 relative group overflow-hidden" data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="absolute inset-0 bg-[#000000] opacity-[0.05] mix-blend-multiply pointer-events-none"></div>
                            
                            {/* Card Header (Icon & Year Pill) */}
                            <div className="flex justify-between items-start mb-6 relative z-10">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ffffff] border border-[#ffffff]/20 shrink-0 overflow-hidden">
                                    {exp.icon}
                                </div>
                                <span className="inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest rounded-md border border-[#ffffff]/20 text-[#e5e5e5] bg-[#ffffff]/10">
                                    {exp.year}
                                </span>
                            </div>
                            
                            {/* Card Body */}
                            <div className="flex flex-col flex-grow border-t border-[#ffffff]/20 pt-5 relative z-10">
                                <h4 className="text-[18px] font-medium text-[#ffffff] mb-1 tracking-tight leading-tight">{exp.title}</h4>
                                <p className="text-[13px] font-bold mb-4 text-[#e5e5e5]">{exp.subtitle}</p>
                                <div className="text-[13px] text-[#f3f4f6] leading-relaxed mt-auto">{exp.description}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

