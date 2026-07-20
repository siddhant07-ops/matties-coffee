import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import SpecialOffer from "./components/SpecialOffer";
import Gallery from "./components/Gallery";
import BestSellers from "./components/BestSellers"; 
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

import Loading from "./components/Loading";
import BackToTop from "./components/BackToTop";

function App() {
  const [loading, setLoading] = useState(true);

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
    <>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Testimonials />
      <SpecialOffer />
      <Gallery />
      <BestSellers />
      <Newsletter />
      <Footer />

      // <BackToTop />
    </>
  );
}

export default App;