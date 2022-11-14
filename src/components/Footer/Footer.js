import { LinkedIn } from "@mui/icons-material";
import { styled } from "@mui/system";
import React from "react";
import abhijith from "../Images/abhijith.jpg";
import "./Footer.css";

const Footer = () => {
  const Linkedin = styled(LinkedIn)`
    width: 100px;
    height: 50px;
  `;
  return (
    <div className="parent">
      <div className="child">
        <div className="footer-img">
          <img src={abhijith} className="footer-image" alt="image" />
        </div>
        <div className="footer-icon">
          <a href="https://www.linkedin.com/in/abhijith-p-a29b81222">
            <Linkedin />
          </a>
        </div>
        <div className="copyright">copyright</div>
      </div>
    </div>
  );
};

export default Footer;
