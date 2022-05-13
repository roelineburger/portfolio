import React from "react";
import "./styles.css";

import img from "./1.jpg";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills-wrapper">
        <img className="about-img" src={img} />
        <h1 className="skills-title">SKILLS</h1>

        <p>
          After being selected from 1000 applicants I completed an intensive
          three month training program for full stack web development with a
          focus on TDD, mob programming, and applied learning at the School of
          Applied Technology in Sotckholm, Sweden.
        </p>
        <ul>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Redux</li>
          <li>Webpack</li>
          <li>HTML</li>
          <li>jQuery</li>
          <li>CSS</li>
          <li>Mocha/Jest</li>
          <li>Docker</li>
          <li>Git+GitHub</li>
          <li>GitHub Actions</li>
          <li>AWS</li>
          <li>
            Cloud Platforms (MongoDB Atlas, ElephantSQL, Netlify, Heroku,
            Contentful)
          </li>
          <li>TDD</li>
          <li>Agile work methods</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
