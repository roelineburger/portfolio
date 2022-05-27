import React, { forwardRef, useState } from "react";
import "./styles.css";
import img2 from "./recipe.png";
import img3 from "./ubiquity.png";
import img4 from "./puppies.png";

const Portfolio = ({ innerRef }: any) => {
  const [isExpanded, setExpanded] = useState(false);
  const [isExpanded1, setExpanded1] = useState(false);
  const [isExpanded2, setExpanded2] = useState(false);

  const handleClick = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };
  const handleClick2 = () => {
    setExpanded1((prevExpanded) => !prevExpanded);
  };
  const handleClick3 = () => {
    setExpanded2((prevExpanded) => !prevExpanded);
  };

  return (
    <div className="portfolio">
      <h1 className="portfolio-title" ref={innerRef}>
        PORTFOLIO
      </h1>
      <div className="portfolio-wrapper">
        <article className="portfolio-card">
          <img className="holder" src={img2} alt="" />
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
              </>
            )}
          </div>
        </article>
        <article className="portfolio-card">
          <img className="holder" src={img3} alt="" />
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
        <article className="portfolio-card">
          <img className="holder" src={img4} alt="" />
          <h4 className="card-text">PUPPIES APP</h4>
          <p className="card-text">
            A Puppies app built with React, Nodejs, TypeScript and Express.
            Functionality includes being able to add, edit and delete a puppy.
            Puppies are saved to a local .json file.
          </p>
          <div className="collapsible">
            <button className="button" onClick={handleClick3}>
              {" "}
              {isExpanded2 ? "LESS" : "MORE"}
            </button>
            {isExpanded2 && (
              <>
                <a
                  href="https://github.com/roelineburger/puppies-fullstack-app/tree/main"
                  target="_blank"
                  rel="noreferrer"
                  className="portfolio-button"
                >
                  GITHUB
                </a>
              </>
            )}
          </div>
        </article>
      </div>
    </div>
  );
};

export default forwardRef((props, ref) => (
  <Portfolio {...props} innerRef={ref} />
));
