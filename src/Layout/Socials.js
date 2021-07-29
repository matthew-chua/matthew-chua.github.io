import React from "react";

//assets
import github from "../Assets/github.png";
import email from "../Assets/email.png";
import linkedin from "../Assets/linkedin.png";

//css
import classes from "./Socials.module.css";

export default function Socials() {
  return (
    <div className={classes.wrapper}>
      <a className={classes.button} href="mailto:matt0046@e.ntu.edu.sg">
        <img src={email} className={classes.icon} alt="email" />
        <span>email me!</span>
      </a>

      <a
        className={classes.button}
        href="https://github.com/matthew-chua"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img src={github} className={classes.icon} alt="github" />
        <span>github</span>
      </a>

      <a
        className={classes.button}
        href="https://www.linkedin.com/in/matthew-chua-2226b4201"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img src={linkedin} className={classes.icon} alt="linked" />
        <span>linkedin</span>
      </a>
    </div>
  );
}
