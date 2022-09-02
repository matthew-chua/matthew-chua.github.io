import React from "react";
import Stack from "./Stack";

export default function TechStacks() {
  const stacks = [
    {
      name: "MERN",
      image: "assets/mern.png",
      proficiency: 80,
    },
    {
      name: "VueJS",
      image: "assets/mern.png",
      proficiency: 70,
    },
    {
      name: "TailwindCSS",
      image: "assets/mern.png",
      proficiency: 80,
    },
    {
      name: "Solidity",
      image: "assets/mern.png",
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
