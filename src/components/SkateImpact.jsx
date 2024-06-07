import React from "react"
import SkateImpactImg1 from "../assets/SkateImpactImg1.png"
const SkateImpact = () => {
  return (
    <div className=" grid grid-cols-2 p-20 w-full h-[800px]">
      <div className="  flex flex-col bg-gradient-to-t  to-purple-900 from-pink-600 w-full  h-[730px]  p-10">
        {/* <div className=" text-white text-5xl mt-24 ml-12">Daly Casual</div> */}

        <div className="">
          <h2 className=" flex justify-center text-3xl font-bold font-mono  text-white">
            Daily
          </h2>
          <h1 className="flex justify-center text-9xl text-white ">Casual</h1>
        </div>
        <div className="  flex justify-end rotate-30 ">
          <img
            src={SkateImpactImg1}
            alt="SkateImpactImg1"
            class="h-[600px] w-[200px] animate-bounce "
          />

          {/* <img
            src={SkateImpactImg1}
            alt="SkateImpactImg1"
            class="animate second-image"
          /> */}
        </div>
      </div>

      <div className="text-white w-full bg-black p-10 text-center  h-[730px]">
        <h1 className=" text-purple-900  text-3xl font-bold mb-4">
          The Evolution and Impact of Skateboarding
        </h1>
        <p className="text-lg">
          The skateboard, with its wooden deck, trucks, and wheels, serves as
          both a tool and an artistic canvas, often customized with unique
          graphics. More than just physical prowess, skateboarding fosters a
          deep sense of community and individuality, connecting people worldwide
          through their shared love for innovation and the thrill of the ride.
        </p>
      </div>
    </div>
  )
}

export default SkateImpact
