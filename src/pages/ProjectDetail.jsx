import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { FaArrowLeft, FaExternalLinkAlt, FaGithub, FaImage, FaLayerGroup, FaStar } from 'react-icons/fa';
import { resolveProjectImage } from '../utils/projectImageResolver';

function getTechTags(project) {
  if (project.tech_stack) {
    return project.tech_stack
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean)
      .slice(0, 8);
  }

  const source = `${project.title || ''} ${project.description || ''}`.toLowerCase();
  const tags = [];

  if (source.includes('react')) tags.push('React JS');
  if (source.includes('laravel')) tags.push('Laravel');
  if (source.includes('tailwind')) tags.push('Tailwind CSS');
  if (source.includes('python')) tags.push('Python');
  if (source.includes('mysql')) tags.push('MySQL');
  if (source.includes('api')) tags.push('REST API');

  return tags.length ? tags : ['Web Development'];
}

function getFeatureBullets(project) {
  const sentences = (project.description || '')
    .split(/[.!?]\s+/)
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 4);

  if (sentences.length > 0) {
    return sentences.map((item) => (item.endsWith('.') ? item : `${item}.`));
  }

  return [
    'Implementasi antarmuka yang modern dan responsif.',
    'Integrasi backend API untuk sinkronisasi data proyek.',
    'Optimasi layout untuk pengalaman pengguna desktop dan mobile.',
    'Struktur komponen yang mudah dikembangkan.',
  ];
}

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

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [allProjects, setAllProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const [detailResponse, allResponse] = await Promise.all([
          axios.get(`http://127.0.0.1:8000/api/projects/${id}`),
          axios.get('http://127.0.0.1:8000/api/projects'),
        ]);

        const allPayload = Array.isArray(allResponse.data) ? allResponse.data : allResponse.data?.data;
        setAllProjects(Array.isArray(allPayload) ? allPayload : []);
        setProject(detailResponse.data?.data || null);
      } catch {
        setError('Detail proyek tidak ditemukan atau server belum aktif.');
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [id]);

  const techTags = useMemo(() => (project ? getTechTags(project) : []), [project]);
  const featureBullets = useMemo(() => (project ? getFeatureBullets(project) : []), [project]);
  const relatedProjects = useMemo(() => {
    if (!project) return [];

    return allProjects
      .filter((item) => item.id !== project.id)
      .slice(0, 3);
  }, [allProjects, project]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 px-6 py-20 text-slate-200">
        <div className="mx-auto max-w-6xl animate-pulse rounded-2xl border border-white/10 bg-slate-900/60 p-8">
          Memuat detail proyek...
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-slate-950 px-6 py-20 text-slate-200">
        <div className="mx-auto max-w-3xl rounded-2xl border border-rose-400/30 bg-rose-500/10 p-8">
          <p className="text-rose-100">{error || 'Proyek tidak ditemukan.'}</p>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="mt-5 rounded-lg bg-sky-400 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-sky-300"
          >
            Kembali ke Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute -left-32 top-16 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-indigo-500/15 blur-3xl" />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10">
          <Link to="/" className="text-sm font-black tracking-[0.12em] text-sky-300">
            THAHA
          </Link>
          <nav className="flex items-center gap-3 text-xs text-slate-300 md:text-sm">
            <Link to="/" className="transition hover:text-sky-200">Home</Link>
            <Link to="/#about" className="transition hover:text-sky-200">About</Link>
            <Link to="/#portfolio" className="transition hover:text-sky-200">Portfolio</Link>
            <Link to="/#contact" className="transition hover:text-sky-200">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="relative z-10 mx-auto w-full max-w-6xl px-6 py-10 md:px-10">
        <div className="mb-7 flex flex-wrap items-center gap-2 text-xs text-slate-400 md:text-sm">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 font-medium text-slate-200 transition hover:bg-white/10"
          >
            <FaArrowLeft className="text-[11px]" /> Back
          </button>
          <span>Projects</span>
          <span>&gt;</span>
          <span className="font-semibold text-slate-200">{project.title}</span>
        </div>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-black/30">
            <h1 className="text-3xl font-black tracking-tight text-white md:text-5xl">{project.title}</h1>

            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
              {project.description || 'Deskripsi proyek belum tersedia.'}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-sky-300/25 bg-sky-500/10 p-4">
                <p className="text-xs uppercase tracking-wide text-slate-300">Total Teknologi</p>
                <p className="mt-1 text-2xl font-bold text-sky-200">{techTags.length}</p>
              </div>
              <div className="rounded-xl border border-indigo-300/25 bg-indigo-500/10 p-4">
                <p className="text-xs uppercase tracking-wide text-slate-300">Fitur Utama</p>
                <p className="mt-1 text-2xl font-bold text-indigo-200">{featureBullets.length}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {techTags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-sky-300/25 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-100"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-2">
              {project.link_demo && (
                <a
                  href={project.link_demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-sky-400 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-sky-300"
                >
                  <FaExternalLinkAlt className="text-xs" /> Live Demo
                </a>
              )}
              {project.link_github && (
                <a
                  href={project.link_github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-white/10"
                >
                  <FaGithub className="text-sm" /> Github
                </a>
              )}
            </div>
          </article>

          <div className="space-y-5">
            <article className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-xl shadow-black/30">
              <ProjectVisual
                src={resolveProjectImage(project)}
                alt={project.title}
                className="h-56 w-full object-cover md:h-64"
              />
            </article>

            <article className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-xl shadow-black/30">
              <h2 className="mb-4 inline-flex items-center gap-2 text-base font-bold text-amber-300">
                <FaStar className="text-xs" /> Key Features
              </h2>
              <ul className="space-y-3 text-sm leading-relaxed text-slate-300">
                {featureBullets.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-sky-300" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-xl shadow-black/30">
              <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
                <FaLayerGroup className="text-xs" /> Project Info
              </p>
              <p className="mt-3 text-sm text-slate-300">ID Project: <span className="font-semibold text-slate-100">#{project.id}</span></p>
            </article>
          </div>
        </section>

        {relatedProjects.length > 0 && (
          <section className="mt-10">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-white md:text-2xl">Related Projects</h2>
              <Link to="/" className="text-sm font-medium text-sky-200 transition hover:text-sky-100">Lihat semua</Link>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((item) => (
                <article
                  key={item.id}
                  className="group flex min-h-[290px] flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1.5 hover:border-cyan-300/45"
                >
                  <ProjectVisual
                    src={resolveProjectImage(item)}
                    alt={item.title || 'Project image'}
                    className="h-40 w-full rounded-t-xl object-cover"
                  />

                  <div className="flex h-full flex-col p-4">
                    <h3 className="text-base font-bold text-white transition group-hover:text-cyan-200">{item.title}</h3>
                    <p className="mt-2 line-clamp-3 text-sm text-slate-300">{item.description || 'Deskripsi proyek belum tersedia.'}</p>

                    <button
                      type="button"
                      onClick={() => navigate(`/projects/${item.id}`)}
                      className="mt-auto inline-flex items-center justify-center gap-1 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs font-medium text-slate-200 transition hover:border-cyan-300/60 hover:text-cyan-200"
                    >
                      <FaExternalLinkAlt className="text-[10px]" />
                      Detail
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
