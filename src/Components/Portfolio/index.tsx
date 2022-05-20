import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import img from "./1.svg";
import "./styles.css";
import img2 from "./recipe.png";
import img3 from "./ubiquity.png";

const Portfolio = () => {
  const [isExpanded, setExpanded] = useState(false);
  const [isExpanded1, setExpanded1] = useState(false);

  const handleClick = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };
  const handleClick2 = () => {
    setExpanded1((prevExpanded) => !prevExpanded);
  };

  useEffect(() => setExpanded((prevExpanded) => !prevExpanded), []);

  return (
    <div className="portfolio">
      <h1 className="portfolio-title">PORTFOLIO</h1>
      <div className="portfolio-wrapper">
        <article className="portfolio-card">
          <img className="holder" src={img2} />
          <h4 className="card-text">RECIPE APP</h4>
          <p className="card-text">
            A Recipe app built with React, Nodejs, Mongo and Express.
            Functionality includes being able to add recipes, tag them in
            categories and then filter the recipes based on tag.
          </p>
          <div className="collapsible">
            <button className="button" onClick={handleClick}>
              {" "}
              {isExpanded ? "LESS" : "MORE"}
            </button>
            {isExpanded && (
              <>
                <a
                  href="https://github.com/roelineburger/hackday-react-recipes"
                  target="_blank"
                  rel="noreferrer"
                  className="portfolio-button"
                >
                  GITHUB
                </a>
                <a
                  href="https://github.com/roelineburger/hackday-react-recipes"
                  target="_blank"
                  rel="noreferrer"
                  className="portfolio-button"
                >
                  LIVE SITE
                </a>
              </>
            )}
          </div>
        </article>
        <article className="portfolio-card">
          <img className="holder" src={img3} />
          <h4 className="card-text">UBIQUITY DEVICE APP</h4>
          <p className="card-text">
            A Front-end Device app built with React and Typescript.
            Functionality includes fetching the data from an endpoint, being
            able to search and filter a device concurrently. Also saving the
            state in the URL.
          </p>
          <div className="collapsible">
            <button className="button" onClick={handleClick2}>
              {" "}
              {isExpanded1 ? "LESS" : "MORE"}
            </button>
            {isExpanded1 && (
              <>
                <a
                  href="https://github.com/roelineburger/ubiquiti"
                  target="_blank"
                  rel="noreferrer"
                  className="portfolio-button"
                >
                  GITHUB
                </a>
                <a
                  href="https://roelineburger.github.io/ubiquiti/?view=list&query="
                  target="_blank"
                  rel="noreferrer"
                  className="portfolio-button"
                >
                  LIVE SITE
                </a>
              </>
            )}
          </div>
        </article>
      </div>
    </div>
  );
};

export default Portfolio;
