import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import AOS from "aos";
import "aos/dist/aos.css";
import { SiPostgresql, SiFlutter } from "react-icons/si";
import { FaReact, FaNodeJs, FaAngular, FaJava } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiTypescript,
  SiExpress,
} from "react-icons/si";
SwiperCore.use([Autoplay, Pagination, Navigation]);

AOS.init();
var x = window.matchMedia("(max-width: 500px)");
const Skills = () => {
  return (
    <div className="max-w-4xl mx-auto justify-center  py-6 md:py-12" id="tech">
      <div data-aos="fade-down" data-aos-duration="800" data-aos-delay="400">
        <p className="text-4xl pt-4 text-white text-center md:text-4xl font-bold">
          Skills
        </p>
      </div>
      <div className="flex   justify-center pt-2 flex flex-col rounded-md mt-4">
        {/* <Swiper
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
            <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white rounded-xl sm:w-52 mx-auto items-center justify-center">
              <FaReact color="#2196f3" className=" text-4xl" />
              <p className="mt-6  text-xl sm:text-2xl font-semibold">React</p>
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
            <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white rounded-xl sm:w-52 items-center justify-center mx-auto">
              <FaNodeJs color="#026e00" className=" text-4xl" />
              <p className="mt-6 text-xl sm:text-2xl font-semibold">Node.JS</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white rounded-xl sm:w-52 items-center justify-center mx-auto">
              <SiTailwindcss color="#2196f3" className="\ text-4xl" />
              <p className="mt-6  text-xl sm:text-xl font-semibold">
                Tailwind CSS
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white rounded-xl items-center justify-center sm:w-52 mx-auto">
              <SiMongodb color="#026e00" className=" text-4xl" />
              <p className="mt-6  text-xl sm:text-2xl font-semibold">MongoDB</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white rounded-xl sm:w-52 mx-auto items-center justify-center">
              <SiExpress className=" text-4xl" />
              <p className="mt-6  text-xl sm:text-2xl font-semibold">
                Express.JS
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white rounded-xl sm:w-52 mx-auto items-center justify-center">
              <SiTypescript color="#2196f3" className=" text-4xl" />
              <p className="mt-6  text-xl sm:text-2xl font-semibold">
                Typescript
              </p>
            </div>
          </SwiperSlide>
        </Swiper> */}

        {x.matches ? (
          <div>
            <div
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-delay="400"
            >
              <div className="flex justify-between flex-col md:flex-row md:mt-5">
                <div className="flex flex-col justify-start items-center p-3 mb-6 md:p-7">
                  <span className="text-2xl font-bold text-gray-300">
                    Front-end
                  </span>
                </div>
                <div
                  className="flex flex-wrap items-center
                justify-center md:flex-row"
                >
                  <div className="flex flex-col items-center justify-center m-2">
                    <SiTypescript color="#2196f3" className=" text-4xl" />

                    <p className="mt-3  text-lg md:text-xl font-semibold text-gray-300">
                      Typescript
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center md:ml-5 m-2">
                    <FaReact color="#2196f3" className=" text-4xl" />
                    <p className="mt-3  text-lg sm:text-xl font-semibold text-gray-300">
                      React/native
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center md:ml-5 m-2">
                    <SiFlutter color="#2196f3" className=" text-4xl" />
                    <p className="mt-3  text-lg sm:text-xl font-semibold text-gray-300">
                      Flutter
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center md:ml-5 m-2">
                    <SiTailwindcss color="#2196f3" className="\ text-4xl" />
                    <p className="mt-3  text-lg sm:text-xl font-semibold text-gray-300">
                      Tailwind CSS
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center md:ml-5 m-2 mb-0">
                    <SiJavascript color="#fcdc00" className=" text-4xl" />
                    <p className="mt-3  text-lg sm:text-xl font-semibold text-gray-300">
                      JavaScript
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
            >
              <div className="flex justify-between flex-col md:flex-row md:mt-10 mt-10">
                <div className="flex flex-col justify-start items-center md:p-7 p-3">
                  <span className="text-2xl font-bold text-gray-300">
                    Back-end
                  </span>
                </div>
                <div className="flex my-10 items-center justify-center flex-wrap md:flex-row">
                  <div className="flex flex-col items-center justify-center md:ml-5 m-3 md:mt-0">
                    <SiMongodb color="#026e00" className=" text-4xl" />
                    <p className="mt-3  text-lg sm:text-xl font-semibold text-gray-300">
                      MongoDB
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center md:ml-5 m-3 md:mt-0">
                    <FaJava color="#D0A384" className=" text-4xl" />
                    <p className="mt-3  text-lg sm:text-xl font-semibold text-gray-300">
                      Java
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center md:ml-5 m-3 md:mt-0">
                    <FaNodeJs color="#026e00" className=" text-4xl" />
                    <p className="mt-3 text-lg sm:text-xl font-semibold text-gray-300">
                      Node.JS
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center md:ml-5 m-3 md:mt-0">
                    <SiPostgresql color="#B4D6E0" className=" text-4xl" />
                    <p className="mt-3  text-lg sm:text-xl font-semibold text-gray-300">
                      Postgresql
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center md:ml-5 m-3 md:mt-0">
                    <img
                      src="/goprog.png"
                      width="68px"
                      height="20px"
                      alt=""
                      style={{ objectFit: "cover" }}
                    />
                    <p className="mt-4 text-lg sm:text-xl mt-1 font-semibold text-gray-300">
                      Go
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center md:ml-5 m-3 md:mt-0">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
                      width="36px"
                      height="40px"
                      alt=""
                    />
                    <p className="mt-3 text-lg sm:text-xl font-semibold text-gray-300">
                      Python
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="400"
            >
              <div className="flex justify-between flex-col md:flex-row md:mt-5">
                <div className="flex flex-col justify-start items-center p-3 mb-6 md:p-7">
                  <span className="text-2xl font-bold text-gray-300">
                    Front-end
                  </span>
                </div>
                <div className="flex  flex-row md:flex-row">
                  <div className="flex flex-col items-center justify-center mb-8">
                    <SiTypescript color="#2196f3" className=" text-4xl" />

                    <p className="mt-3  text-lg md:text-xl font-semibold text-gray-300">
                      Typescript
                    </p>
                  </div>

                  <div className="flex flex-col items-center justify-center md:ml-5 mb-8">
                    <FaReact color="#2196f3" className=" text-4xl" />
                    <p className="mt-3  text-lg sm:text-xl font-semibold text-gray-300">
                      React/native
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center md:ml-5 mb-8">
                    <SiFlutter color="#2196f3" className=" text-4xl" />
                    <p className="mt-3  text-lg sm:text-xl font-semibold text-gray-300">
                      Flutter
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center md:ml-5 mb-8">
                    <SiTailwindcss color="#2196f3" className="\ text-4xl" />
                    <p className="mt-3  text-lg sm:text-xl font-semibold text-gray-300">
                      Tailwind CSS
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center md:ml-5 mb-8">
                    <SiJavascript color="#fcdc00" className=" text-4xl" />
                    <p className="mt-3  text-lg sm:text-xl font-semibold text-gray-300">
                      JavaScript
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="400"
            >
              <div className="flex justify-between flex-col md:flex-row md:mt-10 mt-10">
                <div className="flex flex-col justify-start items-center md:p-7 p-3">
                  <span className="text-2xl font-bold text-gray-300">
                    Back-end
                  </span>
                </div>
                <div className="flex my-10 flex-col md:flex-row">
                  <div className="flex flex-col items-center justify-center md:ml-5 mt-11 md:mt-0">
                    <SiMongodb color="#026e00" className=" text-4xl" />
                    <p className="mt-3  text-lg sm:text-xl font-semibold text-gray-300">
                      MongoDB
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center md:ml-5 mt-11 md:mt-0">
                    <FaJava color="#D0A384" className=" text-4xl" />
                    <p className="mt-3  text-lg sm:text-xl font-semibold text-gray-300">
                      Java
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center md:ml-5 mt-11 md:mt-0">
                    <SiPostgresql color="#B4D6E0" className=" text-4xl" />
                    <p className="mt-3  text-lg sm:text-xl font-semibold text-gray-300">
                      Postgresql
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center md:ml-5  md:mt-0">
                    <img
                      src="/goprog.png"
                      width="68px"
                      height="20px"
                      alt=""
                      style={{ objectFit: "cover" }}
                    />
                    <p className="mt-4 text-lg sm:text-xl mt-1 font-semibold text-gray-300">
                      Go
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center md:ml-5 mt-11 md:mt-0">
                    <FaNodeJs color="#026e00" className=" text-4xl" />
                    <p className="mt-3 text-lg sm:text-xl font-semibold text-gray-300">
                      Node.JS
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center md:ml-5 mt-11 md:mt-0">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
                      width="36px"
                      height="40px"
                      alt=""
                    />
                    <p className="mt-3 text-lg sm:text-xl font-semibold text-gray-300">
                      Python
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;
