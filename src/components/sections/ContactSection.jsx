import { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

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
                    <h2 className="text-[56px] md:text-[72px] leading-[0.95] tracking-[-1.5px] font-normal text-[#17171c] drop-shadow-none">
                        Let's Talk.
                    </h2>
                    <p className="text-[18px] md:text-[20px] text-[#616161]">Mari berdiskusi tentang peluang kolaborasi.</p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    
                    {/* Form Kontak (Flat UI) */}
                    <div className="p-8 md:p-10 rounded-[22px] bg-gradient-to-br from-[#182c3c] via-[#4d6978] to-[#d9c8b3] border border-transparent shadow-lg order-2 lg:order-1 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[#000000] opacity-[0.05] mix-blend-multiply pointer-events-none"></div>
                        <form className="space-y-6 relative z-10" onSubmit={onSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-[13px] font-bold text-[#e5e5e5] uppercase tracking-widest mb-2">Nama Lengkap</label>
                                <input type="text" name="name" id="name" required className="w-full rounded-[12px] border border-[#ffffff]/20 bg-[#ffffff]/10 px-4 py-3.5 text-[15px] text-[#ffffff] placeholder-[#ffffff]/60 focus:border-[#ffffff] focus:ring-1 focus:ring-[#ffffff] outline-none transition-all" placeholder="Masukkan nama Anda" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-[13px] font-bold text-[#e5e5e5] uppercase tracking-widest mb-2">Email</label>
                                <input type="email" name="email" id="email" required className="w-full rounded-[12px] border border-[#ffffff]/20 bg-[#ffffff]/10 px-4 py-3.5 text-[15px] text-[#ffffff] placeholder-[#ffffff]/60 focus:border-[#ffffff] focus:ring-1 focus:ring-[#ffffff] outline-none transition-all" placeholder="nama@email.com" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-[13px] font-bold text-[#e5e5e5] uppercase tracking-widest mb-2">Pesan</label>
                                <textarea id="message" name="message" required rows="4" className="w-full rounded-[12px] border border-[#ffffff]/20 bg-[#ffffff]/10 px-4 py-3.5 text-[15px] text-[#ffffff] placeholder-[#ffffff]/60 focus:border-[#ffffff] focus:ring-1 focus:ring-[#ffffff] outline-none transition-all resize-none" placeholder="Tuliskan pesan Anda..."></textarea>
                            </div>
                            
                            <button type="submit" disabled={isSubmitting} className={`w-full rounded-[32px] py-4 text-[15px] font-bold flex justify-center items-center gap-2 transition-all mt-4 ${isSubmitting ? 'bg-[#ffffff]/50 text-[#17171c]/50 cursor-not-allowed' : 'bg-[#ffffff] text-[#17171c] hover:bg-[#f3f4f6]'}`}>
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
                                <div className={`p-4 rounded-[12px] text-sm font-bold text-center mt-4 ${result.includes('❌') ? 'bg-red-50 text-red-600 border border-red-200' : 'bg-emerald-50 text-emerald-600 border border-emerald-200'}`}>
                                    {result}
                                </div>
                            )}
                        </form>
                    </div>
                    
                    {/* Kartu Kontak (Flat Design) */}
                    <div className="flex flex-col gap-6 order-1 lg:order-2">
                        <a href="mailto:thahaadly6@gmail.com" aria-label="Kirim Email" className="flex items-center gap-6 p-8 rounded-[22px] bg-gradient-to-br from-[#182c3c] via-[#4d6978] to-[#d9c8b3] border border-transparent shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-[#000000] opacity-[0.05] mix-blend-multiply pointer-events-none"></div>
                            <div className="relative z-10 flex items-center gap-6 w-full">
                                <div className="h-16 w-16 rounded-full bg-[#ffffff]/10 border border-[#ffffff]/20 flex shrink-0 items-center justify-center group-hover:scale-110 transition-transform">
                                    <FaEnvelope className="text-2xl text-[#ffffff]" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[20px] text-[#ffffff] mb-1">Email</h3>
                                    <span className="text-[15px] font-semibold text-[#f3f4f6]">thahaadly6@gmail.com</span>
                                </div>
                            </div>
                        </a>
                        
                        <a href="https://www.linkedin.com/in/thahaa/" target="_blank" rel="noopener noreferrer" aria-label="Kunjungi LinkedIn" className="flex items-center gap-6 p-8 rounded-[22px] bg-gradient-to-br from-[#182c3c] via-[#4d6978] to-[#d9c8b3] border border-transparent shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-[#000000] opacity-[0.05] mix-blend-multiply pointer-events-none"></div>
                            <div className="relative z-10 flex items-center gap-6 w-full">
                                <div className="h-16 w-16 rounded-full bg-[#ffffff]/10 border border-[#ffffff]/20 flex shrink-0 items-center justify-center group-hover:scale-110 transition-transform">
                                    <FaLinkedin className="text-2xl text-[#ffffff]" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[20px] text-[#ffffff] mb-1">LinkedIn</h3>
                                    <span className="text-[15px] font-semibold text-[#f3f4f6]">Thaha Wafiq Adly</span>
                                </div>
                            </div>
                        </a>
                        
                        <a href="https://wa.me/6289618687992" target="_blank" rel="noopener noreferrer" aria-label="Hubungi via WhatsApp" className="flex items-center gap-6 p-8 rounded-[22px] bg-gradient-to-br from-[#182c3c] via-[#4d6978] to-[#d9c8b3] border border-transparent shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-[#000000] opacity-[0.05] mix-blend-multiply pointer-events-none"></div>
                            <div className="relative z-10 flex items-center gap-6 w-full">
                                <div className="h-16 w-16 rounded-full bg-[#ffffff]/10 border border-[#ffffff]/20 flex shrink-0 items-center justify-center group-hover:scale-110 transition-transform">
                                    <FaWhatsapp className="text-2xl text-[#ffffff]" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[20px] text-[#ffffff] mb-1">WhatsApp</h3>
                                    <span className="text-[15px] font-semibold text-[#f3f4f6]">Chat via WA</span>
                                </div>
                            </div>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}
