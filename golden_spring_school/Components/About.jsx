import React from "react";
import { Sparkles, BookOpen, Users } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-indigo-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-indigo-700">
              Welcome to BrightStart
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
              Where every child feels seen, heard, and valued
            </h2>
            <p className="max-w-xl text-lg leading-8 text-slate-600">
              At BrightStart, we believe every child is unique. Our programs are designed to inspire a love of learning while building confidence, creativity, and compassion.
            </p>
            <a
              href="#programs"
              className="inline-flex items-center rounded-full bg-indigo-600 px-8 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-indigo-700"
            >
              Learn more about us
            </a>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80"
                alt="Children learning together"
                className="h-full w-full object-cover"
              />
              <div className="absolute left-5 top-5 rounded-3xl bg-white/90 px-4 py-3 text-sm font-semibold text-slate-950 shadow-sm">
                A place to learn, laugh & grow
              </div>
            </div>
            <div className="grid gap-6">
              <div className="rounded-[2rem] border border-indigo-200 bg-indigo-50 p-6 shadow-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-indigo-100 text-indigo-600">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-950">Creative discovery</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Joyful, play-based experiences that spark imagination every day.
                </p>
              </div>

              <div className="rounded-[2rem] border border-indigo-200 bg-indigo-50 p-6 shadow-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-indigo-100 text-indigo-600">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-950">Strong academics</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Purposeful lessons and skilled teachers help every learner grow with confidence.
                </p>
              </div>

              <div className="rounded-[2rem] border border-indigo-200 bg-indigo-50 p-6 shadow-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-indigo-100 text-indigo-600">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-950">Community & care</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  A warm, inclusive environment where every child feels supported.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
