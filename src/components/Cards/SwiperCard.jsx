import React from 'react'
import skateImage from "../../assets/pikaso_skateboard.png"

const SwiperCard = () => {
  return (
    
    <div className="card w-1/3 h-1/2  ">
          <div className="image"> <img src={skateImage} alt="skateboard-image" />
          </div>           
          <button className=" neon-border w-40 h-10 bg-red-600 flex justify-center items-center text-white border-2 rounded-lg border-white ">Explore More</button>    
        </div>
  )
}

export default SwiperCard
