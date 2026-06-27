import React from "react";
import { Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="inline-flex items-center gap-3 text-sm sm:text-base font-semibold text-slate-950">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-200 via-indigo-200 to-violet-200 text-slate-950 shadow-sm">
            <Sparkles className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <p className="text-sm uppercase tracking-[0.32em] text-slate-900">BrightStart</p>
            <p className="text-xs text-slate-500">Children&apos;s School</p>
          </div>
        </a>

        <nav className="hidden items-center gap-10 text-sm font-medium text-slate-600 md:flex">
          <a href="#home" className="transition hover:text-slate-950">Home</a>
          <a href="#about" className="transition hover:text-slate-950">About Us</a>
          <a href="#programs" className="transition hover:text-slate-950">Programs</a>
          <a href="#testimonial" className="transition hover:text-slate-950">Parents</a>
          <a href="#contact" className="transition hover:text-slate-950">Contact</a>
        </nav>

        <a
          href="#contact"
          className="hidden items-center rounded-full bg-gradient-to-r from-amber-400 via-rose-400 to-fuchsia-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 md:inline-flex"
        >
          Book a tour
        </a>

        <button className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 md:hidden">
          Menu
        </button>
      </div>
    </header>
  );
}
