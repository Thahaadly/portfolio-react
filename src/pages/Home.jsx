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
        <div className="relative flex flex-col h-screen overflow-hidden font-sans text-[#212121] dark:text-[#ffffff] transition-colors duration-300">
            {/* Background Canvas */}
            <div className="fixed inset-0 -z-10 bg-[#ffffff] dark:bg-[#17171c] transition-colors duration-300">
                {/* Clean canvas background per Cohere guidelines. No ambient glows. */}
            </div>

            <ControlAssistant 
                activePage={activePage} 
                setActivePage={setActivePage} 
                isDarkMode={isDarkMode} 
                toggleDarkMode={toggleDarkMode} 
            />

            <main className={`relative mx-auto flex flex-1 w-full max-w-6xl flex-col px-6 pb-28 md:px-10 overflow-y-auto custom-scrollbar ${activePage === 'home' ? 'pt-12' : 'pt-4 md:pt-6'}`}>
                {activePage === 'home' && <HeroSection setActivePage={setActivePage} />}
                {activePage === 'about' && <AboutSection isDarkMode={isDarkMode} />}
                {activePage === 'portfolio' && <PortfolioSection />}
                {activePage === 'contact' && <ContactSection />}
            </main>
        </div>
    );
}