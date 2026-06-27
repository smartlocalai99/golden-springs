import React from "react";
import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white px-6 py-24 sm:px-8 lg:px-12">

      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-indigo-200 bg-indigo-100 px-4 py-2 text-sm font-semibold uppercase tracking-[0.32em] text-indigo-700 shadow-sm">
            <Sparkles className="h-4 w-4 text-indigo-600" />
            learn. grow. thrive.
          </div>

          <h1 className="max-w-xl text-5xl font-extrabold tracking-tight text-indigo-600 sm:text-6xl">
            A Bright Start For a Brighter Tomorrow
          </h1>

          <p className="max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
            Nurturing curious minds and kind hearts in a warm, inspiring learning environment.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-8 py-3 text-base font-semibold text-white shadow-xl transition hover:bg-indigo-700"
            >
              Book a tour
            </a>
            <a
              href="#programs"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-3 text-base font-semibold text-slate-950 transition hover:bg-slate-100"
            >
              Our programs
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.75rem] border border-slate-200 bg-white px-6 py-5 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Trusted by families</p>
              <p className="mt-4 text-2xl font-semibold text-slate-950">5k+ happy parents</p>
            </div>
            <div className="rounded-[1.75rem] border border-slate-200 bg-white px-6 py-5 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Small class sizes</p>
              <p className="mt-4 text-2xl font-semibold text-slate-950">8:1 student ratio</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-100 shadow-2xl sm:rounded-[3rem]">
            <img
              src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1000&q=80"
              alt="School children learning together"
              className="h-[520px] w-full object-cover object-center sm:h-[560px]"
            />
          </div>
          <div className="absolute inset-x-8 bottom-[-26px] rounded-[2rem] border border-white bg-white/95 p-6 shadow-2xl backdrop-blur-sm sm:inset-x-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-sky-600">Where little minds do big things</p>
                <p className="mt-3 text-xl font-semibold text-slate-950">Joyful learning that builds confidence</p>
              </div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-indigo-100 text-indigo-600 shadow-sm">
                <Sparkles className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
