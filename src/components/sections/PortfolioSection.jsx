import { useState } from 'react';
import { createPortal } from 'react-dom';
import { FaGithub, FaLock, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import { glassTheme as theme } from '../../utils/theme';
import { mockProjects } from '../../data';

export default function PortfolioSection() {
    const [activeFilter, setActiveFilter] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);
    const filters = ['All', 'Fullstack', 'Frontend', 'Mobile'];

    const filteredProjects = mockProjects.filter(project => {
        if (activeFilter === 'All') return true;
        const allText = `${project.tech_stack || project.technologies || ''} ${project.title || ''} ${project.short_description || ''} ${project.full_description || ''}`.toLowerCase();
        
        switch(activeFilter) {
            case 'Mobile': return allText.includes('react native') || allText.includes('mobile');
            case 'Frontend': return allText.includes('react js') && !allText.includes('laravel') && !allText.includes('codeigniter');
            case 'Fullstack': return (allText.includes('laravel') || allText.includes('codeigniter')) || allText.includes('fullstack');
            default: return true;
        }
    });

    return (
        <section id="portfolio" className="space-y-8 w-full animate-fade-in">
            <div className="flex flex-col gap-2">
                <h2 className="text-3xl font-black text-slate-800 dark:text-slate-100 md:text-4xl drop-shadow-sm">Karya & Eksplorasi</h2>
                <p className="text-slate-600 dark:text-slate-300">Proyek end-to-end yang dibangun dengan ketelitian.</p>
            </div>

            <div className="flex flex-wrap gap-2 md:gap-3">
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

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 pb-8">
                {filteredProjects.map((project, index) => {
                    const techList = project.tech_stack ? project.tech_stack.split(', ') : (project.technologies ? project.technologies.split(', ') : []);
                    const imagePath = project.image ? (project.image.startsWith('http') ? project.image : `/${project.image}`) : 'https://placehold.co/600x400/e2e8f0/475569?text=No+Image';
                    return (
                        <article 
                            key={project.id} 
                            onClick={() => setSelectedProject(project)}
                            className={`group relative flex flex-col rounded-[2rem] cursor-pointer ${theme.glassCard} hover:-translate-y-2 transition-all duration-300`}
                        >
                            <div className="flex flex-col h-full overflow-hidden rounded-[2rem]">
                                <FaCode className="absolute right-4 top-4 text-5xl text-slate-200/50 drop-shadow-sm z-10 pointer-events-none" />
                                <img 
                                    src={imagePath} 
                                    alt={project.title} 
                                    className="h-56 w-full object-cover object-top transition duration-700 group-hover:scale-105 bg-slate-100 dark:bg-slate-800" 
                                    onError={(e) => { e.target.src = 'https://placehold.co/600x400/e2e8f0/475569?text=Preview+Belum+Tersedia' }} 
                                />
                                
                                {/* Mini Phone Pop-up for Mobile Apps */}
                                {project.isMobile && (
                                    <div className="absolute -top-16 right-4 w-32 h-[16rem] bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 transition-all duration-500 pointer-events-none z-50 border-[6px] border-slate-800 rotate-12 group-hover:rotate-0 hidden md:block">
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-4 bg-slate-800 rounded-b-xl z-10"></div>
                                        <img src={imagePath} alt="App Preview" className="w-full h-full object-cover object-top" />
                                    </div>
                                )}

                                <div className="relative z-20 flex flex-col p-6 flex-grow bg-white/40 backdrop-blur-md border-t border-white/50">
                                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 transition group-hover:text-indigo-600">{project.title}</h3>
                                    <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{project.short_description}</p>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {techList.map((tech, idx) => (<span key={idx} className={`inline-flex items-center gap-1 rounded-md border px-2.5 py-1 text-[11px] font-bold ${theme.badge}`}>{tech}</span>))}
                                    </div>
                                    <div className="mt-6 flex flex-wrap gap-2 justify-end mt-auto pt-4">
                                        {project.link_github || project.link !== '#' ? (
                                            <a href={project.link_github || project.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold ${theme.button}`}>
                                                <FaGithub className="text-sm" /> GitHub
                                            </a>
                                        ) : (
                                            <span className="inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold text-slate-400 bg-slate-100/50 cursor-not-allowed">
                                                <FaLock className="text-[10px]" /> Internal
                                            </span>
                                        )}
                                        {(project.link_demo || project.demo) && (
                                            <a href={project.link_demo || project.demo} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold ${theme.buttonSolid}`}>
                                                <FaExternalLinkAlt className="text-[10px]" /> Live Web
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>

            {/* Modal Detail Project using React Portal */}
            {selectedProject && createPortal(
                <div 
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in" 
                    onClick={() => setSelectedProject(null)}
                >
                    <div 
                        className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 md:p-8 ${theme.glassCard} bg-white/90 dark:bg-slate-900/90 shadow-2xl flex flex-col md:flex-row gap-6 md:gap-8`} 
                        onClick={e => e.stopPropagation()}
                    >
                        <button 
                            onClick={() => setSelectedProject(null)} 
                            className="absolute top-4 right-4 p-2 rounded-full bg-slate-200/50 dark:bg-slate-700/50 hover:bg-red-500 hover:text-white transition-colors z-10"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>
                        
                        {/* Modal Image (Left Column on Desktop) */}
                        <div className="w-full md:w-5/12 flex-shrink-0">
                            <img 
                                src={selectedProject.image ? (selectedProject.image.startsWith('http') ? selectedProject.image : `/${selectedProject.image}`) : 'https://placehold.co/600x400/e2e8f0/475569?text=No+Image'} 
                                alt={selectedProject.title} 
                                className="w-full h-auto max-h-48 md:max-h-full object-cover object-top rounded-2xl shadow-sm bg-slate-100 dark:bg-slate-800 border-2 border-white/50" 
                            />
                        </div>
                        
                        {/* Modal Content (Right Column on Desktop) */}
                        <div className="w-full md:w-7/12 flex flex-col pt-2">
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-3 pr-10">{selectedProject.title}</h3>
                            
                            <div className="flex flex-wrap gap-2 mb-6">
                                {(selectedProject.tech_stack ? selectedProject.tech_stack.split(', ') : (selectedProject.technologies ? selectedProject.technologies.split(', ') : [])).map((tech, idx) => (
                                    <span key={idx} className={`inline-flex items-center gap-1 rounded-md border px-2.5 py-1 text-[11px] font-bold ${theme.badge}`}>{tech}</span>
                                ))}
                            </div>

                            <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 mb-8 leading-relaxed whitespace-pre-wrap flex-grow">
                                {selectedProject.full_description}
                            </p>

                            <div className="flex flex-wrap gap-3 mt-auto">
                                {selectedProject.link_github || (selectedProject.link && selectedProject.link !== '#') ? (
                                    <a href={selectedProject.link_github || selectedProject.link} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold ${theme.button} flex-1 md:flex-none`}>
                                        <FaGithub className="text-base" /> GitHub
                                    </a>
                                ) : null}
                                
                                {(selectedProject.link_demo || selectedProject.demo) && (
                                    <a href={selectedProject.link_demo || selectedProject.demo} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold ${theme.buttonSolid} flex-1 md:flex-none`}>
                                        <FaExternalLinkAlt className="text-base" /> Live Web
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </section>
    );
}
