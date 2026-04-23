import React from 'react';
import heroPhoto from '../assets/fix.jpeg';

export default function HangingIDCard() {
    return (
        <div className="relative flex justify-center w-full h-[400px]">
            <style>{`
                @keyframes swing {
                    0%   { transform: rotate(4deg); }
                    50%  { transform: rotate(-4deg); }
                    100% { transform: rotate(4deg); }
                }
                .animate-swing {
                    animation: swing 5s ease-in-out infinite;
                    transform-origin: top center;
                }
            `}</style>
            <div className="animate-swing absolute -top-10 flex flex-col items-center">
                <div className="w-1.5 h-32 bg-gradient-to-b from-indigo-500/20 to-white/60 rounded-t-full shadow-sm"></div>
                <div className="relative w-56 bg-white/40 backdrop-blur-xl border border-white/60 rounded-2xl p-4 shadow-[0_15px_35px_rgba(31,38,135,0.1)] flex flex-col items-center gap-3">
                    <div className="w-10 h-2 border-2 border-white/60 bg-white/20 rounded-full mb-1"></div>
                    <div className="relative w-full h-48 rounded-xl overflow-hidden border-2 border-white/80 shadow-inner">
                        <img src={heroPhoto} alt="Thaha Wafiq" className="w-full h-full object-cover object-top" />
                    </div>
                    <div className="text-center w-full mt-2">
                        <h3 className="font-black text-slate-800 text-lg tracking-tight">THAHA WAFIQ</h3>
                        <p className="text-[10px] text-indigo-600 font-bold tracking-[0.2em] uppercase mt-1">Web Developer</p>
                    </div>
                    <div className="w-full h-6 mt-2 opacity-30 bg-[repeating-linear-gradient(90deg,#1e293b_0px,#1e293b_2px,transparent_2px,transparent_4px,transparent_5px,#1e293b_5px,#1e293b_8px)]"></div>
                </div>
            </div>
        </div>
    );
}