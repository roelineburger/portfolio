import React from "react";

import "./styles.css";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1 className="portfolio-title">PORTFOLIO</h1>
      <div className="portfolio-wrapper">
        <article className="portfolio-card">
          <h1 className="holder"></h1>
          <p>RECIPE APP</p>
          <button className="portfolio-card_btn">MORE</button>
        </article>
        <article className="portfolio-card">
          <h1 className="holder"></h1>
          <p>RECIPE APP</p>
          <button className="portfolio-card_btn">MORE</button>
        </article>
        <article className="portfolio-card">
          <h1 className="holder"></h1>
          <p>RECIPE APP</p>
          <button className="portfolio-card_btn">MORE</button>
        </article>
      </div>
    </div>
  );
};

export default Portfolio;
