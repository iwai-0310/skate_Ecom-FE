import React from "react";
import neonCross from "../../assets/neonCross.png";
import neonOrigin from "../../assets/neonOrigin.png";
import skateBoard from "../../assets/skateImage.png";

const Home = () => {
  return (
    //parent div starts here
    <div className="h-full w-full">
      {/* sub-parent containing the black box */}
      <div className="w-full h-full bg-black flex items-center flex-col">
        {/* child element containing card data starts here */}
        <div className="w-4/6 h-1/2 mx-auto border-2 border-white rounded-3xl  bg-transparent relative top-32">
         <div className="absolute -top-24 -left-32 ">
            <img
              className="object-cover object-center h-64"
              src={neonCross}
              alt="Home Banner cross neon image"
            />
          </div>
          {/* div containing the neon cross for the home banner ends here*/}
          {/* div containg the neon origin for the home banner starts here */}
          <div className="absolute -bottom-36 left-1/2 transform -translate-x-1/2">
            <img
              className="object-cover object-center h-64 "
              src={neonOrigin}
              alt="Home Banner origin neon image"
            />
          </div>
          <div className="absolute  -top-4 -right-16">
            <img src={skateBoard} alt="Home Banner skate boards image" className="object-cover object-center h-96 scale-150" />
          </div>
        </div>
         {/* div containing the neon cross for the home banner starts here */}
          
          {/* div containing the neon origin for the home banner ends here */}

        {/* child element containing card data ends here */}
      </div>
      {/* parent div ends here */}
    </div>
  );
};

export default Home;
