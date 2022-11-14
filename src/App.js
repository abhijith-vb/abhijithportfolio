import React from "react";
import { BrowserRouter, Router, Switch, Route } from "react-router-dom";
import About from "./components/Aboutme/About";
import Contact from "./components/Contactme/Contact";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Home/Profile";
import Projects from "./components/Technology/Technology";
import ContactPage from "./Pages/ContactPage";
import Home from "./Pages/Home";
import ResumePage from "./Pages/ResumePage";
import TechnologyPage from "./Pages/TechnologyPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/technology">
            <TechnologyPage />
          </Route>
          <Route exact path="/contact">
            <ContactPage />
          </Route>
          {/* <Route exact path="/resume">
            <ResumePage />
          </Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
