import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import NeonCard from "../NeonCard";

//import swiper styles
import "../../App.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import SwiperCard from "./SwiperCard";

const SwiperEffect = () => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={4}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper "
      >
        <SwiperSlide>
          {/* <SwiperCard /> */}
          <div className="h-full  border-2 rounded-2xl ">
          <NeonCard/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <SwiperCard /> */}
          <div className="h-full  border-2 rounded-2xl ">
          <NeonCard/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <SwiperCard /> */}
          <div className="h-full  border-2 rounded-2xl ">
          <NeonCard/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <SwiperCard /> */}
          <div className="h-full  border-2 rounded-2xl ">
          <NeonCard/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <SwiperCard /> */}
          <div className="h-full  border-2 rounded-2xl ">
          <NeonCard/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <SwiperCard /> */}
          <div className="h-full  border-2 rounded-2xl ">
          <NeonCard/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <SwiperCard /> */}
          <div className="h-full  border-2 rounded-2xl ">
          <NeonCard/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <SwiperCard /> */}
          <div className="h-full  border-2 rounded-2xl ">
          <NeonCard/>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperEffect;
