import React from "react";
import img from "./6.jpg";
import img2 from "./10.jpg";
import img3 from "./11.jpg";
import "./styles.css";

const HomeBanner = () => {
  return (
    <div className="banner">
      <article className="banner-text">
        <h2 className="banner-text-header1">Hi! I'm Roeline Burger</h2>
        <h2 className="banner-text-header2">FULLSTACK SOFTWARE DEVELOPER</h2>
        <p className="banner-text-p">
          Inquisitive. Creator. Life-long learner.{" "}
        </p>
      </article>
      <img className="banner-image" src={img} />
      <img className="banner-image2" src={img2} />
      <img className="banner-image3" src={img3} />
    </div>
  );
};

export default HomeBanner;
