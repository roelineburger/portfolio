import React from "react";
import "./styles.css";

import img from "./1.jpg";
import img1 from "./2.png";
import img2 from "./2.svg";
import img3 from "./3.png";
import img4 from "./4.png";
import img5 from "./5.svg";
import img6 from "./6.png";
import img7 from "./7.png";
import img8 from "./8.png";
import img9 from "./9.webp";

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
          <section className="skills-tags">
            <img src={img1} width="auto" height="70" />
            <img src={img3} width="auto" height="60" />
            <img src={img4} width="auto" height="60" />
            <img src={img5} width="auto" height="60" />
            <img src={img6} width="auto" height="60" />
            <img src={img7} width="auto" height="60" />
            <img src={img8} width="auto" height="60" />
            <img src={img9} width="auto" height="60" />
          </section>
          <ul>
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
