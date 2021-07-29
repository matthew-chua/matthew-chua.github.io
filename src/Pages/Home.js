import React from "react";

//css
import classes from "./Home.module.css";

//components
import LandingPage from "../Components/LandingPage";
import AboutMe from "../Components/AboutMe";
import Education from "../Components/Education";
import Hobbies from "../Components/Hobbies";
import Socials from "../Layout/Socials";
import ContactMe from "../Components/ContactMe";

export default function Home() {
  return (
    <div className={classes.root}>
      <div className={classes.containerWrapper}>
        <div className={classes.container} id="landing">
          <LandingPage />
        </div>

        <div className={classes.container} id="aboutme">
          <AboutMe />
        </div>

        <div className={classes.container}>
          <Education />
        </div>

        <div className={classes.container}>
          <Hobbies />
        </div>

        <div className={classes.container}>
          <ContactMe />
        </div>
      </div>
      <Socials />
      <button className={classes.FAB}>
        <a href="#landing" className={classes.emoji}>
          ☝️
        </a>
      </button>
    </div>
  );
}
