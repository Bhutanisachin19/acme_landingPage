import "./App.css";
import TestimonialWrapper from "./components/testimonial/TestimonialWrapper";
import NavBar from "./components/navbar/NavBar";
import Newsletter from "./components/news-letter/NewLetter";
import WhatMakesUsSpecial from "./components/what-makes-us-special/WhatMakesUsSpecial";
import Footer from "./components/footer/Footer";
import TrustedBy from "./components/trusted-by/TrustedBy";
import BookFreeTrail from "./components/book-free-trail/BookFreeTrail";
import Pricing from "./components/pricing/Pricing";
import FloatingMessage from "./components/floating-msg/FloatingMessage";
import TopFloatMessage from "./components/floating-msg/TopFloatMessage";
import HeroSection from "./components/hero-section/HeroSection";
import AboutProduct from "./components/product/AboutProduct";
import ProductDemo from "./components/product/ProductDemo";
import ProductFeature from "./components/product/ProductFeature";
import ShareAndColab from "./components/product/ShareAndColab";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import MainSite from "./components/MainSide";
import Msite from "./components/Msite";

export const elemetIdConst = {
  PRICING: "pricing_element",
  ABOUT: "about_element",
  CONTACT: "contact_element",
};

function App() {
  return (
    <>
      <div className="hidden sm:block">
        <MainSite />
      </div>

      <div className="block sm:hidden ">
        <Msite />
      </div>

      <div className="bg-black">
        <Footer />
      </div>
    </>
  );
}

export default App;
