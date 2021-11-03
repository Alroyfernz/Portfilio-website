import React from "react";
import { FaReact } from "react-icons/fa";
const Skills = () => {
  return (
    <div className="max-w-4xl mx-auto justify-center py-12" id="tech">
      <p className="text-2xl pt-4 text-black text-center md:text-4xl">
        Tech I use
      </p>
      <div className="flex flex-wrap justify-center pt-2">
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FaReact color="#2196f3" className="mx-auto text-4xl" />
          <p className="mt-6 mx-auto text-xl sm:text-2xl font-semibold">
            React
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FaReact color="#2196f3" className="mx-auto text-4xl" />
          <p className="mt-6 mx-auto text-xl sm:text-2xl font-semibold">
            Node.js
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FaReact color="#2196f3" className="mx-auto text-4xl" />
          <p className="mt-6 mx-auto text-xl sm:text-2xl font-semibold">
            React
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FaReact color="#2196f3" className="mx-auto text-4xl" />
          <p className="mt-6 mx-auto text-xl sm:text-2xl font-semibold">
            React
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FaReact color="#2196f3" className="mx-auto text-4xl" />
          <p className="mt-6 mx-auto text-xl sm:text-2xl font-semibold">
            React
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FaReact color="#2196f3" className="mx-auto text-4xl" />
          <p className="mt-6 mx-auto text-xl sm:text-2xl font-semibold">
            React
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
