import { style } from "@mui/system";
import React, { useState } from "react";
import abhijith from "../Images/abhijith.jpg";
import "./About.css";

const About = () => {
  const [skill, setSkill] = useState(true);
  const [experience, setEducation] = useState(false);
  const [education, setExperience] = useState(false);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="image">
            <img src={abhijith} alt="jloo" />
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="about">
              <h1>About me</h1>
              <p>
                Secure a responsible career opportunity to fully utilize my
                training and skills, while making a significant contribution to
                the success of the company. Capable of analyzing problems and
                generating solutions, ready to learn, a simple yet passionate
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col links">
              <span
                className="linksmain"
                onClick={() => {
                  setExperience(false);
                  setSkill(true);
                  setEducation(false);
                }}
              >
                Main Skills
              </span>
              <span
                className="linksmain"
                onClick={() => {
                  setSkill(false);
                  setExperience(true);
                  setEducation(false);
                }}
              >
                Experience
              </span>
              <span
                className="linksmain"
                onClick={() => {
                  setEducation(true);
                  setSkill(false);
                  setExperience(false);
                }}
              >
                Education & Certification
              </span>
            </div>
          </div>
          <div className="row">
            {skill && (
              <div className="skill">
                <p>
                  <span>Web and user interface design -</span> Development
                  Websites, web experiences, ...
                </p>
                <p>
                  <span>software -</span> Softwares, web experiences, ...
                </p>
              </div>
            )}

            {education && (
              <div className="experience">
                <p>
                  <span>Resort Management -</span>Degree Final Year main Project
                </p>
                <p>
                  <span>internship -</span> at Helixo Innovations on ReactJS
                  <br /> (5 Months)
                </p>
              </div>
            )}
            {experience && (
              <div className="certification">
                <p>
                  <span>Bsc Computer Science -</span> from Kerela University
                </p>
                <p>
                  <span>ReactJS Certification -</span> currently attending from
                  Altos Technologies
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
