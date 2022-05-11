import React from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import HomeBanner from "./Components/Home-Banner";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeBanner />
      <About />
      <Portfolio />
    </div>
  );
}

export default App;
