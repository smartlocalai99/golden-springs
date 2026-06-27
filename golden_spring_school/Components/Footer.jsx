export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 grid gap-4 sm:grid-cols-4">
          <div className="h-2 rounded-full bg-indigo-500"></div>
          <div className="h-2 rounded-full bg-indigo-500"></div>
          <div className="h-2 rounded-full bg-indigo-500"></div>
          <div className="h-2 rounded-full bg-indigo-500"></div>
        </div>

        <div className="grid gap-14 lg:grid-cols-4 lg:gap-10">
          <div>
            <h2 className="text-3xl font-semibold text-white">BrightStart</h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
              Inspiring young learners with warm classrooms, thoughtful care, and joyful discovery.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              Book a tour
            </a>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <div className="mt-6 flex flex-col gap-3 text-sm text-slate-400">
              <a href="#home" className="transition hover:text-indigo-300">Home</a>
              <a href="#about" className="transition hover:text-indigo-300">About Us</a>
              <a href="#programs" className="transition hover:text-indigo-300">Programs</a>
              <a href="#testimonial" className="transition hover:text-indigo-300">Parents</a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">Programs</h3>
            <div className="mt-6 flex flex-col gap-3 text-sm text-slate-400">
              <span className="hover:text-indigo-300 transition">Infants</span>
              <span className="hover:text-indigo-300 transition">Toddlers</span>
              <span className="hover:text-indigo-300 transition">Preschool</span>
              <span className="hover:text-indigo-300 transition">Pre-K</span>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">Contact</h3>
            <div className="mt-6 flex flex-col gap-3 text-sm text-slate-400">
              <span>📍 Kadapa, Andhra Pradesh</span>
              <span>📞 +91 1234567890</span>
              <span>✉ info@goldenspringschool.com</span>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          © 2026 BrightStart. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
