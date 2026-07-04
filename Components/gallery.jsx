import galleryImage1 from "./images/Gallery1.jpg";
import galleryImage2 from "./images/Gallery2.jpg";
import galleryImage3 from "./images/gallery3.jpg";

const galleryItems = [
  {
    title: "Celebrating Achievements",
    description:
      "Recognizing student excellence, growth, and milestones in academics, sports, and beyond.",
    image: galleryImage1,
    alt: "Golden Spring School classroom environment",
  },
  {
    title: "Campus Celebrations",
    description:
      "A vibrant school culture filled with activities, events, and joyful student memories.",
    image: galleryImage2,
    alt: "Golden Spring School celebration and campus life",
  },
  {
    title: "Play Area Fun",
    description:
      "A safe and joyful play space where children explore, laugh, and build lasting friendships.",
    image: galleryImage3,
    alt: "Golden Spring School play area",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-slate-50 py-24">
      <div className="mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          <span className="inline-block rounded-full bg-[#ecfeff] px-5 py-2 text-sm font-semibold text-[#0f766e]">
            Gallery
          </span>
          <h2 className="mt-6 text-4xl lg:text-5xl font-black text-slate-900">
            Moments That Capture the Spirit of Learning
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Discover the energy, creativity, and community that define life at
            Golden Spring School.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="flex h-full flex-col overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm"
            >
              <div className="h-80 overflow-hidden">
                <img
                  src={item.image.src}
                  alt={item.alt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
