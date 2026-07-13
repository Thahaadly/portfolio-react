import { FaEnvelope, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { glassTheme as theme } from '../../utils/theme';
import Footer from '../Footer';

export default function ContactSection() {
    return (
        <section id="contact" className="space-y-8 pb-10 w-full flex flex-col h-full animate-fade-in">
            <div className="flex flex-col gap-2 text-center md:text-left">
                <h2 className="text-3xl font-black text-slate-800 dark:text-slate-100 md:text-4xl drop-shadow-sm">Terkoneksi Bersama</h2>
                <p className="text-slate-600 dark:text-slate-300">Mari berdiskusi tentang peluang kolaborasi dan ide menarik.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-1">
                {/* Form Kontak */}
                <div className={`p-8 rounded-[2.5rem] ${theme.glassSurface} order-2 lg:order-1`}>
                    <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert('Pesan berhasil dikirim!'); }}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Nama Lengkap</label>
                            <input type="text" id="name" required className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:text-white" placeholder="Masukkan nama Anda" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Email</label>
                            <input type="email" id="email" required className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:text-white" placeholder="nama@email.com" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Pesan</label>
                            <textarea id="message" required rows="4" className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:text-white" placeholder="Tuliskan pesan Anda..."></textarea>
                        </div>
                        <button type="submit" className={`w-full rounded-xl py-3.5 text-sm font-bold ${theme.buttonSolid}`}>Kirim Pesan</button>
                    </form>
                </div>
                
                {/* Kartu Kontak */}
                <div className="flex flex-col gap-5 order-1 lg:order-2">
                    <a href="mailto:thahaadly6@gmail.com" aria-label="Kirim Email" className={`flex items-center gap-5 p-6 rounded-[2rem] group hover:-translate-y-1 transition-all duration-300 ${theme.glassCard}`}>
                        <div className="h-14 w-14 rounded-full bg-rose-50 dark:bg-rose-900/30 text-rose-500 dark:text-rose-400 flex shrink-0 items-center justify-center border border-rose-100 dark:border-rose-800/50 group-hover:scale-110 transition-transform"><FaEnvelope className="text-2xl" /></div>
                        <div>
                            <h3 className="font-bold text-slate-800 dark:text-slate-100 text-lg">Email</h3>
                            <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 group-hover:underline">thahaadly6@gmail.com</span>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/thahaa/" target="_blank" rel="noopener noreferrer" aria-label="Kunjungi LinkedIn" className={`flex items-center gap-5 p-6 rounded-[2rem] group hover:-translate-y-1 transition-all duration-300 ${theme.glassCard}`}>
                        <div className="h-14 w-14 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex shrink-0 items-center justify-center border border-blue-100 dark:border-blue-800/50 group-hover:scale-110 transition-transform"><FaLinkedin className="text-2xl" /></div>
                        <div>
                            <h3 className="font-bold text-slate-800 dark:text-slate-100 text-lg">LinkedIn</h3>
                            <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 group-hover:underline">Thaha Wafiq Adly</span>
                        </div>
                    </a>
                    <a href="https://wa.me/6289618687992" target="_blank" rel="noopener noreferrer" aria-label="Hubungi via WhatsApp" className={`flex items-center gap-5 p-6 rounded-[2rem] group hover:-translate-y-1 transition-all duration-300 ${theme.glassCard}`}>
                        <div className="h-14 w-14 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-500 dark:text-emerald-400 flex shrink-0 items-center justify-center border border-emerald-100 dark:border-emerald-800/50 group-hover:scale-110 transition-transform"><FaWhatsapp className="text-2xl" /></div>
                        <div>
                            <h3 className="font-bold text-slate-800 dark:text-slate-100 text-lg">WhatsApp</h3>
                            <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 group-hover:underline">Chat via WA</span>
                        </div>
                    </a>
                </div>
            </div>
            <div className="mt-8">
                <Footer />
            </div>
        </section>
    );
}
