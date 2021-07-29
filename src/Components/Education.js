import React from "react";

//css
import classes from "./Education.module.css";

//assets
import computer from "../Assets/computer.jpg";



export default function Education() {
  return (
    <div className={classes.root}>
      <div className={classes.leftContainer}>
        <img src={computer} alt="computer" className={classes.pic}/>
      </div>
      <div className={classes.rightContainer}>
        <div className={classes.text}>
        <h1 className={classes.title}>education</h1>
        <h1 className={classes.content}>
          i’m currently a year 2 renaissance engineering undergraduate @ ntu
          <br />
          <br />
          i’ll be graduating with BSc (computer science) & MSc (technology
          management) in 2025
        </h1>
        </div>
      </div>
    </div>
  );
}
