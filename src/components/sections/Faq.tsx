"use client";

import { useState } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { useThemeMode } from "@/lib/useThemeMode";

const ACCENT = "#8b5cf6";

const faqs = [
  {
    question: "How do I start a project with you?",
    answer:
      "Simply reach out via email. We'll schedule a consultation to discuss your project requirements, timeline, and goals. After understanding your needs, I'll provide a detailed proposal and project plan.",
    topic: "Getting Started",
    type: "FAQ",
  },
  {
    question: "What is the cost of your services?",
    answer:
      "Project costs vary based on scope, complexity, and timeline. I provide transparent pricing after understanding your specific requirements. Each project is quoted individually to ensure fair pricing.",
    topic: "Pricing",
    type: "FAQ",
  },
  {
    question: "How much time is typically needed to finish a project?",
    answer:
      "Project timelines depend on the scope and complexity. Simple websites typically take 2-4 weeks, while full-stack applications may require 6-12 weeks. I'll provide a detailed timeline during our initial consultation.",
    topic: "Timeline",
    type: "FAQ",
  },
  {
    question: "What sets you apart from your competitors?",
    answer:
      "I combine technical expertise with a focus on user experience. With experience in both frontend and backend development, cloud infrastructure, and open-source contributions, I deliver scalable, modern solutions.",
    topic: "Process",
    type: "Info",
  },
  {
    question: "How can I contact you to initiate a project?",
    answer:
      "You can reach me via email at anjalijha2k3@gmail.com. I typically respond within 24 hours. You can also connect on LinkedIn for professional inquiries.",
    topic: "Contact",
    type: "FAQ",
  },
  {
    question: "Do you provide free consultations?",
    answer:
      "Yes, I offer a free initial consultation to discuss your project needs, answer questions, and determine if we're a good fit. This helps ensure we're aligned on goals and expectations before starting any work.",
    topic: "Consultation",
    type: "Info",
  },
];

const topics = ["Getting Started", "Pricing", "Timeline", "Process", "Contact", "Consultation"];
const types = ["FAQ", "Info"];

