import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { glassTheme as theme } from '../utils/theme';

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-50 p-6 text-slate-800">
      {/* Background Blur */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-indigo-300/40 mix-blend-multiply blur-[100px]"></div>
        <div className="absolute right-[-5%] top-[20%] h-[400px] w-[400px] rounded-full bg-cyan-200/50 mix-blend-multiply blur-[100px]"></div>
      </div>

      <div className={`flex flex-col items-center rounded-[2.5rem] p-12 text-center shadow-xl ${theme.glassSurface} max-w-lg w-full`}>
        <h1 className="text-8xl font-black text-indigo-600 drop-shadow-sm">404</h1>
        <h2 className="mt-4 text-2xl font-bold text-slate-800">Halaman Tidak Ditemukan</h2>
        <p className="mt-4 text-slate-600">
          Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.
        </p>
        <Link
          to="/"
          className={`mt-8 inline-flex items-center gap-2 rounded-2xl px-8 py-3.5 text-sm font-semibold ${theme.buttonSolid}`}
        >
          <FaHome className="text-lg" />
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
