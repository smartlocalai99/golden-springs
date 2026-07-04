import {
  MapPin,
  Phone,
  Mail,
  ArrowUp,
  Globe,
} from "lucide-react";
import logoImage from "./images/logo.jpg";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0f766e] text-white pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-14 w-14 overflow-hidden rounded-xl border border-white/20 bg-white p-1">
                <img
                  src={logoImage.src}
                  alt="Golden Spring School logo"
                  className="h-full w-full rounded-lg object-cover"
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold">Golden Spring School</h2>
                <p className="tracking-wider text-sm text-[#ccfbf1]">Learn • Lead • Succeed</p>
              </div>
            </div>

            <p className="mt-6 leading-8 text-[#d1fae5]">
              Golden Spring School is committed to nurturing young minds through
              quality education, innovation, discipline, and holistic
              development.
            </p>
          </div>

          <div>
            <h3 className="mb-6 text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-4 text-[#d1fae5]">
              <li><a href="#home" className="hover:text-white transition">Home</a></li>
              <li><a href="#about" className="hover:text-white transition">About</a></li>
              <li><a href="#programs" className="hover:text-white transition">Academics</a></li>
              <li><a href="#features" className="hover:text-white transition">Facilities</a></li>
              <li><a href="#faqs" className="hover:text-white transition">Admissions</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-xl font-semibold">Contact</h3>
            <div className="space-y-6 text-[#d1fae5]">
              <div className="flex gap-3">
                <MapPin className="shrink-0 text-[#fef3c7]" />
                <p>Khan Estate, T.Sakibanda, Kadapa, Andhra Pradesh 516214</p>
              </div>
              <div className="flex gap-3">
                <Phone className="shrink-0 text-[#fef3c7]" />
                <p>+91 XXXXX XXXXX</p>
              </div>
              <div className="flex gap-3">
                <Mail className="shrink-0 text-[#fef3c7]" />
                <p>info@goldenspringschool.com</p>
              </div>
              <div className="flex gap-3">
                <Globe className="shrink-0 text-[#fef3c7]" />
                <p>www.goldenspringschool.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/20 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#ccfbf1] text-center">
            © {new Date().getFullYear()} Golden Spring School. All Rights Reserved.
          </p>
          <a href="#home" className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
            <ArrowUp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}