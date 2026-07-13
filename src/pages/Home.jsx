import { useEffect, useState } from 'react';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import ContactSection from '../components/sections/ContactSection';
import ControlAssistant from '../components/ControlAssistant';

export default function Home() {
    const [activePage, setActivePage] = useState('home');
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

    return (
        <div className="relative flex flex-col h-screen overflow-hidden font-sans text-slate-800 dark:text-slate-100 transition-colors duration-300">
            {/* Background Blur */}
            <div className="fixed inset-0 -z-10 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
                <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-indigo-300/40 dark:bg-indigo-900/40 blur-[100px] mix-blend-multiply dark:mix-blend-screen"></div>
                <div className="absolute top-[20%] right-[-5%] h-[400px] w-[400px] rounded-full bg-cyan-200/50 dark:bg-cyan-900/30 blur-[100px] mix-blend-multiply dark:mix-blend-screen"></div>
                <div className="absolute bottom-[-10%] left-[20%] h-[600px] w-[600px] rounded-full bg-purple-200/40 dark:bg-purple-900/30 blur-[120px] mix-blend-multiply dark:mix-blend-screen"></div>
            </div>

            <ControlAssistant 
                activePage={activePage} 
                setActivePage={setActivePage} 
                isDarkMode={isDarkMode} 
                toggleDarkMode={toggleDarkMode} 
            />

            <main className="relative mx-auto flex flex-1 w-full max-w-6xl flex-col px-6 pt-12 pb-28 md:px-10 overflow-y-auto custom-scrollbar">
                {activePage === 'home' && <HeroSection setActivePage={setActivePage} />}
                {activePage === 'about' && <AboutSection isDarkMode={isDarkMode} />}
                {activePage === 'portfolio' && <PortfolioSection />}
                {activePage === 'contact' && <ContactSection />}
            </main>
        </div>
    );
}