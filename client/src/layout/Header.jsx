import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Link to="/">
        <img src={logo} alt="logo" className="w-28 object-contain" />
      </Link>
      <Link
        to="/create-post"
        className="font-inter font-medium text-xs bg-[#31304D] py-2 px-4 rounded-md text-[#B6BBC4] hover:bg-[#B6BBC4] hover:text-[#31304D]"
      >
        Create
      </Link>
    </>
  );
};

export default Header;
