import React from "react";
import img from "./1.jpeg";
import "./styles.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-wrapper">
        <img className="about-img" src={img} />
        <article className="about-text">
          <h3 className="about-title">MY WHY</h3>
          <p></p>
        </article>
        <p></p>
      </div>
    </div>
  );
};

export default About;
