import React from "react"
import Skater1 from "../assets/Skater1.jpeg"
import Skater2 from "../assets/Skater2.jpeg"
import Skater3 from "../assets/Skater3.png"
import "../App.css"
const About = () => {
  return (
    <div className="bg-black text-white flex flex-col ">
      <div className=" grid grid-cols-2  mx-auto text-center w-full h-[30vh] m-10 bg">
        <div className=" flex justify-center items-center  ">
          <h2 className="text-5xl text-orange-400 font-semibold bg-transparent relative z-10 tracking-wider">
            WHEELS MADE TO ROLL
          </h2>
          <h1 className=" absolute text-9xl font-lora text-orange-100">
            ABOUT
          </h1>
        </div>

        <div className=" flex flex-col">
          <p className="text-lg mb-8 px-4 md:px-0 text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            vehicula urna eu mi convallis semper. Nulla facilisi. Curabitur
            auctor ligula a quam hendrerit, id facilisis lorem viverra. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Maiores
            doloribus temporibus, nobis aut corrupti labore accusamus sequi
            sapiente accusantium explicabo! Error delectus excepturi voluptatum
            sequi perferendis laborum repudiandae nostrum non?
          </p>
          <button className="bg-orange-500 w-[20vh] text-white px-4 py-2 rounded-3xl">
            Explore
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center w-full mt-20 ">
        <div className="  w-[500px] h-[50vh] flex justify-end">
          <img src={Skater1} alt="Skater 1" className="w-full " />
        </div>

        <div className="  w-[500px] h-[50vh] flex justify-start">
          <img src={Skater2} alt="Skater 2" className="w-full  " />
        </div>
      </div>

      <div className="grid grid-cols-2  mx-auto text-center w-full h-[100vh]   mt-40">
        <div className=" flex flex-col    w-full h-[30vh]  ">
          <div className=" flex mt-20 flex-col ">
            <h1 className="  text-5xl font-lora text-orange-100 tracking-wider">
              OUR SHOP
            </h1>
            <h2 className=" flex flex-col justify-start text-7xl text-orange-400 font-bold bg-transparent  ">
              <span>GEAR </span>
              <span className="">UP</span>
            </h2>
          </div>

          <div className=" flex flex-col ml-40 mt-20">
            <p className=" mb-8 px-4 md:px-0 text-left ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              vehicula urna eu mi convallis semper. Nulla facilisi. Curabitur
              auctor ligula a quam hendrerit, id facilisis lorem viverra. Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Maiores
              doloribus temporibus, nobis aut corrupti labore accusamus sequi
              sapiente accusantium explicabo! Error delectus excepturi
              voluptatum sequi perferendis laborum repudiandae nostrum non?
            </p>
            <button className="bg-orange-500 w-[20vh] text-white px-4 py-2 rounded-3xl">
              Explore
            </button>
          </div>
        </div>

        <div className="  w-[500px] h-[100vh] ml-[20vh]">
          <img
            src={Skater3}
            alt="Skater 1"
            className="w-[75vh] opacity-30  absolute"
          />
          <img src={Skater3} alt="Skater 1" className=" relative " />
        </div>
      </div>

      <div className="bg-orange-500 text-blue-900 py-8 w-[200vh] mx-auto px-10 my-[10vh]">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-0">
          <h2 className="text-2xl font-bold mb-4 md:mb-0">
            SIGN UP FOR SPECIAL OFFERS AND DISCOUNTS
          </h2>
          <form className="flex items-center w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="bg-transparent border-b border-blue-900 text-blue-900 mr-4 p-2 w-full md:w-auto focus:outline-none"
            />
            <button
              type="submit"
              className="text-blue-900 border-b border-blue-900 p-2 hover:text-blue-700 hover:border-blue-700 transition-colors duration-200"
            >
              Subscribe →
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default About
