import React from "react";
import MERN from "../assets/mern.png";
export default function Stack(props) {
  return (
    <div className="group w-1/6 rounded-md transition ease-in-out hover:scale-125 duration-300">
      <div className=" h-32 bg-white mr-4 ">
        <img src={MERN} alt="mernImage" />
      </div>
      <div className="bg-[#181818] mr-8 hidden group-hover:block text-white text-xs p-4">
        <span className="font-bold">{props.name}</span>
        <br />
        <div className="mt-4">Proficiency</div>
        <div className="flex mt-2">
          80%
        </div>
      </div>
    </div>
  );
}
