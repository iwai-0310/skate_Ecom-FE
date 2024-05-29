import React from 'react'
import skateImage from "../../assets/pikaso_skateboard.png"

const SwiperCard1 = () => {
  return (
    
    <div className="card ">
          <div className="image"> <img src={skateImage} alt="skateboard-image" />
          </div>           
          <button className=" neon-border w-40 h-10 bg-red-600 flex justify-center items-center text-white border-2 rounded-lg border-white ">Explore More</button>    
        </div>
  )
}

export default SwiperCard1
