import React from "react";
import "./Profile.css";
import abhijth from "../Images/abhijith.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import resumes from "../Resume/resumes.docx";

const Profile = () => {
  const Linkedin = styled(LinkedInIcon)`
    color: white;
    cursor: pointer;
  `;

  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-child">
          <div className="navbar-main">
            <div className="img">
              <img src={abhijth} alt="image" />
            </div>
            <div className="list">
              <Link to="/">Home</Link>
              <a href="resume.pdf" download="../../../public/resume.pdf">
                Resume
              </a>
              <Link to="/technology">Technologies</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="social">
              <a href="https://www.linkedin.com/in/abhijith-p-a29b81222">
                <Linkedin />
              </a>
            </div>
          </div>
          <div className="container">
            <div className="text">
              <p>ReactJS Developer</p>
              <h1>
                Hi, I am <span>Abhijith</span>, Welcome
              </h1>
            </div>
          </div>

          <div className="fade"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
