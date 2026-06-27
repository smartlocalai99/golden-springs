import React from "react";
import { Blocks, Hand, Pencil, Backpack } from "lucide-react";

export default function Programs() {
  const programs = [
    {
      icon: Blocks,
      title: "Infants",
      age: "4 weeks - 18 months",
      desc: "Loving care and early learning in a nurturing environment.",
      bg: "bg-indigo-50",
      iconColor: "text-indigo-600",
      accent: "text-indigo-700",
    },
    {
      icon: Hand,
      title: "Toddlers",
      age: "18 months - 3 years",
      desc: "Exploring the world through play, discovery, and imagination.",
      bg: "bg-indigo-50",
      iconColor: "text-indigo-600",
      accent: "text-indigo-700",
    },
    {
      icon: Pencil,
      title: "Preschool",
      age: "3 - 5 years",
      desc: "Building skills, confidence, and a love for learning through fun.",
      bg: "bg-indigo-50",
      iconColor: "text-indigo-600",
      accent: "text-indigo-700",
    },
    {
      icon: Backpack,
      title: "Pre-K",
      age: "4 - 5 years",
      desc: "Preparing young learners for school with hands-on growth.",
      bg: "bg-indigo-50",
      iconColor: "text-indigo-600",
      accent: "text-indigo-700",
    },
  ];

  return (
    <section id="programs" className="bg-[#f7fdf6] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex rounded-full bg-indigo-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-indigo-700">
            Our programs
          </span>
          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            Programs for Every Stage of Growth
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {programs.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className={`rounded-[2.25rem] ${item.bg} p-8 shadow-sm ring-1 ring-indigo-200`}>
                <div className={`inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-white/90 ${item.iconColor}`}>
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="mt-8 text-xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{item.age}</p>
                <p className="mt-6 text-sm leading-6 text-slate-600">{item.desc}</p>
                <a href="#contact" className={`mt-8 inline-flex items-center text-sm font-semibold ${item.accent} transition hover:opacity-90`}>
                  Learn more →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
