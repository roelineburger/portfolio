import React from "react";
import img from "./1.jpeg";
import "./styles.css";

const HomeBanner = () => {
  return (
    <div className="banner">
      <article className="banner-text">
        <h2>Hi! I'm Roeline Burger</h2>
        <h2>Fullstack Software Developer</h2>
        <p>akdlkjdlaskdjlaskdlasknflasjfalskjfalskjf</p>
      </article>
      <img className="banner-image" src={img} alt="logo" />
    </div>
  );
};

export default HomeBanner;
