import Contact from "components/contact/Contact";
import About from "components/home/About";
import Hero from "components/home/Hero";
import Purpose from "components/home/Purpose";
import Services from "components/home/Services";
import Footer from "components/layout/Footer";
import Navbar from "components/layout/Navbar";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <>
      <div id="home">
      <Navbar />
        <Hero />
      </div>
      <Purpose />
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="contact">
        <Contact />

      </div>
      <Footer />
      <Toaster/>
    </>
  );
}
