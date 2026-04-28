import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SmoothScroll from "@/components/SmoothScroll";
import { projects } from "@/data/projects";
import {
  ArrowLeft,
  ExternalLink,
  GitHub,
  FileText,
  Calendar,
  User,
  Building,
  Clock,
  Layers,
  Network,
  ShieldCheck,
  Globe,
  Zap,
  Cpu,
  Code,
  Box,
  Sparkles,
  TechIcon,
} from "@/components/icons";

const ACCENT = "#8b5cf6";

type ArchiveProjectPageProps = {
  params: Promise<{ project: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ project: project.slug }));
}

const StatIcon = ({ index }: { index: number }) => {
  const icons = [Layers, Network, ShieldCheck, Globe, Zap, Cpu, Code, Box];
  const Icon = icons[index % icons.length];
  return <Icon size={20} style={{ color: ACCENT }} />;
};

const linkIconFor = (label: string) => {
  const l = label.toLowerCase();
  if (l.includes("github") || l.includes("source")) return <GitHub size={14} />;
  if (l.includes("paper") || l.includes("doc") || l.includes("note")) return <FileText size={14} />;
  return <ExternalLink size={14} />;
};

export default async function ArchiveProjectPage({ params }: ArchiveProjectPageProps) {
  const { project: projectSlug } = await params;
  const project = projects.find((item) => item.slug === projectSlug);

  if (!project) {
    notFound();
  }

  const moreProjects = projects.filter((item) => item.slug !== project.slug);

  return (
    <main className="min-h-screen bg-[#0a0c14] text-white">
      <SmoothScroll />
      <div className="relative bg-[radial-gradient(circle_at_15%_15%,rgba(139,92,246,0.18),transparent_45%),radial-gradient(circle_at_85%_5%,rgba(139,92,246,0.08),transparent_45%)]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 pt-10 md:pt-14">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-white/55 hover:text-white transition-colors"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-0.5">
              <ArrowLeft size={14} />
            </span>
            BACK TO HOME
          </Link>
        </div>

        <header className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 pt-10 md:pt-16 pb-10 md:pb-14">
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className="font-mono text-[10px] tracking-[0.32em] text-white/45">
              / ARCHIVE / {project.slug.toUpperCase()}
            </span>
            <span className="h-px flex-1 bg-white/12 min-w-8" />
            <span
              className="font-mono text-[10px] tracking-[0.22em] px-2.5 py-1 rounded-full border"
              style={{ color: ACCENT, borderColor: `${ACCENT}55`, background: `${ACCENT}12` }}
            >
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            <div
              className="relative shrink-0 h-12 w-12 md:h-16 md:w-16 rounded-2xl border border-white/12 bg-white/[0.04] backdrop-blur-md overflow-hidden flex items-center justify-center p-2 md:p-2.5"
              style={{ boxShadow: `0 0 0 1px ${ACCENT}18, 0 8px 24px -10px ${ACCENT}55` }}
            >
              <Image
                src={project.logo}
                alt={`${project.title} logo`}
                fill
                sizes="64px"
                className="object-contain p-2"
              />
            </div>
            <h1
              className="font-black tracking-tighter leading-[0.95]"
              style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)", letterSpacing: "-0.035em" }}
            >
              {project.title}
            </h1>
          </div>

          <p className="mt-5 md:mt-6 max-w-2xl text-base md:text-lg text-white/72 leading-relaxed">
            {project.description}
          </p>

          {/* Tech icon row - quick visual scan */}
          <div className="mt-6 md:mt-7 flex flex-wrap items-center gap-2.5 md:gap-3">
            <span className="font-mono text-[9px] tracking-[0.28em] uppercase text-white/35">
              Built with
            </span>
            <div className="flex items-center gap-1.5 md:gap-2 flex-wrap">
              {project.tech.slice(0, 7).map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center justify-center rounded-md p-1 ring-1 ring-white/10 bg-white/[0.04]"
                  title={t}
                >
                  <TechIcon name={t} size={16} />
                </span>
              ))}
              {project.tech.length > 7 && (
                <span className="font-mono text-[10px] text-white/45">
                  +{project.tech.length - 7}
                </span>
              )}
            </div>
          </div>

          {/* Action links - icon-led */}
          <div className="mt-7 md:mt-8 flex flex-wrap gap-2.5">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-[11px] font-mono tracking-[0.18em] uppercase transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: link.primary ? `${ACCENT}1a` : "rgba(255,255,255,0.04)",
                  border: `1px solid ${link.primary ? `${ACCENT}66` : "rgba(255,255,255,0.12)"}`,
                  color: link.primary ? "#ede9fe" : "rgba(255,255,255,0.85)",
                  boxShadow: link.primary ? `0 8px 24px -10px ${ACCENT}66` : "none",
                }}
              >
                <span className="opacity-80 group-hover:opacity-100 transition-opacity">
                  {linkIconFor(link.label)}
                </span>
                <span>{link.label}</span>
              </a>
            ))}
          </div>

          {/* Compact meta strip with icons */}
          <dl className="mt-10 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-5 border-t border-white/10 pt-6 md:pt-7">
            {[
              { icon: <Building size={13} />, label: "CLIENT", value: project.client },
              { icon: <User size={13} />, label: "ROLE", value: project.role },
              { icon: <Clock size={13} />, label: "TIMELINE", value: project.timeline },
              { icon: <Calendar size={13} />, label: "YEAR", value: project.year },
            ].map((m) => (
              <div key={m.label} className="min-w-0">
                <dt className="flex items-center gap-1.5 font-mono text-[10px] tracking-[0.22em] text-white/45">
                  <span style={{ color: `${ACCENT}cc` }}>{m.icon}</span>
                  {m.label}
                </dt>
                <dd className="mt-1.5 text-sm md:text-[15px] text-white/85 leading-snug">
                  {m.value}
                </dd>
              </div>
            ))}
          </dl>
        </header>

        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 pb-12 md:pb-16">
          <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 bg-white/[0.02]">
            <Image
              src={project.image}
              alt={project.title}
              width={1600}
              height={1000}
              className="w-full h-auto object-cover"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0c14]/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      {/* Highlights — visual stat cards with icons */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16">
          <div className="flex items-baseline gap-3 mb-7 md:mb-9">
            <span className="font-mono text-xs tracking-[0.28em]" style={{ color: ACCENT }}>
              <Sparkles size={14} className="inline-block mr-2 -translate-y-px" />
              HIGHLIGHTS
            </span>
            <span className="h-px flex-1 bg-white/12" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {project.highlights.map((h, idx) => (
              <div
                key={`${h.label}-${idx}`}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.025] p-5 md:p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20"
              >
                <div
                  className="inline-flex items-center justify-center h-9 w-9 rounded-xl mb-4 transition-colors duration-300"
                  style={{
                    background: `${ACCENT}14`,
                    border: `1px solid ${ACCENT}33`,
                  }}
                >
                  <StatIcon index={idx} />
                </div>
                <p
                  className="text-2xl md:text-3xl font-bold tracking-tight leading-none"
                  style={{ color: "rgba(255,255,255,0.95)" }}
                >
                  {h.value}
                </p>
                <p className="mt-2 text-xs md:text-sm text-white/55 leading-snug">
                  {h.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-14 md:py-20">
        <div className="grid lg:grid-cols-[1fr_300px] gap-10 lg:gap-16 items-start">
          <div>
            <div className="flex items-baseline gap-3 mb-5">
              <span className="font-mono text-xs tracking-[0.28em]" style={{ color: ACCENT }}>
                / CONTEXT
              </span>
              <span className="h-px flex-1 bg-white/12" />
            </div>
            <p className="text-lg md:text-xl leading-relaxed text-white/82 max-w-2xl">
              {project.context}
            </p>

            <div className="mt-12 md:mt-16">
              <div className="flex items-baseline gap-3 mb-7">
                <span className="font-mono text-xs tracking-[0.28em]" style={{ color: ACCENT }}>
                  / THE STORY
                </span>
                <span className="h-px flex-1 bg-white/12" />
              </div>
              <div className="space-y-8 md:space-y-10">
                {project.story.map((chapter, idx) => (
                  <article
                    key={chapter.title}
                    className="grid grid-cols-[60px_1fr] md:grid-cols-[80px_1fr] gap-5 md:gap-8"
                  >
                    <div>
                      <div
                        className="inline-flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full font-mono text-xs tabular-nums"
                        style={{
                          color: ACCENT,
                          border: `1px solid ${ACCENT}55`,
                          background: `${ACCENT}10`,
                        }}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white">
                        {chapter.title}
                      </h3>
                      <p className="mt-3 text-[15px] md:text-base text-white/72 leading-[1.7] max-w-2xl">
                        {chapter.body}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/[0.025] backdrop-blur-md p-5 md:p-6">
              <p className="flex items-center gap-2 font-mono text-[10px] tracking-[0.28em] text-white/55 mb-4">
                <Code size={13} style={{ color: ACCENT }} />
                STACK
              </p>
              <div className="flex flex-col gap-2">
                {project.tech.map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center gap-2.5 text-[12px] text-white/85"
                  >
                    <span className="inline-flex items-center justify-center rounded-md p-1 ring-1 ring-white/10 bg-white/[0.03]">
                      <TechIcon name={tech} size={14} />
                    </span>
                    <span className="font-mono tracking-wide">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.025] backdrop-blur-md p-5 md:p-6">
              <p className="flex items-center gap-2 font-mono text-[10px] tracking-[0.28em] text-white/55 mb-4">
                <ExternalLink size={13} style={{ color: ACCENT }} />
                LINKS
              </p>
              <div className="flex flex-col gap-2">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-2 rounded-lg px-3 py-2 transition-colors"
                    style={{
                      background: link.primary ? `${ACCENT}14` : "transparent",
                      border: `1px solid ${link.primary ? `${ACCENT}55` : "rgba(255,255,255,0.1)"}`,
                      color: link.primary ? "#ede9fe" : "rgba(255,255,255,0.85)",
                    }}
                  >
                    <span className="flex items-center gap-2">
                      <span style={{ color: link.primary ? ACCENT : "rgba(255,255,255,0.55)" }}>
                        {linkIconFor(link.label)}
                      </span>
                      <span className="font-mono text-[11px] tracking-wide">
                        {link.label}
                      </span>
                    </span>
                    <span
                      aria-hidden
                      className="opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200"
                    >
                      →
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-14 md:py-20">
        <div className="flex items-baseline gap-3 mb-8 md:mb-10">
          <span className="font-mono text-xs tracking-[0.28em]" style={{ color: ACCENT }}>
            / GALLERY
          </span>
          <span className="h-px flex-1 bg-white/12" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
          {project.gallery.map((src, idx) => (
            <div
              key={`${src}-${idx}`}
              className={`relative overflow-hidden rounded-2xl border border-white/10 ${
                idx === 0 ? "md:col-span-2 md:row-span-2 aspect-[16/10]" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={src}
                alt={`${project.title} gallery ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-14 md:py-20">
          <div className="flex items-baseline gap-3 mb-8">
            <span className="font-mono text-xs tracking-[0.28em]" style={{ color: ACCENT }}>
              / MORE WORK
            </span>
            <span className="h-px flex-1 bg-white/12" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
            {moreProjects.map((item) => (
              <Link
                key={item.slug}
                href={`/archive/${item.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] aspect-[16/10] transition-all duration-300 hover:-translate-y-1 hover:border-white/30"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c14]/85 via-[#0a0c14]/30 to-transparent" />
                <div className="absolute inset-x-5 bottom-5">
                  <p className="font-mono text-[10px] tracking-[0.22em] text-white/55 mb-1">
                    {item.category}
                  </p>
                  <p className="text-lg md:text-xl font-semibold tracking-tight text-white">
                    {item.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-8 md:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-white/55 hover:text-white transition-colors"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-0.5">
              <ArrowLeft size={14} />
            </span>
            BACK TO HOME
          </Link>
          <p className="font-mono text-[11px] text-white/35 tracking-wider">
            ANJALI JHA · {project.year} · {project.client}
          </p>
        </div>
      </footer>
    </main>
  );
}
