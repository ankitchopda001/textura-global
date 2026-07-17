import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Stats />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default LandingPage;