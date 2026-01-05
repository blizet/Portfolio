"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Simple icons
const Arrow = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M7 17L17 7M17 7H7M17 7V17" />
  </svg>
);

const ArrowDown = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 5v14M5 12l7 7 7-7" />
  </svg>
);

const Plus = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M10 4v12M4 10h12" />
  </svg>
);

// Navigation
const Nav = () => {
  const [time, setTime] = useState("");
  
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { 
        hour: "2-digit", 
        minute: "2-digit",
        hour12: false,
        timeZone: "Asia/Kolkata"
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
      <div className="flex items-center justify-center px-4 md:px-8 lg:px-16 xl:px-24 py-4 md:py-6 text-white">
        <div className="flex items-center gap-3 md:gap-6 lg:gap-8 text-xs md:text-sm font-mono">
          <span className="opacity-50 hidden sm:inline">{time} IST</span>
          <a href="#work" className="link-hover">WORK</a>
          <a href="#about" className="link-hover">ABOUT</a>
          <a href="#contact" className="link-hover">CONTACT</a>
        </div>
      </div>
    </nav>
  );
};

// Hero Section - GOALS style with image showing through text
const Hero = () => {
  const imageUrl = 'images/picture.png';

  return (
    <section className="h-screen relative overflow-hidden">
      {/* Background Image - Full screen, fixed position to match text */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundAttachment: 'fixed',
        }}
      />
    

      {/* Black overlay on top portion with text cutout - no gap to image */}
      <div className="absolute inset-x-0 top-0 h-[48%] bg-black z-10">
        {/* Top info section */}
        <div className="flex justify-between items-start px-4 md:px-8 lg:px-16 pt-20 md:pt-24">
          {/* Left - Role info */}
          <div className="text-white">
            <p className="text-xs md:text-sm lg:text-base font-mono font-bold leading-tight">SOFTWARE</p>
            <p className="text-xs md:text-sm lg:text-base font-mono font-bold leading-tight">ENGINEER</p>
            <p className="text-xs md:text-sm lg:text-base font-mono text-gray-500 leading-tight">2025</p>
          </div>
          
          {/* Right - Tagline */}
          <div className="text-white text-right">
            <p className="text-xs md:text-sm lg:text-base font-mono font-bold leading-tight">CAPTURE</p>
            <p className="text-xs md:text-sm lg:text-base font-mono font-bold leading-tight">THE</p>
            <p className="text-xs md:text-sm lg:text-base font-mono font-bold leading-tight">MOMENT</p>
          </div>
        </div>

        {/* Large ANJALI text - shares same fixed background as main image */}
        <div className="absolute inset-0 flex items-end justify-center" style={{ bottom: '-1px' }}>
          <h1 
            className="font-black select-none text-center w-[90%] relative"
            style={{
              fontSize: 'clamp(100px, 28vw, 350px)',
              letterSpacing: '-0.02em',
              lineHeight: 0.805,
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundAttachment: 'fixed',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
            }}
          >
            <span
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                WebkitTextStroke: '2px white',
                WebkitTextStrokeWidth: '2px',
                WebkitTextFillColor: 'transparent',
                fontSize: 'inherit',
                fontFamily: 'inherit',
                fontWeight: 'inherit',
                letterSpacing: 'inherit',
                lineHeight: 'inherit',
                textAlign: 'inherit',
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                pointerEvents: 'none',
              }}
            >
              ANJALI
            </span>
            ANJALI
          </h1>
        </div>

      </div>

      {/* Bottom section - shows the image */}
      <div className="absolute inset-x-0 bottom-0 h-[45%] z-0">
        {/* Building the future text - bottom left */}
        <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 z-20 max-w-[calc(100%-8rem)] md:max-w-none">
          <p className="text-white text-[10px] md:text-xs lg:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase font-light italic drop-shadow-lg leading-tight">
            Building the future, one line of code at a time.
          </p>
        </div>

        {/* Arrow to scroll - bottom right */}
        <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8 z-20">
          <a href="#work" className="text-white hover:text-gray-200 transition-colors">
            <svg width="20" height="20" className="md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

