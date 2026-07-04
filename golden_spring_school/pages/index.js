import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Features from "../Components/Features";
import About from "../Components/About";
import Program from "../Components/Program";
import Testimonial from "../Components/Testimonial";
import Footer from "../Components/Footer";
import Faq from "../Components/Faq";

export default function Home() {
  return (
    <main className="bg-slate-50 text-slate-950">
      <Navbar />
      <Hero />
      <About />
      <Program />
     <Features />
      <Testimonial />
      <Faq />
      <Footer />
    </main>
  );
}
