import React from "react";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import ScrollIntoView from "react-scroll-into-view";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-full" id="top">
      {/* <ScrollIntoView selector="#top">
        <BiArrowToTop
          className="fixed bottom-10 right-5 text-4xl text-gray-500 sm:hidden"
          onClick={() => {
            setToggle(!toggle);
          }}
        />
      </ScrollIntoView> */}
      <AiOutlineDoubleLeft
        className={
          toggle === true
            ? " fixed top-5  right-5 text-4xl text-gray-500 sm:hidden  hidden"
            : "top-5 fixed right-5 text-4xl text-gray-500 sm:hidden  "
        }
        onClick={() => {
          setToggle(!toggle);
        }}
      />
      <div
        className={
          toggle === false
            ? "sm:mx-auto sm:flex sm:flex-row sm:justify-center sm:mb-10 sm:bg-transparent sm:static md:w-full md:h-10 h-3/6 bg-white flex rounded-xl w-11/12 top-10 fixed flex-col z-50 hidden"
            : "sm:mx-auto sm:flex sm:flex-row sm:justify-center sm:mb-10 sm:bg-transparent sm:static md:w-full md:h-10 h-3/6 bg-white flex rounded-xl w-11/12 top-10 fixed flex-col z-50 "
        }
      >
        {/* <IoClose className="" /> */}
        <CgClose
          className="absolute right-10 top-6 text-2xl text-gray-500 sm:hidden"
          onClick={() => {
            setToggle(!toggle);
          }}
        />
        <ScrollIntoView selector="home">
          <span className="text-2xl flex justify-center mt-10 text-gray-500 md:text-xl md:p-0 md:m-0 ">
            Home
          </span>
        </ScrollIntoView>
        <ScrollIntoView selector="prod">
          <span className="text-2xl flex mt-5 p-5 justify-center  text-gray-500 md:ml-8 md:text-xl  md:p-0 md:m-0">
            Projects
          </span>
        </ScrollIntoView>
        <span className="text-2xl flex justify-center p-5 text-gray-500 md:ml-8 md:text-xl  md:p-0 md:m-0">
          Contact me
        </span>
      </div>
    </div>
  );
};

export default Navbar;
