import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoImage from "./images/logo.jpg";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Academics", href: "#programs" },
  { label: "Facilities", href: "#features" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg border-b border-slate-100"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white">
              <img
                src={logoImage.src}
                alt="Golden Spring School logo"
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <h2 className="font-semibold text-xl tracking-tight text-slate-900">
                Golden Spring
              </h2>

              <p className="text-sm tracking-[0.25em] text-[#0f766e]">
                SCHOOL
              </p>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-700 hover:text-[#0f766e] font-medium transition"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              className="rounded-full bg-[#0f766e] text-white px-6 py-3 font-semibold hover:bg-[#115e59] transition"
            >
              Admissions Open
            </a>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-slate-800"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden bg-white rounded-2xl border border-slate-200 mb-4 p-6 space-y-5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-slate-700 font-medium hover:text-[#0f766e]"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              className="block text-center bg-[#0f766e] text-white rounded-full py-3 font-semibold"
            >
              Admissions Open
            </a>
          </div>
        )}
      </div>
    </header>
  );
}