import React from "react";

//css
import classes from "./Hobbies.module.css";

//assets
import smiley from "../Assets/smiley.jpg";

export default function Hobbies() {
  return (
    <div className={classes.root}>
      <div className={classes.leftContainer}>
        <img src={smiley} alt="smiley" className={classes.pic}/>
      </div>
      <div className={classes.rightContainer}>
        <div className={classes.text}>
          <h1 className={classes.title}>hobbies</h1>
          <h1 className={classes.content}>
            i love playing tennis and working out in the gym in my spare time
            <br />
            <br />
            i also enjoy learning about blockchain technology / cryptonomics / stocks
          </h1>
        </div>
      </div>
    </div>
  );
}
