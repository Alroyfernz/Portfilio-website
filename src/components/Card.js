import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
const Card = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p5">
        <div className="">
          <img
            src=""
            alt="profilePic"
            className="w-32 mx-auto shadow-xl rounded-full drop-shadow-sm"
          />
        </div>
        <div className="text-center mt-5">
          <p className="text-xl sm:text-2xl text-gray-900 font-semibold">
            Alroy Fernandes
          </p>
          <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
            Web/React Native Developer
          </p>
          <div className="flex align-center justify-center mt-4 pb-3">
            <a
              href=""
              className="text-xl  m-1 p-1 sm:m-2 sm:p-2  text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
            >
              {" "}
              <FaGithub />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href=""
              className="text-xl  m-1 p-1 sm:m-2 sm:p-2  text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
            >
              {" "}
              <FaLinkedin />
              <span className="sr-only">Linkedin</span>
            </a>
            <a
              href=""
              className="text-xl  m-1 p-1 sm:m-2 sm:p-2  text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
            >
              {" "}
              <FaTwitter />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
