// src/data.js

export const mockProjects = [
    {
        id: 2,
        title: "Web Berita React API",
        description: "Membangun model Natural Language Processing (NLP) membandingkan XLM dan XLM-RoBERTa untuk mengklasifikasi teks berita dan laporan bencana dari media sosial dengan akurasi 84.33%.",
        image: "project-photos/berita.jpg", // Sesuai dengan berita.jpg
        technologies: "React JS, API Integration, Frontend Logic",
        link: "https://github.com/Hacktiv-1/React-News-Api.git"
    },
    {
        id: 3,
        title: "Sistem Arsip BPPKS",
        description: "Pengembangan sistem arsip internal berbasis web menggunakan CodeIgniter 4 dan MySQL selama program magang (IT Internship) di BPPKS.",
        image: "project-photos/web-arsip.jpeg", // Sesuai dengan web arsip.jpeg
        technologies: "CodeIgniter 4, MySQL, Bootstrap",
        link: "#"
    },
    {
        id: 4,
        title: "Corporate Company Profile",
        description: "Proyek freelance Fullstack membangun website company profile interaktif menggunakan ekosistem React JS di sisi klien dan Laravel API di sisi server.",
        image: "project-photos/web-compro.jpeg", // Sesuai dengan web compro.jpeg
        technologies: "React JS, Laravel, Tailwind CSS",
        link: "#"
    },
    {
        id: 5,
        title: "Movie Explorer Platform",
        description: "Aplikasi eksplorasi film hasil dari program intensif yang berfokus mendalam pada ekosistem React JS dan integrasi REST API pihak ketiga (TMDB).",
        image: "project-photos/movie.jpg", // Sesuai dengan movie.jpg
        technologies: "React JS, API Integration, Frontend Logic",
        link: "https://github.com/fp4-hacktiv8-kelompok1/movie.git"
    },
    {
        id: 6,
        title: "E-Commerce Shopping App",
        description: "Antarmuka keranjang belanja dinamis dengan manajemen state yang kompleks untuk menangani alur transaksi dan katalog produk.",
        image: "project-photos/shopping.jpg", // Sesuai dengan shopping.jpg
        technologies: "React JS, State Management, UI/UX",
        link: "https://github.com/Hacktiv8-FinalProject2/shopping.git"
    },
    {
        id: 7,
        title: "Hotel Reservation System",
        description: "Sistem informasi pemesanan kamar hotel dengan fitur manajemen ketersediaan kamar dan dashboard operasional.",
        image: "project-photos/hotel.jpg", // Sesuai dengan hotel.jpg
        technologies: "React Native",
        link: "https://github.com/Thahaadly/fp3-booking-app.git"
    },
    {
        id: 8,
        title: "Web Portfolio react",
        description: "Website portofolio interaktif ini sendiri. Memadukan estetika antarmuka Glassmorphism dengan struktur arsitektur web yang solid.",
        image: "project-photos/porto.jpg", // Sesuai dengan porto.jpg
        technologies: "React JS, Vite, Tailwind CSS",
        link: "https://github.com/Thahaadly/Assignment3Hacktiv8.git"
    }
];

export const mockSkills = [
    {
        category: 'Data Analytics & ML',
        items: [
            { name: 'Python', level: 85 },
            { name: 'K-Means Clustering', level: 80 },
            { name: 'NLP (XLM-RoBERTa)', level: 75 },
            { name: 'Data Visualization', level: 80 },
        ],
    },
    {
        category: 'Frontend Ecosystem',
        items: [
            { name: 'React JS', level: 90 },
            { name: 'Tailwind CSS', level: 85 },
        ],
    },
    {
        category: 'Backend & Database',
        items: [
            { name: 'Laravel', level: 80 },
            { name: 'CodeIgniter 4', level: 85 },
            { name: 'MySQL', level: 85 },
        ],
    },
];