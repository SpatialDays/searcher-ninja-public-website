import "./Home.scss";

import Landing from "../Landing/Landing";
import Features from "../Features/Features";
import Pricing from "../Pricing/Pricing";
import About from "../About/About";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Landing />
      <Features />
      <Pricing />
      <About />
      <Footer />
    </>
  );
};

export default Home;
