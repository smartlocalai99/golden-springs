import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  HelpCircle,
  PhoneCall,
  Mail,
} from "lucide-react";

const faqs = [
  {
    question: "What curriculum does Golden Spring School follow?",
    answer:
      "We follow a well-structured curriculum designed to promote academic excellence, critical thinking, creativity, and holistic development.",
  },
  {
    question: "How can I apply for admission?",
    answer:
      "Parents can submit an enquiry through our website or visit the school campus to complete the admission process with the required documents.",
  },
  {
    question: "Do you provide transportation facilities?",
    answer:
      "Yes. Safe and reliable transportation is available across major routes with trained drivers and attendants.",
  },
  {
    question: "Are extracurricular activities included?",
    answer:
      "Absolutely. Students participate in sports, music, dance, arts, clubs, leadership programs, and annual cultural events.",
  },
  {
    question: "What are the school timings?",
    answer:
      "School timings vary depending on the grade level. Detailed schedules are shared during admission and orientation.",
  },
  {
    question: "Can parents meet teachers regularly?",
    answer:
      "Yes. Parent–Teacher Meetings are conducted periodically, and appointments can also be scheduled whenever required.",
  },
];

export default function Faq() {
  const [active, setActive] = useState(0);

  return (
    <section id="faqs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-[#fef3c7] text-[#b8860b] px-5 py-2 rounded-full font-semibold">
              FAQs
            </span>

            <h2 className="text-5xl font-black text-slate-900 mt-6 leading-tight">
              Frequently Asked Questions
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-8">
              Find answers to the most common questions about admissions,
              academics, transportation, facilities, and student life at
              Golden Spring School.
            </p>

            <div className="mt-12 rounded-[30px] border border-slate-200 bg-white p-8 text-slate-900">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ccfbf1]">
                <HelpCircle size={24} className="text-[#0f766e]" />
              </div>
              <h3 className="mt-6 text-2xl font-bold">Still have questions?</h3>
              <p className="mt-4 text-slate-600 leading-7">
                Our admissions team is happy to assist you with any enquiries
                regarding admissions, curriculum, or campus facilities.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <PhoneCall size={20} />
                  <span>+91 89194 73332</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={20} />
                  <span>goldenspringschool@gmail.com</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-3xl border border-slate-200 bg-white overflow-hidden"
              >
                <button
                  onClick={() => setActive(active === index ? -1 : index)}
                  className="w-full flex items-center justify-between px-8 py-6 text-left"
                >
                  <h3 className="font-bold text-lg text-slate-900">{faq.question}</h3>
                  <motion.div animate={{ rotate: active === index ? 180 : 0 }}>
                    <ChevronDown className="text-[#0f766e]" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {active === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-8 pb-6 text-slate-600 leading-8">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}