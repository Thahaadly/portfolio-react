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
                className={`flex items-center bg-[#ffffff] dark:bg-[#17171c] border border-[#e5e7eb] dark:border-[#212121] shadow-2xl rounded-full transition-all duration-500 overflow-hidden ${
                    isExpanded ? 'w-[320px] px-4 py-3' : 'w-[160px] px-2 py-2 cursor-pointer hover:-translate-y-1'
                }`}
                onClick={() => !isExpanded && setIsExpanded(true)}
            >
                {!isExpanded ? (
                    <div className="flex w-full items-center justify-between px-2 gap-2">
                        <div className="flex flex-col gap-0.5">
                            <div className="h-1.5 w-6 bg-[#17171c] dark:bg-[#ffffff] rounded-full animate-pulse"></div>
                            <div className="h-1.5 w-4 bg-[#616161] dark:bg-[#d9d9dd] rounded-full animate-pulse delay-75"></div>
                        </div>
                        <span className="text-sm font-bold text-[#17171c] dark:text-[#ffffff]">
                            Navigate
                        </span>
                        <div className="flex h-6 w-6 rounded-full bg-[#f3f4f6] dark:bg-[#212121] items-center justify-center">
                            {(() => {
                                const activeItem = navItems.find(i => i.id === activePage);
                                const Icon = activeItem ? activeItem.icon : FaHome;
                                return <Icon className="text-xs text-[#17171c] dark:text-[#ffffff]" />;
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
                                    ? 'bg-[#17171c] dark:bg-[#ffffff] text-[#ffffff] dark:text-[#17171c]' 
                                    : 'text-[#616161] dark:text-[#d9d9dd] hover:bg-[#f3f4f6] dark:hover:bg-[#212121] hover:text-[#17171c] dark:hover:text-[#ffffff]'
                                }`}
                                aria-label={item.label}
                                title={item.label}
                            >
                                <item.icon className="text-lg" />
                                {activePage === item.id && (
                                    <span className={`absolute -bottom-1 w-1.5 h-1.5 rounded-full ${isDarkMode ? 'bg-[#17171c]' : 'bg-[#ffffff]'}`}></span>
                                )}
                            </button>
                        ))}
                        
                        {/* Dark mode toggle removed as requested */}
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
