import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BestSellers from "./components/BestSellers";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import SpecialOffer from "./components/SpecialOffer";
import Gallery from "./components/Gallery";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import BackToTop from "./components/BackToTop";

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div
      className={
        darkMode
          ? "min-h-screen bg-gray-950 text-white transition-colors duration-500"
          : "min-h-screen bg-white text-black transition-colors duration-500"
      }
    >
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Hero />
      <BestSellers />
      <WhyChooseUs />
      <Testimonials />
      <SpecialOffer />
      <Gallery />
      <Newsletter />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;