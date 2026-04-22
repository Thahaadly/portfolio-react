import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  FaCheckCircle,
  FaCode,
  FaDatabase,
  FaExclamationCircle,
  FaExternalLinkAlt,
  FaImage,
  FaInfoCircle,
  FaLaravel,
  FaPython,
  FaReact,
  FaPhp,
  FaRocket,
  FaBrain,
  FaChartLine,
  FaChartPie,
  FaFolderOpen,
} from 'react-icons/fa';
import { SiMysql, SiTailwindcss, SiCodeigniter } from 'react-icons/si';
import { resolveProjectImage } from '../utils/projectImageResolver';

function getProjectBadges(project) {
  if (project.tech_stack) {
    return project.tech_stack
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean)
      .slice(0, 5);
  }

  const source = `${project.title || ''} ${project.description || ''}`.toLowerCase();
  const badges = [];

  if (source.includes('react')) badges.push('React JS');
  if (source.includes('laravel')) badges.push('Laravel');
  if (source.includes('tailwind')) badges.push('Tailwind CSS');
  if (source.includes('python')) badges.push('Python');
  if (source.includes('mysql')) badges.push('MySQL');

  return badges.length ? badges.slice(0, 3) : ['Web Dev'];
}

function getBadgeIcon(label = '') {
  const normalized = label.toLowerCase();

  if (normalized.includes('react')) return FaReact;
  if (normalized.includes('laravel')) return FaLaravel;
  if (normalized.includes('tailwind')) return SiTailwindcss;
  if (normalized.includes('python')) return FaPython;
  if (normalized.includes('mysql')) return SiMysql;
  if (normalized.includes('api') || normalized.includes('sql') || normalized.includes('database')) return FaDatabase;

  return FaCode;
}

const techOptions = [
  // --- WEB & MOBILE DEVELOPMENT ---
  { name: 'React JS', icon: FaReact },
  { name: 'React Native', icon: FaReact },
  { name: 'Laravel', icon: FaLaravel },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'PHP', icon: FaPhp },
  { name: 'CodeIgniter 4', icon: SiCodeigniter },
  { name: 'REST API', icon: FaDatabase },
  { name: 'Android App', icon: FaRocket },
  { name: 'Web Dev', icon: FaCode },

  // --- DATA SCIENCE & MACHINE LEARNING ---
  { name: 'Python', icon: FaPython },
  { name: 'Machine Learning', icon: FaBrain },
  { name: 'Data Analysis', icon: FaChartLine },
  { name: 'K-Means Clustering', icon: FaChartPie },
  { name: 'XLM-RoBERTa', icon: FaBrain },
  { name: 'MySQL', icon: SiMysql },
  { name: 'SQL', icon: FaDatabase },
];

function ProjectVisual({ src, alt, className, compact = false }) {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div className={`relative flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 ${className}`}>
        <div className="flex flex-col items-center gap-1 text-slate-300">
          <FaImage className={compact ? 'text-sm' : 'text-xl'} />
          {!compact && <span className="text-[11px] font-medium tracking-wide">Preview not available</span>}
        </div>
      </div>
    );
  }

  return <img src={src} alt={alt} className={className} onError={() => setHasError(true)} />;
}

