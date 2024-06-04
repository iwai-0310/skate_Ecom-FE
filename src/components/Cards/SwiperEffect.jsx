import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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
