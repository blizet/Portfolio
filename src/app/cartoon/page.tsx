"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { basePath } from "@/lib/basePath";
import { projects } from "@/data/projects";
import {
  AIChip,
  BookStack,
  CoffeeMug,
  Heart,
  Mithila,
  Pencil,
  Plant,
  Ribbon,
  Sparkle,
  SwirlArrow,
  Tablet,
} from "./Cliparts";

const LearningCurve = dynamic(() => import("./LearningCurve"), {
  ssr: false,
  loading: () => (
    <div className="h-[280px] flex items-center justify-center font-hand text-2xl text-amber-900/60">
      sketching the curve…
    </div>
  ),
});

const Notebook = dynamic(() => import("./Notebook"), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] flex items-center justify-center font-hand text-2xl text-amber-900/60">
      cracking open the notebook…
    </div>
  ),
});

const DeskScene = dynamic(() => import("./DeskScene"), {
  ssr: false,
  loading: () => (
    <div className="h-[420px] flex items-center justify-center font-hand text-2xl text-amber-900/60">
      arranging the desk…
    </div>
  ),
});

const tagline = "tech · art · purpose";
const oneLiner = "engineer by degree, problem-solver by nature.";

const stickerColors = ["peach", "mint", "blush", "lilac", "lemon"] as const;

function MobileFallback() {
  return (
    <main className="cartoon-paper min-h-screen text-amber-950 flex items-center justify-center px-6">
      <div
        className="relative max-w-md text-center bg-[#fffaf0] border-2 border-amber-900/30 rounded-3xl px-7 py-9"
        style={{
          boxShadow:
            "8px 10px 0 rgba(63,29,18,0.18), inset 0 0 0 1px rgba(120,53,15,0.15)",
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent 0, transparent 27px, rgba(146,64,14,0.10) 27px, rgba(146,64,14,0.10) 28px)",
        }}
      >
        <span className="sticker-tape" style={{ top: -14, left: "30%" }} />
        <span
          className="sticker-tape"
          style={{ top: -14, left: "70%", transform: "translateX(-50%) rotate(6deg)" }}
        />
        <p className="font-marker text-[11px] tracking-[0.22em] uppercase text-amber-900/70 mb-2">
          psst, desktop only
        </p>
        <h1 className="font-hand text-4xl text-amber-950 leading-tight mb-3">
          this little notebook is best on a bigger screen
        </h1>
        <p className="font-marker text-base text-amber-900/80 leading-snug mb-6">
          there&apos;s a hand-drawn desk, a roller-coaster of a learning curve,
          and a lot of stickers in here. they need a little more room to breathe.
        </p>
        <Link
          href="/"
          className="sticker peach inline-flex items-center gap-2 font-marker text-base px-5 py-2.5 rounded-full"
        >
          ← back to portfolio
        </Link>
      </div>
    </main>
  );
}

