import React from "react";
import { FaReact } from "react-icons/fa";
const SkillComp = ({ name }) => {
  return (
    <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white rounded-xl sm:w-52 mx-auto">
      <FaReact color="#2196f3" className="mx-auto text-4xl" />
      <p className="mt-6 mx-auto text-xl sm:text-2xl font-semibold">React</p>
    </div>
  );
};

export default SkillComp;
