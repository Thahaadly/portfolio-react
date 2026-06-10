import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer({ scrollToSection }) {
    return (
        <footer className="relative mt-auto w-full border-t border-white/40 dark:border-white/10 bg-white/30 dark:bg-slate-900/30 backdrop-blur-xl pt-12 pb-8 overflow-hidden">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[300px] w-[600px] rounded-full bg-indigo-300/20 dark:bg-indigo-900/20 blur-[100px] -z-10 pointer-events-none"></div>
            
            <div className="mx-auto w-full max-w-6xl px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <h3 className="text-2xl font-black tracking-tight text-slate-800 dark:text-slate-100">THAHA<span className="text-indigo-600 dark:text-indigo-400">.</span></h3>
                </div>

                <div className="flex flex-col items-center md:items-end gap-6">
                    <div className="flex gap-6 text-sm font-semibold text-slate-600 dark:text-slate-300">
                        <button onClick={() => scrollToSection('home')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Home</button>
                        <button onClick={() => scrollToSection('about')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">About</button>
                        <button onClick={() => scrollToSection('portfolio')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Portfolio</button>
                    </div>
                    
                    <div className="flex gap-4">
                        <a href="https://github.com/Thahaadly" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-800 dark:hover:text-slate-100 transition"><FaGithub className="text-xl" /></a>
                        <a href="https://www.linkedin.com/in/thahaa/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition"><FaLinkedin className="text-xl" /></a>
                        <a href="https://www.instagram.com/thaha.aa?igsh=MTNndTV4Z20zcGh2eA%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-pink-600 dark:hover:text-pink-400 transition"><FaInstagram className="text-xl" /></a>
                    </div>
                </div>
            </div>

            <div className="mx-auto w-full max-w-6xl px-6 md:px-10 mt-8">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300/50 dark:via-slate-700/50 to-transparent mb-6"></div>
                <p className="text-center text-xs font-medium text-slate-500 dark:text-slate-400">
                    © {new Date().getFullYear()} Thaha Wafiq Adly. Built with React & Tailwind CSS.
                </p>
            </div>
        </footer>
    );
}