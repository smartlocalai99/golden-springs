"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Faq() {
  const [open, setOpen] = useState(0);

  const faqs = [
    {
      question: "What ages do you accept?",
      answer:
        "We welcome learners from 18 months through 15 years with programs tailored to each developmental stage.",
    },
    {
      question: "What makes your curriculum special?",
      answer:
        "Our curriculum balances play-based discovery, foundational academics, social-emotional learning, and creativity.",
    },
    {
      question: "How do you support new students?",
      answer:
        "New students receive gentle transitions, small-group attention, and regular communication with families.",
    },
    {
      question: "Can families visit the school?",
      answer:
        "Yes. We offer guided tours and open-house visits so families can meet our teachers and see our classrooms.",
    },
  ];

  return (
    <section className="bg-slate-50 py-24 px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-[2rem] px-8 py-16 shadow-xl ring-1 ring-slate-200 sm:px-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          <div>
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
              Frequently asked questions
            </div>

            <h2 className="text-5xl font-semibold leading-tight text-slate-950">
              Frequently asked
              <br />
              <span className="text-indigo-600">questions</span>
            </h2>

            <p className="mt-6 text-slate-500 text-sm leading-relaxed max-w-sm">
              Find the answers families often ask about admission, programs, schedules, and support services at BrightStart.
            </p>
          </div>

          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-slate-50 border border-slate-200 rounded-[1.75rem] shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpen(open === index ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-slate-950 text-lg font-medium">
                    {faq.question}
                  </span>

                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600 text-white">
                    {open === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </button>

                {open === index && (
                  <div className="px-6 pb-6">
                    <p className="text-slate-600 text-sm leading-relaxed max-w-lg">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}