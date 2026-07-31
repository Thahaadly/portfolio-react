import { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { glassTheme as theme } from '../../utils/theme';

export default function ContactSection() {
    const [result, setResult] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResult("Sedang mengirim pesan...");
        
        const formData = new FormData(event.target);
        formData.append("access_key", "8c6e6155-eed0-42f1-9334-ccbc9016354b");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("✅ Pesan berhasil dikirim! Saya akan segera merespons.");
                event.target.reset();
            } else {
                console.log("Error", data);
                setResult("❌ Terjadi kesalahan: " + data.message);
            }
        } catch (error) {
            setResult("❌ Gagal mengirim pesan. Periksa koneksi internet Anda.");
        }
        setIsSubmitting(false);
        
        // Hide success message after 5 seconds
        setTimeout(() => setResult(""), 5000);
    };

    return (
        <section id="contact" className="w-full flex flex-col pb-24 md:pb-32 pt-0 mb-10">
            <div className="w-full max-w-6xl mx-auto px-6 lg:px-4">
                
                {/* Header Monumental */}
                <div className="flex flex-col gap-6 mb-16 text-center md:text-left">
                    <h2 className="text-[56px] md:text-[72px] leading-[0.95] tracking-[-1.5px] font-normal text-[#17171c] dark:text-[#ffffff] drop-shadow-none">
                        Let's Talk.
                    </h2>
                    <p className="text-[18px] md:text-[20px] text-[#616161] dark:text-[#d9d9dd]">Mari berdiskusi tentang peluang kolaborasi.</p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    
                    {/* Form Kontak (Flat UI) */}
                    <div className="p-8 md:p-10 rounded-[22px] bg-[#ffffff] dark:bg-[#17171c] border border-[#e5e7eb] dark:border-[#212121] shadow-sm order-2 lg:order-1">
                        <form className="space-y-6" onSubmit={onSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-[13px] font-bold text-[#616161] dark:text-[#d9d9dd] uppercase tracking-widest mb-2">Nama Lengkap</label>
                                <input type="text" name="name" id="name" required className="w-full rounded-[12px] border border-[#e5e7eb] dark:border-[#212121] bg-[#f9fafb] dark:bg-[#071829] px-4 py-3.5 text-[15px] focus:border-[#17171c] dark:focus:border-[#ffffff] focus:ring-1 focus:ring-[#17171c] dark:focus:ring-[#ffffff] outline-none transition-all" placeholder="Masukkan nama Anda" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-[13px] font-bold text-[#616161] dark:text-[#d9d9dd] uppercase tracking-widest mb-2">Email</label>
                                <input type="email" name="email" id="email" required className="w-full rounded-[12px] border border-[#e5e7eb] dark:border-[#212121] bg-[#f9fafb] dark:bg-[#071829] px-4 py-3.5 text-[15px] focus:border-[#17171c] dark:focus:border-[#ffffff] focus:ring-1 focus:ring-[#17171c] dark:focus:ring-[#ffffff] outline-none transition-all" placeholder="nama@email.com" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-[13px] font-bold text-[#616161] dark:text-[#d9d9dd] uppercase tracking-widest mb-2">Pesan</label>
                                <textarea id="message" name="message" required rows="4" className="w-full rounded-[12px] border border-[#e5e7eb] dark:border-[#212121] bg-[#f9fafb] dark:bg-[#071829] px-4 py-3.5 text-[15px] focus:border-[#17171c] dark:focus:border-[#ffffff] focus:ring-1 focus:ring-[#17171c] dark:focus:ring-[#ffffff] outline-none transition-all resize-none" placeholder="Tuliskan pesan Anda..."></textarea>
                            </div>
                            
                            <button type="submit" disabled={isSubmitting} className={`w-full rounded-[32px] py-4 text-[15px] font-bold flex justify-center items-center gap-2 transition-all mt-4 ${isSubmitting ? 'bg-[#e5e7eb] text-[#616161] cursor-not-allowed' : theme.buttonSolid}`}>
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Memproses...
                                    </>
                                ) : "Kirim Pesan"}
                            </button>
                            
                            {result && (
                                <div className={`p-4 rounded-[12px] text-sm font-bold text-center mt-4 ${result.includes('❌') ? 'bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400 border border-red-200 dark:border-red-900/50' : 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900/50'}`}>
                                    {result}
                                </div>
                            )}
                        </form>
                    </div>
                    
                    {/* Kartu Kontak (Flat Design) */}
                    <div className="flex flex-col gap-6 order-1 lg:order-2">
                        <a href="mailto:thahaadly6@gmail.com" aria-label="Kirim Email" className="flex items-center gap-6 p-8 rounded-[22px] bg-[#ffffff] dark:bg-[#17171c] border border-[#e5e7eb] dark:border-[#212121] hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                            <div className="h-16 w-16 rounded-full bg-[#f1f5ff] dark:bg-[#071829] flex shrink-0 items-center justify-center">
                                <FaEnvelope className="text-2xl text-[#17171c] dark:text-[#ffffff]" />
                            </div>
                            <div>
                                <h3 className="font-bold text-[20px] text-[#17171c] dark:text-[#ffffff] mb-1">Email</h3>
                                <span className="text-[15px] font-semibold text-[#616161] dark:text-[#d9d9dd]">thahaadly6@gmail.com</span>
                            </div>
                        </a>
                        
                        <a href="https://www.linkedin.com/in/thahaa/" target="_blank" rel="noopener noreferrer" aria-label="Kunjungi LinkedIn" className="flex items-center gap-6 p-8 rounded-[22px] bg-[#ffffff] dark:bg-[#17171c] border border-[#e5e7eb] dark:border-[#212121] hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                            <div className="h-16 w-16 rounded-full bg-[#f1f5ff] dark:bg-[#071829] flex shrink-0 items-center justify-center">
                                <FaLinkedin className="text-2xl text-[#17171c] dark:text-[#ffffff]" />
                            </div>
                            <div>
                                <h3 className="font-bold text-[20px] text-[#17171c] dark:text-[#ffffff] mb-1">LinkedIn</h3>
                                <span className="text-[15px] font-semibold text-[#616161] dark:text-[#d9d9dd]">Thaha Wafiq Adly</span>
                            </div>
                        </a>
                        
                        <a href="https://wa.me/6289618687992" target="_blank" rel="noopener noreferrer" aria-label="Hubungi via WhatsApp" className="flex items-center gap-6 p-8 rounded-[22px] bg-[#ffffff] dark:bg-[#17171c] border border-[#e5e7eb] dark:border-[#212121] hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                            <div className="h-16 w-16 rounded-full bg-[#f1f5ff] dark:bg-[#071829] flex shrink-0 items-center justify-center">
                                <FaWhatsapp className="text-2xl text-[#17171c] dark:text-[#ffffff]" />
                            </div>
                            <div>
                                <h3 className="font-bold text-[20px] text-[#17171c] dark:text-[#ffffff] mb-1">WhatsApp</h3>
                                <span className="text-[15px] font-semibold text-[#616161] dark:text-[#d9d9dd]">Chat via WA</span>
                            </div>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}
