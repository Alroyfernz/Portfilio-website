import React from "react";
// import { FaChevronDown } from "react-icons/fa";
// import ScrollIntoView from "react-scroll-into-view";
import "./card.css";
const About = () => {
  return (
    <div className="max-w-4xl mt-12 mx-auto flex justify-center items-center flex-col">
      <p className="text-2xl text-white md:text-4xl font-bold text-center">
        Hey 👋
      </p>
      <p className="text-base text-gray-300 sm:text-xl  text-center leading-relaxed mt-4 mb-4">
        I am an 20-year-old from Goa and I am currently a freshman studying
        Computer Science at Goa College Of Engineering. A Developer by passion
        who builds stuffs on the web and mobile.
      </p>
      <button class=" card hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded mt-3 ">
        <a href="/AlroyResume.pdf" download>
          {" "}
          {/* style={{ textDecoration: "none" }} */}
          Get CV
        </a>
      </button>

      {/* <ScrollIntoView selector="#prod">
        <div className="mx-auto p-10 ">
          <FaChevronDown className="animate-bounce mx-auto text-3xl text-blue-500" />
        </div>
      </ScrollIntoView> */}
    </div>
  );
};

export default About;
