import "./Home.scss";

import Landing from "../Landing/Landing";
import Features from "../Features/Features";
import Pricing from "../Pricing/Pricing";
import About from "../About/About";
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);
  // Check for # in url after page load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Scroll to the element with the id of the hash
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, []);

  return (
    <>
      <div data-aos="flip-left">
        <Landing />
      </div>{" "}
      <div data-aos="flip-down">
        <Features />
      </div>
      <div data-aos="fade-down">
        <Pricing />
      </div>
      <div data-aos="fade-down">
        <About />
      </div>
      <Footer />
    </>
  );
};

export default Home;
