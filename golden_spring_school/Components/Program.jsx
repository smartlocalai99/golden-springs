import { motion } from "framer-motion";
import {
  Baby,
  BookOpen,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const programs = [
  {
    icon: Baby,
    title: "Pre-Primary",
    classes: "Nursery • Kindergarten • LKG • UKG",
    color: "bg-[#ccfbf1] text-[#0f766e]",
    description:
      "Our Pre-Primary section provides a joyful and nurturing environment where young learners develop communication, creativity, confidence, and social skills through activity-based learning and play.",
  },
  {
    icon: BookOpen,
    title: "Primary",
    classes: "Classes I – V",
    color: "bg-[#fef3c7] text-[#b8860b]",
    description:
      "The Primary curriculum focuses on building strong academic foundations while encouraging curiosity, creativity, critical thinking, and overall personality development in every child.",
  },
  {
    icon: GraduationCap,
    title: "Secondary",
    classes: "Classes VI – X",
    color: "bg-[#ccfbf1] text-[#0f766e]",
    description:
      "Our Secondary program prepares students for academic excellence through conceptual learning, practical knowledge, leadership development, career awareness, and board examination readiness.",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block rounded-full bg-[#fef3c7] px-5 py-2 text-sm font-semibold text-[#b8860b]">
            Academics
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Academic Programs
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Golden Spring School offers a structured learning journey that
            nurtures every child from their first classroom experience to
            successful secondary education through quality teaching, values,
            and holistic development.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="rounded-[30px] bg-white border border-slate-200 p-8 transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${program.color}`}>
                <program.icon size={32} />
              </div>

              <span className="inline-block mt-6 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                {program.classes}
              </span>

              <h3 className="mt-6 text-3xl font-bold text-slate-900">{program.title}</h3>
              <p className="mt-5 text-slate-600 leading-8">{program.description}</p>

              <button className="mt-8 flex items-center gap-2 font-semibold text-[#0f766e] hover:gap-3 transition-all">
                Learn More
                <ArrowRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 rounded-[40px] border border-slate-200 bg-white p-12 text-center text-slate-900"
        >
          <h2 className="text-4xl font-black">
            Empowering Every Child for a Brighter Tomorrow
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Beyond academics, Golden Spring School provides opportunities in
            sports, cultural activities, leadership programs, life skills,
            technology, and value-based education to help every student become
            confident, responsible, and future-ready.
          </p>

          <a
            href="#contact"
            className="inline-block mt-10 rounded-full bg-[#0f766e] px-8 py-4 font-semibold text-white transition hover:bg-[#115e59]"
          >
            Apply for Admission
          </a>
        </motion.div>
      </div>
    </section>
  );
}