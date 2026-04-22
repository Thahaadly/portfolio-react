import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
      // 1. Suruh Axios nembak ke satpam Laravel
      const response = await axios.post('http://127.0.0.1:8000/api/login', {
        email: email,
        password: password
      });

      // 2. Kalau sukses, ambil Token saktinya dan simpan di brankas browser
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user_email', response.data?.data?.email || email);

      // 3. Tendang (arahkan) user ke halaman rahasia (Dashboard)
      navigate('/dashboard');

    } catch {
      // Kalau gagal (error 401), tampilkan pesan
      setErrorMsg('Email atau Password salah! Coba lagi.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <div className="mb-4 flex justify-end">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-semibold text-gray-700 transition hover:bg-gray-100"
          >
            Kembali ke Home
          </button>
        </div>

        <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Login Admin</h2>
        
        {/* Tampilkan pesan error kalau ada */}
        {errorMsg && (
          <div className="p-3 mb-4 text-sm text-red-700 bg-red-100 rounded">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">Email</label>
            <input 
              type="email" 
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="admin@thaha.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-bold text-gray-700">Password</label>
            <input 
              type="password" 
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          <button 
            type="submit" 
            className="w-full px-4 py-2 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none"
          >
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
}