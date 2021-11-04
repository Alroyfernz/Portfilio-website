import React from "react";
import { HiArrowRight } from "react-icons/hi";
const Contact = () => {
  return (
    <div className="max-w-lg w-full text-center py-36 pb-10 mx-auto">
      <h1 className="text-4xl">Interesting in woking together</h1>
      <a href="mailto:me.alroyfernandes7518@gmail.com">
        <span className="mt-10 inline-block w-auto bg-black font-display text-white text-base md:text-xl py-4 px-7 cursor-pointer">
          <div className="flex flex-row items-center">
            <span className="mr-3">Get in touch</span>
            <HiArrowRight color="#fff" />
          </div>
        </span>
      </a>
    </div>
  );
};

export default Contact;
