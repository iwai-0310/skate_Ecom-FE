import React from "react";
import logo from "../assets/logo.png";
import instagram_icon from "../assets/instagram_icon.png";
import pintester_icon from "../assets/pintester_icon.png";
import whatsapp_icon from "../assets/whatsapp_icon.png";
import fb_icon from "../assets/facebook.png";

const Footer = () => {
  return (
    <footer className="bg-violet-600     text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            {/* <h1 className="text-2xl font-bold">Your Logo</h1> */}
            <img className="px-10 " src={logo} alt="" />
          </div>
          <div className="flex space-x-4 mb-4 md:mb-0 gap-20">
            <div className="container">
              <a
                href="#"
                className="text-gray-400 text-lg  transition-colors hover:text-white"
              >
                Company
              </a>
              <div className="flex flex-col mt-10 gap-4">
                <div>Home</div>
                <div>Contact Us</div>
                <div>Shop</div>
                <div>About Us</div>
              </div>
            </div>

            <div className="container">
              <a
                href="#"
                className="text-gray-400  transition-colors hover:text-white text-lg"
              >
                Useful Links
              </a>
              <div className="flex flex-col mt-10 gap-4">
                <div>Home</div>
                <div>Contact Us</div>
                <div>Shop</div>
                <div>About Us</div>
              </div>
            </div>
<div className="container">
              <a
                href="#"
                className="text-gray-400  transition-colors hover:text-white text-lg"
              >
                Social
              </a>
              <div className="flex flex-wrap gap-4 mt-10 justify-center">
                <img src={instagram_icon} alt="" className="w-8 h-auto" />
                <img src={whatsapp_icon} alt="" className="w-8 h-auto" />
                <img src={pintester_icon} alt="" className="w-8 h-auto" />
                <img src={fb_icon} alt="" className="w-8 h-auto" />
                <img src={whatsapp_icon} alt="" className="w-8 h-auto" />
                <img src={pintester_icon} alt="" className="w-8 h-auto" />
              </div>
            </div>
          </div>
          <div>
            <p className="text-gray-400">
              &copy; 2024 Your Company. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;