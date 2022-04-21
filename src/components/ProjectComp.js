import React from "react";
import Button from "./Button";
import "./card.css";
const ProjectComp = ({ title, img, desc, demo, code }) => {
  return (
    <div
      class=" card shadow-md rounded-md overflow-hidden shadow-xl"
      style={{ width: "100%", MaxHeight: "350px" }}
    >
      <img src={img} class="" alt="" />

      <div class="p-4">
        <h5 class="text-xl font-semibold mb-2 text-white">{title}</h5>

        <p class="mb-4 text-gray-300">{desc}</p>

        <div className="flex justify-between">
          <Button text="code" href={code} big={false} />
          <Button text="demo" href={demo} big={false} />
        </div>
      </div>
    </div>
  );
};

export default ProjectComp;
