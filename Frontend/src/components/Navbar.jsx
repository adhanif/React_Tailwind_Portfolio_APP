import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.svg";
export default function Navbar() {
  return (
    <>
      <nav className="relative container  mx-auto p-8 text-black">
        {/* Flex container  */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="pt-2">
            <img src={logo} alt="" />
          </div>
          <div className="hidden md:flex space-x-6">
            <NavLink
              to="/"
              className="hover:text-red-900 hover:scale-110 font-bold text-xl"
            >
              Home
            </NavLink>
            <NavLink
              to="/aboutme"
              className="hover:text-red-900 hover:scale-110 font-bold text-xl"
            >
              About me
            </NavLink>
            <NavLink
              to="/skills"
              className="hover:text-red-900 hover:scale-110 font-bold text-xl"
            >
              Skills
            </NavLink>
            <NavLink
              to="/contact"
              className="hover:text-red-900 hover:scale-110 font-bold text-xl"
            >
              Contact
            </NavLink>
          </div>

          <button className=" hidden md:block p-3 w-32 pt-2   text-white font-medium bg-red-900 rounded-full  hover:bg-brightRedLight  hover:scale-110 ">
            {" "}
            Contact me
          </button>
        </div>
      </nav>
    </>
  );
}
