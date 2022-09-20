import React from "react";
import Icon from "../assets/icon.png";
import Top3 from "../assets/top3.png";

import Mail from "../assets/icons/Mail";
import Download from "../assets/icons/Download";

export default function ProfileInfo() {
  return (
    <div className="mt-36">
      <div className="text-white text-2xl flex items-center font-bold font-beba">
        <img src={Icon} alt="m-icon" className="mr-2 h-8" /> ORIGINAL
      </div>
      <div className="mt-8 text-7xl text-white font-title">
        Matthew <br /> Chua
      </div>
      <div className="text-white text-xl font-bold mt-4 flex items-center">
        <img src={Top3} alt="top3" className="mr-2 h-8" />
        3rd Year CS Undergrad
      </div>
      <div className="text-white mt-4 text-lg">
        Currently @ UC Berkeley for exchange!
        <br />
        Enrolled in NTU's Renaissance Engineering Programme.
        <br />
        Passionate about all things tech, especially in the Web3 space!
      </div>
      <div className="mt-4 flex items-center">
        <button className="bg-white px-4 py-2 rounded-md font-bold transition ease-in-out hover:scale-110 duration-300">
          <a
            href="mailto:matthew-chua@berkeley.edu"
            className="flex items-center"
          >
            <Mail />
            Contact Me
          </a>
        </button>
        <button className="bg-[#4D5050] text-white px-4 py-2 rounded-md font-bold ml-4 transition ease-in-out hover:scale-110 duration-300">
          <a
            href="https://drive.google.com/file/d/10SsyUSfcr12aStJhqgb3JeO_qu3H3wTY/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="flex items-center"
          >
            <Download />
            Resume
          </a>
        </button>
      </div>
    </div>
  );
}
