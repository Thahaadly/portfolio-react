import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaEnvelope, FaLock, FaArrowLeft, FaSignInAlt } from 'react-icons/fa';
import { glassTheme as theme } from '../utils/theme';

export default function Login() {
  // Tempat menyimpan inputan ketikanmu
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  
  // Fitur untuk pindah halaman otomatis
  const navigate = useNavigate();

  // Fungsi yang jalan saat tombol "Login" diklik
  const handleLogin = async (e) => {
    e.preventDefault(); // Mencegah halaman refresh otomatis
    setErrorMsg(''); // Kosongkan pesan error (kalau ada)

    try {
      const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api';
      // 1. Suruh Axios nembak ke satpam Laravel
      const response = await axios.post(`${apiUrl}/login`, {
        email: email,
        password: password
      });

      // 2. Kalau sukses, ambil Token saktinya dan simpan di brankas browser
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user_email', response.data?.data?.email || email);

      // 3. Tendang (arahkan) user ke halaman rahasia (Dashboard)
      navigate('/dashboard');

    } catch (error) {
      // MODE FRONTEND (VERCEL): Kalau backend mati (Network Error) atau pakai demo email, izinkan masuk sbg Demo
      if (email === 'demo@thaha.com' || !error.response) {
        localStorage.setItem('token', 'frontend-demo-token-123');
        localStorage.setItem('user_email', 'demo@thaha.com');
        navigate('/dashboard');
      } else {
        // Kalau gagal (error 401), tampilkan pesan
        setErrorMsg('Email atau Password salah! Coba lagi.');
      }
    }
  };

  return (
    <div className="relative min-h-screen font-sans text-slate-800 flex items-center justify-center p-4 bg-slate-50 overflow-hidden">
      {/* Background Blur */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-indigo-300/40 blur-[100px] mix-blend-multiply"></div>
        <div className="absolute top-[20%] right-[-5%] h-[400px] w-[400px] rounded-full bg-cyan-200/50 blur-[100px] mix-blend-multiply"></div>
        <div className="absolute bottom-[-10%] left-[20%] h-[600px] w-[600px] rounded-full bg-purple-200/40 blur-[120px] mix-blend-multiply"></div>
      </div>

      <div className={`w-full max-w-md p-8 sm:p-10 rounded-[2.5rem] relative ${theme.glassSurface} shadow-xl`}>
        <div className="mb-6 flex justify-between items-center">
          <button
            type="button"
            onClick={() => navigate('/')}
            className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold ${theme.button}`}
          >
            <FaArrowLeft /> Kembali
          </button>
        </div>

        <div className="text-center mb-8">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 border border-white shadow-inner mb-4">
            <FaSignInAlt className={`text-3xl ${theme.primary}`} />
          </div>
          <h2 className="text-3xl font-black text-slate-800 drop-shadow-sm">Admin Access</h2>
          <p className="text-sm text-slate-500 mt-2 font-medium">Silakan masuk ke area manajemen portofolio.</p>
        </div>
        
        {/* Tampilkan pesan error kalau ada */}
        {errorMsg && (
          <div className="p-3 mb-6 text-sm font-semibold text-rose-700 bg-rose-100/80 border border-rose-200 rounded-xl backdrop-blur-sm">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block mb-2 text-xs font-bold text-slate-600 uppercase tracking-wide">Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <FaEnvelope className="text-slate-400" />
              </div>
              <input 
                type="email" 
                className="w-full pl-10 pr-4 py-3 bg-white/50 backdrop-blur-sm border border-white/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white/80 transition-all text-sm font-medium placeholder:text-slate-400"
                placeholder="admin@thaha.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-xs font-bold text-slate-600 uppercase tracking-wide">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <FaLock className="text-slate-400" />
              </div>
              <input 
                type="password" 
                className="w-full pl-10 pr-4 py-3 bg-white/50 backdrop-blur-sm border border-white/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white/80 transition-all text-sm font-medium placeholder:text-slate-400"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>
          </div>

          <button 
            type="submit" 
            className={`w-full py-3.5 mt-4 rounded-2xl text-sm font-bold flex justify-center items-center gap-2 ${theme.buttonSolid}`}
          >
            Masuk <FaSignInAlt />
          </button>
        </form>
      </div>
    </div>
  );
}