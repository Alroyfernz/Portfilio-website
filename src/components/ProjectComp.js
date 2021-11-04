import React from "react";

const ProjectComp = () => {
  return (
    <div
      class="shadow-md rounded-md overflow-hidden shadow-xl"
      style={{ width: "100%" }}
    >
      <img
        src="https://mdbootstrap.com/img/new/standard/city/031.jpg"
        class=""
        alt=""
      />

      <div class="p-4">
        <h5 class="text-xl font-semibold mb-2">Card title</h5>

        <p class="mb-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis,
          consequuntur.
        </p>

        <div className="flex justify-between">
          <button
            className="
      bg-purple-500
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
            Code
          </button>

          <button
            className="
      bg-purple-500
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
            Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectComp;
