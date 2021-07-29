import React from "react";
import classes from "./Project.module.css";

//assets
import pic1 from "../Assets/pic1.jpg";
import pic2 from "../Assets/pic2.jpg";
import pic3 from "../Assets/pic3.jpg";

export default function Project() {


  return (
    <div className={classes.root}>
      <h1>Sorry, this page is still in progress... Please check back later!</h1>
      <div className={classes.container}>
        <div className={classes.card}>
          <div className={classes.imgBox}>
            <img src={pic1} className={classes.pic} />
          </div>

          <div className={classes.content}>
            <h2>Project 1</h2>
            <p className={classes.desc}>lorem ipsum blah blah blah</p>
            <button className={classes.button}>View Source Code</button>
          </div>
        </div>

        <div className={classes.card}>
          <div className={classes.imgBox}>
            <img src={pic2} className={classes.pic} />
          </div>

          <div className={classes.content}>
            <h2>Project 2</h2>
            <p className={classes.desc}>lorem ipsum blah blah blah</p>
            <button className={classes.button}>View Source Code</button>
          </div>
        </div>

        <div className={classes.card}>
          <div className={classes.imgBox}>
            <img src={pic3} className={classes.pic} />
          </div>

          <div className={classes.content}>
            <h2>Project 3</h2>
            <p className={classes.desc}>lorem ipsum blah blah blah</p>
            <button className={classes.button}>View Source Code</button>
          </div>
        </div>
      </div>
    </div>
  );
}
