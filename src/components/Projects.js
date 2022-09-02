import React from "react";
import Project from "./Project";

export default function Projects() {
  const projects = [
    {
      index: 1,
      name: "NiftyZone",
      image: "assets/mern.png",
      link: "https://google.com",
      desc: "A NFT marketplace built using NextJS, for artists to mint and sell their artwork.",
    },
    {
      index: 2,
      name: "Summoners' Tavern",
      image: "assets/mern.png",
      link: "https://google.com",
      desc: "A NFT collection on the Solana blockchain.",
    },
    {
      index: 3,
      name: "Datepicker",
      image: "assets/mern.png",
      link: "https://google.com",
      desc: "A versatile datepicker built with Vue3 and TailwindCSS.",
    },
    {
      index: 4,
      name: "YummyTummy",
      image: "assets/mern.png",
      link: "https://google.com",
      desc: "A restaurant search app that aggregates the location of users to reccomend places to eat.",
    },
  ];

  return (
    <div className="my-12">
      <div className="text-white text-lg font-bold">Personal Projects</div>
      <div className="flex mt-8">
        {projects.map((project) => (
          <Project
            index={project.index}
            name={project.name}
            image={project.image}
            link={project.link}
            desc={project.desc}
          />
        ))}
      </div>
    </div>
  );
}