export default function CartoonPage() {
  const featured = projects.slice(0, 5);

  return (
    <>
      {/* Mobile fallback (< md). The full cartoon experience is hidden below. */}
      <div className="md:hidden">
        <MobileFallback />
      </div>

      <main className="hidden md:block cartoon-paper min-h-screen text-amber-950 overflow-hidden">
      {/* TOP BAR */}
      <header className="relative max-w-6xl mx-auto px-5 md:px-10 pt-8 md:pt-10 pb-4 flex items-center justify-between z-10">
        <Link
          href="/"
          className="font-marker text-sm md:text-base inline-flex items-center gap-2 px-3 py-2 rounded-full border border-amber-900/25 bg-[#fff8e7] hover:-translate-y-0.5 transition-transform"
        >
          <span aria-hidden>←</span> back to premium
        </Link>
        <span className="font-hand text-2xl md:text-3xl text-amber-900/80 inline-flex items-center gap-2">
          anjali&apos;s notebook
          <Heart size={18} className="heart-pulse" />
        </span>
      </header>

      {/* HERO — collage scene */}
      <section className="relative max-w-6xl mx-auto px-5 md:px-10 pt-2 md:pt-4 pb-10 md:pb-16 z-0">
        {/* Top-left corner ribbon */}
        <div className="hidden md:flex absolute top-2 left-8 flex-col gap-1 items-start">
          <Ribbon text="engineer by degree" />
          <Ribbon text="problem solver by nature" style={{ transform: "rotate(2deg)" }} />
        </div>

        {/* Floating cliparts — left */}
        <div className="hidden lg:block absolute -left-2 top-32 drift-a hoverable">
          <AIChip size={104} />
        </div>
        <div className="hidden lg:block absolute left-2 bottom-6 drift-b hoverable">
          <BookStack size={150} />
        </div>

        {/* Floating cliparts — right */}
        <div className="hidden md:block absolute right-2 md:right-6 top-12 drift-b hoverable">
          <Plant size={110} />
        </div>
        <div className="hidden lg:block absolute right-6 bottom-10 hoverable">
          <Tablet size={150} className="drift-a" />
        </div>

        <div className="grid md:grid-cols-[minmax(220px,360px)_1fr] gap-8 md:gap-12 items-center relative">
          {/* avatar — pinned with washi tape */}
          <div className="relative mx-auto md:mx-0 max-w-[300px] md:max-w-none float-soft">
            <span className="sticker-tape" style={{ top: "-8px", left: "30%" }} />
            <span
              className="sticker-tape"
              style={{ top: "-6px", left: "70%", transform: "translateX(-50%) rotate(6deg)" }}
            />
            <div className="relative aspect-[3/4] w-full">
              <Image
                src={`${basePath}/cartoon/avatar.png`}
                alt="Anjali — illustrated"
                fill
                priority
                className="object-contain drop-shadow-[0_18px_28px_rgba(120,53,15,0.25)]"
              />
            </div>

            {/* small sparkles around avatar */}
            <Sparkle className="absolute -top-3 -right-2 wiggle-slow" size={22} />
            <Sparkle className="absolute top-1/2 -left-3 float-soft" size={18} />
            <Heart className="absolute -bottom-1 right-4 heart-pulse" size={18} />
          </div>

          {/* intro */}
          <div className="relative">
            <p className="font-marker text-sm md:text-base tracking-[0.18em] uppercase text-amber-900/70 mb-3">
              hi, i&apos;m
            </p>
            <h1
              className="font-hand text-amber-950 leading-[0.95] relative inline-block"
              style={{ fontSize: "clamp(3.6rem, 9vw, 6.5rem)" }}
            >
              <span className="doodle-underline">Anjali Jha</span>
              <span
                className="absolute -top-3 -right-7 hidden md:inline-block"
                aria-hidden
              >
                <Sparkle size={26} className="wiggle-slow" />
              </span>
            </h1>

            <p className="font-marker text-xl md:text-2xl mt-5 max-w-xl text-amber-900/85">
              {oneLiner}
            </p>

            {/* quote bubble */}
            <div
              className="mt-5 inline-block max-w-md px-4 py-2 bg-[#fff8e7] border border-amber-900/20 rounded-2xl font-hand text-xl md:text-2xl text-amber-900/85"
              style={{ transform: "rotate(-1deg)", boxShadow: "3px 3px 0 rgba(63,29,18,0.18)" }}
            >
              &ldquo;building the future, designing the present, inspiring always.&rdquo;
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              {[
                { label: "engineer", color: "lemon" },
                { label: "designer", color: "blush" },
                { label: "open source", color: "mint" },
                { label: "web3 + ai", color: "lilac" },
              ].map((chip, i) => (
                <span
                  key={chip.label}
                  className={`sticker ${chip.color} font-marker px-3.5 py-1.5 rounded-full text-sm md:text-[15px]`}
                  style={{ transform: `rotate(${i % 2 === 0 ? -1.5 : 1.5}deg)` }}
                >
                  {chip.label}
                </span>
              ))}
            </div>

            <p className="mt-7 font-hand text-3xl text-amber-900/85 inline-flex items-center gap-2">
              {tagline}{" "}
              <span className="text-amber-700">— that&apos;s the plan.</span>
              <Heart size={22} className="heart-pulse" />
            </p>
          </div>
        </div>

        {/* Doodle stars sprinkled */}
        <Sparkle className="absolute top-6 left-1/3 wiggle-slow" size={20} />
        <Sparkle className="absolute top-1/2 right-1/4 float-soft" size={18} />
      </section>

      {/* LEARNING CURVE — roller coaster */}
      <section className="relative max-w-6xl mx-auto px-5 md:px-10 py-10 md:py-14">
        <div className="flex items-end justify-between mb-3 md:mb-5 flex-wrap gap-3">
          <div>
            <h2 className="font-hand text-4xl md:text-6xl">my learning curve</h2>
            <p className="font-marker text-sm md:text-base text-amber-900/65 mt-1">
              not a straight line. a coaster. all the way to the top.
            </p>
          </div>
          <SwirlArrow className="hidden md:block opacity-70" size={140} />
        </div>

        <div className="relative cartoon-grid-lines rounded-2xl border border-amber-900/15 bg-[#fdf6e3]/50 px-2 md:px-6 py-6 md:py-8 overflow-hidden">
          {/* corner cliparts */}
          <Plant size={70} className="absolute -top-3 -right-2 sway pointer-events-none" />
          <CoffeeMug size={64} className="absolute -bottom-2 -left-2 float-soft pointer-events-none" />
          <LearningCurve />
        </div>
      </section>

      {/* PROJECTS — sticker stack */}
      <section className="relative max-w-6xl mx-auto px-5 md:px-10 py-12 md:py-16">
        <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
          <h2 className="font-hand text-4xl md:text-6xl inline-flex items-center gap-3">
            things i made
            <Pencil size={70} className="hidden md:inline-block wiggle-slow" />
          </h2>
          <Link
            href="/"
            className="font-marker text-sm md:text-base text-amber-900/70 hover:text-amber-900 underline-offset-4 hover:underline"
          >
            full archive on the premium side →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6">
          {featured.map((p, i) => {
            const color = stickerColors[i % stickerColors.length];
            const tilt = (i % 2 === 0 ? -1 : 1) * (1 + (i % 3) * 0.5);
            return (
              <Link
                key={p.id}
                href={`/archive/${p.slug}`}
                className={`sticker ${color} block rounded-2xl p-4 pb-5 hoverable`}
                style={{ transform: `rotate(${tilt}deg)` }}
              >
                <span className="sticker-tape" />
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-amber-50/60 mb-3 border border-amber-900/10">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 20vw"
                    loading="lazy"
                    className="object-cover"
                    style={{ filter: "saturate(1.05) contrast(1.02)" }}
                  />
                </div>
                <p className="font-hand text-2xl leading-tight">{p.title.toLowerCase()}</p>
                <p className="mt-1 font-marker text-[12px] text-amber-900/65 leading-snug line-clamp-2">
                  {p.description}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* TODAY'S PLAN — open spiral notebook + side props */}
      <section className="relative max-w-6xl mx-auto px-5 md:px-10 py-12 md:py-16">
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-12 items-center">
          {/* notebook */}
          <div className="relative">
            <Notebook />
            {/* coffee on the side */}
            <div className="absolute -bottom-6 -left-2 hidden md:block">
              <CoffeeMug size={92} className="float-soft" />
            </div>
            {/* pencil leaning on the corner */}
            <div className="absolute -top-2 right-4 hidden md:block">
              <Pencil size={120} style={{ transform: "rotate(-22deg)" }} />
            </div>
          </div>

          {/* side stack: ideas / plans / impact */}
          <aside className="relative flex flex-col gap-4 items-start lg:items-end">
            <Ribbon text="artist by heart · designing culture" />
            <div
              className="sticker peach px-5 py-4 rounded-2xl font-hand text-2xl"
              style={{ transform: "rotate(1.4deg)" }}
            >
              <span className="sticker-tape" />
              ideas <span className="text-amber-700">→</span> plans <br />
              <span className="text-amber-700">→</span> impact ✨
            </div>
            <div className="flex items-end gap-3 pt-3">
              <BookStack size={120} className="drift-a" />
              <Mithila size={92} className="hoverable" />
            </div>
            <p
              className="font-hand text-xl text-amber-900/75 max-w-xs"
              style={{ transform: "rotate(-1.2deg)" }}
            >
              i sketch culture into code. mithila prints, smart contracts, late-night
              ideas — they all share a notebook.
            </p>
          </aside>
        </div>
      </section>

      {/* MY DESK — interactive scene */}
      <section className="relative max-w-6xl mx-auto px-5 md:px-10 py-12 md:py-16">
        <div className="flex items-end justify-between mb-3 md:mb-5 flex-wrap gap-3">
          <div>
            <h2 className="font-hand text-4xl md:text-6xl">my desk</h2>
            <p className="font-marker text-sm md:text-base text-amber-900/65 mt-1">
              a peek at where most of the work happens. click anything to find
              out what it says about me.
            </p>
          </div>
          <Sparkle className="hidden md:block wiggle-slow" size={26} />
        </div>
        <DeskScene />
      </section>

      {/* CTA */}
      <section className="relative max-w-3xl mx-auto px-5 md:px-10 py-14 md:py-20 text-center">
        <Sparkle className="absolute top-2 left-8 wiggle-slow" size={26} />
        <Sparkle className="absolute top-8 right-12 float-soft" size={20} />
        <Heart className="absolute bottom-10 left-6 heart-pulse" size={26} />

        <p className="font-hand text-3xl md:text-5xl leading-tight">
          like the vibe?{" "}
          <span className="text-amber-700">say hi.</span>
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:anjalijha2k3@gmail.com"
            className="sticker peach inline-flex items-center gap-2 font-marker text-base px-5 py-2.5 rounded-full"
          >
            ✉ say hello
          </a>
          <a
            href="https://github.com/blizet"
            target="_blank"
            rel="noopener noreferrer"
            className="sticker mint inline-flex items-center gap-2 font-marker text-base px-5 py-2.5 rounded-full"
            style={{ transform: "rotate(1.5deg)" }}
          >
            ⤴ github
          </a>
          <a
            href="https://linkedin.com/in/anjali-jha-49734924a"
            target="_blank"
            rel="noopener noreferrer"
            className="sticker blush inline-flex items-center gap-2 font-marker text-base px-5 py-2.5 rounded-full"
            style={{ transform: "rotate(-1.5deg)" }}
          >
            ⌬ linkedin
          </a>
        </div>
        <p className="mt-8 font-hand text-2xl text-amber-900/70">
          tech · art · purpose · <span className="text-amber-800">that&apos;s my superpower</span>
        </p>
        <Link
          href="/"
          className="mt-10 inline-block font-marker text-sm text-amber-900/65 hover:text-amber-900 underline-offset-4 hover:underline"
        >
          ← back to the polished side
        </Link>
      </section>

      {/* footer */}
      <footer className="max-w-6xl mx-auto px-5 md:px-10 pb-10 pt-2 flex items-center justify-between">
        <span className="font-marker text-xs md:text-sm text-amber-900/60">
          anjali · {new Date().getFullYear()} · made with crayons
        </span>
        <Sparkle size={20} className="wiggle-slow" />
      </footer>
      </main>
    </>
  );
}
