import React from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon, BeakerIcon } from "@heroicons/react/24/solid";
export default function Navbar() {
  return (
    <>
      <nav className="relative container  mx-auto p-8 text-black">
        {/* Flex container  */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="pt-2">
            <img src="src/img/logo.svg" alt="" />
          </div>

          {/* Menu icons  */}
          <div className="absolute right-8 hidden lg:flex">
            <Bars3Icon className="h-7 w-7 text-black" />
          </div>

          <div className="hidden md:flex space-x-6">
            <NavLink
              to="#"
              className="hover:text-red-900 hover:scale-110 font-bold text-xl"
            >
              Home
            </NavLink>
            <NavLink
              to="#"
              className="hover:text-red-900 hover:scale-110 font-bold text-xl"
            >
              About me
            </NavLink>
            <NavLink
              to="#"
              className="hover:text-red-900 hover:scale-110 font-bold text-xl"
            >
              Skills
            </NavLink>
            <NavLink
              to="#"
              className="hover:text-red-900 hover:scale-110 font-bold text-xl"
            >
              Contatc me
            </NavLink>
          </div>
          <button className="hidden md:block   p-2  text-white bg-red-900 rounded-full text-center hover:bg-brightRedLigh focus:outline-none hover:scale-110">
            {" "}
            Contact me
          </button>
        </div>
      </nav>
    </>
  );
}