// Creative Section
const Creative = () => {
  const creativeItems = [
    {
      title: "Writing",
      description: "Technical blogs and documentation",
      items: ["Technical Writing", "Documentation", "Blog Posts"]
    },
    {
      title: "Design",
      description: "UI/UX and visual design",
      items: ["Interface Design", "User Experience", "Visual Identity"]
    },
    {
      title: "Open Source",
      description: "Contributing to community projects",
      items: ["Code Contributions", "Community Building", "Mentorship"]
    },
    {
      title: "Photography",
      description: "Capturing moments and perspectives",
      items: ["Street Photography", "Architecture", "Nature"]
    },
  ];

  return (
    <section className="px-8 md:px-16 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-baseline gap-4 mb-24">
          <span className="font-mono text-sm text-gray-400">004</span>
          <h2 className="text-sm font-mono tracking-widest text-gray-400">
            CREATIVE PURSUITS
          </h2>
          <div className="flex-1 h-px bg-gray-200" />
        </div>
        
        {/* Creative Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {creativeItems.map((item, i) => (
            <div
              key={i}
              className="group border-2 border-gray-200 rounded-2xl p-8 hover:border-black transition-all duration-300 hover:shadow-lg"
            >
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-3 group-hover:translate-x-1 transition-transform duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 font-mono">
                  {item.description}
                </p>
              </div>
              
              <ul className="space-y-2">
                {item.items.map((subItem, j) => (
                  <li
                    key={j}
                    className="text-sm text-gray-600 font-mono flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-gray-400 rounded-full" />
                    {subItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom text */}
        <div className="mt-24 pt-16 border-t border-gray-200">
          <p className="text-center text-gray-500 font-mono text-sm max-w-2xl mx-auto">
            Beyond code, I explore creativity through writing, design, and visual storytelling. 
            These pursuits inform my approach to building thoughtful digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

// Marquee Section - Reusable with color variants
const Marquee = ({ variant = "light" }: { variant?: "light" | "dark" }) => {
  const items = ["PYTHON", "REACT", "NEXT.JS", "TYPESCRIPT", "FASTAPI", "DOCKER", "GCP", "SOLIDITY"];
  
  const isDark = variant === "dark";
  const bgColor = isDark ? "bg-black" : "bg-white";
  const textColor = isDark ? "text-white" : "text-black";
  const separatorColor = isDark ? "text-gray-600" : "text-gray-300";
  const borderColor = isDark ? "border-gray-800" : "border-gray-200";
  
  // Duplicate items multiple times for seamless infinite scroll
  const duplicatedItems = [...items, ...items, ...items, ...items];
  
  return (
    <div className={`${bgColor} py-8 md:py-10 border-y ${borderColor} overflow-hidden relative`}>
      <div className="flex animate-marquee whitespace-nowrap">
        {duplicatedItems.map((item, i) => (
          <span key={i} className={`mx-8 md:mx-10 text-4xl md:text-6xl font-bold tracking-tighter ${textColor} inline-block shrink-0`}>
            {item}
            <span className={`mx-8 md:mx-10 ${separatorColor}`}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

// About Section
const About = () => {
  const stats = [
    { number: "01+", label: "YEARS EXP" },
    { number: "10+", label: "PROJECTS" },
    { number: "9.3", label: "CGPA" },
  ];

  return (
    <section id="about" className="py-40 md:py-48 px-8 md:px-16 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-baseline gap-4 mb-24">
          <span className="font-mono text-sm text-gray-400">001</span>
          <h2 className="text-sm font-mono tracking-widest text-gray-400">
            ABOUT
          </h2>
          <div className="flex-1 h-px bg-gray-200" />
        </div>
        
        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">
          {/* Left - Big text */}
          <div className="pr-4 lg:pr-8">
            <p className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight">
              I craft digital experiences that blend{" "}
              <span className="italic text-gray-400">functionality</span>{" "}
              with{" "}
              <span className="italic text-gray-400">innovation</span>,
              turning complex systems into elegant solutions.
            </p>
          </div>
          
          {/* Right - Details */}
          <div className="space-y-16">
            <div className="space-y-6">
              <p className="text-gray-500 leading-relaxed text-lg">
                Software Engineer with hands-on experience deploying production systems to Google Cloud Platform. 
                Proven expertise in Python, JavaScript/TypeScript, and C++ with 1+ years building scalable applications 
                using FastAPI, React, and Next.js.
              </p>
              <p className="text-gray-500 leading-relaxed text-lg">
                Google Summer of Code 2025 developer contributing to open-source blockchain and web infrastructure projects.
                Strong background in automated testing, CI/CD pipelines, and cross-functional collaboration.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-10 pt-12 border-t border-gray-200">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-4xl md:text-6xl font-bold tracking-tight display-number">{stat.number}</p>
                  <p className="text-xs font-mono text-gray-400 mt-3">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Experience Section
const Experience = () => {
  const experiences = [
    {
      id: "01",
      role: "Frontend Developer & CI Maintainer",
      company: "STABILITY NEXUS",
      period: "NOV 2024 — PRESENT",
      url: "https://stability.nexus/",
      points: [
        "Leading frontend development for open-source projects including Clowder UI library and Fate Protocol",
        "Built accessible UI components using Next.js, Radix UI, and Tailwind CSS, improving performance by 40%",
        "Maintained CI/CD pipelines using GitHub Actions, reducing build times by 25%",
        "Collaborated with design and backend teams to implement responsive interfaces across all devices"
      ],
    },
    {
      id: "02",
      role: "Open Source Engineer",
      company: "GSOC × AOSSIE",
      period: "JUN 2025 — SEP 2025",
      url: "https://summerofcode.withgoogle.com/archive/2025/projects/zN0pP1CO",
      points: [
        "Selected as Google Summer of Code 2025 contributor for Fate Protocol decentralized prediction market",
        "Developed complete EVM frontend using Next.js, TypeScript, and Ethers.js for smart contract interaction",
        "Implemented wallet integration and real-time market data updates with responsive UI components",
        "Collaborated with international contributors and maintained code quality through testing and reviews"
      ],
    },
    {
      id: "03",
      role: "Software Engineer — R&D Intern",
      company: "CDAC",
      period: "OCT 2024 — MAR 2025",
      url: "https://www.cdac.in/",
      points: [
        "Engineered enterprise phishing detection system achieving 97% accuracy using ML algorithms",
        "Designed ML pipeline with Postfix email server integration for real-time email analysis",
        "Developed Python backend services using FastAPI with PostgreSQL, optimizing model performance",
        "Reduced false positives by 35% through feature engineering and hyperparameter tuning"
      ],
    },
  ];

  return (
    <section className="py-40 md:py-48 px-8 md:px-16 lg:px-24 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-baseline gap-4 mb-24">
          <span className="font-mono text-sm text-gray-400">002</span>
          <h2 className="text-sm font-mono tracking-widest text-gray-400">
            EXPERIENCE
          </h2>
          <div className="flex-1 h-px bg-gray-300" />
        </div>
        
        {/* Experience list */}
        <div className="space-y-0">
          {experiences.map((exp) => (
            <a
              key={exp.id}
              href={exp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block py-12 md:py-16 border-b border-gray-300 hover:bg-white transition-colors duration-300 px-6 md:px-8 cursor-pointer"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                <span className="font-mono text-sm text-gray-400">
                  {exp.id}
                </span>
                
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight mb-3 md:mb-4 group-hover:translate-x-2 transition-transform duration-300">
                    {exp.role}
                  </h3>
                  <ul className="text-gray-500 text-sm md:text-base leading-relaxed space-y-2 max-w-4xl list-disc list-inside md:list-outside md:ml-4">
                    {exp.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="lg:text-right">
                  <p className="font-bold text-sm md:text-base group-hover:underline">{exp.company}</p>
                  <p className="font-mono text-xs text-gray-400 mt-1">{exp.period}</p>
                </div>
                
                <div className="hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Arrow />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects Section (Bento Grid)
const Projects = () => {
  const projects = [
    {
      id: "01",
      title: "FATE PROTOCOL",
      category: "WEB3 / FRONTEND",
      description: "Decentralized prediction market on EVM with perpetual pools and continuous operation",
      tech: ["Next.js", "TypeScript", "Ethers.js", "viem", "wagmi", "Tailwind CSS"],
      size: "large",
      url: "https://evm.fate.stability.nexus/",
      image: "/images/fate.png",
    },
    {
      id: "02",
      title: "INVESTAI",
      category: "FULL-STACK / AI",
      description: "AI-powered startup investment platform with Google Gemini integration",
      tech: ["FastAPI", "React", "GCP", "Google Gemini AI", "Firebase", "Tailwind CSS"],
      size: "medium",
      url: "https://investai-genai.web.app/",
      image: "/images/investai.png",
    },
    {
      id: "03",
      title: "PROSPER DEV",
      category: "FULL-STACK",
      description: "Real-estate project management platform with seamless land ownership",
      tech: ["React", "Firebase", "Firestore", "Cloud Functions", "Tailwind CSS"],
      size: "medium",
      url: "https://prosperdevelopers.com/",
      image: "/images/prosper.png",
    },
    {
      id: "04",
      title: "CLOWDER",
      category: "FRONTEND / OPEN SOURCE",
      description: "Open-source frontend project by Stability Nexus",
      tech: ["Next.js", "Radix UI", "Tailwind CSS", "TypeScript"],
      size: "medium",
      url: "https://clowder.stability.nexus/",
      image: "/images/clowder.png",
    },
  ];

  return (
    <section id="work" className="py-40 md:py-48 px-8 md:px-16 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-baseline gap-4 mb-24">
          <span className="font-mono text-sm text-gray-400">003</span>
          <h2 className="text-sm font-mono tracking-widest text-gray-400">
            SELECTED WORK
          </h2>
          <div className="flex-1 h-px bg-gray-200" />
        </div>
        
        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Large project */}
          <a
            href={projects[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="group md:col-span-2 relative bg-white border-2 border-gray-200 overflow-hidden bento-item flex flex-col"
          >
            {/* Image */}
            <div className="relative w-full overflow-hidden bg-gray-100">
            <Image
                src={projects[0].image}
                alt={projects[0].title}
                width={1200}
                height={800}
                className="w-full h-auto object-contain group-hover:scale-110 transition-transform duration-700"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            
            <div className="relative z-10 p-6 md:p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <span className="font-mono text-sm text-gray-400">{projects[0].id}</span>
                  <span className="font-mono text-xs text-gray-400">{projects[0].category}</span>
                </div>
                <h3 className="text-4xl md:text-6xl font-bold tracking-tighter text-black group-hover:translate-x-2 transition-transform duration-300 mb-3">
                  {projects[0].title}
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-snug mb-3 max-w-2xl">
                  {projects[0].description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {projects[0].tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-gray-100 text-gray-700 font-mono text-xs rounded-full border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-end justify-end">
                <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all shrink-0">
                  <Arrow />
                </div>
              </div>
            </div>
          </a>
          
          {/* Smaller projects */}
          {projects.slice(1).map((project) => (
            <a
              key={project.id}
              href={project.url}
            target="_blank"
            rel="noopener noreferrer"
              className="group relative bg-white border-2 border-gray-200 overflow-hidden bento-item flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full overflow-hidden bg-gray-100">
            <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              
              <div className="relative z-10 p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-2">
                    <span className="font-mono text-sm text-gray-400">{project.id}</span>
                    <span className="font-mono text-xs text-gray-400">{project.category}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tighter text-black group-hover:translate-x-2 transition-transform duration-300 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-snug mb-3">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-gray-100 text-gray-700 font-mono text-xs rounded-full border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-end justify-end">
                  <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all shrink-0">
                    <Arrow />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

// Skills Section
const Skills = () => {
  const skillGroups = [
    { title: "LANGUAGES", items: ["Python", "TypeScript", "JavaScript", "C++", "SQL", "Solidity"] },
    { title: "FRONTEND", items: ["React", "Next.js", "Tailwind CSS", "Radix UI"] },
    { title: "BACKEND", items: ["FastAPI", "Flask", "Express.js", "Node.js"] },
    { title: "DEVOPS", items: ["Docker", "GitHub Actions", "GCP", "Linux"] },
    { title: "DATABASE", items: ["PostgreSQL", "MongoDB", "Firebase"] },
    { title: "TOOLS", items: ["Git", "Pytest", "Zod", "Ethers.js"] },
  ];

  return (
    <section className="py-40 md:py-48 px-8 md:px-16 lg:px-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-baseline gap-4 mb-24">
          <span className="font-mono text-sm text-gray-400">005</span>
          <h2 className="text-sm font-mono tracking-widest text-gray-400">
            CAPABILITIES
          </h2>
          <div className="flex-1 h-px bg-gray-200" />
        </div>
        
        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">
          {skillGroups.map((group) => (
            <div key={group.title} className="group">
              <h3 className="font-mono text-xs tracking-widest text-gray-400 mb-8">
                {group.title}
              </h3>
              <ul className="space-y-4">
                {group.items.map((item) => (
                  <li 
                    key={item} 
                    className="flex items-center gap-4 text-xl font-medium group/item cursor-default"
                  >
                    <span className="w-2 h-2 bg-gray-300 group-hover/item:bg-black transition-colors" />
                    <span className="group-hover/item:translate-x-2 transition-transform">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Awards Section
const Awards = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const awards = [
    { 
      year: "2025", 
      title: "Google Summer of Code", 
      org: "AOSSIE",
      description: "Selected among global developers to contribute to open-source decentralized systems. Developed Fate Protocol EVM Frontend, a decentralized prediction market built with Next.js, TypeScript, and Ethers.js."
    },
    { 
      year: "2025", 
      title: "ETC Nova Hackathon Winner", 
      org: "Global",
      description: "Recognized for innovation in blockchain user experience and smart contract design. Built a decentralized application showcasing advanced Web3 integration and user-friendly interface design."
    },
    { 
      year: "2025", 
      title: "Research Publication", 
      org: "ISW",
      description: "Paper on Fate Protocol accepted at International Stability Workshop (peer-reviewed). Contributed research on decentralized prediction markets and blockchain infrastructure."
    },
    { 
      year: "2024", 
      title: "Hackoverflow 2nd Place", 
      org: "CV Competition",
      description: "Achieved 2nd place in content-based image processing and computer vision competition. Demonstrated expertise in image analysis algorithms and pattern recognition."
    },
  ];

  const toggleAward = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-40 md:py-48 px-8 md:px-16 lg:px-24 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-baseline gap-4 mb-24">
          <span className="font-mono text-sm text-gray-400">006</span>
          <h2 className="text-sm font-mono tracking-widest text-gray-400">
            RECOGNITION
          </h2>
          <div className="flex-1 h-px bg-gray-300" />
        </div>
        
        {/* Awards list */}
        <div className="space-y-0">
          {awards.map((award, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={i}
                className="border-b border-gray-300 hover:bg-white transition-all duration-300"
              >
                <div 
                  onClick={() => toggleAward(i)}
                  className="flex items-center gap-8 md:gap-12 py-10 md:py-12 px-4 hover:pl-6 transition-all duration-300 cursor-pointer"
                >
                  <span className="font-mono text-sm text-gray-400 w-20 shrink-0">
                    {award.year}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold flex-1">{award.title}</h3>
                  <span className="font-mono text-sm text-gray-400 shrink-0">{award.org}</span>
                  <div className={`w-6 h-6 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                    <Plus />
                  </div>
                </div>
                
                {/* Additional info on click */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-4 pb-8 md:pb-10 pt-4">
                    <div className="pl-20 md:pl-0">
                      <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-3xl">
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
};

// Contact Section
const Contact = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const topics = ['Getting Started', 'Pricing', 'Timeline', 'Process', 'Contact', 'Consultation'];
  const types = ['FAQ', 'Info'];

  const toggleTopic = (topic: string) => {
    setSelectedTopics(prev => 
      prev.includes(topic) ? prev.filter(t => t !== topic) : [...prev, topic]
    );
  };

  const toggleType = (type: string) => {
    setSelectedTypes(prev => 
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const clearFilters = () => {
    setSelectedTopics([]);
    setSelectedTypes([]);
  };

  const faqs = [
    {
      question: "How do I start a project with you?",
      answer: "Simply reach out via email. We'll schedule a consultation to discuss your project requirements, timeline, and goals. After understanding your needs, I'll provide a detailed proposal and project plan.",
      topic: "Getting Started",
      type: "FAQ"
    },
    {
      question: "What is the cost of your services?",
      answer: "Project costs vary based on scope, complexity, and timeline. I provide transparent pricing after understanding your specific requirements. Each project is quoted individually to ensure fair pricing for both parties.",
      topic: "Pricing",
      type: "FAQ"
    },
    {
      question: "How much time is typically needed to finish a project?",
      answer: "Project timelines depend on the scope and complexity. Simple websites typically take 2-4 weeks, while full-stack applications may require 6-12 weeks. I'll provide a detailed timeline during our initial consultation.",
      topic: "Timeline",
      type: "FAQ"
    },
    {
      question: "What sets you apart from your competitors?",
      answer: "I combine technical expertise with a focus on user experience. With experience in both frontend and backend development, cloud infrastructure, and open-source contributions, I deliver scalable, modern solutions. My Google Summer of Code experience demonstrates commitment to quality and innovation.",
      topic: "Process",
      type: "Info"
    },
    {
      question: "How can I contact you to initiate a project?",
      answer: "You can reach me via email at anjalijha2k3@gmail.com. I typically respond within 24 hours. You can also connect on LinkedIn for professional inquiries.",
      topic: "Contact",
      type: "FAQ"
    },
    {
      question: "Do you provide free consultations?",
      answer: "Yes, I offer a free initial consultation to discuss your project needs, answer questions, and determine if we're a good fit. This helps ensure we're aligned on goals and expectations before starting any work.",
      topic: "Consultation",
      type: "Info"
    },
  ];

  // Calculate counts for topics and types
  const topicCounts = topics.reduce((acc, topic) => {
    acc[topic] = faqs.filter(faq => faq.topic === topic).length;
    return acc;
  }, {} as Record<string, number>);

  const typeCounts = types.reduce((acc, type) => {
    acc[type] = faqs.filter(faq => faq.type === type).length;
    return acc;
  }, {} as Record<string, number>);

  // Filter FAQs based on selected topics and types
  const filteredFaqs = faqs.filter(faq => {
    const matchesTopic = selectedTopics.length === 0 || selectedTopics.includes(faq.topic);
    const matchesType = selectedTypes.length === 0 || selectedTypes.includes(faq.type);
    return matchesTopic && matchesType;
  });

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="contact" className="py-40 md:py-56 px-8 md:px-16 lg:px-24 bg-black text-white relative overflow-hidden noise">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="flex items-baseline gap-4 mb-24">
          <span className="font-mono text-sm text-gray-500">007</span>
          <h2 className="text-sm font-mono tracking-widest text-gray-500">
            GET IN TOUCH
          </h2>
          <div className="flex-1 h-px bg-gray-800" />
        </div>
        
        {/* Big CTA */}
        <div className="text-center mb-32 px-4">
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg">
            Have a project in mind? Let&apos;s build something amazing together.
          </p>
          <a 
            href="mailto:anjalijha2k3@gmail.com"
            className="inline-block text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white hover:opacity-80 transition-all duration-500 cursor-pointer px-8 py-4"
          >
            SAY HELLO
          </a>
        </div>
        
        {/* Contact info */}
        <div className="grid md:grid-cols-2 gap-16 pt-20 border-t border-gray-800 mb-32">
          <div>
            <p className="font-mono text-xs text-gray-500 mb-4">LOCATION</p>
            <p className="text-lg md:text-xl">Mumbai, India</p>
          </div>
          <div>
            <p className="font-mono text-xs text-gray-500 mb-4">AVAILABILITY</p>
            <p className="text-lg md:text-xl">Available for new projects</p>
          </div>
        </div>

        {/* FAQ Section - File Explorer Style */}
        <div className="pt-20 border-t border-gray-800">
          <div className="flex items-baseline gap-4 mb-12">
            <span className="font-mono text-sm text-gray-500">008</span>
            <h2 className="text-sm font-mono tracking-widest text-gray-500">
              FREQUENTLY ASKED
            </h2>
            <div className="flex-1 h-px bg-gray-800" />
          </div>

          {/* File Explorer Layout */}
          <div className="flex flex-col md:flex-row gap-0 bg-gray-100 text-black rounded-lg overflow-hidden">
            {/* Left Sidebar - Filters/Folders */}
            <div className="md:w-64 p-6 border-b md:border-b-0 md:border-r border-gray-300 bg-gray-200">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-gray-500">/ FILTER</span>
                <button 
                  onClick={clearFilters}
                  className="font-mono text-xs text-gray-400 hover:text-black transition-colors"
                >
                  CLEAR FILTERS
                </button>
              </div>
              
              {/* Topic Folder */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                  <span className="font-mono text-sm font-bold">Topic</span>
                </div>
                <div className="pl-6 space-y-2">
                  {topics.map((topic, i) => (
                    <label 
                      key={i} 
                      className="flex items-center gap-2 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        checked={selectedTopics.includes(topic)}
                        onChange={() => toggleTopic(topic)}
                        className="hidden"
                      />
                      <div className={`w-4 h-4 border rounded transition-colors flex items-center justify-center ${
                        selectedTopics.includes(topic) 
                          ? 'border-black bg-black' 
                          : 'border-gray-400 bg-white group-hover:border-black'
                      }`}>
                        {selectedTopics.includes(topic) && (
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <span className={`font-mono text-xs transition-colors ${
                        selectedTopics.includes(topic) ? 'text-black font-bold' : 'text-gray-700 group-hover:text-black'
                      }`}>
                        {topic} ({topicCounts[topic] || 0})
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Type Folder */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                  <span className="font-mono text-sm font-bold">Type</span>
                </div>
                <div className="pl-6 space-y-2">
                  {types.map((type, i) => (
                    <label 
                      key={i} 
                      className="flex items-center gap-2 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        checked={selectedTypes.includes(type)}
                        onChange={() => toggleType(type)}
                        className="hidden"
                      />
                      <div className={`w-4 h-4 border rounded transition-colors flex items-center justify-center ${
                        selectedTypes.includes(type) 
                          ? 'border-black bg-black' 
                          : 'border-gray-400 bg-white group-hover:border-black'
                      }`}>
                        {selectedTypes.includes(type) && (
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <span className={`font-mono text-xs transition-colors ${
                        selectedTypes.includes(type) ? 'text-black font-bold' : 'text-gray-700 group-hover:text-black'
                      }`}>
                        {type} ({typeCounts[type] || 0})
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content - File List */}
            <div className="flex-1 p-6 bg-gray-100">
              {/* Header Row */}
              <div className="flex items-center gap-4 pb-4 border-b border-gray-300 mb-2">
                <span className="font-mono text-xs text-gray-500 w-24">/ DATE</span>
                <span className="font-mono text-xs text-gray-500 flex-1">/ NAME</span>
                <span className="font-mono text-xs text-gray-500 w-16 text-right">/ TYPE</span>
                <span className="w-8"></span>
              </div>

              {/* FAQ Items as Files */}
              <div className="divide-y divide-gray-300">
                {filteredFaqs.map((faq, filteredIndex) => {
                  const originalIndex = faqs.findIndex(f => f.question === faq.question);
                  const isOpen = openFaqIndex === originalIndex;
                  
                  return (
                    <div key={originalIndex}>
                      <div
                        onClick={() => toggleFaq(originalIndex)}
                        className="flex items-center gap-4 py-4 cursor-pointer group hover:bg-gray-200 transition-colors -mx-2 px-2 rounded"
                      >
                        {/* Date */}
                        <div className="flex items-center gap-2 w-24">
                          <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                          <span className="font-mono text-xs text-gray-500">2025.01</span>
                        </div>
                        
                        {/* Name/Question */}
                        <div className="flex-1">
                          <h3 className="text-base md:text-lg font-bold text-black group-hover:opacity-70 transition-opacity leading-tight">
                            {faq.question}
                          </h3>
                        </div>
                        
                        {/* Type Badge */}
                        <div className="w-16 text-right">
                          <span className="inline-block font-mono text-xs border border-gray-400 bg-white px-2 py-1 rounded">
                            {faq.type}
                          </span>
                        </div>
                        
                        {/* Expand Icon */}
                        <div className="w-8 flex justify-center">
                          <span className={`text-xl font-light text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                            +
                          </span>
                        </div>
                      </div>
                      
                      {/* Expanded Answer */}
                      {isOpen && (
                        <div className="pl-28 pr-12 pb-6 animate-fade-in">
                          <p className="text-sm text-gray-700 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="py-10 px-8 md:px-16 lg:px-24 bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        
        
        {/* Social Media Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 pt-6">
          <p className="text-xs md:text-sm font-mono text-gray-500 text-center md:text-left">© 2025 ANJALI JHA. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center justify-center gap-4 md:gap-8">
            <a 
              href="https://linkedin.com/in/anjali-jha-49734924a" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="link-hover text-xs md:text-sm font-mono text-gray-500 hover:text-white transition-colors"
            >
              LINKEDIN
            </a>
            <span className="text-gray-600">/</span>
            <a 
              href="https://github.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="link-hover text-xs md:text-sm font-mono text-gray-500 hover:text-white transition-colors"
            >
              GITHUB
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Simple Loader Component
const Loader = ({ progress, isComplete }: { progress: number; isComplete: boolean }) => {
  return (
    <div className="fixed inset-0 bg-black z-[100] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4 md:gap-6 px-4">
        <p className="text-white font-sans text-xl md:text-2xl tracking-wide">
          {isComplete ? 'COMPLETE' : 'LOADING'}
        </p>
        <div className="w-48 md:w-64 h-3 md:h-4 border-2 border-white bg-white relative overflow-hidden">
          <div 
            className="absolute left-[2px] top-[2px] bottom-[2px] bg-black transition-all duration-300 ease-out"
            style={{ width: isComplete ? 'calc(100% - 4px)' : `calc(${progress}% - 4px)` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

// Main Page
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // List of all image URLs that need to be loaded
    const imageUrls = [
      'images/picture.png',
      'images/fate.png',
      'images/investai.png',
      'images/prosper.png',
      'images/clowder.png',
    ];

    let loadedCount = 0;
    const totalImages = imageUrls.length;
    
    const checkAllLoaded = () => {
      loadedCount++;
      const progress = (loadedCount / totalImages) * 100;
      setLoadingProgress(progress);
      
      if (loadedCount === totalImages) {
        setIsComplete(true);
        // Small delay to show "COMPLETE" before transitioning
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
    };

    // Preload all images
    imageUrls.forEach((url) => {
      const img = new window.Image();
      img.onload = checkAllLoaded;
      img.onerror = checkAllLoaded; // Count as loaded even if error to prevent stuck loader
      img.src = url;
    });

    // Fallback: if images don't load within 5 seconds, show content anyway
    const timeout = setTimeout(() => {
      setLoadingProgress(100);
      setIsComplete(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {isLoading && <Loader progress={loadingProgress} isComplete={isComplete} />}
      <main className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        <Nav />
        <Hero />
        <Marquee variant="light" />
        <About />
        <Marquee variant="dark" />
        <Experience />
        <Projects />
        <Creative />
        <Skills />
        <Awards />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
