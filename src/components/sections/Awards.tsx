"use client";

import { useState } from "react";
import { Plus } from "@/components/icons";
import { useScrollReveal } from "@/lib/useScrollReveal";

const ACCENT = "#8b5cf6";

const awards = [
  {
    year: "2025",
    title: "Google Summer of Code",
    org: "AOSSIE",
    description:
      "Selected among global developers to contribute to open-source decentralized systems. Developed Fate Protocol EVM Frontend, a decentralized prediction market built with Next.js, TypeScript, and Ethers.js.",
  },
  {
    year: "2025",
    title: "ETC Nova Hackathon Winner",
    org: "Global",
    description:
      "Recognized for innovation in blockchain user experience and smart contract design. Built a decentralized application showcasing advanced Web3 integration and user-friendly interface design.",
  },
  {
    year: "2025",
    title: "Research Publication",
    org: "ISW",
    description:
      "Paper on Fate Protocol accepted at International Stability Workshop (peer-reviewed). Contributed research on decentralized prediction markets and blockchain infrastructure.",
  },
  {
    year: "2024",
    title: "Winner of MSME Idea Hackathon 3.0 (Women)",
    org: "MY MSME",
    description:
      "Team 'Kridin' won the MSME Idea Hackathon 3.0 (Women) with an innovative platform where sport players can mint NFTs to raise crowdfunding, stream live events and stories to build trust, and allow fractional NFT holders to own a part of the player's journey, with value growing as the player progresses. Received funding and incubation support under the MSME Innovative Scheme.",
  },
  {
    year: "2024",
    title: "Hackoverflow 2nd Place",
    org: "CV Competition",
    description:
      "Achieved 2nd place in content-based image processing and computer vision competition. Demonstrated expertise in image analysis algorithms and pattern recognition.",
  },
];

export default function Awards() {
  const containerRef = useScrollReveal<HTMLElement>({ y: 24, stagger: 0.05 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleAward = (index: number) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section
      id="awards"
      ref={containerRef}
      className="py-32 md:py-40 px-4 sm:px-8 md:px-16 lg:px-24 bg-[radial-gradient(circle_at_15%_20%,rgba(139,92,246,0.06),transparent_42%),linear-gradient(180deg,#0a0c14_0%,#0a0c14_100%)] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-baseline gap-4 mb-20 md:mb-24 px-2 sm:px-0" data-reveal>
          <span className="font-mono text-sm text-white/45">007</span>
          <h2 className="text-sm font-mono tracking-widest text-white/45">RECOGNITION</h2>
          <div className="flex-1 h-px bg-white/15" />
        </div>

        <div className="space-y-0 overflow-x-hidden border-t border-white/10">
          {awards.map((award, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                data-reveal
                className="border-b border-white/10 hover:bg-white/[0.025] transition-all duration-300"
              >
                <div
                  onClick={() => toggleAward(i)}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 md:gap-8 lg:gap-12 py-7 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 hover:pl-6 sm:hover:pl-8 transition-all duration-300 cursor-pointer"
                >
                  <span className="font-mono text-sm text-white/45 w-16 sm:w-20 shrink-0">
                    {award.year}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white break-words tracking-tight">
                      {award.title}
                    </h3>
                    <span className="font-mono text-xs text-white/45 sm:hidden mt-1 block">
                      {award.org}
                    </span>
                  </div>
                  <span className="font-mono text-xs sm:text-sm text-white/55 shrink-0 hidden sm:inline">
                    {award.org}
                  </span>
                  <div
                    className={`w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center shrink-0 transition-all duration-300 rounded-full border ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    style={{
                      borderColor: isOpen ? `${ACCENT}88` : "rgba(255,255,255,0.2)",
                      color: isOpen ? "#ede9fe" : "rgba(255,255,255,0.7)",
                    }}
                  >
                    <Plus />
                  </div>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-4 sm:px-6 pb-8 sm:pb-10 md:pb-12 pt-2">
                    <div className="pl-0 sm:pl-20 md:pl-24 lg:pl-28">
                      <p className="text-white/72 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl break-words">
                        {award.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