export default function Faq() {
  const theme = useThemeMode();
  const isLight = theme === "light";
  const containerRef = useScrollReveal<HTMLElement>({ y: 24, stagger: 0.06 });
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const toggleTopic = (topic: string) =>
    setSelectedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic],
    );

  const toggleType = (type: string) =>
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );

  const clearFilters = () => {
    setSelectedTopics([]);
    setSelectedTypes([]);
  };

  const topicCounts = topics.reduce(
    (acc, topic) => {
      acc[topic] = faqs.filter((faq) => faq.topic === topic).length;
      return acc;
    },
    {} as Record<string, number>,
  );

  const typeCounts = types.reduce(
    (acc, type) => {
      acc[type] = faqs.filter((faq) => faq.type === type).length;
      return acc;
    },
    {} as Record<string, number>,
  );

  const filteredFaqs = faqs.filter((faq) => {
    const matchesTopic = selectedTopics.length === 0 || selectedTopics.includes(faq.topic);
    const matchesType = selectedTypes.length === 0 || selectedTypes.includes(faq.type);
    return matchesTopic && matchesType;
  });

  const toggleFaq = (index: number) =>
    setOpenFaqIndex(openFaqIndex === index ? null : index);

  return (
    <section
      id="faq"
      ref={containerRef}
      className={`py-32 md:py-40 px-6 md:px-12 lg:px-20 relative overflow-hidden ${isLight ? "text-black" : "text-white"}`}
      style={{
        background: isLight
          ? "radial-gradient(circle at 85% 15%, rgba(139,92,246,0.10), transparent 45%), radial-gradient(circle at 15% 90%, rgba(139,92,246,0.08), transparent 45%), linear-gradient(180deg,#f4f1ea 0%, #f4f1ea 100%)"
          : "radial-gradient(circle at 85% 15%, rgba(139,92,246,0.06), transparent 45%), radial-gradient(circle at 15% 90%, rgba(139,92,246,0.05), transparent 45%), linear-gradient(180deg,#0a0c14 0%, #0a0c14 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-baseline gap-4 mb-16 md:mb-20" data-reveal>
          <span className="font-mono text-sm text-white/45">008</span>
          <h2 className="text-sm font-mono tracking-widest text-white/45">
            FREQUENTLY ASKED
          </h2>
          <div className="flex-1 h-px bg-white/15" />
        </div>

        <div className={`flex flex-col md:flex-row gap-0 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md overflow-hidden ${isLight ? "text-black" : "text-white"}`} data-reveal>
          <div className="md:w-64 p-6 border-b md:border-b-0 md:border-r border-white/10 bg-white/[0.025]">
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-xs text-white/45 tracking-wider">/ FILTER</span>
              <button
                onClick={clearFilters}
                className={`font-mono text-[10px] tracking-wider transition-colors ${isLight ? "text-black/40 hover:text-black" : "text-white/40 hover:text-white"}`}
              >
                CLEAR FILTERS
              </button>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <svg className={`w-4 h-4 ${isLight ? "text-black/65" : "text-white/65"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  />
                </svg>
                <span className={`font-mono text-xs font-bold tracking-wider ${isLight ? "text-black/85" : "text-white/85"}`}>TOPIC</span>
              </div>
              <div className="pl-6 space-y-2.5">
                {topics.map((topic, i) => {
                  const checked = selectedTopics.includes(topic);
                  return (
                    <label key={i} className="flex items-center gap-2.5 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleTopic(topic)}
                        className="hidden"
                      />
                      <div
                        className="w-4 h-4 border rounded transition-colors flex items-center justify-center"
                        style={{
                          borderColor: checked ? ACCENT : "var(--w-25)",
                          backgroundColor: checked ? ACCENT : "transparent",
                        }}
                      >
                        {checked && (
                          <svg className="w-3 h-3" fill="none" stroke="#ffffff" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </div>
                      <span
                        className={`font-mono text-xs transition-colors tracking-wide ${
                          checked
                            ? isLight ? "text-black" : "text-white"
                            : isLight ? "text-black/65 group-hover:text-black" : "text-white/65 group-hover:text-white"
                        }`}
                      >
                        {topic} ({topicCounts[topic] || 0})
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <svg className={`w-4 h-4 ${isLight ? "text-black/65" : "text-white/65"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  />
                </svg>
                <span className={`font-mono text-xs font-bold tracking-wider ${isLight ? "text-black/85" : "text-white/85"}`}>TYPE</span>
              </div>
              <div className="pl-6 space-y-2.5">
                {types.map((type, i) => {
                  const checked = selectedTypes.includes(type);
                  return (
                    <label key={i} className="flex items-center gap-2.5 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleType(type)}
                        className="hidden"
                      />
                      <div
                        className="w-4 h-4 border rounded transition-colors flex items-center justify-center"
                        style={{
                          borderColor: checked ? ACCENT : "var(--w-25)",
                          backgroundColor: checked ? ACCENT : "transparent",
                        }}
                      >
                        {checked && (
                          <svg className="w-3 h-3" fill="none" stroke="#ffffff" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </div>
                      <span
                        className={`font-mono text-xs transition-colors tracking-wide ${
                          checked
                            ? isLight ? "text-black" : "text-white"
                            : isLight ? "text-black/65 group-hover:text-black" : "text-white/65 group-hover:text-white"
                        }`}
                      >
                        {type} ({typeCounts[type] || 0})
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex-1 p-6">
            <div className="flex items-center gap-4 pb-4 border-b border-white/10 mb-2">
              <span className="font-mono text-[10px] text-white/40 w-24 tracking-wider">/ DATE</span>
              <span className="font-mono text-[10px] text-white/40 flex-1 tracking-wider">/ NAME</span>
              <span className="font-mono text-[10px] text-white/40 w-16 text-right tracking-wider">/ TYPE</span>
              <span className="w-8" />
            </div>

            <div className="divide-y divide-white/10">
              {filteredFaqs.map((faq) => {
                const originalIndex = faqs.findIndex((f) => f.question === faq.question);
                const isOpen = openFaqIndex === originalIndex;

                return (
                  <div key={originalIndex}>
                    <div
                      onClick={() => toggleFaq(originalIndex)}
                      className="flex items-center gap-4 py-4 cursor-pointer group hover:bg-white/[0.04] transition-colors -mx-2 px-2 rounded"
                    >
                      <div className="flex items-center gap-2 w-24">
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: ACCENT }}
                        />
                        <span className="font-mono text-[11px] text-white/45">2025.01</span>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-base md:text-lg font-semibold text-white group-hover:opacity-80 transition-opacity leading-tight tracking-tight">
                          {faq.question}
                        </h3>
                      </div>

                      <div className="w-16 text-right">
                        <span className="inline-block font-mono text-[10px] border border-white/15 bg-white/[0.04] text-white/75 px-2 py-1 rounded tracking-wider">
                          {faq.type}
                        </span>
                      </div>

                      <div className="w-8 flex justify-center">
                        <span
                          className={`text-xl font-light transition-transform duration-300 ${
                            isOpen ? "rotate-45" : ""
                          }`}
                          style={{
                            color: isOpen
                              ? isLight ? ACCENT : "#ede9fe"
                              : "var(--w-45)",
                          }}
                        >
                          +
                        </span>
                      </div>
                    </div>

                    {isOpen && (
                      <div className="pl-28 pr-12 pb-6 animate-fade-in">
                        <p className="text-sm text-white/72 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
