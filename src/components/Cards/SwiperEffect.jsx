import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import NeonCard from '../NeonCard';

import { EffectCoverflow,Pagination,Navigation } from 'swiper/modules';

import slide_image from "../../assets/neonCross.png"


const SwiperEffect = () => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={4}
        centeredSlides={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[ Pagination, Navigation]}
        className="mySwiper w-full h-1/2"
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
        < SwiperSlide>
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
