import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="py-5 border-t-3/2">
      <div className="flex justify-center mt-4">
        <a
          href="https://github.com/Alroyfernz"
          className="text-xl  m-1 p-1 sm:m-2 sm:p-2  text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
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
      <div className="flex justify-center mt-4">
        <p className="text-black mb-4">
          Made with{" "}
          <span className="mr-2" role="link" aria-label="heart">
            💙
          </span>{" "}
          by{" "}
          <a
            href="mailto:me.alroyfernandes07518@gmail.com"
            className="text-blue-500 hover:underline"
          >
            Alroy Fernandes
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
