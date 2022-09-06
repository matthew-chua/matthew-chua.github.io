import React from "react";

export default function Project(props) {
  return (
    <div className="group w-1/6 transition ease-in-out hover:scale-110 duration-300 mr-4">
      <a href={props.link} target="_blank" rel="noreferrer">
        <div className="flex items-center">
          <div className="text-white  text-[6rem] group-hover:hidden transition-property-all ease-in-out duration-300">
            {props.index}
          </div>
          <div className="h-24 flex items-center">
            <img
              src={props.image}
              alt="mernImage"
              className="w-full rounded-md group-hover:rounded-b-none"
            />
          </div>
        </div>
        <div className="bg-[#181818] w-full h-28 rounded-md mt-4 hidden group-hover:block text-white text-xs py-4 px-2">
          <span className="font-bold">{props.name}</span>
          <br />
          <div className="mt-2">{props.desc}</div>
        </div>
      </a>
    </div>
  );
}
