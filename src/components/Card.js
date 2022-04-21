import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./card.css";
const Card = () => {
  return (
    <div className="w-full" id="home">
      <div className="card flex flex-col justify-center max-w-xs mx-auto   rounded-xl p-5">
        <div className="">
          <img
            src="/portfolio.jpeg"
            alt="profilePic"
            className="w-32 h-32 object-cover mx-auto shadow-md rounded-full drop-shadow-sm"
          />
        </div>
        <div className="text-center mt-5">
          <p className="text-xl sm:text-2xl text-white font-semibold">
            Alroy Fernandes
          </p>
          <p className="text-sm sm:text-base text-gray-300 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
            Full Stack Developer
          </p>
          <div className="flex align-center justify-center mt-4 pb-3">
            <a
              href="https://github.com/Alroyfernz"
              className="text-xl  m-1 p-1 sm:m-2 sm:p-2 bg-gray-800   text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
            >
              {" "}
              <FaGithub />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/alroy-fernandes-119496214/"
              className="text-xl  m-1 p-1 sm:m-2 sm:p-2  text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
            >
              {" "}
              <FaLinkedin />
              <span className="sr-only">Linkedin</span>
            </a>
            <a
              href="https://twitter.com/AlroyFernande10"
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
