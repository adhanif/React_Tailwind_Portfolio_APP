import React from "react";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav className="relative container  mx-auto p-6 text-black">
        {/* Flex container  */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="pt-2">
            <img src="src/img/logo.svg" alt="" />
          </div>
          <div className="hidden md:flex space-x-6">
            <NavLink to="#" className="hover:text-darkGrayishBlue">
              Home
            </NavLink>
            <NavLink to="#" className="hover:text-darkGrayishBlue">
              About me
            </NavLink>
            <NavLink to="#" className="hover:text-darkGrayishBlue">
              Skills
            </NavLink>
            <NavLink to="#" className="hover:text-darkGrayishBlue">
              Contatc me
            </NavLink>
          </div>
          <button className="hidden md:block   p-2  text-white bg-red-900 rounded-full text-center hover:bg-brightRedLight">
            {" "}
            Contact me
          </button>
        </div>
      </nav>
    </>
  );
}
