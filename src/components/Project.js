import React from "react";
import MERN from "../assets/mern.png";

export default function Project(props) {
  return (
    <div className="group w-1/6 rounded-md transition ease-in-out hover:scale-125 duration-300">
      <a href={props.link} target="_blank" rel="noreferrer">
        <div className="flex">
          <div className="text-white text-[6rem] group-hover:hidden">
            {props.index}
          </div>
          <div className=" h-32 bg-white mr-8 ">
            <img src={MERN} alt="mernImage" />
          </div>
        </div>
        <div className="bg-[#181818] mr-4 hidden group-hover:block text-white text-xs py-4 px-2">
          <span className="font-bold">{props.name}</span>
          <br />
          <div className="mt-2">{props.desc}</div>
        </div>
      </a>
    </div>
  );
}
