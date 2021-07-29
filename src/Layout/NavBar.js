import React from "react";
import { NavLink } from "react-router-dom";
// import { useState } from "react";

//css
import classes from "./NavBar.module.css";

//assets
import resume from "../Assets/Resume PDF.pdf";
// import MenuIcon from '@material-ui/icons/Menu';

export default function NavBar() {


  // const [openMenu, setOpenMenu] = useState(false);
  // const toggleMenu = () => {
  //   setOpenMenu(!openMenu);
  // }
  return (
    <div className={classes.root}>

      {/* <div className={classes.toggle}>
      <MenuIcon onClick={toggleMenu}></MenuIcon>
      </div>

{openMenu && <div className={classes.mobileLinkWrapper}>
        <NavLink to="/" className={classes.mobileLink} activeClassName={classes.activeMobileLink}>Home</NavLink>
        <NavLink to="/projects" className={classes.mobileLink} activeClassName={classes.activeMobileLink}>Projects</NavLink>
        <a href={resume}
        target="_blank"
        rel="noreferrer noopener"className={classes.mobileLink}>Resume</a>
      </div>} */}
      
      
      <NavLink to="/" className={classes.links} activeClassName={classes.activeLinks} exact>
        home
      </NavLink>
      
      <NavLink to="/projects" className={classes.links} activeClassName={classes.activeLinks} exact>
        projects
      </NavLink>
      
      <a
        href={resume}
        target="_blank"
        rel="noreferrer noopener"
        className={classes.links}
      >
        resume
      </a>
    
    </div>
  );
}
