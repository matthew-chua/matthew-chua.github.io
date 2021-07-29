import React from 'react'

//css
import classes from "./LandingPage.module.css";

//assets
import arrow from "../Assets/arrow.gif";

//gasp
import gsap from "gsap";

export default function LandingPage() {

    document.body.addEventListener("mousemove", evt => {
        const mouseX = evt.clientX;
        const mouseY = evt.clientY;
        
        gsap.set(".cursor", {
          x: mouseX,
          y: mouseY
        })
        
        gsap.to(".shape", {
          x: mouseX,
          y: mouseY,
          stagger: -0.1
        })
      })

    return (
        <div className={classes.root}>

            <div className={classes.title}>
            <h1 className={classes.title}>hi there! i'm matthew!</h1>
            </div>

            <div className={classes.text}>
            <h3 className={classes.text}>scroll down to learn more about me...</h3>
            </div>

            <div>
              <a href="#aboutme">
            <img src={arrow} alt="arrow" className={classes.arrow} />
            </a>
            </div>
        </div>
    )
}
