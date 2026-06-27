import React from "react";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonial" className="bg-gradient-to-br from-slate-50 via-sky-50 to-violet-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-indigo-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-indigo-700">
              Testimonials
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
              Loved by families, trusted by parents
            </h2>
            <p className="max-w-xl text-lg leading-8 text-slate-600">
              Discover why families choose BrightStart for warm classrooms, thoughtful teachers, and joyful early learning.
            </p>
          </div>

          <div className="rounded-[2.5rem] bg-indigo-900 p-8 text-white shadow-2xl sm:p-10">
            <div className="flex gap-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-5 w-5 text-amber-300" fill="#FCD34D" />
              ))}
            </div>
            <p className="mt-8 text-xl leading-9">
              “The teachers truly care about every child. Our daughter has blossomed academically and socially. We couldn’t be happier with our experience.”
            </p>
            <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-white/10 p-6 shadow-lg backdrop-blur-sm">
              <p className="font-semibold text-white">Sarah Johnson</p>
              <p className="mt-1 text-sm text-slate-300">Parent</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
