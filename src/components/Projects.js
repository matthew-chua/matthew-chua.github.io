import React from "react";
import Project from "./Project";

import Nifty from "../assets/nifty.png";
import YT from "../assets/yt.png"
import ST from "../assets/ST.png"
import datepicker from "../assets/datepicker.png"

export default function Projects() {
  const projects = [
    {
      index: 1,
      name: "NiftyZone",
      image: Nifty,
      link: "https://market.niftyzone.com/",
      desc: "A NFT marketplace built using NextJS, for artists to mint and sell their artwork.",
    },
    {
      index: 2,
      name: "Summoners' Tavern",
      image: ST,
      link: "https://github.com/matthew-chua/SummonersTavernWeb",
      desc: "A NFT collection on the Solana blockchain.",
    },
    {
      index: 3,
      name: "Datepicker",
      image: datepicker,
      link: "https://github.com/matthew-chua/VueDatePicker",
      desc: "A versatile datepicker built with Vue3 and TailwindCSS.",
    },
    {
      index: 4,
      name: "YummyTummy",
      image: YT,
      link: "https://github.com/matthew-chua/YummyTummy",
      desc: "A restaurant search app that aggregates the location of users to recommend places to eat.",
    },
  ];

  return (
    <div className="my-12 h-64">
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
