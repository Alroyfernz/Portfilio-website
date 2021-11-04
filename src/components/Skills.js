import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiTypescript,
  SiExpress,
} from "react-icons/si";
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Skills = () => {
  return (
    <div className="max-w-4xl mx-auto justify-center py-12" id="tech">
      <p className="text-2xl pt-4 text-black text-center md:text-4xl font-bold">
        Tech I use
      </p>
      <div className="flex  justify-center pt-2">
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            // when window width is >= 640px
            200: {
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
            },
            // when window width is >= 1200px
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            {" "}
            <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white rounded-xl sm:w-52 mx-auto">
              <FaReact color="#2196f3" className="mx-auto text-4xl" />
              <p className="mt-6 mx-auto text-xl sm:text-2xl font-semibold">
                React
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white rounded-xl sm:w-52 mx-auto items-center justify-center">
              <SiJavascript color="#fcdc00" className=" text-4xl" />
              <p className="mt-6  text-xl sm:text-2xl font-semibold">
                JavaScript
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white rounded-xl sm:w-52 mx-auto">
              <FaNodeJs color="#026e00" className="mx-auto text-4xl" />
              <p className="mt-6 mx-auto text-xl sm:text-2xl font-semibold">
                Node.JS
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white rounded-xl sm:w-52 mx-auto">
              <SiTailwindcss color="#2196f3" className="mx-auto text-4xl" />
              <p className="mt-6 mx-auto text-xl sm:text-xl font-semibold">
                Tailwind CSS
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white rounded-xl sm:w-52 mx-auto">
              <SiMongodb color="#026e00" className="mx-auto text-4xl" />
              <p className="mt-6 mx-auto text-xl sm:text-2xl font-semibold">
                MongoDB
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white rounded-xl sm:w-52 mx-auto">
              <SiExpress className="mx-auto text-4xl" />
              <p className="mt-6 mx-auto text-xl sm:text-2xl font-semibold">
                Express.JS
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white rounded-xl sm:w-52 mx-auto">
              <SiTypescript color="#2196f3" className="mx-auto text-4xl" />
              <p className="mt-6 mx-auto text-xl sm:text-2xl font-semibold">
                Typescript
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Skills;
