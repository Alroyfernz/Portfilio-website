import React from "react";
import { useState } from "react";
import { IoClose } from "react-icons/io";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-full">
      <div className="sm:mx-auto sm:flex sm:flex-row sm:justify-center sm:mb-10 sm:bg-transparent sm:static md:w-full md:h-10 h-3/6 bg-white flex rounded-xl w-11/12 top-10 fixed flex-col z-50 hidden">
        {/* <IoClose className="" /> */}
        <span className="text-2xl flex justify-center mt-10 text-gray-500 md:text-xl md:p-0 md:m-0 ">
          Home
        </span>

        <span className="text-2xl flex  p-5 justify-center  text-gray-500 md:ml-8 md:text-xl  md:p-0 md:m-0">
          Projects
        </span>
        <span className="text-2xl flex justify-center p-5 text-gray-500 md:ml-8 md:text-xl  md:p-0 md:m-0">
          Contact me
        </span>
      </div>
    </div>
  );
};

export default Navbar;
