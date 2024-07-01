import { useEffect } from "react";
import { elemetIdConst } from "../App";
import BookFreeTrail from "./book-free-trail/BookFreeTrail";
import FloatingMessage from "./floating-msg/FloatingMessage";
import HeroSection from "./hero-section/HeroSection";
import Navbar from "./navbar/NavBar";
import Newsletter from "./news-letter/NewLetter";
import Pricing from "./pricing/Pricing";
import AboutProduct from "./product/AboutProduct";
import ProductDemo from "./product/ProductDemo";
import ProductFeature from "./product/ProductFeature";
import ShareAndColab from "./product/ShareAndColab";
import TestimonialWrapper from "./testimonial/TestimonialWrapper";
import TrustedBy from "./trusted-by/TrustedBy";
import WhatMakesUsSpecial from "./what-makes-us-special/WhatMakesUsSpecial";
import Aos from "aos";
import "aos/dist/aos.css";
import TopFloatMessage from "./floating-msg/TopFloatMessage";

const MainSite = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="bg-slate-800">
        <TopFloatMessage />
        <Navbar />

        <div className="hidden sm:block" data-aos="zoom-in">
          <HeroSection />
        </div>

        <TrustedBy />

        <div data-aos="fade-left">
          <TestimonialWrapper />
        </div>

        <div data-aos="fade-right">
          <WhatMakesUsSpecial />
        </div>

        <Newsletter />

        <div data-aos="zoom-in" id={elemetIdConst.PRICING}>
          <Pricing />
        </div>
        {/* product info */}
        <div data-aos="zoom-in" id={elemetIdConst.ABOUT}>
          <AboutProduct />
        </div>

        <div data-aos="fade-right">
          <ProductDemo />
        </div>

        <ProductFeature />

        <div data-aos="zoom-in">
          <ShareAndColab />
        </div>

        <div id={elemetIdConst.CONTACT}>
          <BookFreeTrail />
        </div>
        <FloatingMessage />
      </div>
    </>
  );
};

export default MainSite;
