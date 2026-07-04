import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ramesh Kumar",
    role: "Parent of Grade V Student",
    review:
      "Golden Spring School has provided an exceptional learning environment. The teachers are dedicated, supportive, and truly care about every student's growth.",
  },
  {
    name: "Priya Sharma",
    role: "Parent of Grade VIII Student",
    review:
      "The school's focus on academics, discipline, and extracurricular activities has helped my child become more confident and responsible.",
  },
  {
    name: "Anil Reddy",
    role: "Parent of Grade III Student",
    review:
      "The faculty is approachable, the campus is safe, and the learning experience is outstanding. We are proud to be a part of the Golden Spring family.",
  },
];

export default function Testimonial() {
  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-block rounded-full bg-[#fef3c7] px-5 py-2 text-sm font-semibold text-[#b8860b]">
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-5xl">
            What Parents Say
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            The trust of our parents inspires us to provide quality education,
            holistic development, and a nurturing environment for every child.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group relative rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm transition-colors duration-300 hover:bg-[#0f766e]"
            >
              <div className="absolute right-6 top-6 text-[#0f766e]/10">
                <Quote size={64} />
              </div>

              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={18} fill="#b8860b" stroke="#b8860b" className="transition-colors duration-300 group-hover:fill-white group-hover:stroke-white" />
                ))}
              </div>

              <p className="mt-8 text-base leading-8 text-slate-600 transition-colors duration-300 group-hover:text-white">
                “{item.review}”
              </p>

              <div className="mt-10 border-t border-slate-100 pt-6 transition-colors duration-300 group-hover:border-white/20">
                <h4 className="text-lg font-semibold text-slate-900 transition-colors duration-300 group-hover:text-white">{item.name}</h4>
                <p className="mt-1 text-sm text-slate-500 transition-colors duration-300 group-hover:text-[#d1fae5]">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}