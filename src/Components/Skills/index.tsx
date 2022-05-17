import React from "react";
import "./styles.css";

import img from "./1.jpg";
import img2 from "./2.svg";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills-wrapper">
        <img className="skills-img" src={img} />
        <section className="skills-text">
          <h1 className="skills-title">SKILLS</h1>

          <p>
            After being selected from 1000 applicants I completed an intensive
            three month training program for full stack web development with a
            focus on TDD, mob programming, and applied learning at the School of
            Applied Technology in Sotckholm, Sweden. My skills currently
            include:
          </p>

          <ul>
            <li>
              <img className="skills-check" src={img2} />
              JavaScript
            </li>
            <li>
              <img className="skills-check" src={img2} />
              TypeScript
            </li>
            <li>
              <img className="skills-check" src={img2} />
              React
            </li>
            <li>
              <img className="skills-check" src={img2} />
              Redux
            </li>
            <li>
              <img className="skills-check" src={img2} />
              Webpack
            </li>

            <li>
              <img className="skills-check" src={img2} />
              Mocha/Jest
            </li>
            <li>
              <img className="skills-check" src={img2} />
              Docker
            </li>
            <li>
              <img className="skills-check" src={img2} />
              Git+GitHub
            </li>
            <li>
              <img className="skills-check" src={img2} />
              GitHub Actions
            </li>
            <li>
              <img className="skills-check" src={img2} />
              Google Analytics
            </li>
            <li>
              <img className="skills-check" src={img2} />
              AWS
            </li>
            <li>
              <img className="skills-check" src={img2} />
              Cloud Platforms (MongoDB Atlas, ElephantSQL, Netlify, Heroku)
            </li>
            <li>
              <img className="skills-check" src={img2} />
              TDD
            </li>
            <li>
              <img className="skills-check" src={img2} />
              Agile work methods
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Skills;
