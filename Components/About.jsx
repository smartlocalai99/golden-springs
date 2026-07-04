import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Target, Eye } from "lucide-react";

import about1 from "./images/about1.jpg";
import about2 from "./images/about2.jpg";
import about3 from "./images/about3.png";
import about4 from "./images/about4.jpg";

const images = [about1.src, about2.src, about3.src, about4.src];

export default function About() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="py-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white">
              <motion.img
                key={currentImage}
                src={images[currentImage]}
                alt="Golden Spring School"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full max-h-[560px] h-auto object-contain object-center"
              />
            </div>

            {/* Image Dots */}

            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-3 z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`h-3 w-3 rounded-full transition-all ${
                    currentImage === index
                      ? "bg-white scale-125"
                      : "bg-white/50"
                  }`}
                />
              ))}
            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <span className="inline-block bg-[#fef3c7] text-[#b8860b] px-5 py-2 rounded-full font-semibold">
              About Our School
            </span>

            <h2 className="text-5xl font-black text-slate-900 mt-6 leading-tight">
              Shaping Future Leaders Through Quality Education
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              Golden Spring School is committed to providing an inspiring
              learning environment where students are encouraged to excel
              academically while developing strong character, confidence,
              creativity, and leadership skills.
            </p>

            {/* Mission */}

            <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6">

              <div className="flex gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ccfbf1]">
                  <Target size={24} className="text-[#0f766e]" />
                </div>

                <div>

                  <h3 className="text-xl font-bold">
                    Our Mission
                  </h3>

                  <p className="text-slate-600 mt-2">
                    To nurture responsible, confident, and lifelong learners
                    through academic excellence and value-based education.
                  </p>

                </div>

              </div>

            </div>

            {/* Vision */}

            <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6">

              <div className="flex gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fef3c7]">
                  <Eye size={24} className="text-[#b8860b]" />
                </div>

                <div>

                  <h3 className="text-xl font-bold">
                    Our Vision
                  </h3>

                  <p className="text-slate-600 mt-2">
                    To empower every student with knowledge, innovation,
                    integrity, and leadership to thrive in a changing world.
                  </p>

                </div>

              </div>

            </div>

            <a
              href="#programs"
              className="inline-block mt-10 bg-[#0f766e] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#115e59] transition"
            >
              Explore Academics
            </a>

          </motion.div>

        </div>

      </div>
    </section>
  );
}