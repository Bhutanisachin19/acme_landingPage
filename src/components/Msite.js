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
import { elemetIdConst } from "../App";

const Msite = () => {
  return (
    <>
      <div className="bg-slate-800">
        {/* <TopFloatMessage /> */}
        <Navbar />
        <HeroSection />
        <TrustedBy />
        <TestimonialWrapper />
        <WhatMakesUsSpecial />
        <Newsletter />
        <div id={elemetIdConst.PRICING}>
          <Pricing />
        </div>
        {/* product info */}
        <div id={elemetIdConst.ABOUT}>
          <AboutProduct />
        </div>
        <ProductDemo />
        <ProductFeature />
        <ShareAndColab />
        <div id={elemetIdConst.CONTACT}>
          <BookFreeTrail />
        </div>
        <FloatingMessage />
      </div>
    </>
  );
};

export default Msite;
