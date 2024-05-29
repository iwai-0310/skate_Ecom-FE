import React from "react";
import logo from "../assets/logo.png"

const Header = () => {
  return (
    <header>
      <div className="navbar">
        <img className="skateboard_home" src={logo} alt="Skateboard" />
      </div>
      <ul className="nav-menu">
        <li>
            Shop
        </li>
        <li>  
            About  
        </li>
        <li>
            Contact Us
        </li>
        <li>
            Leftside Bar
        </li>
      </ul>
    </header>

  );
};

export default Header;
