import React from "react";
import "./Technology.css";
import html from "../Images/html.png";
import css from "../Images/css2.png";
import js from "../Images/js2.jpg";
import reactjs from "../Images/logo192.png";
import bootstrap from "../Images/bootstrap.png";

const Projects = () => {
  return (
    <div className="parent-tech">
      <div className="heading">
        <p>Techologies</p>
      </div>

      <div className="child-tech">
        <div className="data">
          <div className="image-tech">
            <img src={html}></img>
          </div>
          <div className="text-tech">HTML</div>
        </div>
        <div className="data">
          <div className="image-tech">
            <img src={css}></img>
          </div>
          <div className="text-tech">CSS</div>
        </div>
        <div className="data">
          <div className="image-tech">
            <img src={js}></img>
          </div>
          <div className="text-tech">JavaScript</div>
        </div>
        <div className="data">
          <div className="image-tech">
            <img src={reactjs}></img>
          </div>
          <div className="text-tech">ReactJS</div>
        </div>
        <div className="data">
          <div className="image-tech">
            <img src={bootstrap}></img>
          </div>
          <div className="text-tech">BootStrap</div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
