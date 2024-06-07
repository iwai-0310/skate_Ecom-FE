import React from "react"
import {Swiper, SwiperSlide} from "swiper"
import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"

import {EffectCoverflow, Pagination, Navigation} from "swiper/modules"

import slide_image from "../../assets/neonCross.png"

const SwiperEffect = () => {
  return (
    <div className="container">
      <div className="heading">Slider Effect</div>
      <Swiper>
        <SwiperSlide>
          <img src={slide_image} alt="neon" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SwiperEffect;
