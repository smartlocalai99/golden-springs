import React from "react";
import { Users, BookOpen, Star, Heart, Shield } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Users,
      title: "Safe & Caring Environment",
      desc: "A secure, loving space where every child feels comfortable.",
      color: "from-sky-50 to-sky-100 text-sky-700",
    },
    {
      icon: BookOpen,
      title: "Play-Based Learning",
      desc: "Hands-on learning that sparks curiosity and creativity.",
      color: "from-indigo-50 to-indigo-100 text-indigo-700",
    },
    {
      icon: Star,
      title: "Experienced Teachers",
      desc: "Passionate educators dedicated to each child’s growth.",
      color: "from-violet-50 to-violet-100 text-violet-700",
    },
    {
      icon: Heart,
      title: "Holistic Development",
      desc: "Supporting academic, social, and emotional growth.",
      color: "from-amber-50 to-amber-100 text-amber-700",
    },
    {
      icon: Shield,
      title: "Parent Partnerships",
      desc: "Working together to build strong foundations for success.",
      color: "from-rose-50 to-rose-100 text-rose-700",
    },
  ];

  return (
    <section id="features" className="bg-slate-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 rounded-[2.5rem] bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8 lg:p-10">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-slate-300">
                  <div className={`inline-flex h-14 w-14 items-center justify-center rounded-3xl ${item.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
