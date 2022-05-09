import React from "react";
import {
  Footer,
  Hero,
  Navbar,
  Recommend,
  ScrollToTop,
  Services,
  Testimonial,
} from "components";

function Home() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Services />
      <Recommend />
      <Testimonial />
      <Footer />
    </>
  );
}

export default Home;
