import { useState } from 'react';
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaMoon, FaSun } from 'react-icons/fa';

export default function ControlAssistant({ activePage, setActivePage, isDarkMode, toggleDarkMode }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const navItems = [
        { id: 'home', icon: FaHome, label: 'Home' },
        { id: 'about', icon: FaUser, label: 'About' },
        { id: 'portfolio', icon: FaBriefcase, label: 'Portfolio' },
        { id: 'contact', icon: FaEnvelope, label: 'Contact' }
    ];

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]">
            <div 
                className={`flex items-center bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-white/40 dark:border-slate-700/50 shadow-2xl rounded-full transition-all duration-500 overflow-hidden ${
                    isExpanded ? 'w-[320px] px-4 py-3' : 'w-[160px] px-2 py-2 cursor-pointer hover:scale-105 hover:bg-white dark:hover:bg-slate-800'
                }`}
                onClick={() => !isExpanded && setIsExpanded(true)}
            >
                {!isExpanded ? (
                    <div className="flex w-full items-center justify-between px-2 gap-2">
                        <div className="flex flex-col gap-0.5">
                            <div className="h-1.5 w-6 bg-indigo-500 rounded-full animate-pulse"></div>
                            <div className="h-1.5 w-4 bg-indigo-300 rounded-full animate-pulse delay-75"></div>
                        </div>
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                            Navigate
                        </span>
                        <div className="flex h-6 w-6 rounded-full bg-indigo-100 dark:bg-indigo-900/50 items-center justify-center">
                            {(() => {
                                const activeItem = navItems.find(i => i.id === activePage);
                                const Icon = activeItem ? activeItem.icon : FaHome;
                                return <Icon className="text-xs text-indigo-600 dark:text-indigo-400" />;
                            })()}
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center justify-between w-full">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setActivePage(item.id);
                                    setIsExpanded(false);
                                }}
                                className={`relative flex items-center justify-center h-10 w-10 rounded-full transition-all duration-300 ${
                                    activePage === item.id 
                                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200 dark:shadow-none' 
                                    : 'text-slate-500 dark:text-slate-400 hover:bg-indigo-50 dark:hover:bg-slate-800 hover:text-indigo-500'
                                }`}
                                aria-label={item.label}
                                title={item.label}
                            >
                                <item.icon className="text-lg" />
                                {activePage === item.id && (
                                    <span className="absolute -bottom-1 w-1.5 h-1.5 bg-white rounded-full"></span>
                                )}
                            </button>
                        ))}
                        
                        <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-1"></div>
                        
                        <button 
                            onClick={(e) => {
                                e.stopPropagation();
                                toggleDarkMode();
                            }} 
                            className="flex items-center justify-center h-10 w-10 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                            aria-label="Toggle Dark Mode"
                        >
                            {isDarkMode ? <FaSun className="text-lg text-amber-400" /> : <FaMoon className="text-lg text-indigo-500" />}
                        </button>
                    </div>
                )}
            </div>
            
            {isExpanded && (
                <div 
                    className="fixed inset-0 z-[-1]" 
                    onClick={() => setIsExpanded(false)}
                ></div>
            )}
        </div>
    );
}
