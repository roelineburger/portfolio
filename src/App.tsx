import React from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import HomeBanner from "./Components/Home-Banner";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeBanner />
      <About />
      <Portfolio />
      <Skills />
    </div>
  );
}

export default App;
