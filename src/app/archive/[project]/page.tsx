import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

const ACCENT = "#8b5cf6";

type ArchiveProjectPageProps = {
  params: Promise<{ project: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ project: project.slug }));
}

export default async function ArchiveProjectPage({ params }: ArchiveProjectPageProps) {
  const { project: projectSlug } = await params;
  const project = projects.find((item) => item.slug === projectSlug);

  if (!project) {
    notFound();
  }

  const moreProjects = projects.filter((item) => item.slug !== project.slug);

  return (
    <main className="min-h-screen bg-[#0a0c14] text-white">
      <div className="relative bg-[radial-gradient(circle_at_15%_15%,rgba(139,92,246,0.18),transparent_45%),radial-gradient(circle_at_85%_5%,rgba(139,92,246,0.08),transparent_45%)]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 pt-10 md:pt-14">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-white/55 hover:text-white transition-colors"
          >
            <span aria-hidden>&larr;</span> BACK TO HOME
          </Link>
        </div>

        <header className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 pt-12 md:pt-20 pb-12 md:pb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-[10px] tracking-[0.32em] text-white/45">
              / ARCHIVE / {project.slug.toUpperCase()}
            </span>
            <span className="h-px flex-1 bg-white/12" />
            <span
              className="font-mono text-[10px] tracking-[0.22em] px-2.5 py-1 rounded-full border"
              style={{ color: ACCENT, borderColor: `${ACCENT}55`, background: `${ACCENT}12` }}
            >
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-5 md:gap-7">
            <div
              className="relative shrink-0 h-14 w-14 md:h-20 md:w-20 rounded-2xl border border-white/12 bg-white/[0.04] backdrop-blur-md overflow-hidden flex items-center justify-center p-2 md:p-3"
              style={{ boxShadow: `0 0 0 1px ${ACCENT}18, 0 8px 24px -10px ${ACCENT}55` }}
            >
              <Image
                src={project.logo}
                alt={`${project.title} logo`}
                fill
                sizes="80px"
                className="object-contain p-2 md:p-2.5"
              />
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95]">
              {project.title}
            </h1>
          </div>
          <p className="mt-6 max-w-3xl text-lg md:text-xl text-white/72 leading-relaxed">
            {project.description}
          </p>

          <dl className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 border-t border-white/10 pt-8">
            <div>
              <dt className="font-mono text-[10px] tracking-[0.22em] text-white/45">CLIENT</dt>
              <dd className="mt-2 text-sm md:text-base text-white/85">{project.client}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] tracking-[0.22em] text-white/45">ROLE</dt>
              <dd className="mt-2 text-sm md:text-base text-white/85">{project.role}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] tracking-[0.22em] text-white/45">TIMELINE</dt>
              <dd className="mt-2 text-sm md:text-base text-white/85">{project.timeline}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] tracking-[0.22em] text-white/45">YEAR</dt>
              <dd className="mt-2 text-sm md:text-base text-white/85">{project.year}</dd>
            </div>
          </dl>
        </header>

        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 pb-16 md:pb-20">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]">
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

      <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="grid lg:grid-cols-[1fr_320px] gap-12 lg:gap-20 items-start">
          <div>
            <p className="font-mono text-xs tracking-[0.28em] mb-4" style={{ color: ACCENT }}>
              / CONTEXT
            </p>
            <p className="text-xl md:text-2xl leading-relaxed text-white/82 max-w-2xl">
              {project.context}
            </p>

            <div className="mt-16 space-y-12">
              {project.story.map((chapter, idx) => (
                <article key={chapter.title} className="grid grid-cols-[80px_1fr] gap-6 md:gap-10">
                  <div>
                    <span className="font-mono text-xs text-white/40 tracking-[0.2em]">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="mt-3 block h-px w-10"
                      style={{ background: `${ACCENT}99` }}
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
                      {chapter.title}
                    </h3>
                    <p className="mt-4 text-base md:text-lg text-white/72 leading-relaxed max-w-2xl">
                      {chapter.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6">
              <p className="font-mono text-[10px] tracking-[0.28em] text-white/45 mb-4">/ STACK</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[11px] tracking-wider px-2.5 py-1 rounded-full border border-white/15 bg-white/[0.04] text-white/75"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6">
              <p className="font-mono text-[10px] tracking-[0.28em] text-white/45 mb-4">/ LINKS</p>
              <div className="flex flex-col gap-2">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-2 rounded-lg px-3 py-2.5 transition-colors"
                    style={{
                      background: link.primary ? `${ACCENT}14` : "transparent",
                      border: `1px solid ${link.primary ? `${ACCENT}55` : "rgba(255,255,255,0.1)"}`,
                      color: link.primary ? "#ede9fe" : "rgba(255,255,255,0.85)",
                    }}
                  >
                    <span className="font-mono text-[11px] tracking-wider">{link.label}</span>
                    <span aria-hidden className="opacity-60 group-hover:opacity-100 transition-opacity">
                      -&gt;
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
          <p className="font-mono text-xs tracking-[0.28em] text-white/45 mb-8">/ HIGHLIGHTS</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {project.highlights.map((h, idx) => (
              <div
                key={`${h.label}-${idx}`}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-0.5"
                style={{ boxShadow: `0 0 0 transparent` }}
              >
                <p
                  className="text-3xl md:text-4xl font-bold tracking-tight"
                  style={{ color: ACCENT }}
                >
                  {h.value}
                </p>
                <p className="mt-2 text-sm text-white/60 leading-snug">{h.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="flex items-baseline gap-4 mb-10">
          <span className="font-mono text-xs tracking-[0.28em] text-white/45">/ GALLERY</span>
          <span className="h-px flex-1 bg-white/12" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
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
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="font-mono text-xs tracking-[0.28em] text-white/45">/ MORE WORK</span>
            <span className="h-px flex-1 bg-white/12" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
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
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-white/55 hover:text-white transition-colors"
          >
            <span aria-hidden>&larr;</span> BACK TO HOME
          </Link>
          <p className="font-mono text-[11px] text-white/35 tracking-wider">
            ANJALI JHA - {project.year} - {project.client}
          </p>
        </div>
      </footer>
    </main>
  );
}
