import React from "react";
import { Link } from "react-router-dom";

import useCollapse from "react-collapsed";
import img from "./1.svg";
import "./styles.css";
import img2 from "./recipe.png";
import img3 from "./ubiquity.png";

const Portfolio = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

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
            <div className="button" {...getToggleProps()}>
              {isExpanded ? "LESS" : "MORE"}
            </div>
            <div {...getCollapseProps()}>
              <div className="content">
                Now you can see the hidden content. <br />
                <br />
                Click again to hide...
              </div>
            </div>
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
            <div className="button" {...getToggleProps()}>
              {isExpanded ? "LESS" : "MORE"}
            </div>
            <div {...getCollapseProps()}>
              <div className="content">
                Now you can see the hidden content. <br />
                <br />
                Click again to hide...
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Portfolio;