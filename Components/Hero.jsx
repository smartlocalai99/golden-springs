import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Users,
  GraduationCap,
  Award,
} from "lucide-react";
import schoolImage from "./images/School.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pt-32 pb-20"
    >

      <div className="mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-flex items-center rounded-full bg-[#fef3c7] text-[#b8860b] px-5 py-2 text-sm font-semibold">
              Admissions Open • 2026–27
            </span>

            <h1 className="mt-8 text-5xl md:text-6xl xl:text-7xl font-black leading-tight text-slate-900">
              Inspiring Young Minds
              <br />
              <span className="text-[#0f766e]">Building Bright Futures</span>
            </h1>

            <p className="mt-8 text-lg text-slate-600 leading-8 max-w-xl">
              Golden Spring School provides quality education with experienced
              faculty, innovative learning methods, and holistic development
              that prepares students for lifelong success.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-full bg-[#0f766e] px-8 py-4 text-white font-semibold hover:bg-[#115e59]"
              >
                Explore School
                <ArrowRight size={18} />
              </a>

              <a
                href="#contact"
                className="rounded-full border border-slate-300 bg-white px-8 py-4 font-semibold hover:border-[#0f766e] hover:text-[#0f766e]"
              >
                Contact Us
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {[
                { number: "1200+", label: "Students", icon: Users },
                { number: "60+", label: "Faculty", icon: GraduationCap },
                { number: "15+", label: "Years", icon: Award },
                { number: "100%", label: "Support", icon: BookOpen },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="rounded-[24px] border border-slate-200 bg-white p-5"
                >
                  <item.icon className="text-[#0f766e] mb-3" size={28} />
                  <h2 className="text-3xl font-bold text-slate-900">{item.number}</h2>
                  <p className="text-slate-500">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative mx-auto w-full max-w-2xl"
          >
            <div className="relative overflow-hidden rounded-[40px] border border-slate-200 bg-white p-2">
              <img
                src={schoolImage.src}
                alt="Golden Spring School"
                className="h-[500px] w-full rounded-[32px] object-cover md:h-[600px]"
              />
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}