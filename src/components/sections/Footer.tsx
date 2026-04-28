export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-20 bg-[#0a0c14] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs font-mono text-white/45 text-center md:text-left tracking-wide">
            (c) 2025 ANJALI JHA - ALL RIGHTS RESERVED
          </p>
          <div className="flex items-center gap-5 md:gap-7">
            <a
              href="https://linkedin.com/in/anjali-jha-49734924a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-white/55 hover:text-white transition-colors tracking-wide"
            >
              LINKEDIN
            </a>
            <span className="text-white/25">/</span>
            <a
              href="https://github.com/blizet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-white/55 hover:text-white transition-colors tracking-wide"
            >
              GITHUB
            </a>
            <span className="text-white/25">/</span>
            <a
              href="mailto:anjalijha2k3@gmail.com"
              className="text-xs font-mono text-white/55 hover:text-white transition-colors tracking-wide"
            >
              EMAIL
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
