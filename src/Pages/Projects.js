import React from 'react'
import Project from '../Components/Project';
import Socials from '../Layout/Socials';

//css
import classes from "./Projects.module.css";

export default function Projects() {
    return (
        <div className={classes.root}>
            <Project/>
            <Socials/>
        </div>
    )
}
