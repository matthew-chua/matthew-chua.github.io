import React from "react";

//css
import classes from "./ContactMe.module.css";

//assets
import email from "../Assets/email.png";
import github from "../Assets/github.png";
import linkedin from "../Assets/linkedin.png";

export default function ContactMe() {

  
  return (
    <div className={classes.root}>
      <div className={classes.leftContainer}>
          <a href="mailto:matt0046@e.ntu.edu.sg">
          <img src={email} alt="email" className={classes.icon} />
          </a>

          <a href="https://github.com/matthew-chua" target="_blank" rel="noreferrer noopener">
          <img src={github} alt="github" className={classes.icon}/>
          </a>

          <a href="https://www.linkedin.com/in/matthew-chua-2226b4201" target="_blank" rel="noreferrer noopener">
          <img src={linkedin} alt="linkedin" className={classes.icon}/>
          </a>

      </div>
      
      <div className={classes.rightContainer}>
        <div className={classes.text}>
          <h1 className={classes.title}>Contact Me!</h1>
          <h1 className={classes.content}>
              
            feel free to reach out to me via 
            <br />
            <a href="mailto:matt0046@e.ntu.edu.sg" className={classes.link}>
            matt0046@e.ntu.edu.sg
            </a>
            <br />
            <br />
            check out my&nbsp;
            <a href="https://github.com/matthew-chua" target="_blank" rel="noreferrer noopener" className={classes.link}>
            github repo
            </a>
            <br/>
            and my&nbsp;
            <a href="https://www.linkedin.com/in/matthew-chua-2226b4201" target="_blank" rel="noreferrer noopener" className={classes.link}>
            linkedin profile&nbsp; 
            </a>
             as well!
          </h1>
        </div>
      </div>
    </div>
  );
}
