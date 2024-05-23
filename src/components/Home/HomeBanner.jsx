import React from 'react'
import neonCross from "../../assets/neonCross.png";
import neonOrigin from "../../assets/neonOrigin.png";
import skateBoard from "../../assets/skateImage.png";

const HomeBanner = () => {
  return (
    //parent div starts here
    <div className="h-screen w-screen bg-black">
      {/* sub-parent containing the black box */}
      <div className=" bg-black flex items-center  justify-center"    >
        {/* using another parent div to fix the position acc to the rectange div */}
        <div className="w-4/6 h-1/2">
        {/* child element containing card data starts here */}
        <div className="w-full h-full mx-auto border-2 border-white rounded-3xl  bg-white/10 relative top-32 backdrop-blur-lg backdrop-filter shadow-lg z-10 ">
        <div className="absolute  -top-0 -right-16  hidden sm:block chandresh">
            <img src={skateBoard} alt="Home Banner skate boards image" className="object-cover object-center h-96 scale-150" />
          </div>
        </div>
        
         {/* <div className="isolate aspect-video w-96 rounded-xl bg-white/50 shadow-lg ring-1 ring-black/5"> */}
         <div className="absolute top-6 left-56   ">
            <img
              className="object-cover object-center h-64 first-letter:-z-10"
              src={neonCross}
              alt="Home Banner cross neon image"
            />
          </div>
          {/* div containing the neon cross for the home banner ends here*/}
          {/* div containg the neon origin for the home banner starts here */}
          <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2  ">
            <img
              className="object-cover object-center h-72 "
              src={neonOrigin}
              alt="Home Banner origin neon image"
            />
          </div></div>
          
         

        {/* child element containing card data ends here */}
      </div>
      {/* parent div ends here */}
    </div>
  )
}

export default HomeBanner