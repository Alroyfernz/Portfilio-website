import React from "react";

const ProjectComp = ({ title, img, desc, demo, code }) => {
  return (
    <div
      class="shadow-md rounded-md overflow-hidden shadow-xl"
      style={{ width: "100%", MaxHeight: "350px" }}
    >
      <img src={img} class="" alt="" />

      <div class="p-4">
        <h5 class="text-xl font-semibold mb-2">{title}</h5>

        <p class="mb-4">{desc}</p>

        <div className="flex justify-between">
          <button
            className="
            bg-gray-400
      text-white
      active:bg-purple-600
      font-bold
      uppercase
      text-xs
      px-4
      py-2
      rounded
      shadow
      hover:shadow-md
      outline-none
      focus:outline-none
      mr-1
      mb-1
      ease-linear
      transition-all
      duration-150
    "
            type="button"
          >
            <a href={code} target="blank">
              Code
            </a>
          </button>

          <button
            className="
      bg-gray-400
      text-white
      active:bg-purple-600
      font-bold
      uppercase
      text-xs
      px-4
      py-2
      rounded
      shadow
      hover:shadow-md
      outline-none
      focus:outline-none
      mr-1
      mb-1
      ease-linear
      transition-all
      duration-150
    "
            type="button"
          >
            <a href={demo} target="blank">
              Demo
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectComp;
