import React from "react";
import About from "../components/Aboutme/About";
import Contact from "../components/Contactme/Contact";
import Footer from "../components/Footer/Footer";
import Profile from "../components/Home/Profile";
import Projects from "../components/Technology/Technology";

const Home = () => {
  return (
    <div>
      {" "}
      <Profile />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
