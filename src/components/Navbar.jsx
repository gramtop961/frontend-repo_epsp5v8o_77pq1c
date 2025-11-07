import { Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="font-semibold tracking-tight text-lg">
            <span className="text-black">dev</span>
            <span className="text-indigo-600">ops</span>
            <span className="text-black">.folio</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#projects" className="hover:text-black transition-colors">Projects</a>
            <a href="#contact" className="hover:text-black transition-colors">Contact</a>
            <div className="flex items-center gap-4 ml-2">
              <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-black">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-black">
                <Linkedin size={18} />
              </a>
              <a href="mailto:you@example.com" aria-label="Email" className="hover:text-black">
                <Mail size={18} />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
