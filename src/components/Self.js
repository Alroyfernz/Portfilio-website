import React from "react";
import ProjectComp from "./ProjectComp";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { FreeMode, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
SwiperCore.use([Pagination, Navigation]);
const ProjectSectionStyle = styled.div`
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 50px;
    width: 50px;
    background-color: #fff;
    z-index: 10;
    right: 60px;
    left: auto;
    top: 0;
    transform: translateY(50%);
    color: var(--gray-1);
    border-radius: 8px;
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev {
    left: 0;
    margin-right: 20px;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 2rem;
  }
`;
const Self = () => {
  return (
    <ProjectSectionStyle>
      <span
        className="text-black  mx-auto flex  md:text-4xl justify-center text-2xl mb-8 font-bold"
        id="prod"
      >
        Projects
      </span>
      <div className="flex justify-center  items-center">
        <div className="w-2/3 h-100%">
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            navigation={true}
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
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
              <ProjectComp />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectComp />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectComp />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectComp />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </ProjectSectionStyle>
  );
};

export default Self;
