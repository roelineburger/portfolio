import React from "react";
import img from "./3.jpeg";
import "./styles.css";

const About = () => {
  let ref1 = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  let ref2 = React.useRef();

  function scrollTo(ref: any) {
    if (!ref.current) return;
    ref.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="about">
      <div className="about-wrapper">
        <img className="about-img" src={img} />
        <article className="about-text">
          <h3 className="about-title" onClick={() => scrollTo(ref1)}>
            MY WHY
          </h3>
          <p className="about-text-p">
            As a mother to my son, I am constantly inspired to build a better future through technology. Being a software developer allows me to contribute to shaping the world he will inherit, and that motivates me every day.
            <br></br>         <br></br>
           I believe in creating a diverse and inclusive environment where everyone has equal opportunities to thrive. Through my work and advocacy, I strive to break down barriers and foster a more inclusive tech community.  
          </p>
          <p className="about-text-p2" ref={ref1}>
            This is me daring greatly.
          </p>
        </article>
      </div>
    </div>
  );
};

export default About;
