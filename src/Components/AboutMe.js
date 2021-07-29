import React from "react";

//css
import classes from "./AboutMe.module.css";

//assets import
import intro from "../Assets/intromemoji.jpg";


export default function AboutMe() {

  return (
    <div className={classes.root}>
      <div className={classes.leftContainer}>
        <img src={intro} alt="intro" />
      </div>

      

      <div className={classes.rightContainer}>

        <div className={classes.text}>
        <h1 className={classes.title}>About me</h1>
        <h1 className={classes.content}>
          i’m a fullstack developer proficient in the MERN stack
          <br />
          <br />
          i do financial analysis / modelling as well
        </h1>
        </div>
      </div>
      
    </div>
  );
}
