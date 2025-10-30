import { Globe, Headphones, MessageCircle } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 grid place-items-center rounded-full bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-400 text-white">
            <Globe className="h-5 w-5" />
          </div>
          <span className="font-semibold tracking-tight text-gray-900">LinguaFlow</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#demo" className="hover:text-gray-900 transition-colors">Translate</a>
          <a href="#services" className="hover:text-gray-900 transition-colors">Services</a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-black transition-colors"
          >
            <Headphones className="h-4 w-4" />
            Talk to an Expert
          </a>
        </div>
      </div>
    </header>
  );
}
