import React from "react"
import SkateImpactImg1 from "../assets/SkateImpactImg1.png"
const SkateImpact = () => {
  return (
    <div className=" flex items-center justify-center min-h-screen  bg-black p-1">
      <div className=" flex flex-col md:flex-row items-center max-w-7xl ">
        <div className=" bg-gradient-to-t  to-purple-900 from-pink-600 w-full md:w-2/3 h-96 mb-8 md:mb-0 md:mr-8">
          {/* <div className=" text-white text-5xl mt-24 ml-12">Daly Casual</div> */}
          
          <div class="flex justify-center items-center h-20 w-20">
            <img
              src={SkateImpactImg1}
              alt="SkateImpactImg1"
              class="animate first-image"
            />
            <img
              src={SkateImpactImg1}
              alt="SkateImpactImg1"
              class="animate second-image"
            />
          </div>
        </div>
        <div className="text-white w-full md:w-1/2">
          <h1 className=" text-purple-900  text-3xl font-bold mb-4">
            The Evolution and Impact of Skateboarding
          </h1>
          <p className="text-lg">
            The skateboard, with its wooden deck, trucks, and wheels, serves as
            both a tool and an artistic canvas, often customized with unique
            graphics. More than just physical prowess, skateboarding fosters a
            deep sense of community and individuality, connecting people
            worldwide through their shared love for innovation and the thrill of
            the ride.
          </p>
        </div>
        
      </div>
    </div>
  )
}

export default SkateImpact
