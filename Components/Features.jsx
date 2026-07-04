import { motion } from "framer-motion";
import {
  ShieldCheck,
  GraduationCap,
  Laptop,
  Library,
  Trophy,
  Bus,
} from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Experienced Faculty",
    description:
      "Dedicated teachers who inspire curiosity, confidence, and academic excellence.",
  },
  {
    icon: Laptop,
    title: "Smart Classrooms",
    description:
      "Technology-enabled classrooms that make learning interactive and engaging.",
  },
  {
    icon: Library,
    title: "Well Equipped Library",
    description:
      "A rich collection of books and digital resources that encourage lifelong learning.",
  },
  {
    icon: Trophy,
    title: "Sports & Activities",
    description:
      "Sports, arts, music, cultural events, and leadership opportunities for every student.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Campus",
    description:
      "A secure environment with disciplined supervision and student-first safety practices.",
  },
  {
    icon: Bus,
    title: "Transport Facility",
    description:
      "Reliable transportation covering major routes with trained staff and safety measures.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative overflow-hidden bg-white py-24">

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block rounded-full bg-[#fef3c7] px-5 py-2 text-sm font-semibold text-[#b8860b]">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-4xl lg:text-5xl font-black text-slate-900">
            A Learning Environment Designed For Success
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            At Golden Spring School, we combine academic excellence, modern
            infrastructure, experienced educators, and holistic development to
            help every student achieve their highest potential.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#fef3c7] transition group-hover:bg-[#0f766e]">
                <feature.icon size={30} className="text-[#b8860b] transition group-hover:text-white" />
              </div>

              <h3 className="mt-8 text-2xl font-bold text-slate-900">{feature.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{feature.description}</p>
              <div className="mt-8 h-1 w-16 rounded-full bg-[#0f766e] transition-all group-hover:w-full"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 rounded-[40px] border border-slate-200 bg-white px-8 py-14 text-center text-slate-900 lg:px-20"
        >
          <h2 className="text-3xl lg:text-4xl font-black">
            Empowering Students For Tomorrow
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-slate-600 text-lg leading-8">
            We believe education extends beyond the classroom. Through
            academics, innovation, sports, leadership, and character
            development, we prepare students to become confident, responsible,
            and successful global citizens.
          </p>

          <a
            href="#programs"
            className="mt-10 inline-block rounded-full bg-[#0f766e] px-8 py-4 font-semibold text-white transition hover:bg-[#115e59]"
          >
            Explore Academics
          </a>
        </motion.div>
      </div>
    </section>
  );
}