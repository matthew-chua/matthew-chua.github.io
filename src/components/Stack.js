import React from "react";

export default function Stack(props) {
  const progressBarWidth = {
    70: "w-32 bg-red-500 h-0.5 mt-2 rounded-sm",
    80: "w-40 bg-red-500 h-0.5 mt-2 rounded-sm",
  };
  return (
    <div className="group w-1/6 h-auto mr-8 rounded-md overflow-hidden transition ease-in-out hover:scale-125 duration-300">
      <div className="h-32 bg-white flex justify-center">
        <img src={props.image} alt="mernImage" className="h-32" />
      </div>
      <div className="bg-[#181818] w-full hidden group-hover:block text-white text-xs p-4">
        <span className="font-bold">{props.name}</span>
        <br />
        <div className="mt-4">Proficiency</div>
        <div className="flex mt-2">{props.proficiency}%</div>
        <div className={progressBarWidth[props.proficiency]} />
      </div>
    </div>
  );
}