export default function Dashboard() {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();
  const userEmail = localStorage.getItem('user_email') || '';
  const homeButtonLabel = userEmail === 'demo@thaha.com' ? 'Kembali ke Portfolio (Demo)' : 'Kembali ke Portfolio';

  // --- STATE UNTUK MODAL TAMBAH PROYEK ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [techStack, setTechStack] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const [selectedImageName, setSelectedImageName] = useState('');
  const [toast, setToast] = useState(null);

  const showToast = useCallback((message, type = 'info') => {
    const toastId = Date.now();
    setToast({ id: toastId, message, type });

    setTimeout(() => {
      setToast((current) => (current?.id === toastId ? null : current));
    }, 3200);
  }, []);

  const toastStyle = {
    success: 'border-emerald-300/40 bg-emerald-500/15 text-emerald-100',
    error: 'border-rose-300/40 bg-rose-500/15 text-rose-100',
    info: 'border-cyan-300/40 bg-cyan-500/15 text-cyan-100',
  };

  const toastIcon = {
    success: FaCheckCircle,
    error: FaExclamationCircle,
    info: FaInfoCircle,
  };

  const fetchProjects = useCallback(async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/projects');
      const payload = Array.isArray(response.data) ? response.data : response.data?.data;
      setProjects(Array.isArray(payload) ? payload : []);
    } catch (error) {
      console.error("Gagal mengambil data proyek:", error);
      setProjects([]);
      showToast('Gagal mengambil data proyek dari server.', 'error');
    }
  }, [showToast]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
    // Initial fetch on mount after auth check.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchProjects();
  }, [navigate, fetchProjects]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user_email');
    navigate('/login');
  };

  const resetForm = () => {
    if (imagePreview.startsWith('blob:')) {
      URL.revokeObjectURL(imagePreview);
    }

    setTitle('');
    setDescription('');
    setImage('');
    setTechStack('');
    setImagePreview('');
    setSelectedImageName('');
    setSelectedProjectId(null);
    setIsEditMode(false);
  };

  const openAddModal = () => {
    resetForm();
    setIsModalOpen(true);
  };

  const openEditModal = (project) => {
    setTitle(project.title || '');
    setDescription(project.description || '');
    setImage(project.image || '');
    setTechStack(project.tech_stack || '');
    setImagePreview(project.image || '');
    setSelectedImageName('');
    setSelectedProjectId(project.id);
    setIsEditMode(true);
    setIsModalOpen(true);
  };

  const handleImageFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (imagePreview.startsWith('blob:')) {
      URL.revokeObjectURL(imagePreview);
    }

    const previewUrl = URL.createObjectURL(file);
    setImagePreview(previewUrl);
    setSelectedImageName(file.name);
    setImage(`/project-photos/${file.name}`);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    resetForm();
  };

  useEffect(() => {
    return () => {
      if (imagePreview.startsWith('blob:')) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  // --- FUNGSI MENGIRIM DATA PROYEK BARU KE LARAVEL ---
  const handleAddProject = async (e) => {
    e.preventDefault(); // Biar halaman nggak nge-refresh
    
    const token = localStorage.getItem('token'); // Ambil kunci sakti dari brankas

    try {
      // Kurir Axios berangkat bawa data DAN token
      await axios.post('http://127.0.0.1:8000/api/projects', {
        title: title,
        description: description,
        image,
        tech_stack: techStack,
      }, {
        headers: {
          Authorization: `Bearer ${token}` // Wajib pasang token di sini biar bisa lewat satpam!
        }
      });

      // Kalau sukses nembus:
      closeModal();
      fetchProjects();        // Refresh isi tabel otomatis!
      showToast('Proyek berhasil ditambahkan.', 'success');

    } catch (error) {
      console.error("Gagal menambah proyek", error);
      if (error.response?.status === 403) {
        showToast(error.response?.data?.message || 'Akses ditolak.', 'error');
      } else {
        showToast('Gagal menyimpan data! Pastikan server Laravel nyala.', 'error');
      }
    }
    
  };

  const handleUpdateProject = async (e) => {
    e.preventDefault();

    if (!selectedProjectId) {
      showToast('Proyek yang akan diupdate tidak valid.', 'error');
      return;
    }

    const token = localStorage.getItem('token');

    try {
      await axios.put(`http://127.0.0.1:8000/api/projects/${selectedProjectId}`, {
        title,
        description,
        image,
        tech_stack: techStack,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      closeModal();
      fetchProjects();
      showToast('Proyek berhasil diupdate.', 'success');
    } catch (error) {
      console.error('Gagal mengupdate proyek', error);
      if (error.response?.status === 403) {
        showToast(error.response?.data?.message || 'Akses ditolak.', 'error');
      } else {
        showToast('Gagal mengupdate data! Pastikan server Laravel nyala.', 'error');
      }
    }
  };
  // --- FUNGSI MENGHAPUS PROYEK ---
  const handleDeleteProject = async (id) => {
    // Munculkan konfirmasi dulu biar nggak salah pencet
    const isConfirm = window.confirm("Yakin ingin menghapus proyek ini?");
    
    if (isConfirm) {
      const token = localStorage.getItem('token'); // Ambil kunci sakti

      try {
        // Axios nembak jalur DELETE bawa ID proyek dan Token
        await axios.delete(`http://127.0.0.1:8000/api/projects/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        // Kalau sukses dihapus, refresh isi tabelnya
        fetchProjects();
        showToast('Proyek berhasil dihapus.', 'success');
        
      } catch (error) {
        console.error("Gagal menghapus proyek", error);
        if (error.response?.status === 403) {
          showToast(error.response?.data?.message || 'Akses ditolak.', 'error');
        } else {
          showToast('Gagal menghapus data!', 'error');
        }
      }
    }
  };

  const filteredProjects = projects.filter((project) => {
    const keyword = searchQuery.toLowerCase();
    return (
      project.title?.toLowerCase().includes(keyword) ||
      project.description?.toLowerCase().includes(keyword)
    );
  });

  const totalDescriptionChars = projects.reduce((total, project) => {
    return total + (project.description?.length || 0);
  }, 0);

  const averageDescriptionLength = projects.length
    ? Math.round(totalDescriptionChars / projects.length)
    : 0;

  const recentProject = projects[0];
  const selectedTechTags = techStack
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);

  const toggleTechTag = (tagName) => {
    const nextTags = selectedTechTags.includes(tagName)
      ? selectedTechTags.filter((tag) => tag !== tagName)
      : [...selectedTechTags, tagName];

    setTechStack(nextTags.join(', '));
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      {toast && (() => {
        const ToastIcon = toastIcon[toast.type] || FaInfoCircle;
        return (
          <div className="fixed right-5 top-5 z-[60]">
            <div className={`flex items-start gap-3 rounded-xl border px-4 py-3 shadow-xl backdrop-blur-sm ${toastStyle[toast.type] || toastStyle.info}`}>
              <ToastIcon className="mt-0.5 text-base" />
              <p className="text-sm font-medium leading-relaxed">{toast.message}</p>
            </div>
          </div>
        );
      })()}

      <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-amber-400/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-12 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-emerald-400/15 blur-3xl" />

      <nav className="relative z-10 border-b border-white/10 bg-slate-900/70 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-amber-300">Studio Admin</p>
            <h1 className="text-xl font-bold text-white md:text-2xl">Dashboard Portofolio</h1>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate('/')}
              className="rounded-xl border border-sky-300/40 bg-sky-500/15 px-4 py-2 text-sm font-semibold text-sky-100 transition hover:-translate-y-0.5 hover:bg-sky-500/25"
            >
              {homeButtonLabel}
            </button>
            <button
              onClick={handleLogout}
              className="rounded-xl border border-slate-200/20 bg-slate-200/10 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:bg-slate-200/20"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <main className="relative z-10 mx-auto w-full max-w-7xl px-5 py-8 md:py-10">
        <section className="mb-7 rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900/95 via-slate-900/75 to-slate-900/40 p-6 shadow-2xl shadow-black/30 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.2em] text-cyan-300">Creative Project Control</p>
              <h2 className="text-3xl font-black leading-tight text-white md:text-4xl">Kelola Karya Dengan Tampilan Portfolio Feel</h2>
              <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
                Pantau, cari, dan update proyek dengan pengalaman visual yang lebih hidup dan cepat.
              </p>
            </div>
            <button
              onClick={openAddModal}
              className="rounded-xl bg-sky-400 px-5 py-3 font-bold text-slate-900 transition hover:-translate-y-0.5 hover:bg-sky-300"
            >
              + Tambah Proyek
            </button>
          </div>
        </section>

        <section className="mb-7 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-cyan-300/30 bg-cyan-400/10 p-5 backdrop-blur-sm transition hover:-translate-y-1">
            <p className="text-sm text-cyan-200">Total Proyek</p>
            <p className="mt-2 text-3xl font-extrabold text-white">{projects.length}</p>
          </div>
          <div className="rounded-2xl border border-amber-300/30 bg-amber-400/10 p-5 backdrop-blur-sm transition hover:-translate-y-1">
            <p className="text-sm text-amber-200">Rata-rata Panjang Deskripsi</p>
            <p className="mt-2 text-3xl font-extrabold text-white">{averageDescriptionLength} karakter</p>
          </div>
          <div className="rounded-2xl border border-emerald-300/30 bg-emerald-400/10 p-5 backdrop-blur-sm transition hover:-translate-y-1">
            <p className="text-sm text-emerald-200">Proyek Terbaru</p>
            <p className="mt-2 truncate text-lg font-extrabold text-white">{recentProject?.title || 'Belum ada proyek'}</p>
          </div>
        </section>

        <section className="mb-6 flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-900/70 p-4 backdrop-blur-xl md:flex-row md:items-center md:justify-between">
          <div className="w-full md:max-w-lg">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari judul atau deskripsi proyek..."
              className="w-full rounded-xl border border-white/20 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-cyan-300"
            />
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                viewMode === 'grid'
                  ? 'bg-cyan-400 text-slate-900'
                  : 'bg-white/10 text-slate-200 hover:bg-white/20'
              }`}
            >
              Grid
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                viewMode === 'table'
                  ? 'bg-cyan-400 text-slate-900'
                  : 'bg-white/10 text-slate-200 hover:bg-white/20'
              }`}
            >
              Table
            </button>
          </div>
        </section>

        {viewMode === 'grid' ? (
          filteredProjects.length > 0 ? (
            <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProjects.map((project) => {
                const badges = getProjectBadges(project).map((name) => ({
                  name,
                  icon: getBadgeIcon(name),
                }));

                return (
                  <article
                    key={project.id || project.title}
                    className="group flex h-full min-h-[420px] flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-2 hover:border-cyan-300/50"
                  >
                    <ProjectVisual
                      src={resolveProjectImage(project)}
                      alt={project.title || 'Project image'}
                      className="h-48 w-full rounded-t-xl object-cover"
                    />

                    <div className="flex h-full flex-col p-5">
                      <div className="mb-3 flex items-center justify-between">
                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-wide text-slate-300">Project</span>
                        <span className="text-xs text-slate-400">ID #{project.id}</span>
                      </div>

                      <h3 className="text-lg font-bold text-white transition group-hover:text-cyan-200">{project.title}</h3>
                      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-300">{project.description || 'Deskripsi proyek belum tersedia.'}</p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {badges.map((badge) => (
                          <span
                            key={`${project.id || project.title}-${badge.name}`}
                            className="inline-flex items-center gap-1.5 rounded-full border border-cyan-300/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium tracking-wide text-cyan-100"
                          >
                            <badge.icon className="text-[11px]" />
                            {badge.name}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto flex flex-wrap items-center justify-end gap-2 pt-5">
                        <button
                          onClick={() => navigate(`/projects/${project.id}`)}
                          className="inline-flex items-center gap-1 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:border-cyan-300/60 hover:text-cyan-200"
                        >
                          <FaExternalLinkAlt className="text-[10px]" />
                          Detail
                        </button>
                        <button
                          onClick={() => openEditModal(project)}
                          className="inline-flex h-8 items-center rounded-lg bg-sky-400 px-3 text-xs font-semibold text-slate-900 transition hover:bg-sky-300"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteProject(project.id)}
                          className="inline-flex h-8 items-center rounded-lg bg-rose-500 px-3 text-xs font-semibold text-white transition hover:bg-rose-400"
                        >
                          Hapus
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </section>
          ) : (
            <div className="rounded-2xl border border-dashed border-white/20 bg-slate-900/60 p-12 text-center text-slate-300">
              Tidak ada proyek yang cocok dengan pencarian kamu.
            </div>
          )
        ) : (
          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-xl">
            <table className="w-full min-w-[700px] text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-slate-300">
                  <th className="p-4">No</th>
                  <th className="p-4">Preview</th>
                  <th className="p-4">Judul Proyek</th>
                  <th className="p-4">Deskripsi</th>
                  <th className="p-4">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {filteredProjects.length > 0 ? (
                  filteredProjects.map((project, index) => (
                    <tr key={project.id || project.title} className="border-b border-white/5 text-sm text-slate-200 transition hover:bg-white/5">
                      <td className="p-4">{index + 1}</td>
                      <td className="p-4">
                        <ProjectVisual
                          src={resolveProjectImage(project)}
                          alt={project.title || 'Preview project'}
                          className="h-14 w-24 rounded-lg object-cover"
                          compact
                        />
                      </td>
                      <td className="p-4 font-semibold text-cyan-200">{project.title}</td>
                      <td className="p-4 text-slate-300">
                        <p className="line-clamp-2">{project.description}</p>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => navigate(`/projects/${project.id}`)}
                            className="inline-flex h-9 min-w-[76px] items-center justify-center rounded-lg border border-white/15 bg-white/5 px-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10"
                          >
                            Detail
                          </button>
                          <button
                            onClick={() => openEditModal(project)}
                            className="inline-flex h-9 min-w-[76px] items-center justify-center rounded-lg bg-sky-400 px-3 text-sm font-semibold text-slate-900 transition hover:bg-sky-300"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteProject(project.id)}
                            className="inline-flex h-9 min-w-[76px] items-center justify-center rounded-lg bg-rose-500 px-3 text-sm font-semibold text-white transition hover:bg-rose-400"
                          >
                            Hapus
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="p-8 text-center text-slate-400">
                      Tidak ada proyek yang cocok dengan pencarian kamu.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </main>

      {/* --- POP-UP (MODAL) FORM TAMBAH PROYEK --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/70 px-4 py-6 backdrop-blur-sm">
          <div className="w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-2xl border border-white/15 bg-slate-900/95 p-6 text-slate-100 shadow-2xl shadow-black/30">
            <h3 className="mb-4 text-xl font-bold text-white">
              {isEditMode ? 'Edit Proyek' : 'Tambah Proyek Baru'}
            </h3>
            
            <form onSubmit={isEditMode ? handleUpdateProject : handleAddProject}>
              <div className="mb-4">
                <label className="mb-2 block font-semibold">Judul Proyek</label>
                <input 
                  type="text" 
                  className="w-full rounded-xl border border-white/20 bg-slate-950/80 p-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="Misal: NLP Klasifikasi Bencana"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required 
                />
              </div>

              <div className="mb-4">
                <label className="mb-2 block font-semibold">Deskripsi</label>
                <textarea 
                  className="w-full rounded-xl border border-white/20 bg-slate-950/80 p-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  rows="4"
                  placeholder="Ceritakan sedikit tentang proyek ini..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required 
                ></textarea>
              </div>

              <div className="mb-2">
                <label className="mb-2 block font-semibold">Foto Project (Opsional)</label>
                <input
                  id="project-image-file"
                  type="file"
                  accept="image/*"
                  onChange={handleImageFileChange}
                  className="hidden"
                />
                <label
                  htmlFor="project-image-file"
                  className="inline-flex cursor-pointer items-center justify-center rounded-xl border border-white/20 bg-slate-950/80 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/60 hover:text-cyan-200"
                >
                  Pilih Gambar Dari Folder
                </label>
                <p className="mt-2 text-xs text-slate-400">
                  {selectedImageName ? `File terpilih: ${selectedImageName}` : 'Belum ada file dipilih.'}
                </p>
                <p className="mt-1 text-[11px] text-slate-500">
                  Simpan file gambar di folder public/project-photos agar path otomatis bisa diakses.
                </p>
              </div>

              {(imagePreview || image) && (
                <div className="mb-4 overflow-hidden rounded-xl border border-white/10 bg-slate-950/60 p-2">
                  <ProjectVisual
                    key={imagePreview || image}
                    src={imagePreview || image}
                    alt="Preview foto project"
                    className="h-36 w-full rounded-lg object-cover"
                  />
                </div>
              )}

              <div className="mb-2">
                <label className="mb-2 block font-semibold">Tag Teknologi (Opsional)</label>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {techOptions.map((option) => {
                    const OptionIcon = option.icon;
                    const isActive = selectedTechTags.includes(option.name);

                    return (
                      <button
                        key={option.name}
                        type="button"
                        onClick={() => toggleTechTag(option.name)}
                        className={`inline-flex items-center justify-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-semibold transition ${
                          isActive
                            ? 'border-cyan-300/70 bg-cyan-500/20 text-cyan-100'
                            : 'border-white/20 bg-slate-950/80 text-slate-200 hover:border-cyan-300/60 hover:text-cyan-200'
                        }`}
                      >
                        <OptionIcon className="text-[12px]" />
                        {option.name}
                      </button>
                    );
                  })}
                </div>
                <p className="mt-1 text-[11px] text-slate-500">Klik tombol untuk pilih/hapus tag, lalu tag akan tampil sebagai badge di card.</p>
              </div>

              {selectedTechTags.length > 0 && (
                <div className="mb-4 flex flex-wrap gap-2 rounded-xl border border-white/10 bg-slate-950/60 p-3">
                  {selectedTechTags.slice(0, 6).map((tag) => {
                    const TagIcon = getBadgeIcon(tag);

                    return (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 rounded-full border border-cyan-300/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium tracking-wide text-cyan-100"
                      >
                        <TagIcon className="text-[11px]" />
                        {tag}
                      </span>
                    );
                  })}
                </div>
              )}

              <div className="flex justify-end mt-6 space-x-3">
                <button 
                  type="button" 
                  onClick={closeModal}
                  className="rounded-lg bg-slate-200/10 px-4 py-2 text-slate-200 transition hover:bg-slate-200/20"
                >
                  Batal
                </button>
                <button 
                  type="submit" 
                  className="rounded-lg bg-sky-400 px-4 py-2 font-bold text-slate-900 transition hover:bg-sky-300"
                >
                  {isEditMode ? 'Update Proyek' : 'Simpan Proyek'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}