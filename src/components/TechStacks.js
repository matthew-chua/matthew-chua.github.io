import React from "react";
import Stack from "./Stack";
import mern from "../assets/mern.png"
import vue from "../assets/vue.png"
import tw from "../assets/tw.jpg"
import sol from "../assets/sol.png"

export default function TechStacks() {
  const stacks = [
    {
      name: "MERN",
      image: mern,
      proficiency: 80,
    },
    {
      name: "VueJS",
      image: vue,
      proficiency: 70,
    },
    {
      name: "TailwindCSS",
      image: tw,
      proficiency: 80,
    },
    {
      name: "Solidity",
      image: sol,
      proficiency: 70,
    },
  ];
  return (
    <div className="mt-8">
      <div className="text-white font-bold text-lg">My Tech Stack</div>
      <div className="mt-8 flex">
        {stacks.map((stack) => (
          <Stack
            name={stack.name}
            image={stack.image}
            proficiency={stack.proficiency}
          />
        ))}
      </div>
    </div>
  );
}
