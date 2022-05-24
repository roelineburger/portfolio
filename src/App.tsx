import React, { useRef, useEffect, forwardRef } from "react";
import Navbar from "./Components/Navbar";
import Project from "./Components/Project";
import "./App.css";
import HomeBanner from "./Components/Home-Banner";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";

const App = () => {
  let portfolioRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  const scrollToPortfolio = () => {
    if (!portfolioRef.current) return;
    portfolioRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <Navbar scrollToPortfolio={scrollToPortfolio} />
      <HomeBanner />
      <About />
      <Portfolio ref={portfolioRef} />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
