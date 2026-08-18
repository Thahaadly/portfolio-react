// src/data.js

export const mockProjects = [
  {
    id: 1,
    title: "GarageFlow - Smart Workshop Management App",
    short_description:
      "Aplikasi manajemen bengkel dengan integrasi AI, pembayaran Midtrans, dan visualisasi 3D.",
    full_description:
      "Merancang arsitektur decoupled React Native + Laravel REST API dengan Role-Based Access Control. Membangun fitur 'Montir AI' menggunakan Google Gemini AI untuk konsultasi otomotif otomatis. Mengimplementasikan visualisasi 3D kendaraan interaktif dengan React Three Fiber (teroptimasi 31MB → 19MB), serta mengintegrasikan Midtrans Payment Gateway untuk mengamankan transaksi bengkel.",
    image: "project-photos/garageflow-web.jpeg",
    technologies: "React Native, Laravel, MySQL, Midtrans API, Three.js",
  },
  {
    id: 2,
    title: "Web Berita React API",
    short_description:
      "Portal berita interaktif dengan integrasi API eksternal.",
    full_description:
      "Web Berita dengan React JS yang mengintegrasikan API eksternal untuk menampilkan berita terkini. Proyek ini menonjolkan kemampuan dalam mengelola data dinamis dan membangun antarmuka pengguna yang responsif.",
    image: "project-photos/berita.jpg",
    technologies: "React JS, API Integration",
    link: "https://github.com/Hacktiv-1/React-News-Api.git",
  },
  {
    id: 3,
    title: "Super Admin Management Dashboard",
    short_description:
      "Dashboard interaktif untuk memantau metrik FO aktif dan mengelola data anggota secara terpusat.",
    full_description:
      "Sistem informasi manajemen berbasis web yang dirancang khusus untuk level akses Super Admin. Aplikasi ini mempermudah pemantauan statistik operasional secara real-time, termasuk manajemen FO dan total anggota, dibalut dengan antarmuka pengguna (UI) yang bersih, modern, dan sangat responsif.",
    image: "project-photos/super-admin-dashboard.jpg",
    technologies: "React JS, Tailwind CSS, REST API",
    link: "https://github.com/Thahaadly/koperasi-simpan-pinjam.git",
  },
  {
    id: 4,
    title: "WebGIS prototipe",
    short_description:
      "Sistem informasi spasial untuk pemantauan data hidrologi dan cuaca secara real-time berbasis peta.",
    full_description:
      "Dashboard interaktif pemantauan lingkungan terintegrasi untuk menampilkan data hidrologi, hidrometeorologi, dan hidrogeologi. Proyek ini menonjolkan integrasi peta interaktif, filter instansi pengelola (seperti BMKG dan BWS Kalsel), serta panel analitik yang menyajikan metrik curah hujan, suhu, dan status stasiun secara langsung.",
    image: "project-photos/psih3-dashboard.jpg",
    technologies: "React JS, Leaflet JS, Tailwind CSS, REST API",
    link: "https://github.com/Thahaadly/prototipe-webgis.git",
  },
  {
    id: 5,
    title: "Sistem Arsip Digital BBPPKS",
    short_description:
      "Sistem Informasi Arsip Digital instansi kementerian menggunakan CodeIgniter 4.",
    full_description:
      "Merancang Sistem Informasi Arsip Digital berbasis web secara end-to-end dengan CodeIgniter 4 dan MySQL. Mengimplementasikan fitur manajemen data (CRUD) dan pencarian spesifik yang secara langsung mempercepat proses penemuan kembali (retrieval) arsip penting oleh staf kementerian.",
    image: "project-photos/web-arsip.jpeg",
    technologies: "CodeIgniter 4, MySQL, Bootstrap",
    link: "#",
  },
  {
    id: 6,
    title: "Corporate Company Profile",
    short_description:
      "Custom CMS berbasis Headless Architecture dengan dashboard admin dinamis.",
    full_description:
      "Merancang Custom Content Management System (CMS) berbasis Headless Architecture untuk portal perusahaan klien secara end-to-end. Membangun dashboard admin dinamis dengan Laravel (PHP) dan MySQL untuk operasi CRUD mandiri, serta menyediakan REST API yang diintegrasikan mulus dengan frontend interaktif React JS dan Tailwind CSS.",
    image: "project-photos/web-compro.jpeg",
    technologies: "React JS, Laravel, MySQL, Tailwind CSS",
    link: "#",
    demo: "https://spektatechnusantara.com/",
  },
  {
    id: 7,
    title: "Movie Explorer Platform",
    short_description: "Aplikasi penjelajah film dengan integrasi TMDB API.",
    full_description:
      "Aplikasi eksplorasi film hasil dari program intensif yang berfokus mendalam pada ekosistem React JS dan integrasi REST API pihak ketiga (TMDB). Menampilkan manajemen state untuk navigasi pencarian film.",
    image: "project-photos/movie.jpg",
    technologies: "React JS, API Integration, Frontend Logic",
    link: "https://github.com/fp4-hacktiv8-kelompok1/movie.git",
  },
  {
    id: 8,
    title: "E-Commerce Shopping App",
    short_description:
      "Antarmuka keranjang belanja dinamis dengan manajemen state kompleks.",
    full_description:
      "Antarmuka e-commerce dinamis dengan manajemen state yang kompleks untuk menangani alur transaksi, perhitungan harga real-time, dan pemfilteran katalog produk.",
    image: "project-photos/shopping.jpg",
    technologies: "React JS, State Management, UI/UX",
    link: "https://github.com/Hacktiv8-FinalProject2/shopping.git",
  },
  {
    id: 9,
    title: "Hotel Reservation System",
    short_description:
      "Sistem pemesanan kamar hotel dengan dashboard ketersediaan operasional.",
    full_description:
      "Sistem informasi pemesanan kamar hotel secara mobile dengan fitur manajemen ketersediaan kamar, filtering tipe kamar, dan dashboard operasional pemesanan pelanggan.",
    image: "project-photos/hotel.jpg",
    technologies: "React Native",
    link: "https://github.com/Thahaadly/fp3-booking-app.git",
  },
  {
    id: 10,
    title: "Web Portfolio",
    short_description:
      "Website portofolio interaktif dengan desain UI Glassmorphism modern.",
    full_description:
      "Website portofolio interaktif ini sendiri. Memadukan estetika antarmuka Glassmorphism yang modern dengan struktur arsitektur web yang responsif dan berkinerja tinggi.",
    image: "project-photos/porto.jpg",
    technologies: "React JS, Vite, Tailwind CSS",
    link: "https://github.com/Thahaadly/Assignment3Hacktiv8.git",
  },
];

export const mockSkills = [
  {
    category: "Data Analytics & ML",
    items: [
      { name: "Python", level: 85 },
      { name: "K-Means Clustering", level: 80 },
      { name: "Data Visualization", level: 80 },
    ],
  },
  {
    category: "Frontend Ecosystem",
    items: [
      { name: "React JS", level: 90 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    category: "Backend & Database",
    items: [
      { name: "Laravel", level: 80 },
      { name: "CodeIgniter 4", level: 85 },
      { name: "MySQL", level: 85 },
    ],
  },
];
