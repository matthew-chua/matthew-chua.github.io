import React from "react";
import Logo from "../assets/logo.png";

export default function NavBar() {
  return (
    <div className="flex items-center text-white font-bold"> 
      <img src={Logo} alt="matt-logo" />
      <div className="ml-8">Software Engineer</div>
      <div className="ml-8">Product</div>
      <div className="ml-8">Web3</div>
      <div className="flex-grow" />
      <a
        href="https://github.com/matthew-chua"
        target="_blank"
        rel="noreferrer"
        className="ml-8 hover:underline underline-offset-2"
      >
        GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/matthew-chua-wei-cheng/"
        target="_blank"
        rel="noreferrer"
        className="ml-8 hover:underline underline-offset-2"
      >
        LinkedIn
      </a>
    </div>
  );
}
