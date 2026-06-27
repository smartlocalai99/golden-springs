from pathlib import Path

files = {
    "styles/globals.css": """@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: light;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif;
  background-color: #f8fafc;
  color: #0f172a;
}

img {
  display: block;
  max-width: 100%;
}

button,
a {
  font: inherit;
}
""",
    "Components/Navbar.jsx": """import React from \"react\";

export default function Navbar() {
  return (
    <header className=\"sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur-md\">
      <div className=\"mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5\">
        <a href=\"#home\" className=\"text-2xl font-extrabold tracking-tight text-slate-950\">
          Golden Spring School
        </a>

        <nav aria-label=\"Main Navigation\" className=\"w-full sm:w-auto\">
          <ul className=\"flex flex-wrap items-center justify-center gap-3\">
            <li>
              <a href=\"#home\" className=\"rounded-full bg-amber-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-300\">
                Home
              </a>
            </li>
            <li>
              <a href=\"#about\" className=\"rounded-full bg-slate-100 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200\">
                About Us
              </a>
            </li>
            <li>
              <a href=\"#programs\" className=\"rounded-full bg-slate-100 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200\">
                Programs
              </a>
            </li>
            <li>
              <a href=\"#features\" className=\"rounded-full bg-slate-100 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200\">
                Features
              </a>
            </li>
            <li>
              <a href=\"#testimonial\" className=\"rounded-full bg-slate-100 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200\">
                Parents
              </a>
            </li>
            <li>
              <a href=\"#contact\" className=\"rounded-full bg-slate-950 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-800\">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
""",
    "Components/Hero.jsx": """import Image from \"next/image\";

export default function Hero() {
  return (
    <section id=\"home\" className=\"relative overflow-hidden bg-gradient-to-br from-slate-50 via-slate-100 to-white py-24\">
      <div className=\"pointer-events-none absolute -left-20 top-12 h-80 w-80 rounded-full bg-pink-200/40 blur-3xl\" />
      <div className=\"pointer-events-none absolute right-0 top-24 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl\" />

      <div className=\"mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-center\">
        <div className=\"space-y-6 lg:w-1/2\">
          <span className=\"inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-xs font-semibold uppercase tracking-[0.36em] text-white\">
            LEARN. GROW. THRIVE.
          </span>

          <div className=\"h-1 w-24 rounded-full bg-emerald-500\" />

          <h1 className=\"text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl\">
            A Bright Start <br />
            For a Brighter <br />
            Tomorrow
          </h1>

          <p className=\"max-w-xl text-lg leading-8 text-slate-600\">
            Nurturing curious minds and kind hearts in a safe, joyful, and inspiring environment.
          </p>
        </div>

        <div className=\"relative lg:w-1/2\">
          <div className=\"overflow-hidden rounded-[2rem] bg-slate-950/5 shadow-[0_40px_80px_rgba(15,23,42,0.08)]\">
            <Image
              src=\"/images/hero-image.png\"
              alt=\"Children learning and playing together\"
              width={840}
              height={680}
              className=\"h-auto w-full object-cover\"
            />
          </div>

          <div className=\"absolute -bottom-6 left-6 rounded-full border border-white bg-white/95 px-5 py-4 text-sm font-semibold text-slate-950 shadow-xl\">
            LITTLE STEPS <br />
            BIG FUTURES
          </div>
        </div>
      </div>
    </section>
  );
}
""",
    "Components/About.jsx": """import Image from \"next/image\";

export default function About() {
  return (
    <section id=\"about\" className=\"bg-white py-24\">
      <div className=\"mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center\">
        <div className=\"space-y-8\">
          <span className=\"inline-flex rounded-full bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-emerald-700\">
            WELCOME TO BRIGHTSTART
          </span>

          <h2 className=\"text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl\">
            Where Every Child <br />
            Feels Seen, Heard, <br />
            and Valued
          </h2>

          <p className=\"max-w-xl text-lg leading-8 text-slate-600\">
            At BrightStart, we believe every child is unique. Our programs are designed to inspire a love of learning while building confidence, creativity, and compassion.
          </p>

          <a href=\"#programs\" className=\"inline-flex rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600\">
            LEARN MORE ABOUT US →
          </a>
        </div>

        <div className=\"grid gap-6\">
          <div className=\"relative overflow-hidden rounded-[2rem] bg-slate-950/5 p-4 shadow-xl\">
            <Image
              src=\"/images/about-main.png\"
              alt=\"Children in a bright classroom\"
              width={760}
              height={560}
              className=\"h-auto w-full rounded-[1.5rem] object-cover\"
            />
          </div>

          <div className=\"grid gap-5 sm:grid-cols-2\">
            <div className=\"rounded-[1.5rem] bg-white p-5 shadow-sm ring-1 ring-slate-200\">
              <div className=\"flex items-center gap-4\">
                <div className=\"flex h-14 w-14 items-center justify-center rounded-3xl bg-emerald-50\">
                  <Image
                    src=\"/images/school-icon.png\"
                    alt=\"School icon\"
                    width={40}
                    height={40}
                    className=\"h-10 w-10 object-contain\"
                  />
                </div>
                <div>
                  <h4 className=\"text-lg font-semibold text-slate-950\">
                    A Place to Learn, Laugh & Grow
                  </h4>
                </div>
              </div>
            </div>

            <div className=\"overflow-hidden rounded-[1.5rem] bg-slate-950/5\">
              <Image
                src=\"/images/about-kids.png\"
                alt=\"Children playing happily\"
                width={760}
                height={560}
                className=\"h-auto w-full object-cover\"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
""",
    "Components/Features.jsx": """import React from \"react\";
import {
  Users,
  BookOpen,
  Star,
  Heart,
  Shield,
} from \"lucide-react\";

export default function Features() {
  const features = [
    {
      icon: <Users size={28} />,
      title: \"Safe & Caring\\nEnvironment\",
      desc: \"A secure and loving space for every child.\",
      color: \"#63C66D\",
    },
    {
      icon: <BookOpen size={28} />,
      title: \"Play-Based\\nLearning\",
      desc: \"Hands-on learning that sparks curiosity.\",
      color: \"#F7C62F\",
    },
    {
      icon: <Star size={28} />,
      title: \"Experienced\\nTeachers\",
      desc: \"Passionate educators dedicated to growth.\",
      color: \"#5B8FF9\",
    },
    {
      icon: <Heart size={28} />,
      title: \"Holistic\\nDevelopment\",
      desc: \"Supporting academic, social & emotional growth.\",
      color: \"#FF92B2\",
    },
    {
      icon: <Shield size={28} />,
      title: \"Strong Parent\\nPartnership\",
      desc: \"Together, we build a strong foundation.\",
      color: \"#A67BEF\",
    },
  ];

  return (
    <section id=\"features\" className=\"bg-slate-50 py-24\">
      <div className=\"mx-auto max-w-7xl px-6\">
        <div className=\"grid gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5\">
          {features.map((item, index) => (
            <article key={index} className=\"rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md\">
              <div className=\"mb-6 inline-flex h-14 w-14 items-center justify-center rounded-3xl text-slate-950\" style={{ background: item.color }}>
                {item.icon}
              </div>
              <h4 className=\"text-xl font-semibold leading-tight text-slate-950\">
                {item.title.split(\"\\n\").map((line, idx) => (
                  <span key={idx}>
                    {line}
                    <br />
                  </span>
                ))}
              </h4>
              <p className=\"mt-4 text-sm leading-6 text-slate-600\">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
""",
}

for rel_path, content in files.items():
    path = Path(rel_path)
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding='utf-8')
print('wrote files: ' + ', '.join(files.keys()))"