import React from "react";
import { Heart, UtensilsCrossed, Camera, CalendarDays } from "lucide-react";

const stats = [
  {
    icon: Heart,
    title: "Clean, Safe & Secure",
    desc: "Your child&apos;s safety is our top priority.",
    color: "text-sky-600",
    bg: "bg-sky-100",
  },
  {
    icon: UtensilsCrossed,
    title: "Nutritious Meals",
    desc: "Healthy meals and snacks for growing bodies.",
    color: "text-indigo-600",
    bg: "bg-indigo-100",
  },
  {
    icon: Camera,
    title: "Daily Updates",
    desc: "Stay connected with photos and classroom updates.",
    color: "text-violet-600",
    bg: "bg-violet-100",
  },
  {
    icon: CalendarDays,
    title: "Flexible Schedule",
    desc: "Options that work for your family.",
    color: "text-amber-600",
    bg: "bg-amber-100",
  },
];

export default function Stats() {
  return (
    <section id="stats" className="bg-slate-100 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-3xl ${item.bg} ${item.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
