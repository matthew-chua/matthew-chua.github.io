import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import ProfileInfo from "./ProfileInfo";
import Projects from "./Projects";
import TechStacks from "./TechStacks";

export default function LandingPage() {  
  return (
    <div>
      <div className="bg-[url('assets/bg.gif')] w-full h-screen bg-cover bg-no-repeat py-8 px-20 relative ">
        <NavBar />
        <ProfileInfo />
        <TechStacks />
      </div>
      <div className="bg-black py-8 px-20 h-2/6">
        <Projects />
        <Footer />
      </div>
    </div>
  );
}
