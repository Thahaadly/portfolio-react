import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { glassTheme as theme } from "../utils/theme";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 py-24 text-center">
      {/* Huge Monumental Text */}
      <h1 className="text-[12rem] md:text-[18rem] font-black leading-none text-[#17171c] tracking-tighter">
        404
      </h1>

      <div className="mt-[-2rem] md:mt-[-4rem] z-10">
        <h2 className="text-3xl font-bold tracking-tight text-slate-800 md:text-5xl">
          Halaman Tidak Ditemukan.
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-lg text-slate-600">
          Sepertinya Anda tersesat terlalu jauh dari radar. Mari kita kembali ke
          jalur yang benar.
        </p>

        <div className="mt-10">
          <Link
            to="/"
            className={`inline-flex items-center gap-2 rounded-2xl px-8 py-4 text-base font-semibold transition-all hover:scale-105 ${theme.buttonSolid}`}
          >
            <FaArrowLeft />
            Kembali ke Beranda
          </Link>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute left-10 top-20 h-32 w-32 rounded-full border-[16px] border-slate-100/50"></div>
      <div className="absolute bottom-20 right-10 h-64 w-64 rounded-full border-[32px] border-slate-50/50"></div>
    </div>
  );
}
